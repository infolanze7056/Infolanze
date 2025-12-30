import React from 'react';
// Keep your existing imports
import img1 from "../../Images/5work.png";
import img2 from "../../Images/festival.png";
import img3 from "../../Images/frnd.png";
import img4 from "../../Images/bonus.png";
import img5 from "../../Images/game.png";
import img6 from "../../Images/newoffice.png";
import img7 from "../../Images/area.png";
import img8 from "../../Images/work.png";
import img9 from "../../Images/learn.png";
import img10 from "../../Images/policy.png";

function CareerBenefit() {
    const benefits = [
        { img: img1, title: "5 Day Working" },
        { img: img2, title: "Festival Celebration" },
        { img: img3, title: "Open Work Culture" },
        { img: img4, title: "Referral Bonus" },
        { img: img5, title: "Recreation Ground" },
        { img: img6, title: "Trendiest Location" },
        { img: img7, title: "Dedicated Pantry" },
        { img: img8, title: "Work-Life Balance" },
        { img: img9, title: "Learning Opportunities" },
        { img: img10, title: "No Hidden Policies" },
    ];

    return (
        <div className='min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white'>
            <div className='max-w-7xl mx-auto lg:px-28 md:px-20 px-5 lg:py-24 py-12'>

                <div className='text-center mb-16'>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        Life At Infolanze
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                        Perks & Benefits <span className="text-blue-600">at Infolanze Tech</span>
                    </h2>
                    <div className='max-w-2xl mx-auto space-y-4 opacity-100 lg:text-lg'>
                        <p>We thrive for talent & innovation and firmly believe each individual is talented in their own way.</p>
                        <p>Infolanze Tech respects talent and innovation, providing a platform for employees to explore and enhance their potential.</p>
                    </div>
                </div>

                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10'>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className='group relative bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-2'
                        >
                            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

                            <div className='relative z-10 mb-4 transform transition-transform group-hover:scale-110 duration-300'>
                                <img
                                    className='w-16 h-16 object-contain filter brightness-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                                    src={benefit.img}
                                    alt={benefit.title}
                                />
                            </div>

                            <div className='relative z-10 text-center text-sm font-medium tracking-wide text-blue-50 opacity-100 group-hover:opacity-100'>
                                {benefit.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CareerBenefit;