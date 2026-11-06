---
title: "Esquema de Categorias"
summary: "Defina e estenda o registro de categorias para Tabelas Personalizadas (ícones, rótulos, ordem)."
category: "advanced"
order: 4
icon: "fa-slab fa-regular fa-sort"
duration: "Referência"
updated: "2026-11-04"
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
  - organizing-custom-tables
  - getting-started-with-custom-tables
---

> Esta página descreve o Mythic GME 1.7.0 e posteriores.

## Em Português Claro

Categorias fornecem nomes e ícones para grupos de tabelas. O app vem com itens integrados, e você pode editá-los. Você adiciona os seus ao lado deles.

## Estrutura Raiz

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

- `defaultCategories`: as categorias integradas que vêm com o app. Você pode editar uma categoria integrada no app. O app registra os ids das categorias integradas que você editou em uma lista opcional `editedBuiltInCategoryIds`.
- `categories`: as categorias que você criou. Adicione, renomeie ou remova aqui.

Os dois arrays são obrigatórios, e qualquer um deles pode estar vazio.

## Campos TableCategoryInfo

- `id` (string em kebab-case)
- `displayName` (string)
- iconKey (string). O arquivo incluído usa chaves como dice, user, map, book e question. Uma chave que o app não conhece mostra um ícone de ponto de interrogação.
- sortOrder (inteiro, números menores primeiro). As categorias criadas no app recebem 900, e você só pode mudar a ordem editando este arquivo.
- `isBuiltIn` (booleano)
- Opcional: `description` (string), `displayNameTranslations` (objeto de código de idioma para string), `descriptionTranslations` (objeto de código de idioma para string), `tags` (array de strings) e `source` (string)

Todo item precisa de id, displayName, iconKey, sortOrder e isBuiltIn. Se algum estiver faltando ou tiver o tipo errado, o app não consegue carregar nenhuma categoria do arquivo e tenta salvar uma cópia chamada invalidated-categories com data e hora.

## Ciclo de vida no app

- Cópia da base: com premium, o app pode copiar um `categories.json` base para seu local de armazenamento atual (meaning_tables/categories.json), que pode ser a pasta do próprio app, uma pasta personalizada ou o iCloud. Normalmente ele mantém um arquivo existente em vez de sobrescrevê-lo.
- Editar categoria também funciona nas categorias integradas. Uma categoria integrada não pode ser excluída. Você pode ocultar uma que não editou, e pode excluir sua versão editada de uma para recuperar a original. Algumas categorias integradas, como Personalizado e Foco do Evento, não podem ser ocultadas.
- Redefinir categorias para os padrões, em Configurações de tabelas, restaura cada categoria integrada como ela vem com o app, então suas alterações nas categorias integradas são removidas. Categorias cujo isBuiltIn é false são mantidas, e as categorias ocultas continuam ocultas.
- Defina isBuiltIn como false nas suas próprias categorias. Quando o app salva, ele coloca cada item no array que combina com essa marcação. Se uma categoria conta como integrada no app, com Ocultar e Excluir minha versão editada, depende de o id dela ser o de uma categoria que vem com o app.
- O modelo e o exemplo de categorias em Downloads têm só algumas categorias, com `defaultCategories` vazio. Copie os itens deles para o seu próprio categories.json. Não substitua o arquivo inteiro por eles, ou as categorias integradas somem até você usar Redefinir categorias para os padrões.

## Downloads

Veja a seção de Downloads no final desta página para os arquivos.

## Relacionado

- Dicas de organização e primeiros passos: "Começando com Tabelas Personalizadas", "Organizando Tabelas Personalizadas"
- Esquemas de tabelas: "Esquema de Tabela Personalizada"
