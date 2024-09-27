import React, { useState } from 'react';
import wheat from '../assets/wheat.png';
import atta from '../assets/atta.png';
import biscuits from '../assets/biscuits.png';

function Product() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { image: wheat, name: 'Wheat', quantity: 20000, uom: 'KG', price: 120.00 },
    { image: atta, name: 'Atta', quantity: 12000, uom: 'KG', price: 120.00 },
    { image: biscuits, name: 'Biscuits', quantity: 15000, uom: 'PC', price: 500.00 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container w-[1230px] mt-8 bg-white rounded-sm">
      {/* Heading, Search Bar, and Buttons */}
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-center mb-4 mt-20 p-2 sm:flex-col sm:justify-center sm:items-center">
        <h1 className="text-l text-left ml-8">
          Products in Inventory
        </h1>
        <div className="lg:flex lg:items-center lg:flex-row  sm:flex-col sm:justify-center sm:items-center">
          <button className="border-[#A0A0A0] text-[#A0A0A0] border-[1px]  px-4 py-2 m-2 rounded">Expired</button>
          <button className="border-[#A0A0A0] text-[#A0A0A0] border-[1px] px-4 py-2 m-2 rounded">Expiring in 7 days</button>
          <input
            type="text"
            className="border-[#A0A0A0] border-[1px] rounded px-4 py-2"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <table className="table-auto w-[100%] bg-white">
        <thead>
          <tr className="bg-blue-100">
            <th className="px-4 py-2 text-center border-b">Product</th>
            <th className="px-4 py-2 text-center border-b">Quantity</th>
            <th className="px-4 py-2 text-center border-b">UOM</th>
            <th className="px-4 py-2 text-center border-b">Price per Unit</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index} className="border-b border-black w-[90%]">
              <td className="px-4 mb-3 flex items-center relative">
                <img src={product.image} alt={product.name} className="w-8 h-8 absolute left-[80px] top-[10px] object-cover text-center" />
                <span className="absolute left-[120px] top-[10px] text-lg text-center">{product.name}</span>
              </td>
              <td className="px-4 py-4 text-lg text-center">{product.quantity}</td>
              <td className="px-4 py-4 text-lg text-center">{product.uom}</td>
              <td className="px-4 py-4 text-lg text-center">{product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
