module.exports = {
  siteUrl: 'https://developers.raydiant.com',
  exclude: ['/docs/sitemap.xml'],
  // Note: Since the docs are hosted on a sub path (raydiant.com/docs), this robots.txt
  // will not be used. Instead we use the robots.txt that's defined in the developer portal.
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ['https://developers.raydiant.com/docs/sitemap.xml'],
  },
};
