import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "🏨",
      title: "Luxury Rooms",
      desc: "Experience the ultimate comfort in our masterfully designed suites."
    },
    {
      id: 2,
      icon: "🍽️",
      title: "5-Star Dining",
      desc: "Savor world-class cuisines prepared by our award-winning chefs."
    },
    {
      id: 3,
      icon: "🛡️",
      title: "High Security",
      desc: "Your safety is our priority with 24/7 surveillance and smart locks."
    }
  ];

  return (
    <section className="py-20 px-[8%] bg-[#f9f9f9] text-center">
      <div className="mb-12.5">
        <span className="text-[#ff6b00] uppercase font-bold tracking-[2px]">Core Values</span>
        <h2 className='text-[2.5rem] my-2.5 mx-0 text-black'>Why Choose Just<span className='text-[#ff6b00] font-bold'>Stay</span></h2>
        <p className='text-black'>We provide the best hospitality services in Rivers State.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {features.map((item) => (
          <div key={item.id} className="bg-white py-10 px-7.5 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
            <div className="text-[3rem] mb-5">{item.icon}</div>
            <h3 className='mb-3.75 text-[1.4rem] text-black font-bold'>{item.title}</h3>
            <p className='text-[#666] leading-[1.6]'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;