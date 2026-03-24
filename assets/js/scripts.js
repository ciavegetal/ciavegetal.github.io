

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   TRANSLATION DICTIONARY
   All 7 languages, all keys
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const TICKERS = {
  pt: ['100% Vegetal','Fermentação de Precisão','Feito no Brasil','Sem Lácteos','Sem Glúten','Sem Aromatizantes','Livre de OGMs','Derrete de Verdade','Ingredientes Brasileiros'],
  en: ['100% Plant-Based','Precision Fermented','Made in Brazil','Dairy-Free','Gluten-Free','No Artificial Flavours','GMO-Free','Really Melts','Brazilian Ingredients'],
  es: ['100% Vegetal','Fermentación de Precisión','Hecho en Brasil','Sin Lácteos','Sin Gluten','Sin Aromatizantes','Libre de OGM','Se Derrite de Verdad','Ingredientes BrasileÃ±os'],
  zh: ['100%æ¤ç‰©æ€§','ç²¾å‡†å‘é…µ','å·´è¥¿åˆ¶é€ ','æ— ä¹³åˆ¶å“','æ— éº¸è´¨','æ— äººå·¥é¦™ç²¾','æ— è½¬åŸºå› ','çœŸæ­£èžåŒ–','å·´è¥¿åŽŸæ–™'],
  ja: ['100%ãƒ—ãƒ©ãƒ³ãƒˆãƒ™ãƒ¼ã‚¹','ç²¾å¯†ç™ºé…µ','ãƒ–ãƒ©ã‚¸ãƒ«ç”£','ä¹³è£½å“ä¸ä½¿ç”¨','ã‚°ãƒ«ãƒ†ãƒ³ãƒ•ãƒªãƒ¼','äººå·¥é¦™æ–™ä¸ä½¿ç”¨','GMOãƒ•ãƒªãƒ¼','æœ¬å½“ã«æº¶ã‘ã‚‹','ãƒ–ãƒ©ã‚¸ãƒ«ç”£åŽŸæ–™'],
  mn: ['100% Ð£Ñ€Ð³Ð°Ð¼Ð»Ñ‹Ð½','ÐÐ°Ñ€Ð¸Ð¹Ð½ Ð˜ÑÐ³ÑÐ»Ñ‚','Ð‘Ñ€Ð°Ð·Ð¸Ð»Ð´ Ð¥Ð¸Ð¹ÑÑÐ½','Ð¡Ò¯Ò¯Ð³Ò¯Ð¹','Ð“Ð»ÑŽÑ‚ÐµÐ½Ð³Ò¯Ð¹','Ð¥Ð¸Ð¹Ð¼ÑÐ» ÐÐ¼Ñ‚Ð»Ð°Ð³Ñ‡Ð³Ò¯Ð¹','GMO Ð‘Ð°Ð¹Ñ…Ð³Ò¯Ð¹','Ð–Ð¸Ð½Ñ…ÑÐ½Ñ Ð¥Ð°Ð¹Ð»Ð´Ð°Ð³','Ð‘Ñ€Ð°Ð·Ð¸Ð»Ñ‹Ð½ ÐÐ°Ð¹Ñ€Ð»Ð°Ð³Ð°'],
  ko: ['100% ì‹ë¬¼ì„±','ì •ë°€ ë°œíš¨','ë¸Œë¼ì§ˆì‚°','ìœ ì œí’ˆ ì—†ìŒ','ê¸€ë£¨í… ì—†ìŒ','ì¸ê³µ í–¥ë£Œ ì—†ìŒ','GMO ì—†ìŒ','ì§„ì§œë¡œ ë…¹ì•„ìš”','ë¸Œë¼ì§ˆ ì›ë£Œ'],
  ar: ['Ù†Ø¨Ø§ØªÙŠ 100%','ØªØ®Ù…ÙŠØ± Ø¯Ù‚ÙŠÙ‚','ØµÙÙ†Ø¹ ÙÙŠ Ø§Ù„Ø¨Ø±Ø§Ø²ÙŠÙ„','Ø®Ø§Ù„Ù Ù…Ù† Ø§Ù„Ø£Ù„Ø¨Ø§Ù†','Ø®Ø§Ù„Ù Ù…Ù† Ø§Ù„ØºÙ„ÙˆØªÙŠÙ†','Ø¨Ù„Ø§ Ù†ÙƒÙ‡Ø§Øª ØµÙ†Ø§Ø¹ÙŠØ©','Ø®Ø§Ù„Ù Ù…Ù† Ø§Ù„Ù…Ø¹Ø¯Ù„Ø§Øª','ÙŠØ°ÙˆØ¨ ÙØ¹Ù„Ø§Ù‹','Ù…ÙƒÙˆÙ†Ø§Øª Ø¨Ø±Ø§Ø²ÙŠÙ„ÙŠØ©']
};

const T = {
  pt: {
  r1_tag:"Com Queijo Cia Vegetal · 5 min",r1_title:"Tagliatelle ao Limão com Mantegana",
    r1_desc:"Massa fresca com Mantegana derretida, limão siciliano e alcaparras. Simples, elegante, surpreendente.",
    r1_time:"20 min",r1_diff:"Fácil",r1_serv:"2 porções",
    r2_tag:"Com Queijo Original · 35 min",r2_title:"Pizza com Queijo que Derrete de Verdade",
    r2_desc:"Massa fina, molho de tomate caseiro, Queijo Original Cia Vegetal. Vai ao forno, derrete igual, impressiona igual.",
    r2_time:"35 min",r2_diff:"Médio",r2_serv:"4 porções",
    r3_tag:"Com Defumado & Páprica · 15 min",r3_title:"Tábua de Queijos Vegetais com Geleias e Nozes",
    r3_desc:"Combine os três sabores Cia Vegetal numa tábua bonita com figos, mel, nozes e pão artesanal.",
    r3_time:"15 min",r3_diff:"Fácil",r3_serv:"6 porções",
    testi_eyebrow:"O que dizem",testi_title:"A prova está em quem <em>experimenta</em>",
    t1:'"Comprei com desconfiança. Depois do primeiro grill, mandei foto para toda a família. Esse queijo derrete igual — não tem como não acreditar."',
    t2:'"A Mantegana virou o meu café da manhã. Nunca mais acordo sem pão com manteiga — e tudo sem laticínios. Meu marido nem percebeu a diferença."',
    t3:'"Uso na pizza do restaurante há mais de um ano. Os clientes pedem mais. Ninguém chuta que é vegetal. Quando contamos, ficam impressionados."',
    chef_role:"Chef · Casa Baco, Brasília",
    peca_agora:"Peça Agora",sua_mesa:"Sua mesa merece <em>o melhor</em>",
    cta_desc:"Encontre na sua loja e restaurantes mais próximos, ou fale com nosso time de vendas para vendas B2B.",
    pedir_wa:"WhatsApp",b2b:"Foodservice &amp; B2B",ver_lojas:"Ver Lojas Parceiras",
    onde_note:"",
    footer_desc:"Alimentos 100% plant-based",
    footer_produtos:"Produtos",queijo_original:"Queijo Original",queijo_defumado:"Queijo Defumado & Kümmel",queijo_paprica:"Queijo Páprica",pao_link:"Pão sem Queijo",
    footer_empresa:"A Empresa",certificacoes:"Certificações",
    footer_contato:"Contato",b2b_export:"B2B / Exportação",
    pao_type:"Pão de Queijo Vegetal",pao_card_name:"Pão sem Queijo",pao_card_desc:"O pão de queijo que você ama — feito com castanha de caju fermentada, polvilho e óleo de girassol. Sabor naturalmente queijoso, sem lactose, sem glúten.",
    onde_provar:"Onde Provar",
    r4_tag:"Com Queijo Original · 15 min",r4_title:"Croque Monsieur Vegetal",r4_desc:"Sanduíche tostado com Queijo Original Cia Vegetal derretido. Rápido, indulgente e impossível de resistir.",r4_time:"15 min",r4_diff:"Fácil",r4_serv:"2 porções",
    r5_tag:"Com Pão sem Queijo · 25 min",r5_title:"Pão sem Queijo Recheado com Manteiga e Ervas",r5_desc:"Abra os pãezinhos e recheie com Mantegana, alecrim e alho. Gratine no forno até dourar.",r5_time:"25 min",r5_diff:"Fácil",r5_serv:"4 porções",
    r6_tag:"Com Queijo Defumado · 40 min",r6_title:"Risoto Cremoso com Queijo Defumado",r6_desc:"Arroz arbóreo cremoso finalizado com lascas de Queijo Defumado & Kümmel. Sofisticado e surpreendente.",r6_time:"40 min",r6_diff:"Médio",r6_serv:"4 porções",
    r7_tag:"Com Queijo Páprica · 20 min",r7_title:"Nachos com Molho de Queijo Páprica",r7_desc:"Queijo Páprica Cia Vegetal derretido sobre nachos crocantes com jalapeÃ±o e coentro. Festa na tigela.",r7_time:"20 min",r7_diff:"Fácil",r7_serv:"4 porções",
    r8_tag:"Com Mantegana · 50 min",r8_title:"Bolo de Cenoura com Cobertura de Mantegana",r8_desc:"Bolo de cenoura vegano úmido com cobertura cremosa de Mantegana e cacau. O café da tarde perfeito.",r8_time:"50 min",r8_diff:"Médio",r8_serv:"8 fatias",
    r9_tag:"Com Queijo Original · 55 min",r9_title:"Quiche de Espinafre com Queijo Original",r9_desc:"Massa crocante, recheio cremoso de espinafre e Queijo Original Cia Vegetal derretido. Entrada elegante.",r9_time:"55 min",r9_diff:"Médio",r9_serv:"6 porções",
    r10_tag:"Com Mantegana · 20 min",r10_title:"Bruschetta com Mantegana e Tomate Confit",r10_desc:"Fatias de pão rústico com Mantegana, tomates cereja confitados e manjericão. Aperitivo perfeito.",r10_time:"20 min",r10_diff:"Fácil",r10_serv:"4 porções",
    r11_tag:"Com Queijo Original · 75 min",r11_title:"Lasanha Ã  Bolonhesa de Lentilha com Queijo",r11_desc:"Camadas de massa, molho de lentilha rica e Queijo Original Cia Vegetal gratinado. Conforto em forma de prato.",r11_time:"75 min",r11_diff:"Avançado",r11_serv:"6 porções",
    r12_tag:"Com Mantegana e Queijo · 30 min",r12_title:"Panqueca Recheada com Queijo Defumado",r12_desc:"Panquecas finas feitas com Mantegana, recheadas com Queijo Defumado & Kümmel e cogumelos salteados.",r12_time:"30 min",r12_diff:"Médio",r12_serv:"3 porções",
    r13_tag:"Com Queijo Páprica · 25 min",r13_title:"Fondue Vegetal de Queijo Páprica",r13_desc:"Queijo Páprica Cia Vegetal derretido com vinho branco, alho e noz-moscada. Mergulhe pão, legumes ou frutas.",r13_time:"25 min",r13_diff:"Fácil",r13_serv:"4 porções",
        b2b_supply:"Foodservice &amp; B2B",
        modal_mantegana:"A Mantegana veio para revolucionar: como um creme vegetal pode ter sabor tão agradável sem recorrer Ã  aromatizantes? Seu desempenho a fez deixar de ser apenas um produto plant-based, para ser considerada uma das melhores manteigas do mercado.",
        modal_original:"Nosso queijo sabor Original foi criado como uma alternativa ao queijo tradicional do dia-a-dia. De derretimento fácil, pode ser usado em todos os tipos de receitas que exigem um queijo delicioso e desmanchando.",
        modal_smoked:"O sabor deste queijo vem do processo natural de defumação (feito com madeira de reflorestamento) e um toque de sementes de kümmel. Ficou tão bom que até quem não segue uma dieta vegana, o adora.",
        modal_paprika:"O nome já diz tudo: nosso queijo de páprica ganha deste ingrediente natural um leve sabor picante. Fica ótimo servido derretido como um creme e torradas.",
        r14_tag:"Com Pão sem Queijo · 15 min",
    r14_title:"Pão sem Queijo na Chapa de Waffe",
    r14_desc:"Pão sem Queijo Cia Vegetal preparado na chapa de waffe, servido com calda de chocolate.",
    r14_time:"15 min",
    r14_diff:"Fácil",
    r14_serv:"4 pãezinhos",
    tech_title:"Conheça Nossa Tecnologia",
    tech_intro:"A Companhia Vegetal desenvolveu um processo exclusivo de fermentação de precisão que transforma ingredientes 100% brasileiros em alternativas vegetais que verdadeiramente derretem, espalham e saborizam como os produtos lácteos tradicionais.",
    tech_s1_title:"Fermentação de Precisão",
    tech_s1_body:"Nosso processo utiliza cepas selecionadas de microrganismos para fermentar castanha de caju . Este processo cria uma estrutura proteica e lipídica que replica exatamente o comportamento do queijo e da manteiga tradicionais sob calor — sem nenhum aroma artificial.",
    tech_s2_title:"100% Ingredientes Brasileiros",
    tech_s2_body:"Cada ingrediente vem do solo brasileiro: castanha de caju do Nordeste, polvilho de mandioca, óleo de girassol RSPO. Sem importações, sem compromissos. A biodiversidade brasileira é nossa vantagem competitiva.",
    tech_s3_title:"Zero Artificiais",
    tech_s3_body:"Nenhum aromatizante artificial, nenhuma gordura trans, nenhum conservante, nenhum OGM. A fermentação de precisão é o único \"truque\" — e nem truque é: é ciência pura a serviço do sabor.",
    tech_s4_title:"Derretimento Real",
    tech_s4_body:"A estrutura molecular criada pela fermentação permite que nossos queijos derretam, gratinem e filiem exatamente como o queijo tradicional. Nossos clientes testam Ã s cegas e não conseguem distinguir — essa é a nossa prova de conceito.",
copyright:"© 2026 Companhia Vegetal · Brasília, DF, Brasil · Todos os direitos reservados"
  },
  en: {
  r1_tag:"With Cia Vegetal Cheese · 10 min",r1_title:"Lemon Tagliatelle with Mantegana Butter",
    r1_desc:"Fresh pasta tossed with melted Mantegana, lemon juice, zest and capers. Simple, elegant, surprising.",
    r1_time:"20 min",r1_diff:"Easy",r1_serv:"2 servings",
    r2_tag:"With Original Cheese · 35 min",r2_title:"Pizza with Cheese That Really Melts",
    r2_desc:"Thin crust, homemade tomato sauce, sliced Cia Vegetal Original Cheese. Goes in the oven, melts the same, impresses the same.",
    r2_time:"35 min",r2_diff:"Medium",r2_serv:"4 servings",
    r3_tag:"With Smoked & Paprika · 15 min",r3_title:"Plant-Based Cheese Board with Jams and Nuts",
    r3_desc:"Combine all three Cia Vegetal flavours on a beautiful board with figs, honey, nuts and artisan bread.",
    r3_time:"15 min",r3_diff:"Easy",r3_serv:"6 servings",
    testi_eyebrow:"What they say",testi_title:"The proof is in those who <em>taste it</em>",
    t1:'"I bought it sceptically. After the first grill, I sent a photo to the whole family. This cheese really melts — there is no way not to believe it."',
    t2:'"Mantegana became my morning routine. I never wake up without toast and butter — and all dairy-free. My husband did not even notice the difference."',
    t3:'"I have been using it on restaurant pizza for over a year. Customers ask for more. Nobody guesses it is plant-based. When we tell them, they are amazed."',
    chef_role:"Chef · Casa Baco, Brasília",
    peca_agora:"Order Now",sua_mesa:"Your table deserves <em>the best</em>",
    cta_desc:"Interested in distributing our products in your market? Please get in touch with us!",
    pedir_wa:"WhatsApp",b2b:"B2B Supply",ver_lojas:"Find Partner Stores",
    onde_note:"",
    footer_desc:"100% plant-based foods",
    footer_produtos:"Products",queijo_original:"Original Cheese",queijo_defumado:"Smoked & Kümmel Cheese",queijo_paprica:"Paprika Cheese",pao_link:"Pão sem Queijo",
    footer_empresa:"Company",certificacoes:"Certifications",
    footer_contato:"Contact",b2b_export:"B2B / Export",
    pao_type:"Plant-Based Cheese Bun",pao_card_name:"Pão sem Queijo",pao_card_desc:"The cheese bread you love — made with fermented cashew, cassava starch and sunflower oil. Naturally cheesy flavour, no lactose, no gluten.",
    onde_provar:"Where to Taste",
    r4_tag:"With Original Cheese · 15 min",r4_title:"Vegan Croque Monsieur",r4_desc:"Toasted sandwich with melted Cia Vegetal Original Cheese. Quick, indulgent and impossible to resist.",r4_time:"15 min",r4_diff:"Easy",r4_serv:"2 servings",
    r5_tag:"With Pão sem Queijo · 25 min",r5_title:"Stuffed Cheese Rolls with Herb Butter",r5_desc:"Open the rolls and fill with Mantegana, rosemary and garlic. Gratinate in the oven until golden.",r5_time:"25 min",r5_diff:"Easy",r5_serv:"4 servings",
    r6_tag:"With Smoked Cheese · 40 min",r6_title:"Creamy Risotto with Smoked Cheese",r6_desc:"Creamy arborio rice finished with flakes of Smoked & Kümmel Cheese. Sophisticated and surprising.",r6_time:"40 min",r6_diff:"Medium",r6_serv:"4 servings",
    r7_tag:"With Paprika Cheese · 20 min",r7_title:"Nachos with Paprika Cheese Sauce",r7_desc:"Melted Paprika Cia Vegetal Cheese over crispy nachos with jalapeÃ±o and coriander. Party in a bowl.",r7_time:"20 min",r7_diff:"Easy",r7_serv:"4 servings",
    r8_tag:"With Mantegana · 50 min",r8_title:"Carrot Cake with Mantegana Frosting",r8_desc:"Moist vegan carrot cake with creamy Mantegana and cocoa frosting. The perfect afternoon treat.",r8_time:"50 min",r8_diff:"Medium",r8_serv:"8 slices",
    r9_tag:"With Original Cheese · 55 min",r9_title:"Spinach Quiche with Original Cheese",r9_desc:"Crispy pastry, creamy spinach filling and melted Cia Vegetal Original Cheese. An elegant starter.",r9_time:"55 min",r9_diff:"Medium",r9_serv:"6 servings",
    r10_tag:"With Mantegana · 20 min",r10_title:"Bruschetta with Mantegana and Confit Tomato",r10_desc:"Rustic bread slices with Mantegana, confit cherry tomatoes and basil. The perfect aperitif.",r10_time:"20 min",r10_diff:"Easy",r10_serv:"4 servings",
    r11_tag:"With Original Cheese · 75 min",r11_title:"Lentil Bolognese Lasagne with Cheese",r11_desc:"Layers of pasta, rich lentil sauce and gratinated Cia Vegetal Original Cheese. Comfort on a plate.",r11_time:"75 min",r11_diff:"Advanced",r11_serv:"6 servings",
    r12_tag:"With Mantegana & Cheese · 30 min",r12_title:"Crêpes Stuffed with Smoked Cheese",r12_desc:"Thin crêpes made with Mantegana, stuffed with Smoked & Kümmel Cheese and sautéed mushrooms.",r12_time:"30 min",r12_diff:"Medium",r12_serv:"3 servings",
    r13_tag:"With Paprika Cheese · 25 min",r13_title:"Vegan Paprika Cheese Fondue",r13_desc:"Melted Paprika Cia Vegetal Cheese with white wine, garlic and nutmeg. Dip bread, vegetables or fruit.",r13_time:"25 min",r13_diff:"Easy",r13_serv:"4 servings",
        b2b_supply:"B2B Supply",
        modal_mantegana:"Mantegana came to revolutionise: how can a plant-based spread taste so remarkably good without any artificial flavourings? Its performance has made it more than just a plant-based product — it is considered one of the finest butters on the market.",
        modal_original:"Our Original flavour cheese was created as an everyday alternative to traditional cheese. Easy to melt, it can be used in all recipes that call for a delicious, melting cheese.",
        modal_smoked:"This cheese gets its flavour from a natural smoking process using reforestation wood, plus a hint of caraway seeds. It turned out so good that even non-vegans love it.",
        modal_paprika:"The name says it all: our paprika cheese gets a gentle spicy kick from this natural ingredient. It is perfect served melted as a dipping cream with toasted bread.",
        r14_tag:"With Vegan Cheese Bun · 15 min",
    r14_title:"Cheese Bun on Waffle Iron",
    r14_desc:"Cia Vegetal Vegan Cheese Buns pressed on a waffle iron, served with chocolate sauce.",
    r14_time:"15 min",
    r14_diff:"Easy",
    r14_serv:"4 buns",
    tech_title:"Our Technology",
    tech_intro:"Companhia Vegetal developed a proprietary precision fermentation process that transforms 100% Brazilian ingredients into plant-based alternatives that truly melt, spread and taste like traditional dairy products.",
    tech_s1_title:"Precision Fermentation",
    tech_s1_body:"Our process uses selected microorganism strains to ferment Brazilian cashew . This creates a protein and lipid structure that exactly replicates the behaviour of traditional cheese and butter under heat — with zero artificial flavourings.",
    tech_s2_title:"100% Brazilian Ingredients",
    tech_s2_body:"Every ingredient comes from Brazilian soil: cashew from the Northeast, cassava starch, RSPO sunflower oil. No imports, no compromises. Brazilian biodiversity is our competitive advantage.",
    tech_s3_title:"Zero Artificials",
    tech_s3_body:"No artificial flavourings, no trans fats, no preservatives, no GMOs. Precision fermentation is the only \"trick\" — and it isn\'t even a trick: it\'s pure science in service of flavour.",
    tech_s4_title:"Real Melt",
    tech_s4_body:"The molecular structure created by fermentation allows our cheeses to melt, gratin and stretch exactly like traditional cheese. Our customers do blind tests and cannot tell the difference — that is our proof of concept.",
copyright:"© 2026 Companhia Vegetal · Brasília, DF, Brazil · All rights reserved"
  },
  es: {
  r1_tag:"Con Queso Cia Vegetal · 10 min",r1_title:"Tagliatelle al Limón con Mantegana",
    r1_desc:"Pasta fresca con Mantegana derretida, limón, ralladura y alcaparras. Simple, elegante, sorprendente.",
    r1_time:"20 min",r1_diff:"Fácil",r1_serv:"2 porciones",
    r2_tag:"Con Queso Original · 35 min",r2_title:"Pizza con Queso que Derrite de Verdad",
    r2_desc:"Masa fina, salsa de tomate casera, Queso Original Cia Vegetal. Al horno, se derrite igual, impresiona igual.",
    r2_time:"35 min",r2_diff:"Medio",r2_serv:"4 porciones",
    r3_tag:"Con Ahumado & Páprica · 15 min",r3_title:"Tabla de Quesos Veganos con Mermeladas y Nueces",
    r3_desc:"Combina los tres sabores Cia Vegetal en una tabla bonita con higos, miel, nueces y pan artesanal.",
    r3_time:"15 min",r3_diff:"Fácil",r3_serv:"6 porciones",
    testi_eyebrow:"Lo que dicen",testi_title:"La prueba está en quienes <em>lo prueban</em>",
    t1:'"Lo compré con desconfianza. Después del primer grill, envié una foto a toda la familia. Este queso se derrite igual — no hay manera de no creerlo."',
    t2:'"Mantegana se convirtió en mi rutina matutina. Ya nunca me despierto sin tostada y mantequilla — y todo sin lácteos. Mi marido ni notó la diferencia."',
    t3:'"Lo uso en la pizza del restaurante hace más de un aÃ±o. Los clientes piden más. Nadie adivina que es vegano. Cuando les contamos, quedan impresionados."',
    chef_role:"Chef · Casa Baco, Brasília",
    peca_agora:"Pide Ahora",sua_mesa:"Tu mesa merece <em>lo mejor</em>",
    cta_desc:"Â¿Interesado en distribuir nuestros productos en su mercado? Â¡Contáctenos!",
    pedir_wa:"WhatsApp",b2b:"Suministro B2B",ver_lojas:"Ver Tiendas Asociadas",
    onde_note:"",
    footer_desc:"Alimentos 100% plant-based",
    footer_produtos:"Productos",queijo_original:"Queso Original",queijo_defumado:"Queso Ahumado & Kümmel",queijo_paprica:"Queso Páprica",pao_link:"Pan de Yuca",
    footer_empresa:"La Empresa",certificacoes:"Certificaciones",
    footer_contato:"Contacto",b2b_export:"B2B / Exportación",
    onde_provar:"Dónde Degustar",
        pao_type:"Pan de Yuca Vegetal",
    pao_card_name:"Pan de Yuca",
    pao_card_desc:"El famoso pan de yuca brasileÃ±o, ahora plant-based. Sin gluten, sin lácteos, con sabor a queso de verdad.",
    b2b_supply:"Suministro B2B",
        modal_mantegana:"Mantegana llegó para revolucionar: Â¿cómo puede una crema vegetal tener un sabor tan agradable sin recurrir a aromatizantes? Su rendimiento la hizo dejar de ser solo un producto plant-based, para ser considerada una de las mejores mantequillas del mercado.",
        modal_original:"Nuestro queso sabor Original fue creado como una alternativa cotidiana al queso tradicional. De fácil derretimiento, puede usarse en todo tipo de recetas que requieran un queso delicioso y fundido.",
        modal_smoked:"El sabor de este queso proviene del proceso natural de ahumado con madera de reforestación y un toque de semillas de alcaravea. Quedó tan bueno que hasta los no veganos lo adoran.",
        modal_paprika:"El nombre lo dice todo: nuestro queso de páprica obtiene de este ingrediente natural un leve sabor picante. Queda genial servido derretido como crema con tostadas.",
        r14_tag:"Con Pan de Yuca · 15 min",
    r14_title:"Pan de Yuca en la Plancha Waffe",
    r14_desc:"Pan de Yuca Cia Vegetal preparado en la plancha de waffe, servido con salsa de chocolate.",
    r14_time:"15 min",
    r14_diff:"Fácil",
    r14_serv:"4 panes",
    pao_free1:"Sin lácteos",
        pao_free2:"Sin gluten",
        pao_free3:"Sin colesterol",
        pao_free4:"Sin aromatizantes",
        pao_free5:"",
        tech_title:"Nuestra Tecnología",
    tech_intro:"Companhia Vegetal desarrolló un proceso exclusivo de fermentación de precisión que transforma ingredientes 100% brasileÃ±os en alternativas vegetales que realmente se derriten, untan y saben como los productos lácteos tradicionales.",
    tech_s1_title:"Fermentación de Precisión",
    tech_s1_body:"Nuestro proceso utiliza cepas seleccionadas de microorganismos para fermentar anacardos . Esto crea una estructura proteica y lipídica que replica exactamente el comportamiento del queso y la mantequilla tradicionales bajo calor.",
    tech_s2_title:"100% Ingredientes BrasileÃ±os",
    tech_s2_body:"Cada ingrediente proviene del suelo brasileÃ±o: anacardo del Nordeste, almidón de mandioca, aceite de girasol RSPO. Sin importaciones, sin compromisos.",
    tech_s3_title:"Cero Artificiales",
    tech_s3_body:"Sin aromatizantes artificiales, sin grasas trans, sin conservantes, sin OGM. La fermentación de precisión es el único \"truco\" — y ni siquiera es un truco: es ciencia pura al servicio del sabor.",
    tech_s4_title:"Derretimiento Real",
    tech_s4_body:"La estructura molecular creada por la fermentación permite que nuestros quesos se derritan, gratinen y estiren exactamente como el queso tradicional. Nuestros clientes hacen pruebas a ciegas y no pueden distinguirlos.",
    r4_tag:"Con Queijo Original · 15 min",
    r4_title:"Croque Monsieur Vegano",
    r4_desc:"Sándwich tostado con Queijo Original Cia Vegetal derretido. Rápido, irresistible.",
    r4_time:"15 min",
    r4_diff:"Fácil",
    r4_serv:"2 porciones",
    r5_tag:"Con Pan de Yuca · 25 min",
    r5_title:"Pan de Yuca Relleno con Mantequilla y Hierbas",
    r5_desc:"Abra los pancitos y rellene con Mantegana, romero y ajo. Gratine al horno y sirva caliente.",
    r5_time:"25 min",
    r5_diff:"Fácil",
    r5_serv:"4 porciones",
    r6_tag:"Con Queijo Defumado · 40 min",
    r6_title:"Risotto Cremoso con Queso Ahumado",
    r6_desc:"Arroz arbóreo cremoso finalizado con lascas de Queso Ahumado Cia Vegetal derretido.",
    r6_time:"40 min",
    r6_diff:"Medio",
    r6_serv:"4 porciones",
    r7_tag:"Con Queijo Páprica · 20 min",
    r7_title:"Nachos con Salsa de Queso Páprica",
    r7_desc:"Queso Páprica Cia Vegetal derretido sobre nachos crujientes con jalapeÃ±os y guacamole.",
    r7_time:"20 min",
    r7_diff:"Fácil",
    r7_serv:"4 porciones",
    r8_tag:"Con Mantegana · 50 min",
    r8_title:"Bizcocho de Zanahoria con Cobertura de Mantegana",
    r8_desc:"Bizcocho vegano húmedo con cobertura cremosa de Mantegana y cacao. El postre perfecto.",
    r8_time:"50 min",
    r8_diff:"Medio",
    r8_serv:"8 porciones",
    r9_tag:"Con Queijo Original · 55 min",
    r9_title:"Quiche de Espinacas con Queso Original",
    r9_desc:"Masa crujiente, relleno cremoso de espinacas y Queso Original Cia Vegetal derretido.",
    r9_time:"55 min",
    r9_diff:"Medio",
    r9_serv:"6 porciones",
    r10_tag:"Con Mantegana · 20 min",
    r10_title:"Bruschetta con Mantegana y Tomate Confitado",
    r10_desc:"Rebanadas de pan rústico con Mantegana, tomates cherry confitados y manjericão fresco.",
    r10_time:"20 min",
    r10_diff:"Fácil",
    r10_serv:"4 porciones",
    r11_tag:"Con Queijo Original · 75 min",
    r11_title:"LasaÃ±a a la BoloÃ±esa de Lentejas con Queso",
    r11_desc:"Capas de pasta, rica salsa de lentejas y Queso Original Cia Vegetal gratinado.",
    r11_time:"75 min",
    r11_diff:"Avanzado",
    r11_serv:"6 porciones",
    r12_tag:"Con Mantegana y Queso · 30 min",
    r12_title:"Crêpes Rellenas con Queso Ahumado",
    r12_desc:"Crêpes finas hechas con Mantegana, rellenas con Queso Ahumado Cia Vegetal y espinacas.",
    r12_time:"30 min",
    r12_diff:"Medio",
    r12_serv:"3 porciones",
    r13_tag:"Con Queijo Páprica · 25 min",
    r13_title:"Fondue Vegetal de Queso Páprica",
    r13_desc:"Queso Páprica Cia Vegetal derretido con vino blanco, ajo y nuez moscada. Sumerge pan, verduras o frutas.",
    r13_time:"25 min",
    r13_diff:"Fácil",
    r13_serv:"4 porciones",
copyright:"© 2026 Companhia Vegetal · Brasília, DF, Brasil · Todos los derechos reservados"
  },
  zh: {
  r1_tag:"åŠ å…¥ Cia Vegetal å¥¶é…ª · 15 åˆ†é’Ÿ",r1_title:"æŸ æª¬å®½é¢é…Manteganaé»„æ²¹",
    r1_desc:"æ–°é²œæ„é¢é…èžåŒ–çš„Manteganaã€æŸ æª¬æ±ã€æŸ æª¬çš®å’Œåˆºå±±æŸ‘ã€‚ç®€å•ã€ä¼˜é›…ã€ä»¤äººæƒŠå–œã€‚",
    r1_time:"20åˆ†é’Ÿ",r1_diff:"ç®€å•",r1_serv:"2ä»½",
    r2_tag:"æ­é…åŽŸå‘³å¥¶é…ª · 35åˆ†é’Ÿ",r2_title:"çœŸæ­£èžåŒ–å¥¶é…ªçš„æŠ«è¨",
    r2_desc:"è–„åº•ã€è‡ªåˆ¶ç•ªèŒ„é…±ã€åˆ‡ç‰‡çš„Cia VegetalåŽŸå‘³å¥¶é…ªã€‚å…¥çƒ¤ç®±ï¼ŒåŒæ ·èžåŒ–ï¼ŒåŒæ ·ä»¤äººå°è±¡æ·±åˆ»ã€‚",
    r2_time:"35åˆ†é’Ÿ",r2_diff:"ä¸­ç­‰",r2_serv:"4ä»½",
    r3_tag:"æ­é…çƒŸç† & è¾£æ¤’ç²‰å¥¶é…ª · 15åˆ†é’Ÿ",r3_title:"æ¤ç‰©å¥¶é…ªæ‹¼ç›˜é…æžœé…±å’Œåšæžœ",
    r3_desc:"å°†ä¸‰ç§Cia Vegetalé£Žå‘³æ­é…æ— èŠ±æžœã€èœ‚èœœã€åšæžœå’Œæ‰‹å·¥é¢åŒ…ï¼Œæ‘†æˆä¸€ä¸ªç¾Žä¸½çš„æ‹¼ç›˜ã€‚",
    r3_time:"15åˆ†é’Ÿ",r3_diff:"ç®€å•",r3_serv:"6ä»½",
    testi_eyebrow:"ä»–ä»¬çš„è¯„ä»·",testi_title:"è¯æ˜Žåœ¨äºŽé‚£äº›<em>å“å°</em>çš„äºº",
    t1:'"æˆ‘åŠä¿¡åŠç–‘åœ°è´­ä¹°äº†ã€‚ç¬¬ä¸€æ¬¡çƒ¤å®ŒåŽï¼Œæˆ‘ç»™å…¨å®¶äººå‘äº†ç…§ç‰‡ã€‚è¿™ç§å¥¶é…ªçœŸçš„ä¼šèžåŒ–——æ²¡æœ‰ç†ç”±ä¸ç›¸ä¿¡ã€‚"',
    t2:'"Manteganaæˆäº†æˆ‘çš„æ—©é¤å¿…å¤‡ã€‚æˆ‘å†ä¹Ÿä¸èƒ½æ²¡æœ‰é»„æ²¹åå¸åœ°é†’æ¥——è€Œä¸”å…¨æ˜¯æ— ä¹³åˆ¶å“çš„ã€‚ä¸ˆå¤«ç”šè‡³æ²¡æ³¨æ„åˆ°åŒºåˆ«ã€‚"',
    t3:'"åœ¨é¤åŽ…æŠ«è¨ä¸Šä½¿ç”¨äº†ä¸€å¹´å¤šã€‚é¡¾å®¢è¦æ±‚æ›´å¤šã€‚æ²¡æœ‰äººçŒœåˆ°å®ƒæ˜¯çº¯ç´ çš„ã€‚å½“æˆ‘ä»¬å‘Šè¯‰ä»–ä»¬æ—¶ï¼Œä»–ä»¬å¾ˆæƒŠè®¶ã€‚"',
    chef_role:"ä¸»åŽ¨ · Casa Baco, å·´è¥¿åˆ©äºš",
    peca_agora:"ç«‹å³è®¢è´­",sua_mesa:"æ‚¨çš„é¤æ¡Œå€¼å¾—æ‹¥æœ‰<em>æœ€å¥½çš„</em>",
    cta_desc:"æœ‰å…´è¶£åœ¨æ‚¨çš„å¸‚åœºåˆ†é”€æˆ‘ä»¬çš„äº§å“å—ï¼Ÿè¯·ä¸Žæˆ‘ä»¬è”ç³»ï¼",
    pedir_wa:"WhatsApp",b2b:"B2Bä¾›åº”",ver_lojas:"æŸ¥æ‰¾åˆä½œå•†åº—",
    onde_note:"",
    footer_desc:"100%æ¤ç‰©æ€§é£Ÿå“",
    footer_produtos:"äº§å“",queijo_original:"åŽŸå‘³å¥¶é…ª",queijo_defumado:"çƒŸç†å¥¶é…ª",queijo_paprica:"è¾£æ¤’ç²‰å¥¶é…ª",pao_link:"å·´è¥¿èµ·å¸é¢åŒ…çƒ",
    footer_empresa:"å…¬å¸",certificacoes:"è®¤è¯",
    footer_contato:"è”ç³»æˆ‘ä»¬",b2b_export:"B2B / å‡ºå£",
    onde_provar:"åœ¨å“ªé‡Œå“å°",
        pao_type:"å·´è¥¿èµ·å¸é¢åŒ…çƒ",
    pao_card_name:"å·´è¥¿èµ·å¸é¢åŒ…çƒ",
    pao_card_desc:"å·´è¥¿è‘—åå¥¶é…ªé¢åŒ…çš„æ¤ç‰©ç‰ˆæœ¬ã€‚ç”±å‘é…µè…°æžœã€æœ¨è–¯ç²‰å’Œè‘µèŠ±ç±½æ²¹åˆ¶æˆã€‚å¤©ç„¶å¥¶é…ªé£Žå‘³——æ— ä¹³ç³–ã€æ— éº¸è´¨ã€‚",
    b2b_supply:"B2Bä¾›åº”",
        modal_mantegana:"æ›¼ç‰¹åŠ çº³å½»åº•é¢ è¦†äº†äººä»¬çš„è®¤çŸ¥ï¼šä¸€æ¬¾æ¤ç‰©æ€§å¥¶æ²¹æ€Žä¹ˆèƒ½åœ¨ä¸æ·»åŠ ä»»ä½•äººå·¥é¦™æ–™çš„æƒ…å†µä¸‹æ‹¥æœ‰å¦‚æ­¤ä»¤äººæ„‰æ‚¦çš„é£Žå‘³ï¼Ÿå…¶å“è¶Šè¡¨çŽ°ä½¿å…¶ä¸å†ä»…ä»…æ˜¯ä¸€æ¬¾æ¤ç‰©æ€§äº§å“ï¼Œè€Œæ˜¯è¢«èª‰ä¸ºå¸‚åœºä¸Šæœ€ä¼˜è´¨çš„é»„æ²¹ä¹‹ä¸€ã€‚",
        modal_original:"æˆ‘ä»¬çš„åŽŸå‘³å¥¶é…ªæ˜¯ä½œä¸ºä¼ ç»Ÿå¥¶é…ªçš„æ—¥å¸¸æ›¿ä»£å“è€Œåˆ›é€ çš„ã€‚èžåŒ–å®¹æ˜“ï¼Œå¯ç”¨äºŽæ‰€æœ‰éœ€è¦ç¾Žå‘³èžåŒ–å¥¶é…ªçš„é£Ÿè°±ã€‚",
        modal_smoked:"è¿™æ¬¾å¥¶é…ªçš„é£Žå‘³æ¥è‡ªå¤©ç„¶ç†åˆ¶å·¥è‰ºï¼ˆä½¿ç”¨å†é€ æž—æœ¨æï¼‰å’Œä¸€ä¸è‘›ç¼•å­ç§å­çš„ç‚¹ç¼€ã€‚æ•ˆæžœéžå¸¸å¥½ï¼Œè¿žéžç´ é£Ÿè€…ä¹Ÿå–œçˆ±å®ƒã€‚",
        modal_paprika:"åå­—è¯´æ˜Žäº†ä¸€åˆ‡ï¼šæˆ‘ä»¬çš„è¾£æ¤’ç²‰å¥¶é…ªä»Žè¿™ç§å¤©ç„¶åŽŸæ–™ä¸­èŽ·å¾—æ¸©å’Œçš„è¾›è¾£é£Žå‘³ã€‚èžåŒ–åŽä½œä¸ºè˜¸é…±é…çƒ¤é¢åŒ…é£Ÿç”¨ï¼Œå£æ„Ÿç»ä½³ã€‚",
        r14_tag:"æ­é…å·´è¥¿èµ·å¸é¢åŒ…çƒ · 15åˆ†é’Ÿ",
    r14_title:"åŽå¤«é“æ¿èµ·å¸é¢åŒ…çƒ",
    r14_desc:"è¥¿é›…è”¬æœ‰é™å…¬å¸çš„çº¯ç´ èµ·å¸é¢åŒ…çƒï¼Œç”¨åŽå¤«é“æ¿çƒ¤åˆ¶ï¼Œæ­é…å·§å…‹åŠ›é…±äº«ç”¨ã€‚",
    r14_time:"15åˆ†é’Ÿ",
    r14_diff:"ç®€å•",
    r14_serv:"4ä¸ª",
    pao_free1:"æ— ä¹³åˆ¶å“",
        pao_free2:"æ— éº¸è´¨",
        pao_free3:"æ— èƒ†å›ºé†‡",
        pao_free4:"æ— äººå·¥é¦™æ–™",
        pao_free5:"",
        tech_title:"æˆ‘ä»¬çš„æŠ€æœ¯",
    tech_intro:"æ¤ç‰©å…¬å¸å¼€å‘äº†ä¸“æœ‰çš„ç²¾å‡†å‘é…µå·¥è‰ºï¼Œå°†100%å·´è¥¿åŽŸæ–™è½¬åŒ–ä¸ºçœŸæ­£èƒ½åƒä¼ ç»Ÿä¹³åˆ¶å“ä¸€æ ·èžåŒ–ã€æ¶‚æŠ¹å’Œå“å°çš„æ¤ç‰©æ€§æ›¿ä»£å“ã€‚",
    tech_s1_title:"ç²¾å‡†å‘é…µ",
    tech_s1_body:"æˆ‘ä»¬çš„å·¥è‰ºä½¿ç”¨ç²¾é€‰å¾®ç”Ÿç‰©èŒæ ªå‘é…µå·´è¥¿è…°æžœã€‚è¿™åˆ›é€ äº†è›‹ç™½è´¨å’Œè„‚è´¨ç»“æž„ï¼Œåœ¨åŠ çƒ­æ—¶å®Œå…¨å¤åˆ¶ä¼ ç»Ÿå¥¶é…ªå’Œé»„æ²¹çš„è¡Œä¸º——é›¶äººå·¥é¦™æ–™ã€‚",
    tech_s2_title:"100%å·´è¥¿åŽŸæ–™",
    tech_s2_body:"æ¯ç§åŽŸæ–™éƒ½æ¥è‡ªå·´è¥¿åœŸåœ°ï¼šä¸œåŒ—éƒ¨çš„è…°æžœã€æœ¨è–¯æ·€ç²‰ã€RSPOè‘µèŠ±ç±½æ²¹ã€‚æ— è¿›å£ï¼Œæ— å¦¥åã€‚",
    tech_s3_title:"é›¶äººå·¥æ·»åŠ ",
    tech_s3_body:"æ— äººå·¥é¦™æ–™ã€æ— åå¼è„‚è‚ªã€æ— é˜²è…å‰‚ã€æ— è½¬åŸºå› ã€‚ç²¾å‡†å‘é…µæ˜¯å”¯ä¸€çš„\"ç§˜è¯€\"——è€Œä¸”å®ƒæ ¹æœ¬ä¸æ˜¯ç§˜è¯€ï¼šè¿™æ˜¯çº¯ç²¹çš„ç§‘å­¦æœåŠ¡äºŽå‘³é“ã€‚",
    tech_s4_title:"çœŸæ­£èžåŒ–",
    tech_s4_body:"å‘é…µåˆ›é€ çš„åˆ†å­ç»“æž„ä½¿æˆ‘ä»¬çš„å¥¶é…ªèƒ½å¤Ÿåƒä¼ ç»Ÿå¥¶é…ªä¸€æ ·å®Œç¾ŽèžåŒ–ã€ç„—çƒ¤å’Œæ‹‰ä¸ã€‚æˆ‘ä»¬çš„å®¢æˆ·è¿›è¡Œç›²æµ‹åŽæ— æ³•åŒºåˆ†——è¿™å°±æ˜¯æˆ‘ä»¬çš„æ¦‚å¿µéªŒè¯ã€‚",
    r4_tag:"æ­é…åŽŸå‘³å¥¶é…ª · 15åˆ†é’Ÿ",
    r4_title:"ç´ é£Ÿæ³•å¼çƒ¤å¥¶é…ªä¸‰æ˜Žæ²»",
    r4_desc:"çƒ¤é¢åŒ…å¤¹ç€èžåŒ–çš„åŽŸå‘³å¥¶é…ªï¼Œå¿«é€Ÿåˆç¾Žå‘³ã€‚",
    r4_time:"15åˆ†é’Ÿ",
    r4_diff:"ç®€å•",
    r4_serv:"2ä»½",
    r5_tag:"æ­é…å·´è¥¿èµ·å¸é¢åŒ…çƒ · 25åˆ†é’Ÿ",
    r5_title:"é¦™è‰é»„æ²¹å¡«é¦…èµ·å¸é¢åŒ…çƒ",
    r5_desc:"å°†é¢åŒ…çƒæ‰“å¼€ï¼Œå¡«å…¥Manteganaã€è¿·è¿­é¦™å’Œå¤§è’œã€‚æ”¾å…¥çƒ¤ç®±çƒ˜çƒ¤åŽè¶çƒ­äº«ç”¨ã€‚",
    r5_time:"25åˆ†é’Ÿ",
    r5_diff:"ç®€å•",
    r5_serv:"4ä»½",
    r6_tag:"æ­é…çƒŸç†å¥¶é…ª · 40åˆ†é’Ÿ",
    r6_title:"çƒŸç†å¥¶é…ªå¥¶æ²¹çƒ©é¥­",
    r6_desc:"å¥¶æ²¹æ„å¼çƒ©é¥­ï¼Œæœ€åŽåŠ ä¸ŠCia VegetalèžåŒ–çš„çƒŸç†å¥¶é…ªç‰‡æ”¶å°¾ã€‚",
    r6_time:"40åˆ†é’Ÿ",
    r6_diff:"ä¸­ç­‰",
    r6_serv:"4ä»½",
    r7_tag:"æ­é…è¾£æ¤’ç²‰å¥¶é…ª · 20åˆ†é’Ÿ",
    r7_title:"è¾£æ¤’ç²‰å¥¶é…ªé…±çŽ‰ç±³ç‰‡",
    r7_desc:"Cia Vegetalè¾£æ¤’ç²‰å¥¶é…ªèžåŒ–åŽæ·‹åœ¨è„†çŽ‰ç±³ç‰‡ä¸Šï¼Œé…å¢¨è¥¿å“¥èƒ¡æ¤’å’Œç‰›æ²¹æžœé…±ã€‚",
    r7_time:"20åˆ†é’Ÿ",
    r7_diff:"ç®€å•",
    r7_serv:"4ä»½",
    r8_tag:"æ­é…Mantegana · 50åˆ†é’Ÿ",
    r8_title:"Manteganaç³–éœœèƒ¡èåœè›‹ç³•",
    r8_desc:"æ¹¿æ¶¦çš„çº¯ç´ èƒ¡èåœè›‹ç³•ï¼Œæ­é…Manteganaå’Œå¯å¯ç²‰åˆ¶æˆçš„å¥¶æ²¹ç³–éœœã€‚å®Œç¾Žç”œç‚¹ã€‚",
    r8_time:"50åˆ†é’Ÿ",
    r8_diff:"ä¸­ç­‰",
    r8_serv:"8ä»½",
    r9_tag:"æ­é…åŽŸå‘³å¥¶é…ª · 55åˆ†é’Ÿ",
    r9_title:"åŽŸå‘³å¥¶é…ªè èœæ³•å¼å’¸æ´¾",
    r9_desc:"é…¥è„†æ´¾çš®ï¼Œå¥¶æ²¹è èœé¦…æ–™ï¼ŒåŠ ä¸ŠèžåŒ–çš„Cia VegetalåŽŸå‘³å¥¶é…ªã€‚",
    r9_time:"55åˆ†é’Ÿ",
    r9_diff:"ä¸­ç­‰",
    r9_serv:"6ä»½",
    r10_tag:"æ­é…Mantegana · 20åˆ†é’Ÿ",
    r10_title:"Manteganaç•ªèŒ„æ²¹å°å¸ƒé²æ–¯å‡¯å¡”",
    r10_desc:"ä¹¡æ‘é¢åŒ…ç‰‡æ¶‚ä¸ŠManteganaï¼Œæ­é…ç³–æ¸æ¨±æ¡ƒç•ªèŒ„å’Œæ–°é²œç½—å‹’ã€‚",
    r10_time:"20åˆ†é’Ÿ",
    r10_diff:"ç®€å•",
    r10_serv:"4ä»½",
    r11_tag:"æ­é…åŽŸå‘³å¥¶é…ª · 75åˆ†é’Ÿ",
    r11_title:"æ‰è±†è‚‰é…±å¥¶é…ªåƒå±‚é¢",
    r11_desc:"æ„å¤§åˆ©é¢å±‚ã€æµ“éƒæ‰è±†é…±å’ŒCia VegetalåŽŸå‘³å¥¶é…ªç„—çƒ¤ã€‚",
    r11_time:"75åˆ†é’Ÿ",
    r11_diff:"é«˜çº§",
    r11_serv:"6ä»½",
    r12_tag:"æ­é…Manteganaå’Œå¥¶é…ª · 30åˆ†é’Ÿ",
    r12_title:"çƒŸç†å¥¶é…ªè–„é¥¼å·",
    r12_desc:"ç”¨Manteganaåˆ¶ä½œçš„è–„å¯ä¸½é¥¼ï¼Œå¡«å…¥Cia VegetalçƒŸç†å¥¶é…ªå’Œè èœã€‚",
    r12_time:"30åˆ†é’Ÿ",
    r12_diff:"ä¸­ç­‰",
    r12_serv:"3ä»½",
    r13_tag:"æ­é…è¾£æ¤’ç²‰å¥¶é…ª · 25åˆ†é’Ÿ",
    r13_title:"è¾£æ¤’ç²‰å¥¶é…ªç´ é£Ÿç«é”…",
    r13_desc:"Cia Vegetalè¾£æ¤’ç²‰å¥¶é…ªèžåŒ–ï¼ŒåŠ å…¥ç™½è‘¡è„é…’ã€å¤§è’œå’Œè‚‰è±†è”»ã€‚è˜¸é¢åŒ…ã€è”¬èœæˆ–æ°´æžœäº«ç”¨ã€‚",
    r13_time:"25åˆ†é’Ÿ",
    r13_diff:"ç®€å•",
    r13_serv:"4ä»½",
copyright:"© 2026 Companhia Vegetal · å·´è¥¿åˆ©äºš, è”é‚¦åŒº, å·´è¥¿ · ç‰ˆæƒæ‰€æœ‰"
  },
  ja: {
  r1_tag:"Cia Vegetal ãƒ ãƒ¼ã‚ºä½¿ç”¨ · 20 åˆ†",r1_title:"ãƒ¬ãƒ¢ãƒ³ã‚¿ãƒªã‚¢ãƒ†ãƒƒãƒ¬ã¨ãƒžãƒ³ãƒ†ã‚¬ãƒŠãƒã‚¿ãƒ¼",
    r1_desc:"æº¶ã‘ãŸãƒžãƒ³ãƒ†ã‚¬ãƒŠã€ãƒ¬ãƒ¢ãƒ³æ±ã€ã‚¼ã‚¹ãƒˆã€ã‚±ãƒ¼ãƒ‘ãƒ¼ã¨å’ŒãˆãŸãƒ•ãƒ¬ãƒƒã‚·ãƒ¥ãƒ‘ã‚¹ã‚¿ã€‚ã‚·ãƒ³ãƒ—ãƒ«ã€ã‚¨ãƒ¬ã‚¬ãƒ³ãƒˆã€ã‚µãƒ—ãƒ©ã‚¤ã‚ºã€‚",
    r1_time:"20åˆ†",r1_diff:"ç°¡å˜",r1_serv:"2äººå‰",
    r2_tag:"ã‚ªãƒªã‚¸ãƒŠãƒ«ãƒãƒ¼ã‚ºã§ · 35åˆ†",r2_title:"æœ¬å½“ã«æº¶ã‘ã‚‹ãƒãƒ¼ã‚ºã®ãƒ”ã‚¶",
    r2_desc:"è–„ç”Ÿåœ°ã€è‡ªå®¶è£½ãƒˆãƒžãƒˆã‚½ãƒ¼ã‚¹ã€ã‚¹ãƒ©ã‚¤ã‚¹ã—ãŸCia Vegetalã‚ªãƒªã‚¸ãƒŠãƒ«ãƒãƒ¼ã‚ºã€‚åŒã˜ã‚ˆã†ã«æº¶ã‘ã€åŒã˜ã‚ˆã†ã«å°è±¡ã¥ã‘ã‚‹ã€‚",
    r2_time:"35åˆ†",r2_diff:"ä¸­ç´š",r2_serv:"4äººå‰",
    r3_tag:"ã‚¹ãƒ¢ãƒ¼ã‚¯ & ãƒ‘ãƒ—ãƒªã‚«ã§ · 15åˆ†",r3_title:"æ¤ç‰©æ€§ãƒãƒ¼ã‚ºãƒœãƒ¼ãƒ‰ã¨ã‚¸ãƒ£ãƒ ã€ãƒŠãƒƒãƒ„",
    r3_desc:"ä¸‰ç¨®é¡žã™ã¹ã¦ã®Cia Vegetalãƒ•ãƒ¬ãƒ¼ãƒãƒ¼ã‚’ã‚¤ãƒã‚¸ã‚¯ã€èœ‚èœœã€ãƒŠãƒƒãƒ„ã€è·äººãƒ‘ãƒ³ã¨åˆã‚ã›ã¦ç¾Žã—ã„ãƒœãƒ¼ãƒ‰ã«ã€‚",
    r3_time:"15åˆ†",r3_diff:"ç°¡å˜",r3_serv:"6äººå‰",
    testi_eyebrow:"å½¼ã‚‰ã®è¨€è‘‰",testi_title:"è¨¼æ˜Žã¯<em>è©¦ã—ãŸäºº</em>ãŸã¡ã®ä¸­ã«ã‚ã‚‹",
    t1:'"æ‡ç–‘çš„ã«è³¼å…¥ã—ã¾ã—ãŸã€‚æœ€åˆã®ã‚°ãƒªãƒ«ã®å¾Œã€å®¶æ—å…¨å“¡ã«å†™çœŸã‚’é€ã‚Šã¾ã—ãŸã€‚ã“ã®ãƒãƒ¼ã‚ºã¯æœ¬å½“ã«æº¶ã‘ã¾ã™——ä¿¡ã˜ãªã„ã‚ã‘ã«ã¯ã„ãã¾ã›ã‚“ã€‚"',
    t2:'"ãƒžãƒ³ãƒ†ã‚¬ãƒŠãŒæœã®ç¿’æ…£ã«ãªã‚Šã¾ã—ãŸã€‚ã‚‚ã†ãƒˆãƒ¼ã‚¹ãƒˆã¨ãƒã‚¿ãƒ¼ãªã—ã§ã¯èµ·ãã‚‰ã‚Œã¾ã›ã‚“——ã—ã‹ã‚‚å…¨éƒ¨ä¹³è£½å“ä¸ä½¿ç”¨ã€‚å¤«ã¯å…¨ãé•ã„ã«æ°—ã¥ãã¾ã›ã‚“ã§ã—ãŸã€‚"',
    t3:'"ãƒ¬ã‚¹ãƒˆãƒ©ãƒ³ã®ãƒ”ã‚¶ã«1å¹´ä»¥ä¸Šä½¿ã£ã¦ã„ã¾ã™ã€‚ãŠå®¢æ§˜ã¯ã‚‚ã£ã¨æ¬²ã—ãŒã‚Šã¾ã™ã€‚èª°ã‚‚æ¤ç‰©æ€§ã ã¨ã¯æ€ã„ã¾ã›ã‚“ã€‚ä¼ãˆã‚‹ã¨é©šãã¾ã™ã€‚"',
    chef_role:"ã‚·ã‚§ãƒ• · Casa Baco, ãƒ–ãƒ©ã‚¸ãƒªã‚¢",
    peca_agora:"ä»Šã™ãæ³¨æ–‡",sua_mesa:"ã‚ãªãŸã®é£Ÿå“ã¯<em>æœ€é«˜ã®ã‚‚ã®</em>ã«å€¤ã™ã‚‹",
    cta_desc:"å½“ç¤¾è£½å“ã®è²©å£²ä»£ç†åº—ã«ãªã‚Šã¾ã›ã‚“ã‹ï¼Ÿãœã²ã”é€£çµ¡ãã ã•ã„ï¼",
    pedir_wa:"LINE",b2b:"B2Bä¾›çµ¦",ver_lojas:"ææºåº—èˆ—ã‚’æŽ¢ã™",
    onde_note:"",
    footer_desc:"100%ãƒ—ãƒ©ãƒ³ãƒˆãƒ™ãƒ¼ã‚¹ãƒ•ãƒ¼ãƒ‰",
    footer_produtos:"è£½å“",queijo_original:"ã‚ªãƒªã‚¸ãƒŠãƒ«ãƒãƒ¼ã‚º",queijo_defumado:"ã‚¹ãƒ¢ãƒ¼ã‚¯ãƒãƒ¼ã‚º",queijo_paprica:"ãƒ‘ãƒ—ãƒªã‚«ãƒãƒ¼ã‚º",pao_link:"ãƒãƒ³ãƒ»ãƒ‡ãƒ»ã‚±ãƒ¼ã‚¸ãƒ§",
    footer_empresa:"ä¼šç¤¾",certificacoes:"èªè¨¼",
    footer_contato:"ãŠå•ã„åˆã‚ã›",b2b_export:"B2B / è¼¸å‡º",
    onde_provar:"ã©ã“ã§å‘³ã‚ãˆã‚‹ã‹",
        pao_type:"ãƒãƒ³ãƒ»ãƒ‡ãƒ»ã‚±ãƒ¼ã‚¸ãƒ§",
    pao_card_name:"ãƒãƒ³ãƒ»ãƒ‡ãƒ»ã‚±ãƒ¼ã‚¸ãƒ§",
    pao_card_desc:"ãƒ–ãƒ©ã‚¸ãƒ«ã®äººæ°—ãƒãƒ¼ã‚ºãƒ‘ãƒ³ã€æ¤ç‰©æ€§ãƒãƒ¼ã‚¸ãƒ§ãƒ³ã€‚ç™ºé…µã‚«ã‚·ãƒ¥ãƒ¼ãƒŠãƒƒãƒ„ã€ã‚¿ãƒ”ã‚ªã‚«ç²‰ã€ã²ã¾ã‚ã‚Šæ²¹ã§ä½œã‚‰ã‚Œã¦ã„ã¾ã™ã€‚ä¹³ç³–ãƒ»ã‚°ãƒ«ãƒ†ãƒ³ãƒ•ãƒªãƒ¼ã€‚",
    b2b_supply:"B2Bèª¿é”",
        modal_mantegana:"ãƒžãƒ³ãƒ†ã‚¬ãƒŠã¯é©å‘½ã‚’ã‚‚ãŸã‚‰ã—ã¾ã—ãŸï¼šäººå·¥é¦™æ–™ã‚’ä½¿ã‚ãšã«ã€æ¤ç‰©æ€§ã‚¹ãƒ—ãƒ¬ãƒƒãƒ‰ãŒã“ã‚Œã»ã©ç¾Žå‘³ã—ããªã‚Œã‚‹ã®ã§ã—ã‚‡ã†ã‹ï¼Ÿãã®ãƒ‘ãƒ•ã‚©ãƒ¼ãƒžãƒ³ã‚¹ã«ã‚ˆã‚Šã€å˜ãªã‚‹ãƒ—ãƒ©ãƒ³ãƒˆãƒ™ãƒ¼ã‚¹è£½å“ã‚’è¶…ãˆã€å¸‚å ´æœ€é«˜ã®ãƒã‚¿ãƒ¼ã®ä¸€ã¤ã¨ã—ã¦èªã‚ã‚‰ã‚Œã¦ã„ã¾ã™ã€‚",
        modal_original:"ã‚ªãƒªã‚¸ãƒŠãƒ«ãƒ•ãƒ¬ãƒ¼ãƒãƒ¼ãƒãƒ¼ã‚ºã¯ã€ä¼çµ±çš„ãªãƒãƒ¼ã‚ºã®æ—¥å¸¸çš„ãªä»£æ›¿å“ã¨ã—ã¦ä½œã‚‰ã‚Œã¾ã—ãŸã€‚æº¶ã‘ã‚„ã™ãã€ãŠã„ã—ã„æº¶ã‘ã‚‹ãƒãƒ¼ã‚ºãŒå¿…è¦ãªã‚ã‚‰ã‚†ã‚‹ãƒ¬ã‚·ãƒ”ã«ä½¿ç”¨ã§ãã¾ã™ã€‚",
        modal_smoked:"ã“ã®ãƒãƒ¼ã‚ºã®ãƒ•ãƒ¬ãƒ¼ãƒãƒ¼ã¯ã€å†æ¤æž—ç”¨ã®æœ¨æã‚’ä½¿ã£ãŸå¤©ç„¶ã®ã‚¹ãƒ¢ãƒ¼ã‚­ãƒ³ã‚°å·¥ç¨‹ã¨ã‚­ãƒ£ãƒ©ã‚¦ã‚§ã‚¤ã‚·ãƒ¼ãƒ‰ã®ã•ã‚ã‚„ã‹ãªãƒ’ãƒ³ãƒˆã‹ã‚‰ç”Ÿã¾ã‚Œã¾ã™ã€‚å‡ºæ¥æ „ãˆãŒç´ æ™´ã‚‰ã—ãã€ãƒ“ãƒ¼ã‚¬ãƒ³ã§ãªã„æ–¹ã€…ã«ã‚‚æ„›ã•ã‚Œã¦ã„ã¾ã™ã€‚",
        modal_paprika:"ãã®åå‰ãŒã™ã¹ã¦ã‚’ç‰©èªžã£ã¦ã„ã¾ã™ï¼šãƒ‘ãƒ—ãƒªã‚«ãƒãƒ¼ã‚ºã¯ã“ã®å¤©ç„¶æˆåˆ†ã‹ã‚‰ã»ã‚“ã®ã‚Šã¨ã—ãŸã‚¹ãƒ‘ã‚¤ã‚·ãƒ¼ãªé¢¨å‘³ã‚’å¾—ã¦ã„ã¾ã™ã€‚æº¶ã‹ã—ã¦ãƒ‡ã‚£ãƒƒãƒ—ã‚¯ãƒªãƒ¼ãƒ ã¨ã—ã¦ãƒˆãƒ¼ã‚¹ãƒˆã¨ä¸€ç·’ã«ãŠå¬ã—ä¸ŠãŒã‚Šã„ãŸã ãã®ãŒæœ€é«˜ã§ã™ã€‚",
        r14_tag:"ãƒãƒ³ãƒ»ãƒ‡ãƒ»ã‚±ãƒ¼ã‚¸ãƒ§ã¨ · 15åˆ†",
    r14_title:"ãƒ¯ãƒƒãƒ•ãƒ«ã‚¢ã‚¤ãƒ­ãƒ³ã®ãƒãƒ³ãƒ»ãƒ‡ãƒ»ã‚±ãƒ¼ã‚¸ãƒ§",
    r14_desc:"ã‚·ã‚¢ãƒ»ãƒ´ã‚§ã‚¸ã‚§ã‚¿ãƒ«ã®ãƒ´ã‚£ãƒ¼ã‚¬ãƒ³ãƒãƒ³ãƒ»ãƒ‡ãƒ»ã‚±ãƒ¼ã‚¸ãƒ§ã‚’ãƒ¯ãƒƒãƒ•ãƒ«ã‚¢ã‚¤ãƒ­ãƒ³ã§ç„¼ãã€ãƒãƒ§ã‚³ãƒ¬ãƒ¼ãƒˆã‚½ãƒ¼ã‚¹ã‚’æ·»ãˆã¦ã€‚",
    r14_time:"15åˆ†",
    r14_diff:"ç°¡å˜",
    r14_serv:"4å€‹",
    pao_free1:"ä¹³è£½å“ä¸ä½¿ç”¨",
        pao_free2:"ã‚°ãƒ«ãƒ†ãƒ³ãƒ•ãƒªãƒ¼",
        pao_free3:"ã‚³ãƒ¬ã‚¹ãƒ†ãƒ­ãƒ¼ãƒ«ãªã—",
        pao_free4:"äººå·¥é¦™æ–™ä¸ä½¿ç”¨",
        pao_free5:"",
        tech_title:"ç§ãŸã¡ã®æŠ€è¡“",
    tech_intro:"ã‚·ã‚¢ãƒ»ãƒ´ã‚§ã‚¸ã‚§ã‚¿ãƒ«ã¯ã€100%ãƒ–ãƒ©ã‚¸ãƒ«ç”£åŽŸææ–™ã‚’ä¼çµ±çš„ãªä¹³è£½å“ã®ã‚ˆã†ã«æœ¬å½“ã«æº¶ã‘ã€åºƒãŒã‚Šã€ç¾Žå‘³ã—ã„æ¤ç‰©æ€§ä»£æ›¿å“ã«å¤‰ãˆã‚‹ç‹¬è‡ªã®ç²¾å¯†ç™ºé…µãƒ—ãƒ­ã‚»ã‚¹ã‚’é–‹ç™ºã—ã¾ã—ãŸã€‚",
    tech_s1_title:"ç²¾å¯†ç™ºé…µ",
    tech_s1_body:"ç§ãŸã¡ã®ãƒ—ãƒ­ã‚»ã‚¹ã¯ã€é¸æŠžã•ã‚ŒãŸãƒ–ãƒ©ã‚¸ãƒ«ã®ã‚«ã‚·ãƒ¥ãƒ¼ãƒŠãƒƒãƒ„ã‚’ç™ºé…µã•ã›ã‚‹å¾®ç”Ÿç‰©æ ªã‚’ä½¿ç”¨ã—ã¾ã™ã€‚ã“ã‚Œã«ã‚ˆã‚Šã€åŠ ç†±ä¸‹ã§ã®ä¼çµ±çš„ãªãƒãƒ¼ã‚ºã¨ãƒã‚¿ãƒ¼ã®å‹•ä½œã‚’å®Œå…¨ã«å†ç¾ã™ã‚‹ã‚¿ãƒ³ãƒ‘ã‚¯è³ªã¨è„‚è³ªã®æ§‹é€ ãŒä½œã‚‰ã‚Œã¾ã™ã€‚",
    tech_s2_title:"100%ãƒ–ãƒ©ã‚¸ãƒ«ç”£åŽŸææ–™",
    tech_s2_body:"ã™ã¹ã¦ã®åŽŸææ–™ã¯ãƒ–ãƒ©ã‚¸ãƒ«ã®åœŸåœ°ã‹ã‚‰ï¼šåŒ—æ±éƒ¨ã®ã‚«ã‚·ãƒ¥ãƒ¼ãƒŠãƒƒãƒ„ã€ã‚­ãƒ£ãƒƒã‚µãƒãƒ‡ãƒ³ãƒ—ãƒ³ã€RSPOã²ã¾ã‚ã‚Šæ²¹ã€‚è¼¸å…¥ãªã—ã€å¦¥å”ãªã—ã€‚",
    tech_s3_title:"ã‚¼ãƒ­äººå·¥ç‰©",
    tech_s3_body:"äººå·¥é¦™æ–™ãªã—ã€ãƒˆãƒ©ãƒ³ã‚¹è„‚è‚ªãªã—ã€é˜²è…å‰¤ãªã—ã€GMOãªã—ã€‚ç²¾å¯†ç™ºé…µãŒå”¯ä¸€ã®ã€Œç§˜è¨£ã€ã§ã™ãŒã€ãã‚Œã‚‚ç§˜è¨£ã§ã¯ã‚ã‚Šã¾ã›ã‚“ï¼šå‘³ã®ãŸã‚ã®ç´”ç²‹ãªç§‘å­¦ã§ã™ã€‚",
    tech_s4_title:"æœ¬ç‰©ã®æº¶ã‘",
    tech_s4_body:"ç™ºé…µã«ã‚ˆã£ã¦ä½œã‚‰ã‚ŒãŸåˆ†å­æ§‹é€ ã«ã‚ˆã‚Šã€ç§ãŸã¡ã®ãƒãƒ¼ã‚ºã¯ä¼çµ±çš„ãªãƒãƒ¼ã‚ºã¨ã¾ã£ãŸãåŒã˜ã‚ˆã†ã«æº¶ã‘ã€ã‚°ãƒ©ã‚¿ãƒ³ã«ãªã‚Šã€ä¼¸ã³ã¾ã™ã€‚ãŠå®¢æ§˜ã¯ãƒ–ãƒ©ã‚¤ãƒ³ãƒ‰ãƒ†ã‚¹ãƒˆã‚’è¡Œã„ã€åŒºåˆ¥ã§ãã¾ã›ã‚“ã€‚",
    r4_tag:"ã‚ªãƒªã‚¸ãƒŠãƒ«ãƒãƒ¼ã‚ºä½¿ç”¨ · 15åˆ†",
    r4_title:"ãƒ´ã‚£ãƒ¼ã‚¬ãƒ³ãƒ»ã‚¯ãƒ­ãƒƒã‚¯ãƒ ãƒƒã‚·ãƒ¥",
    r4_desc:"ã‚·ã‚¢ãƒ»ãƒ´ã‚§ã‚¸ã‚§ã‚¿ãƒ«ã®ã‚ªãƒªã‚¸ãƒŠãƒ«ãƒãƒ¼ã‚ºã‚’æº¶ã‹ã—ãŸãƒˆãƒ¼ã‚¹ãƒˆã‚µãƒ³ãƒ‰ã‚¤ãƒƒãƒã€‚ç´ æ—©ãã€æŠ—ã„ãŒãŸã„ç¾Žå‘³ã—ã•ã€‚",
    r4_time:"15åˆ†",
    r4_diff:"ç°¡å˜",
    r4_serv:"2äººåˆ†",
    r5_tag:"ãƒãƒ³ãƒ»ãƒ‡ãƒ»ã‚±ãƒ¼ã‚¸ãƒ§ä½¿ç”¨ · 25åˆ†",
    r5_title:"ãƒãƒ¼ãƒ–ãƒã‚¿ãƒ¼è©°ã‚ãƒãƒ¼ã‚ºãƒ‘ãƒ³",
    r5_desc:"ãƒ‘ãƒ³ã‚’é–‹ã‘ã¦ãƒžãƒ³ãƒ†ã‚¬ãƒŠã€ãƒ­ãƒ¼ã‚ºãƒžãƒªãƒ¼ã€ã‚¬ãƒ¼ãƒªãƒƒã‚¯ã‚’è©°ã‚ã€ã‚ªãƒ¼ãƒ–ãƒ³ã§ç„¼ã„ã¦ç†±ã€…ã§ã©ã†ãžã€‚",
    r5_time:"25åˆ†",
    r5_diff:"ç°¡å˜",
    r5_serv:"4äººåˆ†",
    r6_tag:"ã‚¹ãƒ¢ãƒ¼ã‚¯ãƒãƒ¼ã‚ºä½¿ç”¨ · 40åˆ†",
    r6_title:"ã‚¹ãƒ¢ãƒ¼ã‚¯ãƒãƒ¼ã‚ºã®ã‚¯ãƒªãƒ¼ãƒŸãƒ¼ãƒªã‚¾ãƒƒãƒˆ",
    r6_desc:"ã‚¯ãƒªãƒ¼ãƒŸãƒ¼ãªã‚¢ãƒ«ãƒœãƒªã‚ªç±³ã‚’ã€ã‚·ã‚¢ãƒ»ãƒ´ã‚§ã‚¸ã‚§ã‚¿ãƒ«ã®ã‚¹ãƒ¢ãƒ¼ã‚¯ãƒãƒ¼ã‚ºã®ãƒ•ãƒ¬ãƒ¼ã‚¯ã§ä»•ä¸Šã’ã¾ã™ã€‚",
    r6_time:"40åˆ†",
    r6_diff:"æ™®é€š",
    r6_serv:"4äººåˆ†",
    r7_tag:"ãƒ‘ãƒ—ãƒªã‚«ãƒãƒ¼ã‚ºä½¿ç”¨ · 20åˆ†",
    r7_title:"ãƒ‘ãƒ—ãƒªã‚«ãƒãƒ¼ã‚ºã‚½ãƒ¼ã‚¹ã®ãƒŠãƒãƒ§ã‚¹",
    r7_desc:"ã‚·ã‚¢ãƒ»ãƒ´ã‚§ã‚¸ã‚§ã‚¿ãƒ«ã®ãƒ‘ãƒ—ãƒªã‚«ãƒãƒ¼ã‚ºã‚’æº¶ã‹ã—ã¦ã€ã‚¯ãƒªã‚¹ãƒ”ãƒ¼ãƒŠãƒãƒ§ã‚¹ã«ã‹ã‘ã€ãƒãƒ©ãƒšãƒ¼ãƒ‹ãƒ§ã¨ã‚°ã‚¢ã‚«ãƒ¢ãƒ¼ãƒ¬ã‚’æ·»ãˆã¦ã€‚",
    r7_time:"20åˆ†",
    r7_diff:"ç°¡å˜",
    r7_serv:"4äººåˆ†",
    r8_tag:"ãƒžãƒ³ãƒ†ã‚¬ãƒŠä½¿ç”¨ · 50åˆ†",
    r8_title:"ãƒžãƒ³ãƒ†ã‚¬ãƒŠãƒ•ãƒ­ã‚¹ãƒ†ã‚£ãƒ³ã‚°ã®ã‚­ãƒ£ãƒ­ãƒƒãƒˆã‚±ãƒ¼ã‚­",
    r8_desc:"ã—ã£ã¨ã‚Šã—ãŸãƒ´ã‚£ãƒ¼ã‚¬ãƒ³ã‚­ãƒ£ãƒ­ãƒƒãƒˆã‚±ãƒ¼ã‚­ã«ã€ãƒžãƒ³ãƒ†ã‚¬ãƒŠã¨ã‚«ã‚«ã‚ªã®ã‚¯ãƒªãƒ¼ãƒŸãƒ¼ãƒ•ãƒ­ã‚¹ãƒ†ã‚£ãƒ³ã‚°ã‚’ã®ã›ãŸå®Œç’§ãªãƒ‡ã‚¶ãƒ¼ãƒˆã€‚",
    r8_time:"50åˆ†",
    r8_diff:"æ™®é€š",
    r8_serv:"8åˆ‡ã‚Œ",
    r9_tag:"ã‚ªãƒªã‚¸ãƒŠãƒ«ãƒãƒ¼ã‚ºä½¿ç”¨ · 55åˆ†",
    r9_title:"ã‚ªãƒªã‚¸ãƒŠãƒ«ãƒãƒ¼ã‚ºã®ã»ã†ã‚Œã‚“è‰ã‚­ãƒƒã‚·ãƒ¥",
    r9_desc:"ã‚µã‚¯ã‚µã‚¯ã®ãƒ‘ã‚¤ç”Ÿåœ°ã«ã€ã‚¯ãƒªãƒ¼ãƒŸãƒ¼ãªã»ã†ã‚Œã‚“è‰ãƒ•ã‚£ãƒªãƒ³ã‚°ã¨ã‚·ã‚¢ãƒ»ãƒ´ã‚§ã‚¸ã‚§ã‚¿ãƒ«ã®ã‚ªãƒªã‚¸ãƒŠãƒ«ãƒãƒ¼ã‚ºã‚’è©°ã‚ã¦ã€‚",
    r9_time:"55åˆ†",
    r9_diff:"æ™®é€š",
    r9_serv:"6äººåˆ†",
    r10_tag:"ãƒžãƒ³ãƒ†ã‚¬ãƒŠä½¿ç”¨ · 20åˆ†",
    r10_title:"ãƒžãƒ³ãƒ†ã‚¬ãƒŠã¨ã‚³ãƒ³ãƒ•ã‚£ãƒˆãƒžãƒˆã®ãƒ–ãƒ«ã‚¹ã‚±ãƒƒã‚¿",
    r10_desc:"ãƒ©ã‚¹ãƒ†ã‚£ãƒƒã‚¯ãƒ–ãƒ¬ãƒƒãƒ‰ã®ã‚¹ãƒ©ã‚¤ã‚¹ã«ãƒžãƒ³ãƒ†ã‚¬ãƒŠã‚’å¡—ã‚Šã€ã‚³ãƒ³ãƒ•ã‚£ãƒã‚§ãƒªãƒ¼ãƒˆãƒžãƒˆã¨ãƒ•ãƒ¬ãƒƒã‚·ãƒ¥ãƒã‚¸ãƒ«ã‚’ã®ã›ã¦ã€‚",
    r10_time:"20åˆ†",
    r10_diff:"ç°¡å˜",
    r10_serv:"4äººåˆ†",
    r11_tag:"ã‚ªãƒªã‚¸ãƒŠãƒ«ãƒãƒ¼ã‚ºä½¿ç”¨ · 75åˆ†",
    r11_title:"ãƒ¬ãƒ³ã‚ºè±†ãƒœãƒ­ãƒãƒ¼ã‚¼ã®ãƒãƒ¼ã‚ºãƒ©ã‚¶ãƒ‹ã‚¢",
    r11_desc:"ãƒ‘ã‚¹ã‚¿ã®å±¤ã€æ¿ƒåŽšãªãƒ¬ãƒ³ã‚ºè±†ã‚½ãƒ¼ã‚¹ã€ã‚·ã‚¢ãƒ»ãƒ´ã‚§ã‚¸ã‚§ã‚¿ãƒ«ã®ã‚ªãƒªã‚¸ãƒŠãƒ«ãƒãƒ¼ã‚ºã®ã‚°ãƒ©ã‚¿ãƒ³ã€‚",
    r11_time:"75åˆ†",
    r11_diff:"ä¸Šç´š",
    r11_serv:"6äººåˆ†",
    r12_tag:"ãƒžãƒ³ãƒ†ã‚¬ãƒŠã¨ãƒãƒ¼ã‚ºä½¿ç”¨ · 30åˆ†",
    r12_title:"ã‚¹ãƒ¢ãƒ¼ã‚¯ãƒãƒ¼ã‚ºã®ã‚¯ãƒ¬ãƒ¼ãƒ—ãƒ­ãƒ¼ãƒ«",
    r12_desc:"ãƒžãƒ³ãƒ†ã‚¬ãƒŠã§ä½œã£ãŸè–„ã„ã‚¯ãƒ¬ãƒ¼ãƒ—ã«ã€ã‚·ã‚¢ãƒ»ãƒ´ã‚§ã‚¸ã‚§ã‚¿ãƒ«ã®ã‚¹ãƒ¢ãƒ¼ã‚¯ãƒãƒ¼ã‚ºã¨ã»ã†ã‚Œã‚“è‰ã‚’è©°ã‚ã¦ã€‚",
    r12_time:"30åˆ†",
    r12_diff:"æ™®é€š",
    r12_serv:"3äººåˆ†",
    r13_tag:"ãƒ‘ãƒ—ãƒªã‚«ãƒãƒ¼ã‚ºä½¿ç”¨ · 25åˆ†",
    r13_title:"ãƒ‘ãƒ—ãƒªã‚«ãƒãƒ¼ã‚ºã®ãƒ´ã‚£ãƒ¼ã‚¬ãƒ³ãƒ•ã‚©ãƒ³ãƒ‡ãƒ¥",
    r13_desc:"ã‚·ã‚¢ãƒ»ãƒ´ã‚§ã‚¸ã‚§ã‚¿ãƒ«ã®ãƒ‘ãƒ—ãƒªã‚«ãƒãƒ¼ã‚ºã‚’ç™½ãƒ¯ã‚¤ãƒ³ã€ã‚¬ãƒ¼ãƒªãƒƒã‚¯ã€ãƒŠãƒ„ãƒ¡ã‚°ã§æº¶ã‹ã—ã¦ã€‚ãƒ‘ãƒ³ã€é‡Žèœã€ãƒ•ãƒ«ãƒ¼ãƒ„ã‚’æµ¸ã—ã¦ã©ã†ãžã€‚",
    r13_time:"25åˆ†",
    r13_diff:"ç°¡å˜",
    r13_serv:"4äººåˆ†",
copyright:"© 2026 Companhia Vegetal · ãƒ–ãƒ©ã‚¸ãƒªã‚¢, DF, ãƒ–ãƒ©ã‚¸ãƒ« · å…¨è‘—ä½œæ¨©æ‰€æœ‰"
  },
  mn: {
  r1_tag:"Cia Vegetal Ð±Ñ Ñ Ð»Ð°Ð³Ñ‚Ð°Ð¹ · 30 Ð¼Ð¸Ð½",r1_title:"Ð›Ð¸Ð¼Ð¾Ð½Ñ‚Ð¾Ð¹ Ð¢Ð°Ð³Ð»ÑŒÑÑ‚ÐµÐ»Ð»Ðµ Mantegana-Ñ‚Ð°Ð¹",
    r1_desc:"Ð¥Ð°Ð¹Ð»ÑƒÑƒÐ»ÑÐ°Ð½ Mantegana, Ð½Ð¸Ð¼Ð±ÑÐ³Ð½Ð¸Ð¹ ÑˆÒ¯Ò¯Ñ, Ñ…Ð°Ð»ÑŒÑ, ÐºÐ°Ð¿ÐµÑ€Ñ Ñ…Ð¾Ð»ÑŒÑÐ¾Ð½ ÑˆÐ¸Ð½ÑÑ…ÑÐ½ Ñ‚ÑƒÐ³Ð°Ð»Ð¼Ð°Ð¹. Ð­Ð½Ð³Ð¸Ð¹Ð½, Ð½Ð°Ñ€Ð¸Ð¹Ð½, Ð³Ð°Ð¹Ñ…Ð°Ð»Ñ‚Ð°Ð¹.",
    r1_time:"20 Ð¼Ð¸Ð½",r1_diff:"Ð¥ÑÐ»Ð±Ð°Ñ€",r1_serv:"2 Ð¿Ð¾Ñ€Ñ†",
    r2_tag:"ÐÐ½Ñ…Ð½Ñ‹ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ · 35 Ð¼Ð¸Ð½",r2_title:"Ò®Ð½ÑÑ…ÑÑÑ€ Ñ…Ð°Ð¹Ð»Ð´Ð°Ð³ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ ÐŸÐ¸Ñ†Ñ†Ð°",
    r2_desc:"ÐÐ¸Ð¼Ð³ÑÐ½ Ð³ÑƒÑ€Ð¸Ð», Ð³ÑÑ€Ð¸Ð¹Ð½ ÑƒÐ»Ð°Ð°Ð½ Ð»Ð¾Ð¾Ð»ÑŒ ÑÐ¾ÑƒÑ, Cia Vegetal Ð°Ð½Ñ…Ð½Ñ‹ Ð±ÑÑÐ»Ð°Ð³. Ð¥Ð°Ð¹Ñ€ÑƒÑƒÐ»Ð´ Ñ…Ð¸Ð¹Ñ…ÑÐ´ Ð°Ð´Ð¸Ð»Ñ…Ð°Ð½ Ñ…Ð°Ð¹Ð»Ð½Ð°.",
    r2_time:"35 Ð¼Ð¸Ð½",r2_diff:"Ð”ÑƒÐ½Ð´",r2_serv:"4 Ð¿Ð¾Ñ€Ñ†",
    r3_tag:"Ð£Ñ‚ÑÐ°Ð½ & ÐŸÐ°Ð¿Ñ€Ð¸ÐºÐ° Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ · 15 Ð¼Ð¸Ð½",r3_title:"Ð’ÑÐ³Ð°Ð½ Ð±ÑÑÐ»Ð°Ð³Ð¸Ð¹Ð½ ÑÐ°Ð¼Ð±Ð°Ñ€ Ð¶ÐµÐ¼Ñ, ÑÐ°Ð¼Ð°Ñ€Ñ‚Ð°Ð¹",
    r3_desc:"Cia Vegetal-Ñ‹Ð½ Ð³ÑƒÑ€Ð²Ð°Ð½ Ð°Ð¼Ñ‚Ñ‹Ð³ Ð¸Ð½Ð¶Ð¸Ñ€, Ð·Ó©Ð³Ð¸Ð¹Ð½ Ð±Ð°Ð», ÑÐ°Ð¼Ð°Ñ€, Ð³Ð°Ñ€ ÑƒÑ€Ð»Ð°Ð»Ñ‹Ð½ Ñ‚Ð°Ð»Ñ…Ñ‚Ð°Ð¹ Ñ…Ð°Ð¼Ñ‚ Ò¯Ð·ÑÑÐ³ÑÐ»ÑÐ½Ñ‚ÑÐ¹ Ð´ÑÐ»Ð³ÑÑ† Ð´ÑÑÑ€ Ð½ÑÐ³Ñ‚Ð³ÑÐ½Ñ Ò¯Ò¯.",
    r3_time:"15 Ð¼Ð¸Ð½",r3_diff:"Ð¥ÑÐ»Ð±Ð°Ñ€",r3_serv:"6 Ð¿Ð¾Ñ€Ñ†",
    testi_eyebrow:"Ð¢ÑÐ´Ð½Ð¸Ð¹ Ñ…ÑÐ»ÑÑÐ½",testi_title:"ÐÐ¾Ñ‚Ð¾Ð»Ð³Ð¾Ð¾ Ð½ÑŒ <em>Ñ‚ÑƒÑ€ÑˆÑÐ°Ð½</em> Ñ…Ò¯Ð¼Ò¯Ò¯ÑÑ‚ Ð±Ð°Ð¹Ð³Ð°Ð°",
    t1:'"Ð‘Ð¸ ÑÑ€Ð³ÑÐ»Ð·ÑÐ¶ Ð°Ð²ÑÐ°Ð½. Ð­Ñ…Ð½Ð¸Ð¹ Ð³Ñ€Ð¸Ð»Ð»Ð¸Ð¹Ð½ Ð´Ð°Ñ€Ð°Ð° Ð³ÑÑ€ Ð±Ò¯Ð»Ð¸Ð¹Ð½Ñ…ÑÐ½Ð´ÑÑ Ð·ÑƒÑ€Ð°Ð³ Ð¸Ð»Ð³ÑÑÑÑÐ½. Ð­Ð½Ñ Ð±ÑÑÐ»Ð°Ð³ Ò¯Ð½ÑÑ…ÑÑÑ€ Ñ…Ð°Ð¹Ð»Ð´Ð°Ð³ — Ð¸Ñ‚Ð³ÑÑ…Ð³Ò¯Ð¹ Ð±Ð°Ð¹Ñ… Ð°Ñ€Ð³Ð°Ð³Ò¯Ð¹."',
    t2:'"Mantegana Ð¼Ð¸Ð½Ð¸Ð¹ Ó©Ð³Ð»Ó©Ó©Ð½Ð¸Ð¹ Ñ€ÑƒÑ‚Ð¸Ð½ Ð±Ð¾Ð»ÑÐ¾Ð½. Ð‘Ð¸ Ð´Ð°Ñ…Ð¸Ð¶ Ñ‚Ð¾ÑÑ‚Ð¾Ð¹ Ñ‚Ð¾Ñ Ñ‚Ð¾ÑÐ³Ò¯Ð¹ ÑÑÑ€Ð´ÑÐ³Ð³Ò¯Ð¹ Ð±Ð¾Ð»ÑÐ¾Ð½ — Ð±Ò¯Ð³Ð´ ÑÒ¯Ò¯Ð½ Ð±Ò¯Ñ‚ÑÑÐ³Ð´ÑÑ…Ò¯Ò¯Ð½Ð³Ò¯Ð¹. ÐÓ©Ñ…Ó©Ñ€ Ð¼Ð¸Ð½ÑŒ ÑÐ»Ð³Ð°Ð°Ð³ Ð°Ð½Ð·Ð°Ð°Ñ€Ð°Ð»Ð³Ò¯Ð¹."',
    t3:'"ÐÑÐ³ Ð¶Ð¸Ð»Ð¸Ð¹Ð½ Ð¸Ñ‡Ð»ÑÐ³ Ñ€ÐµÑÑ‚Ð¾Ñ€Ð°Ð½Ñ‹Ð½ Ð¿Ð¸Ñ†Ñ†Ð° Ð´ÑÑÑ€ Ñ…ÑÑ€ÑÐ³Ð»ÑÐ¶ Ð±Ð°Ð¹Ð½Ð°. Ò®Ð¹Ð»Ñ‡Ð»Ò¯Ò¯Ð»ÑÐ³Ñ‡Ð¸Ð´ Ð¸Ð»Ò¯Ò¯Ð³ Ñ…Ò¯ÑÑÑÐ½. Ð¥ÑÐ½ Ñ‡ Ð²ÑÐ³Ð°Ð½ Ð³ÑÐ´Ð³Ð¸Ð¹Ð³ Ñ‚Ð°Ð°Ð´Ð°Ð³Ð³Ò¯Ð¹. Ð¥ÑÐ»ÑÑ…ÑÐ´ Ð³Ð°Ð¹Ñ…Ð´Ð°Ð³."',
    chef_role:"Ð¢Ð¾Ð³Ð¾Ð¾Ñ‡ · Casa Baco, Brasília",
    peca_agora:"ÐžÐ´Ð¾Ð¾ Ð·Ð°Ñ…Ð¸Ð°Ð»Ð°Ñ…",sua_mesa:"Ð¢Ð°Ð½Ñ‹ ÑˆÐ¸Ñ€ÑÑ <em>Ñ…Ð°Ð¼Ð³Ð¸Ð¹Ð½ ÑÐ°Ð¹Ð½</em> Ð·Ò¯Ð¹Ð»Ð¸Ð¹Ð³ Ð³Ð°Ð²ÑŒÑÐ°Ð»Ð¶ Ð±Ð°Ð¹Ð½Ð°",
    cta_desc:"ÐœÐ°Ð½Ð°Ð¹ Ð±Ò¯Ñ‚ÑÑÐ³Ð´ÑÑ…Ò¯Ò¯Ð½ ÐœÐ¾Ð½Ð³Ð¾Ð» ÑƒÐ»ÑÑ‹Ð½ Ð±Ò¯Ñ… Ñ‚Ð¾Ð¼Ð¾Ð¾Ñ…Ð¾Ð½ Ð´ÑÐ»Ð³Ò¯Ò¯Ñ€Ð¸Ð¹Ð½ ÑÒ¯Ð»Ð¶ÑÑÐ½Ð´ Ñ‚ÑƒÐ½ ÑƒÐ´Ð°Ñ…Ð³Ò¯Ð¹ Ð½Ð¸Ð¹Ð»Ò¯Ò¯Ð»ÑÐ³Ð´ÑÐ½Ñ.",
    pedir_wa:"WhatsApp",b2b:"B2B Ð½Ð¸Ð¹Ð»Ò¯Ò¯Ð»ÑÐ»Ñ‚",ver_lojas:"Ð¥Ð°Ñ€Ð¸Ð»Ñ†Ð°Ð³Ñ‡ Ð´ÑÐ»Ð³Ò¯Ò¯Ñ€ Ð¾Ð»Ð¾Ñ…",
    onde_note:"",
    footer_desc:"100% ÑƒÑ€Ð³Ð°Ð¼Ð»Ñ‹Ð½ Ð³Ð°Ñ€Ð°Ð»Ñ‚Ð°Ð¹ Ñ…Ò¯Ð½Ñ",
    footer_produtos:"Ð‘Ò¯Ñ‚ÑÑÐ³Ð´ÑÑ…Ò¯Ò¯Ð½",queijo_original:"ÐÐ½Ñ…Ð½Ñ‹ Ð±ÑÑÐ»Ð°Ð³",queijo_defumado:"Ð£Ñ‚ÑÐ°Ð½ Ð±ÑÑÐ»Ð°Ð³",queijo_paprica:"ÐŸÐ°Ð¿Ñ€Ð¸ÐºÐ° Ð±ÑÑÐ»Ð°Ð³",pao_link:"Pão sem Queijo",
    footer_empresa:"ÐšÐ¾Ð¼Ð¿Ð°Ð½Ð¸",certificacoes:"Ð“ÑÑ€Ñ‡Ð¸Ð»Ð³ÑÑ",
    footer_contato:"Ð¥Ð¾Ð»Ð±Ð¾Ð¾ Ð±Ð°Ñ€Ð¸Ñ…",b2b_export:"B2B / Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚",
    onde_provar:"Ð¥Ð°Ð°Ð½Ð° Ð°Ð¼ÑÐ°Ñ… Ð²Ñ",
        pao_type:"ÐŸÐ¾Ñƒ Ð¡ÑÐ¼ ÐšÑÐ¹Ð¶Ñƒ",
    pao_card_name:"ÐŸÐ¾Ñƒ Ð¡ÑÐ¼ ÐšÑÐ¹Ð¶Ñƒ",
    pao_card_desc:"Ð‘Ñ€Ð°Ð·Ð¸Ð»Ð¸Ð¹Ð½ Ð°Ð»Ð´Ð°Ñ€Ñ‚ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ Ñ‚Ð°Ð»Ñ…Ð½Ñ‹ ÑƒÑ€Ð³Ð°Ð¼Ð»Ñ‹Ð½ Ñ…ÑƒÐ²Ð¸Ð»Ð±Ð°Ñ€. Ð˜ÑÐ³ÑÑÑÐ½ Ð±Ð¾Ñ€ ÑÐ°Ð¼Ð°Ñ€, Ð¼Ð°Ð½Ð¸Ð¾Ðº Ð±Ð¾Ð»Ð¾Ð½ Ð½Ð°Ñ€Ð°Ð½Ñ†ÑÑ†Ð³Ð¸Ð¹Ð½ Ñ‚Ð¾ÑÐ¾Ð¾Ñ€ Ñ…Ð¸Ð¹ÑÑÐ½. Ð›Ð°ÐºÑ‚Ð¾Ð·Ð³Ò¯Ð¹, Ð³Ð»ÑŽÑ‚ÐµÐ½Ð³Ò¯Ð¹.",
    b2b_supply:"B2B ÐÐ¸Ð¹Ð»Ò¯Ò¯Ð»ÑÐ»Ñ‚",
        modal_mantegana:"ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð° Ñ…ÑƒÐ²ÑŒÑÐ³Ð°Ð» Ñ…Ð¸Ð¹Ñ…ÑÑÑ€ Ð¸Ñ€ÑÑÐ½: ÑƒÑ€Ð³Ð°Ð¼Ð»Ñ‹Ð½ Ñ‚Ð¾Ñ ÑÐ¼Ð°Ñ€ Ñ‡ Ñ…Ð¸Ð¹Ð¼ÑÐ» Ð°Ð¼Ñ‚Ð»Ð°Ð³Ñ‡Ð³Ò¯Ð¹Ð³ÑÑÑ€ Ñ…ÑÑ€Ñ…ÑÐ½ Ð¸Ð¹Ð¼ Ñ‚Ð°Ð°Ð»Ð°Ð¼Ð¶Ñ‚Ð°Ð¹ Ð°Ð¼Ñ‚Ñ‚Ð°Ð¹ Ð±Ð°Ð¹Ð¶ Ñ‡Ð°Ð´Ð°Ñ… Ð²Ñ? Ð¢Ò¯Ò¯Ð½Ð¸Ð¹ Ð³Ò¯Ð¹Ñ†ÑÑ‚Ð³ÑÐ» Ð½ÑŒ Ð·Ó©Ð²Ñ…Ó©Ð½ ÑƒÑ€Ð³Ð°Ð¼Ð»Ñ‹Ð½ Ð±Ò¯Ñ‚ÑÑÐ³Ð´ÑÑ…Ò¯Ò¯Ð½ÑÑÑ Ð´Ð°Ð²ÑÐ°Ð½ — Ð·Ð°Ñ… Ð·ÑÑÐ»Ð¸Ð¹Ð½ Ñ…Ð°Ð¼Ð³Ð¸Ð¹Ð½ ÑˆÐ¸Ð»Ð´ÑÐ³ Ñ‚Ð¾ÑÐ½ÑƒÑƒÐ´Ñ‹Ð½ Ð½ÑÐ³ Ð³ÑÐ¶ Ñ‚Ð¾Ð¾Ñ†Ð¾Ð³Ð´Ð´Ð¾Ð³.",
        modal_original:"Ð‘Ð¸Ð´Ð½Ð¸Ð¹ ÐÐ½Ñ…Ð½Ñ‹ Ð°Ð¼Ñ‚Ð°Ð°Ñ€ Ñ‡Ð°Ð½Ð°Ð¶ Ð±Ð¾Ð»Ð¾Ñ… Ð±ÑÑÐ»Ð°Ð³ Ð½ÑŒ ÑƒÐ»Ð°Ð¼Ð¶Ð»Ð°Ð»Ñ‚ Ð±ÑÑÐ»Ð°Ð³Ð¸Ð¹Ð½ Ó©Ð´Ó©Ñ€ Ñ‚ÑƒÑ‚Ð¼Ñ‹Ð½ Ð¾Ñ€Ð»ÑƒÑƒÐ»Ð°Ð³Ñ‡ Ð±Ð¾Ð»Ð³Ð¾Ð½ Ð±Ò¯Ñ‚ÑÑÐ³Ð´ÑÑÐ½. Ð¥Ð°Ð¹Ð»Ð°Ñ…Ð°Ð´ Ñ…ÑÐ»Ð±Ð°Ñ€, Ð°Ð¼Ñ‚Ñ‚Ð°Ð¹ Ñ…Ð°Ð¹Ð»ÑƒÑƒÐ»Ð°Ñ… Ð±ÑÑÐ»Ð°Ð³ ÑˆÐ°Ð°Ñ€Ð´Ð´Ð°Ð³ Ð±Ò¯Ñ… Ð¶Ð¾Ñ€Ñ‚Ð¾Ð´ Ð°ÑˆÐ¸Ð³Ð»Ð°Ð¶ Ð±Ð¾Ð»Ð½Ð¾.",
        modal_smoked:"Ð­Ð½Ñ Ð±ÑÑÐ»Ð°Ð³Ð¸Ð¹Ð½ Ð°Ð¼Ñ‚ Ð½ÑŒ Ð¾Ð¹Ð½ Ð¼Ð¾Ð´Ñ‹Ð³ Ð°ÑˆÐ¸Ð³Ð»Ð°Ð½ Ð±Ð°Ð¹Ð³Ð°Ð»Ð¸Ð¹Ð½ Ð°Ñ€Ð³Ð°Ð°Ñ€ ÑƒÑ‚Ð°Ð°Ð¶ÑƒÑƒÐ»Ð°Ñ… Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ¾Ð¾Ñ Ð±Ð¾Ð»Ð¾Ð½ caraway Ò¯Ñ€Ð¸Ð¹Ð½ Ð·Ó©Ó©Ð»Ó©Ð½ Ð°Ð¼Ñ‚Ð°Ð°Ñ Ð±Ò¯Ñ€Ð´Ð´ÑÐ³. ÐœÐ°Ñˆ ÑÐ°Ð¹Ð½ Ð±Ð¾Ð»ÑÐ¾Ð½ Ñ‚ÑƒÐ» Ð²ÐµÐ³Ð°Ð½ Ð±ÑƒÑ Ñ…Ò¯Ð¼Ò¯Ò¯Ñ Ñ‡ Ð´ÑƒÑ€Ñ‚Ð°Ð¹ Ð±Ð¾Ð»ÑÐ¾Ð½.",
        modal_paprika:"ÐÑÑ€ Ð½ÑŒ Ð±Ò¯Ð³Ð´Ð¸Ð¹Ð³ Ñ…ÑÐ»Ð¶ Ð±Ð°Ð¹Ð½Ð°: Ð¼Ð°Ð½Ð°Ð¹ Ð¿Ð°Ð¿Ñ€Ð¸ÐºÐ° Ð±ÑÑÐ»Ð°Ð³ ÑÐ½Ñ Ð±Ð°Ð¹Ð³Ð°Ð»Ð¸Ð¹Ð½ Ð½Ð°Ð¹Ñ€Ð»Ð°Ð³Ð°Ð°Ñ Ð·Ó©Ó©Ð»Ó©Ð½ Ñ…ÑƒÑ€Ñ† Ð°Ð¼Ñ‚ Ð°Ð²Ð´Ð°Ð³. Ð¥Ð°Ð¹Ð»ÑƒÑƒÐ»Ð°Ð½ Ð·ÑƒÑƒÑ€Ð´Ð°Ð³ ÐºÑ€ÐµÐ¼ Ð±Ð¾Ð»Ð³Ð¾Ð½ Ñ‚Ð¾ÑÑ‚Ð¾Ð¹ Ñ…Ð°Ð¼Ñ‚ Ð¸Ð´ÑÑ…ÑÐ´ Ð¼Ð°Ñˆ Ñ‚Ð¾Ñ…Ð¸Ñ€Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹.",
        r14_tag:"ÐŸÐ¾Ñƒ Ð¡ÑÐ¼ ÐšÑÐ¹Ð¶ÑƒÑ‚Ð°Ð¹ · 15 Ð¼Ð¸Ð½",
    r14_title:"Ð’Ð°Ñ„Ð»Ð¸Ð¹Ð½ Ñ‚Ð°Ð²Ð³Ð°Ð½ Ð´ÑÑÑ€Ñ… ÐŸÐ¾Ñƒ Ð¡ÑÐ¼ ÐšÑÐ¹Ð¶Ñƒ",
    r14_desc:"Cia Vegetal-Ñ‹Ð½ ÐŸÐ¾Ñƒ Ð¡ÑÐ¼ ÐšÑÐ¹Ð¶ÑƒÐ³ Ð²Ð°Ñ„Ð»Ð¸Ð¹Ð½ Ñ‚Ð°Ð²Ð³Ð°Ð½ Ð´ÑÑÑ€ Ñ…Ð¸Ð¹Ð¶, ÑˆÐ¾ÐºÐ¾Ð»Ð°Ð´Ð½Ñ‹ ÑˆÓ©Ð»Ñ‚ÑÐ¹ Ñ…Ð°Ð¼Ñ‚ Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾.",
    r14_time:"15 Ð¼Ð¸Ð½",
    r14_diff:"Ð¥ÑÐ»Ð±Ð°Ñ€",
    r14_serv:"4 ÑˆÐ¸Ñ€Ñ…ÑÐ³",
    pao_free1:"Ð¡Ò¯Ò¯Ð³Ò¯Ð¹",
        pao_free2:"Ð“Ð»ÑŽÑ‚ÐµÐ½Ð³Ò¯Ð¹",
        pao_free3:"Ð¥Ð¾Ð»ÐµÑÑ‚ÐµÑ€Ð¸Ð½Ð³Ò¯Ð¹",
        pao_free4:"Ð¥Ð¸Ð¹Ð¼ÑÐ» Ð°Ð¼Ñ‚Ð»Ð°Ð³Ñ‡Ð³Ò¯Ð¹",
        pao_free5:"",
        tech_title:"ÐœÐ°Ð½Ð°Ð¹ Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸",
    tech_intro:"Cia Vegetal Ð½ÑŒ 100% Ð‘Ñ€Ð°Ð·Ð¸Ð»Ñ‹Ð½ Ð½Ð°Ð¹Ñ€Ð»Ð°Ð³Ñ‹Ð³ ÑƒÐ»Ð°Ð¼Ð¶Ð»Ð°Ð»Ñ‚ ÑÒ¯Ò¯Ð½ Ð±Ò¯Ñ‚ÑÑÐ³Ð´ÑÑ…Ò¯Ò¯Ð½ ÑˆÐ¸Ð³ Ð¶Ð¸Ð½Ñ…ÑÐ½Ñ Ñ…Ð°Ð¹Ð»Ð¶, Ñ‚Ð°Ñ€Ñ…Ð°Ð¶, Ð°Ð¼Ñ‚Ð»Ð°Ð³Ð´Ð´Ð°Ð³ ÑƒÑ€Ð³Ð°Ð¼Ð»Ñ‹Ð½ Ð³Ð°Ñ€Ð°Ð»Ñ‚Ð°Ð¹ Ð¾Ñ€Ð»ÑƒÑƒÐ»Ð°Ð³Ñ‡ Ð±Ð¾Ð»Ð³Ð¾Ð½ Ñ…ÑƒÐ²Ð¸Ñ€Ð³Ð°Ð´Ð°Ð³ Ó©Ð¼Ñ‡Ð¸Ð¹Ð½ Ð½Ð°Ñ€Ð¸Ð¹Ð²Ñ‡Ð»Ð°Ð»Ñ‹Ð½ Ð¸ÑÐ³ÑÐ»Ñ‚Ð¸Ð¹Ð½ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÑ‹Ð³ Ð±Ð¾Ð»Ð¾Ð²ÑÑ€ÑƒÑƒÐ»ÑÐ°Ð½.",
    tech_s1_title:"ÐÐ°Ñ€Ð¸Ð¹Ð²Ñ‡Ð»Ð°Ð»Ñ‹Ð½ Ð¸ÑÐ³ÑÐ»Ñ‚",
    tech_s1_body:"ÐœÐ°Ð½Ð°Ð¹ Ð¿Ñ€Ð¾Ñ†ÐµÑÑ Ð½ÑŒ Ð‘Ñ€Ð°Ð·Ð¸Ð»Ñ‹Ð½ ÐºÑÑˆÑŒÑŽ Ð³ Ð¸ÑÐ³ÑÑ…ÑÐ´ ÑÐ¾Ð½Ð³Ð¾ÑÐ¾Ð½ Ð¼Ð¸ÐºÑ€Ð¾Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð¼Ñ‹Ð½ Ð¾Ð¼Ð³Ð¸Ð¹Ð³ Ð°ÑˆÐ¸Ð³Ð»Ð°Ð´Ð°Ð³. Ð­Ð½Ñ Ð½ÑŒ Ð´ÑƒÐ»Ð°Ð°Ð½Ñ‹ Ð½Ó©Ð»Ó©Ó©Ð½ Ð´Ð¾Ñ€ ÑƒÐ»Ð°Ð¼Ð¶Ð»Ð°Ð»Ñ‚ Ð±ÑÑÐ»Ð°Ð³, Ñ‚Ð¾ÑÐ½Ñ‹ Ð·Ð°Ð½ Ò¯Ð¹Ð»Ð¸Ð¹Ð³ ÑÐ³ Ñ‚Ð°Ð³ Ð´ÑƒÑƒÑ€Ð°Ð¹Ð´Ð°Ð³ ÑƒÑƒÑ€Ð°Ð³, Ó©Ó©Ñ… Ñ‚Ð¾ÑÐ½Ñ‹ Ð±Ò¯Ñ‚Ñ†Ð¸Ð¹Ð³ Ð±Ð¸Ð¹ Ð±Ð¾Ð»Ð³Ð¾Ð´Ð¾Ð³.",
    tech_s2_title:"100% Ð‘Ñ€Ð°Ð·Ð¸Ð»Ñ‹Ð½ Ð½Ð°Ð¹Ñ€Ð»Ð°Ð³Ð°",
    tech_s2_body:"Ð‘Ò¯Ñ… Ð½Ð°Ð¹Ñ€Ð»Ð°Ð³Ð° Ð½ÑŒ Ð‘Ñ€Ð°Ð·Ð¸Ð»Ñ‹Ð½ Ñ…Ó©Ñ€ÑÐ½Ó©Ó©Ñ Ð¸Ñ€Ð´ÑÐ³: Ð·Ò¯Ò¯Ð½ Ñ…Ð¾Ð¹Ð´ Ñ…ÑÑÐ³Ð¸Ð¹Ð½ ÐºÑÑˆÑŒÑŽ, Ð¼Ð°Ð½Ð¸Ð¾Ðº Ñ†Ð°Ñ€Ð´ÑƒÑƒÐ», RSPO Ð½Ð°Ñ€Ð°Ð½Ñ†ÑÑ†Ð³Ð¸Ð¹Ð½ Ñ‚Ð¾Ñ. Ð˜Ð¼Ð¿Ð¾Ñ€Ñ‚Ð³Ò¯Ð¹, Ð±ÑƒÑƒÐ»Ñ‚ Ñ…Ð¸Ð¹Ð»Ð³Ò¯Ð¹.",
    tech_s3_title:"Ð¥Ð¸Ð¹Ð¼ÑÐ» Ñ‚ÑÐ³",
    tech_s3_body:"Ð¥Ð¸Ð¹Ð¼ÑÐ» Ð°Ð¼Ñ‚Ð»Ð°Ð³Ñ‡Ð³Ò¯Ð¹, Ñ‚Ñ€Ð°Ð½Ñ Ñ‚Ð¾ÑÐ³Ò¯Ð¹, ÐºÐ¾Ð½ÑÐµÑ€Ð²Ð°Ð½Ñ‚Ð³Ò¯Ð¹, Ð“ÐœÐžÐ³Ò¯Ð¹. ÐÐ°Ñ€Ð¸Ð¹Ð²Ñ‡Ð»Ð°Ð»Ñ‹Ð½ Ð¸ÑÐ³ÑÐ»Ñ‚ Ð±Ð¾Ð» Ñ†Ð¾Ñ€Ñ‹Ð½ Ð³Ð°Ð½Ñ† \"Ð°Ñ€Ð³Ð°\" — Ð³ÑÑ…Ð´ÑÑ ÑÐ½Ñ Ð½ÑŒ Ð°Ñ€Ð³Ð° Ð±Ð¸Ñˆ: Ð°Ð¼Ñ‚Ð½Ñ‹ Ò¯Ð¹Ð»Ñ‡Ð¸Ð»Ð³ÑÑÐ½Ð´ Ð·Ð¾Ñ€Ð¸ÑƒÐ»ÑÐ°Ð½ Ñ†ÑÐ²ÑÑ€ ÑˆÐ¸Ð½Ð¶Ð»ÑÑ… ÑƒÑ…Ð°Ð°Ð½ ÑŽÐ¼.",
    tech_s4_title:"Ð–Ð¸Ð½Ñ…ÑÐ½Ñ Ñ…Ð°Ð¹Ð»Ð°Ð»Ñ‚",
    tech_s4_body:"Ð˜ÑÐ³ÑÐ»Ñ‚ÑÑÑ€ Ð±Ð¸Ð¹ Ð±Ð¾Ð»ÑÐ¾Ð½ Ð¼Ð¾Ð»ÐµÐºÑƒÐ»Ñ‹Ð½ Ð±Ò¯Ñ‚ÑÑ† Ð½ÑŒ Ð¼Ð°Ð½Ð°Ð¹ Ð±ÑÑÐ»Ð°Ð³Ð¸Ð¹Ð³ ÑƒÐ»Ð°Ð¼Ð¶Ð»Ð°Ð»Ñ‚ Ð±ÑÑÐ»Ð°Ð³ ÑˆÐ¸Ð³ ÑÐ³ Ñ…Ð°Ð¹Ð»Ð¶, Ð³Ñ€Ð¸Ð»Ð´ Ð±Ð¾Ð»Ð¶, ÑÑƒÐ½Ð°Ð´Ð°Ð³. ÐœÐ°Ð½Ð°Ð¹ Ñ…Ð°Ñ€Ð¸Ð»Ñ†Ð°Ð³Ñ‡Ð¸Ð´ ÑÐ¾Ñ…Ð¾Ñ€ Ñ‚ÐµÑÑ‚ Ñ…Ð¸Ð¹Ð¶, ÑÐ»Ð³Ð°Ð¶ Ñ‡Ð°Ð´Ð´Ð°Ð³Ð³Ò¯Ð¹.",
    r4_tag:"ÐÐ½Ñ…Ð½Ñ‹ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ · 15 Ð¼Ð¸Ð½",
    r4_title:"Ð’ÐµÐ³Ð°Ð½ ÐšÑ€Ð¾Ðº ÐœÑƒÑÑŒÐµ",
    r4_desc:"Cia Vegetal-Ñ‹Ð½ ÐÐ½Ñ…Ð½Ñ‹ Ð±ÑÑÐ»Ð°Ð³Ð¸Ð¹Ð³ Ñ…Ð°Ð¹Ð»ÑƒÑƒÐ»Ð°Ð½ Ñ…Ð¸Ð¹ÑÑÐ½ ÑˆÐ°Ñ€ÑÐ°Ð½ ÑÑÐ½Ð´Ð²Ð¸Ñ‡. Ð¥ÑÐ»Ð±Ð°Ñ€, Ð°Ð¼Ñ‚Ñ‚Ð°Ð¹.",
    r4_time:"15 Ð¼Ð¸Ð½",
    r4_diff:"Ð¥ÑÐ»Ð±Ð°Ñ€",
    r4_serv:"2 Ð¿Ð¾Ñ€Ñ†",
    r5_tag:"ÐŸÐ¾Ñƒ Ð¡ÑÐ¼ ÐšÑÐ¹Ð¶ÑƒÑ‚Ð°Ð¹ · 25 Ð¼Ð¸Ð½",
    r5_title:"ÐœÐ°Ð½Ð½Ð° Ð´Ð°Ñ€ÑÐ°Ð½ ÐŸÐ¾Ñƒ Ð¡ÑÐ¼ ÐšÑÐ¹Ð¶Ñƒ",
    r5_desc:"Ð¢Ð°Ð»Ñ…Ñ‹Ð³ Ð½ÑÑÐ¶ ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð°, Ñ€Ð¾Ð·Ð¼Ð°Ñ€Ð¸Ð½, Ñ‡Ð°ÑÐ½Ñ‹Ñ‚Ð°Ð¹ Ð´Ò¯Ò¯Ñ€Ð³ÑÐ¶, Ð·ÑƒÑƒÑ…Ð°Ð½Ð´ Ñ…Ð°Ð¹Ñ€ÑÐ½Ð°Ð° Ñ…Ð°Ð»ÑƒÑƒÐ½Ð°Ð°Ñ€ Ð¿Ð¾Ð´Ð¾Ð¾.",
    r5_time:"25 Ð¼Ð¸Ð½",
    r5_diff:"Ð¥ÑÐ»Ð±Ð°Ñ€",
    r5_serv:"4 Ð¿Ð¾Ñ€Ñ†",
    r6_tag:"Ð£Ñ‚ÑÐ°Ð½ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ · 40 Ð¼Ð¸Ð½",
    r6_title:"Ð£Ñ‚ÑÐ°Ð½ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ ÐºÑ€ÐµÐ¼Ð»ÑÐ³ Ñ€Ð¸Ð·Ð¾Ñ‚Ñ‚Ð¾",
    r6_desc:"Cia Vegetal-Ñ‹Ð½ Ñ…Ð°Ð¹Ð»ÑÐ°Ð½ ÑƒÑ‚ÑÐ°Ð½ Ð±ÑÑÐ»Ð°Ð³Ð¸Ð¹Ð½ Ñ…ÑÐ»Ñ‚ÑÑ€Ñ…Ð¸Ð¹Ð³ÑÑÑ€ Ð´ÑƒÑƒÑÐ³Ð°ÑÐ°Ð½ ÐºÑ€ÐµÐ¼Ð»ÑÐ³ Ð°Ñ€Ð±Ð¾Ñ€Ð¸Ð¾ Ð±ÑƒÐ´Ð°Ð°Ñ‚Ð°Ð¹ Ñ…Ð¾Ð¾Ð».",
    r6_time:"40 Ð¼Ð¸Ð½",
    r6_diff:"Ð”ÑƒÐ½Ð´",
    r6_serv:"4 Ð¿Ð¾Ñ€Ñ†",
    r7_tag:"ÐŸÐ°Ð¿Ñ€Ð¸ÐºÐ° Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ · 20 Ð¼Ð¸Ð½",
    r7_title:"ÐŸÐ°Ð¿Ñ€Ð¸ÐºÐ° Ð±ÑÑÐ»Ð°Ð³Ð½Ñ‹ ÑˆÓ©Ð»Ñ‚ÑÐ¹ Ð½Ð°Ñ‡Ð¾Ñ",
    r7_desc:"Cia Vegetal-Ñ‹Ð½ ÐŸÐ°Ð¿Ñ€Ð¸ÐºÐ° Ð±ÑÑÐ»Ð°Ð³Ð¸Ð¹Ð³ Ñ…Ð°Ð¹Ð»ÑƒÑƒÐ»Ð°Ð½ Ñ…Ñ€ÑƒÑÑ‚Ð»ÑÐ³ Ð½Ð°Ñ‡Ð¾Ñ Ð´ÑÑÑ€ Ð°ÑÐ³Ð°Ð¶, Ñ…Ð°Ð»Ð°Ð¿ÐµÐ½ÑŒÐ¾ Ð±Ð¾Ð»Ð¾Ð½ Ð³ÑƒÐ°ÐºÐ°Ð¼Ð¾Ð»ÐµÑ‚Ð¾Ð¹ Ñ…Ð°Ð¼Ñ‚.",
    r7_time:"20 Ð¼Ð¸Ð½",
    r7_diff:"Ð¥ÑÐ»Ð±Ð°Ñ€",
    r7_serv:"4 Ð¿Ð¾Ñ€Ñ†",
    r8_tag:"ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð° Ð´Ò¯Ò¯Ñ€Ñ‚ÑÐ¹ · 50 Ð¼Ð¸Ð½",
    r8_title:"ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð° Ñ‚Ð¾ÑÐ¾Ð»Ð³Ð¾Ð¾Ñ‚Ð¾Ð¹ Ð»ÑƒÑƒÐ²Ð°Ð½Ñ‚Ð°Ð¹ Ð±ÑÐ»ÑƒÑƒ",
    r8_desc:"ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð° Ð±Ð¾Ð»Ð¾Ð½ ÐºÐ°ÐºÐ°Ð¾Ð³Ð¾Ð¾Ñ€ Ñ…Ð¸Ð¹ÑÑÐ½ ÐºÑ€ÐµÐ¼Ð»ÑÐ³ Ñ‚Ð¾ÑÐ¾Ð»Ð³Ð¾Ð¾Ñ‚Ð¾Ð¹ Ñ‡Ð¸Ð¹Ð³Ð»ÑÐ³ Ð²ÐµÐ³Ð°Ð½ Ð»ÑƒÑƒÐ²Ð°Ð½Ñ‚Ð°Ð¹ Ð±ÑÐ»ÑƒÑƒ. Ð“Ð°Ð¹Ñ…Ð°Ð»Ñ‚Ð°Ð¹ Ð°Ð¼Ñ‚Ñ‚Ð°Ð½.",
    r8_time:"50 Ð¼Ð¸Ð½",
    r8_diff:"Ð”ÑƒÐ½Ð´",
    r8_serv:"8 Ð·Ò¯ÑÐ¼ÑÐ»",
    r9_tag:"ÐÐ½Ñ…Ð½Ñ‹ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ · 55 Ð¼Ð¸Ð½",
    r9_title:"ÐÐ½Ñ…Ð½Ñ‹ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ Ó©Ñ€Ð³Ó©ÑÑ‚ Ñ…ÑÐ¼Ñ…Ð½Ð¸Ð¹ ÐºÐ¸Ñˆ",
    r9_desc:"Ð¥Ñ€ÑƒÑÑ‚Ð»ÑÐ³ Ð´Ð¾Ð¾Ð´ Ñ…ÑÑÑÐ³, ÐºÑ€ÐµÐ¼Ð»ÑÐ³ Ó©Ñ€Ð³Ó©ÑÑ‚ Ñ…ÑÐ¼Ñ…Ð½Ð¸Ð¹ Ð´Ò¯Ò¯Ñ€Ð³ÑÐ»Ñ‚ Ð±Ð¾Ð»Ð¾Ð½ Cia Vegetal-Ñ‹Ð½ Ñ…Ð°Ð¹Ð»ÑÐ°Ð½ ÐÐ½Ñ…Ð½Ñ‹ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹.",
    r9_time:"55 Ð¼Ð¸Ð½",
    r9_diff:"Ð”ÑƒÐ½Ð´",
    r9_serv:"6 Ð¿Ð¾Ñ€Ñ†",
    r10_tag:"ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð° Ð´Ò¯Ò¯Ñ€Ñ‚ÑÐ¹ · 20 Ð¼Ð¸Ð½",
    r10_title:"ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð° Ð±Ð¾Ð»Ð¾Ð½ ÐºÐ¾Ð½Ñ„Ð¸ ÑƒÐ»Ð°Ð°Ð½ Ð»Ð¾Ð¾Ð»Ð¸Ð¹Ð½ Ð±Ñ€ÑƒÑÐºÐµÑ‚Ñ‚Ð°",
    r10_desc:"Ð•Ñ€Ð¸Ð¹Ð½ Ñ‚Ð°Ð»Ñ…Ð½Ñ‹ Ð·Ò¯ÑÑÐ¼Ð´ ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð° Ñ‚Ð°Ð²Ð¸Ð°Ð´, Ñ‡Ð¸Ð½Ð¶Ò¯Ò¯ ÑƒÐ»Ð°Ð°Ð½ Ð»Ð¾Ð¾Ð»ÑŒ Ð±Ð¾Ð»Ð¾Ð½ ÑˆÐ¸Ð½Ñ Ð±Ð°Ð·Ð¸Ð»Ð¸ÐºÑ‚Ð°Ð¹ Ñ…Ð°Ð¼Ñ‚.",
    r10_time:"20 Ð¼Ð¸Ð½",
    r10_diff:"Ð¥ÑÐ»Ð±Ð°Ñ€",
    r10_serv:"4 Ð¿Ð¾Ñ€Ñ†",
    r11_tag:"ÐÐ½Ñ…Ð½Ñ‹ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ · 75 Ð¼Ð¸Ð½",
    r11_title:"Ð›Ð¸Ð½Ð·Ð½Ð¸Ð¹ Ð±Ð¾Ð»Ð¾Ð½ÑŒÐµÐ· Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ Ð»Ð°Ð·Ð°Ð½ÑŒÑ",
    r11_desc:"Ð¢ÐµÑÑ‚Ð½Ð¸Ð¹ Ð´Ð°Ð²Ñ…Ð°Ñ€Ð³Ð°, Ð±Ð°ÑÐ»Ð°Ð³ Ð»Ð¸Ð½Ð·Ð½Ð¸Ð¹ ÑˆÓ©Ð» Ð±Ð¾Ð»Ð¾Ð½ Cia Vegetal-Ñ‹Ð½ ÐÐ½Ñ…Ð½Ñ‹ Ð±ÑÑÐ»Ð°Ð³Ð¸Ð¹Ð½ Ð³Ñ€Ð¸Ð»Ð´ Ñ…Ð¸Ð¹ÑÑÐ½ Ñ…Ð¾Ð¾Ð».",
    r11_time:"75 Ð¼Ð¸Ð½",
    r11_diff:"Ð”ÑÐ²ÑˆÐ¸Ð»Ñ‚ÑÑ‚",
    r11_serv:"6 Ð¿Ð¾Ñ€Ñ†",
    r12_tag:"ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð° Ð±Ð¾Ð»Ð¾Ð½ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ · 30 Ð¼Ð¸Ð½",
    r12_title:"Ð£Ñ‚ÑÐ°Ð½ Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ Ð±Ð»Ð¸Ð½Ñ†",
    r12_desc:"ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð°Ð°Ñ€ Ñ…Ð¸Ð¹ÑÑÐ½ì–‡ì€ Ð±Ð»Ð¸Ð½Ñ†, Cia Vegetal-Ñ‹Ð½ ÑƒÑ‚ÑÐ°Ð½ Ð±ÑÑÐ»Ð°Ð³ Ð±Ð¾Ð»Ð¾Ð½ Ó©Ñ€Ð³Ó©ÑÑ‚ Ñ…ÑÐ¼Ñ…Ð½Ð¸Ð¹ Ð´Ò¯Ò¯Ñ€Ð³ÑÐ»Ñ‚Ñ‚ÑÐ¹.",
    r12_time:"30 Ð¼Ð¸Ð½",
    r12_diff:"Ð”ÑƒÐ½Ð´",
    r12_serv:"3 Ð¿Ð¾Ñ€Ñ†",
    r13_tag:"ÐŸÐ°Ð¿Ñ€Ð¸ÐºÐ° Ð±ÑÑÐ»Ð°Ð³Ñ‚Ð°Ð¹ · 25 Ð¼Ð¸Ð½",
    r13_title:"Ð’ÐµÐ³Ð°Ð½ ÐŸÐ°Ð¿Ñ€Ð¸ÐºÐ° Ð±ÑÑÐ»Ð°Ð³Ð½Ñ‹ Ñ„Ð¾Ð½Ð´ÑŽ",
    r13_desc:"Cia Vegetal-Ñ‹Ð½ ÐŸÐ°Ð¿Ñ€Ð¸ÐºÐ° Ð±ÑÑÐ»Ð°Ð³Ð¸Ð¹Ð³ Ñ†Ð°Ð³Ð°Ð°Ð½ Ð´Ð°Ñ€Ñ, Ñ‡Ð°ÑÐ½Ñ‹ Ð±Ð¾Ð»Ð¾Ð½ Ð¼ÑƒÑÐºÐ°Ñ‚ ÑÐ°Ð¼Ñ€Ð°Ð°Ñ€ Ñ…Ð°Ð¹Ð»ÑƒÑƒÐ»Ð½Ð°. Ð¢Ð°Ð»Ñ…, Ð½Ð¾Ð³Ð¾Ð¾ ÑÑÐ²ÑÐ» Ð¶Ð¸Ð¼Ñ Ð´Ò¯Ñ€Ð¶ Ð¸Ð´Ñ.",
    r13_time:"25 Ð¼Ð¸Ð½",
    r13_diff:"Ð¥ÑÐ»Ð±Ð°Ñ€",
    r13_serv:"4 Ð¿Ð¾Ñ€Ñ†",
copyright:"© 2026 Companhia Vegetal · Brasília, DF, Ð‘Ñ€Ð°Ð·Ð¸Ð» · Ð‘Ò¯Ñ… ÑÑ€Ñ… Ñ…ÑƒÑƒÐ»Ð¸Ð°Ñ€ Ñ…Ð°Ð¼Ð³Ð°Ð°Ð»Ð°Ð³Ð´ÑÐ°Ð½"
  },
  ko: {
  r1_tag:"Cia Vegetal ì¹˜ì¦ˆ ì¶”ê°€ · 15 ë¶„",r1_title:"ë ˆëª¬ íƒˆë¦¬ì•„í…”ë ˆì™€ ë§Œí…Œê°€ë‚˜",
    r1_desc:"ë…¹ì¸ ë§Œí…Œê°€ë‚˜, ë ˆëª¬ì¦™, ì œìŠ¤íŠ¸, ì¼€ì´í¼ë¡œ ë²„ë¬´ë¦° ì‹ ì„ í•œ íŒŒìŠ¤íƒ€. ì‹¬í”Œí•˜ê³ , ìš°ì•„í•˜ê³ , ë†€ë¼ìš´.",
    r1_time:"20ë¶„",r1_diff:"ì‰¬ì›€",r1_serv:"2ì¸ë¶„",
    r2_tag:"ì˜¤ë¦¬ì§€ë„ ì¹˜ì¦ˆì™€ í•¨ê»˜ · 35ë¶„",r2_title:"ì§„ì§œ ë…¹ëŠ” ì¹˜ì¦ˆ í”¼ìž",
    r2_desc:"ì–‡ì€ í¬ëŸ¬ìŠ¤íŠ¸, í™ˆë©”ì´ë“œ í† ë§ˆí†  ì†ŒìŠ¤, ìŠ¬ë¼ì´ìŠ¤í•œ Cia Vegetal ì˜¤ë¦¬ì§€ë„ ì¹˜ì¦ˆ. ë˜‘ê°™ì´ ë…¹ê³ , ë˜‘ê°™ì´ ê°ë™.",
    r2_time:"35ë¶„",r2_diff:"ë³´í†µ",r2_serv:"4ì¸ë¶„",
    r3_tag:"í›ˆì œ & íŒŒí”„ë¦¬ì¹´ ì¹˜ì¦ˆì™€ í•¨ê»˜ · 15ë¶„",r3_title:"ì‹ë¬¼ì„± ì¹˜ì¦ˆ ë³´ë“œì™€ ìž¼, ê²¬ê³¼ë¥˜",
    r3_desc:"Cia Vegetal ì„¸ ê°€ì§€ ë§›ì„ ë¬´í™”ê³¼, ê¿€, ê²¬ê³¼ë¥˜, ìž¥ì¸ ë¹µê³¼ í•¨ê»˜ ì•„ë¦„ë‹¤ìš´ ë³´ë“œì—.",
    r3_time:"15ë¶„",r3_diff:"ì‰¬ì›€",r3_serv:"6ì¸ë¶„",
    testi_eyebrow:"ê·¸ë“¤ì˜ ë§",testi_title:"ì¦ê±°ëŠ” <em>ë§›ë³¸</em> ì‚¬ëžŒë“¤ì—ê²Œ ìžˆë‹¤",
    t1:'"ë°˜ì‹ ë°˜ì˜í•˜ë©° ìƒ€ìŠµë‹ˆë‹¤. ì²« ë²ˆì§¸ ê·¸ë¦´ í›„ ê°€ì¡± ì „ì²´ì—ê²Œ ì‚¬ì§„ì„ ë³´ëƒˆìŠµë‹ˆë‹¤. ì´ ì¹˜ì¦ˆëŠ” ì •ë§ ë…¹ìŠµë‹ˆë‹¤ — ë¯¿ì§€ ì•Šì„ ìˆ˜ê°€ ì—†ì–´ìš”."',
    t2:'"ë§Œí…Œê°€ë‚˜ê°€ ì•„ì¹¨ ë£¨í‹´ì´ ë˜ì—ˆì–´ìš”. ì´ì œ ë²„í„° í† ìŠ¤íŠ¸ ì—†ì´ëŠ” ì¼ì–´ë‚  ìˆ˜ ì—†ì–´ìš” — ê·¸ê²ƒë„ ì™„ì „ ìœ ì œí’ˆ ì—†ì´. ë‚¨íŽ¸ë„ ì°¨ì´ë¥¼ ì•Œì•„ì±„ì§€ ëª»í–ˆì–´ìš”."',
    t3:'"1ë…„ ì´ìƒ ë ˆìŠ¤í† ëž‘ í”¼ìžì— ì‚¬ìš©í•´ì™”ìŠµë‹ˆë‹¤. ê³ ê°ë“¤ì´ ë” ë‹¬ë¼ê³  í•©ë‹ˆë‹¤. ì•„ë¬´ë„ ë¹„ê±´ì´ë¼ê³  ìƒê°í•˜ì§€ ì•Šì•„ìš”. ì•Œë ¤ì£¼ë©´ ë†€ë¼ë©° ë‹¤ì‹œ ì£¼ë¬¸í•©ë‹ˆë‹¤."',
    chef_role:"ì…°í”„ · Casa Baco, ë¸Œë¼ì§ˆë¦¬ì•„",
    peca_agora:"ì§€ê¸ˆ ì£¼ë¬¸í•˜ê¸°",sua_mesa:"ë‹¹ì‹ ì˜ ì‹íƒì€ <em>ìµœê³ </em>ë¥¼ ë°›ì„ ìžê²©ì´ ìžˆìŠµë‹ˆë‹¤",
    cta_desc:"ë‹¹ì‚¬ ì œí’ˆì„ ê·€ì‚¬ ì‹œìž¥ì— ìœ í†µí•˜ëŠ” ë° ê´€ì‹¬ì´ ìžˆìœ¼ì‹ ê°€ìš”? ë¬¸ì˜í•´ ì£¼ì„¸ìš”!",
    pedir_wa:"WhatsApp",b2b:"B2B ê³µê¸‰",ver_lojas:"íŒŒíŠ¸ë„ˆ ë§¤ìž¥ ì°¾ê¸°",
    onde_note:"",
    footer_desc:"100% ì‹ë¬¼ì„± ì‹í’ˆ",
    footer_produtos:"ì œí’ˆ",queijo_original:"ì˜¤ë¦¬ì§€ë„ ì¹˜ì¦ˆ",queijo_defumado:"í›ˆì œ ì¹˜ì¦ˆ",queijo_paprica:"íŒŒí”„ë¦¬ì¹´ ì¹˜ì¦ˆ",pao_link:"íŒŒì˜¤ ë° ì¼€ì´ì£¼",
    footer_empresa:"íšŒì‚¬",certificacoes:"ì¸ì¦",
    footer_contato:"ì—°ë½ì²˜",b2b_export:"B2B / ìˆ˜ì¶œ",
    onde_provar:"ì–´ë””ì„œ ë§›ë³¼ ìˆ˜ ìžˆë‚˜ìš”",
        pao_type:"íŒŒì˜¤ ë° ì¼€ì´ì£¼",
    pao_card_name:"íŒŒì˜¤ ë° ì¼€ì´ì£¼",
    pao_card_desc:"ë¸Œë¼ì§ˆì˜ ì¸ê¸° ì¹˜ì¦ˆë¹µ, ì´ì œ ì‹ë¬¼ì„±ìœ¼ë¡œ. ë°œíš¨ ìºìŠˆë„›, ì¹´ì‚¬ë°” ì „ë¶„, í•´ë°”ë¼ê¸°ìœ ë¡œ ë§Œë“¤ì—ˆìŠµë‹ˆë‹¤. ìœ ë‹¹ ì—†ìŒ, ê¸€ë£¨í… ì—†ìŒ.",
    b2b_supply:"B2B ê³µê¸‰",
        modal_mantegana:"ë§Œí…Œê°€ë‚˜ëŠ” í˜ëª…ì„ ê°€ì ¸ì™”ìŠµë‹ˆë‹¤: ì¸ê³µ í–¥ë£Œ ì—†ì´ ì‹ë¬¼ì„± ìŠ¤í”„ë ˆë“œê°€ ì–´ë–»ê²Œ ì´ë ‡ê²Œ í›Œë¥­í•œ ë§›ì„ ë‚¼ ìˆ˜ ìžˆì„ê¹Œìš”? ê·¸ ì„±ëŠ¥ ë•ë¶„ì— ë‹¨ìˆœí•œ ì‹ë¬¼ì„± ì œí’ˆì„ ë„˜ì–´ ì‹œìž¥ ìµœê³ ì˜ ë²„í„° ì¤‘ í•˜ë‚˜ë¡œ ì¸ì •ë°›ê³  ìžˆìŠµë‹ˆë‹¤.",
        modal_original:"ì €í¬ ì˜¤ë¦¬ì§€ë„ ë§› ì¹˜ì¦ˆëŠ” ì „í†µ ì¹˜ì¦ˆì˜ ì¼ìƒì ì¸ ëŒ€ì•ˆìœ¼ë¡œ ë§Œë“¤ì–´ì¡ŒìŠµë‹ˆë‹¤. ìž˜ ë…¹ì•„ ë§›ìžˆëŠ” ë…¹ëŠ” ì¹˜ì¦ˆê°€ í•„ìš”í•œ ëª¨ë“  ë ˆì‹œí”¼ì— ì‚¬ìš©í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.",
        modal_smoked:"ì´ ì¹˜ì¦ˆì˜ ë§›ì€ ìž¬ì¡°ë¦¼ ëª©ìž¬ë¥¼ ì‚¬ìš©í•œ ì²œì—° í›ˆì œ ê³¼ì •ê³¼ ìºëŸ¬ì›¨ì´ ì”¨ì•—ì˜ ì‚´ì§ í’ë¯¸ì—ì„œ ë‚˜ì˜µë‹ˆë‹¤. ë„ˆë¬´ ë§›ìžˆì–´ì„œ ë¹„ê±´ì´ ì•„ë‹Œ ì‚¬ëžŒë“¤ë„ ì¢‹ì•„í•©ë‹ˆë‹¤.",
        modal_paprika:"ì´ë¦„ì´ ëª¨ë“  ê²ƒì„ ë§í•´ì¤ë‹ˆë‹¤: íŒŒí”„ë¦¬ì¹´ ì¹˜ì¦ˆëŠ” ì´ ì²œì—° ìž¬ë£Œì—ì„œ ë¶€ë“œëŸ¬ìš´ ë§¤ìš´ ë§›ì„ ì–»ìŠµë‹ˆë‹¤. ë…¹ì—¬ì„œ ë””í•‘ í¬ë¦¼ìœ¼ë¡œ í† ìŠ¤íŠ¸ì™€ í•¨ê»˜ ë“œì‹œë©´ ìµœê³ ìž…ë‹ˆë‹¤.",
        r14_tag:"íŒŒì˜¤ ë° ì¼€ì´ì£¼ í¬í•¨ · 15ë¶„",
    r14_title:"ì™€í”Œ ì² íŒ ìœ„ì˜ íŒŒì˜¤ ë° ì¼€ì´ì£¼",
    r14_desc:"ì”¨ì•„ ë² ì œíƒˆ ë¹„ê±´ íŒŒì˜¤ ë° ì¼€ì´ì£¼ë¥¼ ì™€í”Œ ì² íŒì— êµ¬ì›Œ ì´ˆì½œë¦¿ ì†ŒìŠ¤ì™€ í•¨ê»˜ ì œê³µí•©ë‹ˆë‹¤.",
    r14_time:"15ë¶„",
    r14_diff:"ì‰¬ì›€",
    r14_serv:"4ê°œ",
    tech_title:"ìš°ë¦¬ì˜ ê¸°ìˆ ",
    tech_intro:"Cia Vegetalì€ 100% ë¸Œë¼ì§ˆ ì›ë£Œë¥¼ ì „í†µ ìœ ì œí’ˆì²˜ëŸ¼ ì§„ì§œë¡œ ë…¹ê³ , íŽ´ì§€ê³ , ë§›ë‚˜ëŠ” ì‹ë¬¼ì„± ëŒ€ì•ˆìœ¼ë¡œ ë³€í™˜í•˜ëŠ” ë…ìžì ì¸ ì •ë°€ ë°œíš¨ ê³µì •ì„ ê°œë°œí–ˆìŠµë‹ˆë‹¤.",
    tech_s1_title:"ì •ë°€ ë°œíš¨",
    tech_s1_body:"ì €í¬ ê³µì •ì€ ì„ íƒëœ ë¯¸ìƒë¬¼ ê· ì£¼ë¥¼ ì‚¬ìš©í•˜ì—¬ ë¸Œë¼ì§ˆ ìºìŠˆë¥¼ ë°œíš¨ì‹œí‚µë‹ˆë‹¤. ì´ëŠ” ê°€ì—´ ì‹œ ì „í†µ ì¹˜ì¦ˆì™€ ë²„í„°ì˜ ë™ìž‘ì„ ì •í™•í•˜ê²Œ ë³µì œí•˜ëŠ” ë‹¨ë°±ì§ˆê³¼ ì§€ì§ˆ êµ¬ì¡°ë¥¼ ë§Œë“¤ì–´ëƒ…ë‹ˆë‹¤.",
    tech_s2_title:"100% ë¸Œë¼ì§ˆ ì›ë£Œ",
    tech_s2_body:"ëª¨ë“  ì›ë£ŒëŠ” ë¸Œë¼ì§ˆ ë•…ì—ì„œ ë‚˜ì˜µë‹ˆë‹¤: ë¶ë™ë¶€ì˜ ìºìŠˆë„›, ì¹´ì‚¬ë°” ì „ë¶„, RSPO í•´ë°”ë¼ê¸°ìœ . ìˆ˜ìž… ì—†ìŒ, íƒ€í˜‘ ì—†ìŒ.",
    tech_s3_title:"ì¸ê³µë¬¼ ì œë¡œ",
    tech_s3_body:"ì¸ê³µ í–¥ë£Œ ì—†ìŒ, íŠ¸ëžœìŠ¤ ì§€ë°© ì—†ìŒ, ë°©ë¶€ì œ ì—†ìŒ, GMO ì—†ìŒ. ì •ë°€ ë°œíš¨ê°€ ìœ ì¼í•œ \"ë¹„ê²°\"ìž…ë‹ˆë‹¤ — ê·¸ë¦¬ê³  ê·¸ê²ƒë„ ë¹„ê²°ì´ ì•„ë‹™ë‹ˆë‹¤: ë§›ì„ ìœ„í•œ ìˆœìˆ˜í•œ ê³¼í•™ìž…ë‹ˆë‹¤.",
    tech_s4_title:"ì§„ì§œ ë…¹ìŒ",
    tech_s4_body:"ë°œíš¨ë¡œ ë§Œë“¤ì–´ì§„ ë¶„ìž êµ¬ì¡° ë•ë¶„ì— ì €í¬ ì¹˜ì¦ˆëŠ” ì „í†µ ì¹˜ì¦ˆì™€ ë˜‘ê°™ì´ ë…¹ê³ , ê·¸ë¼íƒ±ì´ ë˜ê³ , ëŠ˜ì–´ë‚©ë‹ˆë‹¤. ê³ ê°ë“¤ì´ ë¸”ë¼ì¸ë“œ í…ŒìŠ¤íŠ¸ë¥¼ í•´ë„ êµ¬ë¶„í•˜ì§€ ëª»í•©ë‹ˆë‹¤.",
    r4_tag:"ì˜¤ë¦¬ì§€ë„ ì¹˜ì¦ˆ ì‚¬ìš© · 15ë¶„",
    r4_title:"ë¹„ê±´ í¬ë¡œí¬ ë¬´ìŠˆ",
    r4_desc:"Cia Vegetal ì˜¤ë¦¬ì§€ë„ ì¹˜ì¦ˆê°€ ë…¹ì•„ë“  êµ¬ìš´ ìƒŒë“œìœ„ì¹˜. ë¹ ë¥´ê³  ë§›ìžˆìŠµë‹ˆë‹¤.",
    r4_time:"15ë¶„",
    r4_diff:"ì‰¬ì›€",
    r4_serv:"2ì¸ë¶„",
    r5_tag:"íŒŒì˜¤ ë° ì¼€ì´ì£¼ ì‚¬ìš© · 25ë¶„",
    r5_title:"í—ˆë¸Œë²„í„° ì†ìž¬ë£Œ íŒŒì˜¤ ë° ì¼€ì´ì£¼",
    r5_desc:"ë¹µì„ ì—´ì–´ ë§Œí…Œê°€ë‚˜, ë¡œì¦ˆë§ˆë¦¬, ë§ˆëŠ˜ì„ ì±„ìš°ê³  ì˜¤ë¸ì— êµ¬ì›Œ ëœ¨ê²ê²Œ ì œê³µí•©ë‹ˆë‹¤.",
    r5_time:"25ë¶„",
    r5_diff:"ì‰¬ì›€",
    r5_serv:"4ì¸ë¶„",
    r6_tag:"í›ˆì œ ì¹˜ì¦ˆ ì‚¬ìš© · 40ë¶„",
    r6_title:"í›ˆì œ ì¹˜ì¦ˆ í¬ë¦¬ë¯¸ ë¦¬ì¡°ë˜",
    r6_desc:"Cia Vegetal í›ˆì œ ì¹˜ì¦ˆ í”Œë ˆì´í¬ë¡œ ë§ˆë¬´ë¦¬í•œ í¬ë¦¬ë¯¸í•œ ì•„ë¥´ë³´ë¦¬ì˜¤ ìŒ€ ìš”ë¦¬.",
    r6_time:"40ë¶„",
    r6_diff:"ë³´í†µ",
    r6_serv:"4ì¸ë¶„",
    r7_tag:"íŒŒí”„ë¦¬ì¹´ ì¹˜ì¦ˆ ì‚¬ìš© · 20ë¶„",
    r7_title:"íŒŒí”„ë¦¬ì¹´ ì¹˜ì¦ˆ ì†ŒìŠ¤ ë‚˜ì´ˆ",
    r7_desc:"Cia Vegetal íŒŒí”„ë¦¬ì¹´ ì¹˜ì¦ˆë¥¼ ë…¹ì—¬ ë°”ì‚­í•œ ë‚˜ì´ˆ ìœ„ì— ì˜¬ë¦¬ê³  í• ë¼íŽ˜ë‡¨ì™€ ê³¼ì¹´ëª°ë¦¬ë¥¼ ê³ë“¤ìž…ë‹ˆë‹¤.",
    r7_time:"20ë¶„",
    r7_diff:"ì‰¬ì›€",
    r7_serv:"4ì¸ë¶„",
    r8_tag:"ë§Œí…Œê°€ë‚˜ ì‚¬ìš© · 50ë¶„",
    r8_title:"ë§Œí…Œê°€ë‚˜ í”„ë¡œìŠ¤íŒ… ë‹¹ê·¼ ì¼€ì´í¬",
    r8_desc:"ë§Œí…Œê°€ë‚˜ì™€ ì¹´ì¹´ì˜¤ë¡œ ë§Œë“  í¬ë¦¬ë¯¸í•œ í”„ë¡œìŠ¤íŒ…ì„ ì–¹ì€ ì´‰ì´‰í•œ ë¹„ê±´ ë‹¹ê·¼ ì¼€ì´í¬. ì™„ë²½í•œ ë””ì €íŠ¸.",
    r8_time:"50ë¶„",
    r8_diff:"ë³´í†µ",
    r8_serv:"8ì¡°ê°",
    r9_tag:"ì˜¤ë¦¬ì§€ë„ ì¹˜ì¦ˆ ì‚¬ìš© · 55ë¶„",
    r9_title:"ì˜¤ë¦¬ì§€ë„ ì¹˜ì¦ˆ ì‹œê¸ˆì¹˜ í‚¤ì‹œ",
    r9_desc:"ë°”ì‚­í•œ íŒŒì´ í¬ëŸ¬ìŠ¤íŠ¸ì— í¬ë¦¬ë¯¸í•œ ì‹œê¸ˆì¹˜ í•„ë§ê³¼ Cia Vegetal ì˜¤ë¦¬ì§€ë„ ì¹˜ì¦ˆê°€ ê°€ë“.",
    r9_time:"55ë¶„",
    r9_diff:"ë³´í†µ",
    r9_serv:"6ì¸ë¶„",
    r10_tag:"ë§Œí…Œê°€ë‚˜ ì‚¬ìš© · 20ë¶„",
    r10_title:"ë§Œí…Œê°€ë‚˜ì™€ ì½©í”¼ í† ë§ˆí†  ë¸Œë£¨ìŠ¤ì¼€íƒ€",
    r10_desc:"ëŸ¬ìŠ¤í‹± ë¹µ ìŠ¬ë¼ì´ìŠ¤ì— ë§Œí…Œê°€ë‚˜ë¥¼ ë°”ë¥´ê³  ì½©í”¼ ì²´ë¦¬ í† ë§ˆí† ì™€ ì‹ ì„ í•œ ë°”ì§ˆì„ ì˜¬ë¦½ë‹ˆë‹¤.",
    r10_time:"20ë¶„",
    r10_diff:"ì‰¬ì›€",
    r10_serv:"4ì¸ë¶„",
    r11_tag:"ì˜¤ë¦¬ì§€ë„ ì¹˜ì¦ˆ ì‚¬ìš© · 75ë¶„",
    r11_title:"ë Œí‹¸ ë³¼ë¡œë„¤ì œ ì¹˜ì¦ˆ ë¼ìžëƒ",
    r11_desc:"íŒŒìŠ¤íƒ€ ë ˆì´ì–´, ì§„í•œ ë Œí‹¸ ì†ŒìŠ¤, Cia Vegetal ì˜¤ë¦¬ì§€ë„ ì¹˜ì¦ˆ ê·¸ë¼íƒ•.",
    r11_time:"75ë¶„",
    r11_diff:"ê³ ê¸‰",
    r11_serv:"6ì¸ë¶„",
    r12_tag:"ë§Œí…Œê°€ë‚˜ì™€ ì¹˜ì¦ˆ ì‚¬ìš© · 30ë¶„",
    r12_title:"í›ˆì œ ì¹˜ì¦ˆ í¬ë ˆíŽ˜ ë¡¤",
    r12_desc:"ë§Œí…Œê°€ë‚˜ë¡œ ë§Œë“  ì–‡ì€ í¬ë ˆíŽ˜ì— Cia Vegetal í›ˆì œ ì¹˜ì¦ˆì™€ ì‹œê¸ˆì¹˜ë¥¼ ì±„ì›ë‹ˆë‹¤.",
    r12_time:"30ë¶„",
    r12_diff:"ë³´í†µ",
    r12_serv:"3ì¸ë¶„",
    r13_tag:"íŒŒí”„ë¦¬ì¹´ ì¹˜ì¦ˆ ì‚¬ìš© · 25ë¶„",
    r13_title:"ë¹„ê±´ íŒŒí”„ë¦¬ì¹´ ì¹˜ì¦ˆ íë’¤",
    r13_desc:"Cia Vegetal íŒŒí”„ë¦¬ì¹´ ì¹˜ì¦ˆë¥¼ í™”ì´íŠ¸ ì™€ì¸, ë§ˆëŠ˜, ë„›ë©•ê³¼ í•¨ê»˜ ë…¹ìž…ë‹ˆë‹¤. ë¹µ, ì±„ì†Œ, ê³¼ì¼ì„ ì°ì–´ ë“œì„¸ìš”.",
    r13_time:"25ë¶„",
    r13_diff:"ì‰¬ì›€",
    r13_serv:"4ì¸ë¶„",
copyright:"© 2026 Companhia Vegetal · ë¸Œë¼ì§ˆë¦¬ì•„, DF, ë¸Œë¼ì§ˆ · ëª¨ë“  ê¶Œë¦¬ ë³´ìœ "
  },
  ar: {
  r1_tag:"Ù…Ø¹ Ø¬Ø¨Ù† Cia Vegetal · 15 Ø¯Ù‚ÙŠÙ‚Ø©",r1_title:"ØªØ§Ù„ÙŠØ§ØªÙŠÙ„ÙŠ Ø¨Ø§Ù„Ù„ÙŠÙ…ÙˆÙ† ÙˆØ§Ù„Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§",
    r1_desc:"Ù…Ø¹ÙƒØ±ÙˆÙ†Ø© Ø·Ø§Ø²Ø¬Ø© Ù…Ø¹ Ø§Ù„Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ Ø§Ù„Ù…Ø°Ø§Ø¨Ø© ÙˆØ¹ØµÙŠØ± Ø§Ù„Ù„ÙŠÙ…ÙˆÙ† ÙˆØ§Ù„Ù‚Ø¨Ø§Ø±. Ø¨Ø³ÙŠØ· ÙˆØ£Ù†ÙŠÙ‚ ÙˆÙ…Ø¯Ù‡Ø´.",
    r1_time:"20 Ø¯Ù‚ÙŠÙ‚Ø©",r1_diff:"Ø³Ù‡Ù„",r1_serv:"Ø­ØµØªØ§Ù†",
    r2_tag:"Ù…Ø¹ Ø§Ù„Ø¬Ø¨Ù† Ø§Ù„Ø£ØµÙ„ÙŠ · 35 Ø¯Ù‚ÙŠÙ‚Ø©",r2_title:"Ø¨ÙŠØªØ²Ø§ Ø§Ù„Ø¬Ø¨Ù† Ø§Ù„Ø°ÙŠ ÙŠØ°ÙˆØ¨ ÙØ¹Ù„Ø§Ù‹",
    r2_desc:"Ø¹Ø¬ÙŠÙ†Ø© Ø±ÙÙŠØ¹Ø©ØŒ ØµÙ„ØµØ© Ø·Ù…Ø§Ø·Ù… Ù…Ù†Ø²Ù„ÙŠØ©ØŒ ÙˆØ´Ø±Ø§Ø¦Ø­ Ø¬Ø¨Ù† Cia Vegetal Ø§Ù„Ø£ØµÙ„ÙŠ. ÙŠØ°ÙˆØ¨ Ø¨Ù†ÙØ³ Ø§Ù„Ø·Ø±ÙŠÙ‚Ø©ØŒ ÙŠÙØ¨Ù‡Ø± Ø¨Ù†ÙØ³ Ø§Ù„Ø·Ø±ÙŠÙ‚Ø©.",
    r2_time:"35 Ø¯Ù‚ÙŠÙ‚Ø©",r2_diff:"Ù…ØªÙˆØ³Ø·",r2_serv:"4 Ø­ØµØµ",
    r3_tag:"Ù…Ø¹ Ø§Ù„Ø¬Ø¨Ù† Ø§Ù„Ù…Ø¯Ø®Ù† ÙˆØ§Ù„Ø¨Ø§Ø¨Ø±ÙŠÙƒØ§ · 15 Ø¯Ù‚ÙŠÙ‚Ø©",r3_title:"Ø·Ø¨Ù‚ Ø¬Ø¨Ù† Ù†Ø¨Ø§ØªÙŠ Ù…Ø¹ Ù…Ø±Ø¨Ù‰ ÙˆÙ…ÙƒØ³Ø±Ø§Øª",
    r3_desc:"Ù†ÙƒÙ‡Ø§Øª Cia Vegetal Ø§Ù„Ø«Ù„Ø§Ø« Ù…Ø¹ Ø§Ù„ØªÙŠÙ† ÙˆØ§Ù„Ø¹Ø³Ù„ ÙˆØ§Ù„Ù…ÙƒØ³Ø±Ø§Øª ÙˆØ®Ø¨Ø² Ø§Ù„Ø­Ø±ÙÙŠÙŠÙ† ÙÙŠ Ø·Ø¨Ù‚ Ø¬Ù…ÙŠÙ„.",
    r3_time:"15 Ø¯Ù‚ÙŠÙ‚Ø©",r3_diff:"Ø³Ù‡Ù„",r3_serv:"6 Ø­ØµØµ",
    testi_eyebrow:"Ù…Ø§ ÙŠÙ‚ÙˆÙ„ÙˆÙ†Ù‡",testi_title:"Ø§Ù„Ø¯Ù„ÙŠÙ„ ÙÙŠ Ù…Ù† <em>Ø°Ø§Ù‚</em>",
    t1:'"Ø§Ø´ØªØ±ÙŠØªÙ‡ ÙˆØ£Ù†Ø§ Ù…ØªØ±Ø¯Ø¯. Ø¨Ø¹Ø¯ Ø£ÙˆÙ„ ØªØ­Ù…ÙŠØµØŒ Ø£Ø±Ø³Ù„Øª ØµÙˆØ±Ø© Ù„Ù„Ø¹Ø§Ø¦Ù„Ø© ÙƒÙ„Ù‡Ø§. Ù‡Ø°Ø§ Ø§Ù„Ø¬Ø¨Ù† ÙŠØ°ÙˆØ¨ ÙØ¹Ù„Ø§Ù‹ — Ù„Ø§ Ø£Ø³ØªØ·ÙŠØ¹ ØªØµØ¯ÙŠÙ‚ Ø£Ù†Ù‡ Ù†Ø¨Ø§ØªÙŠ."',
    t2:'"Ø§Ù„Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ Ø£ØµØ¨Ø­Øª Ø¬Ø²Ø¡Ø§Ù‹ Ù…Ù† Ø±ÙˆØªÙŠÙ† ØµØ¨Ø§Ø­ÙŠ. Ù„Ù… Ø£Ø¹Ø¯ Ø£Ø³ØªØ·ÙŠØ¹ Ø§Ù„Ø§Ø³ØªÙŠÙ‚Ø§Ø¸ Ø¨Ø¯ÙˆÙ† ØªÙˆØ³Øª Ø§Ù„Ø²Ø¨Ø¯Ø© — ÙˆÙƒÙ„Ù‡ Ø¨Ø¯ÙˆÙ† Ø£Ù„Ø¨Ø§Ù†. Ø²ÙˆØ¬ÙŠ Ù„Ù… ÙŠÙ„Ø§Ø­Ø¸ Ø§Ù„ÙØ±Ù‚."',
    t3:'"Ù†Ø³ØªØ®Ø¯Ù…Ù‡ ÙÙŠ Ø§Ù„Ø¨ÙŠØªØ²Ø§ ÙÙŠ Ù…Ø·Ø¹Ù…Ù†Ø§ Ù…Ù†Ø° Ø£ÙƒØ«Ø± Ù…Ù† Ø¹Ø§Ù…. Ø§Ù„Ø²Ø¨Ø§Ø¦Ù† ÙŠØ·Ù„Ø¨ÙˆÙ† Ø§Ù„Ù…Ø²ÙŠØ¯. Ù„Ø§ Ø£Ø­Ø¯ ÙŠØ¸Ù†Ù‡ Ù†Ø¨Ø§ØªÙŠØ§Ù‹. Ø­ÙŠÙ† Ø£Ø®Ø¨Ø±Ù‡Ù… ÙŠÙ†Ø¯Ù‡Ø´ÙˆÙ† ÙˆÙŠØ·Ù„Ø¨ÙˆÙ† Ø£ÙƒØ«Ø±."',
    chef_role:"Ø´ÙŠÙ · Casa BacoØŒ Ø¨Ø±Ø§Ø²ÙŠÙ„ÙŠØ§",
    peca_agora:"Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†",sua_mesa:"Ù…Ø§Ø¦Ø¯ØªÙƒ <em>ØªØ³ØªØ­Ù‚</em> Ø§Ù„Ø£ÙØ¶Ù„",
    cta_desc:"Ù‡Ù„ Ø£Ù†Øª Ù…Ù‡ØªÙ… Ø¨ØªÙˆØ²ÙŠØ¹ Ù…Ù†ØªØ¬Ø§ØªÙ†Ø§ ÙÙŠ Ø³ÙˆÙ‚ÙƒØŸ ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§!",
    pedir_wa:"WhatsApp",b2b:"ØªÙˆØ±ÙŠØ¯ B2B",ver_lojas:"Ø§Ø¨Ø­Ø« Ø¹Ù† Ù…ØªØ§Ø¬Ø± Ø§Ù„Ø´Ø±ÙƒØ§Ø¡",
    onde_note:"",
    footer_desc:"Ø£ØºØ°ÙŠØ© Ù†Ø¨Ø§ØªÙŠØ© 100%",
    footer_produtos:"Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª",queijo_original:"Ø§Ù„Ø¬Ø¨Ù† Ø§Ù„Ø£ØµÙ„ÙŠ",queijo_defumado:"Ø§Ù„Ø¬Ø¨Ù† Ø§Ù„Ù…Ø¯Ø®Ù†",queijo_paprica:"Ø¬Ø¨Ù† Ø§Ù„Ø¨Ø§Ø¨Ø±ÙŠÙƒØ§",pao_link:"Ø¨Ø§Ùˆ Ø¯Ø¬ÙŠ ÙƒØ§ÙŠØ¬Ùˆ",
    footer_empresa:"Ø§Ù„Ø´Ø±ÙƒØ©",certificacoes:"Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª",
    footer_contato:"ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§",b2b_export:"B2B / ØªØµØ¯ÙŠØ±",
    onde_provar:"Ø£ÙŠÙ† ØªØªØ°ÙˆÙ‚",
        pao_type:"Ø¨Ø§Ùˆ Ø¯Ø¬ÙŠ ÙƒØ§ÙŠØ¬Ùˆ",
    pao_card_name:"Ø¨Ø§Ùˆ Ø¯Ø¬ÙŠ ÙƒØ§ÙŠØ¬Ùˆ",
    pao_card_desc:"Ù†Ø³Ø®Ø© Ù†Ø¨Ø§ØªÙŠØ© Ù…Ù† Ø®Ø¨Ø² Ø§Ù„Ø¬Ø¨Ù† Ø§Ù„Ø¨Ø±Ø§Ø²ÙŠÙ„ÙŠ Ø§Ù„Ø´Ù‡ÙŠØ±. Ù…ØµÙ†ÙˆØ¹ Ù…Ù† Ø§Ù„ÙƒØ§Ø¬Ùˆ Ø§Ù„Ù…Ø®Ù…Ø± ÙˆÙ†Ø´Ø§ Ø§Ù„ÙƒØ³Ø§ÙØ§ ÙˆØ²ÙŠØª Ø¹Ø¨Ø§Ø¯ Ø§Ù„Ø´Ù…Ø³. Ø®Ø§Ù„Ù Ù…Ù† Ø§Ù„Ù„Ø§ÙƒØªÙˆØ² ÙˆØ§Ù„ØºÙ„ÙˆØªÙŠÙ†.",
    b2b_supply:"ØªÙˆØ±ÙŠØ¯ B2B",
        modal_mantegana:"Ø¬Ø§Ø¡Øª Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ Ù„ØªÙØ­Ø¯Ø« Ø«ÙˆØ±Ø©: ÙƒÙŠÙ ÙŠÙ…ÙƒÙ† Ù„Ù…Ù†ØªØ¬ Ù†Ø¨Ø§ØªÙŠ Ø£Ù† ÙŠÙƒÙˆÙ† Ø¨Ù‡Ø°Ø§ Ø§Ù„Ø·Ø¹Ù… Ø§Ù„Ø±Ø§Ø¦Ø¹ Ø¯ÙˆÙ† Ø§Ù„Ø­Ø§Ø¬Ø© Ø¥Ù„Ù‰ Ø£ÙŠ Ù†ÙƒÙ‡Ø§Øª Ø§ØµØ·Ù†Ø§Ø¹ÙŠØ©ØŸ Ø£Ø¯Ø§Ø¤Ù‡Ø§ Ø§Ù„Ø§Ø³ØªØ«Ù†Ø§Ø¦ÙŠ Ø¬Ø¹Ù„Ù‡Ø§ ØªØªØ¬Ø§ÙˆØ² ÙƒÙˆÙ†Ù‡Ø§ Ù…Ø¬Ø±Ø¯ Ù…Ù†ØªØ¬ Ù†Ø¨Ø§ØªÙŠØŒ Ù„ØªÙØ¹Ø¯Ù‘ Ù…Ù† Ø£ÙØ¶Ù„ Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„Ø²Ø¨Ø¯Ø© ÙÙŠ Ø§Ù„Ø³ÙˆÙ‚.",
        modal_original:"ØªÙ… Ø¥Ù†Ø´Ø§Ø¡ Ø¬Ø¨Ù†Ù†Ø§ Ø¨Ø§Ù„Ù†ÙƒÙ‡Ø© Ø§Ù„Ø£ØµÙ„ÙŠØ© ÙƒØ¨Ø¯ÙŠÙ„ ÙŠÙˆÙ…ÙŠ Ù„Ù„Ø¬Ø¨Ù† Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ. Ø³Ù‡Ù„ Ø§Ù„Ø°ÙˆØ¨Ø§Ù† ÙˆÙŠÙ…ÙƒÙ† Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡ ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„ÙˆØµÙØ§Øª Ø§Ù„ØªÙŠ ØªØªØ·Ù„Ø¨ Ø¬Ø¨Ù†Ù‹Ø§ Ù„Ø°ÙŠØ°Ù‹Ø§ ÙˆØ·Ø±ÙŠÙ‹Ø§.",
        modal_smoked:"ÙŠÙƒØªØ³Ø¨ Ù‡Ø°Ø§ Ø§Ù„Ø¬Ø¨Ù† Ù†ÙƒÙ‡ØªÙ‡ Ù…Ù† Ø¹Ù…Ù„ÙŠØ© Ø§Ù„ØªØ¯Ø®ÙŠÙ† Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø®Ø´Ø¨ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ´Ø¬ÙŠØ±ØŒ Ø¥Ø¶Ø§ÙØ© Ø¥Ù„Ù‰ Ù„Ù…Ø³Ø© Ù…Ù† Ø¨Ø°ÙˆØ± Ø§Ù„ÙƒØ±Ø§ÙˆÙŠØ§. Ø¬Ø§Ø¡Øª Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø±Ø§Ø¦Ø¹Ø© Ù„Ø¯Ø±Ø¬Ø© Ø£Ù† Ø­ØªÙ‰ ØºÙŠØ± Ø§Ù„Ù†Ø¨Ø§ØªÙŠÙŠÙ† ÙŠØ¹Ø´Ù‚ÙˆÙ†Ù‡.",
        modal_paprika:"Ø§Ù„Ø§Ø³Ù… ÙŠÙ‚ÙˆÙ„ ÙƒÙ„ Ø´ÙŠØ¡: ÙŠØ­ØµÙ„ Ø¬Ø¨Ù† Ø§Ù„ÙÙ„ÙÙ„ Ø§Ù„Ø­Ù„Ùˆ Ø¹Ù„Ù‰ Ù†ÙƒÙ‡Ø© Ø­Ø§Ø±Ø© Ø®ÙÙŠÙØ© Ù…Ù† Ù‡Ø°Ù‡ Ø§Ù„Ù…ÙƒÙˆÙ†Ø© Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ©. ÙŠÙÙ‚Ø¯ÙŽÙ‘Ù… Ù…Ø°Ø§Ø¨Ù‹Ø§ ÙƒØµÙ„ØµØ© ØªØºÙ…ÙŠØ³ Ù…Ø¹ Ø§Ù„Ø®Ø¨Ø² Ø§Ù„Ù…Ø­Ù…ØµØŒ ÙˆØ·Ø¹Ù…Ù‡ Ø±Ø§Ø¦Ø¹.",
        r14_tag:"Ù…Ø¹ Ø¨Ø§Ùˆ Ø¯Ø¬ÙŠ ÙƒØ§ÙŠØ¬Ùˆ · 15 Ø¯Ù‚ÙŠÙ‚Ø©",
    r14_title:"Ø¨Ø§Ùˆ Ø¯Ø¬ÙŠ ÙƒØ§ÙŠØ¬Ùˆ Ø¹Ù„Ù‰ Ù…ÙƒÙˆØ§Ø© Ø§Ù„ÙˆØ§ÙÙ„",
    r14_desc:"Ø®Ø¨Ø² Ø¨Ø§Ùˆ Ø¯Ø¬ÙŠ ÙƒØ§ÙŠØ¬Ùˆ Ø§Ù„Ù†Ø¨Ø§ØªÙŠ Ù…Ù† Cia Vegetal Ù…ÙØ­Ø¶ÙŽÙ‘Ø± Ø¹Ù„Ù‰ Ù…ÙƒÙˆØ§Ø© Ø§Ù„ÙˆØ§ÙÙ„ØŒ ÙŠÙÙ‚Ø¯ÙŽÙ‘Ù… Ù…Ø¹ ØµÙ„ØµØ© Ø§Ù„Ø´ÙˆÙƒÙˆÙ„Ø§ØªØ©.",
    r14_time:"15 Ø¯Ù‚ÙŠÙ‚Ø©",
    r14_diff:"Ø³Ù‡Ù„",
    r14_serv:"4 Ø®Ø¨Ø²Ø§Øª",
    tech_title:"ØªÙ‚Ù†ÙŠØªÙ†Ø§",
    tech_intro:"Ø·ÙˆÙ‘Ø±Øª Ø´Ø±ÙƒØ© Cia Vegetal Ø¹Ù…Ù„ÙŠØ© ØªØ®Ù…ÙŠØ± Ø¯Ù‚ÙŠÙ‚ Ø®Ø§ØµØ© ØªØ­ÙˆÙ‘Ù„ Ø§Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ø¨Ø±Ø§Ø²ÙŠÙ„ÙŠØ© 100% Ø¥Ù„Ù‰ Ø¨Ø¯Ø§Ø¦Ù„ Ù†Ø¨Ø§ØªÙŠØ© ØªØ°ÙˆØ¨ ÙˆØªÙ†ØªØ´Ø± ÙˆØªÙÙ‚Ø¯Ù‘Ù… Ù†ÙØ³ Ø§Ù„Ù…Ø°Ø§Ù‚ ÙƒÙ…Ù†ØªØ¬Ø§Øª Ø§Ù„Ø£Ù„Ø¨Ø§Ù† Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠØ©.",
    tech_s1_title:"Ø§Ù„ØªØ®Ù…ÙŠØ± Ø§Ù„Ø¯Ù‚ÙŠÙ‚",
    tech_s1_body:"ØªØ³ØªØ®Ø¯Ù… Ø¹Ù…Ù„ÙŠØªÙ†Ø§ Ø³Ù„Ø§Ù„Ø§Øª Ù…Ø®ØªØ§Ø±Ø© Ù…Ù† Ø§Ù„ÙƒØ§Ø¦Ù†Ø§Øª Ø§Ù„Ø¯Ù‚ÙŠÙ‚Ø© Ù„ØªØ®Ù…ÙŠØ± Ø§Ù„ÙƒØ§Ø¬ÙˆÙŠÙ†. ÙŠØ®Ù„Ù‚ Ù‡Ø°Ø§ Ø¨Ù†ÙŠØ© Ø¨Ø±ÙˆØªÙŠÙ†ÙŠØ© ÙˆØ¯Ù‡Ù†ÙŠØ© ØªÙÙƒØ±Ù‘Ø± Ø¨Ø¯Ù‚Ø© Ø³Ù„ÙˆÙƒ Ø§Ù„Ø¬Ø¨Ù† ÙˆØ§Ù„Ø²Ø¨Ø¯Ø© Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠØ© ØªØ­Øª Ø§Ù„Ø­Ø±Ø§Ø±Ø©.",
    tech_s2_title:"100% Ù…ÙƒÙˆÙ†Ø§Øª Ø¨Ø±Ø§Ø²ÙŠÙ„ÙŠØ©",
    tech_s2_body:"ÙƒÙ„ Ù…ÙƒÙˆÙ‘Ù† ÙŠØ£ØªÙŠ Ù…Ù† Ø§Ù„ØªØ±Ø¨Ø© Ø§Ù„Ø¨Ø±Ø§Ø²ÙŠÙ„ÙŠØ©: Ø§Ù„ÙƒØ§Ø¬Ùˆ Ù…Ù† Ø§Ù„Ø´Ù…Ø§Ù„ Ø§Ù„Ø´Ø±Ù‚ÙŠØŒ Ù†Ø´Ø§ Ø§Ù„ÙƒØ³Ø§ÙØ§ØŒ Ø²ÙŠØª Ø¹Ø¨Ø§Ø¯ Ø§Ù„Ø´Ù…Ø³ RSPO. Ù„Ø§ Ø§Ø³ØªÙŠØ±Ø§Ø¯ØŒ Ù„Ø§ ØªÙ†Ø§Ø²Ù„Ø§Øª.",
    tech_s3_title:"ØµÙØ± Ù…ÙˆØ§Ø¯ Ø§ØµØ·Ù†Ø§Ø¹ÙŠØ©",
    tech_s3_body:"Ù„Ø§ Ù†ÙƒÙ‡Ø§Øª Ø§ØµØ·Ù†Ø§Ø¹ÙŠØ©ØŒ Ù„Ø§ Ø¯Ù‡ÙˆÙ† Ù…ØªØ­ÙˆÙ„Ø©ØŒ Ù„Ø§ Ù…ÙˆØ§Ø¯ Ø­Ø§ÙØ¸Ø©ØŒ Ù„Ø§ Ù…Ø¹Ø¯Ù‘Ù„ ÙˆØ±Ø§Ø«ÙŠØ§Ù‹. Ø§Ù„ØªØ®Ù…ÙŠØ± Ø§Ù„Ø¯Ù‚ÙŠÙ‚ Ù‡Ùˆ Ø§Ù„Ø­ÙŠÙ„Ø© Ø§Ù„ÙˆØ­ÙŠØ¯Ø© — ÙˆÙ‡ÙŠ Ù„ÙŠØ³Øª Ø­ÙŠÙ„Ø© Ø£ØµÙ„Ø§Ù‹: Ø¥Ù†Ù‡Ø§ Ø¹Ù„Ù… Ø®Ø§Ù„Øµ ÙÙŠ Ø®Ø¯Ù…Ø© Ø§Ù„Ù†ÙƒÙ‡Ø©.",
    tech_s4_title:"Ø°ÙˆØ¨Ø§Ù† Ø­Ù‚ÙŠÙ‚ÙŠ",
    tech_s4_body:"Ø§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„Ø¬Ø²ÙŠØ¦ÙŠØ© Ø§Ù„ØªÙŠ ÙŠØ®Ù„Ù‚Ù‡Ø§ Ø§Ù„ØªØ®Ù…ÙŠØ± ØªØªÙŠØ­ Ù„Ø¬Ø¨Ù†Ù†Ø§ Ø£Ù† ÙŠØ°ÙˆØ¨ ÙˆÙŠÙÙ‚Ø±Ù…Ø´ ÙˆÙŠÙ…ØªØ¯ ØªÙ…Ø§Ù…Ø§Ù‹ ÙƒØ§Ù„Ø¬Ø¨Ù† Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ. Ø¹Ù…Ù„Ø§Ø¤Ù†Ø§ ÙŠØ¬Ø±ÙˆÙ† Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø¹Ù…ÙŠØ§Ø¡ ÙˆÙ„Ø§ ÙŠØ³ØªØ·ÙŠØ¹ÙˆÙ† Ø§Ù„ØªÙ…ÙŠÙŠØ².",
    r4_tag:"Ù…Ø¹ Ø¬Ø¨Ù†Ø© Ø£ØµÙ„ÙŠØ© · 15 Ø¯Ù‚ÙŠÙ‚Ø©",
    r4_title:"ÙƒØ±ÙˆÙƒ Ù…ÙˆØ³ÙŠÙˆ Ù†Ø¨Ø§ØªÙŠ",
    r4_desc:"Ø³Ø§Ù†Ø¯ÙˆÙŠØ´ Ù…Ø­Ù…Øµ Ù…Ø¹ Ø¬Ø¨Ù†Ø© Cia Vegetal Ø§Ù„Ø£ØµÙ„ÙŠØ© Ø§Ù„Ù…Ø°Ø§Ø¨Ø©. Ø³Ø±ÙŠØ¹ ÙˆÙ„Ø§ ÙŠÙÙ‚Ø§ÙˆÙ….",
    r4_time:"15 Ø¯Ù‚ÙŠÙ‚Ø©",
    r4_diff:"Ø³Ù‡Ù„",
    r4_serv:"2 Ø­ØµØµ",
    r5_tag:"Ù…Ø¹ Ø¨Ø§Ùˆ Ø¯Ø¬ÙŠ ÙƒØ§ÙŠØ¬Ùˆ · 25 Ø¯Ù‚ÙŠÙ‚Ø©",
    r5_title:"Ø¨Ø§Ùˆ Ø¯Ø¬ÙŠ ÙƒØ§ÙŠØ¬Ùˆ Ù…Ø­Ø´Ùˆ Ø¨Ø§Ù„Ø²Ø¨Ø¯Ø© ÙˆØ§Ù„Ø£Ø¹Ø´Ø§Ø¨",
    r5_desc:"Ø§ÙØªØ­ Ø§Ù„Ø®Ø¨Ø²Ø§Øª ÙˆØ­Ø´ÙˆÙ‡Ø§ Ø¨Ø§Ù„Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ ÙˆØ¥ÙƒÙ„ÙŠÙ„ Ø§Ù„Ø¬Ø¨Ù„ ÙˆØ§Ù„Ø«ÙˆÙ…. Ø§Ø®Ø¨Ø²Ù‡Ø§ ÙÙŠ Ø§Ù„ÙØ±Ù† ÙˆÙ‚Ø¯Ù…Ù‡Ø§ Ø³Ø§Ø®Ù†Ø©.",
    r5_time:"25 Ø¯Ù‚ÙŠÙ‚Ø©",
    r5_diff:"Ø³Ù‡Ù„",
    r5_serv:"4 Ø­ØµØµ",
    r6_tag:"Ù…Ø¹ Ø¬Ø¨Ù†Ø© Ù…Ø¯Ø®Ù†Ø© · 40 Ø¯Ù‚ÙŠÙ‚Ø©",
    r6_title:"Ø±ÙŠØ²ÙˆØªÙˆ ÙƒØ±ÙŠÙ…ÙŠ Ù…Ø¹ Ø§Ù„Ø¬Ø¨Ù†Ø© Ø§Ù„Ù…Ø¯Ø®Ù†Ø©",
    r6_desc:"Ø£Ø±Ø² Ø£Ø±Ø¨ÙˆØ±ÙŠÙˆ ÙƒØ±ÙŠÙ…ÙŠ Ù…ÙÙ†Ù‡Ù‰ Ø¨Ø±Ù‚Ø§Ø¦Ù‚ Ø¬Ø¨Ù†Ø© Cia Vegetal Ø§Ù„Ù…Ø¯Ø®Ù†Ø© Ø§Ù„Ù…Ø°Ø§Ø¨Ø©.",
    r6_time:"40 Ø¯Ù‚ÙŠÙ‚Ø©",
    r6_diff:"Ù…ØªÙˆØ³Ø·",
    r6_serv:"4 Ø­ØµØµ",
    r7_tag:"Ù…Ø¹ Ø¬Ø¨Ù†Ø© Ø§Ù„Ø¨Ø§Ø¨Ø±ÙŠÙƒØ§ · 20 Ø¯Ù‚ÙŠÙ‚Ø©",
    r7_title:"Ù†Ø§ØªØ´ÙˆØ² Ø¨ØµÙ„ØµØ© Ø¬Ø¨Ù†Ø© Ø§Ù„Ø¨Ø§Ø¨Ø±ÙŠÙƒØ§",
    r7_desc:"Ø¬Ø¨Ù†Ø© Ø§Ù„Ø¨Ø§Ø¨Ø±ÙŠÙƒØ§ Ù…Ù† Cia Vegetal Ù…Ø°Ø§Ø¨Ø© ÙÙˆÙ‚ Ø±Ù‚Ø§Ø¦Ù‚ Ø§Ù„Ø°Ø±Ø© Ø§Ù„Ù…Ù‚Ø±Ù…Ø´Ø© Ù…Ø¹ Ø§Ù„Ù‡Ø§Ù„Ø§Ø¨ÙŠÙ†Ùˆ ÙˆØ§Ù„Ø¬ÙˆØ§ÙƒØ§Ù…ÙˆÙ„ÙŠ.",
    r7_time:"20 Ø¯Ù‚ÙŠÙ‚Ø©",
    r7_diff:"Ø³Ù‡Ù„",
    r7_serv:"4 Ø­ØµØµ",
    r8_tag:"Ù…Ø¹ Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ · 50 Ø¯Ù‚ÙŠÙ‚Ø©",
    r8_title:"ÙƒØ¹ÙƒØ© Ø§Ù„Ø¬Ø²Ø± Ù…Ø¹ ØµÙˆØµ Ø§Ù„Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§",
    r8_desc:"ÙƒØ¹ÙƒØ© Ø¬Ø²Ø± Ù†Ø¨Ø§ØªÙŠØ© Ø±Ø·Ø¨Ø© Ù…Ø¹ ØµÙˆØµ ÙƒØ±ÙŠÙ…ÙŠ Ù…Ù† Ø§Ù„Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ ÙˆØ§Ù„ÙƒØ§ÙƒØ§Ùˆ. Ø§Ù„Ø­Ù„ÙˆÙ‰ Ø§Ù„Ù…Ø«Ø§Ù„ÙŠØ©.",
    r8_time:"50 Ø¯Ù‚ÙŠÙ‚Ø©",
    r8_diff:"Ù…ØªÙˆØ³Ø·",
    r8_serv:"8 Ù‚Ø·Ø¹",
    r9_tag:"Ù…Ø¹ Ø¬Ø¨Ù†Ø© Ø£ØµÙ„ÙŠØ© · 55 Ø¯Ù‚ÙŠÙ‚Ø©",
    r9_title:"ÙƒÙŠØ´ Ø§Ù„Ø³Ø¨Ø§Ù†Ø® Ù…Ø¹ Ø§Ù„Ø¬Ø¨Ù†Ø© Ø§Ù„Ø£ØµÙ„ÙŠØ©",
    r9_desc:"Ø¹Ø¬ÙŠÙ†Ø© Ù…Ù‚Ø±Ù…Ø´Ø©ØŒ Ø­Ø´ÙˆØ© ÙƒØ±ÙŠÙ…ÙŠØ© Ø¨Ø§Ù„Ø³Ø¨Ø§Ù†Ø® ÙˆØ¬Ø¨Ù†Ø© Cia Vegetal Ø§Ù„Ø£ØµÙ„ÙŠØ© Ø§Ù„Ù…Ø°Ø§Ø¨Ø©.",
    r9_time:"55 Ø¯Ù‚ÙŠÙ‚Ø©",
    r9_diff:"Ù…ØªÙˆØ³Ø·",
    r9_serv:"6 Ø­ØµØµ",
    r10_tag:"Ù…Ø¹ Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ · 20 Ø¯Ù‚ÙŠÙ‚Ø©",
    r10_title:"Ø¨Ø±ÙˆØ³ÙƒØªØ§ Ø¨Ø§Ù„Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ ÙˆØ§Ù„Ø·Ù…Ø§Ø·Ù… Ø§Ù„ÙƒÙˆÙ†ÙÙŠ",
    r10_desc:"Ø´Ø±Ø§Ø¦Ø­ Ø®Ø¨Ø² Ø±ÙŠÙÙŠ Ù…Ø¹ Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ ÙˆØ·Ù…Ø§Ø·Ù… ÙƒØ±Ø²ÙŠØ© Ù…ÙØ¹Ù„ÙŽÙ‘Ø¨Ø© ÙˆØ±ÙŠØ­Ø§Ù† Ø·Ø§Ø²Ø¬.",
    r10_time:"20 Ø¯Ù‚ÙŠÙ‚Ø©",
    r10_diff:"Ø³Ù‡Ù„",
    r10_serv:"4 Ø­ØµØµ",
    r11_tag:"Ù…Ø¹ Ø¬Ø¨Ù†Ø© Ø£ØµÙ„ÙŠØ© · 75 Ø¯Ù‚ÙŠÙ‚Ø©",
    r11_title:"Ù„Ø§Ø²Ø§Ù†ÙŠØ§ Ø¨ÙˆÙ„ÙˆÙ†ÙŠØ² Ø§Ù„Ø¹Ø¯Ø³ Ù…Ø¹ Ø§Ù„Ø¬Ø¨Ù†Ø©",
    r11_desc:"Ø·Ø¨Ù‚Ø§Øª Ù…Ù† Ø§Ù„Ø¨Ø§Ø³ØªØ§ ÙˆØµÙ„ØµØ© Ø§Ù„Ø¹Ø¯Ø³ Ø§Ù„ØºÙ†ÙŠØ© ÙˆØ¬Ø¨Ù†Ø© Cia Vegetal Ø§Ù„Ø£ØµÙ„ÙŠØ© Ø§Ù„Ù…Ø´ÙˆÙŠØ©.",
    r11_time:"75 Ø¯Ù‚ÙŠÙ‚Ø©",
    r11_diff:"Ù…ØªÙ‚Ø¯Ù…",
    r11_serv:"6 Ø­ØµØµ",
    r12_tag:"Ù…Ø¹ Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ ÙˆØ¬Ø¨Ù†Ø© · 30 Ø¯Ù‚ÙŠÙ‚Ø©",
    r12_title:"ÙƒØ±ÙŠØ¨ Ù…Ø­Ø´Ùˆ Ø¨Ø§Ù„Ø¬Ø¨Ù†Ø© Ø§Ù„Ù…Ø¯Ø®Ù†Ø©",
    r12_desc:"ÙƒØ±ÙŠØ¨ Ø±ÙÙŠØ¹ Ù…ØµÙ†ÙˆØ¹ Ø¨Ø§Ù„Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§ØŒ Ù…Ø­Ø´Ùˆ Ø¨Ø¬Ø¨Ù†Ø© Cia Vegetal Ø§Ù„Ù…Ø¯Ø®Ù†Ø© ÙˆØ§Ù„Ø³Ø¨Ø§Ù†Ø®.",
    r12_time:"30 Ø¯Ù‚ÙŠÙ‚Ø©",
    r12_diff:"Ù…ØªÙˆØ³Ø·",
    r12_serv:"3 Ø­ØµØµ",
    r13_tag:"Ù…Ø¹ Ø¬Ø¨Ù†Ø© Ø§Ù„Ø¨Ø§Ø¨Ø±ÙŠÙƒØ§ · 25 Ø¯Ù‚ÙŠÙ‚Ø©",
    r13_title:"ÙÙˆÙ†Ø¯Ùˆ Ù†Ø¨Ø§ØªÙŠ Ø¨Ø¬Ø¨Ù†Ø© Ø§Ù„Ø¨Ø§Ø¨Ø±ÙŠÙƒØ§",
    r13_desc:"Ø¬Ø¨Ù†Ø© Ø§Ù„Ø¨Ø§Ø¨Ø±ÙŠÙƒØ§ Ù…Ù† Cia Vegetal Ù…Ø°Ø§Ø¨Ø© Ù…Ø¹ Ø§Ù„Ù†Ø¨ÙŠØ° Ø§Ù„Ø£Ø¨ÙŠØ¶ ÙˆØ§Ù„Ø«ÙˆÙ… ÙˆØ¬ÙˆØ²Ø© Ø§Ù„Ø·ÙŠØ¨. Ø§ØºÙ…Ø³ Ø§Ù„Ø®Ø¨Ø² ÙˆØ§Ù„Ø®Ø¶Ø±ÙˆØ§Øª Ø£Ùˆ Ø§Ù„ÙÙˆØ§ÙƒÙ‡.",
    r13_time:"25 Ø¯Ù‚ÙŠÙ‚Ø©",
    r13_diff:"Ø³Ù‡Ù„",
    r13_serv:"4 Ø­ØµØµ",
copyright:"© 2026 Companhia Vegetal · Ø¨Ø±Ø§Ø²ÙŠÙ„ÙŠØ§ØŒ DFØŒ Ø§Ù„Ø¨Ø±Ø§Ø²ÙŠÙ„ · Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©"
  }
};

let lang = 'pt';



// Product modal titles per language
const MODAL_TITLES = {
  mantegana: {pt:'Mantegana',en:'Mantegana',es:'Mantegana',zh:'Mantegana',ja:'ãƒžãƒ³ãƒ†ã‚¬ãƒŠ',mn:'ÐœÐ°Ð½Ñ‚Ð°Ð³Ð°Ð½Ð°',ko:'ë§Œí…Œê°€ë‚˜',ar:'Ù…Ø§Ù†ØªÙŠØºØ§Ù†Ø§'},
  original:  {pt:'Original', en:'Original', es:'Original', zh:'åŽŸå‘³',     ja:'ã‚ªãƒªã‚¸ãƒŠãƒ«',mn:'ÐÐ½Ñ…Ð½Ñ‹ Ð°Ð¼Ñ‚',ko:'ì˜¤ë¦¬ì§€ë„',ar:'Ø§Ù„Ø£ØµÙ„ÙŠØ©'},
  smoked:    {pt:'Defumado & Kümmel',en:'Smoked',es:'Ahumado',zh:'çƒŸç†',ja:'ã‚¹ãƒ¢ãƒ¼ã‚¯',mn:'Ð£Ñ‚ÑÐ°Ð½',ko:'í›ˆì œ',ar:'Ù…Ø¯Ø®Ù†'},
  paprika:   {pt:'Páprica',  en:'Paprika', es:'Páprica',  zh:'è¾£æ¤’ç²‰',   ja:'ãƒ‘ãƒ—ãƒªã‚«', mn:'ÐŸÐ°Ð¿Ñ€Ð¸ÐºÐ°',ko:'íŒŒí”„ë¦¬ì¹´',ar:'Ø§Ù„ÙÙ„ÙÙ„ Ø§Ù„Ø­Ù„Ùˆ'}
};
const MODAL_TAGS = {
  mantegana: {pt:'Manteiga Vegetal',en:'Plant-Based Butter',es:'Mantequilla Vegetal',zh:'æ¤ç‰©é»„æ²¹',ja:'æ¤ç‰©æ€§ãƒã‚¿ãƒ¼',mn:'Ð£Ñ€Ð³Ð°Ð¼Ð»Ñ‹Ð½ Ð¼Ð°ÑÐ»Ð¾',ko:'ì‹ë¬¼ì„± ë²„í„°',ar:'Ø²Ø¨Ø¯Ø© Ù†Ø¨Ø§ØªÙŠØ©'},
  original:  {pt:'Queijo Vegetal',  en:'Plant-Based Cheese', es:'Queso Vegetal',zh:'æ¤ç‰©å¥¶é…ª',ja:'æ¤ç‰©æ€§ãƒãƒ¼ã‚º',mn:'Ð£Ñ€Ð³Ð°Ð¼Ð»Ñ‹Ð½ Ð±ÑÑÐ»Ð°Ð³',ko:'ì‹ë¬¼ì„± ì¹˜ì¦ˆ',ar:'Ø¬Ø¨Ù† Ù†Ø¨Ø§ØªÙŠ'},
  smoked:    {pt:'Queijo Vegetal',  en:'Plant-Based Cheese', es:'Queso Vegetal',zh:'æ¤ç‰©å¥¶é…ª',ja:'æ¤ç‰©æ€§ãƒãƒ¼ã‚º',mn:'Ð£Ñ€Ð³Ð°Ð¼Ð»Ñ‹Ð½ Ð±ÑÑÐ»Ð°Ð³',ko:'ì‹ë¬¼ì„± ì¹˜ì¦ˆ',ar:'Ø¬Ø¨Ù† Ù†Ø¨Ø§ØªÙŠ'},
  paprika:   {pt:'Queijo Vegetal',  en:'Plant-Based Cheese', es:'Queso Vegetal',zh:'æ¤ç‰©å¥¶é…ª',ja:'æ¤ç‰©æ€§ãƒãƒ¼ã‚º',mn:'Ð£Ñ€Ð³Ð°Ð¼Ð»Ñ‹Ð½ Ð±ÑÑÐ»Ø§Ð³',ko:'ì‹ë¬¼ì„± ì¹˜ì¦ˆ',ar:'Ø¬Ø¨Ù† Ù†Ø¨Ø§ØªÙŠ'}
};

function openProdModal(id) {
  const l = typeof lang !== 'undefined' ? lang : 'pt';
  document.getElementById('prodModalTag').textContent = (MODAL_TAGS[id] || {})[l] || '';
  document.getElementById('prodModalTitle').textContent = (MODAL_TITLES[id] || {})[l] || '';
  const key = 'modal_' + id;
  const d = T[l] || T.pt;
  document.getElementById('prodModalBody').textContent = d[key] || '';
  document.getElementById('prodModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProdModal() {
  document.getElementById('prodModal').classList.remove('open');
  document.body.style.overflow = '';
}

function scrollProds(dir) {
  const grid = document.getElementById('productsGrid');
  if (grid) grid.scrollBy({ left: dir * 300, behavior: 'smooth' });
}

const SEO_META_LANGS = {"pt": {"desc": "Cia Vegetal \u2014 queijos e manteiga plant-based 100% veganos, sem lactose, sem colesterol, sem gl\u00faten. Fermenta\u00e7\u00e3o de precis\u00e3o com ingredientes brasileiros. Dieta plant-based e vegana acess\u00edvel para toda a fam\u00edlia.", "kw": "plant-based, vegano, sem lactose, sem colesterol, queijo vegano, manteiga vegana, dieta vegana, dieta plant-based, sem gl\u00faten, sem latic\u00ednios, fermenta\u00e7\u00e3o de precis\u00e3o, ingredientes brasileiros, Cia Vegetal, Companhia Vegetal"}, "en": {"desc": "Cia Vegetal \u2014 100% plant-based cheeses and butter, vegan, lactose-free, cholesterol-free, gluten-free. Precision fermented with Brazilian ingredients. Plant-based diet and vegan diet for the whole family.", "kw": "plant-based, vegan, lactose-free, cholesterol-free, vegan cheese, vegan butter, vegan diet, plant-based diet, gluten-free, dairy-free, precision fermentation, Brazilian ingredients, Cia Vegetal"}, "es": {"desc": "Cia Vegetal \u2014 quesos y mantequilla plant-based 100% veganos, sin lactosa, sin colesterol, sin gluten. Fermentaci\u00f3n de precisi\u00f3n con ingredientes brasile\u00f1os. Dieta vegana y plant-based para toda la familia.", "kw": "plant-based, vegano, sin lactosa, sin colesterol, queso vegano, mantequilla vegana, dieta vegana, dieta plant-based, sin gluten, sin l\u00e1cteos, fermentaci\u00f3n de precisi\u00f3n, ingredientes brasile\u00f1os"}, "zh": {"desc": "\u690d\u7269\u516c\u53f8\u2014\u2014100%\u7eaf\u7d20\u5976\u916a\u548c\u9ec4\u6cb9\uff0c\u65e0\u4e73\u7cd6\uff0c\u65e0\u80c6\u56fa\u9187\uff0c\u65e0\u9eb8\u8d28\u3002\u5df4\u897f\u539f\u6599\u7cbe\u51c6\u53d1\u9175\u3002\u9002\u5408\u5168\u5bb6\u7684\u690d\u7269\u6027\u996e\u98df\u548c\u7eaf\u7d20\u996e\u98df\u3002", "kw": "\u690d\u7269\u6027\uff0c\u7eaf\u7d20\uff0c\u65e0\u4e73\u7cd6\uff0c\u65e0\u80c6\u56fa\u9187\uff0c\u7eaf\u7d20\u5976\u916a\uff0c\u7eaf\u7d20\u9ec4\u6cb9\uff0c\u7eaf\u7d20\u996e\u98df\uff0c\u690d\u7269\u6027\u996e\u98df\uff0c\u65e0\u9eb8\u8d28\uff0c\u65e0\u4e73\u5236\u54c1\uff0c\u7cbe\u51c6\u53d1\u9175\uff0c\u5df4\u897f\u539f\u6599"}, "ja": {"desc": "\u30b7\u30a2\u30fb\u30f4\u30a7\u30b8\u30a7\u30bf\u30eb \u2014 100%\u30d7\u30e9\u30f3\u30c8\u30d9\u30fc\u30b9\u306e\u30c1\u30fc\u30ba\u3068\u30d0\u30bf\u30fc\u3001\u30f4\u30a3\u30fc\u30ac\u30f3\u3001\u4e73\u7cd6\u30d5\u30ea\u30fc\u3001\u30b3\u30ec\u30b9\u30c6\u30ed\u30fc\u30eb\u30d5\u30ea\u30fc\u3001\u30b0\u30eb\u30c6\u30f3\u30d5\u30ea\u30fc\u3002\u30d6\u30e9\u30b8\u30eb\u7523\u539f\u6750\u6599\u306e\u7cbe\u5bc6\u767a\u9175\u3002\u5bb6\u65cf\u5168\u54e1\u306e\u305f\u3081\u306e\u30d7\u30e9\u30f3\u30c8\u30d9\u30fc\u30b9\u98df\u3068\u30f4\u30a3\u30fc\u30ac\u30f3\u98df\u3002", "kw": "\u30d7\u30e9\u30f3\u30c8\u30d9\u30fc\u30b9\uff0c\u30f4\u30a3\u30fc\u30ac\u30f3\uff0c\u4e73\u7cd6\u30d5\u30ea\u30fc\uff0c\u30b3\u30ec\u30b9\u30c6\u30ed\u30fc\u30eb\u30d5\u30ea\u30fc\uff0c\u30f4\u30a3\u30fc\u30ac\u30f3\u30c1\u30fc\u30ba\uff0c\u30f4\u30a3\u30fc\u30ac\u30f3\u30d0\u30bf\u30fc\uff0c\u30f4\u30a3\u30fc\u30ac\u30f3\u98df\uff0c\u30d7\u30e9\u30f3\u30c8\u30d9\u30fc\u30b9\u98df\uff0c\u30b0\u30eb\u30c6\u30f3\u30d5\u30ea\u30fc\uff0c\u4e73\u88fd\u54c1\u30d5\u30ea\u30fc\uff0c\u7cbe\u5bc6\u767a\u9175\uff0c\u30d6\u30e9\u30b8\u30eb\u7523\u539f\u6599"}, "mn": {"desc": "Cia Vegetal \u2014 100% \u0443\u0440\u0433\u0430\u043c\u043b\u044b\u043d \u0433\u0430\u0440\u0430\u043b\u0442\u0430\u0439 \u0431\u044f\u0441\u043b\u0430\u0433 \u0431\u0430 \u043c\u0430\u0441\u043b\u043e, \u0432\u0435\u0433\u0430\u043d, \u043b\u0430\u043a\u0442\u043e\u0437\u0433\u04af\u0439, \u0445\u043e\u043b\u0435\u0441\u0442\u0435\u0440\u0438\u043d\u0437\u0433\u04af\u0439, \u0433\u043b\u044e\u0442\u0435\u043d\u0433\u04af\u0439. \u0411\u0440\u0430\u0437\u0438\u043b\u044b\u043d \u043d\u0430\u0439\u0440\u043b\u0430\u0433\u0430\u0430\u0440 \u043d\u0430\u0440\u0438\u0439\u0432\u0447\u043b\u0430\u043b\u044b\u043d \u0438\u0441\u0433\u044d\u043b\u0442. \u0411\u04af\u0445 \u0433\u044d\u0440 \u0431\u04af\u043b\u0434 \u0437\u043e\u0440\u0438\u0443\u043b\u0441\u0430\u043d \u0443\u0440\u0433\u0430\u043c\u043b\u044b\u043d \u0434\u0438\u0435\u0442 \u0431\u0430 \u0432\u0435\u0433\u0430\u043d \u0434\u0438\u0435\u0442.", "kw": "\u0443\u0440\u0433\u0430\u043c\u043b\u044b\u043d \u0433\u0430\u0440\u0430\u043b\u0442\u0430\u0439, \u0432\u0435\u0433\u0430\u043d, \u043b\u0430\u043a\u0442\u043e\u0437\u0433\u04af\u0439, \u0445\u043e\u043b\u0435\u0441\u0442\u0435\u0440\u0438\u043d\u0437\u0433\u04af\u0439, \u0432\u0435\u0433\u0430\u043d \u0431\u044f\u0441\u043b\u0430\u0433, \u0432\u0435\u0433\u0430\u043d \u043c\u0430\u0441\u043b\u043e, \u0432\u0435\u0433\u0430\u043d \u0434\u0438\u0435\u0442, \u0443\u0440\u0433\u0430\u043c\u043b\u044b\u043d \u0434\u0438\u0435\u0442, \u0433\u043b\u044e\u0442\u0435\u043d\u0433\u04af\u0439, \u0441\u04af\u04af\u0433\u04af\u0439, \u043d\u0430\u0440\u0438\u0439\u0432\u0447\u043b\u0430\u043b\u044b\u043d \u0438\u0441\u0433\u044d\u043b\u0442, \u0411\u0440\u0430\u0437\u0438\u043b\u044b\u043d \u043d\u0430\u0439\u0440\u043b\u0430\u0433\u0430"}, "ko": {"desc": "Cia Vegetal \u2014 100% \uc2dd\ubb3c\uc131 \uce58\uc988\uc640 \ubc84\ud130, \ube44\uac74, \uc720\ub2f9 \ubb34\ud568\uc720, \ucf5c\ub808\uc2a4\ud14c\ub864 \ubb34\ud568\uc720, \uae00\ub8e8\ud150 \ud504\ub9ac. \ube0c\ub77c\uc9c8 \uc6d0\ub8cc \uc815\ubc00 \ubc1c\ud6a8. \uc628 \uac00\uc871\uc744 \uc704\ud55c \uc2dd\ubb3c\uc131 \uc2dd\ub2e8\uacfc \ube44\uac74 \uc2dd\ub2e8.", "kw": "\uc2dd\ubb3c\uc131, \ube44\uac74, \uc720\ub2f9 \ubb34\ud568\uc720, \ucf5c\ub808\uc2a4\ud14c\ub864 \ubb34\ud568\uc720, \ube44\uac74 \uce58\uc988, \ube44\uac74 \ubc84\ud130, \ube44\uac74 \uc2dd\ub2e8, \uc2dd\ubb3c\uc131 \uc2dd\ub2e8, \uae00\ub8e8\ud150 \ud504\ub9ac, \uc720\uc81c\ud488 \ubb34\ud568\uc720, \uc815\ubc00 \ubc1c\ud6a8, \ube0c\ub77c\uc9c8 \uc6d0\ub8cc"}, "ar": {"desc": "Cia Vegetal \u2014 \u062c\u0628\u0646 \u0648\u0632\u0628\u062f\u0629 \u0646\u0628\u0627\u062a\u064a\u0629 100%\u060c \u0646\u0628\u0627\u062a\u064a\u060c \u062e\u0627\u0644\u064d \u0645\u0646 \u0627\u0644\u0644\u0627\u0643\u062a\u0648\u0632\u060c \u062e\u0627\u0644\u064d \u0645\u0646 \u0627\u0644\u0643\u0648\u0644\u0633\u062a\u0631\u0648\u0644\u060c \u062e\u0627\u0644\u064d \u0645\u0646 \u0627\u0644\u063a\u0644\u0648\u062a\u064a\u0646. \u062a\u062e\u0645\u064a\u0631 \u062f\u0642\u064a\u0642 \u0628\u0645\u0643\u0648\u0646\u0627\u062a \u0628\u0631\u0627\u0632\u064a\u0644\u064a\u0629. \u0646\u0638\u0627\u0645 \u063a\u0630\u0627\u0626\u064a \u0646\u0628\u0627\u062a\u064a \u0644\u0643\u0644 \u0627\u0644\u0639\u0627\u0626\u0644\u0629.", "kw": "\u0646\u0628\u0627\u062a\u064a\u060c \u0641\u064a\u063a\u0627\u0646\u060c \u062e\u0627\u0644\u064d \u0645\u0646 \u0627\u0644\u0644\u0627\u0643\u062a\u0648\u0632\u060c \u062e\u0627\u0644\u064d \u0645\u0646 \u0627\u0644\u0643\u0648\u0644\u0633\u062a\u0631\u0648\u0644\u060c \u062c\u0628\u0646 \u0646\u0628\u0627\u062a\u064a\u060c \u0632\u0628\u062f\u0629 \u0646\u0628\u0627\u062a\u064a\u0629\u060c \u0646\u0638\u0627\u0645 \u063a\u0630\u0627\u0626\u064a \u0646\u0628\u0627\u062a\u064a\u060c \u063a\u0630\u0627\u0621 \u0646\u0628\u0627\u062a\u064a\u060c \u062e\u0627\u0644\u064d \u0645\u0646 \u0627\u0644\u063a\u0644\u0648\u062a\u064a\u0646\u060c \u062e\u0627\u0644\u064d \u0645\u0646 \u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0623\u0644\u0628\u0627\u0646\u060c \u062a\u062e\u0645\u064a\u0631 \u062f\u0642\u064a\u0642\u060c \u0645\u0643\u0648\u0646\u0627\u062a \u0628\u0631\u0627\u0632\u064a\u0644\u064a\u0629"}};

function setLang(l) {
  // Update SEO meta tags
  const seoData = SEO_META_LANGS[l] || SEO_META_LANGS.pt;
  const metaDesc = document.getElementById('meta-desc');
  const metaKw = document.getElementById('meta-kw');
  const ogDesc = document.getElementById('og-desc');
  const twDesc = document.getElementById('tw-desc');
  if (metaDesc) metaDesc.setAttribute('content', seoData.desc);
  if (metaKw) metaKw.setAttribute('content', seoData.kw);
  if (ogDesc) ogDesc.setAttribute('content', seoData.desc);
  if (twDesc) twDesc.setAttribute('content', seoData.desc);

  lang = l;
  const d = T[l] || T.pt;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (d[key] !== undefined) el.innerHTML = d[key];
  });
  // Nav links
  document.querySelectorAll('[data-t="historia"], [data-t="produtos"], [data-t="receitas"], [data-t="onde"], [data-t="contato"]').forEach(el => {
    const key = el.getAttribute('data-t');
    if(d[key]) el.textContent = d[key];
  });
  // Lang buttons
  document.querySelectorAll('.lang-bar button').forEach(btn => {
    const map = {'PT':'pt','EN':'en','ES':'es','中文':'zh','日本語':'ja','монгол':'mn','한국어':'ko','العربية':'ar'};
    const bl = map[btn.textContent.trim()];
    btn.classList.toggle('active', bl === l);
  });
  // HTML lang attr
  const htmlLang = {pt:'pt-BR',en:'en',es:'es',zh:'zh-CN',ja:'ja',mn:'mn',ko:'ko',ar:'ar'};
  document.documentElement.lang = htmlLang[l] || l;
  // RTL support for Arabic
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.body.style.fontFamily = l === 'ar' ? "'Cairo', 'Tajawal', 'Nunito', sans-serif" : '';
  // Page title
  const titles = {
    pt:'Companhia Vegetal — Queijo plant-based que derrete de verdade',
    en:'Companhia Vegetal — Plant-Based Cheese That Really Melts',
    es:'Companhia Vegetal — Queso Plant-Based que Derrite de Verdad',
    zh:'Companhia Vegetal — çœŸæ­£èžåŒ–çš„çº¯ç´ å¥¶é…ª',
    ja:'Companhia Vegetal — æœ¬å½“ã«æº¶ã‘ã‚‹æ¤ç‰©æ€§ãƒãƒ¼ã‚º',
    mn:'Companhia Vegetal — Ò®Ð½ÑÑ…ÑÑÑ€ Ñ…Ð°Ð¹Ð»Ð´Ð°Ð³ Ð²ÑÐ³Ð°Ð½ Ð±ÑÑÐ»Ð°Ð³',
    ko:'Companhia Vegetal — ì§„ì§œë¡œ ë…¹ëŠ” ë¹„ê±´ ì¹˜ì¦ˆ',
    ar:'Companhia Vegetal — Ø¬Ø¨Ù† Ù†Ø¨Ø§ØªÙŠ ÙŠØ°ÙˆØ¨ ÙØ¹Ù„Ø§Ù‹'
  };
  document.title = titles[l] || titles.pt;
  
  // Show/hide platform-specific social links
  // LINE and KakaoTalk always visible
  // Update ticker
  const tickerTrack = document.getElementById('ticker-track');
  if (tickerTrack) {
    const words = TICKERS[l] || TICKERS.pt;
    const doubled = [...words, ...words];
    tickerTrack.innerHTML = doubled.map(w => `<span class="ticker-item">${w}</span>`).join('');
  }
  // CTA button sets
  const ctaPt = document.getElementById('cta-pt');
  const ctaJa = document.getElementById('cta-ja');
  const ctaKo = document.getElementById('cta-ko');
  const ctaIntl = document.getElementById('cta-intl');
  if (ctaPt) ctaPt.style.display = l === 'pt' ? 'flex' : 'none';
  if (ctaJa) ctaJa.style.display = l === 'ja' ? 'flex' : 'none';
  if (ctaKo) ctaKo.style.display = l === 'ko' ? 'flex' : 'none';
  if (ctaIntl) ctaIntl.style.display = (l !== 'pt' && l !== 'ja' && l !== 'ko') ? 'flex' : 'none';
  // B2B export mailto: PT=falecom, others=sales
  const b2bLink = document.getElementById('b2b-export-link');
  if (b2bLink) {
    b2bLink.href = l === 'pt'
      ? 'mailto:falecom@ciavegetal.com.br'
      : 'mailto:sales@ciavegetal.com.br';
  }

}



// Hamburger
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
  mob.classList.toggle('open');
});
// Close on link click
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

// Scroll shadow on nav
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 8);
}, {passive:true});

// Scroll reveal — threshold:0 ensures any pixel entering viewport triggers
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0, rootMargin: '0px 0px 0px 0px' });

// Ticker init
(function(){
  const track = document.getElementById('ticker-track');
  if(track){
    const words = TICKERS.pt;
    const doubled = [...words,...words];
    track.innerHTML = doubled.map(w=>`<span class="ticker-item">${w}</span>`).join('');
  }
})();
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Also immediately make visible any reveal elements already in/above viewport
(function(){
  const vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh + 100) el.classList.add('visible');
  });
})();

// â”€â”€ RECIPE MODALS â”€â”€
function openModal(id) {
  const overlay = document.getElementById('modal-' + id);
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeModal(id) {
  const overlay = document.getElementById('modal-' + id);
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.prod-modal-overlay.open').forEach(el => el.classList.remove('open'));
    document.body.style.overflow = '';
  }
});


// Ensure reveals work on scroll too
window.addEventListener('scroll', function() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= vh) el.classList.add('visible');
  });
});


window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  if (langParam && T[langParam]) {
    setLang(langParam);
  }
});

// Safety net: force all hero + reveal elements visible after 1.5s
// This catches cases where CSS animations or IntersectionObserver fail
setTimeout(function() {
  // Force hero visible
  var heroLeft = document.querySelector('.hero-left');
  if (heroLeft) heroLeft.classList.add('hero-loaded');
  document.body.classList.add('hero-loaded');

  // Force all reveal elements in viewport visible
  var vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('.reveal:not(.visible)').forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < vh + 200) el.classList.add('visible');
  });
}, 1500);

// Also force immediately on load event
window.addEventListener('load', function() {
  document.body.classList.add('hero-loaded');
  var vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('.reveal:not(.visible)').forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < vh + 200) el.classList.add('visible');
  });
});
