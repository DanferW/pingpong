import { Router } from "express";

import { getUsers, saveUser, updateUser } from "../controllers/user.controllers.js";

const router = Router();

router.get("/users", getUsers);

router.post("/suser", saveUser);

router.post("/upuser", updateUser);

export default router;
