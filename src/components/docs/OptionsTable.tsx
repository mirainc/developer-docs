// modified: https://github.com/contentlayerdev/website/blob/main/src/components/docs/OptionsTable.tsx
import { FC, ReactNode } from 'react';

export const OptionsTable: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="options-table grid grid-cols-1 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 md:grid-cols-4 lg:grid-cols-1 xl:grid-cols-4">
      {children}
    </div>
  );
};

export const OptionTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="option-title hyphens not-prose -mt-px border-t border-zinc-200 bg-zinc-50 p-4 pt-5 dark:border-zinc-800 dark:bg-zinc-900/75 md:border-r lg:border-r-0 xl:border-r md:col-span-2">
      {children}
    </div>
  );
};

export const OptionDescription: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="option-description -mt-px border-t border-zinc-200 px-4 pb-2 dark:border-zinc-800 md:col-span-2">
      {children}
    </div>
  );
};
