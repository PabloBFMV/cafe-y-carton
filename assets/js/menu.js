// Arma el menú de juegos en index.html y maneja los filtros.

(function () {
  var games = (window.GAMES || []).slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  var filters = { search: "", players: 0, time: 0, difficulty: 0 };

  var grid = document.getElementById("game-grid");
  var count = document.getElementById("game-count");
  var empty = document.getElementById("no-results");

  function matches(game) {
    if (filters.search && normalize(game.name + " " + (game.aka || "")).indexOf(filters.search) === -1) return false;
    if (filters.players) {
      // El botón "6" significa "6 o más"
      var n = filters.players;
      var fits = n >= 6 ? game.players.max >= 6 : game.players.min <= n && game.players.max >= n;
      if (!fits) return false;
    }
    if (filters.time && game.time.min > filters.time) return false;
    if (filters.difficulty && game.difficulty !== filters.difficulty) return false;
    return true;
  }

  function card(game) {
    var tags = game.tags
      .map(function (t) { return '<span class="tag">' + escapeHtml(t) + "</span>"; })
      .join("");
    return (
      '<div class="col-12 col-sm-6 col-lg-4">' +
      '<a class="game-card" href="game.html?id=' + encodeURIComponent(game.id) + '">' +
      '<div class="game-card-img">' + imageTag(photoSrc(game.images[0]), game, "") +
      (game.requiresEnglish ? '<span class="lang-badge"><i class="fa fa-language"></i> Requiere inglés</span>' : "") +
      "</div>" +
      '<div class="game-card-body">' +
      "<h2>" + escapeHtml(game.name) + "</h2>" +
      '<p class="tagline">' + escapeHtml(game.tagline) + "</p>" +
      '<ul class="stats">' +
      '<li><i class="fa fa-users"></i>' + playersText(game) + "</li>" +
      '<li><i class="fa fa-clock"></i>' + timeText(game) + "</li>" +
      "<li>" + difficultyDots(game.difficulty) + DIFFICULTY[game.difficulty] + "</li>" +
      "</ul>" +
      '<div class="tags">' + tags + "</div>" +
      "</div></a></div>"
    );
  }

  function render() {
    var shown = games.filter(matches);
    grid.innerHTML = shown.map(card).join("");
    count.textContent = shown.length + (shown.length === 1 ? " juego" : " juegos");
    empty.hidden = shown.length > 0;
  }

  // Grupos de botones: al volver a tocar el botón activo se quita el filtro.
  document.querySelectorAll(".chip-group").forEach(function (group) {
    var key = group.getAttribute("data-filter");
    group.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      var value = Number(chip.getAttribute("data-value"));
      filters[key] = filters[key] === value ? 0 : value;
      group.querySelectorAll(".chip").forEach(function (c) {
        var active = Number(c.getAttribute("data-value")) === filters[key];
        c.classList.toggle("active", active);
        c.setAttribute("aria-pressed", active);
      });
      render();
    });
  });

  document.getElementById("search").addEventListener("input", function (e) {
    filters.search = normalize(e.target.value.trim());
    render();
  });

  document.getElementById("clear-filters").addEventListener("click", function () {
    filters = { search: "", players: 0, time: 0, difficulty: 0 };
    document.getElementById("search").value = "";
    document.querySelectorAll(".chip").forEach(function (c) {
      c.classList.remove("active");
      c.setAttribute("aria-pressed", "false");
    });
    render();
  });

  // Recomendaciones de la casa: tarjetas tipo blog que llevan a la página del juego.
  function renderRecs() {
    var recs = (window.RECOMMENDATIONS || []).filter(function (r) {
      return games.some(function (g) { return g.id === r.game; });
    });
    if (!recs.length) return;
    document.getElementById("recs-row").innerHTML = recs.map(function (r) {
      var game = games.filter(function (g) { return g.id === r.game; })[0];
      var photo = game.images[(r.photo || 1) - 1] || game.images[0];
      return (
        '<a class="rec-card" href="game.html?id=' + encodeURIComponent(game.id) + '">' +
        '<div class="rec-img">' + imageTag(photoSrc(photo), game, "") + "</div>" +
        '<div class="rec-body">' +
        '<span class="rec-label">' + escapeHtml(r.label) + "</span>" +
        "<h3>" + escapeHtml(r.title) + "</h3>" +
        "<p>" + escapeHtml(r.text) + "</p>" +
        '<span class="rec-more">Ver el juego <i class="fa fa-arrow-right"></i></span>' +
        "</div></a>"
      );
    }).join("");
    document.getElementById("recs").hidden = false;
  }

  renderRecs();
  render();
})();
