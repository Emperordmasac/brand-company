import foodBasket from '../assets/images/foodbasket.webp';
import clock from '../assets/images/clock.webp';
import happyFace from '../assets/images/happyface.webp';
import mobileApp from '../assets/images/clay _dark.webp';
import appleDownload from '../assets/images/Appstore.webp';
import androidDownload from '../assets/images/Googleplay.webp';
import customer from '../assets/images/girl.webp';

const Home = () => {
  return (
    <>
      <section className='bg-welcomeBg bg-center bg-no-repeat bg-cover space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between gap-8 lg:gap-24 md:items-center py-12 lg:py-10'>
          <div className='col-span-1 md:col-span-2'>
            <h2 className='text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-green-900'>
              Go grocery shopping without moving an{' '}
              <span className='text-[#FB4900]'>inch</span>
            </h2>
            <p className='text-xl text-[#868694] leading-5 font-normal'>
              Save up to 100% off on your first order
            </p>
          </div>
          <div>
            <div className='relative z-[1]'>
              <img src={foodBasket} alt='foodbasket' />
              <img
                src={happyFace}
                alt='happyface'
                className='absolute z-[2] top-[30%] left-0'
              />
              <img src={clock} className='absolute z-[2] top-[85%] right-3' />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#fff] space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-8'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between gap-8 items-center'>
          <div className='py-10 px-10 bg-partner1 bg-center bg-no-repeat bg-cover w-fit rounded-lg'>
            <p className='text-2xl font-bold leading-[50px]'>
              Become a Partner
            </p>
            <p className=' font-seibold text-lg w-2/3 leading-[30px]'>
              Grow your business and reach new customers by partnering with us.
            </p>
            <a href='/'>
              <p className='text-lg leading-6 font-bold text-green-900 pt-2'>
                Learn More
              </p>
            </a>
          </div>

          <div className='py-10 px-10 bg-dasher bg-center bg-no-repeat bg-cover w-fit rounded-lg'>
            <p className='text-2xl font-bold leading-[50px]'>Become a Dasher</p>
            <p className=' font-seibold text-lg w-2/3 leading-[30px]'>
              As a delivery driver, you'll make reliable money working anytime,
              anywhere.
            </p>
            <a href='/'>
              <p className='text-lg leading-6 font-bold text-green-900 pt-2'>
                Learn More
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className='bg-downloadBg bg-no-repeat bg-cover text-gray-600 px-6 lg:px-24 pt-12'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between gap-8 items-center px-5'>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 mb-10 w-5/6 md:mb-0'>
            <img
              className='object-cover object-center rounded'
              alt='mobileapp'
              src={mobileApp}
            ></img>
          </div>
          <div className='flex flex-col items-center text-center md:items-start md:text-left lg:flex-grow md:w-1/2 px-26'>
            <h2 className='text-gray-900 text-3xl font-bold mb-4 sm:text-4xl'>
              Join Our Growing <br /> Community Download <br /> And Start{' '}
              <span className='text-green-900'>Shopping</span>
            </h2>
            <p className='text-lg leading-7 font-semibold text-gray-400 mb-8'>
              Experience the best your neighborhood has to offer, <br /> all in
              one app....{' '}
              <a className='text-green-900 font-semibold leading-7 text-lg'>
                Learn More
              </a>
            </p>
            <div className='flex justify-center space-x-3'>
              <a>
                <img src={appleDownload} alt='apple store' />
              </a>
              <a>
                <img src={androidDownload} alt='google store' />
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className='bg-[#F3F7F5]'>
        <div className='container mx-auto py-24 px-5'>
          <div className='flex flex-col mb-20 w-full text-center'>
            <p className='text-[1rem] lg:w-2/3 leading-[1.625] mx-auto'>
              TESTIMONIALS
            </p>
            <h2 className='text-3xl sm:text-4xl mb-2 text-[#0a0707] font-bold '>
              What Our Customer Say
            </h2>
          </div>
          <div className='flex flex-col md:flex-row gap-8 items-center w-full justify-center'>
            <div className='w-[80%]'>
              {/* <div className='absolute z-[2] mx-24 left-10'>
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
              </div> */}
              <div className='lg:ml-44'>
                <img src={customer} alt='customer image' />
              </div>
            </div>
            <div className='w-20% text-center'>
              <p className='font-bold text-[22px] leading-[22px]'>
                Justina Alins
              </p>
              <p className='font-normal text-[14px] leading-[14px] text-[#8F9698]'>
                Vendor
              </p>
              <p className='mt-5 mb-2 font-normal text-[18px] leading-[32px] italic text-[#8F9698] w-full'>
                “Really fresh2cart is the best platform to boost your business
                especially their support was awesome, They have tried to level
                best to give best support of new candidate.”
              </p>
              <div className='flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-yellow-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='w-5 h-5 text-yellow-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='w-5 h-5 text-yellow-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='w-5 h-5 text-yellow-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='w-5 h-5 text-gray-300 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              </div>
              <div className='mt-8 flex items-center gap-4 justify-center'>
                <button>
                  <svg
                    width='16'
                    height='8'
                    viewBox='0 0 16 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.18332 4.3179C0.183508 4.31809 0.183664 4.31831 0.183882 4.3185L3.44963 7.56849C3.69429 7.81196 4.09001 7.81105 4.33354 7.56637C4.57704 7.32171 4.5761 6.92599 4.33144 6.68249L2.13882 4.5005L15.375 4.50049C15.7202 4.50049 16 4.22068 16 3.87549C16 3.53031 15.7202 3.2505 15.375 3.2505L2.13885 3.2505L4.33141 1.0685C4.57607 0.824999 4.57701 0.429281 4.33351 0.184625C4.08998 -0.0600938 3.69423 -0.0609373 3.4496 0.1825L0.183851 3.4325C0.183663 3.43268 0.183507 3.4329 0.183288 3.43309C-0.0614933 3.6774 -0.0607112 4.0744 0.18332 4.3179Z'
                      fill='#8F9698'
                    ></path>
                  </svg>
                </button>
                <button className='bg-white rounded-full px-5 py-4'>
                  <svg
                    width='16'
                    height='8'
                    viewBox='0 0 16 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.8167 3.43308C15.8169 3.43326 15.8165 3.43289 15.8167 3.43308L12.5504 0.182486C12.3057 -0.0609824 11.91 -0.0600764 11.6665 0.184611C11.423 0.429267 11.4239 0.824985 11.6686 1.06848L13.8612 3.25048H0.625C0.279813 3.25048 0 3.53029 0 3.87548C0 4.22067 0.279813 4.50048 0.625 4.50048H13.8612L11.6686 6.68248C11.4239 6.92598 11.423 7.3217 11.6665 7.56635C11.91 7.81107 12.3058 7.81191 12.5504 7.56848L15.8162 4.31848C15.8159 4.31867 15.8163 4.31829 15.8162 4.31848C16.0609 4.07417 16.0607 3.67658 15.8167 3.43308Z'
                      fill='#0E6134'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
