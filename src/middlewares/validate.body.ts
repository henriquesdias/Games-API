import { Request, Response, NextFunction } from "express";
import { gameSchema } from "../schemas/games.js";
import { Game } from "../protocols/game";

function validateBody(req: Request, res: Response, next: NextFunction) {
  const { title, price, genre, description } = req.body as Game;
  const validate = gameSchema.validate(
    { title, price, genre, description },
    { abortEarly: false }
  );
  if (validate.error) {
    return res.status(422).send(validate.error.details.map((e) => e.message));
  }
  res.locals.body = { title, price, genre, description };
  next();
}

export { validateBody };
