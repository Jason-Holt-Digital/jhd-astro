---
fullArticleAvailable: true
title: "Compartilhando Diários de Aventura"
summary: "Como exportar um Diário de Aventura em JSON ou Markdown e como importar arquivos de Diário."
category: "adventure-journals"
order: 1
icon: "fa-slab fa-regular fa-share-nodes"
duration: "7 min de leitura"
updated: "2026-11-19"
lang: "pt"
tags: ["journals", "sharing", "export", "import"]
keywords:
  - Compartilhar diários
  - Exportar
  - Importar
  - JSON
related:
  - guide-to-the-mythic-journals-pt
  - writing-and-organizing-scenes-pt
---

> Este guia descreve o Mythic GME 1.7.0 e posteriores.

Você pode exportar qualquer Diário de Aventura como arquivo para fazer backup, levá-lo para outro dispositivo ou compartilhar com alguém, e também pode importar arquivos de Diário de volta para o app. Tudo fica em **Configurações > Arquivos**, nas seções **Exportar Diário** e **Importar Diário**.

## Exportar um Diário

A exportação sempre usa o Diário que está aberto no momento.

- **Exportar diário como JSON.** Salva o Diário completo. Esse é o único formato que o app consegue importar de volta.
- **Exportar diário como Markdown.** Salva uma cópia fácil de ler para apps de notas ou para compartilhar com amigos. Ela traz o Fator de Caos, suas cenas, seus Personagens, Tramas e Aspectos com as respectivas notas e todas as entradas do registro. Ela deixa de fora Listas Personalizadas, Trilhas de Progresso de Trama, Cenas-Chave, Pontos de Progresso e o registro individual de cada dado, e não pode ser importada de volta para o app.

O arquivo exportado recebe o nome do seu Diário. No iOS e no Android, exportar abre a folha de compartilhamento para você enviar o arquivo pelo AirDrop, salvar no app Arquivos, no iCloud Drive ou no Google Drive, ou compartilhar em outro aplicativo. No Windows, no macOS e no Linux, abre uma janela para salvar o arquivo no computador ou em uma pasta sincronizada, como iCloud Drive ou Google Drive.

Como um salvamento comum não cria um arquivo de backup separado, exportar em JSON é a melhor forma de manter sua própria cópia. O app cria cópias automáticas de backup apenas quando uma restauração substitui um Diário nos apps nativos, ou quando uma mudança de armazenamento ou **Importar pasta anterior** encontra o mesmo Diário nos dois lugares. A única exceção durante um salvamento acontece em um Diário no iCloud com versões em conflito, quando salvar pode levar o app a tentar copiar as outras versões para arquivos de backup separados.

## Importar um Diário

1. Abra **Configurações > Arquivos**, selecione **Importar diário por arquivo** e escolha um arquivo `.json` no app Arquivos, no iCloud Drive, no Google Drive ou no armazenamento local.
2. Confira a tela **Revise a Importação do Diário**. Ela mostra os detalhes do Diário, além de **Problemas encontrados** e **Notas** se algo precisar de atenção.
3. Selecione **Importar Diário**. O Diário importado passa a ser o Diário aberto.

O nome do Diário vem de dentro do arquivo, e não do nome do arquivo em disco. Arquivos salvos em versões anteriores do app continuam sendo importados, e o app faz a conversão automaticamente.

### Se o nome já estiver em uso

Quando um Diário importado tem o mesmo nome de um Diário que você já possui, a tela exibe **Conflito de nome do diário** com duas opções:

- **Renomear diário importado.** Vem selecionada por padrão. O app sugere o mesmo nome com "copy" no final. Selecione **Renomear e importar** para manter os dois Diários.
- **Sobrescrever diário existente.** Substitui o Diário que já está no app. Marque **Entendo que isso sobrescreverá o diário existente** e selecione **Sobrescrever e importar**. O app não guarda cópia de backup do Diário substituído, então exporte esse Diário antes se houver chance de querer recuperá-lo.

### Se o arquivo não puder ser importado

- **Não Foi Possível Importar o Diário.** Um arquivo de Diário único está sem o nome do Diário, sem um Fator de Caos de 1 a 9, ou sem as listas `scenes`, `characters`, `threads` ou `features`. A tela de revisão mostra exatamente o que está faltando. Arquivos mais antigos que usam `campaignName` não precisam da lista `features`. Uma lista presente, mas vazia ou `null`, gera um aviso em vez de erro, enquanto um campo que não é uma lista gera um erro. Arquivos com vários Diários não usam essa tela de revisão.
- **Atualização necessária: atualize o Mythic GME para abrir este diário.** Uma versão mais recente do app salvou esse arquivo. Atualize o Mythic GME e importe o arquivo novamente.

### Importando um arquivo com vários Diários

Um arquivo contendo uma lista de Diários é importado na hora, sem tela de revisão. Se algum nome já estiver em uso, o app acrescenta um número como ` (1)` ao nome do Diário importado, para que um arquivo com vários Diários nunca sobrescreva um Diário existente.

O app lê todos os itens do arquivo antes de salvar qualquer um deles. Se algum item não puder ser lido como Diário (por exemplo, um salvo em um formato mais novo que sua versão do app não consegue ler), nada do arquivo é importado. Um item que está apenas sem alguns dados opcionais ainda é importado com valores padrão. Se um Diário falhar durante o salvamento, o app pula esse item, importa os demais e informa quantos falharam.

## Restaurar de arquivo não é importação

Você também vai ver **Restaurar de arquivo** no menu **Mais opções** de um Diário. Diferente de importar, essa ação substitui aquele Diário específico pelo conteúdo de um arquivo `.json` depois da sua confirmação, mantendo o nome de arquivo atual do Diário.

Nos apps para iOS, Android, Windows, macOS e Linux, **Restaurar de arquivo** guarda uma cópia de backup do Diário substituído. Na demonstração web, nenhuma cópia é guardada, então exporte o Diário antes se quiser ter como voltar atrás.

## Linux e a demonstração web

No Linux, importar e exportar arquivos exige `xdg-desktop-portal` e um backend de portal.

Na demonstração web, os Diários ficam salvos no armazenamento do navegador naquele dispositivo. Exporte seus Diários em JSON para fazer backup ou levá-los para outro dispositivo.
