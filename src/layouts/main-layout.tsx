import { Link, Outlet } from 'react-router-dom';

import MainNav from '../components/main-nav';
import { navigationConfig } from '../config/navigation';
import { cn } from '../lib/utils';
import { buttonVariants } from '../components/ui/button';
import Footer from '../components/footer';

interface MainLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className='flex flex-col min-h-screen'>
    <header className='container z-40 bg-background'>
      <div className='h-20 flex items-center justify-between py-6'>
        <MainNav items={navigationConfig.mainNav} />
        <nav>
          <Link
            to='/contact'
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'lg' }),
              'px-4',
            )}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
    <main className='flex-1'>
      {children}
      <Outlet />
    </main>
    {/* siteFooter component */}
    <Footer />
  </div>
);

export default MainLayout;
