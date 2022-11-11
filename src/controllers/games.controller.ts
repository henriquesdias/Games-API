import { Request, Response } from "express";
import { Game } from "../protocols/game.js";
import { insertNewGame } from "../repositories/games.repository.js";
import connection from "../database/database.js";

async function insertGame(req: Request, res: Response) {
  const { title, price, genre, description } = req.body as Game;
  try {
    await insertNewGame({ title, price: price.toString(), genre, description });
    res.sendStatus(201);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
}
async function getGames(req: Request, res: Response) {
  try {
    const games = await connection.query("SELECT * FROM games;");
    res.send(games);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
}

export { insertGame, getGames };
