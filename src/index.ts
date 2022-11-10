import express from "express";
import dotenv from "dotenv";
import { Game } from "./protocols/game";
import { Request, Response } from "express";
// import cors from "cors";
dotenv.config();

const server = express();
server.use(express.json());
// server.use(cors());

server.post("/", (req: Request, res: Response) => {
  const game = req.body as Game;
  res.send(game);
});

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
