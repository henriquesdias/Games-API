import connection from "../database/database.js";
import { Game } from "../protocols/game";

async function insertNewGame(game: Game) {
  return await connection.query(
    "INSERT INTO games (title, price, genre, description) VALUES ($1,$2,$3,$4)",
    [game.title, game.price, game.genre, game.description]
  );
}

export { insertNewGame };
