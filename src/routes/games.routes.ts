import express from "express";
import {
  insertGame,
  listGames,
  deleteGame,
} from "../controllers/games.controller.js";

const gamesRoutes = express.Router();
gamesRoutes.post("/game", insertGame);
gamesRoutes.get("/game", listGames);
gamesRoutes.delete("/game/:id", deleteGame);

export { gamesRoutes };
