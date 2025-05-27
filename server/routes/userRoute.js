import express from "express";
import { create, getAllUsers } from "../controller/userController.js";

const route = express.Router();

route.post("/", create)
route.get("/", getAllUsers)

export default route;