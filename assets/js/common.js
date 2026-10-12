// Funciones compartidas entre el menú y la página de cada juego.

var DIFFICULTY = { 1: "Ligero", 2: "Medio", 3: "Complejo" };

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Minúsculas y sin acentos, para que "codigo" encuentre "Código".
function normalize(text) {
  return String(text).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function rangeText(range, unit) {
  var text = range.min === range.max ? range.min : range.min + "–" + range.max;
  return text + (unit ? " " + unit : "");
}

function playersText(game) {
  return rangeText(game.players) + (game.players.max === 1 ? " jugador" : " jugadores");
}

function timeText(game) {
  return rangeText(game.time, "min");
}

// Elige un color fijo por juego para que las imágenes provisionales no se vean iguales.
function placeholderColor(name) {
  var colors = ["#00A9B1", "#E85A0C", "#785800", "#2B2B2B"];
  var sum = 0;
  for (var i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return colors[sum % colors.length];
}

// Imagen SVG que se usa mientras no se agrega la foto del juego.
function placeholderImage(name) {
  var initials = name
    .split(/[\s:]+/)
    .filter(function (w) { return w && !/^(of|the|and|a|de|del|la|el|y)$/i.test(w); })
    .slice(0, 2)
    .map(function (w) { return w[0].toUpperCase(); })
    .join("");
  var svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
    '<rect width="400" height="300" fill="' + placeholderColor(name) + '"/>' +
    '<text x="200" y="165" font-family="Roboto, Arial, sans-serif" font-size="96" font-weight="700" ' +
    'fill="#fff" fill-opacity="0.9" text-anchor="middle">' + escapeHtml(initials) + "</text>" +
    '<text x="200" y="250" font-family="Roboto, Arial, sans-serif" font-size="18" ' +
    'fill="#fff" fill-opacity="0.8" text-anchor="middle">Foto próximamente</text>' +
    "</svg>";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// Una foto puede ser solo la ruta ("...jpg") o { src, credit, link }.
function photoSrc(photo) {
  return photo && typeof photo === "object" ? photo.src : photo;
}

// Texto "Foto: autor" (con link si hay) para mostrar debajo de la foto.
function photoCredit(photo) {
  if (!photo || typeof photo !== "object" || !photo.credit) return "";
  var name = escapeHtml(photo.credit);
  if (photo.link) {
    name = '<a href="' + escapeHtml(photo.link) + '" target="_blank" rel="noopener">' + name + "</a>";
  }
  return "Foto: " + name;
}

// Etiqueta <img> que muestra la imagen provisional si falta el archivo de la foto.
function imageTag(src, game, className, extra) {
  var fallback = placeholderImage(game.name);
  return (
    '<img class="' + className + '" src="' + escapeHtml(src || fallback) + '" alt="' +
    escapeHtml(game.name) + '" loading="lazy" ' + (extra || "") +
    " onerror=\"this.onerror=null;this.src='" + fallback + "'\">"
  );
}

function difficultyDots(level) {
  var html = "";
  for (var i = 1; i <= 3; i++) {
    html += '<span class="dot' + (i <= level ? " on" : "") + '"></span>';
  }
  return '<span class="difficulty" title="' + DIFFICULTY[level] + '">' + html + "</span>";
}
