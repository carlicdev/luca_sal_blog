import React, { useState } from 'react'


const Subscribe = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    
    const subscribe =  async (email) => {
        const res =  await fetch(`/api/subscribe?email=${email}`)
        console.log(res.statusText)
        if (res.status == 201) {
            setError(null)
            setSuccess('Por favor revisa tu bandeja de entrada para confirmar tu suscripción.')
        } else {
            setSuccess(null)
            setError('Tu correo no ha podido ser registrado. Por favor intentalo de nuevo.')
        }
    }

   const handleSubmit = (e) => {
    e.preventDefault()
    subscribe(email)
   }

  return (
    <div className='relative md:rounded-lg bg-gray-700 bg-opacity-60 shadow shadow-slate-600 text-white text-center w-full mx-auto mb-8 p-8'>
        <p className='mt-2 mb-4 text-lg'>
        Suscríbete para enterarte de los posts más recientes
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
                className='rounded shadow-md shadow-slate- hover:bg-orange-700 px-6 py-2 mt-4 mb-2 text-white bg-orange-600 mx-auto uppercase'>
                suscribirme
            </button>
        </form>
        {error && (
            <p className='text-red-500'>{error} </p>
        )}
        {success && (
            <p className='text-green-500'>{success} </p>
        )}
    </div>
  )
}

export default Subscribe