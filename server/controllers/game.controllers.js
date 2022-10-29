import connection from "../dbConnection.js";

export const getGames = (req, res) => {
  connection.query("SELECT * FROM game", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

export const saveGame = (req, res) => {
  const { users, winner } = req.body;
  connection.query("INSERT INTO game(user_id, winner) VALUES(?,?)", [
    users,
    winner,
  ]);
  res.sendStatus(200);
};
