const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const csv = require('csv-parser');

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Endpoint to get articles from the CSV
app.get('/articles', (_req, res) => {
    const articles = [];
    // Reading the CSV file
    fs.createReadStream(path.join(__dirname, '../articles.csv'))
        .pipe(csv()) // Parses CSV
        .on('data', (row) => {
            articles.push(row); // Adds each row (article) to the articles array
        })
        .on('end', () => {
            res.json(articles); // Sends the articles array as a JSON response
        });
});

// Serve index.html at the root route
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
