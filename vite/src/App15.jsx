import React from "react";
import { useState } from "react";

const App15 = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <div className='flex justify-end py-5 px-10 bg-blue-500'>
      <div className='relative'>
        <button className='text-white' onClick={() => setToggle(!toggle)}>
          aa
        </button>
        {toggle && (
          <div className='absolute top-6 right-0'>
            <input type='text' className=''></input>
          </div>
        )}
      </div>
    </div>
  );
};

export default App15;
