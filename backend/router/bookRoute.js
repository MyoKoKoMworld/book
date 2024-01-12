import { Router } from "express";
import { bookModel } from "../models/bookModel.js";

const router = Router();

// create books
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publicYear) {
      res.status(400).send({
        message: "seand all required fields: title,author,publicyear",
      });
      return;
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publicYear: req.body.publicYear,
    };
    const book = await bookModel.create(newBook);
    res.status(201).send(book);
    return;
  } catch (error) {
    res.status(500).send(error);
  }
});

// get books
router.get("/", async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json({ count: books.length, data: books });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get by one book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update book
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body.title || !req.body.author || !req.body.publicYear) {
      res.status(400).send({
        message: "seand all required fields: title,author,publicyear",
      });
      return;
    }

    const result = await bookModel.findByIdAndUpdate(id, req.body);

    if (!result) {
      res.status(404).json({ message: "book not found" });
      return;
    }

    res.status(200).json({ message: "book update success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await bookModel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "book not found" });
    }

    return res.status(200).json({ message: "book deleted success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
