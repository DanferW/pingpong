import connection from "../dbConnection.js";

export const getGames = (req, res) => {
  connection.query("SELECT * FROM game", (err, result) => {
    if (!result.lenght) {
      res.status(500).json({ message: "No games found" });
    } else {
      res.send(result);
    }
  });
};

export const saveGame = (req, res) => {
  try {
    const { player1, player2, winner } = req.body;
    connection.query("INSERT INTO game(player1, player2, winner) VALUES(?,?,?)", [
      player1,
      player2,
      winner,
    ]);
    res.sendStatus(200);
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
