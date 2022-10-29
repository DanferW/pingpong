import { Router } from "express";

import { getGames, saveGame } from "../controllers/game.controllers.js";

const router = Router();

router.get("/games", getGames);

router.post("/sgame", saveGame);

export default router;
