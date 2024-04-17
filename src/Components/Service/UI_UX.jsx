import React from "react";
import ServiceHero from "./ServiceComponent/ServiceHero";
import ServiceContent from "./ServiceComponent/ServiceContent";
import ServiceData from "./ServiceComponent/ServiceData";
import ServiceTags from "./ServiceComponent/ServiceTags";
import ServiceBredcumb from "./ServiceComponent/ServiceBredcumb";

function ServiceSection() {
  return (
    <div className="font-family">
      <ServiceBredcumb
        serviceName="UI - UX Design"
        serviceNameB="/ UI - UX Design"
      />
      <ServiceHero
        title="Leading Web Design Compnany in Ahmedabad"
        description="Infolanze UI/UX design team has expertise in advanced technologies to meet demands of clients from any industry."
      />
      <ServiceTags
        tags={[
          { name: "Figma", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
          { name: "Adobe XD", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png" },
          { name: "Canva", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpfqMiWho7ALmvRX0Q0XgZbJY8dCi1QTO9Z8AKMN01A&s" },
          { name: "Photoshop", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png" },
          { name: "illustator", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png" }
        ]}
      />
      <ServiceContent
        imageUrl="../../Images/5779073.jpg"
        title="Website Designing"
        description="While providing the option of unique web design, we also suggest continuous design support services that enable non-stop evolution of your ever-growing web solution. Our company follows a human-centered approach to design. This means we care about the end customer and strive to deliver products that people truly enjoy using."
        listItems={[
          {
            title: "Interface",
            description:
              "Precisely crafting beautiful pixels to create a visually appealing interface of relevant screens.",
          },
          {
            title: "Digital Experience",
            description:
              "Creating a functional design by carefully orchestrating interface, information, and interaction.",
          },
          {
            title: "Objective Design",
            description:
              "Creating a design that not only looks stunning but also sticks to solving the core of the problem.",
          },
        ]}
      />
      <ServiceData
        imageUrl="../../../Images/5779073.jpg"
        title="Mobile App Design"
        description="Number 1 reason for the success of any mobile app is its ability to keep users engaged. Our team of creative mobile app designers guarantees a mobile app design that inspires and brings great engagement. Every interaction with a user transforms into an opportunity to engage them in a substantial way."
        listItems={[
          {
            title: "Exploration",
            description:
              "Dedicated Mobile App Developers are competent enough to cater native as well as Cross Platform Mobile App Development for instance Xamarin,Phonegap and ionic mobile app development.",
          },
          {
            title: "Start right away",
            description:
              "End-User Point of view is our utmost priority, our mobile app design are according to the ongoing marketing trends within the stipulated period of time without compromising the quality factor.",
          },
          {
            title: "Rapid Prototyping",
            description:
              "Agile Methodology is best option for project mobile app designing or mobile app development so our designers are competent enough to produce rapid prototypes as per the idea outlined by our potential clients.",
          },
        ]}
      />
      <ServiceContent
        imageUrl="../../../Images/5779073.jpg"
        title="Material Design"
        description="Material Design was introduced in 2014 by Google. The polished design system is backed up by science and technology to create websites and applications. Material Design has a variety of themes, iconography, typography, and templates to serve all your web design requirements."
        listItems={[
          {
            title: "Integration Of Material Design",
            description:
              "Precisely crafting beautiful pixels to create a visually appealing interface of relevant screens.",
          },
          {
            title: "Intelligent Animations",
            description:
              "Animations are the primary focus of Google’s Material Design vision. With action response, authentic motion, and many other concepts, we build an ultimate material web design.",
          },
          {
            title: "Completely Customizable",
            description:
              "We develop an entirely customized material design by which we can add excellent features for your web material design.",
          },
        ]}
      />
      <ServiceData
        imageUrl="../../../Images/5779073.jpg"
        title="Product Design"
        description="Product design includes building interactive and intuitive experiences with the end-user in mind and deliver easy to use products. We thoroughly conduct user testing and optimize our code to enhance performance and security. Our experienced UI and UX developers implement the most effective strategies, wireframing and prototyping your product with consumer backed research."
        listItems={[
          {
            title: "User Interface and User Experience",
            description:
              "Before product design, analyzing user behavior is crucial. We help you to make your web and mobile app to be compatible across all devices and channels.",
          },
          {
            title: "Extensive Testing & Analytics",
            description:
              "The design process starts with a well-researched design methodology and understands the user problems. Solving those problems with features and interactions help to shape a robust UX mechanism which is translated in beautifully stunning User Interfaces.",
          },
        ]}
      />
      <ServiceContent
        imageUrl="../../../Images/5779073.jpg"
        title="Logo Design and Branding"
        description="logo designing is its true identity to represent among a crowd of millions of competitors. We create this identity sophisticatedly. Logo designing is meant for creating visual images, lines and other objects for a company or organization to represents its identity."
        listItems={[
          {
            title: "Memorable / Impactful",
            description:
              "Great logo should be impactful. You want to capture your viewer’s attentions and leave an impression (a positive impression, hopefully).",
          },
          {
            title: "Relevant",
            description:
              "Great logo should be relevant to your practice. It has to have meaning that relates to the work you are doing.",
          },
          {
            title: "Business cues",
            description:
              "Logos communicate need-to-know information about your brand. They accomplish in a second what press releases, product descriptions and about pages do with paragraph after paragraph of copy.",
          },
        ]}
      />
    </div>
  );
}

export default ServiceSection;
