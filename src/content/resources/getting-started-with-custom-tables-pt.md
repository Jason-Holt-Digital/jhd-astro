---
fullArticleAvailable: true
title: "Começando com Tabelas Personalizadas"
summary: "Crie Tabelas de Significado e tabelas de Foco de Evento, adicione traduções e vínculos, e importe modelos prontos."
appSummary: "Crie Tabelas de Significado e de Foco de Evento, adicione traduções e vínculos, e importe tabelas de arquivos."
category: "custom-tables"
order: 1
icon: "fa-slab fa-regular fa-newspaper"
duration: "9 min de leitura"
updated: "2026-11-19"
lang: "pt"
tags: ["custom-tables", "getting-started", "meaning-tables", "event-focus", "categories"]
keywords:
  - Tabelas personalizadas
  - Tabelas de Significado
  - Foco de Evento
  - Categorias
  - Começando
downloads:
  - label: "Modelo de Significado (JSON)"
    href: "/downloads/meaning_table_template.json"
    format: "JSON"
  - label: "Exemplo de Significado (JSON)"
    href: "/downloads/meaning_table_sample.json"
    format: "JSON"
  - label: "Modelo de Significado (CSV)"
    href: "/downloads/meaning_table_template.csv"
    format: "CSV"
  - label: "Exemplo de Significado (CSV)"
    href: "/downloads/meaning_table_example.csv"
    format: "CSV"
  - label: "Modelo de Significado (TXT)"
    href: "/downloads/meaning_table_template.txt"
    format: "TXT"
  - label: "Modelo de Significado (PSV)"
    href: "/downloads/meaning_table_template.psv"
    format: "PSV"
  - label: "Modelo de Foco de Evento (JSON)"
    href: "/downloads/event_focus_template.json"
    format: "JSON"
  - label: "Exemplo de Foco de Evento (JSON)"
    href: "/downloads/event_focus_sample.json"
    format: "JSON"
  - label: "Modelo de Foco de Evento (CSV)"
    href: "/downloads/event_focus_template.csv"
    format: "CSV"
  - label: "Exemplo de Foco de Evento (CSV)"
    href: "/downloads/event_focus_example.csv"
    format: "CSV"
  - label: "Modelo de Foco de Evento (TXT)"
    href: "/downloads/event_focus_template.txt"
    format: "TXT"
  - label: "Modelo de Foco de Evento (PSV)"
    href: "/downloads/event_focus_template.psv"
    format: "PSV"
  - label: "Modelo de Categorias (JSON)"
    href: "/downloads/categories_template.json"
    format: "JSON"
  - label: "Exemplo de Categorias (JSON)"
    href: "/downloads/categories_sample.json"
    format: "JSON"
related:
  - custom-table-schema-pt
  - categories-schema-pt
  - importing-and-exporting-custom-tables-pt
---

> Este guia descreve o Mythic GME 1.7.0 e posteriores.

Com Tabelas Personalizadas, você pode criar suas próprias Tabelas de Significado e tabelas de Foco de Evento direto no app, editar tabelas integradas para o seu jogo ou importar arquivos prontos.

## Onde encontrar Tabelas Personalizadas

No celular, abra a gaveta de navegação e toque em **EDITOR DE TABELAS**, em **Ferramentas**. Em um tablet ou computador, selecione **Tabelas Personalizadas** na barra lateral de navegação.

> ### Como desbloquear Tabelas Personalizadas
>
> - Na Apple App Store, no Google Play e na Amazon, Tabelas Personalizadas faz parte do desbloqueio único de Recursos Expandidos.
> - Na Microsoft Store e no itch.io, Tabelas Personalizadas vem incluído no Mythic GME Digital.

## Faça sua primeira Tabela de Significado

1. No celular, abra a aba **Oráculo** e toque no botão **+** para iniciar o assistente Criar Tabela. Em um tablet ou computador, selecione o primeiro ícone da barra lateral esquerda (**Tabelas de Significado**) e clique no botão **+** abaixo dos ícones.
2. Dê um nome à tabela e escolha uma categoria na lista. Se quiser uma categoria própria, crie-a antes com o botão **+** na aba **Categoria**.
3. Defina o intervalo de rolagem. Para a primeira tabela, 1 a 10 ou 1 a 20 é um bom tamanho inicial, e você pode expandir para 1 a 100 mais tarde.
4. Adicione seus itens. No assistente do celular, o app distribui os itens igualmente pelo intervalo para você. Mantenha os intervalos contínuos, sem lacunas nem sobreposições, algo que o app verifica antes de salvar.
5. Adicione descrição, tags ou traduções se quiser. Apenas tabelas de Foco de Evento e categorias têm ícone próprio.
6. Salve a tabela e teste com algumas rolagens.

## Faça uma tabela de Foco de Evento

1. No celular, abra a aba **Evento** e toque no botão **+**. Em um tablet ou computador, selecione o segundo ícone da barra lateral esquerda (**Foco do Evento**) e clique no botão **+** abaixo dos ícones.
2. Defina o intervalo. Tabelas de Foco de Evento costumam ir de 1 a 100, mas intervalos menores também funcionam bem.
3. Adicione itens que descrevam o tipo de evento que acontece, como Ação de PNJ ou Avançar em Direção a uma Trama.
4. Salve a tabela e faça algumas rolagens de teste.

Depois de salvar uma tabela, você pode conectar rolagens entre tabelas e Listas de Aventura usando **Links de entrada** e **Tabelas vinculadas**. Veja [Vincular e aninhar tabelas](/pt/resources/linking-and-nesting-tables-pt/) para saber como as rolagens encadeadas funcionam.

## Edite, oculte ou exclua tabelas integradas

Você pode editar qualquer tabela integrada. O app salva a sua versão separadamente e a usa no lugar da original. Se quiser manter as duas versões, escolha **Duplicado** no menu da tabela e edite a cópia.

As redefinições não apagam suas edições nas tabelas. Para voltar às originais que vêm com o app, use **Descartar alterações nas tabelas integradas** em **Configurações de tabelas**.

A forma de remover uma tabela depende da origem dela:

- Uma tabela integrada que você não editou oferece **Ocultar esta tabela** em vez de **Excluir**. Ocultar retira a tabela das suas listas sem excluir nenhum arquivo, e você pode mostrá-la novamente em **Configurações de tabelas**.
- Uma tabela integrada que você editou oferece **Excluir minha versão editada**. O app remove a sua cópia e carrega a original de novo, e você pode desfazer essa ação.
- Uma tabela criada por você oferece **Excluir**, que você também pode desfazer.

## Traduções e metadados

Você pode adicionar traduções por tabela e por entrada enquanto monta seu material. O idioma padrão é `en`.

Adicione tags para facilitar a busca e o agrupamento, e escolha ícones de categoria uma vez para que todas as tabelas daquela categoria compartilhem o mesmo ícone. Para saber mais sobre categorias, ícones e tags, veja [Organizando Tabelas Personalizadas](/pt/resources/organizing-custom-tables-pt/).

## Downloads iniciais

A seção Downloads no final desta página traz modelos e exemplos em JSON, CSV, TXT e PSV para usar como ponto de partida. Para trazer um arquivo para o app, abra a aba **Arquivos** em Tabelas Personalizadas (o ícone **Importação/Exportação** em um tablet ou computador) e toque em **Tabelas Oracle** para uma Tabela de Significado ou em **Tabelas de Foco do Evento** para um arquivo de Foco de Evento.

Para regras de formato e solução de problemas, veja [Importando e Exportando Tabelas Personalizadas](/pt/resources/importing-and-exporting-custom-tables-pt/).

## Tabelas ponderadas

Ainda não é possível montar uma tabela ponderada à mão no editor. Na aba **Controles**, a opção **Ponderado** aparece marcada como **Em breve**.

Para criar uma Tabela de Significado ponderada agora, importe um CSV de Tabela de Significado com as colunas `result` e `weight`, com até 100 linhas. O app distribui os pesos em 100 posições, então os pesos salvos podem diferir um pouco dos números do seu arquivo.

Quando alguma entrada de uma Tabela de Significado tem peso acima de 1, o app escolhe uma entrada pelo peso e não rola as tabelas vinculadas. Tabelas de Foco de Evento sempre rolam nos seus intervalos.

Se você escolher **Faixas de rolagem** na aba **Controles**, o app divide os intervalos novamente, mas os pesos continuam nas entradas. Enquanto alguma entrada tiver peso acima de 1, o app continua escolhendo pelo peso.

## Próximos passos

- Veja como categorias, ícones e tags funcionam em [Organizando Tabelas Personalizadas](/pt/resources/organizing-custom-tables-pt/).
- Encadeie rolagens entre tabelas e Listas de Aventura em [Vincular e aninhar tabelas](/pt/resources/linking-and-nesting-tables-pt/).
- Prepare arquivos CSV, TXT, PSV, JSON e Foundry VTT em [Importando e Exportando Tabelas Personalizadas](/pt/resources/importing-and-exporting-custom-tables-pt/).
- Confira cada campo JSON em [Esquema de Tabela Personalizada](/pt/resources/custom-table-schema-pt/) e [Esquema de Categorias](/pt/resources/categories-schema-pt/).
