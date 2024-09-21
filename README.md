# QA Wolf Take-Home Assignment

## Overview
This project is a web scraper for Hacker News articles, built using Node.js and React. It retrieves articles and organizes them based on when they were posted. The frontend component allows for easy viewing of the results, and the backend handles scraping and validation.

### Technologies Used:
- **Playwright** for scraping
- **React** for the frontend
- **Node.js** for the backend

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
- [Watch the Demo Video](LOOM_LINK_DEMO) - Includes the full project installation and scraper demo.
- [Why QA Wolf Video](LOOM_LINK_WHY_QA_WOLF) - Explains my interest in the QA Wolf team and this project.

## Usage
- The backend will scrape 100 posts from Hacker News including title, author, upvotes, comments, rank, articleId .
- The frontend displays the a list of the posts
