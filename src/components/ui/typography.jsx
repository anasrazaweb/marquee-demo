import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const TypographyVariants = cva('font-urbanist text-white dark:text-black ', {
  variants: {
    variant: {
      h1: 'lg:text-[300px]  font-semibold ',
      h2: 'lg:text-6xl text-3xl font-semibold ',
      h3: 'lg:text-5xl text-3xl bg-text-gradients text-transparent bg-clip-text font-semibold',
      h4: 'text-4xl font-normal',
      h5: 'font-semibold text-3xl',
      h6: 'font-bold text-lg',
      p: 'font-normal text-gray text-sm',
      span: 'text-xs font-light text-gray ',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    variant: 'p',
    align: 'left',
  },
});

export const Typography = React.forwardRef(
  ({ variant = 'p', align, className, children, ...props }, ref) => {
    const Component = variant;

    return (
      <Component
        className={cn(TypographyVariants({ variant, align, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
