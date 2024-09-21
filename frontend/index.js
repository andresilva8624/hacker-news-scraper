const { chromium } = require('playwright');
const { get_articles } = require('../scraper/scraper');
const { write_articles_to_csv } = require('../scraper/csv');

async function navigateWithRetries(page, url, retries = 3) {
    let attempts = 0;
    while (attempts < retries) {
        try {
            await page.goto(url, { waitUntil: 'load' });
            return true; // Navigation successful
        } catch (error) {
            console.error(`Error navigating to ${url}, attempt ${attempts + 1}`);
            attempts++;
            if (attempts >= retries) {
                console.error(`Failed to navigate to ${url} after ${retries} attempts`);
                return false; // Failed after max attempts
            }
            // Optional: add a short delay before retrying
            await page.waitForTimeout(100);
        }
    }
}

async function sortHackerNewsArticles() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    let articles = [];
    let seenArticleTitle = new Set();
    let articleIndex = 1;

    // Navigate to the Hacker News "newest" page
    const url = 'https://news.ycombinator.com/newest';
    const success = await navigateWithRetries(page, url);


    if (!success) {
        console.error('Could not load the Hacker News page.');
        await browser.close();
        return; // Exit early if the initial navigation fails
    }

    while (articles.length < 100) {
        await page.waitForSelector('.athing');

        const html = await page.content();
        const extractedArticles = get_articles(html, articleIndex);
        console.log('Extracted Articles:', articles);

        const uniqueArticles = extractedArticles.filter(article => {
            if (!seenArticleTitle.has(article.title)) {
                seenArticleTitle.add(article.title);
                return true;
            }
            return false;
        });

        articles.push(...uniqueArticles);
        articleIndex += uniqueArticles.length;

        console.log(`Collected ${uniqueArticles.length} unique articles.`);

        if (articles.length >= 100) {
            break;
        }

        // Click the "More" button to load the next page
        try {
            await page.click('a.morelink');
        } catch (error) {
            console.error('Error clicking the "More" button. Exiting...');
            break; // Exit if we can't click the button
        }

        await page.waitForTimeout(200); // Wait for the next page to load
    }

    const limitedArticles = articles.slice(0, 100);
    console.log(`Total Articles Collected: ${limitedArticles.length}`);

    const filename = './scraper/articles.csv';
    await write_articles_to_csv(filename, limitedArticles);
    console.log(`Saved ${limitedArticles.length} articles to ${filename}`);

}

(async () => {
    await sortHackerNewsArticles();
})();
