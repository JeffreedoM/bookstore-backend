import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { bookRoutes } from "./routes/books.js";
import "dotenv/config";
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/books", bookRoutes);

// CONNECTION
const DB_CONNECTION = process.env.DB_CONNECTION;
const PORT = process.env.PORT;

mongoose
  .connect(DB_CONNECTION)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
