import React from 'react'
import { Link } from 'react-router'

const ForgotPassword = () => {
  return (
    <div className='p-20'>
        <h1 className='text-xl font-bold'> Forgot Password </h1>

        <h2 className='pt-10 pb-10'> Don't Worry we got you covered!!</h2>

        <input placeholder="Email Address" type="text" className="border-1 " />

        <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5 flex justify-start'> Forgot Password </button>

        <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5 flex justify-start'>

        <Link to="/"> Go back to homepage</Link>

        </button>

    </div>
  )
}

export default ForgotPassword