import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader, Subscribe, Pagination } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage; 
  const currentPosts = posts ? posts.slice(firstPostIndex, lastPostIndex) : [];

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto md:px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {currentPosts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
            <Pagination 
              totalPosts={posts.length} 
              postsPerPage={postsPerPage} 
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
            />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}