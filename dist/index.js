import express from "express";
import dotenv from "dotenv";
dotenv.config();
var server = express();
server.use(express.json());
// server.get("/", getGames);
server.listen(process.env.PORT, function () {
    return console.log("Listening on port ".concat(process.env.PORT));
});
