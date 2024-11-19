import React from 'react'
import { language, frontend } from '@/data'
import { FaLaptopCode } from "react-icons/fa";
import { BsFiletypeHtml } from "react-icons/bs";
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className='py-20 max-sm:mt-40 max-sm:mb-40'>
      <div className='h-screen w-full flex flex-col justify-center items-center gap-10'>
        <h1 className='heading '>
          저의 <span className='text-mint-100'>스킬</span>
        </h1>
        <div className='flex flex-col w-[80vw] p-10 sm:p-24 bg-black-100 gap-10 rounded-3xl'>
          <div className='flex flex-wrap items-center'>
            <div className='flex flex-wrap gap-3 w-[25%] max-lg:w-full py-5'>
              <FaLaptopCode size={40}/>
              <p className='text-3xl font-bold'>언어</p>
            </div>
            <div className='flex flex-wrap gap-7'>
              {language.map((item) => (
                <div key={item.id} className='flex items-center justify-center rounded-2xl bg-blue-100 p-5 border border-gray-600 zoom-effect gap-2 text-xl'>
                  <Image src={item.img} alt={`Image ${item.name}`} width={30} height={30} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-wrap items-center'>
            <div className='flex flex-wrap gap-3 w-[25%] max-lg:w-full py-5'>
              <BsFiletypeHtml size={40}/>
              <p className='text-3xl font-bold'>프론트앤드</p>
            </div>
            <div className='flex flex-wrap gap-7'>
              {frontend.map((item) => (
                <div key={item.id} className='flex items-center justify-center rounded-2xl bg-blue-100 p-5 border border-gray-600 zoom-effect gap-2 text-xl'>
                  <Image src={item.img} alt={`Image ${item.name}`} width={30} height={30} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
