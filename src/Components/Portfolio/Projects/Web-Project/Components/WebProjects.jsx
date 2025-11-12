import React from "react";
import xbeat from "../../../../../Images/x-beat.png";
// import fastpizza from "../../../../../Images/fast-pizza.png";
import shopit from "../../../../../Images/shopit.png";
import beach from "../../../../../Images/beach.png";
import teaofassam from "../../../../../Images/teaofassam.png";
import Quosha from "../../../../../Images/Quosha-ink.png";
import Popsocket from "../../../../../Images/Popsockets.png";
import Partake from "../../../../../Images/Partake.png";
import Gym from "../../../../../Images/Gymshark.png";
import Biogenix from "../../../../../Images/biogenix.png";
import BetterrWater from "../../../../../Images/betterwater-web.png"
import Hydropod from "../../../../../Images/hydropod-web.png"
import Isx from "../../../../../Images/isx.png"
import Doshion from "../../../../../Images/doshion-web.png"


const WebProjects = () => {
  return (
    <div className="bg-white lg:px-28 md:px-20 px-5 py-10 pb-20">
      <div className="relative z-10 text-center mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-5 font-poppins">
          Our <span className="text-[--second-color]">Web Development</span> Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto font-nunito text-lg md:text-xl leading-relaxed">
          Explore our finest digital creations — blending innovation, precision, and seamless user experience for modern brands.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 md:gap-5 gap-8">

        <a
          href="https://isx-frontend.store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={Isx}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>ISX Canada</h1>
            </div>
          </div>
        </a>

         <a
          href="https://hydropod.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={Hydropod}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>Hydropod</h1>
            </div>
          </div>
        </a>

         <a
          href="https://resin-admin-panel.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={BetterrWater}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>Better Water</h1>
            </div>
          </div>
        </a>

         <a
          href="https://www.biogenixcompostable.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={Biogenix}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>Biogenix</h1>
            </div>
          </div>
        </a>

        <a
          href="https://www.quosha.store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={Quosha}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>Quosha</h1>
            </div>
          </div>
        </a>

        <div>
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={Doshion}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>Doshion</h1>
            </div>
          </div>
        </div>

        <a
          href="https://www.popsockets.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={Popsocket}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>Popsockets</h1>
            </div>
          </div>
        </a>

        <a
          href="https://partakefoods.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={Partake}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>Partake Foods</h1>
            </div>
          </div>
        </a>

        <a
          href="https://row.gymshark.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={Gym}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>Gym Shark</h1>
            </div>
          </div>
        </a>

        <a
          href="https://demo-x-beat.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={xbeat}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>X-BEAT</h1>
            </div>
          </div>
        </a>

        {/* <a
          href="https://react-node-pizza-store.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={fastpizza}
                alt=""
                className="hover:transform hover:scale-[1.07] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2">
              <h1>FAST PIZZA</h1>
            </div>
          </div>
        </a> */}

        <a
          href="https://demo-shop-it.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={shopit}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>SHOP IT</h1>
            </div>
          </div>
        </a>

        <a
          href="https://demo-resort.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={beach}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 uppercase">
              <h1>BEACH RESORT</h1>
            </div>
          </div>
        </a>

        <a
          href="https://demo-tea-of-assam.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shadow-2xl rounded-3xl border border-[#eee]">
            <div className="relative m-auto overflow-hidden rounded-t-3xl">
              <img
                src={teaofassam}
                alt=""
                className="hover:transform hover:scale-[1.08] transition-all duration-[0.5s]"
              />
            </div>
            <div className="bg-white text-black text-center lg:text-sm rounded-b-3xl p-2 ">
              <h1>TEA OF ASSAM</h1>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default WebProjects;
