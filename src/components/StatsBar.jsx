import React from 'react'

const StatsBar = () => {
    const statData = [
        { number: "8+", label: "Years of Service" },
        { number: "50+", label: "Luxury Rooms" },
        { number: "100%", label: "Guest Satisfaction" },
        { number: "24/7", label: "Front Desk" }
    ]

    return (
        <section className='bg-[#ff6b00] py-2.5 px-[8%] w-full text-white'>
            <div className="grid grid-cols-2 gap-7.5 max-w-300 my-0 mx-auto md:grid-cols-4 md:gap-0">
                {statData.map((stat, index) => (
                    <div key={index} className='text-center flex flex-col justify-center md:border-r md:border-white/30 md:last:border-r-0 md:px-4'>
                        <h2 className='text-[0.9rem] font-extrabold mb-1.25 md:text-[1.5rem]'>{stat.number}</h2>
                        <p className='text-[0.9rem]  uppercase tracking-[1px] opacity-[0.9] font-semibold'>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StatsBar