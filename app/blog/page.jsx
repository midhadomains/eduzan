import React from 'react'
import PostList from '../../components/blog/PostList'
import Navbar from '../../components/common/SiteHeader'
import Footer from '../../components/common/SiteFooter'

export const metadata = {
  title: "Blog",
};

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="bg-3500bg tracking-wide max-h-[270px] ">
        <div className='max-w-[1200px] px-[20px] md:px-[50px] mx-auto py-[50px]'>
          <h1 className='text-[#6A1C1A] xl:text-[3rem] md:text-[2.5rem]  text-[2rem] font-semibold '>Midha Fin <span className='text-[#BE4E1E] '>Blog</span> </h1>
          <p className='text-[#2D303B] max-w-[800px] text-[16px] md:text-[20px] mt-3 md:leading-[32px] '>Unlock the power of knowledge with our comprehensive educational resources tailored to your learning journey.</p>
        </div>
      </div>
        <PostList />
      <Footer />
    </div>
  )
}
