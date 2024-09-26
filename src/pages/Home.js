import React from 'react';
import Card from '../component/Card'; 
import BarChartComponent from '../component/Barchart';
import bar1 from '../assets/bar1.png';
import bar2 from '../assets/bar2.png';
import bar3 from '../assets/bar3.png';
import bar4 from '../assets/bar4.png';
import bar5 from '../assets/bar5.png';
import bar6 from '../assets/bar6.png';
import bar7 from '../assets/bar7.png';
import bar8 from '../assets/bar8.png';
import bar9 from '../assets/bar9.png';
import bar10 from '../assets/bar10.png';
import bar11 from '../assets/bar11.png';
import bar12 from '../assets/bar12.png';
import StateCard from '../component/StateCard';
import Product from '../component/Product';
import Lastsection from '../component/Lastsection';

const Home = () => {
  const barImages = [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10, bar11, bar12];

  return (
    <div className='ml-[70px] w-full'>
      <h1 className='text-3xl font-bold mt-10 mb-10'>Dashboard</h1>
      
      {/* Responsive flexbox for the Card and BarChartComponent */}
      <div className='flex flex-col lg:flex-row items-start justify-between mb-10 w-[1230px]'>
        <div className='flex flex-col space-y-4 lg:w-[400px] '> 
          <Card />
        </div>
        <div > 
          <BarChartComponent barImages={barImages} />
        </div>
      </div>
      
      <div className='mb-10'>
        <StateCard />
      </div>
      
      <div className='mb-10'>
        <Product />
      </div>
      
      <div>
        <Lastsection />
      </div>
    </div>
  );
};

export default Home;
