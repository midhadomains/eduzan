// import Link from "next/link";


// export default function SiteFooter() {


//     return (
//         <>
//             <footer id="site-footer" className="bg-slate-200">
//                 <div className="flex justify-between items-center container mx-auto lg:max-w-5xl">
//                     <div className="py-3">&copy; MidhaFin</div>
//                     <ul className="flex [&>li>a]:px-2">
//                         <li>
//                             <Link href="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link href='/faq'>FAQ</Link>
//                         </li>
//                         <li>
//                             <Link href='/refund-policy'>Refund Policy</Link>
//                         </li>
//                     </ul>
//                 </div>

//             </footer>
//         </>
//     )
// }
import React from 'react';
import Image from 'next/image'
import Link from "next/link"
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TiMail } from "react-icons/ti";


function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">Subscribe</button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</Link>
                            <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About us</Link>
                            <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Courses</Link>
                            <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">FAQs</Link>
                            <Link href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Blogs</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white uppercase">Contact Us</p>
                        <div className="mt-5">
                            <div className="flex text-gray-800 dark:text-white my-2 ">
                                <MdOutlinePhoneIphone className="mt-1 mr-1" />
                                <h1> Call : +91-91551-99555</h1>
                            </div>
                            <div className="flex text-gray-800 dark:text-white my-2">
                                <TiMail className="mt-1 mr-1" />
                                <Link target="_blank" href="mailto:midhafin@gmail.com" className="hover:text-[#fcefea]">
                                    <h1 className=' hover:text-[#892121]'>MidhaFin@gmail.com</h1>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                <h1 className="text-center text-md sm:text-md m-2 italic text-white">GARP does not endorse, promote, review or warrant the accuracy of the products or services offered by MIdhaFin of GARP Exam related information, nor does it endorse any pass rates that may be claimed by MidhaFin.
                    Further, GARP is not responsible for any fees or costs paid by the user to MidhaFin nor is GARP responsible for any fees or costs of any person or entity providing any services to MidhaFin. SCR®, FRM®, GARP® and Global Association of Risk Professionals™ , is standard character and/or stylized
                    form, are trademarks owned by the Global Association of Risk Professionals, Inc.</h1>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                <div className="flex items-center justify-between">
                    <a href="#">
                        <Image width={150} height={120} className='ml-4 lg:ml-0 md:item-left h-auto' src="/MidhaFin-logo.webp" alt="MidhaFin Logo" />
                    </a>

                    <div className="flex -mx-2">
                        <Link target="_blank" href="https://www.instagram.com/midhafin/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                            <SlSocialInstagram />
                        </Link>

                        <Link target="_blank" href="https://www.facebook.com/MidhaFin" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                            <TiSocialFacebook />
                        </Link>

                        <Link target="_blank" href="https://www.linkedin.com/company/midhafin/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                            <SlSocialLinkedin />
                        </Link>

                        <Link target="_blank" href="https://twitter.com/midhafin" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                            <SlSocialTwitter />
                        </Link>

                        <Link target="_blank" href="https://www.youtube.com/@MidhaFin" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                            <SlSocialYoutube />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
