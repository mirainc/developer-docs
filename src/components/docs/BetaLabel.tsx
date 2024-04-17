import { FC } from 'react';

export interface BetaLabelProps {
  className?: string;
}

export const BetaLabel: FC<BetaLabelProps> = ({ className }) => {
  return (
    <div
      className={
        'inline-flex text-xs text-white px-2 bg-sky-500 rounded ' + className
      }
    >
      Beta
    </div>
  );
};
