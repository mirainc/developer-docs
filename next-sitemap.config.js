module.exports = {
  siteUrl: 'https://developers.displai.ai',
  exclude: ['/docs/sitemap.xml'],
  // Note: Since the docs are hosted on a sub path (displai.ai/docs), this robots.txt
  // will not be used. Instead we use the robots.txt that's defined in the developer portal.
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ['https://developers.displai.ai/docs/sitemap.xml'],
  },
};
