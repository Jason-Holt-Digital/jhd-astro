---
fullArticleAvailable: true
title: "Esquema de Diário"
summary: "Referência do formato de arquivo JSON do Diário."
category: "advanced"
order: 1
icon: "fa-slab fa-regular fa-link"
duration: "Referência"
updated: "2026-11-19"
lang: "pt"
tags: ["schema", "journals", "reference", "download"]
keywords:
  - Esquema de Diário
  - JSON
  - Download
  - Diário Mythic
downloads:
  - label: "Esquema de Diário (JSON)"
    href: "/downloads/journal.schema.json"
    format: "JSON"
  - label: "Modelo Vazio"
    href: "/downloads/journal_template.json"
    format: "JSON"
  - label: "Exemplo Preenchido"
    href: "/downloads/journal_sample.json"
    format: "JSON"
related:
  - guide-to-the-mythic-journals-pt
  - sharing-adventure-journals-pt
---

> Esta página descreve o Mythic GME 1.7.0 e posteriores.

## Visão geral

Esta referência documenta as chaves JSON canônicas dos arquivos de Diário do Mythic GME (Esquema 6). Use esta página ao criar ferramentas, inspecionar exportações ou validar arquivos de Diário. Para um passo a passo de como criar e gerenciar Diários dentro do app, veja [Guia dos Diários Mythic](/pt/resources/guide-to-the-mythic-journals-pt/).

## Downloads

A seção Downloads no final desta página inclui três arquivos JSON.

- `/downloads/journal.schema.json` valida Diários do Esquema 6 com chaves em camelCase gravados pelo Mythic GME 1.7.0 e posteriores, e também valida Diários legados mais antigos em PascalCase gravados antes do esquema 3.
- `/downloads/journal_template.json` e `/downloads/journal_sample.json` continuam sendo exemplos iniciais legados do Esquema 1 com chaves em PascalCase, como `JournalName`.

Se você começar a partir de `journal_template.json`, faça uma cópia e renomeie o arquivo para um nome descritivo (como `minha-aventura-2025.json`), mantendo a extensão `.json`. Como esse modelo usa chaves do Esquema 1 em PascalCase, defina `JournalName` dentro do arquivo antes de importar. O app lê o nome do Diário a partir do campo interno, não do nome do arquivo. Exportações gravadas pelo Mythic GME 1.7.0 e posteriores usam chaves em camelCase, como `journalName`.

## Campos canônicos de nível superior

O Mythic GME 1.7.0 e posteriores gravam os campos declarados de nível superior em camelCase, incluindo `journalName`, `chaosFactor`, `scenes` e `logEntries`. Na importação, o app ainda aceita chaves antigas em PascalCase, como `JournalName`, e as converte para os nomes atuais. Quando um arquivo importado vem de uma versão de esquema mais nova e compatível, o app mantém os campos desconhecidos de nível superior com a grafia original. Veja a seção Campos desconhecidos e de tipo errado abaixo para o comportamento de objetos internos.

- `journalName` (string). Nome do seu Diário ou campanha.
- `chaosFactor` (int, 1 a 9). Fator de Caos atual usado em verificações de Destino e probabilidades de evento.
- `scenes` (array de objetos). Cada objeto de cena contém:
  - `title` (string). Título opcional da cena.
  - `sceneSummary` (string). Breve descrição da cena.
  - `sceneChaosFactor` (int, 1 a 9, padrão `5`). Registro do Fator de Caos no início da cena.
  - `sceneAdjustments` (array de objetos). Registros estruturados de ajuste com `range`, `description`, `result`, `additionalAdjustments` e `droppedAdjustment`. O app salva cada rolagem de Ajuste de Cena como uma entrada própria no registro com `rollType` definido como `"Scene Adjustment"` e um objeto `sceneAdjustment`. Ele grava uma lista `sceneAdjustments` vazia em toda cena que cria, e essa lista não serve para texto livre.
  - `createdAt` (string ISO 8601). Data e hora em que a cena foi criada.
- `characters` (array de strings). Nomes usados quando um resultado de Foco de Evento, como Ação de PNJ, pede um Personagem. Exportações salvam strings, usando `""` para espaços vazios. Formas antigas de objeto (`Character` ou `character`) são aceitas na importação. Em arquivos com `schemaVersion` de 0 a 2, o marcador `"Choose"` vira `""`. A partir do esquema 3, `"Choose"` é lido como um nome real.
- `threads` (array de strings). Tramas usadas para resultados do Mythic como Fechar uma Trama ou Avançar em Direção a uma Trama. Um espaço vazio é `""`. Formas antigas de objeto usam `Thread` ou `thread`.
- `features` (array de strings). Locais, objetos ou conceitos que dão contexto aos eventos. Um espaço vazio é `""`. Formas antigas de objeto usam `Feature` ou `feature`.
- `activatedThreadSections`, `activatedCharacterSections` e `activatedFeatureSections` (int, padrão `1`). Quantidade de seções de 5 itens ativas em cada lista. O app exibe de 1 a 5 seções, então até 25 itens por lista ficam visíveis e entram nas rolagens. O limite de 25 itens é a capacidade de exibição e rolagem, não um limite documentado de importação. Arquivos mais antigos usam nomes em PascalCase, como `ActivatedThreadSections`.
- `logEntries` (array de objetos). Histórico do oráculo e das rolagens de dados. Campos comuns:
  - `rollType` (string). String livre, em vez de uma lista fechada de valores. Exemplos produzidos pelo Mythic GME 1.7.0 e posteriores incluem `"Scene"`, `"Fate Chart"`, `"Fate Check"`, `"Scene Check"`, `"Scene Adjustment"`, `"Random Event"`, `"Event Focus"`, `"Meaning Table"`, `"Narrative"`, `"Keyed Scene"`, `"Discovery Fate Question"` e `"General dice roll"`. Um `rollType` ausente é lido como `"Unknown"`. Uma entrada `"Scene"` funciona como separador de cena cujo `outcome` é o título da cena, `odds` é `""` e `sceneId` corresponde ao valor `createdAt` da cena. Uma entrada `"General dice roll"` tem `odds` definido como `"N/A"`, `question` vazia e `outcome` no formato `"<fórmula> = <total>"`.
  - `question` (string). Texto digitado para uma pergunta de Destino. Uma entrada de Teste de Cena guarda `"Scene Check"` aqui, e seu `outcome` armazena o rótulo da cena no idioma do app (por exemplo, `"Expected Scene"` em inglês ou `"Cena Esperada"` em português).
  - `odds` (string). Descritor de probabilidade, como `"Likely"` ou `"50/50"`.
  - `chaosFactor` (int). Fator de Caos no momento da rolagem.
  - `rollResult` (int). Resultado do d100 em uma rolagem da Tabela de Destino, ou o total em uma Verificação de Destino.
  - `outcome` (string, padrão `"Unknown"`). Texto do resultado, como `"Yes"` ou `"Exceptional No"` em uma pergunta de Destino, ou o rótulo localizado da cena em um Teste de Cena. O esquema não restringe esse campo a uma lista fixa de valores.
  - `isSceneCheck` (bool). `true` quando a entrada é um resultado de Teste de Cena.
  - `timestamp` (string ISO 8601). Momento em que a entrada ocorreu. O app sempre grava esse campo. Um `timestamp` ausente é lido como `1970-01-01`.
  - Campos opcionais do registro (omitidos quando vazios) incluem `individualDieResults`, `modifierValue`, `modifiedTotal` (detalhes da Verificação de Destino), `randomEvent`, `eventFocus`, `eventFocusRoll`, `sceneAdjustment`, `sceneAdjustmentRoll`, `sceneCheckResult`, `meaningTableName`, `discoveryExplanation`, `diceFormula`, `diceResults`, `diceSuccessCount`, `diceFailureCount`, `diceCriticalSuccessCount`, `diceCriticalFailureCount`, `diceRoll` (registro por dado descrito abaixo) e `sceneId` (liga uma entrada `"Scene"` à sua cena). `meaningDescriptions` e `discoverySubRolls` são sempre gravados como listas e podem estar vazios.
  - `randomEvent` (objeto). Contém `eventFocus`, `meanings` (objeto que mapeia rótulos de string para valores de string), `meaningDescriptions` e `linkedResults`, além dos campos opcionais `characterResult`, `threadResult`, `featureResult` e `eventFocusRoll`.
  - `linkedResults` (array, dentro de `randomEvent` e `eventFocus`). Cada item tem `tableName`, `result` e `roll`, com `characterResult`, `threadResult`, `featureResult` e `customListResults` opcionais (objeto de string para string).
- `listNotes` (objeto). Anotações livres por lista em `characterNotes`, `threadNotes` e `featureNotes`. Opcional na importação e omitido na exportação quando vazio.
- `schemaVersion` (int, atual `6`). Versão do esquema de dados usada para migração. O app grava `schemaVersion` `6` e `minReaderVersion` `4` ou `6` (veja Versões diferentes do app abaixo). Arquivos mais antigos migram ao carregar e são salvos no esquema 6.
- `minReaderVersion` (int). Esquema mais antigo que um leitor precisa entender para abrir o arquivo. O app exibe `"Atualização necessária"` se `minReaderVersion` for maior que `6`. Quando `minReaderVersion` está ausente, o app verifica `schemaVersion`. Um arquivo com `schemaVersion` maior e `minReaderVersion` igual ou menor que `6` ainda carrega, mantém suas chaves desconhecidas de nível superior, preserva seu `schemaVersion` mais alto ao salvar e mantém o próprio `minReaderVersion` quando esse valor for maior do que o app gravaria.
- Chaves sempre gravadas na exportação. As exportações também incluem sempre `customLists`, `threadProgressTracks`, `keyedScenes`, `tableProgressPoints`, `rev`, `base` e `minReaderVersion`. `lastCharacterRoll`, `lastThreadRoll` e `lastFeatureRoll` aparecem apenas quando preenchidos.

## Versões diferentes do app

A versão 1.6.8 gravava o esquema 4. A versão 1.7.0 e posteriores gravam `schemaVersion` `6` e definem `minReaderVersion` como a versão mais antiga que preserva todos os dados do Diário:

- `minReaderVersion` é `4` quando a versão 1.6.8 consegue manter todos os campos. A versão 1.6.8 abre o Diário normalmente. Listas Personalizadas e Pontos de Progresso não elevam esse valor porque a 1.6.8 os preserva no arquivo mesmo sem exibi-los.
- `minReaderVersion` é `6` quando o Diário contém dados que a versão 1.6.8 perderia ou leria errado. Isso inclui uma rolagem de dados registrada no modo de dados, uma cena adicionada na 1.7.0 (que grava uma entrada `"Scene"` no Registro de Aventura), resultados de tabelas vinculadas em um Evento Aleatório ou Foco de Evento, uma Trilha de Progresso com dados de Conclusão, Vantagem, Proteção ou Horror, uma Cena-Chave aguardando a próxima cena ou um item de lista chamado `"Choose"`. A versão 1.6.8 mostra `"Atualização necessária"` para esses Diários.

A versão 1.6.7 e anteriores não verificam `minReaderVersion`. Elas abrem o Diário e descartam ao salvar os dados que não reconhecem. Atualize todos os dispositivos para a versão 1.7.0 se você joga em mais de um aparelho.

## Campos desconhecidos e de tipo errado

- Chaves desconhecidas são mantidas no nível superior do Diário e dentro de `threadProgressTracks`, `leverages` e `protections`.
- Chaves desconhecidas dentro de `scenes`, `logEntries`, `customLists` e `keyedScenes` são descartadas ao salvar.
- Um campo com o tipo JSON errado (como texto onde é exigido um número) impede o Diário inteiro de carregar.

## Registro da rolagem de dados (`diceRoll`)

Uma entrada de registro `"General dice roll"` pode incluir `diceRoll` com os detalhes de cada dado.

- `dice` (array). Um objeto por dado.
- `pushCount` (int, padrão `0`). Quantas vezes a rolagem foi forçada.
- `pushLimit` (int, opcional). Limite máximo de vezes para forçar permitido pela fórmula, vindo de `@push=N`.
- `pushedFrom` (string ISO 8601, opcional). O `timestamp` da entrada que foi forçada. Uma entrada `"General dice roll"` com `pushedFrom` aparece no Registro de Aventura como `"Rolagem de dados forçada"`.

Cada objeto de dado em `dice` aceita estes campos:

- `value` (int, obrigatório). Valor da face exibida pelo dado.
- `type` (string, obrigatório). Um entre `numbered`, `fate`, `d66`, `custom` ou `constant`. Se um dado usar outro tipo, o app mantém o registro `diceRoll` intacto e o grava de volta ao salvar, exibe a rolagem a partir de `diceResults` e desativa a opção de forçar para essa rolagem.
- `sides` (int). Quantidade de lados.
- `faces` (array de int). Faces do dado. Obrigatório para `fate` e `custom`.
- `components` (array de dois ints, 1 a 6). Os dois dados que compõem um `d66`.
- `pool` (string). Rótulo da parada de dados quando a fórmula usa um.
- `kept` (bool, padrão `true`). `false` quando o dado foi descartado.
- `locked`, `subtracted`, `success`, `failure`, `criticalSuccess`, `criticalFailure` e `totaled` (bool, padrão `false`).
- `scoreRules` (array). Regras de pontuação aplicadas ao dado. Cada regra tem `count` (`"s"`, `"f"`, `"cs"` ou `"cf"`), `comparison` (`"="`, `"<"`, `"<="`, `">"` ou `">="`) e `target` (int).
- `lock` (string). `"s"`, `"sf"` ou `"none"`, vindo da tag `@lock` da fórmula.

## Listas personalizadas (`customLists`)

Cada item contém `id` (string, obrigatório), `name` (string), `entries` (array de strings, em que `""` representa um espaço vazio) e `notes` (string).

## Trilhas de Progresso de Trama (`threadProgressTracks`)

Cada trilha exige:

- `id` (string)
- `focusThreadName` (string)
- `trackType` (string). `"thread"` ou `"horror"`.
- `trackLength` (string). `"short"`, `"medium"`, `"long"` ou `"custom"`.
- `createdAt` (string ISO 8601)

Se uma trilha usar qualquer outro valor em `trackType` ou `trackLength`, o app a oculta na interface, mas a mantém intacta no arquivo ao salvar.

Os campos opcionais incluem `customPoints` (int), `currentProgress` (int), `isResolved` (bool), `endedUnresolved` (bool), `isArchived` (bool), `flashpointPerPhase` (objeto que mapeia fase para bool), `conclusionDelayed` (bool), `conclusionPlayed` (bool), `leverages` (array), `protections` (array), `horrorPlotArmorEnabled` (bool, padrão `true`) e `updatedAt` (string ISO 8601).

- `leverages` (array). Cada item tem `id`, `name`, `createdAt`, `lost` e `strengthenedCount`.
- `protections` (array). Cada item tem `id`, `name`, `createdAt` e `lost`.

## Cenas-Chave (`keyedScenes`)

Cada item exige `id`, `name`, `triggerDescription`, `eventDescription` e `createdAt` (string ISO 8601).

Os campos opcionais incluem `count` (int), `targetCount` (int), `isRecurring` (bool), `autoIncrement` (bool), `isActive` (bool), `triggeredOnScenes` (array de strings ISO 8601) e `awaitingNextScene` (bool).

## Pontos de Progresso (`tableProgressPoints`)

Um objeto que mapeia o nome de uma tabela para seus Pontos de Progresso, como `{"Actions": 3}`. Cada valor fica entre 1 e 99. Valores iguais ou menores que 0 são descartados.

## Exportação em Markdown

A exportação em Markdown serve apenas para leitura. Ela omite `customLists`, `threadProgressTracks`, `keyedScenes`, `tableProgressPoints` e `diceRoll`, e o app não consegue importar arquivos Markdown.

## Alinhamento com as mecânicas do Mythic

- Os resultados de cena ficam no registro, e não nos objetos de cena. Uma entrada de Teste de Cena define `isSceneCheck` como `true` e grava o rótulo localizado da cena em `outcome` e em `sceneCheckResult` (por exemplo, `"Expected Scene"` em inglês ou `"Cena Esperada"` em português).
- Eventos Aleatórios guardam seus detalhes em `randomEvent.eventFocus`, `meanings` e vínculos opcionais (`characterResult`, `threadResult`, `featureResult`).
- Quando o Fator de Caos muda em uma cena, armazene o novo valor em `sceneChaosFactor` na cena e registre qualquer anotação em uma entrada do registro, não em `sceneAdjustments`.
- As Listas de Aventura conduzem conexões de eventos e expandem por meio de `activatedThreadSections`, `activatedCharacterSections` e `activatedFeatureSections` até 25 itens visíveis por lista.

## Esqueleto mínimo

Este exemplo mínimo usa chaves em camelCase do Esquema 6. Uma exportação completa gravada pelo app contém campos adicionais. Ele difere de `journal_template.json`, que é um arquivo legado do Esquema 1 com chaves em PascalCase.

```json
{
  "journalName": "My Adventure",
  "chaosFactor": 5,
  "scenes": [],
  "characters": [],
  "threads": [],
  "features": [],
  "logEntries": [],
  "schemaVersion": 6,
  "minReaderVersion": 4
}
```

## Exemplo mais completo

Este exemplo inclui uma cena, uma entrada separadora de cena, uma `General dice roll` com `diceRoll` e um item em cada uma das listas mais recentes. Uma exportação gravada pelo app também inclui os demais campos de nível superior documentados acima.

```json
{
  "journalName": "Harbor Mystery",
  "chaosFactor": 5,
  "scenes": [
    {
      "title": "The docks",
      "sceneSummary": "We look for the smuggler at night.",
      "createdAt": "2026-11-01T18:00:00.000Z",
      "sceneChaosFactor": 5,
      "sceneAdjustments": []
    }
  ],
  "characters": ["Harbor master", ""],
  "threads": ["Find the smuggler"],
  "features": [],
  "logEntries": [
    {
      "timestamp": "2026-11-01T18:00:00.000Z",
      "rollType": "Scene",
      "odds": "",
      "chaosFactor": 5,
      "question": "",
      "outcome": "The docks",
      "rollResult": 0,
      "isSceneCheck": false,
      "sceneId": "2026-11-01T18:00:00.000Z"
    },
    {
      "timestamp": "2026-11-01T18:05:00.000Z",
      "rollType": "General dice roll",
      "odds": "N/A",
      "chaosFactor": 5,
      "question": "",
      "outcome": "2d6 = 7",
      "rollResult": 7,
      "isSceneCheck": false,
      "diceFormula": "2d6",
      "diceResults": [3, 4],
      "diceRoll": {
        "dice": [
          { "value": 3, "type": "numbered", "sides": 6 },
          { "value": 4, "type": "numbered", "sides": 6 }
        ],
        "pushCount": 0
      }
    }
  ],
  "customLists": [
    { "id": "list-1", "name": "Clues", "entries": ["A torn map", ""], "notes": "" }
  ],
  "threadProgressTracks": [
    {
      "id": "track-1",
      "focusThreadName": "Find the smuggler",
      "trackType": "thread",
      "trackLength": "medium",
      "createdAt": "2026-11-01T18:00:00.000Z",
      "currentProgress": 2
    }
  ],
  "keyedScenes": [
    {
      "id": "key-1",
      "name": "The storm",
      "triggerDescription": "The Chaos Factor reaches 7",
      "eventDescription": "A storm hits the harbor",
      "createdAt": "2026-11-01T18:00:00.000Z"
    }
  ],
  "tableProgressPoints": { "Actions": 3 },
  "schemaVersion": 6,
  "minReaderVersion": 6
}
```

## Requisitos de importação

Para importar um Diário, o arquivo precisa conter uma chave reconhecida para o nome do Diário (`journalName`, ou `JournalName` em arquivos antigos) e uma chave para o Fator de Caos (`chaosFactor` ou `ChaosFactor`). Muitos outros campos têm valores padrão no modelo de dados, mas a tela de importação faz verificações próprias que podem diferir desses padrões.
