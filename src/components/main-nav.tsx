import * as React from 'react';
import { Link } from 'react-router-dom';

import { MainNavItem } from '../types';
import { siteConfig } from '../config/site';
import { cn } from '../lib/utils';
import { Icons } from './icons';
import MobileNav from './mobile-nav';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const MainNav = ({ items, children }: MainNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  let segment = 'home';

  return (
    <div className='flex gap-6 md:gap-10'>
      <Link
        to='/'
        className='hidden items-center space-x-2 md:flex text-2xl text-green-900'
      >
        <Icons.gitHub />
        {/* <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span> */}
      </Link>
      {items?.length ? (
        <nav className='hidden gap-6 md:flex'>
          {items?.map((item, index) => (
            <Link
              key={index}
              to={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                item.disabled && 'cursor-not-allowed opacity-80',
                item.href.startsWith(`/${segment}`)
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className='flex items-center space-x-2 md:hidden'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className='font-bold'>Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
};

export default MainNav;