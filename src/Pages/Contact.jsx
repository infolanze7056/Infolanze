import React from 'react';
import { Helmet } from 'react-helmet';
import ContactSection from '../Components/Contact/ContactSection';
import Whatsapp from '../CommonComponent/Whatsapp';

function Contact() {
  return (
    <div>
    <Helmet>
        <title>Contact | Infolanze</title>
      </Helmet>
    <ContactSection/>
    <Whatsapp />
    </div>
  )
}

export default Contact