import cron from 'node-cron';
import fs from 'fs';
import path from 'path';
import { create } from 'xmlbuilder2';
import { fetchSlugs } from './FetchSlugs';

const SITEMAP_PATH = path.join(__dirname, 'sitemap.xml');

// Function to delete the old sitemap
const deleteOldSitemap = () => {
    if (fs.existsSync(SITEMAP_PATH)) {
        fs.unlinkSync(SITEMAP_PATH);
        console.log('Old sitemap deleted.');
    } else {
        console.log('No old sitemap found.');
    }
};

// Function to generate the sitemap
export const generateSitemap = async (excludeSlugs = ['/api/sitemap', '/api/robots', '/thank-you', '/thank-you', '/_not-found'], excludePages = ['/api/sitemap', '/api/robots', '/thank-you', '/thank-you', '/_not-found']) => {
    const posts = await fetchSlugs();
    const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
    });

    posts.forEach((post) => {
        if (excludeSlugs.includes(post.slug) || excludePages.includes(`/blog/${post.slug}`)) {
            console.warn(`Excluding post: ${post.slug}`);
            return;
        }

        if (post.createdAt) {
            const date = new Date(post.createdAt);
            if (!isNaN(date)) {
                root.ele('url').ele('loc').txt(`https://www.midhafin.com/blog/${post.slug}`).up()
                    .ele('lastmod').txt(date.toISOString()).up();
            } else {
                console.warn(`Invalid date for post: ${post.slug}`);
            }
        } else {
            console.warn(`Missing or null createdAt for post: ${post.slug}`);
            root.ele('url').ele('loc').txt(`https://www.midhafin.com/blog/${post.slug}`).up();
        }
    });

    // Add general pages
    excludePages.forEach((page) => {
        root.ele('url').ele('loc').txt(`https://www.midhafin.com${page}`).up();
    });

    return root.end({ prettyPrint: true });
};

// Function to update the sitemap
const updateSitemap = async () => {
    try {
        console.log('Deleting old sitemap...');
        deleteOldSitemap();

        console.log('Generating new sitemap...');
        const sitemap = await generateSitemap(['thank-you', '_not-found']);
        fs.writeFileSync(SITEMAP_PATH, sitemap);
        console.log('New sitemap generated successfully.');
    } catch (error) {
        console.error('Error updating sitemap:', error);
    }
};

// Schedule the sitemap update every 3 days at midnight
cron.schedule('0 0 */3 * *', updateSitemap);

// Manually trigger sitemap update for immediate update if needed
(async () => {
    await updateSitemap();
})();
