// app/api/sitemap/route.js

import { generateSitemap } from "../../../components/lib/sitemap";

export async function GET(req) {
    const sitemap = await generateSitemap();
    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
