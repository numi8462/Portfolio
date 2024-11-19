import React from 'react'
import { projects } from '@/data'
import { FaLocationArrow } from "react-icons/fa6";

const Projects = () => {
  return (
    <div id='projects' className='relative py-20'>
      <h1 className='relative heading z-30 mt-24'>
        최근 <span className='text-mint-100'>프로젝트</span> 목록
      </h1>

      <div className='flex flex-wrap items-center p-4 gap-16 mt-10 z-100 justify-center' >
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className='sm:min-h-[35.5rem] h-[26rem] flex flex-col items-center justify-between sm:w-[35rem] w-[80vw] hover:shadow-2xl bg-black-100 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border zoom-effect'>
            <div className='flex items-center justify-center'>
              <img src={img} alt="projectImg" className='object-cover w-full' />
            </div>

            <div className='flex flex-col'>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base ">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm "
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-blue-100 lg:w-12 lg:h-12 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <a href={link}>
                  <div className="flex justify-center items-center gap-1">
                    <p className="flex lg:text-xl md:text-xs text-sm text-mint-100">
                      깃허브
                    </p>
                    <FaLocationArrow color="#66fcf1" />
                  </div>
                </a>

              </div>
            </div>


          </div>


        ))}
      </div>
    </div>
  )
}

export default Projects
