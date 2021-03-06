// Modified from: https://github.com/contentlayerdev/website/blob/main/src/components/common/Link.tsx
import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

import { Icon } from './Icon';
import * as helpers from '../../utils/helpers';

interface LinkProps {
  href: string;
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ href, children }) => {
  const isExternalUrl = helpers.isExternalUrl(href);
  return (
    <NextLink href={href}>
      <a
        className="inline-flex items-center space-x-1"
        target={isExternalUrl ? '_blank' : undefined}
        rel={isExternalUrl ? 'noreferrer' : undefined}
      >
        <span>{children}</span>
        {isExternalUrl && (
          <span className="block w-4">
            <Icon name="external-link" />
          </span>
        )}
      </a>
    </NextLink>
  );
};
