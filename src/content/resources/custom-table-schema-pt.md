---
fullArticleAvailable: true
title: "Esquema de Tabela Personalizada"
summary: "Referência do formato de arquivo JSON de Tabelas Personalizadas."
category: "advanced"
order: 3
icon: "fa-slab fa-regular fa-layer-group"
duration: "Referência"
updated: "2026-11-19"
lang: "pt"
tags: ["schema", "custom-tables", "meaning-tables", "event-focus", "reference"]
keywords:
  - Esquema de Tabela de Significado
  - Esquema de Foco de Evento
  - Tabela Unificada v3
  - JSON
downloads:
  - label: "Esquema de Significado"
    href: "/downloads/meaning_table.schema.json"
    format: "JSON"
  - label: "Esquema de Foco de Evento"
    href: "/downloads/event_focus_table.schema.json"
    format: "JSON"
related:
  - getting-started-with-custom-tables-pt
  - importing-and-exporting-custom-tables-pt
  - linking-and-nesting-tables-pt
---

> Esta página descreve o Mythic GME 1.7.0 e posteriores.

## Visão geral

Esta referência documenta o formato JSON Tabela Unificada v3 usado por Tabelas de Significado e tabelas de Foco de Evento na importação e na exportação. Se você quer instruções passo a passo para criar ou importar tabelas dentro do app, veja [Começando com Tabelas Personalizadas](/pt/resources/getting-started-with-custom-tables-pt/) e [Importando e Exportando Tabelas Personalizadas](/pt/resources/importing-and-exporting-custom-tables-pt/).

## Tabela de Significado (v3)

As chaves obrigatórias são `id`, `categoryId`, `displayName` e `entries`. Essas chaves não têm valor padrão. Se você omitir chaves opcionais do cabeçalho, `schemaVersion` assume `3`, `tableType` assume `"meaning-table"`, `rangeStart` assume `1` e `rangeEnd` assume `100`.

### Campos principais

- `id` (string, obrigatório). Tabelas integradas usam snake_case, mas o app não exige um estilo específico.
- `categoryId` (string, obrigatório). Categorias integradas usam kebab-case. Na importação, um ID de categoria não reconhecido cai para `"custom"`.
- `displayName` (string, obrigatório). Título da tabela exibido no app.
- `entries` (array, obrigatório). Lista de objetos de entrada da tabela.
- `schemaVersion` (int, padrão `3`). Versão do formato.
- `tableType` (string, padrão `"meaning-table"`). Tipo da tabela.
- `rangeStart` (int, padrão `1`) e `rangeEnd` (int, padrão `100`). Limites inclusivos de rolagem.

### Campos opcionais da tabela

- `description` (string), `descriptionTranslations` (objeto) e `displayNameTranslations` (objeto).
- `defaultLanguage` (string, por exemplo `"en"`).
- `isBuiltIn` e `isUserCreated` (booleanos). Na importação, o app força `isBuiltIn` para `false` e `isUserCreated` para `true`, independentemente dos valores no arquivo.
- `source` (string) e `tags` (array de strings).
- `tableRollOn` (array de IDs de Tabelas de Significado). IDs que não sejam de Tabelas de Significado são ignorados. Nomes de Listas de Aventura também são ignorados.
- `data` (objeto). Contêiner para metadados de extensão.
- `baseDice` (string, por exemplo `"1d10"`). Expressão de dados rolada nessa tabela. Quando omitido, o app rola um único dado com o tamanho do intervalo.
- `defaultDoubleRoll` (booleano, padrão `true`). Defina como `false` para rolar a tabela uma vez por padrão. Uma tabela cujas `tags` incluem `"crafter"` também rola uma vez. O seletor `1x`/`2x` na linha da tabela prevalece sobre ambos.
- `isPremium` (booleano). Ignorado na importação. O app decide quais tabelas exigem o desbloqueio de Recursos Expandidos.
- `replacement` e `displayRoll` (booleanos). Preservados de importações do Foundry VTT e gravados de volta na exportação sem alterar o comportamento da rolagem.
- `dice` (legado). Ignorado no Mythic GME 1.7.0 e posteriores. Use `baseDice`.

### Campos de entrada

- `range` (array de dois ints `[start, end]`, obrigatório). Intervalo inclusivo de rolagem da entrada.
- `result` (string, obrigatório). Texto retornado quando a entrada é rolada.
- Os campos opcionais incluem `description`, traduções, `tags`, `entryRollOn`, `disabled` e `data`.
- `weight` (int, opcional). Se qualquer entrada de uma Tabela de Significado tiver `weight` acima de `1`, o app escolhe resultados por peso em vez de por intervalo e ignora os vínculos `tableRollOn` da tabela. Omita `weight` ou defina `1` em todas as entradas para rolar por intervalo. Tabelas de Foco de Evento ignoram `weight`.

### Regras de validação

- Entradas ativas precisam cobrir de `rangeStart` até `rangeEnd` exatamente uma vez, sem lacunas nem sobreposições.
- Entradas com `disabled` igual a `true` ou `range` igual a `[0, 0]` são ignoradas durante as verificações de cobertura.

### JSON mínimo de Tabela de Significado

Use um `categoryId` que exista no seu app, como `"custom"`.

```json
{
  "id": "action_basics",
  "schemaVersion": 3,
  "tableType": "meaning-table",
  "rangeStart": 1,
  "rangeEnd": 10,
  "categoryId": "custom",
  "displayName": "Action Basics",
  "entries": [
    { "range": [1, 5], "result": "Common" },
    { "range": [6, 10], "result": "Uncommon" }
  ]
}
```

## Tabela de Foco de Evento (v3)

### Chaves obrigatórias

- `id`, `categoryId` e `displayName` (strings não vazias). Na importação, o app define `categoryId` como `"event-focus"`.
- `entries` (array). Cada entrada exige `range` e `result`.

### Chaves opcionais e padrões

- `schemaVersion` (int, padrão `3`), `rangeStart` (int, padrão `1`) e `rangeEnd` (int, padrão `100`).
- `tableType` (string). Uma importação de arquivo único usa o cartão **Tabelas de Foco do Evento** selecionado e define `tableType` em seguida. Dentro de um arquivo envolvente `tables`, defina `tableType` como `"event-focus"` para que a tabela se identifique. Se omitido, o cartão selecionado decide. Um valor desconhecido em `tableType` falha na importação.

### Campos opcionais da tabela

- `displayNameTranslations`, `description`, `descriptionTranslations`, `defaultLanguage`, `isBuiltIn`, `isUserCreated`, `source`, `tags`, `tableRollOn`, `data` e `baseDice`.
- `data.iconKey` (string). Define o ícone no cartão da tabela, por exemplo `"bullseye"`. Uma chave não reconhecida exibe um ponto de interrogação.

### Campos de entrada

- `range` (`[start, end]`, obrigatório) e `result` (string, obrigatório).
- Os campos opcionais incluem `description`, traduções, `tags`, `entryRollOn`, `disabled`, `data` e `weight` (ignorado em tabelas de Foco de Evento).
- `action` e `additionalRolls`. Armazenados e reexportados sem afetar as rolagens.

### JSON mínimo de Foco de Evento

Este é um exemplo reduzido, não a tabela integrada de Foco de Evento.

```json
{
  "id": "event_focus_core",
  "schemaVersion": 3,
  "tableType": "event-focus",
  "rangeStart": 1,
  "rangeEnd": 20,
  "categoryId": "event-focus",
  "displayName": "Event Focus",
  "entries": [
    { "range": [1, 10], "result": "Remote Event" },
    { "range": [11, 20], "result": "NPC Action" }
  ]
}
```

## Downloads

A seção Downloads no final desta página contém `meaning_table.schema.json` e `event_focus_table.schema.json`. Modelos e exemplos iniciais estão em [Começando com Tabelas Personalizadas](/pt/resources/getting-started-with-custom-tables-pt/).

## Relacionados

- [Começando com Tabelas Personalizadas](/pt/resources/getting-started-with-custom-tables-pt/) e [Organizando Tabelas Personalizadas](/pt/resources/organizing-custom-tables-pt/) para criar e agrupar tabelas.
- [Vincular e aninhar tabelas](/pt/resources/linking-and-nesting-tables-pt/) para o comportamento de `entryRollOn` e `tableRollOn`.
- [Importando e Exportando Tabelas Personalizadas](/pt/resources/importing-and-exporting-custom-tables-pt/) para as regras de importação de CSV, TXT, PSV, JSON e Foundry VTT.
