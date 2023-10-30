import * as React from 'react';
import HorizontalLogo from '../assets/images/horizonlogo.png';
import HeroImage from '../assets/images/firshnfritu.webp';
import AppleDownload from '../assets/images/Appstore.webp';
import AndroidDownload from '../assets/images/Googleplay.webp';

import {
  DeliveryPic,
  GooglePlay,
  AppleStore,
  VendorPic,
} from '../assets/images';

const About = () => {
  const [mobileNav, setMobileNav] = React.useState(false);
  return (
    <>
      <div className='px-6 lg:px-8 py-4 lg:py-5 bg-aboutHeader bg-center bg-cover bg-no-repeat bg-[#f9fafb]'>
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
                  <span className='text-fg-primary flex items-center p-2 text-base font-bold text-white rounded-lg  hover:text-fg-primary hover:no-underline hover:text-white focus:no-underline'>
                    About
                  </span>
                </a>
                <a
                  className='flex focus:no-underline hover:no-underline  items-center p-2 text-base font-normal text-black rounded-lg  hover:text-fg-primary  hover:text-white'
                  href='/faq'
                >
                  <span className='flex focus:no-underline hover:no-underline  items-center p-2 text-base font-normal text-black rounded-lg  hover:text-fg-primary  hover:text-white'>
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
        <section className='mt-10 text-gray-600'>
          <div className='container flex flex-col md:flex-row items-center px-6 lg:px-5 mx-auto'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <h1 className='sm:text-4xl text-3xl mb-4 font-bold text-gray-900'>
                Who we <span className='text-green-900'>Are</span>
              </h1>
              <p className='md:ml-10 ml-0 mb-8 text-lg leading-7 font-semibold text-gray-400'>
                {' '}
                Fresh2Carts was founded in 2021. We are a Nigerian company that
                operates an online food and grocery delivery service in Africa.
                Our goal is to enhance the online delivery process and delight
                customers with a seamless and reliable experience. By leveraging
                technology and innovation to provide our users with effective
                and quick delivery, precise tracking and monitoring, as well
                connecting suppliers and vendors with customers and on-demand
                delivery service add-on.
              </p>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative md:block hidden'>
              <img
                className='object-cover object-center rounded absolute top-[1%] z-[2] left-0'
                alt='hero'
                src={HeroImage}
              />
            </div>
          </div>
        </section>
      </div>
      {/* who we serve section */}
      <section className='bg-white text-gray-600'>
        <div className='container px-4 py-24'>
          <div className='flex flex-col text-left w-full mb-20'>
            <h1 className='sm:text-4xl text-3xl font-bold mb-2 ml-10 text-gray-900'>
              Who we <span className='text-[#FB4900]'>serve</span>
            </h1>
          </div>
          <div className='lg:w-2/3 w-full mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:space-x-20 '>
              <div>
                <div className='relative z-[1] md:before:content-link '>
                  <div className='z-[2] md:absolute md:bottom-[80%] left-0'>
                    <svg
                      width='171'
                      height='139'
                      className='md:block hidden'
                      viewBox='0 0 171 139'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0.118438 138.707L3.61581 138.572C11.6908 102.732 40.0185 45.0898 54.0079 44.5469C64.0004 44.1592 59.5903 72.3514 73.5797 71.8085C82.5536 70.9599 99.7407 36.7678 105.736 36.5351C109.234 36.3994 110.005 43.3747 115.5 43.1615C133.487 42.4635 177.863 -0.289347 169.369 0.0402481C162.974 0.288413 128.486 29.6478 114.996 30.1713C109.001 30.4039 110.1 27.359 106.886 27.4837C99.8913 27.7551 83.1845 61.4283 73.192 61.8161C64.1987 62.165 65.7275 37.0869 55.2353 37.494C42.7447 37.9787 9.44292 95.3132 0.118438 138.707Z'
                        fill='#0E6134'
                      ></path>
                    </svg>
                  </div>
                  <img
                    className='md:z-[2] sm:mx-auto md:absolute md:bottom-[10%] md:left-[10%]'
                    src={VendorPic}
                  />
                </div>
              </div>
              <div className='space-y-4 mt-5'>
                <h1 className='font-quicksand text-[32px] leading-[22px] font-bold text-black'>
                  Vendors
                </h1>
                <p className='text-[#8F9698] text-[18px] leading-8 font-normal'>
                  Reach new customers, market your store, and grow your business
                  by offering delivery, pickup, and direct online ordering with
                  DoorDash.
                </p>
                <button className='bg-green-900 px-4 py-4 text-white rounded-lg'>
                  {' '}
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* customers section */}
      <section className='bg-white text-gray-600 bg-downloadBg bg-center bg-no-repeat bg-cover'>
        <div className='container px-5 md:px-32 py-24 mx-auto'>
          <div className='w-full mx-auto lg:w-2/3'>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className='space-y-4 mt-5'>
                <h1 className='title-font sm:text-4xl font-quicksand  text-3xl mb-4 font-bold text-gray-900'>
                  Customers
                </h1>
                <p className='mb-8 text-lg leading-7 font-semibold text-gray-400'>
                  Reach new customers, market your store, and grow your business
                  by offering delivery, pickup, and direct online ordering with
                  DoorDash.
                </p>
                <div className='flex flex-row  justify-center space-x-3 w-full'>
                  <a href='' className='mb-5'>
                    <img src={AppleDownload} alt='applestore download' />
                  </a>
                  <a href=''>
                    <img src={AndroidDownload} alt='googleplay download' />
                  </a>
                </div>
              </div>
              <div>
                <div className='relative z-[1] md:before:content-link '>
                  <div className='z-[2] absolute bottom-[80%] left-0 '>
                    <svg
                      width='171'
                      height='139'
                      className='md:block hidden'
                      viewBox='0 0 171 139'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0.118438 138.707L3.61581 138.572C11.6908 102.732 40.0185 45.0898 54.0079 44.5469C64.0004 44.1592 59.5903 72.3514 73.5797 71.8085C82.5536 70.9599 99.7407 36.7678 105.736 36.5351C109.234 36.3994 110.005 43.3747 115.5 43.1615C133.487 42.4635 177.863 -0.289347 169.369 0.0402481C162.974 0.288413 128.486 29.6478 114.996 30.1713C109.001 30.4039 110.1 27.359 106.886 27.4837C99.8913 27.7551 83.1845 61.4283 73.192 61.8161C64.1987 62.165 65.7275 37.0869 55.2353 37.494C42.7447 37.9787 9.44292 95.3132 0.118438 138.707Z'
                        fill='#0E6134'
                      ></path>
                    </svg>
                  </div>
                  <img
                    className='md:z-[2] sm:mx-auto md:absolute md:bottom-[10%] md:left-[10%] object-cover '
                    src={DeliveryPic}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white bg-currvyBg bg-contain p-10'></div>
      </section>
      {/* delivery section */}
      <section className='text-gray-600 bg-white'>
        <div className='container px-5 md:px-4 py-24 mx-auto '>
          <div className='lg:w-2/3 w-full mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:space-x-10 '>
              <div>
                <div className='relative z-[1] md:before:content-link '>
                  <div className='z-[2] absolute bottom-[80%] left-0'>
                    <svg
                      width='171'
                      className='md:block hidden'
                      height='139'
                      viewBox='0 0 171 139'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0.118438 138.707L3.61581 138.572C11.6908 102.732 40.0185 45.0898 54.0079 44.5469C64.0004 44.1592 59.5903 72.3514 73.5797 71.8085C82.5536 70.9599 99.7407 36.7678 105.736 36.5351C109.234 36.3994 110.005 43.3747 115.5 43.1615C133.487 42.4635 177.863 -0.289347 169.369 0.0402481C162.974 0.288413 128.486 29.6478 114.996 30.1713C109.001 30.4039 110.1 27.359 106.886 27.4837C99.8913 27.7551 83.1845 61.4283 73.192 61.8161C64.1987 62.165 65.7275 37.0869 55.2353 37.494C42.7447 37.9787 9.44292 95.3132 0.118438 138.707Z'
                        fill='#0E6134'
                      ></path>
                    </svg>
                  </div>
                  <img
                    className='md:z-[2] sm:mx-auto md:absolute md:bottom-[10%] md:left-[10%]'
                    src={VendorPic}
                    alt='vendor pic'
                  />
                </div>
              </div>
              <div className='space-y-4 mt-5'>
                <h1 className='title-font sm:text-4xl font-quicksand  text-3xl mb-4 font-bold text-gray-900'>
                  Delivery Agent
                </h1>
                <p className='mb-8 text-lg leading-7 font-semibold text-gray-400'>
                  Reach new customers, market your store, and grow your business
                  by offering delivery, pickup, and direct online ordering with
                  DoorDash.{' '}
                </p>
                <div className='flex flex-row  justify-center space-x-3 w-full'>
                  <a href=''>
                    <img className='mb-5' src={AppleStore} alt='applestore' />
                  </a>
                  <a href=''>
                    <img src={GooglePlay} alt='googleplay' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
