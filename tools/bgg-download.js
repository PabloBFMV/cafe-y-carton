// Downloads BoardGameGeek photos for a game and prints who uploaded each one.
//
// Usage:  node tools/bgg-download.js <game-id> <n>:<bgg-image-id> [<n>:<bgg-image-id> ...]
// Example: node tools/bgg-download.js love-formula 1:3613252 2:5334926
//
// Saves assets/img/games/<game-id>/<n>.<ext> (large size, ~1024px) and prints,
// per photo, the file name, uploader username and the BGG game id it belongs to,
// which is what games.js needs for the credit.

const fs = require("fs");
const path = require("path");

async function json(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(url + " -> HTTP " + res.status);
  return res.json();
}

(async () => {
  const [gameId, ...pairs] = process.argv.slice(2);
  if (!gameId || !pairs.length) {
    console.error("Usage: node tools/bgg-download.js <game-id> <n>:<bgg-image-id> ...");
    process.exit(1);
  }
  const out = path.join(__dirname, "..", "assets", "img", "games", gameId);
  fs.mkdirSync(out, { recursive: true });

  for (const pair of pairs) {
    const [n, imageId] = pair.split(":");
    const img = await json("https://api.geekdo.com/api/images/" + imageId);
    const user = await json("https://api.geekdo.com/api/users/" + img.uploader);
    const url = img.images.large.url;
    const ext = path.extname(new URL(url).pathname) || ".jpg";
    const res = await fetch(url);
    if (!res.ok) throw new Error(imageId + " -> HTTP " + res.status);
    const file = path.join(out, n + ext);
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
    const bggGame = (img.browse_href || "").split("/")[2];
    console.log(
      n + ext + " | " + user.username + " | " + img.canonical_link +
      " | bgg game " + bggGame + " | " + JSON.stringify(img.caption)
    );
  }
})().catch((e) => { console.error(e.message); process.exit(1); });
