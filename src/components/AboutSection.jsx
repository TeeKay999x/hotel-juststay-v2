import React from 'react'
import aboutUsImg from '../../Images/AboutUsImg.jpg'

const AboutSection = () => {
    return (
        <section id='about' className='py-20 px-[8%] bg-[#ffffff] text-[#1a1a1a] '>
            <div className='flex flex-col gap-10 items-center lg:flex-row lg:justify-between md:gap-20'>
                <div className='relative w-full flex-1'>
                    <img src={aboutUsImg} alt="Hotel Exterior Image" className='w-full h-125 object-cover object-center rounded-xl shadow-xl' />
                </div>

                <div className='w-full lg:flex-1'>
                    <span className='text-[#ff6b00] uppercase font-bold tracking-widest text-[0.9rem]'>About Us</span>
                    <h2 className='text-[2.5rem] my-2.5 mx-0 leading-tight'>History of Just<span className='text-[#ff6b00] font-semibold'>Stay</span></h2>
                    <h3 className='text-[1.2rem] text-[#666] mb-5'>Rivers State, Nigeria</h3>
                    <p className='leading-relaxed text-[#444] mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta odio rerum, aut earum, iusto dignissimos laboriosam dolor modi voluptates maxime laborum culpa alias, dicta eaque aliquid minus odit explicabo voluptas!</p>
                    <p className='leading-relaxed text-[#444] mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero totam amet sunt voluptates magni, at aperiam ipsam optio hic rerum. Vel beatae sint eveniet sed, cumque eius numquam quod nesciunt?</p>

                    <button className='transparent border-2 border-solid text-[#ff6b00] py-3 px-10 cursor-pointer transition-all duration-300 hover:bg-[#ff6b00] hover:text-white'>Read More</button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection