import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link'


const Footer = () => {
    return (
        <footer className="bg-[#070b11] text-white pt-16 pb-8 px-[8%] border-t border-slate-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                <div className="space-y-4">
                    <h2 className='text-3xl font-bold text-white tracking-tighter'>Just<span className='text-[#ff6b00]'>Stay</span></h2>
                    <p className='text-slate-400 text-sm leading-relaxed max-w-xs'>Excellence in Hospitality.</p>
                </div>
                <div>
                    <h4 className='text-white font-bold mb-6 text-lg uppercase tracking-wider'>Quick Links</h4>
                    <ul className='space-y-3'>
                        <li><NavHashLink smooth to="/#home" className='text-slate-400 hover:text-emerald-500 transition-colors text-sm'>Home</NavHashLink></li>
                        <li><NavHashLink smooth to="/#rooms" className='text-slate-400 hover:text-emerald-500 transition-colors text-sm'>Rooms</NavHashLink></li>
                        <li><NavHashLink smooth to="/#about" className='text-slate-400 hover:text-emerald-500 transition-colors text-sm'>About</NavHashLink></li>
                        <li><Link to="/contact" className='text-slate-400 hover:text-emerald-500 transition-colors text-sm'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-white font-bold mb-6 text-lg uppercase tracking-wider'>Contact Us</h4>
                    <div className='spaace-y-3 text-slate-400 text-sm'>
                        <p className='flex items-center gap-2'>📍 Rivers State, Nigeria</p>
                        <p className='flex items-center gap-2'>📞 +234 000 000 0000</p>
                        <p className='flex items-center gap-2'>📧 info@juststay.com</p>
                    </div>

                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className='text-slate-500 text-xs'>&copy; 2026 Hotel JustStay. All Rights Reserved.</p>
                <span className='text-slate-700 text-[10px] uppercase tracking-widest font-bold'>Designed by Koko The Dev</span>
            </div>
        </footer>
    );
};

export default Footer;