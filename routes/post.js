import express from "express";
import { addBook, getBooks, deleteBook, updateBook, getBook,
getMovies, addMovie, deleteMovie, updateMovie, getMovie,
getShows, addShow, deleteShow, updateShow, getShow, } from "../controllers/post.js";

const router = express.Router();

//Books
router.get("/books/:id", getBooks);
router.post("/books/:id", addBook);
router.delete("/books/:bid", deleteBook);
router.put("/books/:id", updateBook);
router.get("/books/:id/:bid", getBook);

//Movies
router.get("/movies/:id", getMovies);
router.post("/movies/:id", addMovie);
router.delete("/movies/:bid", deleteMovie);
router.put("/movies/:id", updateMovie);
router.get("/movies/:id/:bid", getMovie);

//Shows
router.get("/shows/:id", getShows);
router.post("/shows/:id", addShow);
router.delete("/shows/:bid", deleteShow);
router.put("/shows/:id", updateShow);
router.get("/shows/:id/:bid", getShow);


export default router;