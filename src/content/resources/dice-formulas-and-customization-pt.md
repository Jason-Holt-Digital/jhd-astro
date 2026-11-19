---
fullArticleAvailable: true
title: "Fórmulas de Dados e Personalização"
summary: "Notação de dados, paradas rotuladas, regras de Forçar e fórmulas prontas para vários sistemas de RPG."
category: dice-roller
order: 3
icon: fa-slab fa-regular fa-sliders
duration: 12 min de leitura
updated: "2026-11-19"
lang: "pt"
tags:
  - dice
  - formulas
  - systems
  - advanced
  - guides
keywords:
  - personalização
  - fórmula de dados
  - rolar dados
  - salvar fórmulas
downloads:
  - label: "Fórmulas Salvas D&D 5e"
    href: "/downloads/formulas_dnd5e.json"
    format: "JSON"
  - label: "Fórmulas Salvas Pathfinder 2e"
    href: "/downloads/formulas_pf2.json"
    format: "JSON"
  - label: "Fórmulas Salvas Shadowrun"
    href: "/downloads/formulas_shadowrun.json"
    format: "JSON"
  - label: "Fórmulas Salvas Blades in the Dark"
    href: "/downloads/formulas_blades.json"
    format: "JSON"
  - label: "Fórmulas Salvas Savage Worlds"
    href: "/downloads/formulas_savage_worlds.json"
    format: "JSON"
  - label: "Fórmulas Salvas Year Zero Engine"
    href: "/downloads/formulas_year_zero.json"
    format: "JSON"
  - label: "Fórmulas Salvas Vampire V5"
    href: "/downloads/formulas_vampire_v5.json"
    format: "JSON"
  - label: "Fórmulas Salvas Powered by the Apocalypse (PbtA)"
    href: "/downloads/formulas_pbta.json"
    format: "JSON"
  - label: "Fórmulas Salvas Fate Core"
    href: "/downloads/formulas_fate.json"
    format: "JSON"
  - label: "Fórmulas Salvas Call of Cthulhu 7e"
    href: "/downloads/formulas_coc7e.json"
    format: "JSON"
  - label: "Fórmulas Salvas Cypher System"
    href: "/downloads/formulas_cypher.json"
    format: "JSON"
  - label: "Fórmulas Salvas Warhammer Paradas de d6"
    href: "/downloads/formulas_warhammer_d6.json"
    format: "JSON"
  - label: "Fórmulas Salvas Lancer"
    href: "/downloads/formulas_lancer.json"
    format: "JSON"
  - label: "Fórmulas Salvas Ironsworn"
    href: "/downloads/formulas_ironsworn.json"
    format: "JSON"
  - label: "Fórmulas Salvas Starforged"
    href: "/downloads/formulas_starforged.json"
    format: "JSON"
  - label: "Fórmulas Salvas Dungeon Crawl Classics"
    href: "/downloads/formulas_dcc.json"
    format: "JSON"
  - label: "Fórmulas Salvas The One Ring"
    href: "/downloads/formulas_one_ring.json"
    format: "JSON"
related:
  - saving-and-managing-dice-formulas-pt
  - formula-schema-pt
---

> Este guia descreve o Mythic GME 1.7.0 e posteriores.

Você só precisa de uma expressão curta como `2d6+3` para rolar e salvar uma fórmula no Estúdio de Dados. Volte a esta página sempre que precisar de modificadores, paradas com rótulo, regras de Forçar ou fórmulas iniciais para um RPG específico.

Para ver o passo a passo de como salvar, organizar e gerenciar sua lista de fórmulas no Estúdio de Dados, consulte [Salvando e Gerenciando Fórmulas de Dados](/pt/resources/saving-and-managing-dice-formulas-pt/).

## Guia rápido de notação de dados

- **Rolagens básicas.** `XdY`, como `2d6`, `1d20` ou `1d%` para `d100`.
- **Dados especiais.** `1D66` (`D` maiúsculo), `4dF` (dados Fate) e faces personalizadas como `2d[2,3,5,7]`.
- **Matemática e agrupamento.** `+`, `-`, `*` e parênteses `( )`. Divisão não é suportada.
- **Manter e descartar.** `kh` (manter os maiores), `kl` (manter os menores), `-H` (descartar os maiores) e `-L` (descartar os menores), como `3d20kh2` ou `4d6-L`.
- **Explodir e explosão composta.** `!` (explodir) e `!!` (explosão composta). Adicione `o` para ativar apenas uma vez (`!o`, `!!o`), como `4d6!` ou `5d10!!o>=8`.
- **Rerrolar.** `r` (rerrolar resultados que combinam) e `ro` (rerrolar uma vez), como `4d4r<=2` ou `4d4ro<2`.
- **Contar e pontuar.**
  - `#` retorna apenas a contagem e descarta os resultados individuais dos dados, como `6d6#>=5`.
  - `#s`, `#f`, `#cs` e `#cf` marcam dados como sucessos, falhas, sucessos críticos e falhas críticas. Os dados rolados e a soma continuam intactos, e a linha da rolagem lista as contagens, como `6d6 #f<=2 #s>=5 #cs6 #cf1`.
  - Uma contagem lê apenas o número logo depois dela. `4d10#>=6+2` conta os dados com resultado 6 ou maior e depois soma 2 a essa contagem.
- **Limitar (teto ou piso).** `C<` e `C>`, como `4d20 C<5` ou `4d20 C>15`.
- **Tags de Forçar.** `@push=N` permite forçar a rolagem `N` vezes, e `@lock=s`, `@lock=sf` ou `@lock=none` define quais dados ficam travados ao forçar, como `5d6#s6 @push=1`.

### Pegadinhas de ordem e precedência

- **Manter junto com contadores de marcação.** A ordem importa. `2d20 kh #cf #cs` descarta o dado mais baixo primeiro. Para marcar os dois dados antes de manter o mais alto, agrupe com parênteses: `(2d20 #cf #cs) kh`. Colocar manter depois de uma contagem sem parênteses (`2d20 #cf #cs kh`) gera um erro. O mesmo vale para `(4d6#s6)kh2`.
- **Escopo da contagem.** Uma contagem se aplica apenas aos dados logo antes dela. `2d6#s6 - 2d6#s6` avalia cada `2d6` separadamente e depois subtrai o segundo resultado do primeiro.
- **Operadores de descartar têm precedência sobre aritmética.** `(5d6+5d10)-L2` descarta os dois menores dados da parada combinada, enquanto `5d6+5d10-L2` descarta apenas dos `d10`.
- **D66 em maiúsculo.** Use `1D66` com `D` maiúsculo. Em minúsculo, `d66` rola um dado de 66 lados.
- **Sem contagem de "diferente de".** `6d6#s!=1` não é uma fórmula válida.
- **Expressões incompletas.** Uma fórmula que termina em um operador (`2d6+`) ou um rótulo sem dados depois dele (`"Dano":`) não rola, e o campo de fórmula marca a expressão como incompleta.

## Paradas de dados e rótulos

> Linhas por parada, rótulos, cores de rótulos e Forçar são novidades da versão 1.7.0. A sintaxe básica de fórmulas acima funciona da mesma forma na 1.6.8.

Uma parada de dados é um grupo de dados com um rótulo. Escreva o rótulo entre aspas duplas, seguido de dois-pontos e dos dados, separando as paradas com vírgula:

`"Ataque": 2d6, "Dano": 1d8`

Uma Rolagem de teste do estúdio mostra uma linha por parada com o rótulo, o total e os dados rolados. No Registro de Aventura, uma rolagem com rótulos fica registrada como uma única entrada.

Na aba **Unir** do Estúdio de Dados, toque em um rótulo salvo para inseri-lo antes dos dados, toque em **+** para salvar um novo rótulo ou pressione e segure um rótulo para renomear, remover, reordenar ou mudar a cor dele. Você também pode definir cores em **Gerenciar rótulos** usando o botão **Cor** de cada rótulo, escolhendo uma cor rápida ou **Personalizada** e tocando em **Concluir**.

Renomear ou remover um rótulo não altera fórmulas que já o utilizam. Um rótulo não pode conter `"`, e dois rótulos não podem diferir apenas entre maiúsculas e minúsculas. As fórmulas salvas mantêm o texto do rótulo que você digitou, mas exportar fórmulas salvas não inclui seus rótulos salvos nem as cores deles.

## Forçar

Forçar rerrola parte da sua Rolagem de teste do estúdio mais recente.

1. Na Rolagem de teste do estúdio mais recente, toque na seta no fim da linha.
2. Toque em **Forçar** (o primeiro dos dois botões que aparecem).

Por padrão, Forçar mantém cada sucesso e sucesso crítico, rerrola os dados restantes e adiciona o resultado como uma nova Rolagem de teste do estúdio. Números fixos como o `+3` em `2d6+3` ficam como estão. Forçar também rerrola dados após um sinal de menos, como em `2d6#s6 - 2d6#s6`.

Os novos dados são avaliados pelas mesmas regras de contagem. Dados forçados não reaplicam rerrolagem (`r`), limite (`C`), explosão (`!`), explosão composta (`!!`) nem manter (`k`), então cada dado rerrolado fica com a face em que cair.

Tanto nas Rolagens de teste do estúdio quanto nas rolagens de dados do Registro de Aventura, uma marca de verificação aparece depois de cada sucesso ou sucesso crítico, uma cruz aparece depois de cada falha ou falha crítica, e um cadeado aparece antes de cada dado mantido por uma forçada.

Adicione uma tag à fórmula para controlar o comportamento de Forçar:

- `@push=N` permite até `N` forçadas. Sem essa tag, não há limite.
- `@lock=s` mantém sucessos e sucessos críticos (comportamento padrão).
- `@lock=sf` mantém também falhas e falhas críticas.
- `@lock=none` rerrola todos os dados.

`@push` vale para a rolagem inteira, enquanto uma tag `@lock` após uma parada vale apenas para aquela parada. Em `"Base": 3d6#s6#f1 @lock=sf, "Equipamento": 2d6#s6#f1`, Forçar trava os 1s da parada Base e rerrola os 1s da parada Equipamento.

Se apenas **Copiar** aparecer na linha de uma Rolagem de teste do estúdio, aquela rolagem não pode ser forçada. Isso acontece quando a rolagem atingiu o limite de `@push`, quando nenhum dado seria rerrolado ou quando um dado que seria rerrolado é um dado Fate, um dado de faces personalizadas ou um `D66`.

Você também pode forçar uma rolagem de dados no seu Registro de Aventura. Toque na seta no fim da linha e toque em **Forçar**. O resultado é salvo no seu Diário como uma nova **Rolagem de dados forçada**, enquanto a rolagem original continua igual e não pode ser forçada de novo. Se apenas **Copiar** e **Excluir entrada** aparecerem em uma rolagem do Registro de Aventura, ela não pode ser forçada pelos mesmos motivos acima, porque já foi forçada ou porque foi registrada por uma versão anterior do app. Forçar uma Rolagem de teste do estúdio nunca grava no seu Diário.

## Padrões comuns

- Vantagem e Desvantagem: `2d20kh+MOD` e `2d20kl+MOD`
- Melhor ou pior de N: `NdXkh1` ou `NdXkl1` (por exemplo, `3d6kh1`)
- Atributos (4d6 descartando o menor): `4d6-L`
- Explodir uma vez vs. repetir: `4d6!o` vs. `4d6!`
- Explosão composta (estilo Shadowrun ou L5R): `5d6!!` ou com limite `5d6!!>=5`
- Sucessos por número-alvo: `NdX#>=TN` (por exemplo, `6d6#>=5`)
- Rerrolar uma vez vs. repetir: `4d6ro1` vs. `4d6r1`
- Manter ou descartar em paradas combinadas: `(1d8!!+1d6!!) kh` (dado de traço e dado selvagem de Savage Worlds)

## Pontos de partida por sistema

Estas receitas trazem fórmulas iniciais prontas para jogos populares. Sistemas que dependem de dados com símbolos personalizados estão marcados como não suportados.

### D&D 5e e Pathfinder 2e

- Ataque ou teste: `1d20+MOD`
- Vantagem e Desvantagem: `2d20kh+MOD` e `2d20kl+MOD`
- Atributos: `4d6-L`
- Acertos críticos: role o dobro de dados de dano manualmente (por exemplo, `4d6` em vez de `2d6`)

### Powered by the Apocalypse (PbtA)

- Movimento básico: `2d6+STAT` (interprete 10+, 7-9 e 6- manualmente)

### Fate Core

- Dados Fate: `4dF` (suportado nativamente)

### Blades in the Dark

- Parada pegando o maior: `Nd6kh1` (por exemplo, `3d6kh1`)
- Identificar críticos (dois 6s): adicione `Nd6#=6` para contar os 6s junto com sua rolagem

### Shadowrun (acertos e falhas críticas)

- Acertos: `Nd6#>=5`
- Rastrear 1s para falhas críticas: adicione `Nd6#f=1`

### Savage Worlds (dado de traço e dado selvagem)

- Rolar ambos e manter o maior: `(TRAIT!! + 1d6!!) kh + MOD`
- Ampliações (+4) são lidas manualmente a partir do total

### Vampire: The Masquerade (V5)

- Sucessos: `Nd10#>=6`
- Rastrear 10s: adicione `Nd10#=10` (trate pares críticos e efeitos na mesa)

### Call of Cthulhu 7e

- Teste de perícia (rolar abaixo): `1d100` contra a perícia
- Dados de Bônus e Penalidade: faça como uma verificação manual em duas etapas (a substituição do dado de dezenas não é codificada)

### Cypher System

- Rolagem de tarefa: `1d20+MOD` (nível e dificuldade ficam na narrativa)

### Warhammer e paradas de d6 estilo 40K

- Acertos ou ferimentos: `Nd6#>=TN` (defina `TN` conforme a sua mesa)

### Dungeon Crawl Classics (cadeia de dados)

- Tamanhos de dados incomuns funcionam direto: `1d7`, `1d16`, `1d24`, `1d30`

### Lancer (precisão e dificuldade)

- Precisão: `1d20 + (Xd6kh1) + MOD`
- Dificuldade: `1d20 - (Xd6kh1) + MOD`

### Year Zero Engine (Alien, Forbidden Lands, Vaesen e outros)

- Role paradas coloridas juntas usando rótulos: `"Base": 4d6 #s=6, "Estresse": 2d6 #s=6, "Equipamento": 1d6 #s=6`. No Estúdio de Dados e no Registro de Aventura, cada parada aparece na própria linha com rótulo e total.
- Marque sucessos com `Nd6#s=6` em cada parada e acompanhe 1s nos dados de estresse ou equipamento com `#f=1`.
- Para forçar, role com uma marca de sucesso como `5d6#s6 @push=1`, toque na seta no fim da linha e toque em **Forçar**. Forçar mantém os sucessos marcados e rerrola os outros dados (inclusive os 1s). `@push=1` limita a rolagem a uma forçada.
- Em Forbidden Lands, Forçar trava tanto 6s quanto 1s: `3d6#s6#f1 @lock=sf`.
- Você também pode forçar rolagens no seu Registro de Aventura. A rolagem forçada é salva no seu Diário como uma nova **Rolagem de dados forçada**, e a rolagem original não pode ser forçada de novo.
- Regras de pânico e desgaste de equipamento ficam na mesa.

### The One Ring 2e (aproximação)

- Rolagem aproximada: `1d12 + Nd6`
- Gandalf, Olho e 6s Tengwar são efeitos de símbolo e precisam ser resolvidos manualmente.

### Legend of the Five Rings

- AEG 1e a 4e (Rolar e Manter, explodindo 10s): `Xd10!!khY`
- FFG e Edge 5e (dados de símbolo): Não suportado.

### Genesys e FFG Star Wars (dados narrativos)

- Dados de símbolo personalizados: Não suportado.

### Ironsworn e Starforged

- Rolagem de ação: role `1d6+MOD` contra dois dados de desafio `2d10` e compare manualmente (supere ambos para Acerto Forte, um para Acerto Fraco, nenhum para Erro).
- Movimentos de progresso: role `2d10` contra seu valor atual de progresso (0 a 10) e compare manualmente.

## Downloads iniciais

Conjuntos prontos de Fórmulas Salvas para esses sistemas estão na seção de Downloads no final desta página. Abra **Gerenciar Fórmulas > Importar** no Estúdio de Dados para adicionar qualquer conjunto à sua lista.

Para ver todos os detalhes sobre importação, exportação, duplicatas e colocação manual de `saved_formulas.json`, consulte [Importando e Exportando Fórmulas Salvas](/pt/resources/importing-and-exporting-saved-formulas-pt/).

## Solução de problemas e pegadinhas

- **Minhas contagens parecem erradas com vantagem.** Coloque os contadores antes de manter ou descartar e agrupe com parênteses: `(2d20 #cf #cs) kh`.
- **`4d6-L2+2` deu um resultado inesperado.** `4d6-L2+2` e `(4d6-L2)+2` são a mesma rolagem. Ela descarta os dois menores dados de `4d6` e depois soma `2`.
- **Meu D66 parece errado.** Use `1D66` com `D` maiúsculo.
- **Quero que os dados explodam apenas uma vez.** Use `!o` (explodir uma vez) ou `!!o` (explosão composta uma vez).
- **Quero manter o total e ainda ver sucessos ou falhas.** Use `#s`, `#f`, `#cs` e `#cf`. Os dados rolados e a soma continuam intactos, e a linha da rolagem lista as contagens.

O Estúdio de Dados usa o motor de dados próprio do app (derivado do `dart_dice_parser` do Adventuresmith), então teste qualquer fórmula personalizada no Estúdio de Dados antes de confiar nela durante uma sessão.

## Próximos passos

- [Salvando e Gerenciando Fórmulas de Dados](/pt/resources/saving-and-managing-dice-formulas-pt/) mostra como salvar, editar e organizar suas rolagens favoritas.
- [Importando e Exportando Fórmulas Salvas](/pt/resources/importing-and-exporting-saved-formulas-pt/) explica os conjuntos prontos, exportações e colocação manual de arquivos.
- [Esquema de Fórmulas](/pt/resources/formula-schema-pt/) documenta o formato de arquivo JSON.

Se encontrar algum erro nesta página ou quiser sugerir um conjunto de fórmulas para outro sistema, me avise pela [página de Suporte](/pt/support/).
