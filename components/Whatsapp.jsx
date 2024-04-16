import React from 'react'
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";


function Whatsapp() {
    return (
        <>
            <Link href=" https://api.whatsapp.com/send/?phone=919155199555&text=Hello+Team+MidhaFin%0Ai+am+interested+in+learning+more+about+your+courses.+Could+you+provide+me+with+some+information%3F&type=phone_number&app_absent=0 " target="_blank" className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-[#52c95a] items-center right-2 bottom-2  fixed flex rounded-[1000px] p-2 text-white'>
                <FaWhatsapp className='sm:ml-3 sm:mr-1 text-[40px]' />
                <h1 className='sm:mr-2 hidden sm:block '>Contact us</h1>% %
            </Link>
        </>
    )
}

export default Whatsapp;