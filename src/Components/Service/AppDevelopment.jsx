import React from "react";
import ServiceHero from "./ServiceComponent/ServiceHero";
import ServiceContent from "./ServiceComponent/ServiceContent";
import ServiceData from "./ServiceComponent/ServiceData";
import ServiceTags from "./ServiceComponent/ServiceTags";
import ServiceBredcumb from "./ServiceComponent/ServiceBredcumb";

function AppDevelopment() {
  return (
    <div>
      <ServiceBredcumb
        serviceName="App Development"
        serviceNameB="/ App Development"
      />
      <ServiceHero
        title="Mobile App Development Company In Ahmedabad"
        description="We ship rich experiences to the small screens, which translates into the success of your business, ease of operations and engagement of the consumers with our exceptionally deep understanding of user experience and mobile technology."
      />
      <ServiceTags
        tags={[
          { name: "iOS", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
          { name: "Android", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg" },
          { name: "Flutter", image: "https://raw.githubusercontent.com/flutter/website/master/src/_assets/image/flutter-logomark-320px.png" },
          { name: "React Native", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" }
        ]}
      />
      <ServiceContent
        imageUrl="../../Images/5779073.jpg"
        title="iOS Development"
        description="Webtual stands high as an IOS Development Company taking bold steps from designing pixel-perfect designs to intuitive backends, to fill each dimension of the modern IOS app development realm. For the quality that IOS devices have, our IOS development services are bound to set the bar high with a product that is bold, intuitive, timely, and innovative."
        listItems={[
          {
            title: "Robust backend",
            description:
              "Does your app need to share, analyze and store much amount of data? Without a proper backend, it is challenging to develop this app. Our team includes iOS app developers and professionals in database technologies.",
          },
          {
            title: "Various Systems",
            description:
              "You may ask our iPhone app developer to integrate HRM, ERP, CRM, and any other system into our app. Thus, we make your app more functional by adding these systems.",
          },
          {
            title: "Data Security",
            description:
              "We follow the data security standards to making your app safe for users. For top-tier security, you can choose our iOS apps. Besides, your app users will be able to make transactions safely.",
          },
          {
            title: "Integration Facility",
            description:
              "The iOS platform offers the best hardware and software integration facility. Due to this it constantly keeps upgrading the features it offers to users.",
          },
        ]}
      />
      <ServiceData
        imageUrl="../../../Images/5779073.jpg"
        title="Android Development"
        description="Webtual is one of the leading Android app development company providing services in all countries. We boast of delivering the best android application loaded with user-friendly features capable of growing your business with the latest niche technology at an optimum cost."
        listItems={[
          {
            title: "Wide user reach",
            description:
              "The Android platform is adopted by many users as well as mobile device industries and can give our developed Android app a wider user base in the market.",
          },
          {
            title: "Customizable Interface",
            description:
              "The developed Android apps have certain features that are customized and this flexibility is only possible due to the open-source Android platform.",
          },
          {
            title: "Features Integration",
            description:
              "Features in the Android app are completely customizable which is possible due to the open-source nature of the Android platform and the innovation of the developer.",
          },
          {
            title: "Flexibility and Scalability",
            description:
              "The Android development is completely flexible which means that the development is accomplished according to the client’s demands.",
          },
        ]}
      />
      <ServiceContent
        imageUrl="../../../Images/5779073.jpg"
        title="Flutter Development"
        description="Google’s Flutter is the fastest growing cross-platform app development framework that can position your business to the top in your industry for less cost and with a native experience."
        listItems={[
          {
            title: "Eases Cross-Platform",
            description:
              "Flutter tools help in the creation of 2D mobile apps. It has all the cross-platform technologies needed to develop impactful branded designs.",
          },
          {
            title: "Widget-Oriented Approach",
            description:
              "Flutter offers an extensive set of widgets and immense capabilities for creating complicated custom widgets which improve the overall view of the app as well as its interface.",
          },
          {
            title: "Fit for an MVP",
            description:
              "Flutter makes it possible to depict how your mobile app looks on Android as well as iOS without much time and resource investment. This will help your investors get a clear idea of your MVP.",
          },
          {
            title: "Constantly Evolving Platform",
            description:
              "Dedicated developers from Google and other reputed partners continuously put their best to update the platform- keeping up with the changing market needs.",
          },
        ]}
      />
      <ServiceData
        imageUrl="../../../Images/5779073.jpg"
        title="React Native"
        description="Driven by desire, we deliver and delight the users with our React Native development services. Keeping the Hybrid app development commitment we harness the power of React Native and deliver an application with perfect customer experience, quick to market, and compatible on native platforms."
        listItems={[
          {
            title: "Agile Processes",
            description:
              "We utilize agile systems that begin with a thorough comprehension of a client’s needs. Our React Native development procedures will steadily advance through cooperation between cross-functional groups.",
          },
          {
            title: "Transparency",
            description:
              "We have full faith in transparency. All procedures and codes are accessible to the customer at any time, and nothing is hidden. We update customers on our progress at each stage of the React Native App development procedure.",
          },
          {
            title: "Adaptabilityy",
            description:
              "We offer adaptability in a number of ways. We are flexible regarding coding, working hours, the development process, improvements, and round-the-clock support and maintenance.",
          },
        ]}
      />
    </div>
  );
}

export default AppDevelopment;
