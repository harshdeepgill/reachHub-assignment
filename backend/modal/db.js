const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "reachhub_players",
    password: "harshdeepgill",
    port: 7676
});

module.exports = pool;