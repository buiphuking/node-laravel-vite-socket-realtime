import React from "react";
import { useState } from "react";
import Menu6 from "./components/Menu6";

const App6 = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className='bg-gray-400'>
      <div className='max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600'>
        <div>a</div>
        <div className='hidden md:block'>
          <Menu6 />
        </div>
        <div>c</div>
        <button type='button' className='md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out' onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg className='h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>
      <div className='md:hidden'>{showMobileMenu && <Menu6 />}</div>
    </nav>
  );
};

export default App6;
