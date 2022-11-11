import express from "express";
import { insertGame, listGames } from "../controllers/games.controller.js";

const gamesRoutes = express.Router();
gamesRoutes.post("/game", insertGame);
gamesRoutes.get("/game", listGames);

export { gamesRoutes };
