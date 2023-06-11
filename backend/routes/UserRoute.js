import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  Register,
  Login,
  Logout,
} from "../controller/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
// router.post("/users", createUser);
router.get("/users/:id", getUserById);
// router.patch("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

export default router;
