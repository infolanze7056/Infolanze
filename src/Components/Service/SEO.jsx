import React from 'react'
import ServiceHero from './ServiceComponent/ServiceHero';
import ServiceTags from './ServiceComponent/ServiceTags';
import ServiceSEO from './ServiceComponent/ServiceSEO';
import ServiceSEO2 from './ServiceComponent/ServiceSEO2';
import ServiceBredcumb from './ServiceComponent/ServiceBredcumb';
import img1 from "../../Images/5287968.jpg"
import img2 from "../../Images/4950546.jpg"
import img3 from "../../Images/3675555.jpg"

function SEO() {
  return (
    <div>
      <ServiceBredcumb
        serviceName="SEO"
        serviceNameB="/ SEO"
      />
      <ServiceHero 
        title="Digital Marketing Company In Ahmedabad"
        description="When a business invests in a great SEO tactics, they are rewarded with more leads, increased traffic, and enhanced online repute."
      />
      <ServiceTags
        tags={[
          { name: "SEO", image: "https://t3.ftcdn.net/jpg/02/29/95/38/360_F_229953897_LSgbwEhERu7DswZ23ClsFMuZjfJ9KZ6V.jpg" },
          { name: "Digital Marketing", image: "https://t4.ftcdn.net/jpg/01/41/76/27/360_F_141762792_Ua2cMvkBgOe0JejZvk95C2FDOOF39yTU.jpg" },
          { name: "Email Marketing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5NjsqiXJkISjeWbUXwdMuIbQHZp2_XXRkTYW5Fo8IA&s" }
        ]}
      />
      <ServiceSEO
        imageUrl={img1}
        title="Search Engine Optimization"
        description="Elevate your online presence with our comprehensive IT solutions. Our expert team specializes in optimizing websites, increasing visibility, and driving targeted traffic. Let us boost your business with tailored SEO strategies designed to maximize your digital success."
        listItems={[
          {
            title: "On-Page SEO"
            },
          {
            title: "Off-Page SEO"
             },
          {
            title: "Local SEO"
            },
          {
            title: "SEO Audits"
            },
            {
            title: "Keyword-Reserch & Analysis"
            },
        ]}
      />
      <ServiceSEO2
        imageUrl={img2}
        title="Digital Marketing"
        description="This is where our digital marketing company with years of experience behind their name enters and does what we know best by developing sophisticated online marketing strategies tailored to your business."
        listItems={[
          {
            title: "Search Engine Optimization"
            },
          {
            title: "Pay-Per-Click Campaigns"
             },
          {
            title: "Data-driven and custom strategy"
            },
          {
            title: "Higher Traffic, Higher Sales"
            },
            {
            title: "Social Media Marketing and Management"
            },
        ]}
      />
      <ServiceSEO
        imageUrl={img3}
        title="Email marketing"
        description="Email marketing is an excellent form of promotion. This is the most direct and simple track to reach client, However, with the bulky number of people and businesses using email marketing, it can be hard to discriminate."
        listItems={[
          {
            title: "Campaigns"
            },
          {
            title: "Subscribers"
             },
          {
            title: "Engagement"
            },
        ]}
      />
    </div>
  )
}

export default SEO;