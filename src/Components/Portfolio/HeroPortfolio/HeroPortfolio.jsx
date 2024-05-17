import React from 'react'
import HeroPortfolioimg from "../../../Images/portfolio-hero.png"

const HeroPortfolio = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 lg:px-28 md:px-20 px-5 font-medium py-10 pt-16'>
            <div>
                <img src={HeroPortfolioimg} alt="Hero"/>
            </div>
            <div>
                <p className='text-[--second-color]'>PORTFOLIO</p>
                <h1 className='text-4xl text-[#7676a7] font-medium py-3'>We Design Products With Creativity, Made With Passion</h1>
                <p className='py-3 leading-7 text-base font-normal'>We have handled a variety of web & mobile app development projects successfully. Our team's skills and expertise can be seen in these projects. Partnering with smart leaders accelerates growth, profitability, and progress. Our ideas have been applied to some of the most innovative companies in the world. With a commitment to quality and meeting deadlines, we have experience across industries, organization sizes, and geographies. With the help of our innovative solutions, we strive to take our clients' businesses to the next level. We design and develop software, websites, and apps for enterprises, medium-sized businesses, and startups to help them raise millions and reach millions of people.</p>
            </div>
        </div>
    </div>
  )
}

export default HeroPortfolio;