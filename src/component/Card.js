import React from 'react'
import sell from '../assets/Vector.png'
import purchase from '../assets/purchase.png'
import sellellipse from '../assets/Ellipse.png'
import Ellipse from '../assets/Ellipse4.png'
import Purchaseellipse from '../assets/Ellipse11.png'
import groupellipse from '../assets/Ellipse65.png'
import group from '../assets/Group.png'
import line1 from '../assets/line1.png'
import line2 from '../assets/line2.png'
import line3 from '../assets/line3.png'
import line4 from '../assets/line4.png'
import curve1 from '../assets/curve1.png'
import curve2 from '../assets/curve2.png'

const Card = () => {
  return (
    <div className='flex flex-col w-[530px]'>
    <div className='flex lg:flex-row m-0 justify-between sm:flex-col sm:justify-center sm:items-center md:flex-row'>
    <div className='h-[160px] w-[150px] rounded-[8px] border-[1px] border-[#246FE5] m-3 p-2 relative bg-white'>
      {/* Title and Icon */}
      <div className='flex items-center p-1'>
        <h2 className='text-l font-semibold text-[#3D41A7] '>Sell</h2>
        <div className=''>
          {/* Background Ellipse */}
          <img src={sellellipse} className='absolute z-30 h-[25px] w-[25px] top-[12px] right-[12px]' />
          {/* Sell Icon */}
          <img src={sell} className='absolute z-50 h-[12px] w-[13px] top-[18px] right-[18px]' />
        </div>
      </div>

      {/* Amount Collected */}
      <div className='mt-4'>
        <div className='flex items-center'>
          <img src={Ellipse} className='w-[6px] h-[6px] mr-2' />
          <h3 className='text-xs mb-1'>Amount Collected:</h3>
        </div>
        <h1 className='text-sm font-semibold ml-4'>₹ 12,90,000</h1>
      </div>

      {/* Amount Outstanding */}
      <div className='mt-2'>
        <div className='flex items-center'>
          <img src={Ellipse} className='w-[6px] h-[6px] mr-2' />
          <h3 className='text-xs mb-1'>Amount Outstanding:</h3>
        </div>
        <h1 className='text-sm font-semibold ml-4'>₹ 10,000</h1>
      </div>
    </div>


    <div className='h-[160px] w-[150px] rounded-[8px] border-[1px] border-[#246FE5] m-3 p-2 relative bg-white'>
      {/* Title and Icon */}
      <div className='flex items-center p-1'>
        <h2 className='text-l font-semibold text-[#3DA741] '>Purchase</h2>
        <div className=''>
          {/* Background Ellipse */}
          <img src={Purchaseellipse} className='absolute z-30 h-[25px] w-[25px] top-[12px] right-[12px]' />
          {/* Sell Icon */}
          <img src={purchase} className='absolute z-50 h-[12px] w-[13px] top-[18px] right-[18px]' />
        </div>
      </div>

      {/* Amount Collected */}
      <div className='mt-4'>
        <div className='flex items-center'>
          <img src={Ellipse} className='w-[6px] h-[6px] mr-2' />
          <h3 className='text-xs mb-1'>Amount Paid:</h3>
        </div>
        <h1 className='text-sm font-semibold ml-4'>₹ 12,90,000</h1>
      </div>

      {/* Amount Outstanding */}
      <div className='mt-2'>
        <div className='flex items-center'>
          <img src={Ellipse} className='w-[6px] h-[6px] mr-2' />
          <h3 className='text-xs mb-1'>Amount Outstanding:</h3>
        </div>
        <h1 className='text-sm font-semibold ml-4'>₹ 10,000</h1>
      </div>
    </div>


    <div className='h-[160px] w-[150px] rounded-[8px] border-[1px] border-[#246FE5] m-3 p-2 relative bg-white'>
      {/* Title and Icon */}
      <div className='flex items-center p-1'>
        <h2 className='text-l font-semibold text-[#A7573D] '>Onboarding</h2>
        <div className=''>
          {/* Background Ellipse */}
          <img src={groupellipse} className='absolute z-30 h-[25px] w-[25px] top-[12px] right-[12px]' />
          {/* Sell Icon */}
          <img src={group} className='absolute z-50 h-[12px] w-[13px] top-[18px] right-[18px]' />
        </div>
      </div>

      {/* Amount Collected */}
      <div className='mt-4'>
        <div className='flex items-center'>
          <img src={Ellipse} className='w-[6px] h-[6px] mr-2' />
          <h3 className='text-xs mb-1'>Vendors:</h3>
        </div>
        <h1 className='text-sm font-semibold ml-4'>120</h1>
      </div>

      {/* Amount Outstanding */}
      <div className='mt-2'>
        <div className='flex items-center'>
          <img src={Ellipse} className='w-[6px] h-[6px] mr-2' />
          <h3 className='text-xs mb-1'>Customers:</h3>
        </div>
        <h1 className='text-sm font-semibold ml-4'>120</h1>
      </div>
    </div>
    </div>
    {/* graph */}
    <div className="mt-10 p-4 border rounded-lg bg-white ">
      {/* Header Section with Title and Dropdown */}
      <div className="flex justify-between items-center mb-4 sm:justify-center sm:items-center">
        <h2 className="text-lg font-semibold">Sell Amount Summary</h2>
        {/* Year Selector Dropdown */}
        <div className="relative">
          <select className="border p-2 rounded-lg bg-white">
            <option value="2023-24">2023-24</option>
            <option value="2022-23">2022-23</option>
            <option value="2021-22">2021-22</option>
          </select>
        </div>
      </div>

      {/* Graph Image Section */}
      <div className=" flex w-full h-[250px] relative">
        {/* This is where you'll insert your actual graph image */}
        <div className='absolute top-[60px] '>
            <p className='absolute top-[10px]  text-gray-600 text-sm'>10,000</p>
            <p className='absolute top-[70px] text-gray-600 text-sm'>5000</p>
            <p className='absolute top-[130px] text-gray-600 text-sm'>2000</p>
        </div>
        <img src={line1} alt="Graph" className=" absolute w-[440px] h-[full] object-contain top-[80px] right-[2px]  z-20" />
        <img src={line1} alt="Graph" className=" absolute  w-[440px]  h-full object-contain top-[20px] right-[2px] z-20" />
        <img src={line1} alt="Graph" className=" absolute  w-[440px]  h-full object-contain right-[2px] top-[80px]   z-20" />
        <img src={line4} alt="Graph" className=" absolute w-full h-[180px] object-contain right-[195px] top-[25px] z-20" />
        <img src={curve1} alt="Graph" className=" absolute w-[440px] h-full object-contain right-[2px] top-[40px]  z-30" />
        <img src={curve2} alt="Graph" className=" absolute w-[440px] h-full object-contain right-[2.5px] top-[45px] z-30" />
        <div className="absolute  w-full flex justify-between left-[20px] px-8 bottom-[10px] text-sm text-gray-600">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Card
