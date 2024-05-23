import React from 'react'
import HeroPortfolioimg from "../../../Images/portfolio-hero.png"

const HeroPortfolio = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:px-28 md:px-20 px-5 font-medium py-10 pt-16'>
            <div className='content-center'>
                <img src={HeroPortfolioimg} alt="Hero"/>
            </div>
            <div className='content-center'>
                <p className='text-[--second-color]'>PORTFOLIO</p>
                <h1 className='text-4xl text-[#7676a7] font-medium py-3'>Infolanze: Designing the Future with Passion and Creativity</h1>
                <p className='py-3 leading-7 text-base font-normal'>At Infolanze, we successfully deliver a wide range of web and mobile app development projects. Our team's diverse skills and expertise shine through our portfolio, showcasing our ability to partner with visionary leaders to drive growth, profitability, and progress. We have collaborated with some of the most innovative companies globally, applying our cutting-edge ideas to transform their businesses.</p>
                <p>
                Our unwavering commitment to quality and timely delivery has allowed us to gain extensive experience across various industries, organization sizes, and geographies. We design and develop software, websites, and apps for enterprises, medium-sized businesses, and startups, helping them secure millions in funding and reach a global audience. With our innovative solutions, we aim to elevate our clients' businesses to new heights.
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeroPortfolio;