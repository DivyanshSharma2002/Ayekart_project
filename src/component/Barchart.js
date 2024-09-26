import React from 'react'
import frame from '../assets/Frame2.png'
const BarChart = ({ barImages }) => {
  return (
    <div className="border rounded-lg p-4 w-[500px] h-[550px] relative bg-white">
      {/* Header with Title and Dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Invoice Count Summary</h2>
        <select className="border p-2 rounded-lg bg-white">
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      {/* Legend */}
      <div className="flex mb-2">
  <div className="flex items-center mr-4">
    <input 
      type="radio" 
      name="invoiceType" 
      value="sell" 
      id="sellInvoice" 
      className="mr-1" 
    />
    <label htmlFor="sellInvoice" className="text-xs text-gray-600">Sell Invoice</label>
  </div>
  <div className="flex items-center">
    <input 
      type="radio" 
      name="invoiceType" 
      value="purchase" 
      id="purchaseInvoice" 
      className="mr-1" 
    />
    <label htmlFor="purchaseInvoice" className="text-xs text-gray-600">Purchase Invoice</label>
  </div>
</div>


      {/* Bar Images Section */}
  
    <div className='relative'>
      <img src={frame} className='mt-[20px'/>
      <div className=" absolute flex justify-between items-end w-full h-[160px]">
        {barImages.map((bar, index) => (
          <img 
            key={index} 
            src={bar} 
            alt={`Bar ${index}`} 
            className="mr-2 w-[29px] h-full object-fill mb-24" 
          />
        ))}
      </div>
    </div>

      {/* Months Label */}
      <div className="absolute bottom-2 w-full flex justify-between text-xs text-gray-600 px-6 right-1">
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
  )
}

export default BarChart;
