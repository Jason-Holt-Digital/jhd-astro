---
fullArticleAvailable: true
title: "Esquema de Categorias"
summary: "Referência do formato de arquivo JSON de categorias de tabelas."
category: "advanced"
order: 4
icon: "fa-slab fa-regular fa-sort"
duration: "Referência"
updated: "2026-11-19"
lang: "pt"
tags: ["schema", "categories", "custom-tables", "reference"]
keywords:
  - Esquema de categorias
  - JSON
  - Tabelas personalizadas
downloads:
  - label: "Esquema de Categorias"
    href: "/downloads/categories.schema.json"
    format: "JSON"
  - label: "Modelo de Categorias"
    href: "/downloads/categories_template.json"
    format: "JSON"
  - label: "Exemplo de Categorias"
    href: "/downloads/categories_sample.json"
    format: "JSON"
related:
  - organizing-custom-tables-pt
  - getting-started-with-custom-tables-pt
---

> Esta página descreve o Mythic GME 1.7.0 e posteriores.

## Visão geral

As categorias definem nomes de exibição, ícones e ordem de exibição para grupos de Tabelas Personalizadas. O app traz categorias integradas que você pode editar, e você pode adicionar suas próprias categorias ao lado delas em `categories.json`. Para gerenciar categorias dentro do app, veja [Organizando Tabelas Personalizadas](/pt/resources/organizing-custom-tables-pt/).

## Estrutura raiz

```json
{
  "defaultCategories": [
    { "id": "core-tables", "displayName": "Core Tables", "iconKey": "dice", "sortOrder": 0, "isBuiltIn": true }
  ],
  "categories": [
    { "id": "my-category", "displayName": "My Category", "iconKey": "dice", "sortOrder": 900, "isBuiltIn": false }
  ]
}
```

- `defaultCategories` (array, obrigatório). Categorias integradas que vêm com o app. Quando você edita uma categoria integrada no app, o `id` dela fica registrado em um array opcional `editedBuiltInCategoryIds`.
- `categories` (array, obrigatório). Categorias criadas por você. Adicione, renomeie ou remova suas categorias personalizadas aqui.

Os dois arrays são obrigatórios, e qualquer um deles pode ficar vazio.

## Campos de `TableCategoryInfo`

- `id` (string, obrigatório). Identificador em kebab-case.
- `displayName` (string, obrigatório). Rótulo da categoria exibido no app.
- `iconKey` (string, obrigatório). Nome do ícone. Categorias inclusas usam chaves como `dice`, `user`, `map`, `book` e `question`. Uma chave não reconhecida exibe um ícone de ponto de interrogação.
- `sortOrder` (int, obrigatório). Números menores aparecem primeiro. Categorias criadas no app recebem `900`, e a ordem só pode ser alterada editando `categories.json`.
- `isBuiltIn` (bool, obrigatório). Indica se a categoria pertence a `defaultCategories` (`true`) ou a `categories` (`false`).
- Os campos opcionais incluem `description` (string), `displayNameTranslations` (objeto que mapeia código de idioma para string), `descriptionTranslations` (objeto que mapeia código de idioma para string), `tags` (array de strings) e `source` (string).

Cada entrada precisa incluir `id`, `displayName`, `iconKey`, `sortOrder` e `isBuiltIn` com os tipos JSON corretos. Se algum campo obrigatório estiver ausente ou com o tipo errado, o app não carrega nenhuma categoria do arquivo e tenta salvar uma cópia com data e hora chamada `invalidated-categories`.

## Ciclo de vida no app

- Com os Recursos Expandidos desbloqueados, o app pode copiar um `categories.json` base para `meaning_tables/categories.json` dentro do seu local de armazenamento atual (a pasta do app, uma pasta personalizada ou o iCloud). O app mantém um arquivo existente em vez de sobrescrevê-lo.
- **Editar categoria** funciona tanto nas categorias integradas quanto nas suas. Categorias integradas não podem ser excluídas, mas você pode ocultar uma categoria integrada não editada ou excluir sua versão editada para restaurar a original. Algumas categorias integradas, como **Personalizado** e **Foco do Evento**, não podem ser ocultadas.
- **Redefinir categorias para os padrões**, em **Configurações de tabelas**, restaura todas as categorias integradas ao estado original e remove edições feitas nelas. Categorias com `isBuiltIn` definido como `false` são mantidas, e categorias ocultas continuam ocultas.
- Defina `isBuiltIn` como `false` nas suas próprias categorias. Ao salvar, o app coloca cada entrada no array correspondente ao seu valor de `isBuiltIn`. O comportamento de uma categoria como integrada no app (oferecendo **Ocultar esta categoria** e **Excluir minha versão editada**) depende de o `id` corresponder a uma categoria inclusa.
- O modelo e o exemplo em Downloads trazem apenas algumas entradas e um array `defaultCategories` vazio. Copie as entradas deles para o seu `categories.json` existente em vez de substituir o arquivo inteiro, ou as categorias integradas desaparecerão até você executar **Redefinir categorias para os padrões**.

## Downloads

A seção Downloads no final desta página inclui `categories.schema.json`, `categories_template.json` e `categories_sample.json`.

## Relacionados

- [Começando com Tabelas Personalizadas](/pt/resources/getting-started-with-custom-tables-pt/) e [Organizando Tabelas Personalizadas](/pt/resources/organizing-custom-tables-pt/) para criar e gerenciar categorias no app.
- [Esquema de Tabela Personalizada](/pt/resources/custom-table-schema-pt/) para o formato JSON de Tabelas de Significado e tabelas de Foco de Evento.
