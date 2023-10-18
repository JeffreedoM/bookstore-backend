import express from "express";
const router = express.Router();

// Model
import { Book } from "../models/bookModel.js";

// Controllers
import {
  createBook,
  deleteBook,
  getAllBooks,
  getOneBook,
  updateBook,
} from "../controllers/bookController.js";

// Routes
// Get all books
router.get("/", getAllBooks);

// Get one book by id
router.get("/:id", getOneBook);

// Create new book
router.post("/", createBook);

// Update book
router.put("/:id", updateBook);

// Delete book
router.delete("/:id", deleteBook);

export const bookRoutes = router;
