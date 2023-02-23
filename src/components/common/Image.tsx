import { FC } from 'react';

export interface ImageProps {
  src: string;
  alt?: string;
}

export const Image: FC<ImageProps> = (props: ImageProps) => {
  return <img {...props} />;
};
