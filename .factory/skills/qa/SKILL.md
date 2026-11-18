---
name: qa-orchestrator
description: >
  Run functional QA for the jhd-astro website (jasonholtdigital.com). Reads the git diff,
  routes to the qa-web sub-skill when site code changed, tests the PR branch's local
  production build as desktop and phone visitors through droid-control, and writes a
  report to qa-results/report.md. Use when testing a PR or smoke testing a local build.
  Not the conversational bug-filing `qa` skill in .agents/skills/qa.
---

# QA Orchestrator

**Scope: this skill performs manual, functional QA only. It verifies that the site works by using it as a visitor would, in a browser and with HTTP requests. Do not run or report on CI checks, linting, `astro check`, Vitest, or any other static analysis or test suite. Separate workflows handle those.**

## Step 1: Load configuration

Read `.factory/skills/qa/config.yaml` for environments, personas, the app definition, and evidence settings.

Before interacting with the site, invoke the `droid-control` skill and follow its routing tables:

- Load the web (agent-browser) driver route for the `web` app.
- Use the Capture and Verify stages on every run.
- Load Compose only when both `video_evidence: true` and `droid_control.compose: true` in config.yaml.
- When either value is false, never invoke Compose. Keep raw captures and text snapshots as evidence.

Read `video_evidence` and `droid_control.compose` from config.yaml on every run. Do not rely on a value remembered from an earlier run.

## Step 2: Determine the target

Use `default_target` (`local`) unless the user names another environment.

This repository has no per-PR preview deployments. The only valid target for PR QA is a production build of the checked-out branch served locally:

- In CI, the workflow has already run `npm ci`, `npm run build`, and started `npm run preview` on `http://127.0.0.1:4321`. It passes that URL as `QA_BASE_URL`. Use it and do not start a second server.
- Outside CI, follow the "Testing Target" section of `qa-web` to build and serve locally.
- Never test a PR against `https://jasonholtdigital.com`. Production runs different code than the branch, so results there say nothing about the PR. If the local build cannot be served, report every flow as BLOCKED.

## Step 3: Analyze the git diff

Use `QA_DIFF_BASE` when set (CI sets it to `origin/<base branch>`); otherwise use `origin/main`. Run `git diff --name-only "$QA_DIFF_BASE"...HEAD` and read the full diff for matched files.

Map changed files to apps using `path_patterns` and `exclude_patterns` in config.yaml. Files that match no app (for example `.factory/**`, `.agents/**`, `.github/**`, `docs/**`, `droid-wiki/**`, `README.md`, `AGENTS.md`, or `src/**/*.test.ts`) are not associated with any app.

- If the `web` app is affected, run only the relevant `qa-web` flows plus targeted tests generated from the diff.
- If no app is affected (docs-only, CI-only, skill-only, or test-only changes), report INCONCLUSIVE: "No site code changed -- QA not applicable for this diff." Do not run any flows.

## Step 4: Pre-flight checks (affected apps only)

For the `web` app:

1. `droid-control@factory-plugins` is active.
2. `QA_BASE_URL` (or the local server you started) returns HTTP 200 for `/`.
3. Compose prerequisites from the droid-control skill, only when `droid_control.compose: true`. When Compose is on, let the droid-control Compose stage resolve its own plugin root; if its `remotion/node_modules` is missing, install from the lockfile in that `remotion` directory before rendering. Never install Remotion dependencies when Compose is off.

If a pre-flight check fails, report the affected flows as BLOCKED with the error and the fix.

## Step 5: Execute diff-relevant flows only

Read `.factory/skills/qa-web/SKILL.md`. It contains a menu of flows, each labeled with the source paths it covers.

1. Read the diff and pick the flows whose paths match the change.
2. Add adjacent flows that prove the change integrates (for example, a changed Header component needs the desktop header flow and the mobile nav flow; a new resource article needs its page, the resources index, and a search that finds it).
3. Do not run unrelated flows.
4. If no flow covers the change, write an ad-hoc test that verifies the changed behavior directly.
5. Run each relevant flow as both personas when the change affects layout, navigation, or anything responsive. Otherwise `visitor` is enough.

## Step 6: Evidence capture

Text snapshots are the primary evidence because they render inline in the PR comment.

- Use the droid-control web route; its agent-browser atom owns browser mechanics and its Capture atom owns the recording lifecycle.
- Capture the accessibility tree (trimmed to the relevant region) as text evidence after each significant step.
- Save screenshots to `./qa-results/$RUN_ID/` (use `QA_RUN_ID` from the environment as `$RUN_ID`, or a timestamp locally). The workflow uploads `qa-results/` as an artifact.
- When `imagemagick: true` and a change is visual, you may build an animated before/after GIF with `magick` from screenshots of the base and branch builds and save it in `./qa-results/$RUN_ID/`.
- With `video_evidence: false`, or when an upload fails: do not embed `![image](url)` markdown. Mention the filename and say it is in the workflow artifacts.

**Video evidence (only when `video_evidence: true`):**

1. Follow the droid-control Capture atom for recording start, interactions, recording stop, and raw-output verification. Record one video per flow.
2. If `droid_control.compose: false`, keep the raw WebM. If `droid_control.compose: true`, hand it to the droid-control Compose atom to render `./qa-results/$RUN_ID/<flow-slug>.mp4` with a `single` layout and the literal `"preset": "factory"`. No other preset is allowed. Trim dead time, add a short title card, keep it at 60 seconds or less, and run Compose's finalization checks.
3. Verify the evidence file exists and is non-empty. Retry a failed capture or Compose once, then fall back to text evidence.
4. Upload with GitHub's user-attachments endpoint. It is undocumented and accepts only a classic PAT with `repo` scope in `QA_EVIDENCE_TOKEN` (the workflow `GITHUB_TOKEN` returns 404; fine-grained PATs return 403):

   ```bash
   REPO_ID="${REPO_ID:-$(gh api "repos/$GITHUB_REPOSITORY" --jq .id)}"
   curl -sS --fail-with-body --request POST \
     --header "Authorization: Bearer $QA_EVIDENCE_TOKEN" \
     --header "Content-Type: application/octet-stream" \
     --header "Accept: application/json" \
     --header "X-GitHub-Api-Version: 2022-11-28" \
     "https://uploads.github.com/user-attachments/assets?name=<evidence-file>&content_type=<url-encoded-content-type>&repository_id=$REPO_ID" \
     --data-binary "@./qa-results/$RUN_ID/<evidence-file>" \
   | jq -e '.url'
   ```

5. Put each returned video URL on its own line under the flow's label, never wrapped in `![]()`. Screenshots uploaded the same way use `![name](url)`. Never embed a URL that did not come back from the upload response.

Evidence rules: trim snapshots to the relevant part, label each one with what it shows and why it matters, and never embed a link you cannot verify will resolve.

## Step 7: Test quality gate

1. Change-specific first. At least half the tests verify the changed behavior itself.
2. Integration tests are valid: they confirm the change works with the pages and components around it.
3. No unrelated flows.
4. No automated test suites (`npm test`, `astro check`, Vitest).
5. At least one negative test related to the change (for example, a search with no results, a missing page returning the 404 page, or the contact form refusing to submit without Turnstile).
6. Interact with the site as a visitor would.
7. If you cannot say what the PR changes, mark the result INCONCLUSIVE rather than PASS.

## Step 8: Handle failures

**Never silently skip a flow. If a flow cannot complete, report it as BLOCKED with what was tried and how the user can fix it.** Then continue with the next flow; one failure never aborts the run.

## Step 9: Generate the report

Write `./qa-results/report.md` following `.factory/skills/qa/REPORT-TEMPLATE.md`:

- Start with `## QA Report` and the results table.
- Results use the emoji codes: :white_check_mark: PASS, :x: FAIL, :no_entry: BLOCKED, :warning: FLAKY, :grey_question: INCONCLUSIVE.
- Keep it short: the table, an "Action Required" section only when needed, and one collapsed `<details>` block holding all evidence.
- Do not add a change summary, a metadata table, or prose about blocked flows. Do not report setup steps (install, build, server start) as test rows.
- Embed accessibility snapshots as labeled fenced code blocks. Refer to screenshots by filename (they are in the workflow artifacts) unless video evidence uploads succeeded.

## Step 10: Suggest skill updates (failure learning)

`failure_learning` is `suggest_in_report`. After the report, check whether a BLOCKED or FAIL result revealed a testing-environment insight that is not already in `qa-web`'s Known Failure Modes. Environment insights include a slow third-party script, a server start quirk, or a locale behavior. Selector typos and expected changes from the PR are not insights; fix or ignore them.

If there are insights, append this section to the report. Otherwise omit it.

```markdown
## Suggested Skill Updates (N issues found)

| #   | Severity        | File     | Issue               | Fix Prompt                                                                           |
| --- | --------------- | -------- | ------------------- | ------------------------------------------------------------------------------------ |
| 1   | <emoji> <level> | `<file>` | <short description> | <details><summary>Copy</summary><br>`<full droid prompt to fix the issue>`</details> |
```

Severity: `🔴 Breaking` fails every run; `🟡 Degraded` causes intermittent failures; `🔵 Info` is new knowledge that does not cause failures. Each fix prompt must be a self-contained instruction Droid can run when pasted, naming the target file (`.factory/skills/qa-web/SKILL.md`) and the section (Known Failure Modes). Do not write `qa-results/skill-updates.json`.
