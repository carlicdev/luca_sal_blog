import React from 'react'

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++ ) {
    pages.push(i)
  }

  return (
    <div className='m-2 p-2'>
      {
        pages.map((page, index) => {
          return (

          <button 
            key={index} 
            className={page == currentPage ? 
              `rounded text-2xl bg-cyan-600 px-3 py-1 mx-1 text-white` 
              :
              `rounded text-xl bg-slate-700 hover:bg-slate-800 px-3 py-1 mx-1 text-white`
            }
            onClick={() => setCurrentPage(page)}
            >
            {page}
            </button>
          )
        })
      }
    </div>
  )
}

export default Pagination