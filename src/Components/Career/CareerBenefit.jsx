import React from 'react';
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
  return (
    <div className='font-family bg-[--main-color]'>
        <div className='lg:px-28 md:px-20 px-5 lg:py-16 md:py-16 py-10'>
            <div className='text-center'>
                <div className='lg:text-4xl md:text-4xl text-3xl'>Perks & Benefits at Infolanze Tech</div>
                <div className='pt-3'>We thrive for talent & innovation and firmly believe each individual is talented in their own way.</div>
                <div>Infolanze Tech respects talent and innovation thereby providing a platform for employees to explore their talent and enhance it.</div>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10 pt-10 lg:px-32 '>
                <div className='bg-white text-center p-5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 hover:duration-200 hover:cursor-pointer'>
                    <div><img className='mx-auto w-20' src={img1} alt="img1" /></div>
                    <div className='pt-2'>5 day Working</div>
                </div>
                <div className='bg-white text-center p-5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 hover:duration-200 hover:cursor-pointer'>
                    <div><img className='mx-auto w-20' src={img2} alt="img1" /></div>
                    <div className='pt-2'>Festival Celebration</div>
                </div>
                <div className='bg-white text-center p-5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 hover:duration-200 hover:cursor-pointer'>
                    <div><img className='mx-auto w-20' src={img3} alt="img1" /></div>
                    <div className='pt-2'>Open Work Culture</div>
                </div>
                <div className='bg-white text-center p-5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 hover:duration-200 hover:cursor-pointer'>
                    <div><img className='mx-auto w-20' src={img4} alt="img1" /></div>
                    <div className='pt-2'>Referral Bonus</div>
                </div>
                <div className='bg-white text-center p-5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 hover:duration-200 hover:cursor-pointer'>
                    <div><img className='mx-auto w-20' src={img5} alt="img1" /></div>
                    <div className='pt-2'>Recreation Ground</div>
                </div>
                <div className='bg-white text-center p-5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 hover:duration-200 hover:cursor-pointer'>
                    <div><img className='mx-auto w-20' src={img6} alt="img1" /></div>
                    <div className='pt-2'>Trediest Work Location</div>
                </div>
                <div className='bg-white text-center p-5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 hover:duration-200 hover:cursor-pointer'>
                    <div><img className='mx-auto w-20' src={img7} alt="img1" /></div>
                    <div className='pt-2'>Dedicated Pantry Area</div>
                </div>
                <div className='bg-white text-center p-5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 hover:duration-200 hover:cursor-pointer'>
                    <div><img className='mx-auto w-20' src={img8} alt="img1" /></div>
                    <div className='pt-2'>Work - Life Balance</div>
                </div>
                <div className='bg-white text-center p-5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 hover:duration-200 hover:cursor-pointer'>
                    <div><img className='mx-auto w-20' src={img9} alt="img1" /></div>
                    <div className='pt-2'>Learnig Opportunities</div>
                </div>
                <div className='bg-white text-center p-5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 hover:duration-200 hover:cursor-pointer'>
                    <div><img className='mx-auto w-20' src={img10} alt="img1" /></div>
                    <div className='pt-2'>No Hidden Policies</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CareerBenefit;