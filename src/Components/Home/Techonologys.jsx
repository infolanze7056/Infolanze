import React, { useState, useEffect } from 'react'
import Data from "./TechnologyData";
import "./Technologys.css";

function Techonologys() {

    const [items, setItems] = useState(Data);

  
    const filterItem = (categItem) => {
      const updatedItems = Data.filter((curElem) => {
        return curElem.Category === categItem;
      });
      
      setItems(updatedItems);
      
    };
    
    const [selected, setSelected] = useState(1);
    
    const handleSelect = (e) => {
      console.log(e.target.id);
      setSelected(Number(e.target.id));
    };
  
    useEffect(() => {
      filterItem("Front");
      setSelected(1);
    }, []);

  return (
    <div className='bg-img-2 font-family'>
        <div className='py-20 lg:px-40 md:px-10 px-5'>
            <div className='text-center'>
                <div className='uppercase text-4xl font-bold '><span className='text-[#25a9e0]'>Technologies</span> We are Magnificent at</div>
            </div>
            <div>
                <div className="text-center py-10">
                    <div className="toggle-committee border-b">
                        <button className="uppercase font-semibold text-sm" onClick={() => filterItem("Front")}><div className={selected === 1 ? "active optn" : "optn"} id='1' onClick={(e)=>handleSelect(e)}>Front End</div></button>
                        <button className="uppercase font-semibold text-sm" onClick={() => filterItem("Back")}><div className={selected === 2 ? "active optn" : "optn"} id='2' onClick={(e)=>handleSelect(e)}>Back End</div></button>
                        <button className="uppercase font-semibold text-sm" onClick={() => filterItem("Mobile")}><div className={selected === 3 ? "active optn" : "optn"} id='3' onClick={(e)=>handleSelect(e)}>Mobile</div></button>
                        <button className="uppercase font-semibold text-sm" onClick={() => filterItem("Database")}><div className={selected === 4 ? "active optn" : "optn"} id='4' onClick={(e)=>handleSelect(e)}>Database</div></button>
                        <button className="uppercase font-semibold text-sm" onClick={() => filterItem("eCommerce")}><div className={selected === 5 ? "active optn" : "optn"} id='5' onClick={(e)=>handleSelect(e)}>CMS / eCommerce</div></button>
                        <button className="uppercase font-semibold text-sm" onClick={() => filterItem("Cloud")}><div className={selected === 6 ? "active optn" : "optn"} id='6' onClick={(e)=>handleSelect(e)}>Cloud</div></button>
                    </div>
                </div>
            <div>
                <div className='lg:py-5 md:py-5'>
                    <div className="flex flex-wrap justify-center lg:gap-16 md:gap-12 gap-12">
                        {items.map((elem, index) => {
                        const { Name, img } = elem;
                        return (
                            <div className=''>
                                <div key={index} className='text-center'>
                                    <div className=''>
                                        <img className='w-24 h-24 mx-auto' src={img} alt="Tech" />
                                    </div>
                                    <div className='text-sm pt-2 font-semibold'>{Name}</div>
                                </div>
                            </div>
                        );
                        })}
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Techonologys