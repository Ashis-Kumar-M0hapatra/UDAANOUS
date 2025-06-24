import React from 'react';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import ImageSlider from './ImageSlider';

const Landing = () => {
  return (
    <div className="relative">
      {/* Image Slider Section */}
      <ImageSlider />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-6xl w-full px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <FaHeart className="text-red-500 text-md" />
              <h6 className="text-lg lg:text-xl text-red-500 font-bold">Change The World Together</h6>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              For The People & Cause You Care About
            </h1>
            <p className="text-md text-gray-300 mb-8 font-semibold">
              It is a long established fact that a reader will be distracted lorem the readable
              content of a page when looking at layout the point lorem established fact that It is a
              long established
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
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

              {/* Overlapping Avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  <img
                    src="/Img/user-1.png"
                    alt="user-1"
                    className="w-[50px] h-[50px] rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/Img/user-2.png"
                    alt="user-2"
                    className="w-[50px] h-[50px] rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/Img/user-3.png"
                    alt="user-3"
                    className="w-[50px] h-[50px] rounded-full border-2 border-white object-cover"
                  />
                  <div className="w-[50px] h-[50px] rounded-full border-2 border-white bg-gray-800 text-red-500 text-sm font-semibold flex items-center justify-center">
                    2.5M
                  </div>
                </div>
                <div className="ml-3 text-sm font-semibold text-white">Active donors</div>
              </div>
            </div>
          </div>

          {/* Empty div for flex spacing - can be removed if not needed */}
          <div className="hidden lg:block w-[400px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;