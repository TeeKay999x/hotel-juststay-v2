import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Koko I. Michael",
            role: "Verified Guest",
            text: "The best hotel experience in Rivers State. The staff at JustStay treated me like royalty. The Executive Suite was breathtaking!",
            stars: 5
        },
        {
            name: "Blessing A.",
            role: "Business Traveler",
            text: "The Free WiFi was incredibly fast for my Zoom meetings. Clean rooms and the Airport Pickup was perfectly on time.",
            stars: 5
        }
    ];

    return (
        <section className="py-24 px-[8%] bg-[#0d131c]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-emerald-500 uppercase tracking-widest text-xs font-bold block mb-4">Reviews</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">What Our <span className="text-emerald-500">Guests Say</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((rev, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-10 rounded-4xl relative group hover:border-emerald-500/30 transition-all">
                            <Quote className="absolute top-8 right-8 text-slate-800 group-hover:text-emerald-500/20 transition-colors" size={48} />
                            
                            <div className="flex gap-1 mb-6">
                                {[...Array(rev.stars)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-emerald-500 text-emerald-500" />
                                ))}
                            </div>

                            <p className="text-slate-300 text-lg italic mb-8 leading-relaxed">
                                "{rev.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                                    {rev.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{rev.name}</h4>
                                    <span className="text-slate-500 text-sm">{rev.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;