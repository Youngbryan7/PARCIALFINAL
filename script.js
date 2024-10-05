// Datos de ejemplo de juegos
const games = [
  {
    id: 1,
    name: "Dota 2",
    category: "free-to-play",
    price: "Free to Play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/header.jpg?t=1727827653",
    description:
      "Cada día, millones de jugadores de todo el mundo entran en batalla como uno de los más de cien héroes de Dota.",
    playable: true,
  },
  {
    id: 2,
    name: "Left 4 dead 2",
    category: "action",
    price: "S/ 22.99",
    discount: "30%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg?t=1724971542",
    description:
      "Ambientado en el apocalipsis zombi, Left 4 Dead 2 (L4D2) es la esperadísima secuela del galardonado Left 4 Dead, el juego cooperativo número 1 de 2008.",
    playable: true,
  },
  {
    id: 3,
    name: "Call of Duty",
    category: "action",
    price: "S/ 30.15",
    discount: "10%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg?t=1726772739",
    description:
      "Call of Duty® HQ es compatible con Call of Duty®: Black Ops 6, Call of Duty®: Modern Warfare® III, Call of Duty®: Modern Warfare® II y Call of Duty®: Warzone™.",
    playable: false,
  },
  {
    id: 4,
    name: "Black Myth: Wukong",
    category: "adventure",
    price: "S/ 199,99",
    discount: "15%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1725007201",
    description:
      "Black Myth: Wukong es un RPG de acción inspirado en la mitología china.",
    playable: false,
  },
  {
    id: 5,
    name: "Dead Cells",
    category: "adventure",
    price: "S/ 59,99",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg?t=1727254520",
    description:
      "Dead Cells es un juego de acción de plataformas de estilo roguelite inspirado en juegos tipo metroidvania.",
    playable: false,
  },
  {
    id: 6,
    name: "Overwatch® 2",
    category: "action",
    price: "S/ 18.40",
    discount: "20%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/header.jpg?t=1727296520",
    description:
      "Overwatch® 2 es un shooter por equipos aclamado por la crítica ambientado en un futuro optimista",
    playable: false,
  },
  {
    id: 7,
    name: "1v1.LOL - Battle Royale Game",
    category: "free-to-play",
    price: "free-to-play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2305790/header.jpg?t=1717351731",
    description:
      "Join over 80 million players in 1V1.LOL Champions, the Fastest Battle Royale experience!",
    playable: false,
  },
  {
    id: 8,
    name: "MY HERO ULTRA RUMBLE",
    category: "free-to-play",
    price: "free-to-play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1607250/header.jpg?t=1727323217",
    description:
      "Elige tu personaje favorito, forma un equipo y lucha por ser los últimos en pie en este nuevo juego gratuito de Battle Royale para 24 jugadores:",
    playable: false,
  },
  {
    id: 9,
    name: "Yu-Gi-Oh! Duel Links",
    category: "free-to-play",
    price: "free-to-play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601510/header.jpg?t=1727772560",
    description:
      "¡Enfréntate a duelistas de todo el mundo con Yu-Gi-Oh! Duel Links! Adéntrate en un mundo que atraviesa las dimensiones y conecta a todos los duelistas",
    playable: false,
  },
  {
    id: 10,
    name: "Metal Slug: Awakening",
    category: "free-to-play",
    price: "free-to-play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2963870/header.jpg?t=1721677596",
    description:
      "Metal Slug: Awakening continúa con la jugabilidad clásica amada por los fans, con nuevas y emocionantes características como Aventura Mundial",
    playable: false,
  },
  {
    id: 11,
    name: "Rakion Chaos Force",
    category: "free-to-play",
    price: "free-to-play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1218740/header.jpg?t=1587432054",
    description:
      "A Free to Play Online Action RPG. Rakion focuses on intense battles with RPG style characters and settings to provide an engaging fighting experience.",
    playable: false,
  },
  {
    id: 12,
    name: "Golf With Your Friends",
    category: "Sport",
    price: "free-to-play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/431240/header.jpg?t=1726586164",
    description:
      "¿Para qué son los amigos si no es para jugar al golf? En Golf With Your Friends podrás jugar partidas de minigolf rápidas y emocionantes de hasta 12 jugadores a la vez.",
    playable: false,
  },
  {
    id: 13,
    name: "Frontline 1942: Batallas de la Segunda Guerra Mundial 2",
    category: "Sport",
    price: "free-to-play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2564660/header.jpg?t=1721389525",
    description:
      "¡Sumérgete en los tiempos de la Segunda guerra Mundial y Conviértete en un verdadero héroe! Dispara, captura, gana ",
    playable: false,
  },
  {
    id: 14,
    name: "eFootball™",
    category: "Sport",
    price: "free-to-play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1665460/header.jpg?t=1726123478",
    description:
      "¡El alucinante juego de fútbol con 750 millones de descargas a nivel mundial te está esperando! ¡Juega a eFootball™ con usuarios de todo el mundo!",
    playable: false,
  },
  {
    id: 15,
    name: "Need for Speed™ Heat",
    category: "Sport",
    price: "S/ 239.0    ",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg?t=1716831270",
    description:
      "No pares por el día y arriésgalo todo por la noche en Need for Speed™ Heat Deluxe Edition",
    playable: false,
  },
  {
    id: 16,
    name: "Billar 2D - Poolians",
    category: "Sport",
    price: "free-to-play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/891040/header.jpg?t=1648868602",
    description:
      "Billar 2D es un juego de billar gratuito que incluye 8 bolas, 9 bolas, 15 bolas, 3 bolas, rotación y blackjack",
    playable: false,
  },
  {
    id: 17,
    name: "Grand Theft Auto V",
    category: "adventure",
    price: "S/ 62,99",
    discount: "20%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg?t=1726606628",
    description: "Grand Theft Auto V",
    playable: false,
  },
  {
    id: 18,
    name: "Monster Hunter: World",
    category: "adventure",
    price: "S/ 47,99",
    discount: "10%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg?t=1711328912",
    description:
      "¡Bienvenidos a un nuevo mundo! En Monster Hunter: World, la última entrega de la serie, ",
    playable: false,
  },
  {
    id: 19,
    name: "Rust",
    category: "adventure",
    price: "S/ 47.65",
    discount: "14%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1727957298",
    description:
      "he only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.",
    playable: false,
  },
  {
    id: 20,
    name: "God of War Ragnarök",
    category: "adventure",
    price: "S/ 169,99",
    discount: "35%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1728067832",
    description:
      "Kratos y Atreus se embarcan en una mítica aventura en busca de respuestas y aliados antes de la llegada del Ragnarök. Ahora también en PC.",
    playable: false,
  },
  {
    id: 21,
    name: "Counter-Strike 2",
    category: "action",
    price: "free to play",
    discount: "",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1719426374",
    description:
      "Durante las dos últimas décadas, Counter‑Strike ha proporcionado una experiencia competitiva de primer nivel para los millones de jugadores de todo el mundo que contribuyeron a darle forma.",
    playable: true,
  },
  {
    id: 22,
    name: "Street Fighter™",
    category: "action",
    price: "S/ 22.99",
    discount: "30%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg?t=1727156844",
    description:
      "¡Aquí llega el peso pesado de Capcom! Street Fighter™ 6 sale a la venta en todo el mundo el 2 de junio de 2023, ¡y trae consigo una nueva evolución de la saga Street Fighter™",
    playable: true,
  },
  {
    id: 23,
    name: "Left 4 dead 2",
    category: "action",
    price: "S/ 22.99",
    discount: "30%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg?t=1727996830",
    description:
      "Ambientado en el apocalipsis zombi, Left 4 Dead 2 (L4D2) es la esperadísima secuela del galardonado Left 4 Dead, el juego cooperativo número 1 de 2008.",
    playable: true,
  },
  {
    id: 24,
    name: "DRAGON BALL FighterZ",
    category: "action",
    price: "S/ 177.99",
    discount: "30%",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/header.jpg?t=1724469083",
    description:
      "DRAGON BALL FighterZ nace de lo que hace a la serie DRAGON BALL tan famosa: luchas espectaculares e interminables con luchadores superpoderosos.",
    playable: true,
  },
];

let favorites = [];

// Función para mostrar los juegos
function displayGames(gamesArray) {
  const gameList = document.getElementById("game-list");
  gameList.innerHTML = "";

  gamesArray.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
              <img src="${game.image}" alt="${game.name}">
              <button class="favorite-btn ${
                favorites.includes(game.id) ? "active" : ""
              }" data-id="${game.id}">
                  <i class="fas fa-star"></i>
              </button>
              <div class="game-info">
                  <h3>${game.name}</h3>
                  <p>${game.category}</p>
                  <div class="game-price">
                      ${game.price}
                      ${
                        game.discount
                          ? `<span class="discount">-${game.discount}</span>`
                          : ""
                      }
                  </div>
              </div>
          `;
    gameCard.addEventListener("click", () => showGameDetails(game));
    gameList.appendChild(gameCard);
  });

  // Agregar eventos a los botones de favoritos
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(parseInt(btn.dataset.id));
    });
  });
}

// Función para filtrar juegos
function filterGames(category) {
  const filteredGames =
    category === "all"
      ? games
      : games.filter((game) => game.category === category);
  displayGames(filteredGames);

  // Actualizar botón de filtro activo
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document
    .querySelector(`[data-category="${category}"]`)
    .classList.add("active");
}

// Función para mostrar detalles del juego
function showGameDetails(game) {
  const modal = document.getElementById("game-detail-modal");
  const content = document.getElementById("game-detail-content");
  content.innerHTML = `
          <h2>${game.name}</h2>
          <img src="${game.image}" alt="${game.name}" style="max-width: 100%;">
          <p>${game.description}</p>
          <p>Precio: ${game.price}</p>
          ${game.discount ? `<p>Descuento: ${game.discount}</p>` : ""}
          ${game.playable ? '<button id="play-game">Jugar</button>' : ""}
      `;
  modal.style.display = "block";

  if (game.playable) {
    document
      .getElementById("play-game")
      .addEventListener("click", () => playGame(game.id));
  }
}

// Función para cerrar el modal
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("game-detail-modal").style.display = "none";
});

// Función para alternar favoritos
function toggleFavorite(gameId) {
  const index = favorites.indexOf(gameId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(gameId);
  }
  displayGames(games); // Actualizar la visualización
}

// Función para jugar (simulación)
function playGame(gameId) {
  alert(`Iniciando juego ${gameId}. Usa las flechas para moverte.`);
  document.addEventListener("keydown", handleGameInput);
}

// Manejar input del juego
function handleGameInput(e) {
  switch (e.key) {
    case "ArrowUp":
      console.log("Mover arriba");
      break;
    case "ArrowDown":
      console.log("Mover abajo");
      break;
    case "ArrowLeft":
      console.log("Mover izquierda");
      break;
    case "ArrowRight":
      console.log("Mover derecha");
      break;
  }
}

// Evento para los botones de filtro
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => filterGames(btn.dataset.category));
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  displayGames(games);
});
