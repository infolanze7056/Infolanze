import React from 'react'
import Block from '../../../../../Images/Blockchain.webp'
const BlockHero = () => {
  return (
    <div>
      <div className='background-image lg:px-28 md:px-20 px-5 py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center'>
          <div className='order-2 lg:order-1 lg:items-center'>
        <h1 className='text-[--second-color] text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left pb-2'>
          Blockchain Devlopment
        </h1>
              <p className='py-1'>
Blockchain is a distributed ledger technology that securely records data across multiple computers, making it transparent and tamper-proof. Unlike centralized databases controlled by a single entity, blockchain is decentralized, with each node in the network maintaining a copy of the entire ledger. This decentralization enhances security and trust, as no single point of failure exists.</p>
        </div>
        <div className='order-1 lg:order-2'>
          <div className='w-full h-full pb-3 lg:pb-0'>
            <img src={Block} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BlockHero
