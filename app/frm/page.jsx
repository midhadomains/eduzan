
import React from 'react'
import Navbar from '../../components/SiteHeader'
import Footer from '../../components/SiteFooter'
import Image from 'next/image'
import Link from 'next/link'
export const metadata = {
    title: 'MidhaFin',
    description: 'Boost Your Career In Finance',
  }
export default function Home() {
    return (
        <div>
            <Navbar />
            {/* hero section */}
            <div className='flex justify-center	w-[100%] p-5  bg-bgfrm bg-no-repeat bg-cover bg-center bg-fixed '>
                <div className='w-[50%] p-3 text-center '>
                    <h1 className='ml-9'>MIDHAFIN</h1>
                    <h2 className='ml-3'>One Stop Destination For Your FRM Exams</h2>
                    <Image alt='Micky' height={500} width={500} src='/Micky-Banner.png' className='mx-auto ' />
                </div>
                <div className='w-[50%] p-3  '>
                    <div className='m-3 border rounded-xl p-4 text-left  '>
                        <h1 className='text-center'>FRM Designation: A Brief Overview </h1>
                        <p>The FRM designation from GARP is like a top-notch stamp of approval in the world of Risk Management. To earn it, you have to conquer two tough exams and gain at least two years of hands-on experience in any domain related to financial risk management.</p>
                        <p>Essentially, having the FRM designation means you really know your stuff when it comes to understanding, applying, and dealing with risk management principles.</p>
                        <p>It&apos;s not just a qualification; it&apos;s the gold standard that showcases our expertise in managing financial risks.</p>
                    </div>
                    <span className='mx-auto table'>
                        <Link href='/frm/part-1'>
                            <button>FRM Part-1</button>
                        </Link>
                        <Link href='/frm/part-2'>
                            <button>FRM Part-2</button>
                        </Link>
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}
