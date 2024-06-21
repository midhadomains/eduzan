import cron from 'node-cron';
import fs from 'fs';
import path from 'path';
import { create } from 'xmlbuilder2';
import { getPostSlugs } from './posts';

const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');

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

export const generateSitemap = async () => {
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

    // Add slugs to the sitemap
    slugs.forEach((postSlug) => {
        const date = new Date();
        root.ele('url').ele('loc').txt(`https://www.midhafin.com/${postSlug}`).up()
            .ele('lastmod').txt(date.toISOString()).up();
    });

    // Add static pages to the sitemap
    const pages = ['/', '/about-us', '/access-till-you-pass', '/blog', '/complete-study-material', '/contact-us', '/doubt-solving-forum', '/faqs', '/industry-expert-faculty', '/lecture-videos', '/mock-tests', '/privacy-policy', '/question-banks', '/refund-policy', '/reviews', '/study-groups', '/study-planner', '/terms-of-use'];
    pages.forEach((page) => {
        root.ele('url').ele('loc').txt(`https://www.midhafin.com${page}`).up();
    });

    return root.end({ prettyPrint: true });
};

export const updateSitemap = async () => {
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

cron.schedule('0 0 */3 * *', updateSitemap);

(async () => {
    await updateSitemap();
})();
