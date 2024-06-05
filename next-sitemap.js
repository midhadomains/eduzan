module.exports = {
    siteUrl: 'https://midhafin.com', // Replace with your site's URL
    generateRobotsTxt: true, // Generate a robots.txt file
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/secret-page',], // Exclude specific pages
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/secret-page'], // Exclude specific pages from crawling
            },
        ],
    },
};
