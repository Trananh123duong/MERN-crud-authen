import express from "express";
import { create, getAllUsers, getUserById } from "../controller/userController.js";

const route = express.Router();

route.post("/", create)
route.get("/", getAllUsers)
route.get("/:id", getUserById)

export default route;