import createPath from './createPath';

export const getStarted = createPath(
  '/docs/get-started',
  () => `/docs/get-started`,
);

export const inputs = createPath('/docs/inputs', () => `/docs/inputs`);

export const onBrandMenuApi = createPath(
  '/docs/on-brand-menu-api',
  () => `/docs/on-brand-menu-api`,
);

export const marketplace = createPath(
  '/docs/marketplace',
  () => `/docs/marketplace`,
);

export const faq = createPath('/docs/faq', () => `/docs/faq`);

export const simpleWeather = createPath(
  '/docs/get-started/sample-apps/simple-weather',
  () => `/docs/get-started/sample-apps/simple-weather`,
);

export const wholeFoodsMenu = createPath(
  '/docs/get-started/sample-apps/whole-foods-menu',
  () => `/docs/get-started/sample-apps/whole-foods-menu`,
);

export const starbucksMenu = createPath(
  '/docs/get-started/sample-apps/starbucks-menu',
  () => `/docs/get-started/sample-apps/starbucks-menu`,
);
