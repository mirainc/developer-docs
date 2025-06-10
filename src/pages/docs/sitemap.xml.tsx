import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { allDocs } from 'contentlayer/generated';
import { PathSegment } from '../../../types/PathSegment';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields = allDocs.map((d) => {
    const path = d.pathSegments.map((pS: PathSegment) => pS.pathName).join('/');
    return {
      loc: `https://developers.displai.ai/docs/${path}`,
      lastmod: d.last_edited,
    };
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
