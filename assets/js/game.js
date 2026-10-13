// Llena game.html con el juego indicado en el link (game.html?id=king-of-tokyo).

(function () {
  var id = new URLSearchParams(window.location.search).get("id");
  var game = (window.GAMES || []).filter(function (g) { return g.id === id; })[0];
  var root = document.getElementById("game");

  if (!game) {
    root.innerHTML =
      '<div class="text-center py-5"><h1 class="h3">Juego no encontrado</h1>' +
      '<p><a href="index.html">Volver al menú</a></p></div>';
    return;
  }

  document.title = game.name + " · Café & Cartón";

  var images = game.images.length ? game.images : [""];
  var thumbs = images.length > 1
    ? '<div class="thumbs">' +
      images.map(function (photo, i) {
        return '<button type="button" class="thumb' + (i === 0 ? " active" : "") +
          '" data-index="' + i + '" aria-label="Foto ' + (i + 1) + '">' +
          imageTag(photoSrc(photo), game, "") + "</button>";
      }).join("") +
      "</div>"
    : "";

  var tags = game.tags
    .map(function (t) { return '<span class="tag">' + escapeHtml(t) + "</span>"; })
    .join("");
  var steps = game.howToPlay
    .map(function (s) { return "<li>" + escapeHtml(s) + "</li>"; })
    .join("");

  root.innerHTML =
    '<div class="row g-4">' +
    '<div class="col-lg-6">' +
    '<div class="main-photo">' + imageTag(photoSrc(images[0]), game, "", 'id="main-photo"') + "</div>" +
    '<p class="photo-credit" id="photo-credit">' + photoCredit(images[0]) + "</p>" +
    thumbs +
    "</div>" +
    '<div class="col-lg-6">' +
    "<h1>" + escapeHtml(game.name) + "</h1>" +
    (game.aka ? '<p class="aka">También conocido como ' + escapeHtml(game.aka) + "</p>" : "") +
    '<p class="tagline">' + escapeHtml(game.tagline) + "</p>" +
    (game.requiresEnglish
      ? '<p class="lang-note"><i class="fa fa-language"></i> <strong>Requiere inglés:</strong> las cartas tienen texto en inglés, así que para jugarlo es necesario saber leer inglés.</p>'
      : "") +
    '<div class="stat-boxes">' +
    '<div><i class="fa fa-users"></i><strong>' + rangeText(game.players) + "</strong>jugadores</div>" +
    '<div><i class="fa fa-clock"></i><strong>' + rangeText(game.time) + "</strong>minutos</div>" +
    '<div><i class="fa fa-child"></i><strong>' + game.age + "+</strong>edad</div>" +
    "<div>" + difficultyDots(game.difficulty) + "<strong>" + DIFFICULTY[game.difficulty] + "</strong>dificultad</div>" +
    "</div>" +
    '<div class="tags mb-3">' + tags + "</div>" +
    "<p>" + escapeHtml(game.description) + "</p>" +
    "<h2>Cómo se juega</h2>" +
    '<ol class="how-to">' + steps + "</ol>" +
    '<p class="ask"><i class="fa fa-mug-hot"></i>¿Tienes dudas? Pregúntanos y te lo explicamos en tu mesa.</p>' +
    "</div></div>";

  var main = document.getElementById("main-photo");
  var credit = document.getElementById("photo-credit");
  root.querySelectorAll(".thumb").forEach(function (btn) {
    btn.addEventListener("click", function () {
      main.src = btn.querySelector("img").src;
      credit.innerHTML = photoCredit(images[Number(btn.getAttribute("data-index"))]);
      root.querySelectorAll(".thumb").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
    });
  });
})();
