import React from "react";

const BlockHero = () => {

  const BLOCK_IMAGE_URL ="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const FALLBACK_URL ="https://via.placeholder.com/800x600/1e40af/ffffff?text=Blockchain";

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto lg:px-28 md:px-20 px-5 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--second-color)] leading-tight tracking-tight font-display">
              Blockchain Development
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium font-sans">
              Blockchain is a distributed ledger technology that securely records data across multiple computers, making it transparent and tamper-proof. Unlike centralized databases controlled by a single entity, blockchain is decentralized, with each node in the network maintaining a copy of the entire ledger. This decentralization enhances security and trust, as no single point of failure exists.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--second-color)] to-transparent opacity-20 rounded-3xl transform rotate-6 scale-95 group-hover:rotate-12 transition-all duration-500"></div>
              
              <img
                src={BLOCK_IMAGE_URL}
                alt="Blockchain Technology"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover transform group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.src = FALLBACK_URL;
                  e.target.onerror = null; 
                }}
              />
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--second-color)] rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockHero;