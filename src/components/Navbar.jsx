import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import bug from '../assets/icons/bug.png';
import bugblue from '../assets/icons/bugblue.png';

const Navbar = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const handleLogoMouseEnter = () => {
    setIsLogoHovered(true);
  };

  const handleLogoMouseLeave = () => {
    setIsLogoHovered(false);
  };

  return (
    <header className='header'>
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" 
        onMouseEnter={handleLogoMouseEnter}
        onMouseLeave={handleLogoMouseLeave}
      >
        <img src={isLogoHovered ? bug : bugblue } className="img_gradient" alt="Logo" />
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          About
        </NavLink>
      </nav>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Projects
        </NavLink>
      </nav>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
