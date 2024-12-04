import React from 'react';

const CircleButton = ({ text,onClick, rounded = true }) => {
  return (
    <button
    onClick={onClick}
      style={{ borderColor: 'hsl(54, 81%, 49%)' }}
      className={`group relative flex  h-[40px] font-medium text-sm w-32 items-center justify-center overflow-hidden text-white shadow-2xl transition-all border-2 border-solid bg-transparent before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[hsl(54,81%,49%)] before:duration-500 before:ease-out hover:before:h-40 hover:before:w-40 ${
        rounded ? 'rounded-full' : ''
      }`}
    >
      <span className="relative z-10 text-black group-hover:text-black transition-colors duration-300">{text}</span>
    </button>
  );
};

export default CircleButton;