import React from 'react';
import { VscCircleFilled } from "react-icons/vsc";

function ServiceSEO2({ imageUrl, title, description, listItems }) {
  return (
    <div className='font-family'>
      <div className='lg:px-40 md:px-20 px-5 py-10 lg:py-16'>
        <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
          <div className=''><img className='mx-auto' src={imageUrl} alt="web" /></div>
          <div className='lg:pe-10 lg:pt-0 pt-8'>
            <div>
              <div className='text-4xl pb-2 font-semibold'>{title}</div>
              <div>{description}</div>
            </div>
            <ol className='pt-3'>
              {listItems.map((item, index) => (
                <li key={index} className='flex items-center'>
                  <div className='pe-1'><VscCircleFilled className='text-lg'/></div>
                  <div>
                    <div className=''>{item.title}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSEO2;