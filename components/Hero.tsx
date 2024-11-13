"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from './ui/Button';
import { FaHandPaper } from "react-icons/fa";

const Hero = () => {
    useGSAP(() => {
        gsap.to('#hello', { opacity: 1, y: -50, delay: 6})
    })

    return (
        <div className='pb-20 pt-20'>
            <div>
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <Spotlight
                    className="-top-20 left-0 md:left-100 md:-top-20"
                    fill="#66fcf1"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="#66fcf1"
                />

            </div>

            <div className="h-screen w-full dark:bg-black-200 bg-white flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-200 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[55vw] sm:max-w-[40vw] md:max-w-[40vw] lg:max-w-[60vw] xl:max-w-[55vw] flex flex-col items-center justify-center gap-5'>
                    <h2 className='uppercase tracking-widest text-sm text-center text-white max-w-96'>Next.js를 사용한 반응형 웹페이지</h2>

                    <TextGenerateEffect
                        className='text-start text-xl lg:text-5xl xl:text-5xl 2xl:text-6xl'
                        words={`잠시만요! <br> 김영호로 삼행시를 준비해봤습니다. <br> 김: 김영호는, <br> 영: 영롱하게 빛나는 아이디어와, <br> 호: 호기심 가득한 개발자입니다`}
                    />

                    <div id='hello' className='flex items-center justify-between w-full opacity-0 max-xl:flex-col my-10 gap-5'>
                        <div className='flex items-center justify-center gap-7'>
                            <img 
                                src="./youngho.jpg" 
                                alt="profile image"
                                className='h-40 w-40 max-md:w-24 max-md:h-24 rounded-full object-cover' 
                            />
<div className=''>
                            <p className='text-start my-10 md:tracking-wider text-sm md:text-lg lg:text-2xl'>
                                안녕하세요,
                                <br/>프론트앤드/웹 개발자 
                                <br/>
                                <span className='text-mint-100'> 김영호</span>  입니다.
                            </p>
                        </div>
                        </div>

                        
                        
                        <a href="#about" className=''>
                            <Button
                                title='안녕하세요!'
                                icon={<FaHandPaper/>}
                                position='right'
                            />
                        </a>
                    </div>




                </div>
                

            </div>
        </div>
    )
}

export default Hero
