import * as React from 'react';
import { Link } from 'react-router-dom';

import { MainNavItem } from '../types';
import { siteConfig } from '../config/site';
import { cn } from '../lib/utils';
import { Icons } from './icons';
import { useLockBody } from '../hooks/use-lock-body';

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

const MobileNav = ({ items, children }: MobileNavProps) => {
  useLockBody();

  return (
    <div
      className={cn(
        'md:hidden fixed inset-0 top-16 z-50 p-6 pb-32 grid grid-flow-row auto-rows-max h-[calc(100vh-4rem)] overflow-auto shadow-md animate-in slide-in-from-bottom-80',
      )}
    >
      <div className='grid z-20 relative gap-6 p-4 rounded-md bg-popover text-popover-foreground shadow-md'>
        <Link to='/' className='flex items-center space-x-2'>
          <Icons.logo />
          <span className='font-bold'>{siteConfig.name}</span>
        </Link>
        <nav className='grid grid-flow-row auto-rows-max text-sm'>
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.disabled ? '#' : item.href}
              className={cn(
                'w-full flex items-center p-2 rounded-md text-sm font-medium hover:underline',
                item.disabled && 'cursor-not-allowed opacity-60',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
};

export default MobileNav;
