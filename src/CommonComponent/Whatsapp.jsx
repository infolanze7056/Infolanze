import React from 'react'
import Chat from "../Images/whatsapp.jpg"
import "./Whatsapp.css"

const Whatsapp = () => {
  return (
    <>
    <div className='whatsapp_float'>
        <a href='https://wa.me/916352809136' target='_blank' rel="noreferrer"><img src={Chat} alt='Chat' className='w-8 whatsapp_float_btn'/></a>
    </div>
    </>
  )
}

export default Whatsapp