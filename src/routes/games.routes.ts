import express from "express";
import { insertGame } from "../controllers/games.controller.js";

const gamesRoutes = express.Router();
gamesRoutes.post("/game", insertGame);

export { gamesRoutes };
