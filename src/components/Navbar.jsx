import React, { useState } from 'react'
import { X, Menu } from 'lucide-react'
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-17.5 bg-black/70 text-white z-[1000] flex items-center backdrop-blur">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <div className="md:hidden cursor-pointer" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className="text-[1.4rem] font-bold">
          Just<span className='text-[#ff6b00]'>Stay</span>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-8 list-none">
            <li><NavHashLink className='hover:text-[#ff6b00] transition-colors' smooth to="/#home">Home</NavHashLink></li>
            <li><NavHashLink className='hover:text-[#ff6b00] transition-colors' smooth to="/#about">About</NavHashLink></li>
            <li><NavHashLink className='hover:text-[#ff6b00] transition-colors' smooth to="/#rooms">Rooms</NavHashLink></li>
            <li><NavHashLink className='hover:text-[#ff6b00] transition-colors' smooth to="/#services">Services</NavHashLink></li>
            <li><Link className='hover:text-[#ff6b00] transition-colors' to="/contact">Contact</Link></li>
          </ul>
        </div>

        <button className="hidden md:block border border-[#ff6b00] px-6 py-2 rounded-sm hover:bg-[#ff6b00] transition-all">
          Explore
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="absolute top-17.5 left-0 w-full bg-black/95 p-10 md:hidden flex flex-col items-center gap-6">
          <NavHashLink to="/#home" onClick={() => setIsMobile(false)}>Home</NavHashLink>
          <NavHashLink to="/#about" onClick={() => setIsMobile(false)}>About</NavHashLink>
          <NavHashLink to="/#rooms" onClick={() => setIsMobile(false)}>Rooms</NavHashLink>
          <NavHashLink to="/#services" onClick={() => setIsMobile(false)}>Services</NavHashLink>
          <Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
export default Navbar