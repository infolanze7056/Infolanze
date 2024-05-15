import React from "react";
import Web from "../../Images/Web-Design-and-Development.b2380d273412f3cbaf4f.gif";
import App from "../../Images/Mobile-app-development.3aa540737e7c3c3b50b3.gif";
import Block from "../../Images/Blockcahin.gif";

const DetailedCourse = () => {
  return (
    <div>
      <div className="bg-white lg:px-28 md:px-20 px-5 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-5">
          <div className="w-[180px] h-[180px] lg:h-[230px] lg:w-[230px] m-auto lg:m-3">
            <img src={Web} alt="" className="w-full h-full" />
          </div>
          <div className="lg:border-l-4 lg:pl-12 lg:col-span-2 border-[--second-color]">
            <h1 className="lg:text-4xl md:text-4xl text-xl font-semibold uppercase text-[--second-color] py-5 lg:text-left text-center">
              Website Devlopment
            </h1>
            <p className="text-base">
              website development, it's crucial to focus on user experience (UX)
              and responsive design. Your website should be visually appealing,
              easy to navigate, and optimized for various devices. Utilizing
              modern technologies like HTML5, CSS3, and JavaScript frameworks
              such as React or Angular can enhance functionality and
              interactivity. Additionally, integrating search engine
              optimization (SEO) techniques ensures your website ranks well in
              search engine results, driving organic traffic.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 py-5">
          <div className="lg:border-r-4 lg:border-[--second-color] lg:pr-12 lg:col-span-2 order-2 lg:order-1">
            <h1 className="lg:text-4xl md:text-4xl text-xl font-semibold uppercase text-[--second-color] py-5 lg:text-left text-center">
              Application Devlopment
            </h1>
            <p className="text-base">
              application development, prioritizing scalability, security, and
              performance is essential. Whether you're building a mobile app or
              a desktop application, choosing the right development framework
              and programming language is crucial. Cross-platform development
              tools like Flutter or React Native can streamline the process and
              reach a broader audience. Incorporating robust security measures,
              such as encryption and authentication protocols, protects user
              data and ensures compliance with privacy regulations.
            </p>
          </div>
          <div className="w-[180px] h-[180px] lg:h-[230px] lg:w-[230px] m-auto lg:m-5 order-1 lg:order-2">
            <img src={App} alt="" className="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 py-5">
          <div className="w-[180px] h-[180px] lg:h-[230px] lg:w-[230px] m-auto">
            <img src={Block} alt="" className="" />
          </div>
          <div className="lg:border-l-4 lg:border-[--second-color] lg:pl-12 lg:col-span-2">
            <h1 className="lg:text-4xl md:text-4xl text-xl font-semibold uppercase text-[--second-color] py-5 lg:text-left text-center">
              Blockchain Devlopment
            </h1>
            <p className="text-base">
              blockchain development, the emphasis lies on decentralization,
              transparency, and immutability. Blockchain technology offers a
              decentralized ledger system that securely records transactions
              across a network of computers. Smart contracts, built on platforms
              like Ethereum, enable automated and trustless transactions,
              revolutionizing various industries. Implementing consensus
              mechanisms, like proof of work or proof of stake, ensures the
              integrity of the blockchain network, fostering trust among
              participants. Additionally, exploring use cases beyond
              cryptocurrency, such as supply chain management or digital
              identity verification, showcases the versatility and potential of
              blockchain technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCourse;
