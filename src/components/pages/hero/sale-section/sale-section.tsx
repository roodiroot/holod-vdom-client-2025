import Image from "next/image";
import Link from "next/link";

const SaleSection = () => {
  return (
    <div className='bg-white pt-16 sm:pt-24'>
      <div className='pt-32 overflow-hidden sm:pt-14'>
        <div className='bg-gray-800'>
          <div className='mx-auto max-w-7xl px-4 sm:pz-6 lg:px-8'>
            <div className='relative pb-16 pt-48 sm:pb-24'>
              <div>
                <h2 className='text-4xl font-bold tracking-tight text-white md:text-5xl'>
                  Скидки до 20%
                  <br />
                  до 31 Марта
                </h2>
                <div className='mt-6'>
                  <Link href='/products' className='text-white font-semibold'>
                    Выбрать кондиционер
                    <span aria-hidden='true'> →</span>
                  </Link>
                </div>
              </div>
              <div className='absolute -top-32 left-1/2 -translate-x-1/2 sm:top-6 sm:translate-x-0'>
                <div className='ml-24 flex min-w-max sm:ml-3 space-x-6 lg:space-x-8'>
                  <div className='flex sm:flex-col space-x-6 sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden relative shrink-0'>
                      <Image
                        className='h-64 w-64 object-cover md:h-72 md:w-72'
                        src='/image/promo/8.jpg'
                        width={288}
                        height={288}
                        alt='promo_img'
                      />
                    </div>
                    <div className='rounded-lg overflow-hidden relative shrink-0 mt-6 sm:mt-0'>
                      <Image
                        className='h-64 w-64 object-cover md:h-72 md:w-72'
                        src='/image/promo/9.jpg'
                        width={288}
                        height={288}
                        alt='promo_img'
                      />
                    </div>
                  </div>
                  <div className='flex sm:-mt-20 sm:flex-col space-x-6 sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden relative shrink-0'>
                      <Image
                        className='h-64 w-64 object-cover md:h-72 md:w-72'
                        src='/image/promo/2.jpg'
                        width={288}
                        height={288}
                        alt='promo_img'
                      />
                    </div>
                    <div className='rounded-lg overflow-hidden relative shrink-0 mt-6 sm:mt-0'>
                      <Image
                        className='h-64 w-64 object-cover md:h-72 md:w-72'
                        src='/image/promo/1.jpg'
                        width={288}
                        height={288}
                        alt='promo_img'
                      />
                    </div>
                  </div>
                  <div className='flex sm:flex-col space-x-6 sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden relative shrink-0'>
                      <Image
                        className='h-64 w-64  object-cover md:h-72 md:w-72'
                        src='/image/promo/13.jpg'
                        width={288}
                        height={288}
                        alt='promo_img'
                      />
                    </div>
                    <div className='rounded-lg overflow-hidden relative  shrink-0 mt-6 sm:mt-0'>
                      <Image
                        className='h-64 w-64 object-cover md:h-72 md:w-72'
                        src='/image/promo/14.jpg'
                        width={288}
                        height={288}
                        alt='promo_img'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
