import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getCategoryBySlug,
} from "../controllers/categoryController.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

router.use(checkAuth);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.get("/slug/:slug", getCategoryBySlug);

export default router;
