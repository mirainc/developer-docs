// Modified from: https://github.com/contentlayerdev/website/blob/main/src/components/docs/DocsNavigation.tsx
import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { TreeNode } from '../../../types/TreeNode';
import { Icon } from '../common/Icon';

interface NavLinkProps {
  title: string;
  label?: string;
  url: string;
  level: number;
  activePath: string;
  collapsible: boolean;
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const NavLink: FC<NavLinkProps> = ({
  title,
  url,
  level,
  activePath,
  collapsible,
  collapsed,
  toggleCollapsed,
}) => {
  return (
    <div
      className={classNames(
        'group flex h-12 md:h-8 items-center justify-between space-x-2 whitespace-nowrap rounded-md px-3 text-sm leading-none',
        url == activePath
          ? `${
              level == 0 ? 'font-medium' : 'font-normal'
            } bg-sky-100/50 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100`
          : `hover:bg-zinc-50 dark:hover:bg-zinc-900 ${
              level == 0
                ? 'font-medium text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200'
                : 'font-normal hover:text-slate-600 dark:hover:text-slate-300'
            }`,
      )}
    >
      <Link href={url}>
        <a className="flex h-full grow items-center space-x-2">
          <span>{title}</span>
        </a>
      </Link>

      {collapsible && (
        <button
          aria-label="Toggle children"
          onClick={toggleCollapsed}
          className="mr-2 shrink-0 px-2 py-1"
        >
          <span
            className={`block w-2.5 ${collapsed ? '-rotate-90 transform' : ''}`}
          >
            <Icon name="chevron-down" />
          </span>
        </button>
      )}
    </div>
  );
};

interface NodeProps {
  node: TreeNode;
  level: number;
  activePath: string;
}

const Node: FC<NodeProps> = ({ node, level, activePath }) => {
  const [collapsed, setCollapsed] = useState<boolean>(node.collapsed ?? false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (
      activePath == node.urlPath ||
      node.children.map((c) => c.urlPath).includes(activePath)
    ) {
      setCollapsed(false);
    }
  }, [activePath, node.children, node.urlPath]);

  return (
    <>
      <NavLink
        title={node.nav_title || node.title}
        label={node.label || undefined}
        url={node.urlPath}
        level={level}
        activePath={activePath}
        collapsible={node.collapsible ?? false}
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
      />
      {node.children.length > 0 && !collapsed && (
        <Tree tree={node.children} level={level + 1} activePath={activePath} />
      )}
    </>
  );
};

interface TreeProps {
  tree: TreeNode[];
  level: number;
  activePath: string;
}

const Tree: FC<TreeProps> = ({ tree, level, activePath }) => {
  return (
    <div
      className={classNames(
        'ml-3 space-y-2 pl-3',
        level > 0 ? 'border-l border-zinc-200 dark:border-zinc-800' : '',
      )}
    >
      {tree.map((treeNode, index) => (
        <Node
          key={index}
          node={treeNode}
          level={level}
          activePath={activePath}
        />
      ))}
    </div>
  );
};

export const DocsNavigation: FC<{ tree: TreeNode[] }> = ({ tree }) => {
  const router = useRouter();

  return (
    <aside className="-ml-6 w-80">
      <div>
        <Tree tree={tree} level={0} activePath={router.asPath} />
      </div>
    </aside>
  );
};
