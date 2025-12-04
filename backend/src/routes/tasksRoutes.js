import express from "express";
import {
  createTasks,
  deleteTask,
  getAllTasks,
  updateTasks,
} from "../controllers/tasksControllers.js";

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTasks);

router.put("/:id", updateTasks);

router.delete("/:id", deleteTask);

export default router;
