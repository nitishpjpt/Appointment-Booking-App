import {Router} from "express";
import {adminLogin, adminRegister} from "../../controller/admin.controller.js";

const authRoutes = Router();

authRoutes.post("/register", adminRegister);
authRoutes.post("/login" , adminLogin);

export default authRoutes;
