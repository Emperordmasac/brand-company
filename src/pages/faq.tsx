import * as React from 'react';
import { HorizontalLogo, faqh } from '../assets/images';

const Faq = () => {
  const [mobileNav, setMobileNav] = React.useState(false);

  return (
    <>
      <div className='px-6 lg:px-8 py-4 lg:py-5 bg-welcomeBg bg-center bg-cover bg-no-repeat bg-[#f9fafb]'>
        {/* navigation */}
        <nav className='px-2 py-2.5 sn:px-4 rounded bg-transparent max-w-screen-xl mx-auto'>
          <div className='flex items-center justify-between flex-wrap mx-auto'>
            {/* company logo */}
            <a className='flex items-center' href='/'>
              <img
                src={HorizontalLogo}
                alt='Fresh2carts Logo'
                loading='lazy'
                width='166'
                height='38'
              />
            </a>
            <button
              onClick={() => setMobileNav(!mobileNav)}
              className='inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 448 512'
                aria-hidden='true'
                className='h-6 w-6 shrink-0'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'></path>
              </svg>
            </button>
            <div
              className={`w-full md:block md:w-auto ${
                mobileNav ? 'block' : 'hidden'
              }`}
            >
              <ul className='mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium'>
                <a
                  className='flex focus:no-underline hover:no-underline  items-center p-2 text-base font-normal text-black rounded-lg  hover:text-fg-primary  hover:text-white'
                  href='/'
                >
                  <span className='flex focus:no-underline hover:no-underline  items-center p-2 text-base font-normal text-black rounded-lg  hover:text-fg-primary  hover:text-white'>
                    Home
                  </span>
                </a>
                <a
                  className='text-fg-primary flex items-center p-2 text-base font-bold text-white rounded-lg  hover:text-fg-primary hover:no-underline hover:text-white focus:no-underline'
                  href='/about'
                >
                  <span className='flex focus:no-underline hover:no-underline  items-center p-2 text-base font-normal text-black rounded-lg  hover:text-fg-primary  hover:text-white'>
                    About
                  </span>
                </a>
                <a
                  className='flex focus:no-underline hover:no-underline  items-center p-2 text-base font-normal text-black rounded-lg  hover:text-fg-primary  hover:text-white'
                  href='/faq'
                >
                  <span className='text-fg-primary flex items-center p-2 text-base font-bold text-white rounded-lg  hover:text-fg-primary hover:no-underline hover:text-white focus:no-underline'>
                    FAQ
                  </span>
                </a>
                <a
                  className='flex focus:no-underline hover:no-underline  items-center p-2 text-base font-normal text-black rounded-lg  hover:text-fg-primary  hover:text-white'
                  href='/contactus'
                >
                  <span className='flex focus:no-underline hover:no-underline  items-center p-2 text-base font-normal text-black rounded-lg  hover:text-fg-primary  hover:text-white'>
                    Contact
                  </span>
                </a>
              </ul>
            </div>
          </div>
        </nav>
        {/* hero */}
        <section className='text-gray-600 body-font mt-10'>
          <div className='container mx-auto flex px-6 lg:px-24 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <p className=' mb-2 text-lg leading-7 font-semibold text-[#0A4424]'>
                The FAQs
              </p>
              <h1 className='title-font sm:text-4xl font-quicksand  text-3xl mb-4 font-bold text-[#0A0707]'>
                Help Center
              </h1>
              <p className=' mb-8 text-lg leading-7 font-semibold text-[#8F9698]'>
                Everything you need to know about the product and billing
              </p>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 '>
              <img
                className='object-cover object-center rounded '
                alt='hero'
                src={faqh}
              />
            </div>
          </div>
        </section>
      </div>
      {/* faqs */}
      <div className='container mx-auto px-6 lg:px-24 py-10'>
        {/* <div className='flex flex-row mb-10'>
          <div className='basis-1/4'>
            <div>
              <div className='w-48 text-sm font-medium text-gray-900  '>
                <a
                  aria-current='true'
                  className='block w-full px-4 py-3 font-bold  text-fg-green border-green-800 border-l-4   cursor-pointer '
                  href='/faq/customer'
                >
                  Customer
                </a>
                <a
                  className='block w-full px-4 py-3  cursor-pointer  hover:border-green-800 hover:border-l-4  hover:text-fg-green   '
                  href='/faq/vendor'
                >
                  Vendors
                </a>
                <a
                  className='block w-full px-4 py-3  cursor-pointer  hover:border-green-800 hover:border-l-4  hover:text-fg-green   '
                  href='/faq/agent'
                >
                  Delivery Agents
                </a>
              </div>
            </div>
          </div>
          <div className='basis-3/4'></div>
        </div> */}
        <section className='bg-downloadBg bg-no-repeat bg-cover'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='text-center mb-20 text-[#8F9698]'>
              <h1 className='sm:text-3xl text-2xl font-quicksand font-semibold  text-black mb-4'>
                Still Need Help?
              </h1>
              <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
                Our team is happy to answer your questions. Contact us
                <br />
                and we’ll be in touch as soon as possible.
              </p>
              <div className='flex mt-6 justify-center items-center space-x-4'>
                <p className='border-r-2 border-[#D0D5DD] px-6'>
                  support@f2c.com
                </p>
                <p>08167665656</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Faq;
