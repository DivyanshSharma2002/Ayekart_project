import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import home from '../assets/home.png';
import button1 from '../assets/button.png';
import button2 from '../assets/button2.png';
import asset from '../assets/asset.png';
import billing from '../assets/billing.png';
import merchant from '../assets/merchant.png';
import quickorder from '../assets/quickorder.png';
import quickcredit from '../assets/quickcredit.png';
import myorder from '../assets/myorder.png';
import machine from '../assets/machine.png';
import warehouse from '../assets/warehouse.png';
import receivedorder from '../assets/receivedorder.png';
import users from '../assets/users.png';
import inventory1 from '../assets/inventory1.png';
import inventory2 from '../assets/inventory2.png';
const Navbar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
    onToggle(!isOpen);
  };

  const links = [
    { image: home, label: 'Home', route: '/' },
    { image: billing,label: 'Billing', route: '/billing' },
    { image: merchant,label: 'Merchants', route: '/merchants' },
    { image: inventory1,label: 'Inventory', route: '/inventory' }, 
    { image: users,label: 'Users', route: '/users' },
    { image: quickcredit,label: 'Quick Credit', route: '/quick-credit' },
    { image: quickorder,label: 'Quick Order', route: '/quick-order' },
    { image: myorder,label: 'My Orders', route: '/my-orders' },
    { image: receivedorder,label: 'Received Orders', route: '/received-orders' },
    { image: warehouse,label: 'Warehouse', route: '/warehouse' },
    { image: machine,label: 'Machines', route: '/machines' },
    { image: asset,label: 'Assets', route: '/assets' },
  ];

  return (
    <div
      className={`bg-[#3A76D5] h-[2100px] text-white transition-transform duration-300 ${
        isOpen ? 'w-[371px] ' : 'w-[164px] '
      } flex flex-col relative`}
    >
      {/* Toggle Button (Placed at the top) */}
      <div
  className={`z-40 absolute top-[40px] cursor-pointer  w-10 h-10 flex items-center justify-center  ${
    isOpen ? ' left-[195px]' : 'left-[147px]'
  }`}
  onClick={toggleNavbar}
>
  {/* Background Circle Image */}
  <img
    src={button1}  
    className="absolute w-[25px] h-[25px] "
    alt="Circle"
  />
  
  {/* Arrow Image */}
  <img
    src={button2}  
    className={`absolute w-[6px] h-[6px] transform transition-transform ${
      isOpen ? 'rotate-360' : 'rotate-180'
    }`}
    alt="Arrow"
  />
</div>


      {/* Centered Logo */}
      <div className="flex justify-center">
        <img
          src="../logo.png"
          className={`absolute ${isOpen ? 'w-[150px] h-[80px] top-[34px] left-[56px]' : 'w-[87px] h-[53px] top-[14px] left-[32px]'}`}
          alt="Logo"
         
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col absolute top-[200px] left-7 space-y-4">
        {links.map((link, index) => (
          <NavLink
            to={link.route}
            key={index}
        
          >
            {/* Icon and Label */}
            <div
              className={`${
                isOpen
                  ? 'flex items-center ml-6 space-x-7 mb-5' 
                  : 'flex flex-col items-center w-full mb-4' 
              }`}
            >
              <img
                src={link.image}
                className={`${isOpen ? 'h-[29px] w-[28px]' : 'h-[22px] w-[21px] mb-1'}`}
                alt={link.label}
              />
              <span
                className={`${
                  isOpen ? 'inline-block' : 'text-center text-xs'
                }`}
              >
                {link.label}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
