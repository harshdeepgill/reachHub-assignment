const express = require("express");
const { getTop50 } = require("../controllers/players.controller");

const playerRouter = express.Router();

playerRouter.get("/top-players", getTop50);

module.exports = {playerRouter};