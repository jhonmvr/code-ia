import { forwardRef } from 'react';
import { classNames } from '../../utils/classNames';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={classNames(
        'flex h-10 w-full rounded-md border border-codeia-elements-border bg-codeia-elements-background px-3 py-2 text-sm ring-offset-codeia-elements-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-codeia-elements-textSecondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-codeia-elements-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };
