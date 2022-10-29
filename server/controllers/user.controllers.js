import connection from "../dbConnection.js";

export const getUsers = (req, res) => {
  connection.query("SELECT * FROM user", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
};

export const saveUser = (req, res) => {
  const { name, wins, games } = req.body;
  connection.query(
    "INSERT INTO user(name, wins, games) VALUES(?,?,?)",
    [name, wins, games],
    (err) => {
      if (err) throw err;
      res.send("Saved user");
    }
  );
};
