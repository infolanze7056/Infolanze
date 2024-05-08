import React from 'react';
import { Helmet } from 'react-helmet';
import ContactSection from '../Components/Contact/ContactSection';

function Contact() {
  return (
    <div>
    <Helmet>
        <title>Contact | Infolanze</title>
      </Helmet>
    <ContactSection/>
    </div>
  )
}

export default Contact