import Image from 'next/image'
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Navbar from './SiteHeader';
import Footer from './SiteFooter';

async function getData() {
  const res = await fetch('https://midhareviewapi.vercel.app/reviews')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary

    throw new Error('Failed to fetch data')
  }

  return res.json()
}
function capitalizeWords(str) {
  return str.replace(/\b\w/g, match => match.toUpperCase());
}

export default async function Reviews() {
  const data = await getData()
  return (
    <>
      <Navbar />
      <div className='p-5 bg-gradient-to-b from-[#e9e5e3] to-red-100 '>
        <div className="w-[95%]">
          <h1 className="font-bold text-[40px] text-center my-4 ">Don&apos;t believe us, Hear from our students</h1>
        </div>
        {data ? (
          <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-9 w-[90%] mx-auto'>
            {data.map((review, index) => (
              <li key={index} data-aos="zoom-in-up" className='border-[3px] border-[#faf4f1] mt-[60px] rounded-2xl p-4 pt-9 bg-white relative backdrop-filter backdrop-blur-[1px] bg-opacity-[50px] shadow-inner'>
                {/* <Image width={90} height={30} alt='image' src='/MidhaFin-logo.webp' className='fixed bottom-1 right-1' /> */}
                <h1 className='text-amber-700  fixed top-2 right-3'>{review.course}</h1>

                <p className='fixed top-2 left-3'>{review.country}</p>
                <div className='bg-grey-900  h-[100%] '>
                  <div className=' items-center flex flex-col justify-between  h-[100%] text-center my-1'>
                    <h1 className='text-[#6A1B1B] text-xl font-semibold m-1 flex'>{capitalizeWords(review.name)} <Link target='_blank' href={review.l_link}><FaLinkedin className='mt-1 ml-1 text-black hover:cursor-pointer' /></Link></h1>
                    <Image width={120} height={120} src={review.image} alt={review.name} className='w-[100px] absolute  border-[#ffffff] -top-[65px] mx-auto rounded-[50%] border t-[40px] shadow-lg?":' />
                    <h1 className='text-center'>&quot; {`${review.excerpt}`}...<Link href={review.p_link} className='underline'>Read More</Link> &quot;</h1>
                    <h1 className='text-amber-700 m-2'>{review.job}</h1>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center text-2xl my-3'>Loading...</p>
        )}
      </div>
      <Footer/>
    </>
  )
}