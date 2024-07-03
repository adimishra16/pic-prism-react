import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='sm:mt-20 mt-10 min-h-screen flex items-center justify-center w-full '>
      <div className='bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]'>
        <h1 className='text-2xl font-bold text-center mb-4'>Let's Connect!</h1>
        <form>
          <div className='mb-4 '>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700 mb-2'>Username</label>
            <input type='text' name='name' id="name" placeholder='Enter Username' className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'/>
          </div>
          <div className='mb-4 '>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
            <input type='email' name='email' id="email" placeholder='abc123@email.com' className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'/>
          </div>
          <div className='mb-4 '>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
            <input type='password' name='password' id="email" placeholder='Enter your Password' className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'/>
          </div>
          <div className='mb-4 '>
            <label htmlFor='accountType' className='block text-sm font-medium text-gray-700 mb-2'>Select Your Account</label>
            <select className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'>
              <option value='buyer'>Buyer</option>
              <option value='seller'>Seller</option>
            </select>
          </div>
          <div className='flex items-center justify-end'>
          <Link className='text-xs text-black  '>Log in With Account</Link>
          </div>
          <button className='w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black'>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup