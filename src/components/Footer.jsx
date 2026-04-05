import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link'

const Footer = () => {
    return (
        <footer className="bg-[#070b11] text-white pt-20 pb-10 px-[8%] border-t border-slate-900">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="space-y-4">
                    <h2 className='text-3xl font-bold'>Just<span className='text-[#ff6b00]'>Stay</span></h2>
                    <p className='text-slate-400 text-sm'>Excellence in Hospitality. Rivers State, Nigeria.</p>
                </div>
                <div>
                    <h4 className='font-bold mb-6 uppercase tracking-wider text-emerald-500'>Quick Links</h4>
                    <ul className='space-y-4'>
                        <li><NavHashLink smooth to="/#home" className='text-slate-400 hover:text-white transition-colors text-sm'>Home</NavHashLink></li>
                        <li><NavHashLink smooth to="/#rooms" className='text-slate-400 hover:text-white transition-colors text-sm'>Rooms</NavHashLink></li>
                        <li><NavHashLink smooth to="/#about" className='text-slate-400 hover:text-white transition-colors text-sm'>About</NavHashLink></li>
                        <li><Link to="/contact" className='text-slate-400 hover:text-white transition-colors text-sm'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold mb-6 uppercase tracking-wider text-emerald-500'>Contact</h4>
                    <div className='space-y-4 text-slate-400 text-sm'>
                        <p>📍 Port Harcourt, Rivers State</p>
                        <p>📞 +234 800 JUST STAY</p>
                        <p>📧 support@juststay.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer