# Café & Cartón · Menú de juegos

Board game menu for Café & Cartón. Customers scan a QR code at the café, browse the games, filter by number of players, time and difficulty, and see photos and a quick "how to play" for each one.

Plain static site: no build step, no backend. Open `index.html` in a browser, or host the folder on GitHub Pages / Netlify.

## Adding or editing games

Everything lives in [`assets/js/games.js`](assets/js/games.js). Each game is one block; the comment at the top of the file explains every field.

Photos go in `assets/img/games/<game-id>/` (`1.jpg`, `2.jpg`, …). The first photo is used on the menu card.

## Photo credits

Most game photos come from [BoardGameGeek](https://boardgamegeek.com) users and are credited (with a link to the original) under each photo on the game's page.
