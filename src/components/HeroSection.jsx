import React from 'react'
import heroBg from '../../Images/Hero Banner2.jpg'
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {

    const navigate = useNavigate()
    return (
        <section className='w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden' style={{ backgroundImage: `url(${heroBg})` }} id='home'>
            <div className="w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-center pt-20 pl-[8%] pb-0 pr-[8%]">
                <div className="max-w-225 text-white">
                    <p className="text-[#ff6b00] uppercase tracking-wider font-bold mb-2.5">Welcome To</p>
                    <h1 className='md:text-[5.5rem] text-[3.5rem] font-extrabold leading-[1.1]'>Hotel Just<span className='text-[#ff6b00]'>Stay</span></h1>
                    <h2 className='text-[1.8rem] font-normal mt-2.5 ml-0 mb-5 mr-0'>Rivers State Nigeria.</h2>

                    <p className="text-[1.1rem] leading-1.6 mb-8.75 opacity-0.9 max-w-150">
                        Experience luxury at its finest with our world class amenities and breathtaking views
                    </p>
                    <div className='flex md:flex-row flex-col gap-3.75 w-full items-start'>
                        <button className='md:py-4.5 md:px-16.25 py-4 px-12.5 min-w-50 w-fit rounded-sm font-extrabold cursor-pointer transition-all duration-300 text-[1rem] bg-[#ff6b00] text-white hover:bg-[#e65a00] hover:translate-y-0.5' onClick={() => navigate('/booking', { state: { roomType: 'Executive Suite' } })}>Book Now</button>
                        <button className='md:py-4.5 md:px-16.25 py-4 px-12.5 min-w-50 w-fit rounded-sm font-extrabold cursor-pointer transition-all duration-300 text-[1rem] bg-transparent text-white border-2 border-solid border-[#ffff] hover:bg-[#ffff] hover:text-black hover:translate-y-0.5'>Explore More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection