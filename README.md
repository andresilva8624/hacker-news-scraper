# QA Wolf
## Overview
This project is a web scraper for Hacker News articles, built using Node.js and Playwright. It retrieves articles and organizes them based on when they were posted. The frontend component allows for easy viewing of the results, and the backend handles scraping including all the info.

### Technologies Used:
- **Playwright**, **Cheerio** for scraping
- **Express**, **Open** for the frontend
- **Node.js**, **Axios**, **Csv** for the backend

## Setup Instructions

### Prerequisites:
- Node.js and npm installed.

### Installation:
1. Clone the repository:
    ```bash
    git clone https://github.com/andresilva8624/qa-wolf.git
    cd qa-wolf
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the frontend server:
    ```bash
    npm start
    ```

4. Start the backend server:
    ```bash
    cd backend
    node server.js
    ```



### Demo Videos:
- [Watch the Demo Video](https://www.loom.com/share/77dc0d3bfb3e46218f1310dca1df1ca6?sid=029b6cac-b49a-4d7f-8e9a-41b55084602d) - Includes the full project installation and scraper demo.
- [Why QA Wolf Video](https://www.loom.com/share/bce358ad18dd4438bf45d6450a17939e?sid=16c3165c-44bd-45b2-97e9-97b31516539d) - Explains my interest in the QA Wolf team and this project.

## Usage
- The backend will scrape 100 posts from Hacker News including title, author, upvotes, comments, rank, articleId .
- The frontend displays a list of the first 100 posts from newest to oldest .

## Author
  
  <footer>
    <p>&copy; 2024 Hacker News Scraper by Andre Silva. All rights reserved.</p>
</footer>
