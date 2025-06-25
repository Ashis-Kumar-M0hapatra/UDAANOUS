import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Landing = () => {
  return (
    <div>
      <div className='bg-gray-800 text-white px-4 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-16'>
      <div className="max-w-2xl flex flex-col justify-between h-full px-6 lg:px-0 mx-auto">
        <div className='flex items-center gap-2'>
          <FaHeart className='text-red-500 text-md' />
        <h6 className='text-lg text-red-500'>Change The World Together</h6>
        </div>
        <h1 className='text-6xl text-white font-bold mb-6'>For The People & Cause You Care About</h1>
        <p className='text-md text-gray-300 mb-8'>It is a long established fact that a reader will be distracted lorem the readable content of a page when looking at layout the point lorem established fact that It is a long established</p>

        <div className="w-[75%] sm:w-full flex flex-col sm:flex-row sm:items-center gap-4">
  <a
  href="/explore"
  className="group relative inline-flex items-center justify-center overflow-hidden rounded bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-600"
>
  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform translate-x-0 group-hover:-translate-x-full">
    <FaArrowRight className="mr-2" />
    <span>Make Donation</span>
  </span>
  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform translate-x-full group-hover:translate-x-0">
    <span>Make Donation</span>
    <FaArrowRight className="ml-2" />
  </span>
  <span className="invisible">Make Donation</span>
</a>

</div>
      </div>
      <div className="hidden lg:block lg:h-screen lg:ml-auto">
  <img 
    src="/img/img-1.png" 
    alt="" 
    className='h-full object-cover max-w-none'
    style={{ width: 'auto', maxHeight: '100vh' }}
  />
</div>
    </div>
  </div>
)
}

export default Landing