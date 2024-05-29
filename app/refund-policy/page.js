import React from 'react';
import Link from 'next/link'
import Footer from '../../components/common/SiteFooter';
import Navbar from '../../components/common/SiteHeader';
function Page() {
  return (
    <div className='select-none'>
      <Navbar />
      <div>
        <div className="h-40 bg-red-950 text-left">
          <h1 className="text-4xl font-style:normal font-bold text-white pt-6 pl-4 md:pl-28">Refund Policy</h1>
          <p className='text-white pt-6 pl-4 md:pl-28'>
            <Link href="/">Home</Link> /&nbsp;Refund Policy
          </p>
        </div>


        <div className='w-[80%] 2xl:w-[65%] mx-auto text-left p-2'>
          <h2 className='my-10  py-2 text-3xl pl-4  text-[#6A1C1A] border-[#6A1C1A]  border-l-8 md:text-5xl    font-style:normal font-bold '>Refund and Cancellation Policy</h2>
          <p className='font-style:normal text-xl md:text-2xl text-center'>Thank you for shopping at midhafin.com</p>
          <hr className='w-[50%] mx-auto my-2' />
          <p className='font-style:normal text-xl my-8 lg:text-xl'>Considering how much material we provide to our students from the first day itself,
            it is our policy to not provide refunds for our courses. Midhafin is committed to providing
            value for money through high quality content and experienced faculty, which requires the commitment
            of a lot of financial resources to pay our staff. We make it a point to answer every query of the students
            regarding the course before enrolment and students can even ask for demo classes before joining, however once enrolled,
            no request for refund would be entertained.</p>
          <ul className="list-disc my-2 ">
            <li className='font-style:normal text-xl ml-2 md:ml-4'>Non-tangible irrevocable goods Digital products</li>
            <li className='font-style:normal text-xl ml-2 md:ml-4'>We do not issue refunds for non-tangible irrevocable goods digital products once the order is confirmed and the product is sent.</li>
            <li className='font-style:normal text-xl ml-2 md:ml-4'>We recommend contacting us for assistance if you experience any issues receiving or downloading our products. Contact us for any issues:</li>
          </ul>
        </div>
        <div>

          <hr className="my-6" />
          <p className='font-style:normal text-xl md:text-2xl text-center'>Contact us for any issues:</p>
          <p className='font-style:normal text-xl text-center my-3'>If you have any questions about our Returns and Refunds Policy, please contact us at: <a href="mailto:midhafin@gmail.com" className="text-cyan-500">midhafin@gmail.com</a></p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Page;














