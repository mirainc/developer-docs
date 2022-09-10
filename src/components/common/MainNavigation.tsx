// Modified from: https://github.com/contentlayerdev/website/blob/main/src/components/common/MainNavigation.tsx
import Link from 'next/link';
import { FC, useState } from 'react';
import { useRouter } from 'next/router';

import { Icon, IconName } from './Icon';
import { Logo } from './Logo';
import { isExternalUrl } from '../../utils/helpers';
import { ColorSchemeSwitcher } from './ColorSchemeSwitcher';
import config from '../../config';
import * as routes from '../../routes';

interface NavLinksProps {
  label: string;
  url: string;
}

const navLinks: Array<NavLinksProps> = [
  { label: 'Developer Portal', url: '/' },
  { label: 'Documentation', url: routes.getStarted() },
];

interface IconLinkProps {
  label: string;
  icon: IconName;
  url: string;
}

const iconLinks: Array<IconLinkProps> = [
  {
    label: 'Github',
    icon: 'github',
    url: config.gitHubUrl,
  },
];

interface NavLinkProps {
  label?: string;
  hideLabel?: boolean;
  icon?: IconName;
  url: string;
}

const NavLink: FC<NavLinkProps> = ({ label, hideLabel = false, icon, url }) => {
  const router = useRouter();

  const targetUrl = url.replace('/', '');
  const currentRootPath = router.pathname.split('/')[1];
  const active = !isExternalUrl(url) && targetUrl.includes(currentRootPath);

  return (
    <Link href={url}>
      <a
        className={`group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none ${
          active
            ? 'bg-sky-100/50 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100'
            : 'text-slate-600 hover:bg-zinc-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-zinc-900 dark:hover:text-slate-200'
        }`}
        target={isExternalUrl(url) ? '_blank' : undefined}
        rel={isExternalUrl(url) ? 'noreferrer' : undefined}
      >
        {icon && (
          <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
            <Icon name={icon} />
          </span>
        )}
        {label && <span className={hideLabel ? 'sr-only' : ''}>{label}</span>}
      </a>
    </Link>
  );
};

export const MainNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full border-b border-zinc-200 bg-white bg-opacity-90 backdrop-blur backdrop-filter dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <Link href={routes.getStarted()}>
            <a className="flex items-center space-x-2.5 font-bold text-logo-bg no-underline dark:text-logo-bg-dark">
              <Logo />
            </a>
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 items-center justify-end text-slate-600 dark:text-slate-300"
          >
            <span className="inline-block w-4">
              <Icon name={open ? 'close' : 'bars'} />
            </span>
          </button>
          {open && (
            <div className="fixed inset-0 top-[65px] z-50 h-screen bg-zinc-950/10 pb-20 backdrop-blur-lg backdrop-filter dark:bg-zinc-950/50">
              <nav className="absolute right-0 h-full divide-y divide-zinc-200 border-l border-zinc-200 bg-white p-8 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex flex-col items-end space-y-2 pb-8">
                  <div className="mb-2"></div>
                  {navLinks.map(({ label, url }, index) => (
                    <NavLink
                      key={index}
                      label={label}
                      url={url}
                      icon={isExternalUrl(url) ? 'external-link' : undefined}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-end space-x-4 pt-8">
                  {iconLinks.map(({ label, icon, url }, index) => (
                    <NavLink
                      key={index}
                      label={label}
                      hideLabel
                      url={url}
                      icon={icon}
                    />
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>

        <nav className="hidden items-center divide-x divide-zinc-200 dark:divide-zinc-800 lg:flex">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            {navLinks.map(({ label, url }, index) => (
              <NavLink
                key={index}
                label={label}
                url={url}
                icon={isExternalUrl(url) ? 'external-link' : undefined}
              />
            ))}
          </div>
          <div className="flex items-center pl-2 lg:space-x-2 lg:pl-8">
            <ColorSchemeSwitcher />
            {iconLinks.map(({ label, icon, url }, index) => (
              <NavLink
                key={index}
                label={label}
                hideLabel
                url={url}
                icon={icon}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
