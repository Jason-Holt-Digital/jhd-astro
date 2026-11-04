---
title: Fórmulas de Dados e Personalização
summary: "Monte rolagens com vantagem, limites, dados explosivos ou compostos, manter/descartar e mais."
category: dice-roller
order: 3
icon: fa-slab fa-regular fa-sliders
duration: 12 min de leitura
updated: 2026-11-04
lang: pt
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
  - saving-and-managing-dice-formulas
  - formula-schema
---

## Leia isso primeiro (Sem programação necessária)

- Fórmulas são expressões simples e legíveis (como `2d6+3`).
- Você pode digitar uma fórmula, rolá-la e tocar em Salvar Fórmula para guardá-la. No celular, Salvar Fórmula e Gerenciar Fórmulas ficam abaixo do campo da fórmula; em um tablet ou computador, ficam acima dele.
- Salvar armazena o que quer que esteja atualmente no campo de texto e permite nomear e adicionar uma descrição. Gerenciar permite importar, exportar, renomear, reordenar e excluir.

> **Dica**: Para salvar, você só precisa do texto da fórmula—não é necessário entender cada opção abaixo. Volte aqui quando quiser fazer algo mais avançado.

## Folha de dicas básica

- Rolar dados: `XdY` (ex., `2d6`, `1d20`, `1d%` para d100)
- Dados especiais: `1D66` (D maiúsculo), `4dF` (dados Fate), faces personalizadas: `2d[2,3,5,7]`
- Matemática e agrupamento: `+`, `-`, `*`, parênteses `( )` (divisão não é suportada)
- Manter / Largar: `kh` manter maior, `kl` manter menor, `-H` largar maior, `-L` largar menor (ex., `3d20kh2`, `4d6-L`)
- Explosão / Explosão composta: `!` (explodir), `!!` (explodir no mesmo dado), adicione `o` para uma vez: `!o`, `!!o` (ex., `4d6!`, `5d10!!o>=8`)
- Re-rolar: `r` (re-rolar correspondências), `ro` (re-rolar uma vez) (ex., `4d4r<=2`, `4d4ro<2`)
- Contar / Pontuação:
  - \# retorna uma contagem e descarta os resultados individuais dos dados: 6d6#>=5
  - #s, #f, #cs e #cf marcam dados como sucessos, falhas, sucessos críticos e falhas críticas. Os dados e a soma continuam como foram rolados, e a linha da rolagem lista as contagens. Por exemplo: `6d6 #f<=2 #s>=5 #cs6 #cf1`
  - Uma contagem usa só o número logo depois dela. `4d10#>=6+2` conta os dados de 6 ou mais e depois soma 2 à contagem.
- Limitar (cap): `C<` e `C>` (ex., `4d20 C<5`, `4d20 C>15`)
- Regras de Forçar: `@push=N` deixa a rolagem ser forçada N vezes, e `@lock=s`, `@lock=sf` ou `@lock=none` define quais dados Forçar mantém (ex., `5d6#s6 @push=1`). Veja Forçar abaixo.

Pegadinhas de ordem e precedência
- A ordem importa com manter e com os contadores de marcação. 2d20 kh #cf #cs descarta primeiro o dado mais baixo. Para marcar os dois dados antes de manter, escreva (2d20 #cf #cs) kh. Manter depois de uma contagem precisa dos parênteses, então 2d20 #cf #cs kh é um erro. O mesmo vale para `(4d6#s6)kh2`.
- Uma contagem vale para os dados logo antes dela. `2d6#s6 - 2d6#s6` avalia cada 2d6 separadamente e depois subtrai o segundo do primeiro.
- Operadores de Largar/filtrar ligam mais forte que aritmética. `(5d6+5d10)-L2` larga dos dados combinados; `5d6+5d10-L2` larga apenas dos d10s.
- Use `D66` maiúsculo (minúsculo `d66` é um dado de 66 lados, não D66).
- Não existe contagem de "diferente de". `6d6#s!=1` não é uma fórmula válida.
- Uma fórmula que termina em um operador, ou um rótulo sem dados depois dele, não rola. Por exemplo, `2d6+` e `"Damage":` estão incompletos, e o campo de fórmula mostra que estão incompletos.

## Paradas de dados e rótulos de parada

> As linhas por parada, os rótulos de parada e Forçar são novidades da versão 1.7.0. A sintaxe das fórmulas desta página funciona do mesmo jeito na 1.6.x.

Uma parada de dados é um grupo de dados com um rótulo. Escreva o rótulo entre aspas, depois dois-pontos, depois os dados. Coloque uma vírgula entre as paradas de dados.

- `"Attack": 2d6, "Damage": 1d8`

Uma Rolagem de teste do estúdio mostra uma linha para cada parada de dados, com o rótulo, o total da parada e seus dados. No Registro de Aventura, uma rolagem com rótulos é uma única entrada.

Na aba **Unir**, toque em um rótulo salvo para colocá-lo na frente dos seus dados. Toque em **+** para salvar um novo rótulo. Toque e segure um rótulo para renomeá-lo, removê-lo ou mudar a ordem dos seus rótulos. Renomear ou remover um rótulo não muda as fórmulas que já o usam. Um rótulo não pode conter `"`, e dois rótulos não podem ser diferentes só nas letras maiúsculas e minúsculas.

As fórmulas salvas guardam o texto do rótulo que você digitou. Uma exportação das suas fórmulas salvas não inclui seus rótulos de parada.

## Forçar

Forçar rerrola parte da sua Rolagem de teste do estúdio mais recente.

1. Na Rolagem de teste do estúdio mais recente, toque na seta no fim da linha.
2. Toque em **Forçar**. É o primeiro dos dois botões que aparecem.

Forçar mantém cada dado que é um sucesso ou um sucesso crítico. Rerrola os outros dados e adiciona o resultado como uma nova Rolagem de teste do estúdio. Números como o `+3` de `2d6+3` ficam como estão. Forçar também rerrola os dados depois de um sinal de menos, como em `2d6#s6 - 2d6#s6`. Um novo dado é avaliado pelas mesmas contagens. Dados forçados não reaplicam `r`, `C`, explosão (`!`), explosão composta (`!!`) nem manter (`k`), então um novo dado fica na face que tirar.

Em uma Rolagem de teste do estúdio e em uma rolagem de dados do seu Registro de Aventura, uma marca de verificação vem depois de cada sucesso ou sucesso crítico, uma cruz vem depois de cada falha ou falha crítica, e um cadeado vem antes de cada dado que Forçar manteve.

Adicione uma tag à fórmula para mudar como Forçar funciona:

- `@push=N`: a rolagem pode ser forçada N vezes. Sem esta tag, não há limite.
- `@lock=s`: forçar mantém os sucessos e sucessos críticos. É o padrão.
- `@lock=sf`: forçar também mantém as falhas e falhas críticas.
- `@lock=none`: forçar rerrola todos os dados.

`@push` vale para a rolagem inteira. Uma tag `@lock` depois de uma parada de dados vale só para essa parada. Por exemplo, em `"Base": 3d6#s6#f1 @lock=sf, "Gear": 2d6#s6#f1`, Forçar mantém os 1 da parada Base e rerrola os 1 da parada Gear.

Se só **Copiar** aparecer nessa linha, a rolagem não pode ser forçada. Isso acontece quando a rolagem já foi forçada tantas vezes quanto `@push` permite, quando nenhum dado seria rerrolado, ou quando um dado que seria rerrolado é um dado Fate, um dado de faces personalizadas ou um D66.

Você também pode forçar uma rolagem de dados do seu Registro de Aventura. Toque na seta no fim da linha e depois em **Forçar**. A rolagem forçada é escrita no seu diário como uma entrada nova, uma **Rolagem de dados forçada**. A rolagem que você forçou fica como estava e não pode ser forçada de novo. Se em uma rolagem de dados do seu Registro de Aventura só aparecerem **Copiar** e **Excluir entrada**, ela não pode ser forçada. Isso acontece pelos mesmos motivos que em uma Rolagem de teste do estúdio, quando a rolagem já foi forçada ou quando uma versão anterior do app a registrou. Forçar uma Rolagem de teste do estúdio nunca é escrito no seu diário.

## Padrões que você usará muito

- Vantagem / Desvantagem: `2d20kh+MOD` e `2d20kl+MOD`
- Melhor / Pior de N: `NdXkh1` ou `NdXkl1` (ex., `3d6kh1`)
- Valores de Habilidade (4d6 largar menor): `4d6-L`
- Explodir uma vez vs. livremente: `4d6!o` (explodir apenas uma vez) vs `4d6!` (repetir)
- Explosão composta (estilo Shadowrun/L5R): `5d6!!` ou com limite `5d6!!>=5`
- Sucessos por limite: `NdX#>=TN` (ex., `6d6#>=5`)
- Re-rolar uma vez vs. repetir: `ro` vs `r` (ex., `4d6ro1` vs `4d6r1`)
- Manter/largar em paradas de dados combinadas: `(1d8!!+1d6!!) kh` (Traço Savage Worlds + dado selvagem)

## Pontos de partida de sistemas (receitas rápidas)

Estes exemplos dão a você fórmulas iniciais sólidas. Alguns sistemas usam dados de símbolos personalizados—aqueles são notados como "Não suportado".

D&D 5e / Pathfinder 2e
- Ataque/teste: `1d20+MOD`
- Vantagem/Desvantagem: `2d20kh+MOD` / `2d20kl+MOD`
- Valores de Habilidade: `4d6-L`
- Críticos: role dados de dano dobrados manualmente (ex., `2d6` → `4d6`)

Powered by the Apocalypse (PbtA)
- Movimento básico: `2d6+STAT` → interprete 10+, 7–9, 6- manualmente

Fate Core
- Dados Fate: `4dF` (já suportado)

Blades in the Dark
- Parada de dados, manter maior: `Nd6kh1` (ex., `3d6kh1`)
- Críticos pontuais (dois 6s): adicione `Nd6#=6` para contar seis ao lado de sua rolagem

Shadowrun (acertos e falhas)
- Acertos: `Nd6#>=5`
- Rastrear 1s para regras de falha: adicione `Nd6#f=1`

Savage Worlds (traço + dado selvagem)
- Rolar ambos, manter maior: `(TRAIT!! + 1d6!!) kh + MOD`
- Aumentos (+4) são interpretados manualmente do total

Vampire: The Masquerade (V5)
- Sucessos: `Nd10#>=6`
- Rastrear 10s: adicione `Nd10#=10` (pares críticos/impactos requerem regras de mesa)

Call of Cthulhu 7e
- Rolar abaixo (roll-under): `1d100` vs perícia
- Dados de Bônus/Penalidade: lide como um método manual de dois passos (substituição de dado de dezenas não codificada)

Cypher System
- Rolagem de tarefa: `1d20+MOD` (passo/dificuldade permanece narrativo)

Warhammer/estilo 40K paradas de d6
- Acertos/ferimentos: `Nd6#>=TN` (defina TN para sua mesa)

Dungeon Crawl Classics (cadeia de dados)
- Tamanhos de dados ímpares são ok: `1d7`, `1d16`, `1d24`, `1d30`

Lancer (precisão/dificuldade)
- Precisão: `1d20 + (Xd6kh1) + MOD`
- Dificuldade: `1d20 - (Xd6kh1) + MOD`

Year Zero Engine (Free League: Alien, Forbidden Lands, Vaesen, etc.)
- Três paradas de dados coloridas (base/perícia, stress, equipamento): Role as três paradas em uma só fórmula com rótulos, por exemplo "Base": 4d6 #s=6, "Stress": 2d6 #s=6, "Gear": 1d6 #s=6. No Estúdio de Dados e no Registro de Aventura, a rolagem mostra cada parada em sua própria linha, com o rótulo e o total.
- Sucessos: `Nd6#s=6` em cada parada; rastreie 1s em stress/equipamento com `#f=1`.
- Para forçar, role a parada com uma marca de sucesso, por exemplo `5d6#s6 @push=1`, depois toque na seta no fim da linha e toque em Forçar. Forçar mantém os dados marcados como sucessos e rola de novo todos os outros, inclusive os 1. `@push=1` quer dizer que a rolagem pode ser forçada uma vez.
- Em Forbidden Lands, Forçar mantém os 6 e os 1. Escreva `3d6#s6#f1 @lock=sf`.
- Você também pode forçar uma rolagem de dados do seu Registro de Aventura. A rolagem forçada é escrita no seu diário como uma nova Rolagem de dados forçada, e a rolagem que você forçou não pode ser forçada de novo.
- Limitações: resolução de pânico/quebra permanece na mesa.

The One Ring 2e (aproximação)
- Grosseiramente: `1d12 + Nd6`
- Notas: Gandalf/Olho e seis Tengwar são efeitos de símbolo; trate especiais manualmente

Legend of the Five Rings
- AEG 1e–4e (Rolar e Manter, explodindo 10s): `Xd10!!khY`
- FFG/Edge 5e (dados de símbolo): Não suportado

Genesys / FFG Star Wars (dados narrativos)
- Usa dados de símbolo personalizados: Não suportado

Ironsworn / Starforged
- Rolagem de ação: `1d6+MOD` vs dois dados de desafio `2d10` → compare manualmente (vencer ambos=Acerto Forte; um=Acerto Fraco; nenhum=Errou).
- Movimentos de progresso: role `2d10` vs valor de progresso atual (0–10) e compare manualmente.

## Downloads iniciais

Baixe amostras de Fórmulas Salvas para sistemas populares que estão prontas para importar. Use Gerenciar Fórmulas → Importar. Importar adiciona todas as fórmulas do arquivo ao final da sua lista. Nunca substitui a lista e não pula fórmulas que você já tem. Veja a seção de Downloads no final desta página para arquivos.

Importante: Se você colocar um arquivo manualmente, nomeie-o saved_formulas.json e coloque-o na pasta formulas dentro da pasta de armazenamento do app. Esse arquivo passa a ser sua lista inteira. O fluxo de Importação não exige um nome de arquivo específico. Nos apps nativos, o arquivo precisa terminar em .json (com letras maiúsculas ou minúsculas). Na web, o seletor pede arquivos .json, mas o app não confere a extensão separadamente. O nome do arquivo não garante que o conteúdo seja um arquivo de fórmulas válido.

## Salvar, carregar, importar, exportar (resumo da UI)

- Celular: "Salvar Fórmula" e "Gerenciar Fórmulas" estão sob o campo de texto da fórmula, quando os botões de ação estão ativados.
- Desktop: ambos aparecem acima do campo de texto.
- Salvar adiciona a fórmula atual à sua lista Salva e abre um diálogo para nomear/descrever.
- Gerenciar permite importar, exportar, reordenar, renomear e excluir.
- Importar adiciona todas as fórmulas do arquivo ao final da sua lista. Nunca substitui a lista e não pula fórmulas que você já tem.

## Solução de problemas e dicas

- Minhas contagens parecem erradas com vantagem
  - Coloque contadores antes de manter/largar, agrupando-os: `(2d20 #cf #cs) kh`.
- `4d6-L2+2` não fez o que eu esperava
  - 4d6-L2+2 e (4d6-L2)+2 são a mesma rolagem: descarte os dois menores de 4d6 e some 2.
- Meu D66 parece errado
  - Use maiúsculo: `1D66`.
- Eu preciso explodir "uma vez"
  - Use `!o` (explodir uma vez) ou `!!o` (explodir uma vez no mesmo dado).
- Eu quero manter o total mas também saber sucessos/falhas
  - #s, #f, #cs e #cf marcam dados como sucessos, falhas, sucessos críticos e falhas críticas. Os dados e a soma continuam como foram rolados, e a linha da rolagem lista as contagens.

## Próximos passos

- Salve suas expressões favoritas: veja "Salvando e Gerenciando Fórmulas de Dados".
- Compartilhe e mantenha uma lista portátil: veja "Esquema de Fórmulas".

> ##### Motor de sintaxe e docs
> O rolador usa a versão própria do app do dart_dice_parser, do Adventuresmith. A página no pub.dev descreve o pacote original, então teste uma fórmula no app antes de confiar nela. Para a gramática completa e exemplos adicionais, veja: https://pub.dev/packages/dart_dice_parser

## Viu um problema?

Ajude-me a manter esta página e conteúdo atualizados! Se você ver um problema, por favor reporte-o: support@jasonholtdigital.com
