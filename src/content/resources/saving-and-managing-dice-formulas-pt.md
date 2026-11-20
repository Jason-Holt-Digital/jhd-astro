---
fullArticleAvailable: true
title: "Salvando e Gerenciando Fórmulas de Dados"
summary: "Como salvar, organizar, importar e exportar suas fórmulas de dados salvas."
category: "dice-roller"
order: 2
icon: "fa-slab fa-regular fa-floppy-disk"
duration: "5 min de leitura"
updated: "2026-11-19"
lang: "pt"
tags: ["dice", "formulas", "saved-formulas", "import", "export"]
keywords:
  - Fórmulas Salvas
  - Fórmulas de dados
  - Importar
  - Exportar
  - JSON
downloads:
  - label: "Modelo Vazio"
    href: "/downloads/saved_formulas_template.json"
    format: "JSON"
  - label: "Exemplo Preenchido"
    href: "/downloads/saved_formulas_sample.json"
    format: "JSON"
  - label: "Esquema de Fórmulas Salvas"
    href: "/downloads/saved_formulas.schema.json"
    format: "JSON"
related:
  - formula-schema-pt
  - dice-formulas-and-customization-pt
---

> Este guia descreve o Mythic GME 1.7.0 e posteriores.

Salve as rolagens de dados que você usa com frequência para não precisar redigitá-las no meio de uma cena. As fórmulas salvas são globais no app, e não presas a um único Diário de Aventura, então elas acompanham você de campanha em campanha.

## Onde encontrar Fórmulas Salvas

Abra o **Estúdio de Dados**. No celular, **Salvar Fórmula** e **Gerenciar Fórmulas** aparecem abaixo do campo de fórmula. Em tablets e computadores, aparecem acima dele.

O app lê e grava arquivos `.json` automaticamente por esses botões, então você nunca precisa editar JSON à mão, a menos que queira. Se quiser inspecionar arquivos de exemplo, confira o modelo vazio, o exemplo preenchido e o esquema na seção de Downloads abaixo.

## Salvar, editar e organizar fórmulas

1. **Salve uma fórmula.** Digite ou monte uma fórmula no campo e toque em **Salvar Fórmula** (você não precisa rolá-la antes). Dê um nome curto e fácil de reconhecer e coloque qualquer contexto extra na descrição.
2. **Reordene ou edite.** Toque em **Gerenciar Fórmulas** para arrastar fórmulas para a ordem que preferir ou remover as que não usa mais. Toque em **Editar** para mostrar um botão de edição em cada fórmula e toque em **Concluir** quando terminar.
3. **Exclua com confirmação.** Excluir uma fórmula pede confirmação antes. Se você cancelar, a fórmula permanece na sua lista.

## Exportar e importar sua lista

Abra **Gerenciar Fórmulas** para fazer backup da sua lista ou importar fórmulas de um arquivo.

- **Exportar.** Toque em **Exportar** para salvar um arquivo `.json` que você pode guardar como backup ou compartilhar com outra pessoa. Você pode renomear o arquivo exportado como achar melhor.
- **Importar.** Toque em **Importar** e escolha um arquivo `.json`. A importação não exige um nome de arquivo específico. Nos apps nativos, o arquivo precisa terminar em `.json` (com letras maiúsculas ou minúsculas). Na web, o seletor pede arquivos `.json` sem conferir a extensão separadamente. Uma extensão `.json` por si só não garante que o conteúdo do arquivo seja válido.
- **Como a importação adiciona itens.** A importação roda na hora, sem perguntar nada, e adiciona todas as fórmulas do arquivo ao final da sua lista. Ela nunca substitui sua lista e não verifica duplicatas, então importar um arquivo que você já tem adiciona uma segunda cópia de cada fórmula. Cada entrada importada recebe um novo ID próprio, então editar ou excluir uma cópia afeta apenas aquela cópia. Como a importação só adiciona itens, um arquivo exportado funciona como um backup do qual você pode importar depois, e não como uma substituição em um toque da lista atual.

Para baixar conjuntos prontos de fórmulas e ver detalhes sobre colocação manual de arquivos, consulte [Importando e Exportando Fórmulas Salvas](/pt/resources/importing-and-exporting-saved-formulas-pt/).

## Rótulos e versões diferentes do app

Na aba **Unir** do Estúdio de Dados, você pode salvar rótulos como `Ataque` ou `Dano` para colocar na frente das suas paradas de dados. Para definir a cor de um rótulo, pressione e segure sobre ele e toque em **Alterar cor**, ou toque no botão **Cor** abaixo do nome dele em **Gerenciar rótulos**.

Os rótulos e suas cores ficam salvos junto com suas fórmulas no dispositivo, mas as exportações de fórmulas não os incluem.

Se outro dispositivo que compartilha seu armazenamento ainda estiver rodando o Mythic GME 1.6.x, salvar uma fórmula naquele dispositivo remove seus rótulos e as cores deles em todos os dispositivos que compartilham a lista, mantendo suas fórmulas intactas. Atualize todos os dispositivos para a versão 1.7.0 ou posterior antes de salvar rótulos. Veja todos os detalhes em [Esquema de Fórmulas](/pt/resources/formula-schema-pt/).

## Se a lista não carregar

No computador e no tablet, o botão **Restaurar backup** aparece automaticamente se sua lista de Fórmulas Salvas não puder ser carregada, inclusive ao usar o iCloud. **Restaurar backup** pula qualquer backup que não consiga ler. Se nenhum backup legível estiver disponível, o app exibe `"Falha ao restaurar do backup"`.

## Formatos de arquivo para usuários avançados

A importação aceita tanto um objeto envolvido contendo uma lista `formulas` quanto um array de nível superior de objetos de fórmula. A exportação sempre grava o formato de objeto envolvido.

O Estúdio de Dados usa o motor de dados próprio do app (derivado do `dart_dice_parser` do Adventuresmith), então teste qualquer fórmula editada à mão dentro do app antes de usá-la em uma sessão.

## Guias relacionados

- [Fórmulas de Dados e Personalização](/pt/resources/dice-formulas-and-customization-pt/)
- [Importando e Exportando Fórmulas Salvas](/pt/resources/importing-and-exporting-saved-formulas-pt/)
- [Esquema de Fórmulas](/pt/resources/formula-schema-pt/)
