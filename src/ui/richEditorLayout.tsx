import clsx from 'clsx';
import { ReactNode, Ref, forwardRef } from 'react';

const RichEditorLayout = forwardRef(
  (
    {
      className,
      children,
      ...props
    }: { className: string; children: ReactNode },
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        className={clsx(
          '[&_a]:text-indigo-500 [&_a]:underline [&_figure]:mx-auto [&_figure]:mb-8 [&_img]:block [&_img]:rounded-lg [&_p]:pb-8 [&_p]:leading-7',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

RichEditorLayout.displayName = 'RichEditorLayout';

export { RichEditorLayout };
