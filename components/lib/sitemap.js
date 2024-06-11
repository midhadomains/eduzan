import { create } from 'xmlbuilder2';
import { fetchSlugs } from './FetchSlugs';

export const generateSitemap = async (excludeSlugs = [], excludePages = ['/thank-you', '/_not-found']) => {
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
            console.warn(`Missing createdAt for post: ${post.slug}`);
        }
    });

    // Add general pages
    excludePages.forEach((page) => {
        root.ele('url').ele('loc').txt(`https://www.midhafin.com${page}`).up();
    });

    return root.end({ prettyPrint: true });
};
