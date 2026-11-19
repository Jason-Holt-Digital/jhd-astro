---
fullArticleAvailable: true
title: "Esquema de Fórmulas"
summary: "Referência do formato de arquivo JSON de Fórmulas Salvas."
category: "advanced"
order: 2
icon: "fa-slab fa-regular fa-map"
duration: "Referência"
updated: "2026-11-19"
lang: "pt"
tags: ["schema", "formulas", "reference", "download"]
keywords:
  - Esquema
  - Fórmulas salvas
  - JSON
  - Download
downloads:
  - label: "Esquema de Fórmulas Salvas"
    href: "/downloads/saved_formulas.schema.json"
    format: "JSON"
  - label: "Modelo Vazio"
    href: "/downloads/saved_formulas_template.json"
    format: "JSON"
  - label: "Exemplo Preenchido"
    href: "/downloads/saved_formulas_sample.json"
    format: "JSON"
related:
  - saving-and-managing-dice-formulas-pt
  - dice-formulas-and-customization-pt
---

> Esta página descreve o Mythic GME 1.7.0 e posteriores.

## Visão geral

Esta referência documenta o formato JSON de Fórmulas Salvas para você validar arquivos ou movê-los entre dispositivos e ferramentas externas. Para um passo a passo de como salvar, carregar, importar e exportar fórmulas no app, veja [Salvando e Gerenciando Fórmulas de Dados](/pt/resources/saving-and-managing-dice-formulas-pt/).

## Downloads e nomes de arquivo

A seção Downloads no final desta página contém o validador JSON Schema (`saved_formulas.schema.json`), um modelo vazio e um exemplo preenchido.

A importação aceita qualquer nome de arquivo. Nos apps nativos, o nome precisa terminar em `.json` (independentemente de maiúsculas ou minúsculas). Na web, o seletor filtra arquivos `.json` sem fazer uma checagem separada de extensão. Apenas o arquivo interno de armazenamento do próprio app precisa se chamar `saved_formulas.json`.

## Formatos de arquivo

O app usa dois formatos JSON, um para o arquivo interno de armazenamento e outro para os arquivos gravados por Exportar.

### Arquivo de armazenamento (`formulas/saved_formulas.json`)

O app guarda suas fórmulas salvas em `saved_formulas.json`, dentro da pasta `formulas` do seu local de armazenamento. O leitor aceita dois formatos:

- Um array simples de objetos de fórmula. O app grava esse formato até você salvar um rótulo de parada de dados.
- Um objeto envolvente contendo `formulas` (array de objetos de fórmula) e `poolLabels` (array de strings), além de `poolLabelColors` assim que você escolhe uma cor para um rótulo. O app muda para esse formato depois que você salva seu primeiro rótulo na aba **Unir** do Estúdio de Dados.

Quando você remove o último rótulo, o app volta a gravar um array simples. Outros campos presentes em um arquivo envolvente de armazenamento são preservados quando o app salva.

### Regras para `poolLabels`

- Cada rótulo é uma string. O app remove espaços das duas extremidades.
- Um rótulo não pode conter aspas duplas (`"`).
- Os rótulos são únicos, sem diferenciar maiúsculas de minúsculas.
- Quando você muda o armazenamento de lugar ou usa **Importar pasta anterior**, o app mescla os rótulos. Os rótulos do destino mantêm a ordem e os novos são anexados depois (comparados sem diferenciar maiúsculas de minúsculas). Cada rótulo mantém a cor do destino, ou herda a cor recebida se o destino não tiver nenhuma.

### Regras para `poolLabelColors`

- Um objeto que mapeia cada nome de rótulo para a cor dele. Qualquer nome que não esteja em `poolLabels` é ignorado.
- Uma cor pode ser uma cor rápida (`white`, `red`, `black`, `teal`, `purple` ou `brown`) ou uma cor hexadecimal personalizada no formato `#RRGGBB`. O app grava cores personalizadas em maiúsculas.
- Um rótulo sem entrada usa Automática e recebe uma cor rápida que não esteja em uso por outras paradas na rolagem. Qualquer valor de cor não reconhecido é ignorado e também volta para Automática.
- O app grava `poolLabelColors` apenas quando pelo menos um rótulo tem uma cor escolhida.
- Renomear um rótulo mantém a cor dele. Remover um rótulo remove a cor dele.

### Exemplo de arquivo de armazenamento com rótulos

```json
{
  "formulas": [
    { "id": "a", "formula": "1d20+5", "name": "Attack", "description": "", "dateAdded": "2020-01-01T00:00:00.000Z" }
  ],
  "poolLabels": ["Attack", "Damage"],
  "poolLabelColors": { "Attack": "teal", "Damage": "#C0392B" }
}
```

### Versões diferentes do app

A versão 1.6.x lê o arquivo envolvente de armazenamento, mas grava um array simples toda vez que salva uma fórmula. Se um dispositivo na versão 1.6.x salvar uma fórmula, `poolLabels` e `poolLabelColors` são removidos em todos os dispositivos que compartilham aquela conta do iCloud ou pasta sincronizada, enquanto suas fórmulas continuam intactas. Atualize todos os dispositivos para a versão 1.7.0 antes de salvar rótulos.

### Regras de validação do armazenamento

- `formula` (string, obrigatório). Não pode ser vazio.
- `name`, `description` e `id` (strings, opcionais).
- `dateAdded` (string ISO 8601, opcional). Em `saved_formulas.json`, definir `"dateAdded": null` ou uma data ilegível torna o arquivo inteiro ilegível e faz o app recorrer aos backups.

### Backups

- Com armazenamento em pasta, o app mantém `saved_formulas.json.bak`, `saved_formulas.json.bak.1` e `saved_formulas.json.bak.2` ao lado de `saved_formulas.json`.
- Com o iCloud, o app mantém um único `saved_formulas.json.bak` (novidade na versão 1.7.0).
- No computador e no tablet, **Restaurar backup** aparece quando Fórmulas Salvas não consegue carregar.
- **Restaurar backup** verifica os backups do mais recente para o mais antigo e pula qualquer arquivo ilegível. Se nenhum puder ser restaurado, o app exibe `"Falha ao restaurar do backup"`.
- Na web, as fórmulas ficam no armazenamento do navegador e não há backups.

## Arquivo de exportação

Exportar sempre grava um objeto envolvente com três chaves de nível superior:

- `formulas` (array). Lista de objetos de fórmulas salvas.
- `version` (string). Exportar sempre grava `"1.0"`. A importação ignora esse campo.
- `schemaVersion` (string). Exportar grava `"1"`. A importação ignora esse campo.

Exportar omite `poolLabels` e `poolLabelColors`, e a importação ignora ambas as chaves se estiverem presentes.

## Campos do objeto de fórmula

- `formula` (string, obrigatório). Não pode ser vazio e precisa ser uma notação de dados válida. Se qualquer entrada falhar na validação, nada do arquivo é importado.
- `name` (string, opcional). Rótulo de exibição. Usa `formula` como padrão quando ausente.
- `description` (string, opcional). Contexto extra para a fórmula.
- `dateAdded` (string ISO 8601, opcional). Data e hora de criação. Na importação, um valor ausente ou ilegível é substituído pelo horário da importação.
- `id` (string, opcional). Exportar grava um `id` para cada fórmula, mas a importação o ignora e atribui um `id` novo a cada fórmula importada. Importar o mesmo arquivo duas vezes cria entradas duplicadas.

## Comportamento da importação

- A importação é tudo ou nada. Se qualquer fórmula do arquivo for inválida, nada é importado.
- A importação adiciona as fórmulas ao final da sua lista existente sem verificar duplicatas.
- A importação atribui um novo `id` a cada fórmula e remove espaços do início e do fim de `formula`.
- A importação inteira é gravada em uma única operação de salvamento, então o backup preserva a sua lista de antes da importação.
- A importação aceita tanto o objeto envolvente de exportação quanto um array de nível superior de objetos de fórmula. Um único objeto de fórmula solto é rejeitado.

## Exemplo mínimo de importação

Este exemplo mínimo é válido para importação. Uma exportação completa gravada pelo app também inclui `description`, `dateAdded` e `id` em cada fórmula.

```json
{
  "version": "1.0",
  "schemaVersion": "1",
  "formulas": [
    { "formula": "2d6+3", "name": "Sword attack" }
  ]
}
```
