// This script can be run periodically to notify search engines about sitemap updates
const https = require("https")

const pingSearchEngines = () => {
  const sitemapUrl = encodeURIComponent("https://solveside.co.za/sitemap-index.xml")
  const sitemaps = [
    encodeURIComponent("https://solveside.co.za/sitemap.xml"),
    encodeURIComponent("https://solveside.co.za/google-sitemap.xml"),
    encodeURIComponent("https://solveside.co.za/image-sitemap.xml"),
    encodeURIComponent("https://solveside.co.za/news-sitemap.xml"),
    encodeURIComponent("https://solveside.co.za/hreflang-sitemap.xml"),
  ]

  // Ping Google
  https
    .get(`https://www.google.com/ping?sitemap=${sitemapUrl}`, (res) => {
      console.log("Google ping response status for sitemap-index:", res.statusCode)
    })
    .on("error", (e) => {
      console.error("Error pinging Google for sitemap-index:", e)
    })

  // Ping Bing
  https
    .get(`https://www.bing.com/ping?sitemap=${sitemapUrl}`, (res) => {
      console.log("Bing ping response status for sitemap-index:", res.statusCode)
    })
    .on("error", (e) => {
      console.error("Error pinging Bing for sitemap-index:", e)
    })

  // Ping for individual sitemaps
  sitemaps.forEach((sitemap) => {
    // Ping Google
    https
      .get(`https://www.google.com/ping?sitemap=${sitemap}`, (res) => {
        console.log(`Google ping response status for ${sitemap}:`, res.statusCode)
      })
      .on("error", (e) => {
        console.error(`Error pinging Google for ${sitemap}:`, e)
      })

    // Ping Bing
    https
      .get(`https://www.bing.com/ping?sitemap=${sitemap}`, (res) => {
        console.log(`Bing ping response status for ${sitemap}:`, res.statusCode)
      })
      .on("error", (e) => {
        console.error(`Error pinging Bing for ${sitemap}:`, e)
      })
  })
}

pingSearchEngines()
