import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import gameRoutes from "./routes/game.routes.js";

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(gameRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${PORT}`);
});

export default app;
