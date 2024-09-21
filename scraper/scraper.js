const axios = require('axios');
const cheerio = require('cheerio');

// Fetch HTML from the given URL
async function fetchHTML(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching HTML:', error);
    return null;
  }
}

// Parse the HTML and extract articles
function get_articles(html, startIndex) {
  const $ = cheerio.load(html);
  const articles = [];



  $('.athing').each((i, el) => {
    const title = $(el).find('.titleline a').text().trim();
    const author = $(el).next().find('.subline a').first().text().trim();  // Extract author
    const link = $(el).find('.titleline a').attr('href');
    const articleId = $(el).attr('id');
    const commentText = $(el).next().find('.subline a').last().text().trim();  // Extract comments link
    const comments = commentText === 'discuss' || commentText === '' ? '0 comments' : commentText;
    const upvotes = $(el).next().find('.score').text().trim() || '0 upvotes' ;  // Extract upvotes
    const time = $(el).next().find('.age').text().trim();  // Extract time shared


    // console.log(`Article scraped: ${title}`);

    articles.push({ 
      index: startIndex + i,
      title, link, comments, upvotes, time, author, articleId });
  });

  console.log("Articles found:", articles.length);

  return articles;
}
// Example: Scrape website and return parsed data
async function scrapeWebsite(url, pageNum) {
  const html = await fetchHTML(url);
  if (html) {
    return get_articles(html, pageNum);
  } else {
    return [];
  }
}

module.exports = { get_articles, scrapeWebsite };
