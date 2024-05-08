import React from 'react';
import { Helmet } from 'react-helmet';
import ServiceMain from '../Components/Service/ServiceMain';

function Service() {
  return (
    <div>
      <Helmet>
        <title>Services | Infolanze</title>
      </Helmet>
      <ServiceMain />
    </div>
  )
}

export default Service