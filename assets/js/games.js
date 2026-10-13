/*
  LISTA DE JUEGOS — este es el único archivo que necesitas editar para agregar, cambiar o quitar juegos.

  Para agregar un juego, copia uno de los bloques de abajo (desde { hasta },) y cambia los valores:
    id          único, en minúsculas y sin espacios (se usa en el link de la página y en la carpeta de fotos)
    name        nombre que aparece en el menú
    aka         (opcional) otro nombre con el que la gente lo conoce; también se puede buscar
    tagline     una frase corta que aparece en la tarjeta
    players     { min, max } número de jugadores
    time        { min, max } minutos por partida
    age         edad mínima recomendada
    difficulty  1 = Ligero, 2 = Medio, 3 = Complejo
    tags        algunas palabras que describen el juego
    description un párrafo corto
    howToPlay   3 a 5 puntos muy breves para que la gente entienda la idea
    requiresEnglish  (opcional) true si hace falta saber inglés para jugar; muestra un aviso
    images      rutas de las fotos; pon las fotos en assets/img/games/<id>/
                (la primera se usa en la tarjeta del menú). Si falta una
                foto, se muestra una imagen provisional.
                Para dar crédito al autor de una foto, en lugar de solo la ruta escribe:
                  { src: "assets/img/games/<id>/1.jpg", credit: "usuario / BoardGameGeek",
                    link: "https://boardgamegeek.com/image/..." }
                (link es opcional). Debajo de la foto aparece "Foto: usuario / BoardGameGeek".
*/
window.GAMES = [
  {
    id: "king-of-tokyo",
    name: "King of Tokyo",
    tagline: "Monstruos gigantes se pelean por dominar Tokio.",
    players: { min: 2, max: 6 },
    time: { min: 30, max: 30 },
    age: 8,
    difficulty: 1,
    tags: ["Dados", "Party", "Ataque directo"],
    description:
      "Eres un monstruo gigante: un lagarto mutante, un robot, un pingüino espacial… Tira los dados para ganar energía, curarte, sumar puntos o atacar. El monstruo que está en Tokio le pega a todos los demás, pero todos le pegan a él. ¿Te quedas a sumar puntos o huyes antes de que te noqueen?",
    howToPlay: [
      "En tu turno tira 6 dados y vuelve a tirar los que quieras hasta dos veces más.",
      "Los números dan puntos de victoria, las garras atacan, los corazones curan y los rayos dan energía.",
      "Gasta energía en cartas de poder que le dan habilidades especiales a tu monstruo.",
      "Gana el primero en llegar a 20 puntos o el último monstruo en pie."
    ],
    images: [
      "assets/img/games/king-of-tokyo/1.webp",
      {
        src: "assets/img/games/king-of-tokyo/2.webp",
        credit: "SKirkham1967A / BoardGameGeek",
        link: "https://boardgamegeek.com/image/1107451/king-of-tokyo"
      },
      {
        src: "assets/img/games/king-of-tokyo/3.webp",
        credit: "BoardGameBeacon / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3633411/king-of-tokyo"
      }
    ]
  },
  {
    id: "love-letter",
    name: "Love Letter",
    tagline: "Haz llegar tu carta a la princesa con solo 16 cartas.",
    players: { min: 2, max: 4 },
    time: { min: 20, max: 20 },
    age: 10,
    difficulty: 1,
    tags: ["Cartas", "Deducción", "Faroleo"],
    description:
      "Todos intentan que su carta de amor llegue a la princesa a través de la gente que la rodea: guardias, sacerdotes, barones, doncellas… Solo tienes una o dos cartas en la mano, así que cada ronda es rápida, tensa y llena de intentos por adivinar qué tienen los demás. Cabe en el bolsillo y se aprende en dos minutos.",
    howToPlay: [
      "Tienes una carta. En tu turno roba una segunda y juega una de las dos.",
      "Cada carta tiene un efecto: adivinar la carta de alguien, comparar manos, protegerte…",
      "Si te eliminan, quedas fuera de esa ronda.",
      "Gana la ronda el último jugador que quede, o quien tenga la carta más alta al final."
    ],
    images: [
      {
        src: "assets/img/games/love-letter/1.jpg",
        credit: "edbolme / BoardGameGeek",
        link: "https://boardgamegeek.com/image/1401448/love-letter"
      },
      {
        src: "assets/img/games/love-letter/2.jpg",
        credit: "samblake / BoardGameGeek",
        link: "https://boardgamegeek.com/image/2572616/love-letter"
      },
      {
        src: "assets/img/games/love-letter/3.jpg",
        credit: "Cade_One / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3001112/love-letter"
      }
    ]
  },
  {
    id: "century-golem",
    name: "Century: Golem Edition",
    tagline: "Intercambia cristales de colores para construir gólems poderosos.",
    players: { min: 2, max: 5 },
    time: { min: 30, max: 45 },
    age: 8,
    difficulty: 3,
    tags: ["Construcción de motor", "Intercambio", "Colecciones"],
    description:
      "Son comerciantes en un mundo de fantasía que juntan y mejoran cristales mágicos para construir gólems. En cada turno agregas una carta a tu mano o juegas una para convertir cristales en otros mejores. Con el tiempo tus cartas se combinan como una pequeña máquina. Fácil de aprender pero premia la planeación, y se ve increíble en la mesa.",
    howToPlay: [
      "En tu turno haz UNA cosa: jugar una carta, tomar una carta nueva, descansar (recuperar tus cartas) o construir un gólem.",
      "Las cartas te dan cristales o te permiten mejorarlos e intercambiarlos.",
      "Construye gólems pagando los cristales que muestran. Los gólems te dan puntos.",
      "El juego termina cuando alguien construye su 5.º gólem (6.º con 2–3 jugadores). Gana quien tenga más puntos."
    ],
    images: [
      "assets/img/games/century-golem/1.webp",
      {
        src: "assets/img/games/century-golem/2.webp",
        credit: "jipipu / BoardGameGeek",
        link: "https://boardgamegeek.com/image/4189479/century-golem-edition"
      },
      {
        src: "assets/img/games/century-golem/3.webp",
        credit: "Nicsnake / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3696204/century-golem-edition"
      }
    ]
  },
  {
    id: "tokyo-highway-rainbow-city",
    name: "Tokyo Highway: Rainbow City",
    tagline: "Construye autopistas de colores sin que se te caiga la ciudad.",
    players: { min: 2, max: 4 },
    time: { min: 30, max: 50 },
    age: 8,
    difficulty: 1,
    tags: ["Destreza", "Equilibrio", "Construcción"],
    description:
      "Cada jugador construye su propia autopista elevada sobre la mesa usando columnas y tramos de carretera, entre edificios, un aeropuerto, una torre y áreas verdes. Cada vez que tu carretera pasa por encima o por debajo de la de otro jugador, pones uno de tus coches. Se necesita pulso firme y buena vista para construir sin tirar nada. Se ve espectacular en la mesa y funciona con todo tipo de grupos.",
    howToPlay: [
      "En tu turno agrega un tramo nuevo al final de tu autopista, sobre una columna nueva.",
      "Cada columna nueva debe tener una pieza más o una menos que la anterior.",
      "Si tu tramo cruza por encima o por debajo de la autopista de otro jugador, coloca un coche sobre él.",
      "Si se te acaba el material quedas fuera. Gana quien coloque todos sus coches primero o el último que quede en juego."
    ],
    images: [
      {
        src: "assets/img/games/tokyo-highway-rainbow-city/1.jpg",
        credit: "merc007 / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7974364/tokyo-highway-rainbow-city"
      },
      {
        src: "assets/img/games/tokyo-highway-rainbow-city/2.jpg",
        credit: "emunowak / BoardGameGeek",
        link: "https://boardgamegeek.com/image/8505286/tokyo-highway-rainbow-city"
      },
      {
        src: "assets/img/games/tokyo-highway-rainbow-city/3.jpg",
        credit: "Vinidrums / BoardGameGeek",
        link: "https://boardgamegeek.com/image/9179860/tokyo-highway-rainbow-city"
      }
    ]
  },
  {
    id: "onitama",
    name: "Onitama",
    tagline: "Un duelo de artes marciales, como un ajedrez rápido.",
    players: { min: 2, max: 2 },
    time: { min: 15, max: 20 },
    age: 10,
    difficulty: 1,
    tags: ["Estrategia", "Abstracto", "Duelo"],
    description:
      "Dos maestros de artes marciales se enfrentan con sus alumnos en un tablero de 5×5. Los movimientos no dependen de la pieza sino de las cartas: cada jugador tiene dos cartas que muestran cómo puede moverse, y la carta que usas pasa luego a tu rival. No hay suerte durante la partida, solo leer bien lo que puede hacer el otro. Se aprende en cinco minutos y las partidas son cortas, así que siempre se juega la revancha.",
    howToPlay: [
      "Cada jugador tiene 5 piezas: su maestro en el centro y 4 alumnos. Hay 5 cartas en juego: 2 para cada uno y 1 a un lado.",
      "En tu turno elige una de tus cartas y mueve cualquiera de tus piezas según el dibujo de la carta.",
      "La carta que usaste va al lado del tablero y tomas la que estaba ahí; así tu rival la recibirá después.",
      "Si caes en una pieza rival, la capturas. Ganas si capturas al maestro rival o si llevas tu maestro a la casilla de inicio del maestro rival."
    ],
    images: [
      {
        src: "assets/img/games/onitama/1.jpg",
        credit: "tziotas / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7070194/onitama"
      },
      {
        src: "assets/img/games/onitama/2.jpg",
        credit: "Jormi_Boced / BoardGameGeek",
        link: "https://boardgamegeek.com/image/4818681/onitama"
      },
      {
        src: "assets/img/games/onitama/3.jpg",
        credit: "sverbeure / BoardGameGeek",
        link: "https://boardgamegeek.com/image/4161102/onitama"
      }
    ]
  },
  {
    id: "the-fox-in-the-forest",
    name: "The Fox in the Forest",
    tagline: "Un juego de bazas de cuento de hadas para dos.",
    players: { min: 2, max: 2 },
    time: { min: 30, max: 30 },
    age: 10,
    difficulty: 2,
    requiresEnglish: true,
    tags: ["Cartas", "Bazas", "Cuento de hadas"],
    description:
      "Un duelo de cartas en un bosque de cuento, con zorros, brujas, cisnes y monarcas. Cada mano gana quien juega la carta más fuerte, pero aquí no gana quien se lleva más manos: si te pones codicioso y ganas demasiadas, caes como el villano de los cuentos. Las cartas impares tienen poderes especiales que cambian todo. Rápido, ingenioso e ideal para parejas.",
    howToPlay: [
      "Cada jugador recibe 13 cartas y se voltea una carta que marca el palo de triunfo.",
      "Quien abre juega una carta y el otro debe jugar del mismo palo si puede. Gana la mano la carta más alta del palo inicial, o la de triunfo más alta.",
      "Las cartas con número impar tienen habilidades especiales: cambiar el triunfo, robar cartas, abrir aunque pierdas…",
      "Al final de la ronda ganas puntos según cuántas manos ganaste, pero si ganas demasiadas no sumas nada. Gana quien llegue primero a 21 puntos."
    ],
    images: [
      {
        src: "assets/img/games/the-fox-in-the-forest/1.jpg",
        credit: "W Eric Martin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3496085/the-fox-in-the-forest"
      },
      {
        src: "assets/img/games/the-fox-in-the-forest/2.jpg",
        credit: "Schwarzsturm / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3778261/the-fox-in-the-forest"
      },
      {
        src: "assets/img/games/the-fox-in-the-forest/3.jpg",
        credit: "Whodini24 / BoardGameGeek",
        link: "https://boardgamegeek.com/image/5411241/the-fox-in-the-forest"
      }
    ]
  },
  {
    id: "dixit-odyssey",
    name: "Dixit Odyssey",
    tagline: "Cuenta historias con cartas ilustradas como sueños.",
    players: { min: 3, max: 12 },
    time: { min: 30, max: 30 },
    age: 8,
    difficulty: 1,
    tags: ["Party", "Imaginación", "Grupos grandes"],
    description:
      "Cada carta es una ilustración surrealista y preciosa. En cada turno alguien da una pista sobre una de sus cartas: una palabra, una frase, una canción… Los demás eligen la carta de su mano que mejor encaja y luego todos votan cuál era la original. El truco es dar una pista ni muy obvia ni muy rara. Perfecto para grupos grandes, para gente que nunca ha jugado juegos de mesa y para reírse mucho.",
    howToPlay: [
      "En tu turno eres el narrador: elige en secreto una carta de tu mano y di una pista sobre ella.",
      "Cada jugador escoge la carta de su mano que mejor encaja con la pista y se la da al narrador, boca abajo.",
      "El narrador mezcla las cartas, las muestra y todos votan cuál creen que era la suya.",
      "Si todos o nadie adivinan, el narrador no gana puntos. Si solo algunos aciertan, ganan ellos y el narrador. Además ganas un punto por cada voto que reciba tu carta. Gana quien tenga más puntos al acabarse el mazo."
    ],
    images: [
      {
        src: "assets/img/games/dixit-odyssey/1.jpg",
        credit: "W Eric Martin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/918568/dixit-odyssey"
      },
      {
        src: "assets/img/games/dixit-odyssey/2.jpg",
        credit: "CtpUK / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3386422/dixit-odyssey"
      },
      {
        src: "assets/img/games/dixit-odyssey/3.jpg",
        credit: "Valppa / BoardGameGeek",
        link: "https://boardgamegeek.com/image/4005742/dixit-odyssey"
      }
    ]
  },
  {
    id: "codenames",
    name: "Código Secreto",
    aka: "Codenames",
    tagline: "Dos equipos de espías y una sola palabra como pista.",
    players: { min: 4, max: 8 },
    time: { min: 15, max: 15 },
    age: 10,
    difficulty: 1,
    tags: ["Party", "Palabras", "Equipos"],
    description:
      "Sobre la mesa hay 25 palabras y cada una es el nombre clave de un agente secreto. Solo los jefes de espías saben cuáles son de su equipo. Con una sola palabra y un número tienen que hacer que sus compañeros adivinen sus agentes… sin que toquen al asesino. Las partidas son cortas, los debates entre compañeros son lo mejor, y funciona igual de bien con gente que juega mucho que con quien nunca ha jugado.",
    howToPlay: [
      "Formen dos equipos (rojo y azul). Cada equipo elige a un jefe de espías; se colocan 25 cartas con palabras sobre la mesa.",
      "Los jefes ven una tarjeta secreta que indica qué palabras son de cada equipo, cuáles son civiles y cuál es el asesino.",
      "En su turno, el jefe da UNA palabra y un número (por ejemplo «fruta, 2»); su equipo toca las palabras que cree que son suyas.",
      "Si tocan una palabra rival o un civil, se acaba su turno; si tocan al asesino, pierden. Gana el primer equipo en encontrar a todos sus agentes."
    ],
    images: [
      {
        src: "assets/img/games/codenames/1.jpg",
        credit: "Chotacabras / BoardGameGeek",
        link: "https://boardgamegeek.com/image/8816973/codenames"
      },
      {
        src: "assets/img/games/codenames/2.jpg",
        credit: "boardgamersteph / BoardGameGeek",
        link: "https://boardgamegeek.com/image/2620784/codenames"
      },
      {
        src: "assets/img/games/codenames/3.jpg",
        credit: "bkunes / BoardGameGeek",
        link: "https://boardgamegeek.com/image/2770486/codenames"
      }
    ]
  },
  {
    id: "hues-and-cues",
    name: "Hues and Cues",
    tagline: "Adivina el color exacto con solo una o dos palabras.",
    players: { min: 3, max: 10 },
    time: { min: 30, max: 30 },
    age: 8,
    difficulty: 1,
    tags: ["Party", "Colores", "Grupos grandes"],
    description:
      "Un tablero con 480 colores y una sola pregunta: ¿qué color te imaginas cuando digo «café»? ¿Uno oscuro recién hecho, o uno con leche? Por turnos, alguien elige un color en secreto y da pistas de una o dos palabras; los demás intentan señalar el tono exacto en el tablero. Como cada quien ve los colores distinto, las discusiones y las risas están garantizadas. Muy fácil de explicar y perfecto para grupos grandes.",
    howToPlay: [
      "En tu turno eres quien da las pistas: toma una carta y elige en secreto uno de sus colores.",
      "Da una pista de UNA palabra (sin decir colores básicos como «azul» o «rojo»); cada jugador coloca su ficha en el color que cree que es.",
      "Da una segunda pista de hasta DOS palabras; cada jugador coloca una segunda ficha.",
      "Revela el color: entre más cerca quedaron las fichas, más puntos. Quien dio las pistas también gana puntos por las fichas que quedaron cerca."
    ],
    images: [
      {
        src: "assets/img/games/hues-and-cues/1.jpg",
        credit: "W Eric Martin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/5390676/hues-and-cues"
      },
      {
        src: "assets/img/games/hues-and-cues/2.jpg",
        credit: "ia2ca / BoardGameGeek",
        link: "https://boardgamegeek.com/image/5413868/hues-and-cues"
      },
      {
        src: "assets/img/games/hues-and-cues/3.jpg",
        credit: "southern_canadian / BoardGameGeek",
        link: "https://boardgamegeek.com/image/6115910/hues-and-cues"
      }
    ]
  },
  {
    id: "hot-streak",
    name: "Hot Streak",
    tagline: "Apuesta por botargas que corren… o no.",
    players: { min: 3, max: 8 },
    time: { min: 20, max: 20 },
    age: 6,
    difficulty: 1,
    tags: ["Party", "Apuestas", "Carreras"],
    description:
      "Una carrera de botargas en la que todos apuestan y gritan como si fuera la final. Las botargas avanzan según las cartas que van saliendo, pero a veces se cambian de carril, tumban a otro corredor, se dan la vuelta o corren hacia atrás. Tú eliges si apostar a lo seguro o arriesgarte por un premio mayor. Caótico, rapidísimo y muy divertido para grupos.",
    howToPlay: [
      "Antes de cada carrera, cada jugador escoge dos boletos de apuesta. Puedes jugarlos del lado seguro o voltearlos al lado arriesgado: paga más, pero si pierdes, pagas tú.",
      "Cada jugador mete en secreto una carta de su mano al mazo de la carrera.",
      "Se revelan las cartas una por una y las botargas se mueven… a veces de formas inesperadas. Si una se sale de la pista, queda descalificada.",
      "Cuando hay cuatro lugares en el podio, se pagan las apuestas. Después de 3 carreras gana quien tenga más dinero."
    ],
    images: [
      {
        src: "assets/img/games/hot-streak/1.jpg",
        credit: "xitoliv / BoardGameGeek",
        link: "https://boardgamegeek.com/image/8933083/hot-streak"
      },
      {
        src: "assets/img/games/hot-streak/2.jpg",
        credit: "neverboredboardgames / BoardGameGeek",
        link: "https://boardgamegeek.com/image/8901041/hot-streak"
      },
      {
        src: "assets/img/games/hot-streak/3.jpg",
        credit: "daddy cool / BoardGameGeek",
        link: "https://boardgamegeek.com/image/8939841/hot-streak"
      }
    ]
  },
  {
    id: "downforce",
    name: "Downforce",
    tagline: "Compra autos de carreras, apuesta y cruza la meta primero.",
    players: { min: 2, max: 6 },
    time: { min: 20, max: 40 },
    age: 10,
    difficulty: 1,
    tags: ["Carreras", "Subastas", "Apuestas"],
    description:
      "Una carrera de autos donde primero se subastan los coches y luego se corre con cartas. El truco: casi todas las cartas también mueven los autos de los demás, así que hay que elegir muy bien el momento de jugar cada una. Durante la carrera haces apuestas secretas sobre quién va a ganar. Al final gana quien junte más dinero entre premios, apuestas y lo que le quedó. Rápido, tenso y muy fácil de enseñar.",
    howToPlay: [
      "Al inicio se subastan los 6 autos: cada jugador puja con sus cartas para quedarse con uno o más.",
      "En tu turno juega una carta: mueve los autos en el orden que indica, incluidos los de tus rivales.",
      "En ciertos puntos de la pista todos hacen una apuesta secreta sobre qué auto ganará.",
      "Al terminar la carrera se cobran premios y apuestas (menos lo que pagaste en la subasta). Gana quien tenga más dinero."
    ],
    images: [
      {
        src: "assets/img/games/downforce/1.png",
        credit: "JustinDJacobson / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3432548/downforce"
      },
      {
        src: "assets/img/games/downforce/2.jpg",
        credit: "wamphx / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3966473/downforce"
      },
      {
        src: "assets/img/games/downforce/3.jpg",
        credit: "townsean / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3703230/downforce"
      }
    ]
  },
  {
    id: "santorini",
    name: "Santorini",
    tagline: "Construye y sube al tercer piso antes que tu rival.",
    players: { min: 2, max: 2 },
    time: { min: 20, max: 20 },
    age: 8,
    difficulty: 1,
    tags: ["Estrategia", "Abstracto", "Dioses griegos"],
    description:
      "Una isla griega en miniatura donde cada jugador mueve a dos constructores y levanta edificios blancos con cúpulas azules. Las reglas caben en dos líneas, pero cada partida es un duelo de cabeza: subir, bloquear y no dejar que el otro llegue arriba. Además, cada jugador puede tener el poder de un dios griego que cambia las reglas a su favor. Se ve precioso en la mesa.",
    howToPlay: [
      "Cada jugador tiene 2 constructores. En tu turno mueve uno a una casilla vecina: puedes subir un solo piso o bajar los que quieras.",
      "Después construye un piso en una casilla vecina al constructor que moviste. Sobre el tercer piso se pone una cúpula y nadie puede subir ahí.",
      "Ganas si uno de tus constructores sube al tercer piso.",
      "Para variar, cada jugador puede tomar una carta de dios con un poder especial que rompe alguna regla."
    ],
    images: [
      {
        src: "assets/img/games/santorini/1.png",
        credit: "W Eric Martin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3283110/santorini"
      },
      {
        src: "assets/img/games/santorini/2.jpg",
        credit: "igknight / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3301760/santorini"
      },
      {
        src: "assets/img/games/santorini/3.jpg",
        credit: "Vacabck / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3303222/santorini"
      }
    ]
  },
  {
    id: "ticket-to-ride-europe",
    name: "Ticket to Ride: Europe",
    aka: "¡Aventureros al Tren! Europa",
    tagline: "Construye rutas de tren por toda Europa.",
    players: { min: 2, max: 5 },
    time: { min: 30, max: 60 },
    age: 8,
    difficulty: 3,
    tags: ["Trenes", "Rutas", "Familiar"],
    description:
      "Un viaje en tren por la Europa de principios del siglo XX, de Edimburgo a Constantinopla y de Lisboa a Moscú. Juntas cartas de vagones de colores para reclamar rutas entre ciudades y cumplir tus boletos de destino secretos. Se aprende en 5 minutos, pero hay que planear bien y cuidar que nadie te bloquee el camino. Un clásico moderno que gusta a familias y a jugadores con experiencia.",
    howToPlay: [
      "Al empezar recibes boletos de destino secretos: pares de ciudades que debes conectar con tus trenes.",
      "En tu turno haz UNA cosa: robar cartas de vagón, reclamar una ruta pagando cartas de su color, o tomar más boletos.",
      "Ojo con las rutas especiales: los túneles pueden costar cartas extra, los ferris piden locomotoras y las estaciones te dejan usar una ruta de otro jugador.",
      "Ganas puntos por cada ruta y por cada boleto cumplido, pero los boletos que no completes restan. Gana quien tenga más puntos."
    ],
    images: [
      {
        src: "assets/img/games/ticket-to-ride-europe/1.jpg",
        credit: "MarkKaufmann / BoardGameGeek",
        link: "https://boardgamegeek.com/image/66668/ticket-to-ride-europe"
      },
      {
        src: "assets/img/games/ticket-to-ride-europe/2.jpg",
        credit: "kilroy_locke / BoardGameGeek",
        link: "https://boardgamegeek.com/image/246641/ticket-to-ride-europe"
      },
      {
        src: "assets/img/games/ticket-to-ride-europe/3.jpg",
        credit: "alkis21 / BoardGameGeek",
        link: "https://boardgamegeek.com/image/80992/ticket-to-ride-europe"
      }
    ]
  },
  {
    id: "carcassonne",
    name: "Carcassonne",
    tagline: "Arma el paisaje medieval loseta por loseta.",
    players: { min: 2, max: 5 },
    time: { min: 30, max: 45 },
    age: 7,
    difficulty: 2,
    tags: ["Losetas", "Familiar", "Clásico"],
    description:
      "Entre todos van armando el paisaje del sur de Francia: ciudades amuralladas, caminos, monasterios y campos. En cada turno colocas una loseta y decides si pones uno de tus meeples encima para reclamar esa ciudad, camino o monasterio. Los turnos son rapidísimos, pero siempre hay una decisión interesante: ¿agrando mi ciudad o le complico la suya a mi rival? Uno de los grandes clásicos para empezar en los juegos de mesa.",
    howToPlay: [
      "En tu turno toma una loseta y colócala junto a las que ya están, de modo que encaje: ciudad con ciudad, camino con camino, campo con campo.",
      "Si quieres, pon uno de tus meeples en esa loseta: como caballero en una ciudad, ladrón en un camino, monje en un monasterio o granjero en un campo.",
      "Cuando una ciudad, camino o monasterio se completa, su dueño gana puntos y recupera su meeple.",
      "Cuando se acaban las losetas se cuentan los puntos finales, incluidos los granjeros. Gana quien tenga más puntos."
    ],
    images: [
      {
        src: "assets/img/games/carcassonne/1.jpg",
        credit: "AllDiceInWonderland / BoardGameGeek",
        link: "https://boardgamegeek.com/image/8621446/carcassonne"
      },
      {
        src: "assets/img/games/carcassonne/2.jpg",
        credit: "armonikian / BoardGameGeek",
        link: "https://boardgamegeek.com/image/6623182/carcassonne"
      },
      {
        src: "assets/img/games/carcassonne/3.png",
        credit: "Wyjdzie w Graniu",
        link: "https://wyjdziewgraniu.pl/"
      }
    ]
  },
  {
    id: "herbaceous",
    name: "Herbaceous",
    tagline: "Cultiva y planta la colección de hierbas más valiosa.",
    players: { min: 2, max: 4 },
    time: { min: 15, max: 20 },
    age: 8,
    difficulty: 2,
    tags: ["Cartas", "Colecciones", "Relajado"],
    description:
      "Un juego tranquilo y precioso sobre jardinería: cada quien colecciona hierbas como menta, salvia, eneldo o perejil y las va plantando en sus macetas. Cada turno decides qué hierba guardas para ti y cuál compartes en el jardín común… sabiendo que los demás también pueden usarla. Las ilustraciones en acuarela son una belleza. Ideal con un café en la mano.",
    howToPlay: [
      "En tu turno voltea una carta de hierba: guárdala en tu jardín privado o déjala en el jardín común. La siguiente carta va al otro lado.",
      "Cada jugador tiene 4 macetas y cada una pide un grupo distinto: hierbas iguales, hierbas diferentes, parejas, o hasta tres de cualquier tipo.",
      "Al inicio de tu turno puedes llenar una maceta con hierbas de tu jardín y del común. Cada maceta solo se puede usar una vez.",
      "Al final se suman los puntos de todo lo que plantaste. Gana la colección más valiosa."
    ],
    images: [
      {
        src: "assets/img/games/herbaceous/1.jpg",
        credit: "Albia / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7083274/herbaceous"
      },
      {
        src: "assets/img/games/herbaceous/2.jpg",
        credit: "kalchio / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3399435/herbaceous"
      },
      {
        src: "assets/img/games/herbaceous/3.jpg",
        credit: "Chotacabras / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7572675/herbaceous"
      }
    ]
  },
  {
    id: "draftosaurus",
    name: "Draftosaurus",
    tagline: "Arma el parque de dinosaurios más atractivo.",
    players: { min: 2, max: 5 },
    time: { min: 15, max: 15 },
    age: 8,
    difficulty: 2,
    tags: ["Dinosaurios", "Draft", "Familiar"],
    description:
      "Cada jugador construye su propio parque de dinosaurios para atraer a la mayor cantidad de visitantes. Tomas un puñado de dinosaurios de madera, te quedas con uno, lo pones en tu parque y le pasas el resto a tu vecino. Cada corral tiene sus propias reglas y un dado cambia en cada turno dónde pueden ir los dinosaurios. Rápido, adorable y fácil de enseñar, incluso a niños.",
    howToPlay: [
      "Al inicio de la ronda cada jugador saca un puñado de dinosaurios de la bolsa, sin que los demás vean.",
      "Elige uno y colócalo en un corral de tu parque; luego pásale el resto al jugador de al lado.",
      "En cada turno alguien tira el dado: indica en qué zona del parque deben poner su dinosaurio los demás jugadores.",
      "Cada corral da puntos de forma distinta (dinosaurios iguales, todos diferentes, parejas…). Después de dos rondas gana el parque con más puntos."
    ],
    images: [
      {
        src: "assets/img/games/draftosaurus/1.jpg",
        credit: "Dewit_Ankama / BoardGameGeek",
        link: "https://boardgamegeek.com/image/4447676/draftosaurus"
      },
      {
        src: "assets/img/games/draftosaurus/2.jpg",
        credit: "MADG0BLIN / BoardGameGeek",
        link: "https://boardgamegeek.com/image/6146971/draftosaurus"
      },
      {
        src: "assets/img/games/draftosaurus/3.jpg",
        credit: "meeplesenexpansion / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7818714/draftosaurus"
      }
    ]
  },
  {
    id: "lost-cities",
    name: "Lost Cities",
    aka: "Exploradores",
    tagline: "Expediciones arqueológicas en un duelo de cartas para dos.",
    players: { min: 2, max: 2 },
    time: { min: 30, max: 30 },
    age: 10,
    difficulty: 2,
    tags: ["Cartas", "Riesgo", "Duelo"],
    description:
      "Dos exploradores compiten por organizar las expediciones más rentables a ciudades perdidas: el desierto, la selva, los volcanes, el fondo del mar, el Himalaya… Cada expedición que empiezas te cuesta puntos, así que la pregunta siempre es: ¿me arriesgo a abrir otra o me concentro en las que ya tengo? Reglas sencillísimas y decisiones muy tensas. Un clásico para parejas.",
    howToPlay: [
      "En tu turno juega una carta a una de tus expediciones (por color) o descártala; luego roba una del mazo o de un descarte.",
      "En cada expedición las cartas se juegan en orden creciente: después de un 5, ya no puedes jugar un 3.",
      "Las cartas de apuesta (apretón de manos) van antes de los números y multiplican el resultado de esa expedición… para bien o para mal.",
      "Cada expedición empieza en -20 puntos, así que solo abre las que puedas completar. Se juegan 3 rondas y gana quien sume más puntos."
    ],
    images: [
      {
        src: "assets/img/games/lost-cities/1.jpg",
        credit: "W Eric Martin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/4597095/lost-cities"
      },
      {
        src: "assets/img/games/lost-cities/2.jpg",
        credit: "margaretha / BoardGameGeek",
        link: "https://boardgamegeek.com/image/287678/lost-cities"
      },
      {
        src: "assets/img/games/lost-cities/3.jpg",
        credit: "manwemx / BoardGameGeek",
        link: "https://boardgamegeek.com/image/4103314/lost-cities"
      }
    ]
  },
  {
    id: "azul",
    name: "Azul",
    tagline: "Decora el palacio real con azulejos de colores.",
    players: { min: 2, max: 4 },
    time: { min: 30, max: 45 },
    age: 8,
    difficulty: 3,
    tags: ["Patrones", "Estrategia", "Familiar"],
    description:
      "Eres un artista que debe decorar las paredes del Palacio Real de Évora con azulejos portugueses. Los azulejos son piezas pesaditas de colores que dan gusto agarrar, y el tablero termina como un mosaico precioso. Las reglas se explican en minutos, pero cada turno hay que pensar bien: tomar justo lo que necesitas sin quedarte con piezas de más, que restan puntos.",
    howToPlay: [
      "En tu turno toma TODOS los azulejos de un mismo color de una de las fábricas; los demás de esa fábrica van al centro. (También puedes tomar un color del centro.)",
      "Colócalos en una de las filas de tu tablero. Los que no quepan se caen al piso y te restan puntos.",
      "Al final de la ronda, cada fila completa pasa un azulejo a tu muro y ganas puntos según los azulejos que tenga al lado.",
      "El juego termina cuando alguien completa una línea horizontal en su muro. Hay puntos extra por filas, columnas y colores completos; gana quien tenga más."
    ],
    images: [
      {
        src: "assets/img/games/azul/1.png",
        credit: "Tronin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/6973671/azul"
      },
      {
        src: "assets/img/games/azul/2.jpg",
        credit: "EchoOperative / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3720016/azul"
      },
      {
        src: "assets/img/games/azul/3.jpg",
        credit: "henk.rolleman / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3813634/azul"
      }
    ]
  },
  {
    id: "cloud-city",
    name: "Cloud City",
    tagline: "Diseña una ciudad en las nubes conectada por puentes.",
    players: { min: 2, max: 4 },
    time: { min: 30, max: 60 },
    age: 10,
    difficulty: 2,
    tags: ["Losetas", "Construcción", "Familiar"],
    description:
      "Eres un arquitecto que compite por diseñar la mejor ciudad flotante. Colocas losetas de nubes, levantas edificios de tres alturas y los unes con pasarelas: entre más larga la pasarela, más votos del consejo de la ciudad ganas. Al final, cada jugador tiene una mini ciudad en 3D sobre la mesa. Fácil de aprender y muy vistoso.",
    howToPlay: [
      "En tu turno juega una loseta de nube de tu mano junto a tu ciudad (máximo 3×3 losetas; 4×4 con 2 jugadores).",
      "Pon edificios en los espacios de la loseta según su color: azules los más bajos, verdes medianos y arena los más altos.",
      "Si quieres, construye pasarelas entre dos edificios de la misma altura. Según su largo valen 1, 2, 3, 5 u 8 votos.",
      "Roba una loseta nueva. Al terminar, se suman los votos de las pasarelas y los bonos; gana quien tenga más votos."
    ],
    images: [
      {
        src: "assets/img/games/cloud-city/1.jpg",
        credit: "W Eric Martin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/5528619/cloud-city"
      },
      {
        src: "assets/img/games/cloud-city/2.jpg",
        credit: "kalchio / BoardGameGeek",
        link: "https://boardgamegeek.com/image/5807577/cloud-city"
      },
      {
        src: "assets/img/games/cloud-city/3.jpg",
        credit: "T0mo / BoardGameGeek",
        link: "https://boardgamegeek.com/image/5902694/cloud-city"
      }
    ]
  },
  {
    id: "penguin-trap",
    name: "The Penguin Trap",
    tagline: "Quita bloques de hielo sin que se caiga el pingüino.",
    players: { min: 2, max: 4 },
    time: { min: 5, max: 10 },
    age: 3,
    difficulty: 1,
    tags: ["Destreza", "Niños", "Rápido"],
    description:
      "Un pingüino está parado sobre una plataforma de hielo hecha de bloques hexagonales de dos colores. Por turnos, cada jugador gira la ruleta para ver de qué color le toca quitar un bloque, y lo empuja con cuidado con su martillito. Quien haga caer al pingüino, pierde. Partidas de cinco minutos, perfectas para niños, para calentar antes de otro juego o para la revancha inmediata.",
    howToPlay: [
      "Arma la plataforma de hielo con los bloques y coloca al pingüino en el centro.",
      "En tu turno gira la ruleta: te indica de qué color es el bloque que debes quitar.",
      "Empuja un bloque de ese color con el martillo para sacarlo, con cuidado de no tirar los demás.",
      "Si el pingüino cae en tu turno, pierdes. ¡Y a jugar otra!"
    ],
    images: [
      {
        src: "assets/img/games/penguin-trap/1.jpg",
        credit: "FabienC / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3534841/penguin-trap"
      },
      {
        src: "assets/img/games/penguin-trap/2.jpg",
        credit: "mlodi / BoardGameGeek",
        link: "https://boardgamegeek.com/image/5365929/penguin-trap"
      },
      {
        src: "assets/img/games/penguin-trap/3.jpg",
        credit: "Magellan Ltd / BoardGameGeek",
        link: "https://boardgamegeek.com/image/4706274/penguin-trap"
      }
    ]
  },
  {
    id: "point-salad",
    name: "Point Salad",
    tagline: "Arma la ensalada que más puntos te dé.",
    players: { min: 2, max: 6 },
    time: { min: 15, max: 30 },
    age: 10,
    difficulty: 1,
    tags: ["Cartas", "Colecciones", "Familiar"],
    description:
      "Juntas verduras —jitomates, lechugas, zanahorias, cebollas, pimientos y coles— y cartas de puntos que te dicen cómo se califica tu ensalada. Por ejemplo: 2 puntos por cada zanahoria, pero -1 por cada cebolla. Hay más de 100 formas distintas de sumar puntos, así que cada partida es diferente. Se explica en dos minutos y funciona con casi cualquier grupo.",
    howToPlay: [
      "En el centro hay tres mazos de cartas de puntos y, debajo, verduras boca arriba.",
      "En tu turno toma UNA carta de puntos o DOS verduras del mercado.",
      "Una vez por turno puedes voltear una de tus cartas de puntos para convertirla en verdura.",
      "Cuando se acaban las cartas, cada quien calcula sus puntos según sus cartas de puntos. Gana la ensalada con más puntos."
    ],
    images: [
      {
        src: "assets/img/games/point-salad/1.png",
        credit: "ToddRowland / BoardGameGeek",
        link: "https://boardgamegeek.com/image/4621571/point-salad"
      },
      {
        src: "assets/img/games/point-salad/2.jpg",
        credit: "mercopparis / BoardGameGeek",
        link: "https://boardgamegeek.com/image/5190008/point-salad"
      },
      {
        src: "assets/img/games/point-salad/3.jpg",
        credit: "tomekMG / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7162103/point-salad"
      }
    ]
  },
  {
    id: "slamwich",
    name: "Slamwich",
    tagline: "Arma sándwiches y golpea la pila antes que nadie.",
    players: { min: 2, max: 6 },
    time: { min: 20, max: 20 },
    age: 6,
    difficulty: 1,
    tags: ["Reflejos", "Cartas", "Niños"],
    description:
      "Un juego de cartas de reflejos rápidos con cartas en forma de rebanadas de pan con ingredientes, ladrones de sándwiches y comelones. Todos van volteando cartas en una pila al centro y, cuando aparece cierta combinación, ¡hay que golpear la pila primero para quedarse con todas las cartas! Ruidoso, rápido y muy divertido para niños y adultos.",
    howToPlay: [
      "Se reparten todas las cartas. Por turnos, cada jugador voltea la carta de arriba de su mazo sobre la pila del centro.",
      "Golpea la pila si salen dos cartas iguales seguidas (doble piso), o dos iguales con una carta en medio (¡slamwich!). El más rápido se queda con la pila.",
      "Si sale un ladrón, ¡golpea también! Si sale un comelón, el siguiente jugador debe voltear tantas cartas como indica; si no saca otro comelón, quien lo jugó se lleva la pila.",
      "Si te quedas sin cartas, quedas fuera. Gana quien junte todas las cartas."
    ],
    images: [
      {
        src: "assets/img/games/slamwich/1.jpg",
        credit: "EJKemp / BoardGameGeek",
        link: "https://boardgamegeek.com/image/73050/slamwich"
      },
      {
        src: "assets/img/games/slamwich/2.jpg",
        credit: "jack208 / BoardGameGeek",
        link: "https://boardgamegeek.com/image/148702/slamwich"
      },
      {
        src: "assets/img/games/slamwich/3.jpg",
        credit: "EndersGame / BoardGameGeek",
        link: "https://boardgamegeek.com/image/100174/slamwich"
      }
    ]
  },
  {
    id: "kingdomino",
    name: "Kingdomino",
    tagline: "Arma tu reino con fichas tipo dominó.",
    players: { min: 2, max: 4 },
    time: { min: 15, max: 25 },
    age: 8,
    difficulty: 2,
    tags: ["Losetas", "Familiar", "Rápido"],
    description:
      "Eres un rey o reina que expande su reino con fichas de dominó de bosques, lagos, trigales, praderas, pantanos y minas. Conecta terrenos iguales y busca las coronas, que multiplican el valor de cada territorio. El detalle está en cómo eliges: si tomas la mejor ficha, jugarás al último en la siguiente ronda. Ganó el Spiel des Jahres y se aprende en cinco minutos.",
    howToPlay: [
      "Cada jugador empieza con su castillo. En cada ronda se voltea una fila de fichas de dominó y cada quien elige una con su rey.",
      "Coloca tu ficha en tu reino: al menos uno de sus lados debe tocar un terreno igual (o tu castillo).",
      "El orden en que eligieron las fichas decide quién juega primero en la siguiente ronda: las mejores fichas te mandan al final.",
      "Al final, cada territorio vale sus casillas × sus coronas (sin coronas no vale nada). Gana el reino con más puntos."
    ],
    images: [
      {
        src: "assets/img/games/kingdomino/1.png",
        credit: "N3MO77 / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3132685/kingdomino"
      },
      {
        src: "assets/img/games/kingdomino/2.jpg",
        credit: "jipipu / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3857682/kingdomino"
      },
      {
        src: "assets/img/games/kingdomino/3.jpg",
        credit: "Yavi / BoardGameGeek",
        link: "https://boardgamegeek.com/image/3481438/kingdomino"
      }
    ]
  },
  {
    id: "rhino-hero",
    name: "Rhino Hero",
    aka: "Super Rhino",
    tagline: "Construye una torre de cartas… con un rinoceronte encima.",
    players: { min: 2, max: 5 },
    time: { min: 5, max: 15 },
    age: 5,
    difficulty: 1,
    tags: ["Destreza", "Niños", "Rápido"],
    description:
      "Entre todos construyen un edificio de cartas cada vez más alto, y un rinoceronte superhéroe muy heroico (y muy pesado) va escalándolo piso por piso. Las paredes son cartas dobladas y los techos son cartas planas: cada techo dice dónde poner las paredes del siguiente piso. Pulso firme y nervios de acero. Perfecto para niños, aunque los adultos se ponen igual de nerviosos.",
    howToPlay: [
      "Cada jugador empieza con 5 cartas de techo.",
      "En tu turno pon cartas de pared en el piso más alto, donde lo indique el último techo, y luego coloca encima un techo de tu mano.",
      "Algunos techos tienen acciones especiales: poner un techo extra, cambiar el sentido del juego o mover al rinoceronte a otro piso.",
      "Gana el primero en colocar todos sus techos. Si el edificio se cae, quien lo tiró pierde y gana quien tenga menos cartas."
    ],
    images: [
      {
        src: "assets/img/games/rhino-hero/1.jpg",
        credit: "Tronin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/6974609/rhino-hero"
      },
      {
        src: "assets/img/games/rhino-hero/2.jpg",
        credit: "Hman / BoardGameGeek",
        link: "https://boardgamegeek.com/image/1817953/rhino-hero"
      },
      {
        src: "assets/img/games/rhino-hero/3.jpg",
        credit: "boardgamersteph / BoardGameGeek",
        link: "https://boardgamegeek.com/image/2355030/rhino-hero"
      }
    ]
  },
  {
    id: "labyrinth-disney-villains",
    name: "Labyrinth: Disney Villains",
    aka: "Laberinto",
    tagline: "Mueve el laberinto y escapa con los villanos de Disney.",
    players: { min: 2, max: 4 },
    time: { min: 20, max: 30 },
    age: 7,
    difficulty: 1,
    tags: ["Familiar", "Laberinto", "Disney"],
    description:
      "El clásico Laberinto de Ravensburger, ahora con Úrsula, Maléfica, Hades, Scar y otros villanos de Disney. El tablero es un laberinto que cambia todo el tiempo: en cada turno empujas una pieza para mover un pasillo entero y abrirte camino… o cerrárselo a los demás. Gana quien encuentre primero todos sus objetivos. Fácil para niños y entretenido para adultos.",
    howToPlay: [
      "Cada jugador recibe cartas secretas con los objetivos que debe encontrar en el laberinto.",
      "En tu turno mete la pieza sobrante por un borde del tablero: así se recorre toda una fila o columna y sale otra pieza por el lado opuesto.",
      "Después mueve tu ficha por los pasillos abiertos tanto como quieras, para llegar a tu objetivo.",
      "Al llegar a tu objetivo, revela el siguiente. Gana quien complete todos sus objetivos primero."
    ],
    images: [
      {
        src: "assets/img/games/labyrinth-disney-villains/1.jpg",
        credit: "Ravensburger (vía Element Games)",
        link: "https://elementgames.co.uk/images/products/93950/108160-large.jpg"
      },
      {
        src: "assets/img/games/labyrinth-disney-villains/2.jpg",
        credit: "Ludus Mundi / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7399358/labyrinth-disney-villains"
      },
      {
        src: "assets/img/games/labyrinth-disney-villains/3.jpg",
        credit: "Phreekshow1 / BoardGameGeek",
        link: "https://boardgamegeek.com/image/6977472/labyrinth-disney-villains"
      }
    ]
  },
  {
    id: "last-message",
    name: "Last Message",
    tagline: "La víctima dibuja pistas… y el culpable las borra.",
    players: { min: 3, max: 8 },
    time: { min: 15, max: 15 },
    age: 8,
    difficulty: 1,
    tags: ["Party", "Dibujo", "Deducción"],
    description:
      "¡Se cometió un crimen! La víctima no puede hablar, pero sí puede dibujar para ayudar a los detectives a encontrar al culpable entre una multitud de personajes. El problema: antes de que los detectives vean las pistas, el criminal puede borrar parte de los dibujos. Risas aseguradas con dibujos hechos a toda prisa y borrones estratégicos. No hay texto en el juego, así que el idioma no importa.",
    howToPlay: [
      "Un jugador es la víctima, otro el criminal y los demás son detectives. El criminal elige en secreto a un personaje de la escena; solo la víctima sabe cuál es.",
      "En cada ronda la víctima tiene 30 segundos para dibujar y escribir pistas en una cuadrícula de 3×3.",
      "Antes de entregarlas, el criminal puede borrar parte de esos dibujos para despistar.",
      "Los detectives intentan adivinar al culpable. Si no lo encuentran después de la cuarta ronda, gana el criminal."
    ],
    images: [
      {
        src: "assets/img/games/last-message/1.jpg",
        credit: "W Eric Martin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/6080638/last-message"
      },
      {
        src: "assets/img/games/last-message/2.png",
        credit: "Propi / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7302945/last-message"
      },
      {
        src: "assets/img/games/last-message/3.jpg",
        credit: "pauloantunes / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7272566/last-message"
      }
    ]
  },
  {
    id: "dice-miner",
    name: "Dice Miner",
    tagline: "Excava la montaña y junta los mejores dados.",
    players: { min: 2, max: 4 },
    time: { min: 20, max: 30 },
    age: 10,
    difficulty: 3,
    tags: ["Dados", "Combos", "Fantasía"],
    description:
      "Los dragones han vuelto y los enanos deben regresar a sus antiguas minas. Se vacía una bolsa de dados sobre una montaña inclinada y, por turnos, cada quien va sacando dados para su tesoro: túneles, tesoros, herramientas, magia… y peligros. Arriesga para armar grandes combos y suma más puntos que nadie en tres rondas. Los dados de colores en la montaña se ven increíbles.",
    howToPlay: [
      "Se tiran los dados sobre la montaña. En tu turno toma UN dado que esté «arriba», sin otros dados encima de él.",
      "Agrégalo a tu tesoro. Se sigue así hasta que la montaña queda vacía.",
      "Al vaciarse se puntúa según las caras de tus dados: por ejemplo, las secuencias de túneles deben empezar en 1 para dar puntos.",
      "Se rellena la montaña y se juega otra ronda; tus dados se quedan contigo. Después de 3 rondas gana quien tenga más puntos."
    ],
    images: [
      {
        src: "assets/img/games/dice-miner/1.jpg",
        credit: "JTidball / BoardGameGeek",
        link: "https://boardgamegeek.com/image/5440150/dice-miner"
      },
      {
        src: "assets/img/games/dice-miner/2.jpg",
        credit: "mpalframan / BoardGameGeek",
        link: "https://boardgamegeek.com/image/6876439/dice-miner"
      },
      {
        src: "assets/img/games/dice-miner/3.jpg",
        credit: "TabletopSavants / BoardGameGeek",
        link: "https://boardgamegeek.com/image/8413198/dice-miner"
      }
    ]
  },
  {
    id: "zombie-dice",
    name: "Zombie Dice",
    tagline: "Come cerebros… pero no te dejes disparar.",
    players: { min: 2, max: 10 },
    time: { min: 10, max: 20 },
    age: 10,
    difficulty: 1,
    tags: ["Dados", "Riesgo", "Grupos grandes"],
    description:
      "Eres un zombi y quieres cerebros, más que cualquiera de tus amigos zombis. Los 13 dados son tus víctimas: tíralos para comerte sus cerebros, pero detente antes de que los escopetazos terminen tu turno. ¿Te arriesgas a tirar una vez más o te quedas con lo que llevas? Se aprende en una ronda, cabe en el bolsillo y funciona con muchísima gente.",
    howToPlay: [
      "En tu turno saca 3 dados del bote sin ver y tíralos.",
      "Cerebro = un punto guardado. Huellas = la víctima escapó, puedes volver a tirar ese dado. Escopetazo = ¡auch!",
      "Puedes plantarte y anotar tus cerebros, o sacar dados hasta tener 3 otra vez y volver a tirar. Si juntas 3 escopetazos en el turno, pierdes todos los cerebros de ese turno.",
      "Gana quien llegue primero a 13 cerebros."
    ],
    images: [
      {
        src: "assets/img/games/zombie-dice/1.jpg",
        credit: "gmattie / BoardGameGeek",
        link: "https://boardgamegeek.com/image/4991962/zombie-dice"
      },
      {
        src: "assets/img/games/zombie-dice/2.jpg",
        credit: "Zombiegod / BoardGameGeek",
        link: "https://boardgamegeek.com/image/1579150/zombie-dice"
      },
      {
        src: "assets/img/games/zombie-dice/3.jpg",
        credit: "Corran Horn / BoardGameGeek",
        link: "https://boardgamegeek.com/image/1102174/zombie-dice"
      }
    ]
  },
  {
    id: "cakes",
    name: "Cakes!",
    tagline: "Arma el pastel más alto… sosteniéndolo en tu mano.",
    players: { min: 2, max: 4 },
    time: { min: 15, max: 20 },
    age: 5,
    difficulty: 1,
    tags: ["Destreza", "Velocidad", "Niños"],
    description:
      "¡La pastelería del Chef Sweeter trabaja a toda velocidad! Cada jugador sostiene una charola en la mano y va armando encima su pastel con cartas: bizcochos doblados y coberturas redondas, piso por piso, según los pedidos que van saliendo. ¿Lo armas rápido arriesgándote a que se caiga, o despacio para llegar a los 10 pisos? Nervios, risas y pasteles derrumbándose.",
    howToPlay: [
      "Cada jugador pone su charola en la palma de la mano. Sale una carta de pedido que indica cuántos pisos hay que agregar.",
      "Para cada piso toma 2 cartas de bizcocho, dóblalas para que se sostengan y pon encima una carta redonda de cobertura.",
      "Construye sobre los pisos que ya tienes, con cuidado: ¡todo está en tu mano y puede caerse!",
      "Gana quien arme un pastel de 10 pisos sin que se caiga y toque la campana. Si se acaban los pedidos, gana quien tenga más puntos."
    ],
    images: [
      {
        src: "assets/img/games/cakes/1.jpg",
        credit: "W Eric Martin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7672977/cakes"
      },
      {
        src: "assets/img/games/cakes/2.jpg",
        credit: "raulan / BoardGameGeek",
        link: "https://boardgamegeek.com/image/5877299/cakes"
      },
      {
        src: "assets/img/games/cakes/3.jpg",
        credit: "yakos / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7798361/cakes"
      }
    ]
  },
  {
    id: "struggle-for-catan",
    name: "Catan: El juego de cartas",
    aka: "Struggle for Catan",
    tagline: "Todo Catan en cartas: construye, comercia y llega a 10 puntos.",
    players: { min: 2, max: 4 },
    time: { min: 30, max: 45 },
    age: 10,
    difficulty: 3,
    tags: ["Cartas", "Recursos", "Comercio"],
    description:
      "La versión rápida en cartas del famoso Catan. Como en el juego de mesa, juntas recursos para construir poblados, caminos, ciudades, mejoras y caballeros que te dan puntos o habilidades especiales. Pero aquí no hay dados: los recursos dependen de lo que construyes, así que hay menos suerte. Y cuidado: el camino más largo y los caballeros pueden cambiar de dueño. Gana el primero en llegar a 10 puntos.",
    howToPlay: [
      "Cada jugador tiene cartas de recurso en la mano: madera, ladrillo, lana, trigo y mineral.",
      "En tu turno junta y cambia recursos, y úsalos para construir poblados, caminos, ciudades, mejoras de ciudad y caballeros.",
      "Cada construcción te da puntos de victoria o habilidades. Algunas son limitadas: cuando se acaban, ¡se le pueden quitar a otro jugador!",
      "Gana el primero en llegar a 10 puntos de victoria."
    ],
    images: [
      {
        src: "assets/img/games/struggle-for-catan/1.jpg",
        credit: "garea37 / BoardGameGeek",
        link: "https://boardgamegeek.com/image/1130645/struggle-for-catan"
      },
      {
        src: "assets/img/games/struggle-for-catan/2.jpg",
        credit: "skeil / BoardGameGeek",
        link: "https://boardgamegeek.com/image/1148105/struggle-for-catan"
      },
      {
        src: "assets/img/games/struggle-for-catan/3.jpg",
        credit: "qprym / BoardGameGeek",
        link: "https://boardgamegeek.com/image/8711075/struggle-for-catan"
      }
    ]
  },
  {
    id: "happy-little-dinosaurs",
    name: "Happy Little Dinosaurs",
    tagline: "Esquiva los pequeños desastres de la vida… siendo dinosaurio.",
    players: { min: 3, max: 4 },
    time: { min: 30, max: 60 },
    age: 8,
    difficulty: 1,
    requiresEnglish: true,
    tags: ["Cartas", "Humor", "Ataque directo"],
    description:
      "A veces la vida se siente como ser un dinosaurio esquivando meteoritos. Aquí tratas de sobrevivir a todo tipo de desastres: caer en lava, que te coma una ballena prehistórica… o que tu cita dino te deje en visto. Cada ronda sale un desastre natural, depredador o emocional, y todos juegan una carta para escapar. De los creadores de Unstable Unicorns: humor absurdo y mucha risa.",
    howToPlay: [
      "Al inicio de la ronda se voltea una carta de desastre.",
      "Cada jugador elige en secreto una carta de puntos de su mano y todos la revelan al mismo tiempo. Las cartas instantáneas pueden cambiar los puntajes.",
      "Quien tenga el puntaje más alto avanza en su ruta de escape; quien tenga el más bajo se queda con el desastre.",
      "Con 3 desastres del mismo tipo o 3 de tipos distintos, quedas fuera. Gana el primero en llegar a 50 puntos o el último dinosaurio en pie."
    ],
    images: [
      {
        src: "assets/img/games/happy-little-dinosaurs/1.png",
        credit: "Tronin / BoardGameGeek",
        link: "https://boardgamegeek.com/image/8286790/happy-little-dinosaurs"
      },
      {
        src: "assets/img/games/happy-little-dinosaurs/2.jpg",
        credit: "RedGamr27 / BoardGameGeek",
        link: "https://boardgamegeek.com/image/8558965/happy-little-dinosaurs"
      },
      {
        src: "assets/img/games/happy-little-dinosaurs/3.jpg",
        credit: "Supersox / BoardGameGeek",
        link: "https://boardgamegeek.com/image/7395946/happy-little-dinosaurs"
      }
    ]
  }
];
