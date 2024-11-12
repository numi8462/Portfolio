"use client"
import React from 'react'

const Button = ({
  title, icon, position,
} : {
  title: string; icon: React.ReactNode, position: string;
}) => {
  return (

    <button className="shadow-[0_0_0_3px_#000000_inset] px-8 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 h-15 flex items-center gap-2">
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
    </button>   

  )
}

export default Button
