import React from 'react';
import active from '../assets/active.png';
import dot from '../assets/dot.png'; 
import mango from '../assets/mango.png';
import puma from '../assets/puma.png';
import towel from '../assets/towel.png';
import attawheat from '../assets/attawheat.png';

function LastSection() {
  const topSuperstockists = [
    { name: 'Sidhesh Sawant', amount: '₹1,23,000', status: 'Active' },
    { name: 'Sidhesh Sawant', amount: '₹1,23,000', status: 'Active' },
    { name: 'Sidhesh Sawant', amount: '₹1,23,000', status: 'Active' },
    { name: 'Sidhesh Sawant', amount: '₹1,23,000', status: 'Active' },
    { name: 'Sidhesh Sawant', amount: '₹1,23,000', status: 'Active' },
  ];

  const topDistributors = [
    { name: 'Sidhesh Sawant', amount: '₹1,23,000', status: 'Active' },
    { name: 'Sidhesh Sawant', amount: '₹1,23,000', status: 'Active' },
    { name: 'Sidhesh Sawant', amount: '₹1,23,000', status: 'Active' },
    { name: 'Sidhesh Sawant', amount: '₹1,23,000', status: 'Active' },
    { name: 'Sidhesh Sawant', amount: '₹1,23,000', status: 'Active' },
  ];

  const topSellingProducts = [
    { name: 'Mango', price: '₹112.00', image: mango },
    { name: 'Atta-Wheat', price: '₹140.00', image: attawheat },
    { name: 'Shoes-Puma', price: '₹8,400.00', image: puma },
    { name: 'Towel', price: '₹120.00', image: towel },
  ];

  return (
    <div className="container  mt-12 lg:w-[1230px] sm:w-[800px]">
      <div className="flex lg:flex-row space-x-4 sm:flex-col sm:justify-center sm:items-center ">
        {/* Top Superstockists Section */}
        <div className="lg:w-1/3 border bg-white border-gray-300 rounded p-4 sm:w-1/2 sm:m-4">
          <h2 className="text-xl font-semibold mb-8 pb-2 border-b-2 border-black border-dashed text-[#246FE5]">Top Superstockist</h2>
          <ul className="list-none">
            {topSuperstockists.map((superstockist) => (
              <li key={superstockist.name} className="mb-2">
                <div className="flex items-center relative">
                  <img src={dot} alt="Dot" className=" absolute lg:left-[280px] sm:left-[240px] z-30" />
                  <span className="pl-5 font-semibold">{superstockist.name}</span>
                  <span className="absolute lg:left-[295px]  sm:left-[250px] md: z-30 ">{superstockist.status}</span>
                  <img src={active} alt="Active" className="absolute lg:left-[270px] sm:left-[220px] z-10 w-[80px]" />
                </div>
                <span className="block ml-6 mt-1 mb-2">{superstockist.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Distributors Section */}
        <div className="lg:w-1/3 border bg-white border-gray-300 rounded p-4 sm:w-1/2 sm:m-4">
          <h2 className="text-xl font-semibold mb-8 pb-2 border-b-2 border-black border-dashed text-[#246FE5]">Top Distributors</h2>
          <ul className="list-none">
            {topDistributors.map((distributor) => (
              <li key={distributor.name} className="mb-2">
              <div className="flex items-center relative">
                  <img src={dot} alt="Dot" className=" absolute lg:left-[280px] sm:left-[240px] z-30" />
                  <span className="pl-5 font-semibold">{distributor.name}</span>
                  <span className="absolute lg:left-[295px] sm:left-[250px] z-30 ">{distributor.status}</span>
                  <img src={active} alt="Active" className="absolute lg:left-[270px] sm:left-[220px] z-10 w-[80px]" />
                </div>
                <span className="block ml-6 mt-1 mb-2">{distributor.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Selling Products Section */}
        <div className="lg:w-1/3 border bg-white border-gray-300 rounded p-4 sm:w-1/2 sm:m-4">
          <h2 className="text-xl font-semibold mb-8 pb-2 border-b-2 border-black border-dashed text-[#246FE5]">Top Selling Products</h2>
          <ul className="list-disc">
            {topSellingProducts.map((product) => (
                <li key={product.name} className="mb-6 flex items-center">
                 <img src={product.image} alt={product.name} className="w-10 h-10 object-cover mr-2" />
                 <div>
                   <span className="font-bold block">{product.name}</span> 
                   <span>{product.price}</span>
                 </div>
               </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LastSection;
