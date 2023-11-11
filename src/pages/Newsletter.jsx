import React from 'react'

export default function Newsletter() {
  return (
    <div className='w-full'>
        <div className="container md:w-[85%] mx-auto w-full md:flex-row flex-col bg-[#F9E0AE] py-4 px-2 md:p-8 min-h-24 flex gap-2 md:gap-4 items-center justify-around">
            <input type="text" className='w-[80%] px-3 md:px-4 py-2 flex-1 text-center text-[#000000]/40 outline-none text-sm font-semibold rounded-md' placeholder='Your Name' />
            <input type="text" className='w-[80%] px-3 md:px-4 py-2 flex-1 text-center text-[#000000]/40 outline-none text-sm font-semibold rounded-md' placeholder='Your Email' />
            <button className='text-white font-semibold flex-1 text-center rounded-md w-[80%] px-3 md:px-4 py-2 bg-[#C24914]'>Subscribe</button>
        </div>
    </div>
  )
}
