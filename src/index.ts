import express from "express";
import { gamesRoutes } from "./routes/games.routes.js";

const server = express();
server.use(express.json());
server.use(gamesRoutes);

server.listen(4000, () => console.log(`Listening on port 4000`));
