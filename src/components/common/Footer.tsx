// Modified from: https://github.com/contentlayerdev/website/blob/main/src/components/common/Footer.tsx
import { FC } from 'react';
import Link from 'next/link';

import { Logo } from './Logo';
import { Icon } from './Icon';
import { isExternalUrl } from '../../utils/helpers';
import config from '../../config';
import * as routes from '../../routes';

const content = {
  menus: [
    {
      title: 'Docs',
      elements: [
        { label: 'Get Started', url: routes.getStarted() },
        { label: 'Inputs  ', url: routes.inputs() },
        { label: 'On-Brand Menu API  ', url: routes.onBrandMenuApi() },
        { label: 'Marketplace  ', url: routes.marketplace() },
        { label: 'FAQ  ', url: routes.faq() },
      ],
    },
    {
      title: 'Sample Apps',
      elements: [
        { label: 'Weather', url: routes.weather() },
        { label: 'Whole Foods Menu', url: routes.wholeFoodsMenu() },
        { label: 'Starbucks Menu', url: routes.starbucksMenu() },
      ],
    },
    {
      title: 'Products',
      elements: [
        { label: 'Raydiant Dashboard', url: config.raydiantDashUrl },
        { label: 'Developer Portal', url: config.developerPortalUrl },
        { label: 'Website', url: config.raydiantUrl },
      ],
    },
  ],
};

export const Footer: FC = () => {
  return (
    <div className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto w-full max-w-screen-2xl space-y-8 px-4 py-8 md:p-8 md:pb-12 lg:flex lg:justify-between lg:space-y-0 lg:p-16 lg:pb-20">
        <div>
          <Link href={routes.getStarted()}>
            <a className="flex items-center space-x-2.5 font-bold text-logo-bg no-underline dark:text-logo-bg-dark">
              <Logo />
            </a>
          </Link>
        </div>
        <div className="space-y-14 md:flex md:space-y-0 md:space-x-16">
          {content.menus.map(({ title, elements }, index) => (
            <div key={index}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200 mb-6 md:mb-0">
                {title}
              </div>
              <ul className="mx-0 mt-4 list-none md:space-y-2 text-sm">
                {elements.map(({ label, url }, index) => (
                  <li key={index}>
                    <Link href={url}>
                      <a
                        className="h-12 md:h-auto inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                        target={isExternalUrl(url) ? '_blank' : undefined}
                      >
                        <span>{label}</span>
                        {isExternalUrl(url) && (
                          <span className="inline-block w-4">
                            <Icon name="external-link" />
                          </span>
                        )}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
