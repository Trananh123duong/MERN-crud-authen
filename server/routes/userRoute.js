import express from "express";
import { create, getAllUsers, getUserById, update } from "../controller/userController.js";

const route = express.Router();

route.post("/", create)
route.get("/", getAllUsers)
route.get("/:id", getUserById)
route.put("/update/:id", update)

export default route;