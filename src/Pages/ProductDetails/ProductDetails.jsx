import React from 'react';
import Navbar from '../../Layout/Navbar';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const {imageUrl,name,details,price,availability,growTips} = useLoaderData();
    return (
        <div className="relative flex flex-col-reverse px-4 py-16 mx-auto -mt-14 lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src={imageUrl}
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex -mr-8 justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                New
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {name}
              
            </h2>
            <p className="text-base text-black border-2 md:text-xl">
              {details}
            </p>
          </div>
          <div className='text-base text-black border-2 md:text-xl'>
            <p><span className='font-bold text-red-700'>Tips:</span>
                {growTips}
                </p>
          </div>
          <div>
            <p className='text-red-400 border-2 mt-4 font-semibold text-2xl'>Price: {price}</p>
          </div>
          <button className='block mt-10 w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto'>Add to Cart</button>
          
        </div>
      </div>
    </div>
    );
};

export default ProductDetails;