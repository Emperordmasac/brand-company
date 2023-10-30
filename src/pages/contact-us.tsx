import * as React from 'react';

import { HorizontalLogo } from '../assets/images';

const ContactUs = () => {
  const [mobileNav, setMobileNav] = React.useState(false);
  return (
    <>
      <div className='px-6 lg:px-8 py-4 lg:py-5 bg-contactUsBg bg-center bg-cover bg-no-repeat bg-[#f9fafb]'>
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
                  <span className='flex focus:no-underline hover:no-underline  items-center p-2 text-base font-normal text-black rounded-lg  hover:text-fg-primary  hover:text-white'>
                    FAQ
                  </span>
                </a>
                <a
                  className='flex focus:no-underline hover:no-underline  items-center p-2 text-base font-normal text-black rounded-lg  hover:text-fg-primary  hover:text-white'
                  href='/contactus'
                >
                  <span className='text-fg-primary flex items-center p-2 text-base font-bold text-white rounded-lg  hover:text-fg-primary hover:no-underline hover:text-white focus:no-underline'>
                    Contact
                  </span>
                </a>
              </ul>
            </div>
          </div>
        </nav>
        {/* contact section */}
        <div className='text-gray-600 mt-10'>
          <div className='container mx-auto flex px-6 lg:px-24 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <p className=' mb-2 text-lg leading-7 font-semibold text-[#0A4424]'>
                Contact Me
              </p>
              <h1 className=' sm:text-4xl font-quicksand  text-3xl mb-4 font-bold text-[#0A0707]'>
                How can i help you?
              </h1>
              <p className=' mb-8 text-lg leading-7 font-semibold text-[#8F9698]'>
                Fill in the form or drop an email.
              </p>
              <div className='flex flex-col space-y-7 w-full md:w-3/5 '>
                <div className='items-center inline-flex border-green-900 border p-5 rounded-lg w-full'>
                  <svg
                    width='16'
                    height='27'
                    viewBox='0 0 16 27'
                    className='mr-4'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.3333 0H2.66667C1.95931 0 1.28117 0.27814 0.780952 0.773143C0.28095 1.26834 0 1.93972 0 2.64V23.76C0 24.4603 0.28095 25.1316 0.780952 25.6269C1.28115 26.1219 1.95931 26.4 2.66667 26.4H13.3333C14.0407 26.4 14.7188 26.1219 15.219 25.6269C15.7191 25.1317 16 24.4603 16 23.76V2.64C16 1.93972 15.7191 1.26836 15.219 0.773143C14.7188 0.27814 14.0407 0 13.3333 0ZM14.2222 23.76C14.2222 23.9934 14.1286 24.2173 13.9619 24.3823C13.7952 24.5473 13.569 24.64 13.3333 24.64H2.66667C2.43095 24.64 2.20476 24.5473 2.0381 24.3823C1.87143 24.2173 1.77778 23.9934 1.77778 23.76V2.64C1.77778 2.40664 1.87143 2.18271 2.0381 2.01771C2.20476 1.85272 2.43095 1.76 2.66667 1.76H13.3333C13.569 1.76 13.7952 1.85272 13.9619 2.01771C14.1286 2.18271 14.2222 2.40664 14.2222 2.64V23.76ZM10.6667 21.12C10.6667 21.3534 10.573 21.5773 10.4063 21.7423C10.2397 21.9073 10.0135 22 9.77778 22H6.22222C5.90456 22 5.61112 21.8323 5.45239 21.56C5.29366 21.2877 5.29366 20.9522 5.45239 20.68C5.61112 20.4078 5.90457 20.24 6.22222 20.24H9.77778C10.0135 20.24 10.2397 20.3327 10.4063 20.4977C10.573 20.6627 10.6667 20.8866 10.6667 21.12Z'
                      fill='#0E6134'
                    ></path>
                  </svg>
                  08167665656
                </div>
                <div className='items-center inline-flex border-green-900 border p-5 rounded-lg w-full'>
                  <svg
                    width='16'
                    height='27'
                    viewBox='0 0 16 27'
                    className='mr-4'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.3333 0H2.66667C1.95931 0 1.28117 0.27814 0.780952 0.773143C0.28095 1.26834 0 1.93972 0 2.64V23.76C0 24.4603 0.28095 25.1316 0.780952 25.6269C1.28115 26.1219 1.95931 26.4 2.66667 26.4H13.3333C14.0407 26.4 14.7188 26.1219 15.219 25.6269C15.7191 25.1317 16 24.4603 16 23.76V2.64C16 1.93972 15.7191 1.26836 15.219 0.773143C14.7188 0.27814 14.0407 0 13.3333 0ZM14.2222 23.76C14.2222 23.9934 14.1286 24.2173 13.9619 24.3823C13.7952 24.5473 13.569 24.64 13.3333 24.64H2.66667C2.43095 24.64 2.20476 24.5473 2.0381 24.3823C1.87143 24.2173 1.77778 23.9934 1.77778 23.76V2.64C1.77778 2.40664 1.87143 2.18271 2.0381 2.01771C2.20476 1.85272 2.43095 1.76 2.66667 1.76H13.3333C13.569 1.76 13.7952 1.85272 13.9619 2.01771C14.1286 2.18271 14.2222 2.40664 14.2222 2.64V23.76ZM10.6667 21.12C10.6667 21.3534 10.573 21.5773 10.4063 21.7423C10.2397 21.9073 10.0135 22 9.77778 22H6.22222C5.90456 22 5.61112 21.8323 5.45239 21.56C5.29366 21.2877 5.29366 20.9522 5.45239 20.68C5.61112 20.4078 5.90457 20.24 6.22222 20.24H9.77778C10.0135 20.24 10.2397 20.3327 10.4063 20.4977C10.573 20.6627 10.6667 20.8866 10.6667 21.12Z'
                      fill='#0E6134'
                    ></path>
                  </svg>
                  09898787623
                </div>
                <div className='items-center inline-flex border-green-900 border p-5 rounded-lg w-full'>
                  <svg
                    width='24'
                    height='19'
                    viewBox='0 0 24 19'
                    className='mr-4'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.407 5.396e-05H5.7255C4.25395 -0.00642056 2.83957 0.569984 1.79163 1.60296C0.743686 2.63608 0.147095 4.04199 0.132509 5.51334V12.5888C0.136764 13.2028 0.384642 13.7899 0.821777 14.2211C1.25908 14.6523 1.84954 14.8923 2.46352 14.888H5.26141C5.51372 14.9015 5.7603 14.8109 5.94381 14.637C6.12713 14.4633 6.2309 14.2217 6.2309 13.9692C6.2309 13.7165 6.12713 13.4748 5.94381 13.3012C5.7603 13.1275 5.51372 13.0367 5.26141 13.0502H2.46352C2.33921 13.0531 2.21878 13.0058 2.12943 12.919C2.04027 12.8323 1.98959 12.7133 1.98884 12.5888V5.51335C1.9894 5.21201 2.02676 4.91198 2.1002 4.61969L8.61876 10.2338C9.59103 10.9885 10.7866 11.398 12.0173 11.398C13.2478 11.398 14.4436 10.9885 15.4157 10.2338L22.019 4.60122C22.0998 4.89868 22.1417 5.2052 22.1437 5.5134V13.0501C22.1339 14.0326 21.7351 14.971 21.0347 15.6599C20.3344 16.3487 19.3895 16.732 18.407 16.7257H1.06618C0.814043 16.7122 0.56728 16.8029 0.383776 16.9768C0.200456 17.1505 0.0966797 17.3921 0.0966797 17.6446C0.0966797 17.8973 0.200456 18.1389 0.383776 18.3125C0.56728 18.4864 0.814048 18.5771 1.06618 18.5636H18.407C19.8786 18.5699 21.2929 17.9936 22.3409 16.9605C23.3888 15.9275 23.9854 14.5216 24 13.0501V5.51338C23.9854 4.04203 23.3888 2.63612 22.3409 1.603C21.2929 0.570069 19.8786 -0.00634853 18.407 9.18963e-05L18.407 5.396e-05ZM14.2753 8.72777C13.6273 9.23036 12.8306 9.50342 12.0106 9.50342C11.1906 9.50342 10.3936 9.23038 9.74583 8.72777L3.04969 2.95176C3.75316 2.23734 4.71473 1.83595 5.71754 1.83794H18.4071C19.4023 1.83776 20.3564 2.23381 21.059 2.9384L14.2753 8.72777Z'
                      fill='#0E6134'
                    ></path>
                  </svg>
                  support@f2c.com
                </div>
                <div></div>
              </div>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6  py-10'>
              <div className='bg-green-100 bg-opacity-40 p-5 rounded-lg'>
                <p className='font-quicksand text-xl font-bold mb-5'>
                  Get in Touch
                </p>
                <form>
                  <div className='relative mb-4'>
                    <input
                      id='text'
                      placeholder='Name'
                      className='w-full bg-white rounded  focus:border-indigo-500 border-0 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='relative mb-4'>
                    <input
                      id='email'
                      placeholder='Email'
                      className='w-full bg-white rounded  focus:border-indigo-500 border-0 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out'
                      type='email'
                      name='email'
                    />
                  </div>
                  <div className='relative mb-4'>
                    <input
                      id='subject'
                      placeholder='Subject'
                      className='w-full bg-white rounded  focus:border-indigo-500 border-0 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out'
                      type='text'
                      name='subject'
                    />
                  </div>
                  <div className='relative mb-4'>
                    <textarea
                      id='message'
                      name='message'
                      placeholder='Message'
                      className='w-full bg-white rounded border-0   h-32 text-base  text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                      spellCheck='false'
                      data-ms-editor='true'
                    ></textarea>
                  </div>
                  <button className='text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-opacity-60 rounded text-lg w-full'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
