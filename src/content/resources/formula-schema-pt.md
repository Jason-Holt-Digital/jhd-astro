---
title: "Esquema de Fórmulas"
summary: "Referência para o formato JSON de Fórmulas Salvas com um exemplo mínimo e downloads locais."
category: "advanced"
order: 2
icon: "fa-slab fa-regular fa-map"
duration: "Referência"
updated: "2026-11-04"
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
  - saving-and-managing-dice-formulas
  - dice-formulas-and-customization
---

> Esta página descreve o Mythic GME 1.7.0 e posteriores.

## Visão Geral

Esta página documenta o formato JSON para Fórmulas Salvas para que seus arquivos possam ser validados e compartilhados entre dispositivos ou ferramentas. Para um passo a passo prático de salvar, carregar, importar e exportar fórmulas da UI, veja [Salvando e Gerenciando Fórmulas de Dados](/pt/resources/saving-and-managing-dice-formulas-pt/).

Em Português Claro: Você não precisa saber código para usar isso. "JSON" é apenas um arquivo de texto estruturado que o app lê e escreve, e o "esquema" é um livro de regras para ferramentas verificarem se um arquivo parece correto. A maioria dos jogadores pode ignorar os detalhes abaixo.

## Downloads

Veja a seção de Downloads no final desta página para arquivos.

Importante: Importar não exige um nome de arquivo específico. Nos apps nativos, o arquivo precisa terminar em .json (com letras maiúsculas ou minúsculas). Na web, o seletor pede arquivos .json, mas o app não confere a extensão separadamente. O nome do arquivo não garante que o conteúdo seja válido. Só o arquivo de armazenamento do próprio app precisa se chamar saved_formulas.json.

## Formato (canônico)

Há dois tipos de arquivo: o arquivo de armazenamento do próprio app e o arquivo que Exportar grava. Eles têm formatos diferentes.

### Arquivo de armazenamento (`formulas/saved_formulas.json`)

O app guarda suas fórmulas salvas em `saved_formulas.json`, dentro da pasta `formulas` do local de armazenamento. O app lê dois formatos:

- Um array simples de objetos de fórmula. É o que o app grava até você salvar um rótulo.
- Um objeto envolvente com `formulas` (array de objetos de fórmula) e `poolLabels` (array de strings), mais `poolLabelColors` quando você escolhe a cor de um rótulo. O app grava esse formato depois que você salva seu primeiro rótulo na aba Unir do Estúdio de Dados.

Quando você remove seu último rótulo, o app volta a gravar um array simples. Outros campos de um arquivo de armazenamento envolvente são mantidos quando o app salva.

Rótulos em `poolLabels`:

- Cada rótulo é uma string. O app remove os espaços das duas pontas.
- Um rótulo não pode conter aspas duplas (`"`).
- Os rótulos são únicos, sem diferenciar maiúsculas de minúsculas.
- Quando você muda o armazenamento de lugar, ou usa Importar pasta anterior, o app junta os rótulos. Os rótulos do destino mantêm a ordem, e os rótulos novos para ele são adicionados depois. A comparação não diferencia maiúsculas de minúsculas. Um rótulo mantém a cor que tem no destino; se não tiver cor lá, recebe a cor do outro local.

Cores dos rótulos em `poolLabelColors`:

- Um objeto que liga o nome de um rótulo à sua cor. Um nome que não está em `poolLabels` é ignorado.
- Uma cor é uma cor sugerida, `white`, `red`, `black`, `teal`, `purple` ou `brown`, ou uma cor personalizada escrita como `#RRGGBB`. O app grava as cores personalizadas em maiúsculas.
- Um rótulo sem entrada usa Automática: ele recebe uma cor sugerida que as outras paradas da rolagem não estão usando. Um valor que o app não reconhece é ignorado, e esse rótulo também usa Automática.
- O app só grava `poolLabelColors` quando pelo menos um rótulo tem uma cor escolhida.
- Renomear um rótulo mantém a cor dele. Remover um rótulo remove a cor dele.

Arquivo de armazenamento com rótulos:

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

A versão 1.6.x do app lê o arquivo de armazenamento envolvente, mas grava um array simples toda vez que salva uma fórmula. Se um dispositivo na 1.6.x salvar uma fórmula, os rótulos e as cores deles são removidos em todos os dispositivos que compartilham a mesma conta do iCloud ou a mesma pasta sincronizada. Suas fórmulas são mantidas. Atualize todos os dispositivos para a 1.7.0 antes de salvar rótulos.

### Regras do armazenamento

- `formula` é obrigatório e não pode ser vazio.
- `name`, `description` e `id` são strings opcionais.
- `dateAdded` é uma string ISO 8601 opcional. No arquivo de armazenamento, `"dateAdded": null` ou uma data que o app não consegue ler torna o arquivo inteiro ilegível. O app então tenta seus backups.

### Backups

- Com armazenamento em pasta, o app mantém `saved_formulas.json.bak`, `saved_formulas.json.bak.1` e `saved_formulas.json.bak.2` ao lado do arquivo de armazenamento.
- Com o iCloud, o app mantém um `saved_formulas.json.bak`. Isso é novo na 1.7.
- No computador e no tablet, Restaurar backup aparece quando a lista de Fórmulas Salvas não carrega.
- Restaurar backup tenta os backups do mais recente ao mais antigo e pula os que não consegue ler. Se nenhum puder ser restaurado, o app mostra "Falha ao restaurar do backup".
- Na web, as fórmulas ficam no armazenamento do navegador, e não há backups.

### Arquivo de exportação

Exportar sempre grava um objeto envolvente com estes campos:

- `formulas` (array): A lista de fórmulas salvas.
- version (string): Exportar sempre grava "1.0". Importar ignora este campo.
- schemaVersion (string): Exportar grava "1". Importar ignora este campo.

A exportação não inclui os rótulos nem as cores deles, e Importar ignora `poolLabels` e `poolLabelColors` em um arquivo.

### Campos do objeto de fórmula (importação e exportação)

- formula (string obrigatória): não pode ser vazia e precisa ser uma notação de dados válida. Se qualquer item do arquivo falhar, nada do arquivo é importado.
- `name` (string opcional): Rótulo de exibição; padroniza para `formula` se ausente.
- `description` (string opcional): Contexto extra.
- dateAdded (string ISO 8601 opcional): quando a fórmula foi criada. Na importação, um valor ausente ou ilegível passa a ser o horário da importação.
- id (string opcional): Exportar grava um id para cada fórmula, mas Importar o ignora e dá um id novo a cada fórmula importada. Importar o mesmo arquivo duas vezes adiciona dois itens separados.

### Como Importar funciona

- Importar é tudo ou nada. Se qualquer fórmula do arquivo não for válida, nada é importado.
- Importar adiciona as fórmulas ao final da sua lista. Não verifica duplicatas.
- Importar dá um id novo a cada fórmula e remove os espaços das pontas de cada fórmula.
- A importação inteira é salva de uma vez, então o backup guarda sua lista de antes da importação.

### Exemplo mínimo de importação

Este é um modelo mínimo de importação, não uma exportação completa capturada. Uma exportação também inclui `description`, `dateAdded` e `id` em cada fórmula. Na importação, o `id` é ignorado e um novo é atribuído.

```json
{
  "version": "1.0",
  "schemaVersion": "1",
  "formulas": [
    { "formula": "2d6+3", "name": "Sword attack" }
  ]
}
```

### Compatibilidade

- Importar aceita o objeto envolvente mostrado acima ou um array de nível superior com objetos de fórmula. Um único objeto de fórmula sozinho é rejeitado.
