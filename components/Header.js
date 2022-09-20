import React from 'react'
import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs'


const Header = () => {
 
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-cyan-800 py-3'>
                <div className='md:float-left block mt-2'>
                    <Link href='/'>
                        <span className='cursor-pointer brand font-bold text-5xl text-cyan-600 uppercase'>
                            <span className='text-orange-700'>Luca</span>Sal
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                        <span className='md:float-right text-4xl align-middle text-blue-400 hover:text-blue-500 px-8 py-3 cursor-pointer'>
                            <Link href='https://twitter.com/LucaSalLuca'>
                                <a target='_blank'>
                                    <BsTwitter />
                                </a>
                            </Link>
                        </span>
                </div>
            </div>
        </div>
    )
}

export default Header