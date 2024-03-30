import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import Link from "next/link"
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import Navbar from '../../components/SiteHeader';
import Footer from '../../components/SiteFooter';
const MyComponent = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center  bg-white select-none">
        <div className="container sm:mt-3 mx-auto my-3 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase lg:text-3xl sm:text-2xl">Contact <span className='text-[#6A1C1A]'>Us</span></h1>
            </div>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5"
            >
              <input type="hidden" name="access_key" value="5bf8d2b0-a3ca-48cd-8c64-7aa707f8c751" />
              {/* change value to whatever page you want to redirect after submitting the form */}
              <input type="hidden" name="redirect" value="https://www.midhafin.com/thank-you"></input>
              <input
                type="text"
                name="Name"
                placeholder="Name*"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
              <input
                type="phone-number"
                name="phone"
                placeholder="Phone*"
                className="w-full my-20 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
              <textarea
                name="message"
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              ></textarea>
              <div className="my-3 ">
                <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-[#8e1c1c] hover:bg-[#6a1c1a] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Submit
                </button>
              </div>

            </form>
          </div>

          <div
            className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[#ffffff] rounded-2xl shadow-2xl ">
            <div className="flex flex-col ">
              <h1 className="font-bold uppercase text-3xl  my-4">Contact <span className='text-[#6A1C1A]'>Us</span></h1>
              <p className="text-gray-400 ">Any questions regarding the courses or career? Please feel free to contact us.
              </p>
              <div className="flex my-4">
                <div >
                  <GrContact className='w-7 mt-2' />
                </div>
                <div className="flex flex-col text-[1.1rem]">
                  <h2 className="text-2xl ">Call <span className='text-[#6A1C1A]'>&</span> Mail <span className='text-[#6A1C1A]'>Us</span> </h2>
                  <Link href="tel:+91 91551 99555">
                    <p className="text-gray-700 my-3 flex hover:text-[#6A1C1A]"><IoCallOutline className='mt-1 mr-1' /> +91 91551 99555</p>
                  </Link>
                  <Link target="_blank" href="mailto:midhafin@gmail.com">
                    <p className=" flex  text-gray-700 hover:text-[#6A1C1A] "><CiMail className='mt-1 mr-1' />
                      midhafin@gmail.com</p>
                  </Link>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <Link href="https://www.facebook.com/MidhaFin" target="_blank" rel="noreferrer" className=" border rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-facebook-f text-blue-900" />
                </Link>
                <Link href="https://www.linkedin.com/company/midhafin/" target="_blank" rel="noreferrer" className="rounded-full border bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-linkedin-in text-[#0077b5]"></i>
                </Link>
                <Link href="https://www.instagram.com/midhafin/" target="_blank" rel="noreferrer" className="rounded-full border bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-instagram " style={{
                    backgroundImage: 'radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)', WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}></i>
                </Link>
              </div>
              <div className="flex my-4 ">
                <h3 className="text-2xl">Send us a <span className='text-[#6A1C1A]'>Message</span></h3>
              </div>
              <div className="flex  w-2/3 lg:w-1/2">
                <Link href="https://api.whatsapp.com/send/?phone=919155199555&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="rounded-full border bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-whatsapp text-[#128C7E]" ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id='result' className='text-gray-500'></div>
      </div>
      <Footer />
    </>
  );
};

export default MyComponent;
