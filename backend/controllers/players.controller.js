const pool = require("../modal/db")

const getTop50 = (req, res) => {
    pool.query("SELECT id, username, (to_json(perfs)->'classical'->>'rating')::integer AS rating FROM player ORDER BY rating DESC LIMIT 50", (error, result) => {
        if (error) throw error;
        res.status(200).send(result.rows);
    })
}

module.exports = {
    getTop50,
}