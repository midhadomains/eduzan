// lib/robots.js
export const generateRobotsTxt = () => {
    return `
    User-agent: *
    Disallow: /api/
    Allow: /

    Sitemap: https://yourdomain.com/sitemap.xml
  `;
};
