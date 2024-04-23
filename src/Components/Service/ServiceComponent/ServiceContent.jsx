import React from 'react';
import { RiArrowRightDoubleFill } from 'react-icons/ri';

function ServiceContent({ imageUrl, title, description, listItems }) {
  return (
    <div className='font-family bg-[--main-color]'>
      <div className='lg:px-40 md:px-20 px-5 py-10 lg:py-16'>
        <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
          <div className='lg:order-2'><img className='mx-auto' src={imageUrl} alt="web" /></div>
          <div className='lg:order-1 lg:pe-10 lg:pt-0 pt-8'>
            <div>
              <div className='text-4xl pb-2 font-semibold'>{title}</div>
              <div>{description}</div>
            </div>
            <ol>
              {listItems.map((item, index) => (
                <li key={index} className='flex pt-6'>
                  <div className='pe-1'><RiArrowRightDoubleFill className='text-3xl'/></div>
                  <div>
                    <div className='text-2xl font-semibold'>{item.title}</div>
                    <div className='pt-2'>{item.description}</div>
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

export default ServiceContent;
