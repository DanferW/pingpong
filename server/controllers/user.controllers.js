import connection from "../dbConnection.js";

export const getUsers = (req, res) => {
  try {
    connection.query("SELECT * FROM user", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveUser = (req, res) => {
  try {
    const { player1, player2 } = req.body;
    const sql = "INSERT INTO user(name, wins, games) VALUES(?,?,?)";
    connection.query(sql, [player1, 0, 0], (err) => {
      if (err) throw err;
    });
    connection.query(sql, [player2, 0, 0], (err) => {
      if (err) throw err;
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = (req, res) => {
  try {
    const {
      player1, p1wins, player2, p2wins,
    } = req.body;
    const sql = "UPDATE user SET wins = wins + ?, games = games + 1 WHERE name= ? ";
    connection.query(sql, [p1wins, player1], (err) => {
      if (err) throw err;
    });
    connection.query(sql, [p2wins, player2], (err) => {
      if (err) throw err;
    });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};
