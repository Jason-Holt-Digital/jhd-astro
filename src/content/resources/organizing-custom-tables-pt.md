---
fullArticleAvailable: true
title: "Organizando Tabelas Personalizadas"
summary: "Use categorias, ícones, tags e vínculos para manter suas Tabelas Personalizadas fáceis de encontrar e usar."
appSummary: "Use categorias, ícones e tags para organizar suas Tabelas de Significado e de Foco de Evento."
category: "custom-tables"
order: 2
icon: "fa-slab fa-regular fa-list-squares"
duration: "5 min de leitura"
updated: "2026-11-19"
lang: "pt"
tags: ["custom-tables", "categories", "icons", "tags", "linking"]
keywords:
  - Categorias
  - Ícones
  - Tags
  - Vinculando tabelas
  - Tabelas personalizadas
related:
  - categories-schema-pt
  - getting-started-with-custom-tables-pt
---

> Este guia descreve o Mythic GME 1.7.0 e posteriores.

À medida que sua biblioteca de Tabelas Personalizadas cresce, categorias, ícones e tags mantêm tudo fácil de encontrar durante a sessão.

## Onde organizar

No celular, abra a gaveta de navegação, toque em **EDITOR DE TABELAS**, em **Ferramentas**, e depois na aba **Categoria**. Em um tablet ou computador, selecione **Tabelas Personalizadas** na barra lateral de navegação e selecione o terceiro ícone da barra lateral esquerda (**Categorias**).

Categorias, ícones e traduções ficam ao lado das suas tabelas.

> ### Como desbloquear Tabelas Personalizadas
>
> - Na Apple App Store, no Google Play e na Amazon, Tabelas Personalizadas faz parte do desbloqueio único de Recursos Expandidos.
> - Na Microsoft Store e no itch.io, Tabelas Personalizadas vem incluído no Mythic GME Digital.

## Tabelas de Significado e tabelas de Foco de Evento

- **Tabelas de Significado** entregam palavras para você interpretar e podem encadear outras tabelas.
- **Tabelas de Foco de Evento** decidem que tipo de evento acontece, como Ação de PNJ, e costumam ser a primeira rolagem de um Evento Aleatório.

## Categorias e ícones

As categorias definem ícone, rótulo e ordenação para grupos de tabelas. Elas controlam como as tabelas aparecem agrupadas no app, mas não encadeiam rolagens. Se você quiser que uma rolagem dispare outra, use a vinculação de tabelas.

O app carrega as categorias integradas a partir de um arquivo de recursos incluso. Você pode restaurar essas categorias com **Redefinir categorias para os padrões** em **Configurações de tabelas**, sem mexer nas categorias que você criou.

Você pode editar uma categoria integrada ou criar uma nova com o botão **+** na aba **Categoria**. Suas categorias personalizadas aparecem na mesma lista das integradas. O app não tem um controle interno para reordenar categorias, mas você pode ajustar `sortOrder` direto em `categories.json`, como explicado em [Esquema de Categorias](/pt/resources/categories-schema-pt/).

### Remover e ocultar categorias

- Uma categoria integrada que você não editou oferece **Ocultar esta categoria**. As tabelas dela saem das suas listas junto com ela, sem excluir nenhum arquivo.
- Uma categoria integrada que você editou oferece **Excluir minha versão editada**, que restaura a categoria original.
- Uma categoria criada por você oferece **Excluir**.
- A exclusão de uma categoria não pode ser desfeita.
- Algumas categorias integradas não editadas não podem ser ocultadas, entre elas **Personalizado** e **Foco do Evento**. Uma categoria que contém a **Tabela de Foco de Eventos** também não pode ser ocultada, nem a própria tabela.
- Para mostrar itens ocultos novamente, abra **Configurações de tabelas** e expanda **Tabelas ocultas** ou **Categorias ocultas**. Escolha **Mostrar** para um item ou **Mostrar todas** para a lista inteira. Mostrar uma categoria traz de volta as tabelas dela, exceto qualquer tabela que você ocultou separadamente.
- Para restaurar as tabelas integradas originais depois de editá-las, use **Descartar alterações nas tabelas integradas** em **Configurações de tabelas**.

### Dicas de nomes e idiomas

Mantenha os nomes de exibição curtos e coloque o contexto extra na descrição para que as linhas continuem legíveis em telas pequenas.

Você pode adicionar traduções no idioma de sua preferência. O app oferece suporte para inglês, português, português do Brasil, espanhol, espanhol do México, francês, italiano e alemão. Obrigado à RetroPunk pelo suporte em português do Brasil.

## Tags e busca

Adicione tags às suas tabelas para acelerar a busca e o agrupamento. Tags consistentes funcionam bem para arcos de aventura, biomas, facções e tons de campanha.

Uma entrada só pode receber tags por meio de uma coluna `tags` em um CSV importado ou via JSON.

## Categorias versus vincular e aninhar tabelas

As categorias organizam tabelas em grupos para você encontrá-las rápido. Vincular e aninhar conectam rolagens para que rolar uma tabela acione outra tabela ou Lista de Aventura automaticamente.

- Defina um **Link de entrada** em um item específico para rolar outra tabela ou uma Lista de Aventura sempre que esse resultado sair.
- Use **Tabelas vinculadas** na aba **Controles** para rolar uma ou mais Tabelas de Significado toda vez que a tabela for rolada, a menos que ela use pesos. Listas só podem ser vinculadas a partir de uma única entrada.
- Rolagens encadeadas param após 10 níveis.

Para ver todos os detalhes de links de entrada, links de tabela e cadeias de Evento Aleatório, leia [Vincular e aninhar tabelas](/pt/resources/linking-and-nesting-tables-pt/).

## Arquivos iniciais e tabelas ponderadas

Os modelos e exemplos em JSON, CSV, TXT e PSV para Tabelas de Significado e tabelas de Foco de Evento, junto com o modelo e o exemplo de Categorias, ficam na seção Downloads iniciais de [Começando com Tabelas Personalizadas](/pt/resources/getting-started-with-custom-tables-pt/).

Ainda não é possível criar uma tabela ponderada à mão no editor, mas você pode importar um CSV de Tabela de Significado com as colunas `result` e `weight`, com até 100 linhas. Quando qualquer entrada tem peso acima de 1, o app escolhe o resultado pelo peso em vez de rolar nos intervalos. Veja [Começando com Tabelas Personalizadas](/pt/resources/getting-started-with-custom-tables-pt/) para os detalhes.

## Próximos passos

- Crie suas primeiras tabelas em [Começando com Tabelas Personalizadas](/pt/resources/getting-started-with-custom-tables-pt/).
- Configure rolagens encadeadas em [Vincular e aninhar tabelas](/pt/resources/linking-and-nesting-tables-pt/).
- Importe e exporte arquivos em [Importando e Exportando Tabelas Personalizadas](/pt/resources/importing-and-exporting-custom-tables-pt/).
- Consulte os campos JSON em [Esquema de Tabela Personalizada](/pt/resources/custom-table-schema-pt/) e [Esquema de Categorias](/pt/resources/categories-schema-pt/).
