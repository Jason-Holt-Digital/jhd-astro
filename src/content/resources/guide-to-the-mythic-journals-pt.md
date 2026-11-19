---
fullArticleAvailable: true
title: "Guia dos Diários Mythic"
summary: "O que um Diário de Aventura guarda e como criar, importar e exportar seus Diários."
category: "adventure-journals"
order: 0
icon: "fa-slab fa-regular fa-book-open"
duration: "6 min de leitura"
updated: "2026-11-19"
lang: "pt"
tags: ["journals", "getting-started", "import", "export"]
keywords:
  - Diários
  - Começando
  - Importar
  - Exportar
  - Mythic
downloads:
  - label: "Modelo Vazio"
    href: "/downloads/journal_template.json"
    format: "JSON"
  - label: "Exemplo Preenchido"
    href: "/downloads/journal_sample.json"
    format: "JSON"
  - label: "Esquema JSON"
    href: "/downloads/journal.schema.json"
    format: "JSON"
related:
  - writing-and-organizing-scenes-pt
  - sharing-adventure-journals-pt
  - saving-and-managing-dice-formulas-pt
---

> Este guia descreve o Mythic GME 1.7.0 e posteriores.

Um Diário de Aventura (ou simplesmente Diário) é o registro salvo no app para uma aventura ou campanha. Tudo o que acontece naquele jogo fica guardado dentro dele, então você pode manter várias campanhas ao mesmo tempo sem misturar listas, cenas ou registros.

## Crie e jogue em um Diário

Para jogar normalmente, você não precisa de nenhum arquivo de modelo. Abra **Configurações > Arquivos**, toque em **Criar Novo Diário** e digite um nome.

Se esse nome já estiver em uso, o app não substitui o Diário existente a menos que você confirme separadamente a substituição. Se confirmar, o app cria um Diário vazio com esse nome e substitui o conteúdo antigo.

Veja como uma sessão típica funciona no app:

1. **Antes de começar.** Abra seu Diário, defina o Fator de Caos inicial e adicione algumas Tramas e Personagens que você espera ver (além de Aspectos, se estiver jogando uma Aventura Preparada).
2. **Durante cada cena.** Defina sua Cena Esperada, faça uma Verificação de Cena, faça Perguntas de Destino e role em Tabelas de Significado ou Eventos Aleatórios conforme a história avança. Rolagens de Destino, Verificações de Cena e Eventos Aleatórios são salvos automaticamente no Registro de Aventura.
3. **Adicione suas próprias notas.** Para incluir uma interpretação ou um resumo rápido direto no Registro de Aventura, toque no botão de adicionar no cabeçalho do Registro de Aventura, escreva na folha **Adicionar Narrativa** e toque em **Adicionar ao Registro**.
4. **Entre cenas.** Ajuste o Fator de Caos (para baixo se seu personagem manteve o controle, para cima se as coisas saíram do controle) e atualize suas Listas de Aventura conforme a história muda.

## O que um Diário guarda

Cada Diário é independente e acompanha estes elementos separadamente:

- **Fator de Caos.** O marcador central do Mythic, de 1 a 9, que influencia as Verificações de Cena e as chances do oráculo. O app salva o Fator de Caos atual do Diário em cada nova cena. Editar uma cena anterior não altera o Fator de Caos do Diário, pois só a sua cena mais recente o define.
- **Cenas.** Títulos curtos e resumos que marcam os momentos do jogo. O tipo de uma cena (Esperada, Alterada ou Interrompida) fica registrado como uma entrada no registro gerada pela Verificação de Cena, e não na cena em si.
- **Registro de Aventura.** O histórico em ordem cronológica das respostas da Tabela de Destino ou Verificação de Destino, Verificações de Cena, Eventos Aleatórios, rolagens em Tabelas de Significado, rolagens de dados e notas narrativas.
- **Listas de Aventura.** Personagens (NPCs, facções e elementos ativos), Tramas (objetivos e linhas narrativas) e Aspectos (a terceira lista que o Mythic adiciona para Aventuras Preparadas, cobrindo locais especiais, objetos ou encontros), junto com as Notas de Lista de cada item.
- **Ferramentas expandidas de campanha.** Listas Personalizadas, Trilhas de Progresso de Trama, Cenas-Chave e Pontos de Progresso.

## Exportação, importação e backups

Gerencie os arquivos de seus Diários em **Configurações > Arquivos**.

- **Exportar diário como JSON.** Salva o Diário inteiro. Use JSON sempre que quiser fazer backup ou planejar importar o Diário de volta para o app depois.
- **Exportar diário como Markdown.** Salva uma versão em texto limpo para ler ou colar no Apple Notes, Obsidian, Notion ou Google Docs. A exportação em Markdown serve apenas para leitura. Ela deixa de fora Listas Personalizadas, Trilhas de Progresso de Trama, Cenas-Chave, Pontos de Progresso e o registro individual de cada dado, e o app não consegue importar arquivos Markdown de volta.

No iOS e no Android, exportar abre a folha de compartilhamento para você salvar ou enviar o arquivo para onde preferir. No Windows, no macOS e no Linux, abre uma janela para salvar o arquivo.

Quando você importa um arquivo `.json` com um único Diário, o app abre primeiro uma tela de revisão e lista eventuais pendências em **Problemas encontrados**. Se o nome já pertencer a um Diário no app, você pode renomear o arquivo importado ou escolher **Sobrescrever diário existente**. Sobrescrever substitui o Diário existente sem guardar uma cópia, então exporte-o antes se houver chance de querer recuperá-lo. Um arquivo com uma lista de Diários é importado na hora, sem tela de revisão, e recebe um número nos nomes repetidos para nada ser sobrescrito.

Salvar um Diário não cria um arquivo de backup separado, então exporte em JSON em **Configurações > Arquivos** sempre que quiser uma cópia sob seu controle. O app tenta guardar uma cópia de backup apenas em situações específicas:

- Uma mudança de armazenamento (inclusive mover para dentro ou para fora do iCloud) ou **Importar pasta anterior** encontra um Diário com o mesmo nome nos dois lugares.
- Uma restauração substitui um Diário nos apps para iOS, Android, Windows, macOS ou Linux. Uma restauração na demonstração web não guarda cópia.
- Um salvamento bem-sucedido no iCloud encontra versões em conflito não resolvidas de um Diário. Nesse caso, o app tenta copiar essas versões para backups antes de marcá-las como resolvidas. Um salvamento comum, sem conflito, não cria backup.

Para ver o passo a passo completo de exportação e importação, consulte [Compartilhando Diários de Aventura](/pt/resources/sharing-adventure-journals-pt/).

## Usando uma cópia no seu app de notas

Se você gosta de manter um registro legível da campanha junto com suas outras anotações de RPG, exporte o Diário em Markdown e mantenha um arquivo por campanha com um nome fácil de identificar, como `diario-elderspire.md` ou `minha-aventura-2026-09.md`.

Se preferir anotar as cenas à mão fora do app, aqui está um modelo leve para copiar e colar:

```markdown
### Cena N: Título (FC: X no início)

- Expectativa: Esperada | Alterada | Interrompida
- Pergunta de Destino: ... (Chances: Provável, Rolagem: 43, Resultado: Sim) Interpretação: ...
- Evento Aleatório (se houver): Foco: ... | Significado: Ação=..., Assunto=... | Interpretação: ...
- Notas: 2 a 4 frases sobre o que realmente aconteceu

Contabilidade de fim de cena
- Ajuste de FC: -1 | +1 (motivo)
- Mudanças nas Listas: +Personagem ..., +Trama ..., -Aspecto ...
```

## Editando um arquivo de Diário à mão

Você nunca precisa abrir nem editar um arquivo JSON para usar Diários. O app cuida de criar, ler e exportar arquivos `.json` para você.

Se você quiser montar um arquivo manualmente ou inspecionar a estrutura, o Mythic GME 1.7.0 e posteriores exportam arquivos na versão 6 do esquema, usando chaves em camelCase como `journalName` e `chaosFactor`. O modelo vazio na seção de Downloads abaixo (`journal_template.json`) usa o formato legado do esquema 1, com chaves em PascalCase. O app ainda o importa e converte para o esquema 6, mas ele não corresponde ao formato atual de exportação.

Se você começar a partir de `journal_template.json`:

1. Faça uma cópia com um nome claro, como `minha-aventura-2026.json`, e mantenha a extensão `.json`.
2. Preencha `JournalName` e defina `ChaosFactor` com um número de 1 a 9. Os dois campos são obrigatórios na importação.
3. Se adicionar cenas à mão, defina você mesmo o `SceneChaosFactor` em cada cena.

Para a referência completa dos campos do esquema 6, consulte [Esquema de Diário](/pt/resources/journal-schema-pt/).
