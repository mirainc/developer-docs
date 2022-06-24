// Modified from: https://github.com/contentlayerdev/website/blob/main/src/pages/docs/%5B%5B...slug%5D%5D.tsx
import React from 'react';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useLiveReload, useMDXComponent } from 'next-contentlayer/hooks';
import { allDocs } from 'contentlayer/generated';
import Zoom from 'react-medium-image-zoom';

import { DocsHeader } from '../../components/docs/DocsHeader';
import { Video } from '../../components/common/Video';
import { buildDocsTree } from '../../utils/buildDocsTree';
import { buildBreadcrumbs } from '../../utils/buildBreadcrumbs';
import { DocsNavigation } from '../../components/docs/DocsNavigation';
import { DocLayout } from '../../components/docs/DocLayout';
import { Icon } from '../../components/common/Icon';
import { RaydiantIcon } from '../../components/common/RaydiantIcon';
import { PathSegment } from '../../../types/PathSegment';
import { toParams } from '../../utils/next';
import { PageNavigation } from '../../components/common/PageNavigation';
import { H2, H3, H4 } from '../../components/common/Heading';
import { Card } from '../../components/common/Card';
import { Link } from '../../components/common/Link';
import { ChevronLink } from '../../components/common/ChevronLink';
import {
  OptionsTable,
  OptionTitle,
  OptionDescription,
} from '../../components/docs/OptionsTable';
import { Label } from '../../components/common/Label';
import { DocsFooter } from '../../components/docs/DocsFooter';
import { Callout } from '../../components/common/Callout';

type Ctx = GetStaticPropsContext<{
  slug?: string[];
}>;

export async function getStaticPaths() {
  const paths = allDocs
    .map((d) => d.pathSegments.map((pS: PathSegment) => pS.pathName).join('/'))
    .map(toParams);

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (ctx: Ctx) => {
  const { params } = ctx;
  const pagePath = params?.slug?.join('/') ?? '';

  const doc = allDocs.find(
    (d) =>
      d.pathSegments.map((pS: PathSegment) => pS.pathName).join('/') ===
      pagePath,
  )!;
  const tree = buildDocsTree(allDocs);
  const childrenTree = buildDocsTree(
    allDocs,
    doc.pathSegments.map((pS: PathSegment) => pS.pathName),
  );
  const breadcrumbs = buildBreadcrumbs(allDocs, params?.slug);

  return { props: { doc, tree, childrenTree, breadcrumbs } };
};

const mdxComponents = {
  h2: H2,
  h3: H3,
  h4: H4,
  Video,
  Link,
  a: Link,
  ChevronLink,
  aside: Callout,
  Callout,
  OptionsTable,
  OptionTitle,
  OptionDescription,
  Icon,
  RaydiantIcon,
  Zoom,
};

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { doc, tree, childrenTree, breadcrumbs } = props;
  const router = useRouter();
  useLiveReload();
  const MDXContent = useMDXComponent(doc.body.code || '');

  return (
    <DocLayout>
      <div className="relative mx-auto w-full max-w-screen-2xl lg:flex lg:items-start">
        <div
          style={{ height: 'calc(100vh - 64px)' }}
          className="sticky top-16 hidden shrink-0 border-r border-gray-200 dark:border-gray-800 lg:block"
        >
          <div className="-ml-3 h-full overflow-y-scroll p-8 pl-16">
            <DocsNavigation tree={tree} />
          </div>
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-t from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
        </div>

        <div className="relative w-full grow">
          <DocsHeader title={doc.title} tree={tree} breadcrumbs={breadcrumbs} />
          <div className="docs prose prose-slate prose-sky mx-auto mb-4 w-full max-w-3xl shrink p-4 pb-8 prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-gray-200 dark:prose-invert dark:prose-a:text-sky-400 dark:prose-hr:border-gray-800 md:mb-8 md:px-8 lg:mx-0 lg:max-w-full lg:px-16">
            {MDXContent && <MDXContent components={mdxComponents} />}
            {doc.show_child_cards && (
              <>
                <hr />
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {childrenTree.map((card, index) => (
                    <div
                      key={index}
                      onClick={() => router.push(card.urlPath)}
                      className="cursor-pointer"
                    >
                      <Card className="h-full p-6 py-4 hover:border-sky-100 hover:bg-sky-100/50 dark:hover:border-sky-900/50 dark:hover:bg-sky-900/40">
                        <h3 className="mt-0 no-underline">{card.title}</h3>
                        {card.label && <Label text={card.label} />}
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          <p>{card.excerpt}</p>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </>
            )}
            <DocsFooter doc={doc} />
          </div>
        </div>

        <div
          style={{ maxHeight: 'calc(100vh - 128px)' }}
          className="sticky top-32 hidden w-80 shrink-0 overflow-y-scroll p-8 pr-16 1.5xl:block"
        >
          <PageNavigation headings={doc.headings} />
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-t from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
        </div>
      </div>
    </DocLayout>
  );
};

export default Page;
