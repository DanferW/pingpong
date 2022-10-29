import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  database: "ping_pong",
  user: "root",
  password: "root",
});

connection.connect((err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(`Connection error: ${err.stack}`);
    return;
  }
  // eslint-disable-next-line no-console
  console.log(`Connected with identifier ${connection.threadId}`);
});

export default connection;
