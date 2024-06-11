import { create } from 'xmlbuilder2';
import { fetchSlugs } from './FetchSlugs';

export const generateSitemap = async () => {
    const posts = await fetchSlugs();
    const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
    });

    posts.forEach((post) => {
        root.ele('url').ele('loc').txt(`https://www.midhafin.com/${post.slug}`).up()
            .ele('lastmod').txt(new Date(post.createdAt).toISOString()).up();
    });

    return root.end({ prettyPrint: true });
};
