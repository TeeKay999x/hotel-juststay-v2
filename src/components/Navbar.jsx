import React, { useState } from 'react'
import { X, Menu, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-17.5 bg-black/70 text-white z-1000 flex items-center backdrop-blur">
      <div className="flex justify-between items-center w-[95%] my-0 mx-auto">

        {/* Mobile Menu Icon (Left side as per your video) */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Logo (Centered on mobile, Left on desktop) */}
        <div className="text-[1.4rem] font-bold">
          Just<span className='text-[#ff6b00]'>Stay</span>
        </div>

        {/* Links (Hidden on mobile unless toggled) */}
        <div className="hidden md:flex gap-5 justify-between">
          <li className='text-[0.9rem]'><NavHashLink to="/#home" onClick={() => setIsMobile(false)}>Home</NavHashLink></li>
          <li className='text-[0.9rem]'><NavHashLink to="/#about" onClick={() => setIsMobile(false)}>About</NavHashLink></li>
          <li className='text-[0.9rem]'><NavHashLink to="/#rooms" onClick={() => setIsMobile(false)}>Rooms</NavHashLink></li>
          <li className='text-[0.9rem]'><NavHashLink to="/#services" onClick={() => setIsMobile(false)}>Services</NavHashLink></li>
          <li className='text-[0.9rem]'><Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link></li>
        </div>

        <ul className={`md:hidden absolute left-0 top-full w-full bg-[#1a1a1a] transition-all duration-500 ease-in-out ${isMobile ? "max-h-68 opacity-100" : "max-h-0 opacity-0"}`}>
          <li className='text-center p-3 tracking-widest'><NavHashLink className='hover:border-b hover:text-orange-500 transition-all duration-100 ease-in text-[20px]' to="/#home" onClick={() => setIsMobile(false)}>Home</NavHashLink></li>
          <li className='text-center p-3 tracking-widest'><NavHashLink className='hover:border-b hover:text-orange-500 transition-all duration-100 ease-in text-[20px]' to="/#about" onClick={() => setIsMobile(false)}>About</NavHashLink></li>
          <li className='text-center p-3 tracking-widest'><NavHashLink className='hover:border-b hover:text-orange-500 transition-all duration-100 ease-in text-[20px]' to="/#rooms" onClick={() => setIsMobile(false)}>Rooms</NavHashLink></li>
          <li className='text-center p-3 tracking-widest'><NavHashLink className='hover:border-b hover:text-orange-500 transition-all duration-100 ease-in text-[20px]' to="/#services" onClick={() => setIsMobile(false)}>Services</NavHashLink></li>
          <li className='text-center p-3 tracking-widest'><Link className='hover:border-b hover:text-orange-500 transition-all duration-100 ease-in text-[20px]' to="/contact" onClick={() => setIsMobile(false)}>Contact</Link></li>
        </ul>
        {/* Logout (Right side) */}

        <button className=" flex items-center gap-2 border-none bg-none text-white">
          <span className="p-3.75" >Logout</span>
          <LogOut size={18} className='hover:text-red-400 cursor-pointer'/>
        </button>

      </div>
    </nav>
  );
};
export default Navbar