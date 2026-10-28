/* ============================================================
   i18n.js — Internationalisation FR / EN
   Eric ROY | Portfolio Artistique
   ============================================================ */

'use strict';

const TRANSLATIONS = {
  fr: {
    // Navigation
    'nav.home':    'Accueil',
    'nav.gallery': 'Galerie',
    'nav.about':   'À Propos',
    'nav.contact': 'Contact',

    // Footer
    'footer.tagline':    'Artiste peintre franco-américain.<br>Un art abstrait unique, né entre<br>deux continents.',
    'footer.nav_col':    'Navigation',
    'footer.orders_col': 'Commandes & Projets',
    'footer.acquire':    'Acquérir une œuvre',
    'footer.custom':     'Tableau sur mesure',
    'footer.corporate':  'Projets corporatifs',
    'footer.architects': 'Architectes & Designers',
    'footer.legal':      'Mentions légales',
    'footer.copyright':  '© 2026 Eric ROY — France · États-Unis · Canada — Tous droits réservés',
    'footer.dev':        'Site développé par Mélanie ROY',

    // Index — Hero
    'index.hero_eyebrow':    'Artiste Peintre Franco-Américain',
    'index.hero_title':      'De la France<br>à l\'Amérique, <em>l\'abstraction</em><br>comme seule patrie',
    'index.hero_desc':       'Grandi en France, conquis par l\'immensité du continent américain, Eric ROY crée entre les États-Unis et le Canada des œuvres abstraites qui transcendent les frontières — géographiques et émotionnelles.',
    'index.hero_btn_gallery':'Découvrir les œuvres',
    'index.hero_btn_about':  'L\'histoire de l\'artiste',

    // Index — Intro
    'index.intro_subtitle': 'Un art né entre deux mondes',
    'index.intro_quote':    '« Je peins depuis deux continents, mais mes toiles n\'ont pas de passeport — elles appartiennent à ceux qui les ressentent. »',
    'index.intro_p1':       'Formé en France, Eric ROY a traversé l\'Atlantique pour laisser l\'immensité nord-américaine transformer sa vision et son geste. Il navigue aujourd\'hui en permanence entre les États-Unis et le Canada, tirant de ce nomadisme créatif une énergie picturale rare. Dans ses toiles, les textures s\'accumulent comme des couches de mémoire, et les couleurs vibrent avec l\'intensité des émotions traversées — l\'orange, sa couleur fétiche, surgissant toujours comme une révélation au cœur de la composition.',
    'index.intro_btn_bio':  'Lire la biographie',
    'index.stat1_label':    'Continents<br>Europe & Amérique du Nord',
    'index.stat2_label':    'Années<br>de création abstraite',

    // Index — Works
    'index.works_subtitle':    'Créations',
    'index.works_title':       'Quelques oeuvres',
    'index.works_desc':        'Nées entre les États-Unis et le Canada, ces toiles témoignent d\'un geste libre et habité — une abstraction sans territoire fixe, si ce n\'est la couleur.',
    'index.card1_technique':   'Tableau sur mesure',
    'index.card2_technique':   'Oeuvre abstraite',
    'index.card3_technique':   'Tableau sur mesure',
    'index.card4_technique':   'Oeuvre abstraite',
    'index.works_all':         'Voir toutes les œuvres',

    // Index — CTA
    'index.cta_label': 'Collaboration & Acquisition',
    'index.cta_title': 'Une œuvre vous émeut ?<br>Une commande vous inspire ?',
    'index.cta_desc':  'Que vous soyez collectionneur en France, aux États-Unis ou au Canada, entreprise en quête d\'une création d\'exception, ou architecte imaginant un espace — Eric ROY vous répondra personnellement.',
    'index.cta_btn':   'Prendre contact',

    // About — Header
    'about.subtitle':  'Biographie',
    'about.title':     'L\'histoire d\'Eric ROY',
    'about.hero_desc': 'De la France aux États-Unis, du Canada aux collections du monde entier — une vie en mouvement au service d\'une peinture sans frontières.',

    // About — Portrait
    'about.caption': 'Eric ROY — France, 2025',
    'about.lead':    '« La peinture est le seul territoire où je n\'ai pas besoin de passeport. Chaque toile est une frontière effacée. »',
    'about.p1':      'Artiste peintre français, Eric ROY consacre depuis plus de vingt ans son existence à l\'art abstrait. Né en France, installé aux États-Unis, perpétuellement en mouvement entre les États-Unis et le Canada, il a fait du nomadisme non pas une contrainte mais le moteur même de sa création.',
    'about.p2':      'Son univers pictural est celui d\'une abstraction intense et habitée — textures profondes, couleurs portées à incandescence, compositions où l\'orange vibrant surgit comme la signature d\'une âme qui a traversé des continents. Chaque toile est unique, jamais reproduite, et destinée à ceux qui cherchent dans l\'art quelque chose que les mots ne peuvent pas atteindre.',

    // About — Chapters
    'about.ch1_label': 'Chapitre I',
    'about.ch1_title': 'Les Racines',
    'about.ch1_p1':    'C\'est en France qu\'Eric ROY trace les premiers traits de sa vie d\'artiste. Baigné dans une culture où la peinture est un langage aussi naturel que la parole, il développe dès l\'adolescence une sensibilité aiguë à la couleur, à la lumière et à la matière. Les paysages du territoire français — leur douceur méridionale, leurs contrastes saisonniers, la palette changeante de leurs ciels — imprègnent ses premières explorations picturales comme une couche de fond jamais tout à fait recouverte.',
    'about.ch1_p2':    'Ces années de formation posent le socle. La rigueur du geste. L\'amour du grand format. La conviction, ancrée profondément, que l\'abstraction peut dire ce que la figuration ne peut qu\'approcher — que la vérité d\'une émotion se trouve non dans la représentation du monde, mais dans la vibration que ce monde provoque en nous.',
    'about.ch1_p3':    'La France lui donne ses fondations. Il lui manque encore l\'ébranlement. L\'espace. L\'immensité.',
    'about.ch2_label': 'Chapitre II',
    'about.ch2_title': 'Le Rêve Américain & l\'Élan Nord-Américain',
    'about.ch2_p1':    'Puis vient le départ. Le choc de l\'Amérique. L\'immensité des espaces ouverts, la lumière à la fois brutale et généreuse, le brassage permanent des cultures, l\'énergie électrique des grandes métropoles américaines. Eric ROY s\'installe aux États-Unis et vit une révélation créatrice.',
    'about.ch2_p2':    'Son pinceau s\'emballe. Ses formats grandissent. Sa palette s\'intensifie, perd ses dernières timidités. L\'orange s\'impose avec une force nouvelle — couleur de l\'aube sur les déserts, des néons urbains qui percent la nuit, de l\'incandescence propre au rêve américain. Ce n\'est plus une couleur parmi d\'autres : c\'est une signature, un ancrage dans l\'identité d\'un artiste qui a définitivement traversé l\'Atlantique.',
    'about.ch2_p3':    'Aujourd\'hui, sa vie artistique se déploie entre deux pays : les États-Unis et le Canada. Il navigue entre les deux avec la liberté d\'un artiste qui a compris que la géographie nourrit l\'œuvre. La lumière de la côte Est, les horizons infinis des Prairies canadiennes, la densité culturelle de New York et la sérénité des grands espaces du Nord — tout cela entre dans ses toiles, pas comme un sujet, mais comme une énergie.',
    'about.ch2_p4':    'Ce nomadisme n\'est pas une errance. C\'est une méthode. C\'est dans le mouvement perpétuel qu\'il trouve l\'état de grâce qui précède chaque nouvelle création.',
    'about.ch3_label': 'Chapitre III',
    'about.ch3_title': 'La Démarche Artistique',

    // About — Artistic approach
    'about.gesture_title': 'Le Geste — Un atelier nomade',
    'about.gesture_text':  'L\'atelier d\'Eric ROY est partout où il pose ses pinceaux. Nomade par essence, il a fait de cette liberté géographique une richesse formelle. La peinture commence dans le corps avant de naître sur la toile — chaque coup de pinceau, chaque strate de matière porte la trace d\'un instant vécu, d\'une émotion capturée dans sa fraîcheur, avant que l\'intellect ne puisse la nommer ou l\'arrondir.',
    'about.matter_title':  'La Matière — Des textures uniques',
    'about.matter_text':   'Huile, acrylique, pigments bruts, matières texturées — Eric ROY convoque les médiums sans hiérarchie, selon ce que l\'œuvre appelle. Ses compositions jouent sur l\'épaisseur, la rugosité, la transparence. Chaque format est choisi pour l\'œuvre, non par convention : des toiles carrées monumentales aux formats allongés inhabituels, les dimensions participent du sens. C\'est dans le dialogue imprévu entre matières et supports que naissent les textures profondes qui donnent aux tableaux leur présence physique irrésistible.',
    'about.color_title':   'La Couleur — L\'orange comme signature',
    'about.color_text':    'La couleur, chez Eric ROY, n\'est jamais ornementale. Elle est l\'émotion elle-même. L\'orange — sa couleur fétiche, héritée des lumières américaines — surgit rarement en premier dans la composition. Il apparaît comme une révélation : ponctuation lumineuse au cœur d\'un univers chromatique complexe, chaleureux et presque insolent, irréductible. Il dit ce que le reste de la toile tait. Il est la voix de l\'artiste dans le silence de la peinture.',

    // About — Exhibitions
    'about.exh_subtitle': 'Parcours International',
    'about.exh_title':    'Expositions & Collections',
    'about.exh_desc':     'Une présence artistique qui s\'étend de la France aux États-Unis et au Canada, avec des œuvres dans des collections privées sur trois continents.',
    'about.exh1_name':    '« Abstractions Trans-Atlantiques »',
    'about.exh1_place':   'Galerie du Confluent, Lyon — France',
    'about.exh2_name':    '« Orange Horizon » — Solo Show',
    'about.exh2_place':   'Contemporary Art Space, San Francisco — États-Unis',
    'about.exh3_name':    'Art Vancouver — Exposition collective',
    'about.exh3_place':   'Vancouver Convention Centre — Canada',
    'about.exh4_name':    '« Couleur Sans Frontière » — Exposition personnelle',
    'about.exh4_place':   'Galerie Treize-Dix, Paris — France',
    'about.exh5_name':    'Saga — Salon des Galeries d\'Art',
    'about.exh5_place':   'Grand Palais Éphémère, Paris — France',

    // About — CTA
    'about.cta_label': 'Restons en contact',
    'about.cta_title': 'Une commande, une question,<br>une simple envie d\'échanger ?',
    'about.cta_desc':  'Depuis les États-Unis, le Canada ou la France, Eric ROY répond personnellement à chaque message. Pas d\'intermédiaire — l\'artiste, directement, à votre écoute.',
    'about.cta_btn':   'Écrire à Eric ROY',

    // Gallery — Header
    'gallery.subtitle':  'Collection Originale',
    'gallery.title':     'Galerie des Œuvres',
    'gallery.hero_desc': 'Des toiles nées entre les États-Unis et le Canada, imprégnées des lumières et des espaces d\'un continent entier. Chaque œuvre est unique.',

    // Gallery — Techniques
    'gallery.fusion3_tech':  'Huile et acrylique sur toile',
    'gallery.silence_tech':  'Techniques mixtes sur toile',
    'gallery.light_tech':    'Acrylique et pigments sur toile',
    'gallery.horizons_tech': 'Huile sur toile de lin',
    'gallery.pacific_tech':  'Techniques mixtes sur toile',
    'gallery.solstice_tech': 'Huile et pigments sur toile',
    'gallery.blue_tech':     'Acrylique sur toile',
    'gallery.braise_tech':   'Huile sur toile',
    'gallery.fusion1_tech':  'Huile et acrylique sur toile',

    // Gallery — Custom
    'gallery.custom_subtitle': 'Commandes',
    'gallery.custom_title':    'Vous ne trouvez pas exactement ce que vous cherchez ?',
    'gallery.custom_desc':     'Eric ROY crée des <strong style="font-weight:var(--weight-medium); color:var(--color-text-primary);">tableaux sur mesure</strong> pour des collectionneurs privés et des entreprises en France, aux États-Unis et au Canada. Dimensions, palette, intention — chaque aspect de l\'œuvre peut être pensé ensemble, pour un résultat qui vous appartient pleinement.',
    'gallery.custom_btn1':     'Commander une œuvre sur mesure',
    'gallery.custom_btn2':     'Découvrir la démarche',

    // Gallery — CTA
    'gallery.cta_label': 'Acquisition',
    'gallery.cta_title': 'Une toile vous parle ?<br>Elle peut être vôtre.',
    'gallery.cta_desc':  'Chaque œuvre est unique. Pour les disponibilités, les tarifs et les conditions d\'expédition vers la France, les États-Unis ou le Canada, contactez Eric ROY directement.',
    'gallery.cta_btn':   'Demander un renseignement',

    // Contact — Header
    'contact.subtitle':  'Contact & Commandes',
    'contact.title':     'Créons Ensemble',
    'contact.hero_desc': 'Collectionneur en France, acheteur aux États-Unis ou au Canada, architecte, entreprise ou simple amateur d\'art — chaque message est lu et répondu personnellement par Eric ROY.',

    // Contact — Info
    'contact.info_title':   'Entrons en contact',
    'contact.info_text':    'Que vous souhaitiez acquérir une œuvre, passer une commande sur mesure, proposer une exposition ou simplement partager votre émotion face à une toile — je vous répondrai personnellement, depuis les États-Unis, le Canada ou la France, généralement sous 48 heures.',
    'contact.label_studio': 'Atelier nomade',
    'contact.studio_val':   'États-Unis & Canada',
    'contact.studio_sub':   'En tournée permanente entre les deux pays',
    'contact.label_delivery':'Livraison',
    'contact.delivery_val': 'France, États-Unis, Canada<br>& international sur demande',

    // Contact — Form
    'contact.success_msg':          'Merci pour votre message. Eric ROY vous répondra personnellement dans les 48 heures.',
    'contact.sending':              'Envoi en cours…',
    'contact.label_name':           'Nom',
    'contact.placeholder_name':     'Votre nom',
    'contact.error_name':           'Veuillez indiquer votre nom.',
    'contact.label_email':          'Email',
    'contact.error_email':          'Veuillez saisir un email valide.',
    'contact.label_country':        'Pays',
    'contact.opt_country_default':  'Votre pays…',
    'contact.opt_other':            'Autre',
    'contact.label_subject':        'Type de demande',
    'contact.opt_subject_default':  'Choisir un sujet…',
    'contact.opt_acquisition':      'Acquisition d\'une œuvre existante',
    'contact.opt_custom_private':   'Tableau sur mesure — Particulier',
    'contact.opt_custom_corporate': 'Tableau sur mesure — Entreprise',
    'contact.opt_architect':        'Projet d\'architecte / Designer d\'intérieur',
    'contact.opt_expo':             'Proposition d\'exposition',
    'contact.opt_press':            'Presse & Médias',
    'contact.opt_other2':           'Autre',
    'contact.label_message':        'Message',
    'contact.placeholder_message':  'Décrivez votre projet, l\'œuvre qui vous a touché, les dimensions souhaitées, votre espace… Plus vous êtes précis, plus Eric ROY pourra vous répondre avec pertinence.',
    'contact.error_message':        'Veuillez saisir votre message.',
    'contact.rgpd':         'J\'accepte que mes données soient utilisées pour répondre à ma demande, conformément à la <a href="/mentions-legales.html" style="color:var(--color-accent);">politique de confidentialité</a>. <span aria-label="champ obligatoire">*</span>',
    'contact.submit_btn':   'Envoyer le message',
    'contact.required_note':'* Champs obligatoires — Réponse personnelle d\'Eric ROY sous 48 h',

    // Legal
    'legal.subtitle':       'Informations légales',
    'legal.title':          'Mentions légales',
    'legal.editor_title':   'Éditeur du site',
    'legal.editor_text':    'Ce site est édité par Eric ROY, artiste peintre, personne physique.<br>Contact : <a href="/contact.html" style="color:var(--color-accent);">via le formulaire de contact</a>',
    'legal.host_title':     'Hébergeur',
    'legal.host_text':      'Railway Technologies, Inc.<br>340 S Lemon Ave #4133, Walnut, CA 91789 — États-Unis<br><a href="https://railway.app" target="_blank" rel="noopener noreferrer" style="color:var(--color-accent);">railway.app</a>',
    'legal.ip_title':       'Propriété intellectuelle',
    'legal.ip_text':        'L\'ensemble des œuvres, images et contenus présents sur ce site sont la propriété exclusive d\'Eric ROY et sont protégés par le droit d\'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite de l\'auteur.',
    'legal.liability_title':'Responsabilité',
    'legal.liability_text': 'Eric ROY s\'efforce de maintenir les informations de ce site à jour et exactes. Il ne saurait être tenu responsable des erreurs ou omissions, ni des dommages résultant de l\'utilisation de ce site.',
  },

  en: {
    // Navigation
    'nav.home':    'Home',
    'nav.gallery': 'Gallery',
    'nav.about':   'About',
    'nav.contact': 'Contact',

    // Footer
    'footer.tagline':    'Franco-American abstract painter.<br>A unique abstract art, born between<br>two continents.',
    'footer.nav_col':    'Navigation',
    'footer.orders_col': 'Commissions & Projects',
    'footer.acquire':    'Acquire a Work',
    'footer.custom':     'Custom Painting',
    'footer.corporate':  'Corporate Projects',
    'footer.architects': 'Architects & Designers',
    'footer.legal':      'Legal Notice',
    'footer.copyright':  '© 2026 Eric ROY — France · United States · Canada — All rights reserved',
    'footer.dev':        'Website developed by Mélanie ROY',

    // Index — Hero
    'index.hero_eyebrow':    'Franco-American Painter',
    'index.hero_title':      'From France<br>to America, <em>abstraction</em><br>as the only homeland',
    'index.hero_desc':       'Raised in France, captivated by the vastness of the American continent, Eric ROY creates abstract works between the United States and Canada that transcend boundaries — geographic and emotional.',
    'index.hero_btn_gallery':'Discover the Works',
    'index.hero_btn_about':  'The Artist\'s Story',

    // Index — Intro
    'index.intro_subtitle': 'An Art Born Between Two Worlds',
    'index.intro_quote':    '"I paint from two continents, but my canvases have no passport — they belong to those who feel them."',
    'index.intro_p1':       'Trained in France, Eric ROY crossed the Atlantic to let the vastness of North America transform his vision and his gesture. He now travels permanently between the United States and Canada, drawing from this creative nomadism a rare pictorial energy. In his canvases, textures accumulate like layers of memory, and colors vibrate with the intensity of emotions traversed — orange, his signature color, always appearing as a revelation at the heart of the composition.',
    'index.intro_btn_bio':  'Read the Biography',
    'index.stat1_label':    'Continents<br>Europe & North America',
    'index.stat2_label':    'Years<br>of abstract creation',

    // Index — Works
    'index.works_subtitle':  'Creations',
    'index.works_title':     'Selected Works',
    'index.works_desc':      'Born between the United States and Canada, these canvases bear witness to a free and inhabited gesture — an abstraction with no fixed territory, save for color.',
    'index.card1_technique': 'Custom Painting',
    'index.card2_technique': 'Abstract Work',
    'index.card3_technique': 'Custom Painting',
    'index.card4_technique': 'Abstract Work',
    'index.works_all':       'See All Works',

    // Index — CTA
    'index.cta_label': 'Collaboration & Acquisition',
    'index.cta_title': 'A work moves you?<br>A commission inspires you?',
    'index.cta_desc':  'Whether you are a collector in France, the United States or Canada, a company seeking an exceptional creation, or an architect envisioning a space — Eric ROY will respond to you personally.',
    'index.cta_btn':   'Get in Touch',

    // About — Header
    'about.subtitle':  'Biography',
    'about.title':     'The Story of Eric ROY',
    'about.hero_desc': 'From France to the United States, from Canada to collections worldwide — a life in motion in the service of a borderless painting.',

    // About — Portrait
    'about.caption': 'Eric ROY — France, 2025',
    'about.lead':    '"Painting is the only territory where I don\'t need a passport. Every canvas is an erased border."',
    'about.p1':      'A French painter, Eric ROY has dedicated his life to abstract art for more than twenty years. Born in France, based in the United States, perpetually moving between the United States and Canada, he has turned nomadism not into a constraint but into the very engine of his creation.',
    'about.p2':      'His pictorial world is one of intense and inhabited abstraction — deep textures, colors pushed to incandescence, compositions where vibrant orange emerges as the signature of a soul that has crossed continents. Every canvas is unique, never reproduced, and destined for those who seek in art something words cannot reach.',

    // About — Chapters
    'about.ch1_label': 'Chapter I',
    'about.ch1_title': 'The Roots',
    'about.ch1_p1':    'It is in France that Eric ROY traces the first lines of his artistic life. Immersed in a culture where painting is as natural a language as speech, he develops from adolescence a keen sensitivity to color, light and matter. The landscapes of France — their southern softness, their seasonal contrasts, the changing palette of their skies — permeate his first pictorial explorations like an undercoat never entirely covered.',
    'about.ch1_p2':    'These years of training lay the foundation. The rigor of gesture. The love of large formats. The deeply held conviction that abstraction can say what figuration can only approach — that the truth of an emotion lies not in the representation of the world, but in the vibration that world provokes in us.',
    'about.ch1_p3':    'France gives him his foundations. What he still lacks is the shaking. The space. The immensity.',
    'about.ch2_label': 'Chapter II',
    'about.ch2_title': 'The American Dream & the North American Drive',
    'about.ch2_p1':    'Then comes the departure. The shock of America. The immensity of open spaces, the light at once brutal and generous, the permanent mixing of cultures, the electric energy of great American cities. Eric ROY settles in the United States and experiences a creative revelation.',
    'about.ch2_p2':    'His brush races. His formats grow. His palette intensifies, sheds its last hesitations. Orange asserts itself with a new force — the color of dawn over deserts, of urban neons piercing the night, of the incandescence inherent in the American dream. It is no longer one color among others: it is a signature, an anchor in the identity of an artist who has definitively crossed the Atlantic.',
    'about.ch2_p3':    'Today, his artistic life unfolds between two countries: the United States and Canada. He navigates between the two with the freedom of an artist who understands that geography nourishes the work. The light of the East Coast, the infinite horizons of the Canadian Prairies, the cultural density of New York and the serenity of the great northern spaces — all of this enters his canvases, not as a subject, but as energy.',
    'about.ch2_p4':    'This nomadism is not wandering. It is a method. It is in perpetual movement that he finds the state of grace that precedes each new creation.',
    'about.ch3_label': 'Chapter III',
    'about.ch3_title': 'The Artistic Approach',

    // About — Artistic approach
    'about.gesture_title': 'The Gesture — A nomadic studio',
    'about.gesture_text':  'Eric ROY\'s studio is wherever he sets his brushes. Nomadic by nature, he has turned this geographic freedom into a formal richness. Painting begins in the body before it is born on the canvas — each brushstroke, each layer of material carries the trace of a lived moment, an emotion captured in its freshness, before the intellect can name or smooth it.',
    'about.matter_title':  'The Matter — Unique textures',
    'about.matter_text':   'Oil, acrylic, raw pigments, textured materials — Eric ROY summons mediums without hierarchy, according to what the work demands. His compositions play on thickness, roughness, transparency. Each format is chosen for the work, not by convention: from monumental square canvases to unusual elongated formats, dimensions participate in meaning. It is in the unexpected dialogue between materials and supports that the deep textures are born which give the paintings their irresistible physical presence.',
    'about.color_title':   'The Color — Orange as signature',
    'about.color_text':    'Color, for Eric ROY, is never ornamental. It is the emotion itself. Orange — his signature color, inherited from the American lights — rarely appears first in the composition. It emerges as a revelation: a luminous punctuation at the heart of a complex chromatic universe, warm and almost insolent, irreducible. It says what the rest of the canvas is silent about. It is the voice of the artist in the silence of the painting.',

    // About — Exhibitions
    'about.exh_subtitle': 'International Journey',
    'about.exh_title':    'Exhibitions & Collections',
    'about.exh_desc':     'An artistic presence extending from France to the United States and Canada, with works in private collections on three continents.',
    'about.exh1_name':    '« Trans-Atlantic Abstractions »',
    'about.exh1_place':   'Galerie du Confluent, Lyon — France',
    'about.exh2_name':    '« Orange Horizon » — Solo Show',
    'about.exh2_place':   'Contemporary Art Space, San Francisco — United States',
    'about.exh3_name':    'Art Vancouver — Group Exhibition',
    'about.exh3_place':   'Vancouver Convention Centre — Canada',
    'about.exh4_name':    '« Color Without Borders » — Solo Exhibition',
    'about.exh4_place':   'Galerie Treize-Dix, Paris — France',
    'about.exh5_name':    'Saga — Art Galleries Fair',
    'about.exh5_place':   'Grand Palais Éphémère, Paris — France',

    // About — CTA
    'about.cta_label': 'Stay in Touch',
    'about.cta_title': 'A commission, a question,<br>a simple desire to connect?',
    'about.cta_desc':  'From the United States, Canada or France, Eric ROY responds personally to every message. No intermediary — the artist, directly, listening to you.',
    'about.cta_btn':   'Write to Eric ROY',

    // Gallery — Header
    'gallery.subtitle':  'Original Collection',
    'gallery.title':     'Gallery of Works',
    'gallery.hero_desc': 'Canvases born between the United States and Canada, steeped in the light and spaces of an entire continent. Each work is unique.',

    // Gallery — Techniques
    'gallery.fusion3_tech':  'Oil and acrylic on canvas',
    'gallery.silence_tech':  'Mixed media on canvas',
    'gallery.light_tech':    'Acrylic and pigments on canvas',
    'gallery.horizons_tech': 'Oil on linen canvas',
    'gallery.pacific_tech':  'Mixed media on canvas',
    'gallery.solstice_tech': 'Oil and pigments on canvas',
    'gallery.blue_tech':     'Acrylic on canvas',
    'gallery.braise_tech':   'Oil on canvas',
    'gallery.fusion1_tech':  'Oil and acrylic on canvas',

    // Gallery — Custom
    'gallery.custom_subtitle': 'Commissions',
    'gallery.custom_title':    'Can\'t find exactly what you\'re looking for?',
    'gallery.custom_desc':     'Eric ROY creates <strong style="font-weight:var(--weight-medium); color:var(--color-text-primary);">custom paintings</strong> for private collectors and businesses in France, the United States and Canada. Dimensions, palette, intent — every aspect of the work can be considered together, for a result that is entirely yours.',
    'gallery.custom_btn1':     'Commission a Custom Work',
    'gallery.custom_btn2':     'Discover the Approach',

    // Gallery — CTA
    'gallery.cta_label': 'Acquisition',
    'gallery.cta_title': 'A canvas speaks to you?<br>It can be yours.',
    'gallery.cta_desc':  'Each work is unique. For availability, pricing and shipping conditions to France, the United States or Canada, contact Eric ROY directly.',
    'gallery.cta_btn':   'Request Information',

    // Contact — Header
    'contact.subtitle':  'Contact & Commissions',
    'contact.title':     'Let\'s Create Together',
    'contact.hero_desc': 'Collector in France, buyer in the United States or Canada, architect, business or art lover — every message is read and answered personally by Eric ROY.',

    // Contact — Info
    'contact.info_title':    'Let\'s Connect',
    'contact.info_text':     'Whether you wish to acquire a work, place a custom order, propose an exhibition or simply share your emotion before a canvas — I will respond to you personally, from the United States, Canada or France, usually within 48 hours.',
    'contact.label_studio':  'Nomadic Studio',
    'contact.studio_val':    'United States & Canada',
    'contact.studio_sub':    'Permanently traveling between both countries',
    'contact.label_delivery':'Shipping',
    'contact.delivery_val':  'France, United States, Canada<br>& international on request',

    // Contact — Form
    'contact.success_msg':          'Thank you for your message. Eric ROY will respond to you personally within 48 hours.',
    'contact.sending':              'Sending…',
    'contact.label_name':           'Name',
    'contact.placeholder_name':     'Your name',
    'contact.error_name':           'Please enter your name.',
    'contact.label_email':          'Email',
    'contact.error_email':          'Please enter a valid email.',
    'contact.label_country':        'Country',
    'contact.opt_country_default':  'Your country…',
    'contact.opt_other':            'Other',
    'contact.label_subject':        'Type of request',
    'contact.opt_subject_default':  'Choose a subject…',
    'contact.opt_acquisition':      'Acquisition of an existing work',
    'contact.opt_custom_private':   'Custom painting — Individual',
    'contact.opt_custom_corporate': 'Custom painting — Business',
    'contact.opt_architect':        'Architect / Interior Designer project',
    'contact.opt_expo':             'Exhibition proposal',
    'contact.opt_press':            'Press & Media',
    'contact.opt_other2':           'Other',
    'contact.label_message':        'Message',
    'contact.placeholder_message':  'Describe your project, the work that moved you, desired dimensions, your space… The more specific you are, the better Eric ROY can respond.',
    'contact.error_message':        'Please enter your message.',
    'contact.rgpd':         'I agree that my data may be used to respond to my request, in accordance with the <a href="/mentions-legales.html" style="color:var(--color-accent);">privacy policy</a>. <span aria-label="required field">*</span>',
    'contact.submit_btn':   'Send Message',
    'contact.required_note':'* Required fields — Personal reply from Eric ROY within 48 h',

    // Legal
    'legal.subtitle':       'Legal Information',
    'legal.title':          'Legal Notice',
    'legal.editor_title':   'Website Publisher',
    'legal.editor_text':    'This website is published by Eric ROY, painter, individual person.<br>Contact: <a href="/contact.html" style="color:var(--color-accent);">via the contact form</a>',
    'legal.host_title':     'Hosting Provider',
    'legal.host_text':      'Railway Technologies, Inc.<br>340 S Lemon Ave #4133, Walnut, CA 91789 — United States<br><a href="https://railway.app" target="_blank" rel="noopener noreferrer" style="color:var(--color-accent);">railway.app</a>',
    'legal.ip_title':       'Intellectual Property',
    'legal.ip_text':        'All works, images and content on this site are the exclusive property of Eric ROY and are protected by copyright. Any reproduction, even partial, is prohibited without prior written authorization from the author.',
    'legal.liability_title':'Liability',
    'legal.liability_text': 'Eric ROY strives to keep the information on this site up to date and accurate. He shall not be held responsible for errors or omissions, nor for damages resulting from the use of this site.',
  },
};


/* ============================================================
   MOTEUR DE TRADUCTION
   ============================================================ */
const I18N = {
  currentLang: 'fr',

  init() {
    this.currentLang = localStorage.getItem('eric-roy-lang') || 'fr';
    document.documentElement.lang = this.currentLang;
    this.apply();
    this._bindToggle();
  },

  setLang(lang) {
    if (lang !== 'fr' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem('eric-roy-lang', lang);
    document.documentElement.lang = lang;
    this.apply();
    this._updateToggleUI();
  },

  t(key) {
    return TRANSLATIONS[this.currentLang]?.[key] ?? TRANSLATIONS.fr[key] ?? key;
  },

  apply() {
    /* Contenu texte simple */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = this.t(el.dataset.i18n);
    });

    /* Contenu HTML (balises <br>, <em>, <strong>, <a>…) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.dataset.i18nHtml);
    });

    /* Attribut placeholder */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.dataset.i18nPlaceholder);
    });

    this._updateToggleUI();
  },

  _bindToggle() {
    const toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      this.setLang(this.currentLang === 'fr' ? 'en' : 'fr');
    });
  },

  _updateToggleUI() {
    document.querySelectorAll('.lang-opt').forEach(opt => {
      opt.classList.toggle('is-active', opt.dataset.lang === this.currentLang);
    });
  },
};
