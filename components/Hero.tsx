"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from './ui/Button';
import { FaLocationArrow } from "react-icons/fa";

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
                    fill="purple"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />

            </div>

            <div className="h-screen w-full dark:bg-blue-100 bg-white  dark:bg-grid-white/[0.01] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-blue-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[55vw] sm:max-w-[40vw] md:max-w-[40vw] lg:max-w-[60vw] xl:max-w-[55vw] flex flex-col items-center justify-center gap-5'>
                    <h2 className='uppercase tracking-widest text-sm text-center text-white max-w-96'>Next.js를 사용한 반응형 웹페이지</h2>

                    <TextGenerateEffect
                        className='text-start text-xl lg:text-5xl xl:text-5xl 2xl:text-6xl'
                        words={`잠깐! <br> 김영호로 삼행시를 준비해봤습니다. <br> 김: 김영호는, <br> 영: 영롱하게 빛나는 아이디어와, <br> 호: 호기심 가득한 개발자입니다`}
                    />

                    <div id='hello' className='flex items-center justify-between w-full opacity-0 max-sm:flex-col max-md:flex-col max-lg:flex-col'>
                        <p className='text-start my-10 md:tracking-wider text-sm md:text-lg lg:text-2xl'>
                            안녕하세요,
                            <br/>프론트앤드/웹 개발자
                            <span className='text-purple'> 김영호</span>  입니다.
                        </p>
                        <a href="#about">
                            <Button
                                title='눌러보세요!'
                                icon={<FaLocationArrow/>}
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
