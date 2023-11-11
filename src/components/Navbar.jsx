import React from 'react'
import Logo from "../assets/logo.svg"

export default function Navbar() {
  return (
    <div className='bg-[#F9E0AE] h-[85px] w-full flex items-center'>
        <div className="wrapper flex w-full p-4 md:w-[80%] mx-auto items-center justify-between">
            <div>
              <img src={Logo} className='h-8 md:h-12' alt="" />
            </div>
            <ul className='sm:flex hidden items-center gap-3'>
                <li className='sm:px-2 px-4 font-semibold py-1 '>Home</li>
                <li className='sm:px-2 px-4 font-semibold py-1 '>About</li>
                <li className='sm:px-2 px-4 font-semibold py-1 '>Courses</li>
                <li className='sm:px-2 px-4 font-semibold py-1 '>Blog</li>
                <button className='bg-[#C24914] text-white px-2 py-1 text-sm font-bold rounded-md'>Contact us</button>
            </ul>
            <span className='sm:hidden block'>Menu</span>
        </div>
    </div>
  )
}
