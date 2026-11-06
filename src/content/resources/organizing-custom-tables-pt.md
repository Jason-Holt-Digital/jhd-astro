---
title: "Organizando Tabelas Personalizadas"
summary: "Use categorias, ícones, tags e links para manter suas Tabelas Personalizadas fáceis de encontrar e usar."
category: "custom-tables"
order: 2
icon: "fa-slab fa-regular fa-list-squares"
duration: "5 min de leitura"
updated: "2026-11-04"
lang: "pt"
tags: ["custom-tables", "categories", "icons", "tags", "linking"]
keywords:
  - Categorias
  - Ícones
  - Tags
  - Vinculando tabelas
  - Tabelas personalizadas
related:
  - categories-schema
  - getting-started-with-custom-tables
---

> Este guia descreve o Mythic GME 1.7.0 e posteriores.

## Onde organizar

- No celular, abra a gaveta de navegação e toque em EDITOR DE TABELAS, em Ferramentas. Em um tablet ou computador, selecione Tabelas Personalizadas no trilho de navegação ou, no Layout clássico de 6 painéis (Desktop), clique no botão de ícone Tabelas Personalizadas no canto inferior direito.
- No celular, escolha a aba Categoria. Em um tablet ou computador, escolha o terceiro ícone da barra lateral esquerda (Categorias).
- Categorias, ícones e traduções são gerenciados junto com suas tabelas.

> Nota de desbloqueio: no Google Play, Amazon e Apple App Store, Tabelas Personalizadas fazem parte do desbloqueio único de Recursos Expandidos. No itch.io e na Microsoft Store, elas fazem parte da compra única do app desktop.

## Significado vs Foco de Evento

- Tabelas de Significado: oferecem palavras para você interpretar e podem encadear outras tabelas.
- Tabelas de Foco de Evento: decidem que tipo de evento acontece (ex., Ação de NPC), frequentemente a primeira rolagem em um fluxo de trabalho de evento

## Categorias e ícones

- Categorias definem ícone, rótulo e comportamento de ordenação para grupos de tabelas
- O app semeia categorias integradas de um arquivo de recursos. Você pode restaurar as categorias embutidas com Redefinir categorias para os padrões em Configurações de tabelas. As categorias que você criou são mantidas.
- Você pode editar uma categoria integrada ou adicionar as suas com o botão + na aba Categoria. As suas aparecem na mesma lista que as integradas, e o app não tem um controle para reordená-las.

Remover e ocultar categorias
- Uma categoria integrada que você não editou oferece **Ocultar esta categoria**. As tabelas dela somem das suas listas junto com ela. Nenhum arquivo é excluído.
- Uma categoria integrada que você editou oferece **Excluir minha versão editada**, que restaura a categoria original.
- Uma categoria criada por você oferece **Excluir**.
- A exclusão de uma categoria não pode ser desfeita.
- Algumas categorias integradas não editadas não podem ser ocultadas, entre elas **Personalizado** e **Foco do Evento**. Também não é possível ocultar uma categoria que contenha a **Tabela de Foco de Eventos**, nem a própria tabela.
- Para mostrar itens ocultos de novo, abra **Configurações de tabelas** e expanda **Tabelas ocultas** ou **Categorias ocultas**. Use **Mostrar** para recuperar um item ou **Mostrar todas** para recuperar todos. Ao mostrar uma categoria, as tabelas dela também voltam, exceto as que continuarem ocultas individualmente.
- Para voltar às tabelas integradas originais depois de editá-las, use **Descartar alterações nas tabelas integradas** nas Configurações de tabelas.

Melhores práticas
- Nomes de exibição curtos; adicione detalhes nas descrições
- Troque para seu idioma preferido. O app está disponível em inglês, português, português do Brasil, espanhol, espanhol do México, francês, italiano e alemão. Obrigado, RetroPunk, pelo suporte em português!

## Tags e busca

- Adicione tags às tabelas para melhorar a busca e o agrupamento. Um item só pode ter tags por meio de uma coluna tags em um CSV importado ou por JSON.
- Use tags consistentes para arcos de aventura, biomas, facções, tons, etc.

## Vinculando tabelas

- Defina um link em uma entrada específica para rolar imediatamente outra tabela ou uma Lista de Aventura quando esse resultado aparecer.
- Use Tabelas vinculadas na aba Controles para rolar uma ou mais Tabelas de Significado sempre que esta tabela for rolada, a menos que a tabela use pesos. Uma lista só pode ser vinculada a partir de um único item.
- As rolagens encadeadas param depois de 10 níveis.

## Arquivos iniciais

- Modelos/exemplos de Significado: JSON, CSV, TXT, PSV
- Modelos/exemplos de Foco de Evento: JSON, CSV, TXT, PSV
- Modelo/exemplo de Categorias
- Encontre-os sob os Downloads iniciais do guia "Começando com Tabelas Personalizadas"

## Tabelas ponderadas

- Ainda não dá para montar uma tabela ponderada à mão. Você pode importar um CSV de Tabela de Significado com as colunas result e weight, com até 100 linhas. Quando alguma entrada tem peso maior que 1, o app escolhe uma entrada pelo peso em vez de rolar nos intervalos. Veja "Começando com Tabelas Personalizadas" para detalhes.

## Próximos passos

- Oriente-se e crie suas primeiras tabelas: veja "Começando com Tabelas Personalizadas"
- Detalhes de importar/exportar: veja "Importando e Exportando Tabelas Personalizadas"
- Referência de campo JSON: veja "Esquema de Tabela Personalizada" e "Esquema de Categorias"
