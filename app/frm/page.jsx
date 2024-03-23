import React from 'react'
import Navbar from '../../components/SiteHeader'
import Footer from '../../components/SiteFooter'
import Image from 'next/image'
import Link from 'next/link'
import HeroImg from "../../public/frm/HeroImg.png"
import Garp from "../../public/frm/Garp.svg"
import Part_1 from "../../public/frm/Part-1.svg"
import Part_2 from "../../public/frm/Part-2.svg"
import Img_1 from "../../public/frm/Highly Costomize.png"
import CounterUpPage from '../../components/frm/Homepage/CounterUpPage'

export const metadata = {
    title: 'MidhaFin',
    description: 'Boost Your Career In Finance',
}

export default function Home() {
    return (
        <div className='w-[100%] bg-bgfr'>
            <Navbar />
            {/* hero section */}
            <div className=' text-[#F9F2DF] bg-[#6A1C1A] '>
                <div className='w-[80%] flex  justify-around mx-auto'>
                    <div className='w-[70%] mt-[77px] flex flex-col justify-around'>
                        <h1 className='text-[70px] font-bold'>One Stop Destination For Your FRM Exams.</h1>
                        <div className='flex justify-around m-9'>
                            <Image src={Garp} alt="Garp svg" />
                            <h1 className='text-[40px] border-l-[3px] px-[40px] ml-9'>We’re a <span className='font-bold'>GARP approved</span> exam prep provider</h1>
                        </div>
                        <button className="border rounded-[54px] hover:bg-[#BE4E1E] w-fit px-[70px] m-5 text-[30px] font-semibold py-6">SIGNUP NOW</button>
                    </div>
                    <div className='w-[30%] flex flex-col justify-end'>
                        <Image width={600} height={600} src={HeroImg} alt='Micky Midha' />

                    </div>
                </div>
            </div>

            <div className='w-[80%] mx-auto'>
                <h1 className='text-[40px] font-semibold text-center m-[40px]'>Be a part of <span className='text-[#9A381D]  '>FRM certified community</span> employed at the world’s top banks, asset management firms, consulting firms, and regulators. </h1>
                <div className='flex justify-between mx-[8%]'>
                    <div>
                        <Link href="#">
                            <Image src={Part_1} alt='part-1' />
                        </Link>
                    </div>
                    <div>
                        <Link href="#">
                            <Image src={Part_2} alt='part-2' />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='w-[80%] mx-auto py-6'>
                <h1 className='text-center text-[40px] '>What sets us apart?</h1>
                <div className='flex justify-around'>
                    <div className='text-center w-[20%]'>
                        <Image className='mx-auto' src={Img_1} alt="Heghly Costomized" />
                        <h1 className='text-[30px] font-bold'>Highly Costomized</h1>
                        <ul className='list-disc list-inside' >
                            <p className='text-[20px]'>Access to 1-to-1 Doubt Session.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Customized Study Plan meeting.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Frequent “Personalized Meetings” to ensure progress and vital feedback.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Personalized Mocks Assessments & related advice to improve the score.</p>
                        </ul>
                    </div>

                    <div className='text-center w-[20%]'>
                        <Image className='mx-auto' src={Img_1} alt="Heghly Costomized" />
                        <h1 className='text-[30px] font-bold'>Quality Content</h1>
                        <ul className='list-disc list-inside' >
                            <p className='text-[20px]'>Usage of Graphs, Tables, and charts to illustrate the concept.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Usage of Simple examples to enhance conceptual clarity.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Logical flow of Sequencing of chapters to enhance understanding.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Concepts built from Scratch, ease of understanding for candidates with no Mathematics/Finance Background.</p>
                        </ul>
                    </div>

                    <div className='text-center w-[20%]'>
                        <Image className='mx-auto' src={Img_1} alt="Heghly Costomized" />
                        <h1 className='text-[30px] font-bold'>GARP Related</h1>
                        <ul className='list-disc list-inside' >
                            <p className='text-[20px]'>Resolving and addressing GARP-related queries. </p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Related to exam scheduling.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Best practices to approach the exam.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Common do’s & don’t,</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Exam Strategy.</p>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='w-[80%] mx-auto py-6'>
                <div className='flex'>
                    <div className='w-[50%]'>
                        <h1 className='text-[40px] font-bold'>Recent <span className='text-[#BE4E1E]'>Performance</span> <br /> Highlights</h1>
                    </div>
                    <div className='w-[50%] mx-auto'>
                       <CounterUpPage/>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
