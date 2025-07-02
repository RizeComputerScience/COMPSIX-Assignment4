const express = require('express');
const app = express();
const PORT = 3000;

// In-memory storage for books
let books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        copiesAvailable: 5
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        copiesAvailable: 3
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        copiesAvailable: 7
    }
];


//  Create your REST API here












// Start the server
const server = app.listen(PORT, () => {
    console.log(`Bookstore API running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to see available endpoints`);
});

module.exports = { app, server };