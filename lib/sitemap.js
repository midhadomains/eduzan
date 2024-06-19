import cron from 'node-cron';
import fs from 'fs';
import path from 'path';
import { create } from 'xmlbuilder2';
import { getPostSlugs } from './posts';

const SITEMAP_PATH = path.join(process.cwd(), 'sitemap.xml');

// Function to delete the old sitemap
const deleteOldSitemap = () => {
    try {
        if (fs.existsSync(SITEMAP_PATH)) {
            fs.unlinkSync(SITEMAP_PATH);
            console.log('Old sitemap deleted.');
        } else {
            console.log('No old sitemap found.');
        }
    } catch (error) {
        console.error('Error deleting old sitemap:', error);
    }
};

// Function to generate the sitemap
export const generateSitemap = async (excludeSlugs = ['/api/sitemap', '/api/robots', '/thank-you', '/_not-found', '/career', '/api/comment', '/api/form', '/revalidate', '/category/[categoryName]', '/api', '/category'], excludePages = ['/api/sitemap', '/api', '/category', '/category/[categoryName]', '/api/robots', '/thank-you', '/_not-found', '/career', '/api/comment', '/api/form', '/revalidate']) => {
    let slugs;
    try {
        slugs = await getPostSlugs();
    } catch (error) {
        console.error('Error fetching post slugs:', error);
        return '';
    }

    const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
    });

    slugs.forEach((post) => {
        if (excludeSlugs.includes(post.slug) || excludePages.includes(`/${post.slug}`)) {
            console.warn(`Excluding post: ${post.slug}`);
            return;
        }

        const date = new Date();
        root.ele('url').ele('loc').txt(`https://www.midhafin.com/${post.slug}`).up()
            .ele('lastmod').txt(date.toISOString()).up();
    });

    // Add general pages
    const pages = ['/', '/about-us', '/access-till-you-pass', '/blog', '/complete-study-material', '/contact-us', '/doubt-solving-forum', '/faqs', '/industry-expert-faculty', '/lecture-videos', '/mock-tests', '/privacy-policy', '/question-banks', '/refund-policy', '/reviews', '/study-groups', '/study-planner', '/terms-of-use']; // Add your static pages here
    pages.forEach((page) => {
        if (!excludePages.includes(page)) {
            root.ele('url').ele('loc').txt(`https://www.midhafin.com/${page}`).up();
        }
    });

    return root.end({ prettyPrint: true });
};

// Function to update the sitemap
const updateSitemap = async () => {
    try {
        console.log('Deleting old sitemap...');
        deleteOldSitemap();

        console.log('Generating new sitemap...');
        const sitemap = await generateSitemap();
        if (sitemap) {
            fs.writeFileSync(SITEMAP_PATH, sitemap);
            console.log('New sitemap generated successfully.');
        } else {
            console.error('Sitemap generation returned an empty result.');
        }
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
