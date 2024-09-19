// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require('playwright');
const { get_articles } = require('../scraper/scraper');
const { write_articles_to_csv } = require('../scraper/csv');
const global_config = require('../backend/config');


async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");
  // console.log(global_config);

  // get the page content (HTML)
  const html = await page.content();

  // use the scraper function to extract articles
  const articles = get_articles(html).slice(0, global_config.num_articles);
  console.log('Extracted Articles:', articles);
  

  // define the output CSV filename
  const filename = 'articles.csv';

  // write the output CSV filename
  write_articles_to_csv(filename, articles);

  // log the success message
  console.log(`Saved ${articles.length} articles to ${filename}`);
}

(async () => {
  await sortHackerNewsArticles();
})();
