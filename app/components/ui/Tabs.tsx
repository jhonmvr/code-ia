import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { classNames } from '../../utils/classNames';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={classNames(
      'inline-flex h-10 items-center justify-center rounded-md bg-codeia-elements-background-depth-1 dark:bg-codeia-elements-background-depth-3-dark p-1 text-codeia-elements-textSecondary dark:text-codeia-elements-textSecondary-dark border border-codeia-elements-borderColor dark:border-codeia-elements-borderColor-dark',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={classNames(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-codeia-elements-background dark:ring-offset-codeia-elements-background-dark transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-codeia-elements-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-codeia-elements-background-depth-0 dark:data-[state=active]:bg-codeia-elements-background-depth-2-dark data-[state=active]:text-codeia-elements-textPrimary dark:data-[state=active]:text-codeia-elements-textPrimary-dark data-[state=active]:shadow-sm',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={classNames(
      'mt-2 ring-offset-codeia-elements-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-codeia-elements-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
