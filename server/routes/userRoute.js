import express from "express";
import { create, deleteUser, getAllUsers, getUserById, update } from "../controller/userController.js";

const route = express.Router();

route.post("/", create)
route.get("/", getAllUsers)
route.get("/:id", getUserById)
route.put("/:id", update)
route.delete("/:id", deleteUser)

export default route;