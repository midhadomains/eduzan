import cron from 'node-cron';
import { generateSitemap } from './generateSitemap';
import fs from 'fs';
import path from 'path';

const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');

const deleteOldSitemap = () => {
    if (fs.existsSync(SITEMAP_PATH)) {
        fs.unlinkSync(SITEMAP_PATH);
        console.log('Old sitemap deleted.');
    } else {
        console.log('No old sitemap found.');
    }
};

const updateSitemap = async () => {
    try {
        console.log('Deleting old sitemap...');
        deleteOldSitemap();

        console.log('Generating new sitemap...');
        const sitemap = await generateSitemap();
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
