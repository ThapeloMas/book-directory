  ### setup and Usage
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/book-directory.git
cd book-directory
2. ##  Install Dependencies
bash
Copy code
npm install
3. ## Start the Backend Server
bash
Copy code
node server.js
The API will be available at http://localhost:3000.

4. ## Open the Frontend
Use a Live Server (e.g., VS Code extension) or open index.html in a browser.

📚 ## API Endpoints
Base URL: http://localhost:3000
Method	Endpoint	Description
GET	/books	Get a list of all books
GET	/books/:isbn	Get details of a specific book by ISBN
POST	/books	Add a new book
PUT	/books/:isbn	Update an existing book
DELETE	/books/:isbn	Remove a book by ISBN
Example JSON for POST/PUT Requests:
json
Copy code
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publisher": "Scribner",
  "publishedDate": "1925-04-10",
  "isbn": "9780743273565"
}
🔍##  CORS Configuration
CORS is enabled by default, allowing requests from all origins. You can restrict access by modifying the cors settings in server.js:

javascript
Copy code
app.use(cors({
   origin: 'http://127.0.0.1:5500',
}));
🐞 Common Issues
1. ## CORS Error:
Ensure the backend server is running and CORS is properly configured.
Restart the server if changes are made to server.js.
2. ## Styles Not Loading:
Verify the path to styles.css in index.html.
Use a Live Server to serve the files correctly.
3. ## Failed to Fetch:
Check if the backend server is running (http://localhost:3000).
Ensure the API endpoint URLs in script.js are correct.
📜 License
This project is licensed under the MIT License.

 ## Acknowledgements
Node.js Documentation
Express.js Documentation
MDN Web Docs
Feel free to fork and enhance this project! Contributions are welcome. 😊