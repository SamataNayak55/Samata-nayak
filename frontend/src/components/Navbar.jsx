import React from 'react';
import { NavLink } from 'react-router-dom';
//import { light } from '../assets/icons';


const Navbar = () => {
  

  return (
    <div className='flex justify-between items-center px-5 '>
      <NavLink to='/' className='w-15 h-15 m-2 rounded-4xl bg-white items-center justify-center flex font-bold shadow-md'>
      <img src="vite.svg" alt="" />
      </NavLink>

      <nav className='flex text-m gap-5 font-serif px-4'>
        <NavLink to='/about' className="border-0 rounded-4xl bg-gradient-to-r from-[#fca8c5] to-[#cb3659] px-7 text-white"> About </NavLink>

        <NavLink to='/projects' className="border-0 rounded-4xl bg-gradient-to-r from-[#fca8c5] to-[#cb3659] px-6 text-white">
          Projects
        </NavLink>

        
              </nav>
    </div>
  );
}

export default Navbar;
