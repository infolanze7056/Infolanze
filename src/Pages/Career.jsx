import React from 'react'
import ServiceBredcumb from "../Components/Service/ServiceComponent/ServiceBredcumb";
import CareerSection from '../Components/Career/CareerSection';
import CareerProcess from '../Components/Career/CareerProcess';
import CareerGrowth from '../Components/Career/CareerGrowth';
import CareerOpening from '../Components/Career/CareerOpening';

function Career() {
  return (
    <div>
      <ServiceBredcumb
        serviceName="Career"
        serviceNameB="/ Career"
       />
      <CareerSection />
      <CareerGrowth />
      <CareerProcess />
      <CareerOpening />
    </div>
  )
}

export default Career