import React from 'react';

const State = ({ title, description ,image}) => {
  return (
    <div className="bg-white h-[120px] w-[200px]  m-1 flex flex-col items-center justify-center relative rounded-md">
    <img src={image} className= 'absolute h-[18px] w-[18px] top-[10px] mb-5'/>
      <h2 className="text-sm mb-2 text-gray-600">{title}</h2>
      <p className="font-bold">{description}</p>
    </div>
  );
};

export default State;
