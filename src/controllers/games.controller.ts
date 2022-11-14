import { Request, Response } from "express";
import { Game } from "../protocols/game.js";
import {
  insertNewGame,
  getGames,
  getGameById,
  deleteGameById,
  getGameByTitle,
  updatePriceOfGame,
  getGameByGenre,
} from "../repositories/games.repository.js";
import { priceSchema } from "../schemas/games.js";

async function insertGame(req: Request, res: Response) {
  const { title, price, genre, description } = res.locals.body as Game;
  try {
    const game = await getGameByTitle(title);
    if (game.rowCount !== 0) {
      return res
        .status(409)
        .send({ message: "There is already a game with that name" });
    }
    await insertNewGame({ title, price: price.toString(), genre, description });
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}
async function listGames(req: Request, res: Response) {
  const { genre } = req.query;
  try {
    if (genre) {
      const games = await getGameByGenre(genre);
      return res.status(200).send(games.rows);
    }
    const games = await getGames();
    res.status(200).send(games.rows);
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
async function updateGame(req: Request, res: Response) {
  const { id } = req.params;
  const { price } = req.body;
  const validate = priceSchema.validate({ price });
  if (validate.error) {
    return res.status(422).send(validate.error.details.map((e) => e.message));
  }
  try {
    const game = await getGameById(id);
    if (game.rowCount === 0) {
      return res.status(404).send({
        message: "this game does not exist",
      });
    }
    updatePriceOfGame({ price, id });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { insertGame, listGames, deleteGame, updateGame };
