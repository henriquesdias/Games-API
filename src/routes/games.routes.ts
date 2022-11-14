import express from "express";
import {
  insertGame,
  listGames,
  deleteGame,
  updateGame,
} from "../controllers/games.controller.js";
import { validateBody } from "../middlewares/validate.body.js";

const gamesRoutes = express.Router();
gamesRoutes.post("/game", validateBody, insertGame);
gamesRoutes.get("/game", listGames);
gamesRoutes.delete("/game/:id", deleteGame);
gamesRoutes.put("/game/:id", updateGame);

export { gamesRoutes };
