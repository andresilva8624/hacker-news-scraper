class Config {
  constructor(url, num_articles) {
    this.url = url;
    this.num_articles = num_articles;
  }
}
const global_config = new Config("https://news.ycombinator.com/newest", 100);
console.log('Global Config:', global_config); 

module.exports = global_config.num_articles; // Exporting the config
