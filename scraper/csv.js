const fs = require('fs');
const { parse } = require('json2csv');

/**
 * Writes articles to a CSV file.
 * 
 * @param {string} filename - The name of the CSV file to write to.
 * @param {Array<Object>} articles - An array of objects representing the articles to write.
 * @returns {void}
 */
function write_articles_to_csv(filename, articles) {
    try {
        if (articles.length === 0) {
            console.error('No articles to write.');
            return;
        }

        // Specify fields if needed
        const fields = ['index','rank', 'title', 'link', 'comments', 'upvotes', 'time', 'author', 'articleId'];
        const opts = { fields };

        // Parse data to CSV format
        const csv = parse(articles, opts);

        // Write CSV to file
        fs.writeFileSync(filename, csv);


    } catch (err) {
        // Log the error message
        console.error('Error writing to CSV:', err.message);
    }
};

module.exports = { write_articles_to_csv };
