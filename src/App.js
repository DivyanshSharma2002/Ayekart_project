import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import search from '../src/assets/search.png';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-row bg-gray-100 min-h-screen w-full">
      <Navbar onToggle={setNavbarOpen} />
      <div className={`flex flex-col relative`}>
        <div className="flex z-10 bg-white border-[#C6C6C6] border-[1px] items-center justify-between relative flex-wrap">
          <img src={search} className='absolute ml-[80px] h-4 w-4 md:h-4 md:w-4' /> 
          <input 
            type="text" 
            placeholder="Search..." 
            className="border bg-[#F2F2F2] border-gray-300 rounded-md p-2 m-5 ml-[70px] pl-10 w-full md:w-1/4" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex mr-[20px] items-center flex-shrink-0"> 
            <img src="../pic.png" alt="Profile" className="mr-4 h-8 w-8" />
            <span className="font-semibold">Siddhesh Sawant</span>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
