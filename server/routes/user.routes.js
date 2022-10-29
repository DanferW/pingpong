import { Router } from "express";

import { getUsers, saveUser } from "../controllers/user.controllers.js";

const router = Router();

router.get("/users", getUsers);

router.post("/suser", saveUser);

export default router;
