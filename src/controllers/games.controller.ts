import { Request, Response } from "express";
import { Game } from "../protocols/game.js";
import {
  insertNewGame,
  getGames,
  getGameById,
  deleteGameById,
} from "../repositories/games.repository.js";

async function insertGame(req: Request, res: Response) {
  const { title, price, genre, description } = req.body as Game;
  try {
    await insertNewGame({ title, price: price.toString(), genre, description });
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}
async function listGames(req: Request, res: Response) {
  try {
    const games = await getGames();
    res.send(games.rows);
  } catch (error) {
    res.sendStatus(500);
  }
}
async function deleteGame(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const game = await getGameById(id);
    if (game.rowCount === 0) {
      return res.status(404).send({
        message: "this game does not exist",
      });
    }
    await deleteGameById(id);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { insertGame, listGames, deleteGame };
