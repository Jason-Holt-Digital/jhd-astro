---
fullArticleAvailable: true
title: "Solução de Problemas"
summary: "Como lidar com backups, mensagens de importação e armazenamento, problemas na sincronização do iCloud e relatos de bugs."
category: "adventure-journals"
order: 2
icon: "fa-slab fa-regular fa-life-ring"
duration: "Checklist rápido"
updated: "2026-11-19"
lang: "pt"
tags: ["troubleshooting", "support"]
keywords:
  - Solução de Problemas
  - Suporte
  - Ajuda
---

> Esta página descreve o Mythic GME 1.7.0 e posteriores.

Se algo parecer fora do lugar com seus Diários de Aventura, backups, pasta de armazenamento ou sincronização do iCloud, comece por aqui.

## Preciso de um backup do meu Diário

Um salvamento comum não cria um arquivo de backup separado. Para manter seu próprio backup, abra o Diário, vá em **Configurações > Arquivos** e selecione **Exportar diário como JSON**.

O app cria cópias automáticas de backup apenas nestas situações:

- Uma mudança de armazenamento (inclusive ativar ou desativar a Sincronização do iCloud) ou **Importar pasta anterior** encontra um Diário com o mesmo nome nos dois lugares. A cópia que o app não mantém vira o backup.
- Uma restauração substitui um Diário nos apps para iOS, Android, Windows, macOS ou Linux. Uma restauração na demonstração web não guarda cópia.
- Um Diário salvo no iCloud tem versões em conflito. Quando o app salva esse Diário, ele tenta copiar as outras versões para arquivos de backup separados.

## A lista Restaurar do backup está vazia

Isso é normal. Como salvamentos comuns não criam backups, a lista fica vazia até acontecer um dos eventos de backup acima.

Quando houver cópias listadas, confira a data de uma cópia antes de restaurá-la. Cópias salvas por conflito do iCloud não aparecem nesta lista. Para ler essas cópias, toque no indicador na linha daquele Diário.

Veja por quanto tempo o app mantém os backups automáticos:

- No armazenamento em pasta, backups gerados por uma mudança de armazenamento ou por **Importar pasta anterior** podem ser apagados depois de 7 dias se o dispositivo estiver com pouca memória.
- O app nunca apaga backups criados quando uma restauração substitui um Diário.
- O app nunca apaga cópias de backup guardadas no iCloud.

## Restaurar um Diário

Abra **Configurações > Arquivos** e toque no menu **Mais opções** de um Diário para encontrar **Restaurar do backup** e **Restaurar de arquivo**. As duas opções substituem o Diário depois que você confirma.

Nos apps para iOS, Android, Windows, macOS e Linux, o app guarda uma cópia de backup do Diário substituído. Na demonstração web, **Restaurar do backup** não está disponível. **Restaurar de arquivo** está disponível por lá, mas não guarda cópia do Diário substituído.

## Criei um Diário e um mais antigo sumiu

Se você criar um Diário usando um nome que já existe, marcar a caixa de confirmação e confirmar, o novo Diário vazio substitui o antigo. O conteúdo do Diário antigo é apagado e nenhuma nova cópia de backup é feita, embora backups anteriores continuem intactos.

Os nomes de Diário ignoram letras maiúsculas e minúsculas, então `Elderspire` e `elderspire` contam como o mesmo nome.

## Mensagens sobre Diários

- **Atualização necessária: atualize o Mythic GME para abrir este diário.** Uma versão mais recente do app salvou este arquivo. Atualize o Mythic GME e abra o Diário novamente.
- **Você não pode excluir seu único diário. Crie outro diário primeiro.** O app sempre mantém pelo menos um Diário. Crie outro Diário primeiro e depois apague o que você não quer mais.
- **Não foi possível importar o diário.** Você pode ver esta mensagem ou uma mais específica, como **Selecione um arquivo de diário .json.** ou **Este arquivo não é JSON válido.** Confira se o arquivo termina em `.json`, contém JSON válido e guarda um Diário.
- **Não Foi Possível Importar o Diário.** Confira a lista **Problemas encontrados** na tela de revisão para ver o que está faltando no arquivo.

## Acesso ao armazenamento necessário

Uma tela inteira com o título **Acesso ao armazenamento necessário** significa que o armazenamento do app não está pronto. Selecione **Selecionar a pasta de armazenamento** para escolher uma pasta, ou selecione **Usar documentos de aplicativos** para usar a pasta própria do app. Se aparecer o botão **Tentar Novamente**, selecione-o para verificar sua pasta de armazenamento outra vez.

Se aparecer um aviso sobre uma pasta que você escolheu antes, o app não conseguiu abrir aquela pasta e voltou para a pasta padrão dele. Ele permanece na pasta padrão, mesmo depois de reiniciar, até você trocar de volta. Tudo o que você jogar enquanto isso fica salvo na pasta padrão. Selecione **Reconectar** (que volta para a pasta anterior só se o app conseguir abri-la), **Escolher pasta** ou **Usar padrão do app**.

## Apareceu um Diário chamado "(Conflicted copy ...)"

Isso acontece no armazenamento em pasta quando o arquivo de um Diário muda fora do app enquanto você tem alterações ainda não salvas. O app abre a versão que está no disco e salva suas alterações pendentes como um Diário separado.

O nome dele combina o nome original do Diário, `(Conflicted copy`, o nome do dispositivo e a data e hora. Procure por ele na sua lista de Diários.

## Sincronização com o iCloud

A opção **Sincronização do iCloud** está disponível no iPhone, no iPad e em algumas versões do app para Mac. Ela não existe na demonstração web, e o app a marca como experimental.

Enquanto a sincronização estiver ativada, **Mudar Localização** e **Redefinir local** ficam desativados, e a seção mostra **Status de Sincronização** junto com o botão **Forçar Sincronização**.

Se o status indicar algum problema, selecione o ícone de ajuda ao lado do botão de ativação:

- Se o iCloud estiver indisponível, abre **Configurar a sincronização do iCloud** com os passos para ativar o iCloud Drive.
- Se a sincronização falhar, abre **Erro de Sincronização do iCloud** com passos de recuperação. Se **Sincronização do iCloud** estiver desativada, ative-a novamente. Se já estiver ativada, selecione **Forçar Sincronização** para recarregar sua lista de Diários a partir do iCloud.

Antes de mover arquivos, o app pede confirmação e mostra o que será copiado ou substituído:

- **Ao ativar a Sincronização do iCloud.** Move seus Diários, fórmulas salvas, tabelas personalizadas e listas de categorias deste dispositivo para o iCloud. Depois disso, o app remove os originais locais que não mudaram desde a cópia, desde que as cópias ou resultados combinados no iCloud também não tenham mudado. Cópias de backup continuam onde estavam, assim como arquivos que não podem ser lidos, que mudaram ou que não podem ser verificados ou removidos com segurança. Diários ilegíveis podem ser ignorados.
- **Ao desativar a Sincronização do iCloud.** Copia esses arquivos de volta para este dispositivo e deixa o iCloud como estava, para que seus outros dispositivos continuem vendo tudo.
- **Conflitos de nome.** Se os dois locais tiverem um Diário com o mesmo nome de arquivo, o app mantém o modificado mais recentemente e faz backup do outro. Se não conseguir identificar qual é o mais recente, mantém a cópia que está no local de destino.

## Redefinir local

**Redefinir local** move todos os Diários de volta para a pasta própria do app. Se seus Diários estiverem em outra pasta, o app pede confirmação antes. Se já estiverem na pasta do app, nada é movido e nenhum aviso aparece.

## Linux

As janelas de arquivo no Linux exigem `xdg-desktop-portal` e um backend de portal. Se a janela de arquivo não conseguir abrir durante uma importação, exportação ou **Restaurar de arquivo**, o app mostra: `"O aplicativo não conseguiu abrir a janela de arquivos. Instale xdg-desktop-portal e um backend de portal e tente novamente."`

## A demonstração web

Na demonstração web, os Diários ficam salvos no navegador daquele dispositivo. Não é possível escolher pastas personalizadas nem usar sincronização na nuvem. Limpar os dados do site ou trocar de navegador pode remover seus Diários, então exporte-os em JSON para mantê-los seguros.

## Desfazer

**Desfazer** restaura o último item excluído, como uma entrada do Registro de Aventura, uma Cena, uma Tabela de Significado personalizada, uma Tabela de Foco de Evento personalizada, uma tabela integrada que você editou ou uma lista que você limpou. O app guarda as últimas 20 exclusões. Abrir outro Diário limpa esse histórico, e uma Lista Personalizada limpa não pode ser restaurada se a própria lista não existir mais.

- **iOS e Android.** Sacuda o dispositivo e selecione **Desfazer** quando o app perguntar.
- **Mac.** Pressione `Cmd+Z`.
- **Windows e Linux.** Pressione `Ctrl+Z`.

## Relatar um bug

No app, abra **Suporte**. Em **Contatar Suporte**, escolha **Suporte por E-mail**, **Visitar Site do Suporte** ou **Participe da Nossa Comunidade no Discord**. Você também pode entrar em contato a qualquer momento pela [página de Suporte](/pt/support/).

Inclua a linha de versão da tela Suporte para que eu consiga ver tanto a versão do app quanto o número do build. Note que o ícone de copiar ao lado dela copia apenas o número do build.
