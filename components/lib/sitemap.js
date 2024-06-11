import { create } from 'xmlbuilder2';
import { fetchSlugs } from './FetchSlugs';


export const generateSitemap = async () => {
    const posts = await fetchSlugs();
    const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
    });

    posts.forEach((post) => {
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

    return root.end({ prettyPrint: true });
};
