import React from 'react'
import Logo from "../assets/logo.svg"

export default function Footer() {
  return (
    <div className='w-full p-4 md:p-8 bg-[#F9E0AE]'>
        <div className=" min-h-32 w-full md:w-[85%] mx-auto">
            <div className='grid grid-cols-4 py-6 gap-4 md:gap-8'>
                <div className='col-span-2 md:col-span-1'><img src={Logo} className='h-12' alt="" /></div>
                <div className='col-span-2 md:col-span-1'>
                    <span className='font-bold'>Follow us</span>
                    <div className='flex text-xs gap-2'>
                        <div>TW</div>
                        <div>FB</div>
                        <div>IG</div>
                        <div>YOU</div>
                    </div>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <span className='font-bold'>Useful Links</span>
                    <ul className='list-disc text-[#000]/40 text-sm px-2'>
                        <li>Our Projects </li>
                        <li>FAQ's</li>
                        <li>Newss and Update</li>
                    </ul>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <span className='font-bold'>Contacts</span>
                    <ul className='list-disc text-[#000]/40 text-sm px-2'>
                        <li>Address : 4-5 Main road , Delhi</li>
                        <li>Email : educare@gmail.com</li>
                        <li>Phone Number : +91 4533433265</li>
                    </ul>
                </div>
            </div>
            <p className='text-[#000]/40 text-sm text-center'>All Copyrights reserved</p>
        </div>
    </div>
  )
}
