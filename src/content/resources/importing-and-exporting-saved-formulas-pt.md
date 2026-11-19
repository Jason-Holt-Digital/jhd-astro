---
fullArticleAvailable: true
title: "Importando e Exportando Fórmulas Salvas"
summary: "Como importar conjuntos prontos, fazer backup e compartilhar suas fórmulas de dados salvas."
category: "dice-roller"
order: 4
icon: "fa-slab fa-regular fa-exchange"
duration: "5 min de leitura"
updated: "2026-11-19"
lang: "pt"
tags: ["dice", "formulas", "import", "export"]
keywords:
  - Fórmulas Salvas
  - Importar
  - Exportar
  - JSON
related:
  - saving-and-managing-dice-formulas-pt
  - formula-schema-pt
---

> Este guia descreve o Mythic GME 1.7.0 e posteriores.

Use este guia quando quiser importar conjuntos prontos de fórmulas, levar suas Fórmulas Salvas para outro dispositivo ou guardar uma cópia de backup. Se estiver procurando notação de dados ou edição da lista no dia a dia, comece por [Fórmulas de Dados e Personalização](/pt/resources/dice-formulas-and-customization-pt/) ou [Salvando e Gerenciando Fórmulas de Dados](/pt/resources/saving-and-managing-dice-formulas-pt/).

## Onde encontrar Importar e Exportar

Abra o **Estúdio de Dados** e toque em **Gerenciar Fórmulas**. No celular, **Salvar Fórmula** e **Gerenciar Fórmulas** aparecem abaixo do campo de fórmula. Em tablets e computadores, aparecem acima dele.

## Importar Fórmulas Salvas

Toque em **Gerenciar Fórmulas > Importar** e escolha um arquivo `.json`. A importação adiciona cada item do arquivo ao final da sua lista de Fórmulas Salvas. Não existe opção de substituir nem verificação de duplicatas.

A importação não exige um nome de arquivo específico. Nos apps nativos, o arquivo precisa terminar em `.json` (com letras maiúsculas ou minúsculas). Na web, o seletor de arquivos pede arquivos `.json` sem conferir a extensão separadamente.

### Formatos JSON aceitos

O formato recomendado é o objeto envolvido canônico:

```json
{
  "formulas": [
    { "formula": "2d20kh+5", "name": "Advantage +5", "description": "D&D 5e attack check" }
  ],
  "version": "1.0",
  "schemaVersion": "1"
}
```

Um arquivo exportado sempre inclui `"version": "1.0"` e `"schemaVersion": "1"` como texto, e a importação ignora os dois campos.

Para manter compatibilidade, a importação também aceita um array de nível superior com objetos de fórmula. Um único objeto de fórmula isolado é rejeitado, então coloque-o dentro de um array. A exportação sempre grava o formato de objeto envolvido.

## Exportar Fórmulas Salvas

Toque em **Gerenciar Fórmulas > Exportar** para baixar ou salvar um arquivo `.json` que você pode guardar como backup ou compartilhar.

- A exportação não inclui os rótulos salvos na aba **Unir** nem as cores deles, e a importação ignora rótulos presentes em um arquivo.
- Quando você muda o armazenamento de lugar ou usa **Importar pasta anterior**, o app combina suas fórmulas salvas, seus rótulos e as cores dos rótulos no novo local.
- Se outro dispositivo que compartilha seu armazenamento ainda rodar a versão 1.6.x, salvar uma fórmula nele remove seus rótulos e as cores deles em todos os dispositivos que compartilham a lista. Veja a seção sobre versões mistas em [Esquema de Fórmulas](/pt/resources/formula-schema-pt/).

## Colocando um arquivo manualmente

Se você preferir colocar um arquivo direto no armazenamento em vez de usar a importação, dê a ele o nome `saved_formulas.json` e coloque-o na pasta `formulas` dentro da pasta de armazenamento do app.

Esse arquivo passa a ser toda a sua lista de Fórmulas Salvas. Se o app não conseguir lê-lo, pode carregar uma cópia de backup legível quando houver uma disponível, sem modificar seu arquivo.

## Downloads iniciais

Conjuntos de fórmulas prontos para importar para sistemas populares. Use **Gerenciar Fórmulas > Importar** para adicionar qualquer conjunto à sua lista atual.

- D&D 5e: [Baixar](/downloads/formulas_dnd5e.json)
- Pathfinder 2e: [Baixar](/downloads/formulas_pf2.json)
- Shadowrun: [Baixar](/downloads/formulas_shadowrun.json)
- Blades in the Dark: [Baixar](/downloads/formulas_blades.json)
- Savage Worlds: [Baixar](/downloads/formulas_savage_worlds.json)
- Year Zero Engine (parcial): [Baixar](/downloads/formulas_year_zero.json)
- Vampire V5: [Baixar](/downloads/formulas_vampire_v5.json)
- PbtA: [Baixar](/downloads/formulas_pbta.json)
- Fate Core: [Baixar](/downloads/formulas_fate.json)
- Call of Cthulhu 7e: [Baixar](/downloads/formulas_coc7e.json)
- Cypher: [Baixar](/downloads/formulas_cypher.json)
- Warhammer (paradas de d6): [Baixar](/downloads/formulas_warhammer_d6.json)
- Lancer: [Baixar](/downloads/formulas_lancer.json)
- Ironsworn: [Baixar](/downloads/formulas_ironsworn.json)
- Starforged: [Baixar](/downloads/formulas_starforged.json)
- Dungeon Crawl Classics: [Baixar](/downloads/formulas_dcc.json)
- The One Ring (aproximação): [Baixar](/downloads/formulas_one_ring.json)

## Dicas práticas

- Mantenha os nomes das fórmulas curtos e coloque contexto extra na descrição.
- Exporte antes de uma importação grande para guardar uma cópia da sua lista atual. Lembre-se de que importar essa exportação de volta para a mesma lista adiciona cada fórmula novamente como um novo item, pois a importação apenas acrescenta entradas.
- Use o formato envolvido canônico (`formulas`, `version` e `schemaVersion`) ao compartilhar conjuntos de fórmulas com outros jogadores.

O Estúdio de Dados usa o `mythic_dice_parser` 8.3.0, o motor de dados próprio do app derivado do `dart_dice_parser` do Adventuresmith. Teste fórmulas personalizadas no Estúdio de Dados para confirmar como elas se comportam no app.

## Guias relacionados

- [Começando com o Estúdio de Dados](/pt/resources/getting-started-with-the-dice-roller-pt/)
- [Salvando e Gerenciando Fórmulas de Dados](/pt/resources/saving-and-managing-dice-formulas-pt/)
- [Fórmulas de Dados e Personalização](/pt/resources/dice-formulas-and-customization-pt/)
- [Esquema de Fórmulas](/pt/resources/formula-schema-pt/)
