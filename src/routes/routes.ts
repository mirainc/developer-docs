import createPath from './createPath';

export const getStarted = createPath(
  '/docs/get-started',
  () => `/docs/get-started`,
);

export const coreConcepts = createPath(
  '/docs/core-concepts',
  () => `/docs/core-concepts`,
);

export const displaiSdk = createPath(
  '/docs/displai-sdk',
  () => `/docs/displai-sdk`,
);

export const onBrandMenuApi = createPath(
  '/docs/on-brand-menus',
  () => `/docs/on-brand-menus`,
);

export const marketplace = createPath(
  '/docs/marketplace',
  () => `/docs/marketplace`,
);

export const faq = createPath('/docs/faq', () => `/docs/faq`);

export const weather = createPath(
  '/docs/get-started/sample-apps/weather',
  () => `/docs/get-started/sample-apps/weather`,
);

export const video = createPath(
  '/docs/get-started/sample-apps/video',
  () => `/docs/get-started/sample-apps/video`,
);

export const wholeFoodsMenu = createPath(
  '/docs/get-started/sample-apps/whole-foods-menu',
  () => `/docs/get-started/sample-apps/whole-foods-menu`,
);

export const starbucksMenu = createPath(
  '/docs/get-started/sample-apps/starbucks-menu',
  () => `/docs/get-started/sample-apps/starbucks-menu`,
);
