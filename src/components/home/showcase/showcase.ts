// Rotation for the homepage app showcase previews. Both directions share one
// DOM contract inside [data-showcase]: [data-slide] items in play order, each
// with data-app; [data-app-btn] and [data-app-panel] items with data-app;
// segments [data-seg]; the counter [data-count]; the live status [data-status];
// and the prev, pause and next buttons.
import { createCarousel } from "../../../lib/carousel";

const INTERVAL_MS = 7000;

export function initShowcase(root: HTMLElement) {
  const slides = Array.from(root.querySelectorAll<HTMLElement>("[data-slide]"));
  const appBtns = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-app-btn]"));
  const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-app-panel]"));
  const segs = Array.from(root.querySelectorAll<HTMLElement>("[data-seg]"));
  const count = root.querySelector<HTMLElement>("[data-count]");
  const status = root.querySelector<HTMLElement>("[data-status]");
  const btnPrev = root.querySelector<HTMLButtonElement>(".sc-prev");
  const btnNext = root.querySelector<HTMLButtonElement>(".sc-next");
  const btnPause = root.querySelector<HTMLButtonElement>(".sc-pause");
  const frame = root.querySelector<HTMLElement>("[data-pause-target]") ?? root;
  if (!slides.length || !btnPrev || !btnNext || !btnPause) return;

  const { pauseLabel = "Pause autoplay", playLabel = "Play autoplay", slideLabel = "Slide", ofLabel = "of" } = root.dataset;
  const total = slides.length;
  const pad = (n: number) => String(n).padStart(2, "0");

  const carousel = createCarousel({
    itemCount: total,
    intervalMs: INTERVAL_MS,
    pauseTargets: [frame],
    keyboardTarget: root,
    onActivate: (index) => {
      const app = slides[index]!.dataset.app;
      slides.forEach((slide, i) => {
        const on = i === index;
        slide.classList.toggle("is-active", on);
        slide.inert = !on;
      });
      appBtns.forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.app === app)));
      panels.forEach((panel) => {
        const on = panel.dataset.app === app;
        panel.classList.toggle("is-active", on);
        panel.querySelector("[data-app-btn]")?.setAttribute("aria-expanded", String(on));
      });
      segs.forEach((seg, i) => {
        seg.classList.toggle("is-active", i === index);
        seg.classList.toggle("is-done", i < index);
      });
      root.style.setProperty("--app-accent", slides[index]!.dataset.accent ?? "");
      if (count) count.textContent = `${pad(index + 1)} / ${pad(total)}`;
      if (status) status.textContent = `${slideLabel} ${index + 1} ${ofLabel} ${total}`;
    },
  });

  // Autoplay never starts with reduced motion, so there is nothing to pause.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    btnPause.hidden = true;
    root.classList.add("is-paused");
  }

  let userPaused = false;
  const setPaused = (paused: boolean) => {
    root.classList.toggle("is-paused", paused);
    status?.setAttribute("aria-live", paused ? "polite" : "off");
    btnPause.setAttribute("aria-pressed", String(paused));
    btnPause.setAttribute("aria-label", paused ? playLabel : pauseLabel);
    btnPause.querySelector("i")?.setAttribute("class", `fa-slab fa-regular ${paused ? "fa-play" : "fa-pause"}`);
  };

  // Rotation only runs while the showcase is on screen.
  new IntersectionObserver(
    ([entry]) => {
      root.classList.toggle("is-idle", !entry!.isIntersecting);
      if (userPaused) return;
      if (entry!.isIntersecting) carousel.resume();
      else carousel.pause();
    },
    { threshold: 0.35 },
  ).observe(root);

  const stop = () => {
    userPaused = true;
    carousel.pause();
    setPaused(true);
  };

  btnPrev.addEventListener("click", () => { stop(); carousel.prev(); });
  btnNext.addEventListener("click", () => { stop(); carousel.next(); });
  btnPause.addEventListener("click", () => {
    userPaused = !userPaused;
    if (userPaused) carousel.pause();
    else carousel.resume();
    setPaused(userPaused);
  });
  appBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      stop();
      carousel.goTo(slides.findIndex((s) => s.dataset.app === btn.dataset.app));
    }),
  );
  setPaused(false);
}

document.querySelectorAll<HTMLElement>("[data-showcase]").forEach(initShowcase);
