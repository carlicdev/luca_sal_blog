import React from 'react'
import { MdOutlineArrowLeft, MdOutlineArrowRight} from 'react-icons/md';

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++ ) {
    pages.push(i)
  }

  return (
    <div className='m-2 p-2 mx-auto flex'>
      <span
        className='text-slate-500 cursor-pointer hover:text-cyan-600'
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <MdOutlineArrowLeft size={'4em'} />
      </span>
      {
        pages.map((page, index) => {
          return (
          <button 
            key={index} 
            className={page == currentPage ? 
              `rounded text-2xl bg-cyan-600 px-3 py-1 mx-1 my-3 text-white` 
              :
              `rounded text-xl bg-slate-700 hover:bg-slate-800 px-3 py-1 mx-1 my-3 text-white`
            }
            onClick={() => setCurrentPage(page)}
            >
            {page}
            </button>
          )
        })
      }
      <span
        onClick={() => setCurrentPage(currentPage + 1)}
        className='text-slate-500 cursor-pointer hover:text-cyan-600'
      >
        <MdOutlineArrowRight size={'4em'} />
      </span>
    </div>
  )
}

export default Pagination