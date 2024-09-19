const fs = require('fs');
const { parse } = require('json2csv');
/**
 * Writes articles to a CSV file.
 * 
 * @param {string} scraper - The name of the CSV file to write to.
 * @param {Array<Object>} articles - An array of objects representing the articles to write.
 * @returns {void}
 */
function write_articles_to_csv(scraper, articles) {
    try {
        // Specify fields if needed
        const fields = ['title', 'link', 'comments', 'upvotes', 'time', 'author', 'articleId'];
        const opts = { fields };

        // Parse data to CSV format
        const csv = parse(articles, opts);

        // Write CSV to file
        fs.writeFileSync(scraper, csv);
    } catch (err) {
        console.error(err);
    }
};

module.exports = {write_articles_to_csv};
