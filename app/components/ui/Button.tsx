import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { classNames } from '../../utils/classNames';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-codeia-elements-borderColor disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-codeia-elements-background text-codeia-elements-textPrimary hover:bg-codeia-elements-background-depth-2',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline:
          'border border-codeia-elements-borderColor bg-transparent hover:bg-codeia-elements-background-depth-2 hover:text-codeia-elements-textPrimary text-codeia-elements-textPrimary dark:border-codeia-elements-borderColorActive',
        secondary:
          'bg-codeia-elements-background-depth-1 text-codeia-elements-textPrimary hover:bg-codeia-elements-background-depth-2',
        ghost: 'hover:bg-codeia-elements-background-depth-1 hover:text-codeia-elements-textPrimary',
        link: 'text-codeia-elements-textPrimary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  _asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, _asChild = false, ...props }, ref) => {
    return <button className={classNames(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
