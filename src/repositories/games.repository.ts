import connection from "../database/database.js";
import { Game } from "../protocols/game";

async function insertNewGame(game: Game) {
  return await connection.query(
    "INSERT INTO games (title, price, genre, description) VALUES ($1,$2,$3,$4)",
    [game.title, game.price, game.genre, game.description]
  );
}
async function getGames() {
  return await connection.query("SELECT * FROM games;");
}
async function getGameById(id: string) {
  return await connection.query("SELECT * FROM games WHERE id = $1", [id]);
}
async function deleteGameById(id: string) {
  return await connection.query("DELETE FROM games WHERE id = $1", [id]);
}
async function getGameByTitle(title: string) {
  return await connection.query("SELECT * FROM games WHERE title = $1", [
    title,
  ]);
}
async function updatePriceOfGame(game: { price: string; id: string }) {
  return connection.query("UPDATE games SET price = $1 WHERE id = $2;", [
    game.price,
    game.id,
  ]);
}

export {
  insertNewGame,
  getGames,
  getGameById,
  deleteGameById,
  getGameByTitle,
  updatePriceOfGame,
};
