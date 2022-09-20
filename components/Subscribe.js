import React, { useState } from 'react'


const Subscribe = () => {
    const [email, setEmail] = useState('')
    
    const subscribe = (email) => {
        const res = fetch(`/api/subscribe?email=${email}`)
    }

   const handleSubmit = (e) => {
    e.preventDefault()
    subscribe(email)
   }

  return (
    <div className='relative rounded-lg bg-gray-700 bg-opacity-60 shadow shadow-slate-600 text-white text-center w-full mx-auto mb-8 p-8'>
        <p className='mt-2 mb-4 text-lg'>
        Suscríbete para enterarte de los posts mas recientes
        </p>
        <form onSubmit={handleSubmit}>
            <input
                placeholder='correo electrónico'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full text-gray-900 outline-none focus:outline-slate-500 bg-gray-100 my-2 py-1 px-2 rounded '
            />
            <button 
                type='submit'
                className='rounded shadow-md shadow-slate- hover:bg-red-800 px-6 py-2 mt-4 mb-2 text-white bg-red-700 mx-auto uppercase'>
                suscribirme
            </button>
        </form>
    </div>
  )
}

export default Subscribe