import { updateSitemap } from '../../../lib/sitemap';

export async function GET(req) {
    try {
        await updateSitemap();
        return new Response('Sitemap updated successfully', {
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    } catch (error) {
        return new Response('Error updating sitemap', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }
}
