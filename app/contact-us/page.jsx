import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Footer from '../../components/common/SiteFooter';
import Navbar from '../../components/common/SiteHeader';

export const metadata = {
  title: "Contact Us",
};

export default function page() {
  //after submitting redirect to "/thankyou"
  return (
    <>
      <Navbar />
      <div className="select-none">
        <div className="bg-contactbgimage bg-contain bg-no-repeat bg-bottom md:bg-cover">
          <div className="max-w-[1100px] mx-auto flex-wrap-reverse sm:flex-nowrap flex sm:flex-none  sm:justify-around">
            <Image
              height={400}
              width={400}
              className="mx-auto"
              src="/Group 161.svg"
              alt="MidhaFin Image"
            />
            <div className="min-w-[100px] max-w-[400px] text-center leading-[35px] sm:text-left mx-auto my-[30px] sm:my-[50px] text-[20px] px-7 sm:px-0 ">
              <h3 className="text-[#6A1C1A] pt-8 font-semibold ">
                Have questions or need assistance?
              </h3>
              <span className="text-[#2E3442] font-normal ">
                Feel free to reach out to our friendly support team at
                <span className="text-[#6A1C1A] font-normal"> MidhaFin.</span>
              </span>
            </div>
          </div>
        </div>

        <div className=" sm:flex justify-around text-center sm:text-left mt-[10px] sm:mt-[30px] max-w-[1100px] mx-auto ">
          <div className="w-[90%] sm:w-auto text-[20px] mx-auto sm:pl-5 ">
            <h1 className="text-[#6A1C1A] pt-8 font-bold text-[36px] leading-[40px]">
              Get in touch with us{" "}
            </h1>
            <div className="text-[#2E3442] font-normal mt-5 text-lg ">
              Fill in this form or send us an <span className="font-bold">e-mail</span> at{
                <Link target="_blank" href="mailto:midhafin@gmail.com">
                  <p className=" flex justify-center sm:justify-start text-[#6A1C1A] "><CiMail className='mt-1 mr-2' />
                    midhafin@gmail.com</p>
                </Link>
              }
            </div>
            <div className="hidden sm:block">
              <h2 className="text-xl mt-5">You can also <span className="font-bold">Call</span> or <span className="font-bold">Whatsapp</span> us at </h2>
              <Link href="tel:+91 91551 99555">
                <p className="my-3 flex justify-center sm:justify-start text-[#6A1C1A]"><IoCallOutline className='mt-1 mr-1' /> +91 91551 99555</p>
              </Link>
            </div>
          </div>

          <div className="sm:w-[50%]">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-[90%] p-5 mx-auto sm:max-w-[500px]"
            // onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="5bf8d2b0-a3ca-48cd-8c64-7aa707f8c751"
              />
              <input
                type="hidden"
                name="redirect"
                value="http://localhost:3000/"
              ></input>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
              <input
                type="phone-number"
                name="phone"
                placeholder="Phone Number"
                className="w-full  bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
              <textarea
                name="Your query"
                placeholder="Your query"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              ></textarea>
              <div className="my-3 ">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-[#BE4E1E] hover:bg-[#6A1C1A] text-[#FFEDD9] p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="sm:hidden mb-11">
              <h2 className="text-xl mt-5">You can also <span className="font-bold">Call</span> or <span className="font-bold">Whatsapp</span> us at </h2>
              <Link href="tel:+91 91551 99555">
                <p className="my-3 flex justify-center sm:justify-start text-[#6A1C1A]"><IoCallOutline className='mt-1 mr-1' /> +91 91551 99555</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
