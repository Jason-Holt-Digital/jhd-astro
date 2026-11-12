// Mythic GME Mobile and Digital page data, shared by the Mythic GME page and
// its redesign previews. All strings are approved copy; change them only with
// new approved copy.
export function getMythicGmeApps(isPt: boolean) {
  const mobileApp = {
    title: "Mythic GME Mobile",
    whoItsFor: isPt
      ? "Jogadores solo que querem menos consulta e mais história onde quer que joguem."
      : "Solo role-players who want less lookup and more story wherever they play.",
    features: isPt
      ? [
          "Responda perguntas ao Destino com a Tabela de Destino ou uma Verificação de Destino simplificada",
          "Escreva sua pergunta ao Destino primeiro, depois role",
          "Role dados 3D com som, com câmera lenta em respostas excepcionais e Eventos Aleatórios",
          "Personagens, Tramas, Aspectos e Cenas",
          "Adicione suas próprias Listas Personalizadas ao lado deles, com Recursos Expandidos",
          "Registro de Aventura em linhas pautadas, com separadores de Cena, Markdown e corretor ortográfico",
          "Crie, importe, vincule e exporte Tabelas Personalizadas com Recursos Expandidos",
          "Adicione Pontos de Progresso às Tabelas de Significado",
          "Salve as fórmulas de dados que você mais usa no Estúdio de Dados, com grupos rotulados em cores",
          "Role dados para D&D, Year Zero Engine, Forbidden Lands, Shadowrun, Legend of the Five Rings e mais",
          "Force uma rolagem de dados pelo Registro de Aventura para rolar de novo os dados que ela não mantém",
          "Abra as Tabelas de Significado e o Foco de Evento pela aba Tabelas de Jogo em qualquer tamanho de tela",
          "Leia offline 30 artigos de Ajuda integrados, com links em cada tela",
          "Use modos para leitor de tela, daltonismo e uso com a mão esquerda, e 10 temas de cores nos modos claro e escuro",
        ]
      : [
          "Answer Fate Questions with the Fate Chart or a streamlined Fate Check",
          "Write your Fate Question first, then roll",
          "Throw 3D dice with sound, with slow motion on Exceptional answers and Random Events",
          "Track Characters, Threads, Features, and Scenes",
          "Add your own Custom Lists beside them, with Expanded Features",
          "Keep an Adventure Log in ruled rows with Scene separators, Markdown, and spell check",
          "Create, import, link, and export Custom Tables with Expanded Features",
          "Add Progress Points to Meaning Tables",
          "Save the dice formulas you use most in Dice Studio, with labeled pools in colors",
          "Roll dice for D&D, Year Zero Engine, Forbidden Lands, Shadowrun, Legend of the Five Rings, and more",
          "Push a dice roll from the Adventure Log to re-roll the dice it does not keep",
          "Open Meaning Tables and Event Focus from the Game Tables tab on any screen size",
          "Read 30 built-in Help articles offline, linked from each screen",
          "Use screen reader, color-blind, and left-hand modes, and 10 color themes in light and dark",
        ],
    officialContent: isPt
      ? [
          "Comece com 55 tabelas principais: 53 Tabelas de Significado e 2 tabelas de Foco de Evento",
          "No Mythic GME 1.7.0 e posteriores, desbloqueie as 266 tabelas com Recursos Expandidos, incluindo Mythic Variations 1, os Crafters, Mythic Magazine Compilations 1 a 7 e as edições 43 a 71 da Mythic Magazine",
          "Use tabelas de Foco de Evento para Eventos Aleatórios e Aventuras Preparadas",
          "Novo conteúdo oficial adicionado com grandes lançamentos",
          "Novidade na 1.7.0: 30 tabelas da Mythic Magazine, das edições 63 a 71, com Recursos Expandidos",
        ]
      : [
          "Start with 55 core tables: 53 Meaning Tables and 2 Event Focus tables",
          "In Mythic GME 1.7.0 and later, unlock all 266 tables with Expanded Features, including Mythic Variations 1, the Crafters, Mythic Magazine Compilations 1 to 7, and Mythic Magazine issues 43 to 71",
          "Use Random Event and Prepared Adventure Event Focus tables",
          "New official content comes with major releases",
          "New in 1.7.0: 30 Mythic Magazine tables from issues 63 to 71, with Expanded Features",
        ],
    iapInfo: isPt
      ? "Desbloqueios pagos são permanentes, não assinaturas. Tudo o que você desbloquear continua desbloqueado, incluindo novos Recursos Expandidos adicionados nos 365 dias seguintes à compra."
      : "Paid unlocks are permanent, not subscriptions. Anything you unlock stays unlocked, including new paid features added within 365 days of purchase.",
    storeLinks: [
      {
        name: "Apple App Store",
        url: "https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147",
        icon: "fa-brands fa-apple",
      },
      {
        name: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e",
        icon: "fa-brands fa-google-play",
      },
      {
        name: "Amazon Appstore",
        url: "https://www.amazon.ca/Jason-Holt-Digital-LLC-Mythic/dp/B0DJBPF9L9",
        icon: "fa-brands fa-amazon",
      },
    ],
  };

  const desktopApp = {
    title: "Mythic GME Digital",
    whoItsFor: isPt
      ? "Jogadores de Windows, macOS e Linux que querem mais espaço para sessões Mythic mais longas."
      : "Windows, macOS, and Linux players who want more room for longer Mythic sessions.",
    features: isPt
      ? [
          "Use os recursos e sistemas do Mythic GME Mobile no desktop",
          "Arraste a partir do botão de rolar para lançar dados 3D com som, com câmera lenta em respostas excepcionais",
          "Organize Painéis para combinar com o seu jeito de jogar: substitua, troque ou oculte painéis, ou preencha um espaço vazio",
          "Abra as Tabelas de Significado e o Foco de Evento pelo painel deslizante de Tabelas de Jogo na borda da tela",
          "Role grupos de dados rotulados e coloridos no Estúdio de Dados, e force uma rolagem pelo Registro de Aventura",
          "Role dados para D&D, Year Zero Engine, Forbidden Lands, Shadowrun, Legend of the Five Rings e mais",
          "Tenha todos os recursos, incluindo Listas Personalizadas, em uma única compra no Windows, no Linux e no itch.io",
          "Desfaça muitas ações com Cmd/Ctrl+Z",
          "Pesquise na Central de Ajuda do app, com 30 artigos offline e links em cada tela",
          "Mantenha várias ferramentas visíveis durante sessões mais longas, com o novo Registro de Aventura",
          "Escolha a pasta que guarda seus Diários, fórmulas e tabelas personalizadas",
          "Receba tudo incluído desde o início, sem assinaturas",
        ]
      : [
          "Use Mythic GME Mobile features and systems on desktop",
          "Drag from Roll to throw 3D dice with sound, with slow motion on Exceptional answers",
          "Arrange Panels to fit the way you play: replace, swap, or hide them, or fill an empty slot",
          "Open Meaning Tables and Event Focus from the Game Tables pull-out on the screen edge",
          "Roll labeled, colored dice pools in Dice Studio, and Push a roll from the Adventure Log",
          "Roll dice for D&D, Year Zero Engine, Forbidden Lands, Shadowrun, Legend of the Five Rings, and more",
          "Get every feature, including Custom Lists, in a single purchase on Windows, Linux, and itch.io",
          "Undo many actions with Cmd/Ctrl+Z",
          "Search the in-app Help Center, with 30 offline articles linked from each screen",
          "Keep multiple tools visible during extended sessions, with the new Adventure Log",
          "Choose the folder that holds your Journals, formulas, and custom tables",
          "Get everything included up front, with no subscriptions",
        ],
    officialContent: isPt
      ? [
          "Todas as 266 tabelas, incluindo 30 novas da Mythic Magazine, em uma única compra no Windows, no Linux e no itch.io",
          "Tabelas e recursos desbloqueados desde o início",
          "Sem assinaturas",
        ]
      : [
          "All 266 tables, 30 new from Mythic Magazine, in one purchase on Windows, Linux, and itch.io",
          "Tables and features unlocked up front",
          "No subscriptions",
        ],
    disclaimer: isPt
      ? "Observação: a versão da Mac App Store é um pacote mobile + desktop e usa desbloqueios pagos para conteúdo e recursos adicionais."
      : "Note: the Mac App Store version is a mobile + desktop bundle and uses paid unlocks for additional content and features.",
    storeLinks: [
      {
        name: isPt ? "itch.io (Sem DRM)" : "itch.io (DRM\u2011free)",
        url: "https://jasonholtdigital.itch.io/mythic-gme-digital",
        icon: "fa-brands fa-itch-io",
      },
      {
        name: "Microsoft Store",
        url: "https://apps.microsoft.com/detail/9n39b8hj3cdg",
        icon: "fa-brands fa-windows",
      },
      {
        name: "Mac App Store",
        url: "https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147",
        icon: "fa-brands fa-apple",
      },
      {
        name: "Steam",
        url: "#",
        icon: "fa-brands fa-steam",
        available: false,
      },
    ],
  };

  return { mobileApp, desktopApp };
}
