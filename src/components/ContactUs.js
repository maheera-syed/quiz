import React from 'react'

export default function ContactUs() {
  return (
    <section id='contact' className='relative'>
      <h1>Contact Us</h1>
      <form
        netlify
        name='contact'
        className='lg:w-2/3 md:w-1/2 flex flex-col md:ml-auto md:mr-auto w-full md:py-8 mt-8 md:mt-0'
      >
        <div className='flex flex-wrap -m-2'>
          {/* Left Column */}
          <div className='p-2 w-full md:w-1/2'>
            <div className='flex flex-col mb-4'>
              <label htmlFor='name' className='mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor='address' className='mb-2'>
                Address
              </label>
              <input
                type='text'
                id='address'
                name='address'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
          </div>
          {/* Right Column */}
          <div className='p-2 w-full md:w-1/2'>
            <div className='flex flex-col mb-4'>
              <label htmlFor='phone' className='mb-2'>
                Phone
              </label>
              <input
                type='text'
                id='phone'
                name='phone'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor='email' className='mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
          </div>
          {/* Center Column */}
          <div className='p-2 w-full'>
            <div className='flex flex-col mb-4'>
              <label htmlFor='message' className='mb-2'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
          </div>
        </div>
        <button
          style={{ backgroundColor: 'green' }}
          type='submit'
          className='text-white border-0'
        >
          Submit
        </button>
      </form>
    </section>
  )
}
