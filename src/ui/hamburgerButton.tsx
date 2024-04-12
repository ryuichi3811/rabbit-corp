'use client';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { cn } from '../utils';

const borderVariants = cva(
  'absolute h-[1px] duration-300 drop-shadow-[2px_2px_7px_#e4d8bb]',
  {
    variants: {
      color: {
        default: 'bg-reve-color',
        black: 'bg-black',
        white: 'bg-white',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  },
);

type ColorProps = 'default' | 'black' | 'white';

export const HamburgerButton = ({
  color,
  onClick,
  isOpened,
}: {
  color: ColorProps;
  onClick: () => void;
  isOpened: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="fixed right-8 top-9 z-50 inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium mix-blend-difference ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:hidden"
    >
      <div
        className={cn(
          clsx(
            'top-3 w-full',
            { 'translate-y-2 -rotate-45': isOpened },
            { 'translate-y-0': !isOpened },
          ),
          borderVariants({ color }),
        )}
      ></div>
      <div
        className={cn(
          clsx(
            'right-0 top-1/2 w-4/5',
            { 'scale-0': isOpened },
            { 'translate-y-0 scale-100': !isOpened },
          ),
          borderVariants({ color }),
        )}
      ></div>
      <div
        className={cn(
          clsx(
            'bottom-3 right-0 w-3/5',
            { 'w-full -translate-y-2 rotate-45': isOpened },
            { 'translate-y-0': !isOpened },
          ),
          borderVariants({ color }),
        )}
      ></div>
    </button>
  );
};
