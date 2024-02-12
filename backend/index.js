const express = require("express");
const { playerRouter } = require("./routes/player.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/", playerRouter);

app.listen( 3000, () => {
    console.log("connected to server.");
})