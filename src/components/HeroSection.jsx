import React from 'react'
import heroBg from '../../Images/Hero Banner2.jpg'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <section className='w-full h-screen bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${heroBg})` }} id='home'>
            <div className="w-full h-full bg-black/50 flex flex-col justify-center px-[8%]">
                <div className="max-w-4xl text-white">
                    <p className="text-[#ff6b00] uppercase tracking-widest font-bold mb-4">Welcome To</p>
                    <h1 className='text-6xl md:text-8xl font-extrabold leading-tight'>Hotel Just<span className='text-[#ff6b00]'>Stay</span></h1>
                    <p className="text-lg md:text-xl mt-6 opacity-90 max-w-2xl">Experience luxury at its finest with our world class amenities and breathtaking views.</p>
                    <div className='flex gap-4 mt-10'>
                        <button onClick={() => navigate('/booking', { state: { roomType: 'Executive Suite' } })} className='bg-[#ff6b00] text-white px-10 py-4 font-bold rounded-sm hover:bg-[#e65a00] transition-all cursor-pointer'>
                            Book Now
                        </button>
                        <button onClick={() => document.getElementById('rooms').scrollIntoView({behavior: 'smooth'})} className='border-2 border-white text-white px-10 py-4 font-bold rounded-sm hover:bg-white hover:text-black transition-all cursor-pointer'>
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection