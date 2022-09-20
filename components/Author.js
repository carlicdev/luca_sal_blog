import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-gray-700 bg-opacity-60">
            <div className='absolute left-0 right-0 -top-14'>
                <Image
                unoptimized
                    alt={author.name}
                    height='120px'
                    width='120px'
                    className="align-middle rounded-full"
                    src={author.photo.url}
                />
            </div>
                <h3 className='text-gray-200 my-4 text-xl font-bold'>{author.name}</h3>
                <p className='text-gray-200 text-lg'>{author.bio}</p>
        </div>
    )
}

export default Author