import React from 'react'
import Image from 'next/image'

const Brand = () => {
  return (
    <span className='flex cursor-pointer brand font-bold text-5xl text-zinc-500 uppercase'>
        <Image
            alt='logo'
            height='80px'
            width='80px'
            className="rounded-full mr-0"
            src='/../public/LuisSalImg.png'
        />
        <span className='mt-3'>Luca<span className='text-zinc-300'>Sal</span></span>
    </span>
  )
}

export default Brand