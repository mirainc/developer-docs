// Modified from: https://github.com/contentlayerdev/website/blob/main/src/components/common/Card.tsx
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface CardProps {
  children: ReactNode;
  className?: string;
  shadow?: boolean;
  dark?: boolean;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  shadow = false,
  dark = false,
}) => {
  return (
    <div
      className={classNames(
        'overflow-hidden rounded-2xl border',
        dark
          ? 'border-zinc-800 bg-zinc-900'
          : 'border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900',
        shadow &&
          `shadow-lg ${
            dark ? 'shadow-zinc-900' : 'shadow-zinc-100 dark:shadow-zinc-900'
          }`,
        className,
      )}
    >
      {children}
    </div>
  );
};
