import React from 'react';
import { Bell, Car, Wifi, Shirt, ShieldCheck, Coffee } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "24/7 Room Service",
            icon: <Bell className="text-emerald-500" size={28} />,
            desc: "Delicious meals delivered to your door anytime."
        },
        {
            title: "Airport Pickup",
            icon: <Car className="text-emerald-500" size={28} />,
            desc: "Stress-free transport from Port Harcourt International."
        },
        {
            title: "Free WiFi",
            icon: <Wifi className="text-emerald-500" size={28} />,
            desc: "High-speed internet for business and streaming."
        },
        {
            title: "Laundry Service",
            icon: <Shirt className="text-emerald-500" size={28} />,
            desc: "Professional garment care and quick turnaround."
        },
        {
            title: "Secure Parking",
            icon: <ShieldCheck className="text-emerald-500" size={28} />,
            desc: "24/7 guarded parking for your peace of mind."
        },
        {
            title: "Morning Coffee",
            icon: <Coffee className="text-emerald-500" size={28} />,
            desc: "Complimentary premium coffee served every morning."
        }
    ];

    return (
        <section id="services" className="py-24 px-[8%] bg-[#0a0f16] relative overflow-hidden">
            {/* Subtle background glow for that "Cyber" feel */}
            <div className="absolute top-0 right-0 w-75 h-75 bg-emerald-500/5 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center md:text-left">
                    <span className="text-emerald-500 uppercase tracking-[0.3em] text-xs font-bold block mb-4">
                        Premium Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Luxury Amenities <br />
                        <span className="text-slate-500 italic font-light">Just For You</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl text-lg">
                        We provide a seamless experience so you can focus on your stay in Rivers State.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl"
                        >
                            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {s.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                {s.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;