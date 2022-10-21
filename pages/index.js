import Head from 'next/head'
import React, { useState } from 'react'
import { PostCard, Categories, PostWidget, Subscribe, Pagination } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts} from '../sections';

export default function Home({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage; 
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex)

  return (
    <div className='container mx-auto md:px-10 mb-8'>
      <Head>
        <title>Luca Sal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {currentPosts.map((post, index)=> (
              <PostCard post={post.node} key={index} />
            ))}
            <Pagination 
              totalPosts={posts.length} 
              postsPerPage={postsPerPage} 
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
            />
          </div>
          <div className='lg:col-span-4 col-span-1'>
              <div className='lg:sticky relative top-8'>
                <PostWidget />
                <Subscribe />
                <Categories />
              </div>
          </div>
        </div>

    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
