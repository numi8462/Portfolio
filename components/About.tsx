"use client"
import React, { useEffect, useState } from 'react'
import { TypewriterEffect } from './ui/typewriter-effect'
import { IoPerson } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  const [key, setKey] = useState(0);
  const words = [
    {
      text: "안녕하세요!",
    },
    {
      text: "저의",
    },
    {
      text: "포트폴리오",
      className: "text-mint-100 dark:text-mint-100",
    },
    {
      text: "입니다.",
    },

  ];
  useEffect(() => {
    const typewriterAnimation = () => { 
      setKey(prevKey => prevKey + 1);
    };   

    typewriterAnimation();

    const interval = setInterval(() => { typewriterAnimation(); }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id='about'
    >
      <div className='h-screen w-full flex flex-col items-center justify-center'>
        <h2 className='text-3xl mb-[10vh]'>
          <TypewriterEffect key={key} words={words} />
        </h2>

        <div className='flex text-2xl gap-10 max-lg:flex-col max-sm:text-base md:text-3xl lg:text-2xl'>
          <div className='flex flex-col gap-10'>
            <div className='flex items-center gap-7'>
              <div className='flex justify-start items-center w-44 max-sm:w-28 gap-2'>
                <IoPerson size={30}/>
                <p className=''>이름: </p>
              </div>

              <p className=''>김영호</p>
            </div>

            <div className='flex items-center gap-7'>
              <div className='flex justify-start items-center w-44 max-sm:w-28 gap-2'>
                <FaPhoneAlt size={30}/>
                <p className=''>연락처: </p>
              </div>

              <p className=''>010-3450-8462</p>
            </div>

            <div className='flex items-center gap-7'>
              <div className='flex justify-start items-center w-44 max-sm:w-28 gap-2'>
                <MdEmail size={30}/>
                <p className=''>이메일: </p>
              </div>

              <p className=''>yhk8462@naver.com</p>
            </div>
          </div>

          <div className='flex flex-col items-start gap-10'>
            <div className='flex items-center gap-7'>
              <div className='flex items-center w-44 max-sm:w-28 gap-2'>
                <MdDateRange size={30}/>
                <p className=''>생년월일: </p>
              </div>

              <p className=''>99.03.08</p>
            </div>
            
            <div className='flex items-start gap-7'>
              <div className='flex items-center w-44 max-sm:w-28 gap-2'>
                  <FaGraduationCap size={30}/>
                  <p className=''>학력: </p>
              </div>

              <div className=''>
                <p className=''>{"로열 멜버른 공과대학교(RMIT)"}</p>
                <p className=''>{"정보기술(Information Technology)"}</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default About
