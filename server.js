const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 

const app = express();
const PORT = 3000;


app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// In-memory database
let books = [];

// Endpoints

// GET: Retrieve all books or a book by ISBN
app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:isbn", (req, res) => {
  const book = books.find((b) => b.isbn === req.params.isbn);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(book);
});

// POST: Add a new book
app.post("/books", (req, res) => {
  const { title, author, publisher, publishedDate, isbn } = req.body;
  if (!title || !author || !isbn) {
    return res
      .status(400)
      .json({ error: "Title, Author, and ISBN are required" });
  }
  const bookExists = books.some((b) => b.isbn === isbn);
  if (bookExists) {
    return res
      .status(400)
      .json({ error: "Book with this ISBN already exists" });
  }
  const newBook = { title, author, publisher, publishedDate, isbn };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT/PATCH: Update a book by ISBN
app.put("/books/:isbn", (req, res) => {
  const { title, author, publisher, publishedDate } = req.body;
  const book = books.find((b) => b.isbn === req.params.isbn);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;
  if (publisher) book.publisher = publisher;
  if (publishedDate) book.publishedDate = publishedDate;

  res.json(book);
});

// DELETE: Remove a book by ISBN
app.delete("/books/:isbn", (req, res) => {
  const index = books.findIndex((b) => b.isbn === req.params.isbn);
  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }
  books.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
