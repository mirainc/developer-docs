// Modified from: https://github.com/contentlayerdev/website/blob/main/src/components/common/ColorSchemeSwitcher.tsx
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState, useEffect } from 'react';

import { useColorScheme, useUpdateColorScheme } from '../ColorSchemeContext';
import { Icon } from './Icon';

export const ColorSchemeSwitcher = () => {
  const preferredColorScheme = useColorScheme();
  const updateColorScheme = useUpdateColorScheme();
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleEvent = () => {
      updateColorScheme(localStorage?.theme || 'system');
    };
    handleEvent();
    window.addEventListener('storage', handleEvent);
    return () => {
      window.removeEventListener('storage', handleEvent);
    };
  }, [updateColorScheme]);

  useEffect(() => {
    if (preferredColorScheme === 'system') {
      setColorScheme(
        window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
      );
    } else {
      setColorScheme(preferredColorScheme);
    }
  }, [preferredColorScheme]);

  const fixScrollPadding = () => {
    if (document.documentElement.classList.contains('scroll-padding')) {
      document.documentElement.classList.remove('scroll-padding');
    } else {
      document.documentElement.classList.add('scroll-padding');
    }
  };

  return (
    <DropdownMenu.Root onOpenChange={fixScrollPadding}>
      <DropdownMenu.Trigger className="flex h-8 items-center rounded-md bg-transparent px-3 text-slate-400 hover:bg-zinc-50 hover:text-slate-500 dark:text-slate-500 dark:hover:bg-zinc-900 dark:hover:text-slate-400">
        <span className="block w-4">
          <Icon name={colorScheme === 'light' ? 'sun' : 'moon'} />
        </span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="rounded-md border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-800 dark:bg-zinc-900">
        <DropdownMenu.Item
          onSelect={() => updateColorScheme('light')}
          className={`group flex h-8 cursor-pointer items-center space-x-4 rounded-md px-3 text-sm font-medium leading-none hover:outline-none ${
            preferredColorScheme == 'light'
              ? 'bg-sky-100/50 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100'
              : 'text-slate-500 hover:bg-zinc-50 hover:text-slate-600 dark:text-slate-400 dark:hover:bg-zinc-900 dark:hover:text-slate-300'
          }`}
        >
          <span className="block w-4">
            <Icon name="sun" />
          </span>
          <span>Light</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => updateColorScheme('dark')}
          className={`group flex h-8 cursor-pointer items-center space-x-4 rounded-md bg-transparent px-3 text-sm font-medium leading-none hover:outline-none ${
            preferredColorScheme == 'dark'
              ? 'bg-sky-100/50 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100'
              : 'text-slate-500 hover:bg-zinc-50 hover:text-slate-600 dark:text-slate-400 dark:hover:bg-zinc-900 dark:hover:text-slate-300'
          }`}
        >
          <span className="block w-4">
            <Icon name="moon" />
          </span>
          <span>Dark</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => updateColorScheme('system')}
          className={`group flex h-8 cursor-pointer items-center space-x-4 rounded-md bg-transparent px-3 text-sm font-medium leading-none hover:outline-none ${
            preferredColorScheme == 'system'
              ? 'bg-sky-100/50 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100'
              : 'text-slate-500 hover:bg-zinc-50 hover:text-slate-600 dark:text-slate-400 dark:hover:bg-zinc-900 dark:hover:text-slate-300'
          }`}
        >
          <span className="block w-4">
            <Icon name="gear" />
          </span>
          <span>System</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
