---
fullArticleAvailable: true
title: "Vincular e aninhar tabelas"
summary: "Um vínculo faz uma rolagem levar a outra."
appSummary: "Como vincular tabelas para que uma rolagem leve direto a outra."
category: "custom-tables"
order: 3
icon: "fa-slab fa-regular fa-link"
duration: "11 min de leitura"
updated: "2026-11-19"
lang: "pt"
tags: ["custom-tables", "linking", "advanced"]
keywords:
  - Vinculando tabelas
  - Aninhando tabelas
  - entryRollOn
  - tableRollOn
related:
  - custom-table-schema-pt
  - importing-and-exporting-custom-tables-pt
---

> Este guia descreve o Mythic GME 1.7.0 e posteriores.

Um vínculo faz uma rolagem levar direto a outra. Quando você rola uma tabela com vínculo, o app pode segui-lo e rolar a tabela ou Lista de Aventura vinculada na hora, mantendo o ritmo da sessão.

## Dois tipos de vínculo

- **Links de entrada** pertencem a uma entrada específica. O app só os segue quando essa entrada sai como resultado.
- **Tabelas vinculadas** pertencem à tabela inteira. Quando você rola a tabela, o app segue cada Tabela de Significado listada ali, a menos que a tabela use pesos.

## Vincular uma entrada

Em uma entrada, escolha **Adicionar links** para abrir **Selecionar links de entrada**. A tela tem duas abas:

- **Tabelas** lista suas Tabelas de Significado e tabelas de Foco de Evento.
- **Listas de aventuras** lista Personagens, Tramas, Aspectos e cada Lista Personalizada do Diário aberto, pelo nome.

A aba **Listas de aventuras** também lista **NPCs do PC** e **Tramas do PC**. Um vínculo com qualquer uma delas rola na Lista Personalizada correspondente do Diário aberto. Se o Diário não tiver uma lista com esse nome, o app ignora o vínculo. Se a lista existir, mas estiver vazia, o app a rola mesmo assim e mostra o resultado `Choose`.

No celular, o assistente de criação mantém todos os vínculos que você marcar para uma entrada, e o editor de tabelas também mantém todos eles.

## Vincular uma tabela inteira

**Tabelas vinculadas** fica na aba **Controles** do editor de tabelas. Escolha **Selecionar tabelas** para abrir **Selecionar tabelas emparelhadas**, que lista as Tabelas de Significado disponíveis para adicionar. Ela também mostra qualquer tabela de Foco de Evento que já esteja vinculada para você poder removê-la, mas não oferece outras tabelas de Foco de Evento para adicionar.

- Escolha Tabelas de Significado aqui. Se uma tabela de Foco de Evento estiver vinculada no nível da tabela, o app a ignora quando você rola.
- Quando você rola uma Tabela de Significado que usa pesos (ou seja, qualquer entrada tem peso acima de 1), o app ignora os vínculos de nível de tabela.
- No celular, o assistente de criação não consegue definir vínculos de nível de tabela. Salve a tabela primeiro e depois abra-a no editor para adicionar **Tabelas vinculadas**.

## O que acontece quando você rola

- O app segue os vínculos da entrada que saiu. Ele rola uma Tabela de Significado vinculada e depois segue os vínculos dessa própria tabela. Ele rola uma tabela de Foco de Evento vinculada uma vez e rola uma lista vinculada uma vez.
- Quando uma tabela está configurada para rolar duas vezes, o app segue apenas os vínculos do primeiro resultado.
- O app também rola uma vez cada Tabela de Significado em **Tabelas vinculadas**, a menos que a tabela rolada use pesos.
- Uma cadeia pode descer 10 níveis abaixo da tabela que você rolou. Além desse limite, o resultado mostra `Max Depth Exceeded`.
- Se o destino de um vínculo não for encontrado, o app o ignora sem mostrar mensagem.
- Uma tabela integrada que você ocultou continua rolando quando outra tabela vincula para ela.

## Vínculos em um Evento Aleatório

Em um Evento Aleatório, o app rola cada Tabela de Significado vinculada à tabela de Foco de Evento. Ele também segue os vínculos da entrada de Foco de Evento que saiu, o que pode rolar Tabelas de Significado ou Listas de Aventura.

Se uma entrada de Foco de Evento vincular para outra tabela de Foco de Evento, o app rola essa segunda tabela e mostra o resultado junto com o Evento Aleatório.

## Vínculos em um arquivo

Em um arquivo CSV, coloque os vínculos de entrada em uma coluna `entryRollOn` e separe vários destinos com ponto e vírgula. Em JSON, os vínculos de entrada ficam no array `entryRollOn` da entrada, e os vínculos de nível de tabela ficam no array `tableRollOn` da tabela.

Cada vínculo guarda o ID de uma tabela ou o nome de uma lista. Um vínculo com uma Lista Personalizada faz a correspondência pelo nome da lista. Para a sintaxe completa dos arquivos, veja [Esquema de Tabela Personalizada](/pt/resources/custom-table-schema-pt/) e [Importando e Exportando Tabelas Personalizadas](/pt/resources/importing-and-exporting-custom-tables-pt/).
