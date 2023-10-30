const Footer = () => {
  return (
    <div className='bg-footerBg bg-cover bg-no-repeat text-[#fff] px-6 py-6 lg:px-8 md:py-12 bg-green-900'>
      <div className='container mx-auto bg-white bg-opacity-40 py-2 px-8 mb-12 lg:mb-12 md:py-2 lg:pb-6 rounded-lg md:flex md:justify-center md:flex-row md:items-center md:space-x-12 space-y-6'>
        <div className='mt-5 flex-1 max-w-2xl'>
          <h4 className='text-2xl sm:text-3xl md:text-4xl text-[#fff] font-medium'>
            Newsletter Sign Up
          </h4>
        </div>
        <form className='w-full md:w-2/3'>
          <label
            htmlFor='search'
            className='text-sm mb-2 font-medium text-gray-900 sr-only dark:text-gray-300'
          >
            Your Email
          </label>
          <div className='relative'>
            <input
              type='search'
              id='search'
              className='bloxk p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none'
              placeholder='Enter your email here...'
              required
            />
            <button
              type='submit'
              className='text-white absolute right-2.5 bottom-2.5 bg-green-900 hover:bg-opacity-40 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-sm'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8'>
        <div>
          <h5 className='text-xl font-semibold text-white'>Doing Business</h5>
          <nav className='mt-4'>
            <ul className='space-y-2'>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  Become a Delivery Agent
                </a>
              </li>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  Be a Partner Store
                </a>
              </li>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  Get Fresh2cart for Deliveries
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h5 className='text-xl font-semibold text-white'>Get to Know Us</h5>
          <nav className='mt-4'>
            <ul className='space-y-2'>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  Faqs
                </a>
              </li>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h5 className='text-xl font-semibold text-white'>Quick links</h5>
          <nav className='mt-4'>
            <ul className='space-y-2'>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h5 className='text-xl font-semibold text-white'>Social Handles</h5>
          <nav className='mt-4'>
            <ul className='space-y-2'>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  X.com
                </a>
              </li>
              <li>
                <a
                  className='text-base font-normal text-white hover:no-underline hover:text-gray-400'
                  href='/'
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-16 lg:mt-20'>
        <img
          src='https://res.cloudinary.com/snowrealm/image/upload/v1698649143/Fresh2carts_3x_ku6adw_y8pjc7.webp'
          alt='frest2carts logo'
          className='h-8'
        />
        <div className='text-sm'>© 2023 Fresh2carts. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
