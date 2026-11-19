---
fullArticleAvailable: true
title: "Começando com o Estúdio de Dados"
summary: "Primeiros passos para montar, testar e rolar dados no Estúdio de Dados."
category: "dice-roller"
order: 1
icon: "fa-slab fa-regular fa-star"
duration: "5 min de leitura"
updated: "2026-11-19"
lang: "pt"
tags: ["dice", "getting-started"]
keywords:
  - Rolador de dados
  - Começando
  - Rolar dados
related:
  - dice-formulas-and-customization-pt
  - saving-and-managing-dice-formulas-pt
---

> Este guia descreve o Mythic GME 1.7.0 e posteriores. O Estúdio de Dados, os rótulos, Forçar e as configurações de dados 3D são novidades da versão 1.7.0. Na 1.6.x, esta tela se chamava Rolador de Dados.

O Estúdio de Dados é o espaço onde você monta, testa e rola fórmulas personalizadas de dados. No celular, abra a gaveta lateral e toque em **ESTÚDIO DE DADOS**. O app usa seu próprio motor de dados (derivado do `dart_dice_parser` do Adventuresmith), então teste qualquer fórmula personalizada no Estúdio de Dados antes de depender dela durante uma sessão.

## Para onde vão as rolagens

- **Rolagens de teste do estúdio.** Toda rolagem feita no Estúdio de Dados é uma Rolagem de teste do estúdio. Ela não é gravada no seu Diário, e o Estúdio de Dados mantém as 20 mais recentes.
- **Rolagens de dados do Diário.** Para registrar rolagens no seu Diário como uma Rolagem de dados geral, toque em **Mudar para o Rolador de Dados** para entrar no modo de dados.
- **Lista combinada de rolagens.** A lista de rolagens do Estúdio de Dados exibe tanto as Rolagens de teste do estúdio quanto as rolagens gravadas no Diário.

## O layout em resumo

- **Campo de fórmula e botão de rolar.** Digite uma fórmula como `1d20+5` e toque em **Rolar Dados** (o botão com o ícone de d20).
- **Quatro abas auxiliares abaixo do campo.** Toque nos botões para montar uma fórmula sem precisar digitar cada símbolo:
  - **Dados.** `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, `D100`, `1D66`, `d2` e `4dF`.
  - **Unir.** Os operadores `+`, `-` e `*`, parênteses e seus rótulos salvos.
  - **Mod.** Vantagem, Desvantagem, Manter alto, Manter o mais baixo, Dados Explosivos, Explosão composta, Rerrolar Uns, Rolar novamente <=2, Contagem de Críticos, Limite em X e Piso em X.
  - **Salvas.** Suas fórmulas salvas. Toque em uma fórmula para colocá-la no campo, ou toque no botão de rolar dela para rolá-la na hora.
- **Atalhos digitados.** Digite você mesmo modificadores após `+` ou `-` (como `+2`), além de descartar (`-H`, `-L`), rerrolar uma vez (`ro`) e contar (`#`).
- **Lista de rolagens.** Cada linha mostra a fórmula, os dados rolados e as contagens de sucessos ou críticos quando a fórmula os marca. Uma marca de verificação aparece depois de cada sucesso ou sucesso crítico, uma cruz aparece depois de cada falha ou falha crítica, e um cadeado aparece antes de cada dado mantido por Forçar.

> Uma Rolagem de teste do estúdio exibe sua fórmula com parênteses adicionados para mostrar como o app agrupou a expressão.

## Monte suas primeiras rolagens

1. Toque em um botão de dado como `d20` e adicione um modificador como `+5`, ou digite `1d20+5` direto no campo de fórmula.
2. Toque em **Rolar Dados**.

Veja algumas rolagens comuns para começar:

- D20 com bônus: `1d20+3`
- Vantagem ou Desvantagem: `2d20kh+5` (manter o mais alto) ou `2d20kl+5` (manter o mais baixo)
- Dados de dano: `2d6+3`
- Porcentagem: `1d%` (o mesmo que `1d100`)
- Dados Fudge ou Fate: `4dF`

Quando quiser ir além, experimente estes modificadores:

- Manter ou descartar: `3d20kh2` (manter os 2 mais altos) ou `4d6-L` (descartar o mais baixo)
- Explodir ou explosão composta: `4d6!` (explodir) ou `5d6!!` (explosão composta); adicione `o` para ativar apenas uma vez (`!o`, `!!o`)
- Rerrolar: `4d6r1` (rerrolar 1s) ou `4d6ro<2` (rerrolar uma vez resultados abaixo de 2)
- Contar sucessos: `6d6#>=5` (contar dados com resultado 5 ou maior)
- D66: `1D66` com `D` maiúsculo (`d66` minúsculo rola um dado de 66 lados)

Use parênteses ao combinar paradas de dados para manter o agrupamento claro, como `(1d8!!+1d6!!) kh` para um dado de traço e um dado selvagem de Savage Worlds.

## Rótulos para paradas de dados

Uma parada de dados é um grupo de dados com um rótulo, como `"Ataque": 2d6, "Dano": 1d8`. Uma Rolagem de teste do estúdio mostra uma linha por parada com a cor, o rótulo, o total e os dados dela. No Registro de Aventura, uma rolagem com rótulos é salva como uma única entrada.

Na aba **Unir**, você gerencia seus rótulos assim:

- Toque em um rótulo salvo para inseri-lo antes dos seus dados.
- Toque em **+** para salvar um novo rótulo.
- Pressione e segure um rótulo para renomeá-lo, removê-lo, mudar a ordem dos rótulos ou alterar a cor dele.
- Abra **Gerenciar rótulos** para ver todos os rótulos com um botão **Cor** abaixo de cada nome.

Para escolher uma cor, selecione **Automática**, uma das cores rápidas (Branco, Vermelho, Preto, Turquesa, Roxo ou Marrom) ou **Personalizada** (escolha qualquer cor ou digite um código hexadecimal) e toque em **Concluir**. Um rótulo Automático recebe uma cor rápida que as outras paradas da mesma rolagem não estão usando.

Renomear ou remover um rótulo não altera fórmulas que já o usam. Um rótulo não pode conter `"` e dois rótulos não podem diferir apenas entre maiúsculas e minúsculas.

## Forçar uma rolagem

Forçar mantém seus sucessos e rola os dados restantes de novo, como nos jogos Year Zero.

1. Na sua Rolagem de teste do estúdio mais recente, toque na seta no fim da linha.
2. Toque em **Forçar**. O resultado aparece como uma nova Rolagem de teste do estúdio.

Você também pode forçar uma rolagem de dados no seu Registro de Aventura. A rolagem forçada é gravada no seu Diário como uma nova **Rolagem de dados forçada**, e a rolagem original não pode ser forçada de novo. Adicione `@push=1` a uma fórmula para limitar a rolagem a uma única forçada, ou `@lock=sf` para manter falhas travadas junto com os sucessos.

Para ver as regras completas de Forçar, incluindo o que não é rerrolado e quando o botão não aparece, consulte [Fórmulas de Dados e Personalização](/pt/resources/dice-formulas-and-customization-pt/).

## Salvando e gerenciando fórmulas

- **Salvar Fórmula.** Salva o que estiver no campo de fórmula e permite adicionar um nome e uma descrição. No celular, **Salvar Fórmula** e **Gerenciar Fórmulas** aparecem abaixo do campo de fórmula. Em tablets e computadores, aparecem acima dele.
- **Gerenciar Fórmulas.** Abre sua lista de Fórmulas Salvas para importar, exportar, editar, reordenar e excluir fórmulas. O app pede confirmação antes de excluir qualquer fórmula.
- **Importando arquivos.** A importação adiciona todas as fórmulas do arquivo ao final da sua lista de Fórmulas Salvas sem verificar duplicatas. Se você colocar um arquivo manualmente em vez de importar, dê a ele o nome `saved_formulas.json` e coloque-o na pasta `formulas` dentro da pasta de armazenamento do app. Esse arquivo substitui sua lista inteira.

## Dados 3D e som

Quando **Animar rolagens de dados** está ativado, o Mythic rola dados 3D sobre a mesa para `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, `d100` e `D66`. Rolar um `d100` lança dois `d10`, um para as dezenas e outro para as unidades.

Algumas rolagens pulam a animação 3D e mostram o resultado na hora:

- Mais de 12 dados em uma mesma rolagem (cada `d100` ou `D66` conta como 2 dados).
- Dados `dF` e dados com faces personalizadas.
- Fórmulas com explosão, explosão composta ou rerrolagem.
- Outros tamanhos de dado, como `d2` ou `d30`.

Os dados 3D também ficam desativados sempre que o dispositivo estiver configurado para reduzir movimento.

Para ajustar como os dados se comportam na mesa, abra o painel **Dados 3D** no Estúdio de Dados. Enquanto os dados rolam na tela, o painel sai do caminho para você vê-los parar.

- **Duração.** Define por quanto tempo os dados ficam na tela depois de parar, de 1 a 15 segundos.
- **Gravidade, Lançamento, Rotação, Rebote e Atrito.** Ajustam como os dados giram e assentam na mesa. Cada controle começa em `1,00`.
- **Redefinir.** Retorna os cinco controles de física para `1,00`.
- **Rolagem de teste.** Lança um `d6` para testar seus ajustes na hora. Fica disponível quando **Animar rolagens de dados** está ativado e o dispositivo permite animações.

Com **Animar rolagens de dados** ativado, os dados 3D emitem sons de colisão ao bater na mesa, nas bordas da tela e uns nos outros. Abra **Configurações > Estúdio de Dados** para alternar **Som dos dados** ou ajustar o controle **Volume dos dados**.

## Resultados e legibilidade

Ative ou desative **Mostrar total dos dados** para escolher se a lista de rolagens do Estúdio de Dados mostra a soma de cada rolagem. Quando a opção está desativada, cada rolagem lista apenas os dados individuais sem o total, mas rolagens sem lista de dados (como uma contagem) continuam mostrando a resposta. O Registro de Aventura sempre mostra o total.

Dados descartados não aparecem na linha de resultado, e dados mantidos gerados por explosões aparecem como números comuns, sem destaque separado de explosão. Usar nomes curtos e descrições breves deixa sua lista de Fórmulas Salvas fácil de consultar durante a sessão.

## Guias relacionados

- [Salvando e Gerenciando Fórmulas de Dados](/pt/resources/saving-and-managing-dice-formulas-pt/)
- [Fórmulas de Dados e Personalização](/pt/resources/dice-formulas-and-customization-pt/)
- [Importando e Exportando Fórmulas Salvas](/pt/resources/importing-and-exporting-saved-formulas-pt/)
