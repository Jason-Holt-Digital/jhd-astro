---
title: Esquema de Diário
summary: Referência campo-a-campo para o formato JSON do Diário Mythic com um exemplo mínimo e downloads locais.
category: advanced
order: 1
icon: fa-slab fa-regular fa-link
duration: Referência
updated: 2026-11-04
lang: pt
tags: ["schema", "journals", "reference", "download"]
keywords:
  - Esquema de Diário
  - JSON
  - Download
  - Diário Mythic
downloads:
  - label: "Validador Legado do Esquema 1 do Diário (JSON)"
    href: "/downloads/journal.schema.json"
    format: "JSON"
  - label: "Modelo Vazio"
    href: "/downloads/journal_template.json"
    format: "JSON"
  - label: "Exemplo Preenchido"
    href: "/downloads/journal_sample.json"
    format: "JSON"
related:
  - guide-to-the-mythic-journals
  - sharing-adventure-journals
---

> Esta página descreve o Mythic GME 1.7.0 e posteriores.

## Visão Geral

Esta página documenta as chaves canônicas para o formato de exportação do Diário Mythic e como cada campo é usado. Se você está construindo ferramentas ou validando exportações, comece aqui. Para um passo a passo prático de criação e gerenciamento de diários, veja [Guia dos Diários Mythic](/pt/resources/guide-to-the-mythic-journals-pt/).

Em Português Claro: Você não precisa saber código para usar diários. "JSON" é apenas um arquivo de texto estruturado que o app lê e escreve, e o "esquema" abaixo é um livro de regras para ferramentas validarem esses arquivos. Se você não está construindo ferramentas, pode pular os detalhes aqui com segurança.

## Downloads

Veja a seção de Downloads no final desta página para arquivos. O esquema JSON disponível ali é um validador legado do esquema 1 que espera chaves de nível superior em PascalCase, como `JournalName`. Ele não é um validador para os arquivos do esquema 6 em camelCase que o Mythic GME 1.7.0 e posteriores exportam. Para os nomes de chave atuais, como `journalName`, use a referência de campos do esquema 6 nesta página.

Dica: Após baixar o modelo vazio, faça uma cópia e renomeie de `journal_template.json` para um nome significativo (por exemplo: `minha-aventura-2025.json`). Mantenha a extensão `.json`. O modelo é um arquivo legado do esquema 1 com chaves em PascalCase, então o nome do Diário vem do campo `JournalName` dentro do arquivo, não do nome do arquivo. Defina `JournalName` antes de importar. Os arquivos que o Mythic GME 1.7.0 e posteriores exportam usam chaves em camelCase, como `journalName`.

## Referência de campo (chaves de exportação canônicas)

O app grava os campos de nível superior declarados do diário em camelCase, por exemplo journalName, chaosFactor, scenes e logEntries. Chaves antigas conhecidas, como JournalName em PascalCase, ainda são lidas de arquivos antigos e convertidas para os nomes atuais. Quando um arquivo importado vem de uma versão de esquema mais nova e compatível, seus campos de nível superior desconhecidos podem ser gravados de volta com a grafia original. Veja Campos desconhecidos e de tipo errado abaixo para saber quais objetos internos mantêm chaves desconhecidas.

- `journalName` (string): Seu nome de diário/campanha.
- `chaosFactor` (int 1–9): FC atual usado para verificações e probabilidades de evento.
- `scenes` (array de objetos): Cada cena tem:
  - `title` (string): Título opcional.
  - `sceneSummary` (string): Breve descrição.
  - `sceneChaosFactor` (int 1–9, padrão 5): FC no início da cena (instantâneo).
  - `sceneAdjustments` (array de objetos): Registros estruturados de ajuste com `range`, `description`, `result`, `additionalAdjustments` e `droppedAdjustment`.
  - O app salva uma rolagem de Ajuste de Cena como uma entrada própria do registro, com rollType Scene Adjustment e um objeto sceneAdjustment. Ele grava uma lista sceneAdjustments vazia em toda cena que cria, e essa lista não é lugar para texto livre.
  - `createdAt` (string ISO8601): Quando a cena foi criada.
- characters (array): nomes usados quando um resultado de Foco do Evento, como Ação de PNJ, pede um Personagem. A exportação usa strings, e um espaço vazio é uma string vazia. Formas de objeto legadas (`Character` ou `character`) são aceitas na importação. Em arquivos com schemaVersion 0–2, um marcador Choose vira uma string vazia; a partir do esquema 3, Choose é lido como um nome real.
- `threads` (array<string>): Lista de Tramas usadas para resultados do Mythic como "Fechar uma Trama" ou "Mover em Direção a uma Trama". Um espaço vazio é uma string vazia; formas de objeto legadas usam `Thread` ou `thread`.
- `features` (array<string>): Locais, objetos e conceitos que dão cor e contexto aos eventos. Um espaço vazio é uma string vazia; formas de objeto legadas usam `Feature` ou `feature`.
- `activatedThreadSections` / `activatedCharacterSections` / `activatedFeatureSections` (int, padrão 1): Quantas seções de 5 itens estão ativas em cada lista. O app mostra de 1 a 5 seções, então até 25 itens por lista ficam visíveis e entram nas rolagens. Esse número de 25 é a capacidade de exibição e de rolagem, não um limite de importação documentado. Arquivos antigos usam os nomes em PascalCase, como `ActivatedThreadSections`.
- `logEntries` (array de objetos): Histórico do oráculo. Campos comuns:
  - rollType é um texto livre, não uma lista fechada de valores. Exemplos produzidos pelo Mythic GME 1.7.0 e posteriores: Scene, Fate Chart, Fate Check, Scene Check, Scene Adjustment, Random Event, Event Focus, Meaning Table, Narrative, Keyed Scene, Discovery Fate Question e General dice roll. Se rollType estiver ausente, ele é lido como Unknown. Uma entrada Scene é um separador de cena: seu outcome é o título da cena, seu odds é uma string vazia e seu sceneId é o valor createdAt da cena. Uma entrada General dice roll tem odds N/A, question vazia e um outcome no formato `<fórmula> = <total>`.
  - question (string): o texto digitado para uma pergunta de Destino. Uma entrada de Teste de Cena guarda aqui o texto fixo Scene Check, e seu outcome contém o rótulo da cena no idioma do app, por exemplo Expected Scene em inglês.
  - `odds` (string): Probabilidade (ex., Provável, 50/50).
  - `chaosFactor` (int): FC no momento da rolagem.
  - `rollResult` (int): d100 para Tabela de Destino; total para Verificação de Destino.
  - `outcome` (string, padrão Unknown): O texto do resultado, por exemplo Yes ou Exceptional No em inglês para uma pergunta de Destino. Em uma Verificação de Cena, contém o rótulo da cena no idioma do app. O esquema não limita esse campo a uma lista fixa de valores.
  - `isSceneCheck` (bool): Verdadeiro quando a entrada é um resultado de Verificação de Cena.
  - `timestamp` (string ISO8601): Quando aconteceu. O app sempre o grava. Um timestamp ausente é lido como 1970-01-01.
  - Opcional: `individualDieResults`, `modifierValue`, `modifiedTotal` (detalhes da Verificação de Destino),
    `randomEvent`, `eventFocus`, `sceneAdjustment`, `sceneAdjustmentRoll`, `diceRoll`, `sceneId`.
  - `randomEvent` (objeto): `eventFocus`, `meanings` (um mapa de rótulos em string para valores em string), `meaningDescriptions` e `linkedResults`, além dos vínculos opcionais `characterResult`, `threadResult` e `featureResult` e de um `eventFocusRoll` opcional.
  - Outros campos opcionais do registro são eventFocusRoll, sceneCheckResult, meaningTableName, discoveryExplanation, diceFormula e diceResults. meaningDescriptions e discoverySubRolls são sempre gravados como listas e podem estar vazios. diceSuccessCount, diceFailureCount, diceCriticalSuccessCount e diceCriticalFailureCount também são opcionais. diceRoll é o registro de cada dado de uma General dice roll, descrito abaixo. sceneId liga uma entrada Scene à sua cena. Campos opcionais do registro são omitidos quando não têm valor.
  - `linkedResults` (array, em `randomEvent` e `eventFocus`): cada item tem `tableName`, `result` e `roll`, com `characterResult`, `threadResult` e `featureResult` opcionais, e `customListResults` (um objeto de string para string).
- listNotes (object): anotações livres por lista, em characterNotes, threadNotes e featureNotes. É opcional em um arquivo que você importa, e a exportação o omite quando não tem valor.
- schemaVersion (int, atual = 6): a versão do esquema de dados, usada na migração. O app grava schemaVersion 6 e minReaderVersion 4 ou 6 (veja Versões diferentes do app abaixo). Arquivos mais antigos são migrados ao carregar e salvos como esquema 6.
- minReaderVersion (int): o esquema mais antigo que um leitor precisa entender para abrir o arquivo. O app mostra "Atualização necessária" para um arquivo cujo minReaderVersion seja maior que 6. Quando um arquivo não tem minReaderVersion, o app confere o schemaVersion. Um arquivo com schemaVersion maior, mas com minReaderVersion 6 ou menor, ainda carrega, mantém suas chaves de nível superior desconhecidas e mantém o schemaVersion maior ao ser salvo. Ele também mantém o próprio minReaderVersion quando este é maior que o que o app gravaria.
- As exportações também sempre contêm customLists, threadProgressTracks, keyedScenes, tableProgressPoints, rev, base e minReaderVersion. lastCharacterRoll, lastThreadRoll e lastFeatureRoll só aparecem quando têm valor.

### Versões diferentes do app

A versão 1.6.8 do app gravava o esquema 4. A versão 1.7.0 e as posteriores gravam schemaVersion 6 e define minReaderVersion como a versão mais antiga que mantém todos os dados do Diário:

- minReaderVersion 4 quando a versão 1.6.8 mantém tudo. A 1.6.8 consegue abrir o Diário. Listas personalizadas e Pontos de Progresso não mudam isso: a 1.6.8 os mantém no arquivo, mas não os mostra.
- minReaderVersion 6 quando o Diário tem dados que a 1.6.8 perderia ou leria errado. Isso inclui uma rolagem de dados registrada no modo de dados, uma cena adicionada na 1.7.0 (ela cria uma entrada de cena no Registro de Aventura), resultados de tabelas ligadas em um Evento Aleatório ou Foco do Evento, uma Trilha de Progresso com dados de Conclusão, Vantagem, Proteção ou Horror, uma Cena-Chave aguardando a próxima cena e um item de lista chamado Choose. A 1.6.8 mostra "Atualização necessária" para esse Diário.

A versão 1.6.7 e as anteriores não conferem o minReaderVersion. Elas abrem o Diário e descartam os dados que não conhecem quando o salvam. Se você joga em mais de um dispositivo, atualize todos para a 1.7.0.

### Campos desconhecidos e de tipo errado

- Chaves desconhecidas são mantidas no nível superior do Diário e dentro das Trilhas de Progresso de Trama, das Alavancas e das Proteções.
- Chaves desconhecidas dentro de cenas, entradas do registro, Listas personalizadas e Cenas-Chave são descartadas quando o app salva.
- Um campo com o tipo JSON errado, por exemplo texto onde deveria haver um número, impede o Diário inteiro de carregar.

### Registro da rolagem de dados (`diceRoll`)

Uma entrada General dice roll pode trazer `diceRoll`, o registro de cada dado.

- `dice` (array): um objeto por dado.
- `pushCount` (int, padrão 0): quantas vezes a rolagem foi forçada.
- `pushLimit` (int, opcional): quantas vezes a fórmula permite forçar, a partir de `@push=N`.
- `pushedFrom` (string ISO8601, opcional): o `timestamp` da entrada que foi forçada. Uma entrada General dice roll com `pushedFrom` aparece no Registro de Aventura como "Rolagem de dados forçada".

Cada objeto de dado:

- `value` (int, obrigatório): a face que o dado mostra.
- `type` (string, obrigatório): `numbered`, `fate`, `d66`, `custom` ou `constant`. Se um dado tiver outro tipo, o app mantém o registro `diceRoll` inteiro como está e o grava de volta ao salvar. Ele mostra essa rolagem a partir de `diceResults`, e a rolagem não pode ser forçada.
- `sides` (int): o número de lados.
- `faces` (array de int): as faces do dado. Obrigatório para `fate` e `custom`.
- `components` (array de dois ints de 1 a 6): os dois dados de um `d66`.
- `pool` (string): o rótulo da parada de dados, quando a fórmula usa um.
- `kept` (bool, padrão true): false quando o dado foi descartado.
- `locked`, `subtracted`, `success`, `failure`, `criticalSuccess`, `criticalFailure`, `totaled` (bool, padrão false).
- `scoreRules` (array): as contagens que pontuam o dado. Cada regra tem `count` (`s`, `f`, `cs` ou `cf`), `comparison` (`=`, `<`, `<=`, `>` ou `>=`) e `target` (int).
- `lock` (string): `s`, `sf` ou `none`, a partir da tag `@lock` da fórmula.

### Listas personalizadas (`customLists`)

Cada item tem `id` (string, obrigatório), `name` (string), `entries` (array de strings, em que uma string vazia é um espaço vazio) e `notes` (string).

### Trilhas de Progresso de Trama (`threadProgressTracks`)

Cada trilha exige:

- `id` (string)
- `focusThreadName` (string)
- `trackType` (string): `thread` ou `horror`.
- `trackLength` (string): `short`, `medium`, `long` ou `custom`.
- `createdAt` (string ISO8601)

O app não mostra uma trilha com qualquer outro valor de `trackType` ou `trackLength`. Ele mantém a trilha no arquivo e a grava de volta sem mudanças ao salvar.

Campos opcionais: `customPoints` (int), `currentProgress` (int), `isResolved`, `endedUnresolved`, `isArchived` (bool), `flashpointPerPhase` (objeto de fase para bool), `conclusionDelayed`, `conclusionPlayed` (bool), `leverages`, `protections`, `horrorPlotArmorEnabled` (bool, padrão true) e `updatedAt` (string ISO8601).

- `leverages` (array): cada item tem `id`, `name`, `createdAt`, `lost` e `strengthenedCount`.
- `protections` (array): cada item tem `id`, `name`, `createdAt` e `lost`.

### Cenas-Chave (`keyedScenes`)

Cada item exige `id`, `name`, `triggerDescription`, `eventDescription` e `createdAt` (string ISO8601). Campos opcionais: `count` (int), `targetCount` (int), `isRecurring`, `autoIncrement`, `isActive` (bool), `triggeredOnScenes` (array de strings ISO8601) e `awaitingNextScene` (bool).

### Pontos de Progresso (`tableProgressPoints`)

Um objeto de nome de tabela para Pontos de Progresso, por exemplo `{"Actions": 3}`. Cada valor fica entre 1 e 99. Um valor zero ou menor é descartado.

### Exportação em Markdown

A exportação em Markdown serve para leitura. Ela deixa de fora Listas personalizadas, Trilhas de Progresso de Trama, Cenas-Chave, Pontos de Progresso e o registro de cada dado, e o app não consegue importá-la.

### Notas sobre alinhamento com Mythic

- Tipo de cena é derivado do log: a cena não tem campo de resultado. Uma entrada de log de `Scene Check` tem `isSceneCheck` verdadeiro e guarda o rótulo da cena em `outcome` e `sceneCheckResult`, no idioma do app (por exemplo Expected Scene em inglês).
- Eventos Aleatórios: Use `randomEvent.eventFocus`, `meanings`, e vínculos opcionais (`characterResult`, `threadResult`, `featureResult`).
- Mudanças de Fator Caos: Quando o FC muda para uma cena, defina `sceneChaosFactor` na cena e registre a justificativa em uma entrada de log, não em `sceneAdjustments`.
- Listas como inspiração: Listas de Aventura conduzem conexões de eventos; expanda com os campos `activated*Sections` conforme necessário (até 25 itens visíveis por lista).

## Esqueleto mínimo

Este é um exemplo mínimo com os nomes de chave atuais do esquema 6. Não é uma exportação completa: um arquivo exportado pelo app contém mais campos. Ele também é diferente do `journal_template.json` para download, que é um arquivo legado do esquema 1 com chaves em PascalCase.
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

Este exemplo tem uma cena, uma entrada separadora de cena, uma General dice roll com o registro dos dados e um item em cada uma das listas mais novas. Uma exportação do app também grava os outros campos de nível superior listados acima.
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

Para importar um Diário, o arquivo precisa de uma chave reconhecida de nome do Diário (`journalName`, ou `JournalName` em arquivos antigos) e de uma chave de Fator Caos (`chaosFactor` ou `ChaosFactor`). Muitos outros campos têm valores padrão no formato de dados, mas a tela de importação faz suas próprias verificações, que podem ser diferentes desses padrões.
