---
title: "Começando com o Estúdio de Dados"
summary: "Crie rolagens para vários sistemas e salve fórmulas que você usa durante o jogo."
category: "dice-roller"
order: 1
icon: "fa-slab fa-regular fa-star"
duration: "5 min de leitura"
updated: "2026-11-04"
lang: pt
tags: ["dice", "getting-started"]
keywords:
  - Rolador de dados
  - Começando
  - Rolar dados
related:
  - dice-formulas-and-customization
  - saving-and-managing-dice-formulas
---

O Estúdio de Dados é onde você monta e testa fórmulas de dados. No celular, abra a gaveta e toque em ESTÚDIO DE DADOS. Este guia rápido mostra o básico para que você possa rolar com confiança imediatamente.

> O Estúdio de Dados, os rótulos, Forçar e as configurações de dados 3D são novidades da versão 1.7.0. Na 1.6.x, esta tela se chama Rolador de Dados.

> ##### Motor de sintaxe e documentação
> O rolador usa a versão própria do app do dart_dice_parser, do Adventuresmith. A página no pub.dev descreve o pacote original, então teste uma fórmula no app antes de confiar nela. Para a gramática completa e exemplos adicionais, veja: https://pub.dev/packages/dart_dice_parser

## Para onde vão as rolagens

- Uma rolagem feita no Estúdio de Dados é uma Rolagem de teste do estúdio. Ela não é escrita no seu diário. O Estúdio de Dados mantém as 20 mais recentes.
- Uma rolagem feita no modo de dados é escrita no seu diário como "Rolagem de dados geral". Para abrir o modo de dados, toque em **Mudar para o Rolador de Dados**.
- A lista de rolagens do Estúdio de Dados mostra as duas.

## O layout em resumo
- **Campo de fórmula e botão Rolar:** digite uma fórmula (por exemplo, `1d20+5`) e toque em **Rolar Dados**, o botão com o ícone do d20.
- **Abas abaixo do campo de fórmula:** quatro abas adicionam itens à fórmula para você.
  - **Dados:** d4, d6, d8, d10, d12, d20, D100, 1D66, d2 e 4dF.
  - **Unir:** os operadores `+`, `-` e `*`, parênteses e seus rótulos salvos.
  - **Mod:** Vantagem, Desvantagem, Manter alto, Manter o mais baixo, Dados Explosivos, Explosão composta, Rerrolar Uns, Rolar novamente ≤2, Contagem de Críticos, Limite em X e Piso em X.
  - **Salvas:** suas fórmulas salvas. Toque em uma para colocá-la no campo, ou toque no botão de rolar dela para rolá-la.
- Digite você mesmo os números depois de um `+` ou `-` (por exemplo, `+2`). Digite também descartar (`-H`, `-L`), rolar de novo uma vez (`ro`) e contar (`#`).
- **Lista de rolagens:** cada linha mostra a fórmula, os dados e as contagens de sucessos e críticos quando a fórmula os marca. Uma marca de verificação vem depois de cada sucesso ou sucesso crítico, uma cruz vem depois de cada falha ou falha crítica, e um cadeado vem antes de cada dado que Forçar manteve.

> Dica: uma Rolagem de teste do estúdio mostra sua fórmula com parênteses adicionados. Eles mostram como o app agrupou a fórmula.

## Rótulos
Uma parada de dados é um grupo de dados com um rótulo, como `"Attack": 2d6, "Damage": 1d8`. Uma Rolagem de teste do estúdio mostra uma linha para cada parada, com a cor, o rótulo, o total e os dados dela. No Registro de Aventura, uma rolagem com rótulos é uma única entrada.

Na aba **Unir**:
- Toque em um rótulo salvo para colocá-lo na frente dos seus dados.
- Toque em **+** para salvar um novo rótulo.
- Toque e segure um rótulo para renomeá-lo, removê-lo, mudar a ordem dos seus rótulos ou mudar a cor dele.
- **Gerenciar rótulos** lista todos os rótulos, com um botão **Cor** abaixo de cada nome.

Para escolher uma cor, escolha **Automática**, uma das cores sugeridas (Branco, Vermelho, Preto, Turquesa, Roxo, Marrom) ou **Personalizada**. Personalizada permite escolher qualquer cor ou digitar o código hexadecimal dela. Depois toque em **Concluir**. Um rótulo Automático recebe uma cor sugerida que as outras paradas da rolagem não estão usando.

Renomear ou remover um rótulo não muda as fórmulas que já o usam. Um rótulo não pode conter `"`, e dois rótulos não podem ser diferentes só nas letras maiúsculas e minúsculas.

## Construa suas primeiras rolagens
1) Toque em um botão de dado (por exemplo, `d20`) e adicione um modificador (por exemplo, `+5`).
2) Ou digite diretamente: `1d20+5`
3) Para rolar, toque em **Rolar Dados**.

### Exemplos comuns
- D20 + bônus: `1d20+3`
- Vantagem/Desvantagem: `2d20kh+5` (manter o mais alto) ou `2d20kl+5` (manter o mais baixo)
- Dados de dano: `2d6+3`
- Porcentagem: `1d%` (o mesmo que `1d100`)
- Dados Fudge/Fate: `4dF`

### Básico útil para tentar depois
- Manter/Descartar: `3d20kh2` (manter os 2 mais altos) ou `4d6-L` (descartar o mais baixo)
- Explosão/Explosão composta: `4d6!` (explodir) ou `5d6!!` (explodir no mesmo dado); adicione `o` para uma vez (`!o`, `!!o`)
- Rolar novamente: `4d6r1` (rolar novamente 1s), `4d6ro<2` (rolar novamente uma vez resultados abaixo de 2)
- Contar sucessos: `6d6#>=5` (quantos 5+)
- D66 (maiúsculo): `1D66` (minúsculo `d66` é um dado de 66 lados)

Dica: Use parênteses para clareza ao misturar paradas de dados, ex: `(1d8!!+1d6!!) kh` (Traço Savage Worlds + selvagem, manter o mais alto).

## Forçar uma rolagem
Forçar mantém seus sucessos e rola os outros dados de novo, como nos jogos Year Zero.
1) Na sua Rolagem de teste do estúdio mais recente, toque na seta no fim da linha.
2) Toque em **Forçar**. A rolagem forçada é adicionada como uma nova Rolagem de teste do estúdio.

- Você também pode forçar uma rolagem de dados do seu Registro de Aventura. A rolagem forçada é escrita no seu diário como uma nova **Rolagem de dados forçada**, e a rolagem que você forçou não pode ser forçada de novo.
- Adicione `@push=1` a uma fórmula para que ela só possa ser forçada uma vez, ou `@lock=sf` para manter as falhas também.

Para as regras completas, incluindo o que Forçar não rerrola e quando Forçar não aparece, veja [Fórmulas de Dados e Personalização](/pt/resources/dice-formulas-and-customization-pt/).

## Salvando e gerenciando fórmulas
- **Salvar Fórmula** salva a fórmula do campo e permite dar a ela um nome e uma descrição. No celular, os botões Salvar Fórmula e Gerenciar Fórmulas ficam abaixo do campo da fórmula; em um tablet ou computador, ficam acima dele.
- **Gerenciar Fórmulas** abre a lista Fórmulas Salvas. Nela você pode importar, exportar, editar, reordenar e excluir fórmulas. O app pede confirmação antes de excluir uma fórmula.
  - Importar adiciona todas as fórmulas do arquivo ao final da sua lista de Fórmulas Salvas. Não há verificação de duplicatas.
  - Se você colocar um arquivo manualmente, nomeie-o saved_formulas.json e coloque-o na pasta formulas dentro da pasta de armazenamento do app. Esse arquivo passa a ser sua lista inteira.

## Dados 3D
Quando **Animar rolagens de dados** está ativado, o app rola dados 3D para d4, d6, d8, d10, d12, d20, d100 e D66. Um d100 rola dois d10, um para as dezenas e outro para as unidades.

Algumas rolagens mostram o resultado na hora, sem dados 3D:
- mais de 12 dados em uma rolagem. Um d100 ou um D66 conta como 2.
- dados dF e dados com faces personalizadas
- fórmulas com explosão, explosão composta ou rerrolagem
- outros tamanhos de dado, como d2 ou d30

Quando o dispositivo está configurado para reduzir movimento, nenhum dado 3D aparece.

No Estúdio de Dados, o painel **Dados 3D** tem estas configurações:
- **Duração da exibição** define por quanto tempo os dados ficam na tela depois de pararem, de 1 a 15 segundos.
- **Gravidade**, **Força do lançamento**, **Rotação**, **Rebote** e **Atrito** mudam o jeito como os dados se movem. Cada um começa em 1,00.
- **Redefinir** volta esses cinco valores para 1,00.
- **Rolagem de teste** rola um d6 para você ver a mudança. Ela só fica disponível quando **Animar rolagens de dados** está ativado e o dispositivo permite animações.
- Enquanto os dados estão na tela, o painel sai da frente.

**Som dos dados:** com **Animar rolagens de dados** ativado, os dados 3D fazem som quando batem na mesa, nas bordas da tela ou uns nos outros. Nas Configurações, a seção Estúdio de Dados tem o botão **Som dos dados** e o controle **Volume dos dados**.

## Resultados e legibilidade
- **Mostrar total dos dados** — Mostra o total de cada rolagem na lista de rolagens do Estúdio de Dados. Quando desativado, uma rolagem lista seus dados sem o total. Uma rolagem sem dados para listar, como uma contagem, ainda mostra seu resultado. O Registro de Aventura sempre mostra o total. Dados descartados não são listados, e os valores mantidos gerados por explosões continuam aparecendo como números comuns, sem destaque específico de explosão.
- Nomes curtos e modificadores simples mantêm as fórmulas legíveis; adicione contexto na descrição da entrada Salva quando salvar.

## Guias relacionados
Veja a seção de Guias Relacionados na parte inferior desta página.
