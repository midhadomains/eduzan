import { getPostSlugs } from '../lib/posts';
import cron from 'node-cron';

export default async function generateSitemap() {
    let slugs;
    try {
        slugs = await getPostSlugs();
        console.log(slugs);
    } catch (error) {
        console.error('Error fetching post slugs:', error);
        return [];
    }

    const sitemapEntries = [
        {
            url: 'https://www.midhafin.com/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://www.midhafin.com/about-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/access-till-you-pass',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://www.midhafin.com/complete-study-material',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/contact-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/doubt-solving-forum',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/faqs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/industry-expert-faculty',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/lecture-videos',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/mock-tests',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/question-banks',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/refund-policy',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/reviews',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/study-groups',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/study-planner',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.midhafin.com/terms-of-use',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }
    ];

    // Add dynamically fetched slugs to the sitemap entries
    slugs.forEach(slug => {
        sitemapEntries.push({
            url: `https://www.midhafin.com/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        });
    });

    return sitemapEntries;
}

// Schedule the sitemap generation to run at midnight every day
cron.schedule('0 0 * * *', () => {
    console.log('Generating sitemap...');
    generateSitemap().then(sitemapEntries => {
        console.log('Sitemap generated:', sitemapEntries);
        // Add your logic to save the sitemap entries to a file or a database
    }).catch(error => {
        console.error('Error generating sitemap:', error);
    });
});
