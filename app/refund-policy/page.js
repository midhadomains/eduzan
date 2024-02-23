import React from 'react';

function Page(){
    return(
     <>
    <div className="h-40 bg-red-950">
      <h1 className="text-4xl font-style:normal font-bold text-white pt-6 pl-4 md:pl-28">Refund Policy</h1>
      <p className='text-white pt-6 pl-4 md:pl-28'>
    <a href="https://www.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f">Home</a> /
      <a href="https://www.midhafin.com/refundpolicy">
      Refund Policy
      </a>
  </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center pt-10 mx-4 md:mx-16 ">
        {/* <h1 className='text-5xl text-red-950 pt-8 md:pt-28 font-bold '> I </h1> */}
        <h2 className='text-3xl text-red-950 border-red-950  border-l-8 md:text-5xl  ml-8 md:pr-60 pl-4 md:pl-5 font-style:normal font-bold text-center md:text-left'>Refund and Cancellation Policy</h2>
      </div>
      <div className=" flex items-center justify-center pt-4 md:pt-8 pl-8 md:pl-18 pr-4 md:pr-10">
        <p className='font-style:normal text-xl md:text-2xl'>Thank you for shopping at midhafin.com</p>
    </div>
    <div className=" flex items-center justify-center pt-4 md:pt-8 pl-4 md:pl-60 pr-4 md:pr-60 ">
        <p className='font-style:normal text-xl pl-4 md:pl-14 lg:text-xl'>Considering how much material we provide to our students from the first day itself,
           it is our policy to not provide refunds for our courses. Midhafin is committed to providing
           value for money through high quality content and experienced faculty, which requires the commitment
           of a lot of financial resources to pay our staff. We make it a point to answer every query of the students
            regarding the course before enrolment and students can even ask for demo classes before joining, however once enrolled,
             no request for refund would be entertained.</p>
    </div>
      {/* <div className=" flex items-center justify-center pt-4 md:pt-8 pl-4 md:pl-60 pr-4 md:pr-16"> */}
        <div className='flex items-center justify-center pt-4 md:pt-8 pl-4 md:pl-10 pr-4 md:pr-10'>
        <ul className="list-disc pl-6 md:pl-16 pr-4 md:pr-14">
            <li className='font-style:normal text-xl ml-2 md:ml-4'>Non-tangible irrevocable goods Digital products</li>
            <li className='font-style:normal text-xl ml-2 md:ml-4'>We do not issue refunds for non-tangible irrevocable goods digital products once the order is confirmed and the product is sent.</li>
            <li className='font-style:normal text-xl ml-2 md:ml-4'>We recommend contacting us for assistance if you experience any issues receiving or downloading our products. Contact us for any issues:</li>
        </ul>
      </div>
      <hr className="border-b my-6 w-100" />
      <div className=" flex items-center justify-center pt-0 pl-10 pr-10">
        <p className='font-style:normal text-xl md:text-2xl"'>Contact us for any issues:</p>
      </div>
      <div className=" flex items-center justify-center pt-0 pl-10 pr-10">
        <p className='font-style:normal text-xl'>If you have any questions about our Returns and Refunds Policy, please contact us at: <a href="mailto:midhafin@gmail.com" className="text-cyan-500">midhafin@gmail.com</a></p>
      </div>
     </>
    );
}
export default Page;














