module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_PROD_URL || 'https://yourdomain.com',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: ['/'],
            },
            {
                userAgent: '*',
                disallow: ['/admin'],
            },
        ],
    },
};
