import React from 'react';
import room1Img from '../../Images/Room1.jpg'
import room2Img from '../../Images/Room2.jpg'
import room3Img from '../../Images/Room3.jpg'
import { useNavigate } from 'react-router-dom';

const Rooms = () => {
  const navigate = useNavigate()
  const roomData = [
    {
      id: 1,
      image: room1Img,
      title: "Executive Suite",
      price: "₦75,000",
      features: ["King Bed", "Free WiFi", "City View"]
    },
    {
      id: 2,
      image: room2Img,
      title: "Luxury Double",
      price: "₦90,000",
      features: ["2 Queen Beds", "Pool Access", "Breakfast"]
    },
    {
      id: 3,
      image: room3Img,
      title: "Presidential Villa",
      price: "₦120,000",
      features: ["Private Pool", "Butler Service", "Sea View"]
    }
  ];

  return (
    <section id="rooms" className="py-20 px-[8%] bg-[#ffffff]">
      <div className="text-center mb-12.5">
        <span className="text-[#ff6b00] uppercase font-bold tracking-widest">Our Accommodation</span>
        <h2 className='text-[2.5rem] mt-2.5 text-black'>Explore Our <span className='text-[#ff6b00]'>Rooms</span></h2>
      </div>

      <div className="grid grid-cols-1 gap-7.5 md:grid-cols-3">
        {roomData.map((room) => (
          <div key={room.id} className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl flex flex-col">
            <div className="relative h-62.5 shrink-0">
              <img src={room.image} alt={room.title} className='w-full h-full object-cover' />
              <div className="bg-[#ff6b00] absolute top-5 right-5 text-white py-2 px-3.75 rounded-[5px] font-bold">
                {room.price}<span className='text-[0.7rem] font-normal'>/Night</span>
              </div>
            </div>


            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className='text-[1.5rem] mb-3.75 text-black'>{room.title}</h3>
                <div className="flex flex-wrap gap-2.5 mb-5">
                  {room.features.map((f, i) => (
                    <span className='bg-[#f0f0f0] py-1.25 px-3 rounded-[20px] text-[0.8rem] text-[#555]' key={i}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>


              <button onClick={() => navigate('/booking', { state: { roomType: room.title } })} smooth className="w-full p-3 bg-transparent border-2 border-solid border-[#ff6b00] text-[#ff6b00] font-bold rounded-[5px] cursor-pointer transition-all duration-300 hover:bg-[#ff6b00] hover:text-white">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;