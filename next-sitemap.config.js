const { fetchBlogSlugs } = require('./components/lib/FetchBlogSlugs');

/** @type {import('next-sitemap').IConfig} */
const config = async () => {
    const slugs = await fetchBlogSlugs();
    const blogUrls = slugs.map(slug => `/blog/${slug}`);

    return {
        siteUrl: 'https://www.midhafin.com', // Replace with your site's URL
        generateRobotsTxt: true, // Generate a robots.txt file
        changefreq: 'weekly',
        priority: 0.7,
        sitemapSize: 5000,
        exclude: ['/thank-you'], // Exclude specific pages
        robotsTxtOptions: {
            policies: [
                {
                    userAgent: '*',
                    allow: '/',
                    disallow: ['/thank-you'], // Exclude specific pages from crawling
                },
            ],
        },
        additionalPaths: async (config) => {
            return blogUrls.map(url => ({
                loc: url,
                changefreq: 'weekly',
                priority: 0.7,
            }));
        },
    };
};

module.exports = config;
