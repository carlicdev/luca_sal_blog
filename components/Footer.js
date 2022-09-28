import React from 'react'
import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='w-full bg-black justify-center flex mt-5 py-6 '>
       <p className='text-gray-500'>
        <BiCopyright className='inline mr-2'/>
        by LucaSal
       </p>
       <span className='text-blue-500 hover:text-blue-600 cursor-pointer text-2xl ml-2'>
          <Link href='https://twitter.com/LucaSalLuca'>
              <a target='_blank'>
                  <BsTwitter />
              </a>
          </Link>
       </span>
    </div>
  )
}

export default Footer