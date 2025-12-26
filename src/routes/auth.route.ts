import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";


let authController = new AuthController();
const router = Router();

router.post("/register",authController.register)
// add remaining route like login, logout, etc.

export default router;