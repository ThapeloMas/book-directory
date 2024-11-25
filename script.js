const apiUrl = "http://localhost:3000/books";

const bookList = document.getElementById("bookList");
const addBookForm = document.getElementById("addBookForm");

// Fetch and display books
async function fetchBooks() {
  const response = await fetch(apiUrl);
  const books = await response.json();
  bookList.innerHTML = "";
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
    bookList.appendChild(li);
  });
}

// Add a new book
addBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    publisher: document.getElementById("publisher").value,
    publishedDate: document.getElementById("publishedDate").value,
    isbn: document.getElementById("isbn").value,
  };

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });

  addBookForm.reset();
  fetchBooks();
});

// Load books on page load
fetchBooks();
