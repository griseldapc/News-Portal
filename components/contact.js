import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen  '>
        {/* <h1 className=' text-2xl font-bold text-left p-4'>Let's join us</h1> */}
        <form className='max-w-[600px] '>
            <div className='grid grid-cols-2 gap-2 '>
                <input className='border shadow-lg p-3 bg-gray-900 rounded-xl text-white' type="text" placeholder='Name' />
                <input className='border shadow-lg p-3 bg-gray-900 rounded-xl ' type="email" placeholder='Email' />
            </div>
            <input className='border shadow-lg p-3 w-full my-2 bg-gray-900 rounded-xl' type="text" placeholder='Subject' />
            <textarea className='border shadow-lg p-3 w-full bg-gray-900 rounded-xl ' cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2 bg-violet-400 rounded-xl'>Submit</button>
        </form>
    </div>
  )
}

export default Contact