import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if(slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug, categories])

    return (
        <div className='text-white bg-gray-800 shadow-lg md:rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                {slug ? 'Relacionados' : 'Lo Más Reciente'}
            </h3>
            {relatedPosts.map((post) => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='w-16 flex-none'>
                        <img 
                            alt={post.title}
                            height='60px'
                            width='60px'
                            className='align-middle rounded-full adjust w-16 h-12'
                            src={post.featuredImage.url}
                        />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='text-gray-500 font-xs'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className='text-md' >
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget