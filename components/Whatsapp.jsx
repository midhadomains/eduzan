import React from 'react'
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";


function Whatsapp() {
    return (
        <>
            <Link href="https://api.whatsapp.com/send?phone=%2B919155199555&text=Hi%2C%20I%20have%20a%20query%20regarding%20your.%20Courses" target="_blank" className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#52c95a] items-center right-2 bottom-2  fixed flex rounded-[1000px] p-2 text-white'>
                <FaWhatsapp className='sm:ml-3 sm:mr-1 text-[40px]' />
                <h1 className='sm:mr-2 hidden sm:block '>Contact us</h1>
            </Link>
        </>
    )
}

export default Whatsapp;