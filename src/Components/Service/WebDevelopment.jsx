import React from "react";
import ServiceHero from "./ServiceComponent/ServiceHero";
import ServiceContent from "./ServiceComponent/ServiceContent";
import ServiceData from "./ServiceComponent/ServiceData";
import ServiceTags from "./ServiceComponent/ServiceTags";
import ServiceBredcumb from "./ServiceComponent/ServiceBredcumb";

function WebDevelopment() {
  return (
    <div>
      <ServiceBredcumb
        serviceName="Web Development"
        serviceNameB="/ Web Development"
      />
      <ServiceHero
        title="Web Development Company In Ahmedabad"
        description="Infolanze is a generation-next tech-savvy company, crafting your digital transformation journey and modernize the way you do business."
      />
      <ServiceTags
        tags={[
          { name: ".Net Core", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png" },
          { name: "Wordpress", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png" },
          { name: "Laravel", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" },
          { name: "React JS", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png" },
          { name: "PHP", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" }
        ]}
      />
      <ServiceContent
        imageUrl="../../Images/5779073.jpg"
        title="ASP .Net"
        description="ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications. Our ASP.NET core development company can build web apps and services."
        listItems={[
          {
            title: "MVC Architecture",
            description:
              "With the help of MVC, web application development becomes easier, and the workflow — more efficient. ASP.NET Core makes development, compilation, and testing by developers in a model, view or controller simpler.",
          },
        ]}
      />
      <ServiceData
        imageUrl="../../../Images/5779073.jpg"
        title="Wordpress Development"
        description="Webtual provides WordPress website development services. WordPress developer delivers best development & customization solutions to help your business survive in the competitive world while you work on increasing your sales."
        listItems={[
          {
            title: "Cost effectiveness",
            description:
              "When you are choosing this platform for website development. Even the support and maintenance are affordable and can be handled by technically less literate individuals.",
          },
          {
            title: "Limitless plugins",
            description:
              "Limitless plugins is another benefit offered by this CMS development platform. This lets you customize your solution as desired.",
          },
          {
            title: "Seamless integration",
            description:
              "Providing seamless integration with all the major social media platforms, WordPress supports your social media marketing campaigns.",
          },
        ]}
      />
      <ServiceContent
        imageUrl="../../Images/5779073.jpg"
        title="Laravel Development"
        description="Harness the power of the Laravel framework with our Laravel development services to meet the full spectrum of your business requirements from a small portal to a large enterprise solution with complex and thriving challenges."
        listItems={[
          {
            title: "Extreme Security Encryption",
            description:
              "Laravel’s security encryption is highly effective and uses strong authentication along with superior password protection techniques. It provides CSRF tokens to encrypt the security features from data breaches.",
          },
          {
            title: "Built-in Project Environment",
            description:
              "Laravel’s integrated PHP environment helps simplify complex web development by structuring codes. Its built-in tool, Artisan, helps in interacting with Laravel frameworks using a command life.",
          },
          {
            title: "Flexible Collaboration",
            description:
              "Being in the industry for over 20 years have exposed us to the business need of varied types and scales. We put ourselves in our client’s shoes while designing engagement models. Our clientele has the utmost flexibility to upgrade/downgrade services.",
          },
        ]}
      />
      <ServiceData
        imageUrl="../../../Images/5779073.jpg"
        title="React Js Development"
        description="Empower your high-end requirements with enterprise-grade build quality backed by best-in-class react js development services."
        listItems={[
          {
            title: "Virtual DOM",
            description:
              "Virtual DOM is a representation of the original DOM object, it is used whenever modifications are made on the web apps. Once the UI is completely rendered to the virtual DOM, it identifies the actual changes and helps the real DOM update the real changes.",
          },
          {
            title: "Component Approach",
            description:
              "ReactJs Development is all about a reusable component-based approach. Each component has its own logic and control, and the reusability factor helps developers maintain the code when working on large scale projects.",
          },
          {
            title: "Performance Quo",
            description:
              "React uses a virtual DOM, which is a cross-platform and programming API that deals with HTML, XML or XHTML. The components are virtually written, which then reflects on the actual DOM and leads to extremely high performance in apps.",
          },
        ]}
      />
      <ServiceContent
        imageUrl="../../Images/5779073.jpg"
        title="PHP Development"
        description="Ensuring flexibility and scalability in all its operations, Webtual presents the tailor-made and reliable PHP development services which help you establish your business as a brand and target a wide customer base."
        listItems={[
          {
            title: "Quick Delivery",
            description:
              "Our culture helps us to save time and fasten the turn around time. Following an iterative process, communication within the team is seamless and helps us to update the client regularly.",
          },
          {
            title: "Save Cost",
            description:
              "At Webtual Technologies, we aim to save time as well as the cost of development. Providing best in class PHP services is now affordable and seamless.",
          },
          {
            title: "Core Competency",
            description:
              "PHP language is our core competency for years, and we have developed various websites like e-commerce, portals, and education websites through PHP.",
          },
          {
            title: "Agile Project Management",
            description:
              "When it comes to PHP, we follow the SCRUM to ensure seamless project management. Timelines and commitments are taken as the utmost priority in our development cycle.",
          },
        ]}
      />
      <ServiceData
        imageUrl="../../../Images/5779073.jpg"
        title="Angular JS Development"
        description="Angular.js is popular because it makes development easier and more efficient. This technology is especially suited for single-page applications though it can be used to create different kinds of websites."
        listItems={[
          {
            title: "Flexible and Intuitive",
            description:
              "Developers like Angular.js because it is flexible and intuitive. It takes traditional HTML and turns it into a declarative language, allowing developers to create responsive, dynamic applications.",
          },
          {
            title: "Comprehensive Front End",
            description:
              "One of the most significant advantages of Angular.js is that it offers complete front-end development. While it is ideal for single-page applications, that's not all it can do.",
          },
          {
            title: "Data Binding",
            description:
              "All changes in the model or view components of an application are upgraded simultaneously. It means if you change certain elements of the model, those changes will immediately show up on the user interface of your application as well.",
          },
        ]}
      />
      <ServiceContent
        imageUrl="../../Images/5779073.jpg"
        title="Codeigniter Development"
        description="A dynamic web application attuned to market needs built for your customers and processes will definitely MAKE YOU WIN the digital game. Our CodeIgniter development services help you to build such full-featured dynamic web platforms."
        listItems={[
          {
            title: "Easy to integrate",
            description:
              "Easy to embed and integrate with PHP markup as well as other web development technologies. It allows integration of any databases existing on the planet so leave no issue with databases.",
          },
          {
            title: "Migration Services",
            description:
              "Enable hassle-free and smooth migration of your existing systems to the powerful attributes of the CodeIgniter framework without losing relevant data and risk of breach.",
          },
          {
            title: "Module/Plug-in Development",
            description:
              "Build highly interactive, dynamic and custom modules and plug-ins for diverse to improve your web interfaces, user interaction and experiences.",
          },
        ]}
      />
    </div>
  );
}

export default WebDevelopment;
