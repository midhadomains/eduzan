import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";
import Image from 'next/image'

export const metadata = {
    title: "Welcome to MidhFin",
    description: "MidhaFin Home , Explore our Wide Range of Courses "
}

export default function Home() {
    return (
        <>
            <div className="min-h-screen  relative">
                <div className="absolute"></div>
                <SiteHeader />
                {/* <SiteHeader className="z-10 relative" /> */}
                <main>
                    {/* Hero section */}
                    <div className='max-w-full sm:flex justify-around bg-[#FAF4F2] p-5 text-center'>
                        <div className=' sm:w-[40%] '>
                            <h1 className=' text-[40px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px;'><span className='text-[#6A1C1A]'>Boost your career </span> in <span className='text-[#6A1C1A]'>Finance</span> with  mentorship you can bank on <span className='text-[#6A1C1A]'>!</span></h1>
                            <p className='text-[#391601] ml-8 text-md sm:text-lg'>Step up your career by acquiring the desirable skills and leading global certifications in Finance.</p>
                            <div className='flex mt-5 justify-center'>
                                <button className='bg-[#6A1C1A] rounded text-white py-2 px-2 sm:px-4 md:px-3 m-2'>SIGNUP NOW</button>
                                <button className='bg-[#6A1C1A] rounded text-white py-2 px-2 sm:px-4 md:px-3 m-2'>EXPLORE COURSES</button>
                            </div>
                        </div>
                        <div className=' sm:w-[40%]'>
                            <Image width={600} height={600} className='w-auto p-5 h-auto' src="/Micky-Banner.png" alt="Micky Midha" />
                        </div>
                    </div>
                    {/* About section */}
                    <div className='sm:flex lg:w-[80%] p-5 '>
                        <div className='sm:w-[40%]  text-left'>
                            <h1 className='text-[35px] sm:text-[50px] text-bold ml-[20%] lg:ml-[40%] mb-0'>About </h1>
                            <h1 className='text-[50px] sm:text-[60px] ml-[20%] lg:ml-[40%] text-[#6A1C1A] font-bold'>MidhaFin</h1>
                        </div>
                        <div className='sm:w-[60%] ml-4 sm:ml-[10%] ms:ml-[5%]'>
                            <h1 className='font-bold text-[20px] sm:text-[30px] text-left'>MidhaFin focuses on <span className='text-[#6A1C1A] '>Personalized</span> Learning,<br /> Expertise and Employability.</h1>
                            <p className='text-[#2C1E02] text-left'>In finance, desired skills are rare but not jobs! Become employable by pursuing the most reputed and admired courses in the industry, under the expert guidance of MidhaFin.</p>
                        </div>
                    </div>
                    {/* Features section */}
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-4 w-[92%] sm:w-[75%] mx-6 sm:mx-auto gap-[50px] mt-5 text-center'>
                        <div className=' shadow-2xl rounded-xl p-5 bg-[#FFF5EE] hover:bg-[#fffbfb]'>
                            <Image width={200} height={200} className='mx-auto h-auto ' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/Industry-Experienced-Faculty-Graphic-qjjuf83k7rt50cqg3kt9xdovai3nhfwrev0ssglf5s.png" alt="Industry Experienced Faculty" />
                            <hr className='my-3' />
                            <h1 className='text-2xl text-bold text-[#6A1C1A] text-center'>Industry Experienced Faculty</h1>
                            <p className=' '>Our faculty is extremely well trained and have real industry experience. They have taught hundreds of students and have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in and that we are often complimented upon by our students.</p>
                        </div>
                        <div className='shadow-2xl rounded-xl p-5 bg-[#FFF5EE] hover:bg-[#fffbfb]'>
                            <Image width={170} height={170} className=' mx-auto h-auto' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/Systematic-Doubt-Solving-Graphic-qjjuf4c7gfnzpwvwpj6rnen0wym6mnhu2ceuvcqzuo.png" alt="Systematic Doubt Solving" />
                            <hr className='my-3' />
                            <h1 className='text-2xl text-bold text-[#6A1C1A]'>Systematic Doubt Solving</h1>
                            <p className=' '>We believe curiosity is the mother of all inventions, and so we ensure every single relevant doubt of every single student is cleared within reasonable time frame. Our faculty encourages students to ask doubts and for them no doubt is small or silly. Relevant doubts from other sources are also answered by our faculty and we provide in depth and easy to understand solutions to our students.</p>
                        </div>
                        <div className='shadow-2xl rounded-xl p-5 bg-[#FFF5EE] hover:bg-[#fffbfb]'>
                            <Image width={165} height={165} className=' mx-auto h-auto' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/End-to-End-Mentorship-Graphic-qjjuetzzd99u67axdwpvdz8ydq159zcscx8ilb6br4.png" alt="End to End Mentorship" />
                            <hr className='my-3' />
                            <h1 className='text-2xl text-bold text-[#6A1C1A]'>End to End Mentorship</h1>
                            <p className=''>The relationship between our instructors and our students is not just that of instruction and teaching but also of mentorship. We help students throughout the process of learning and even beyond. From study planning, to the exam, to the relevant job interviews, we are there at every step with our students.</p>
                        </div>
                    </div>
                    {/* Play Store section */}
                    <div className='sm:flex sm:max-w-[70%] mx-auto p-5 my-9'>
                        <div className='sm:w-[50%] py-auto'>
                            <Image width={500} height={100} src="https://home.midhafin.com/wp-content/uploads/2024/02/Download-our-app.png" alt="Mobile and Laptop pic" />
                        </div>
                        <div className='sm:w-[50%] my-auto pt-5 sm:pt-1 text-center ' >
                            <p className='text-[#6A1C1A]'>iOS & Android</p>
                            <h1 className='text-[30px] text-[#391701] font-bold'>Download the Mobile App</h1>
                            <p className='text-[#6A1C1A]'>MidhaFin is a free to download app</p>
                            <div className='flex'>
                                <button className='m-5'> <Image width={300} height={100} src="https://home.midhafin.com/wp-content/uploads/2024/02/Google-Play-Button.png" alt="google play store" /></button>
                                <button className='m-5'><Image width={300} height={100} src="https://home.midhafin.com/wp-content/uploads/2024/02/iOS-download-Button.png" alt="app store" /></button>
                            </div>
                        </div>
                    </div>
                    {/* Our Platform Features */}
                    <div className='bg-[#FFF5EE] mt-8 m-5 pb-5  sm:m-1 text-center'>
                        <div className='max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] mx-auto mb-5 text-center my-3'>
                            <h1 className='text-[50px] font-bold my-3'>Our <span className='text-[#6A1C1A]'>Platform</span> Features</h1>
                            <p className='my-4'>We at MidhaFin, focus on striking a careful balance, between Knowledge and Relevance, between theory and analytics & between pure concepts and practical application.</p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[80%] mx-auto gap-[50px] item-center'>
                            <div className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-2' src="/Study-planner.png" alt="Study Planner" />
                                <h1 className='text-[20px] font-bold my-3'>Study Planner</h1>
                                <Link href='/study-planner'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px]  sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded'>READ MORE</button></Link>
                            </div>
                            <div className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-1' src='/question-bank.png' alt="Questions Bank" />
                                <h1 className='text-[20px] font-bold my-3'>Questions Bank</h1>
                                <Link href='/question-bank'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px]] rounded'>READ MORE</button></Link>
                            </div>
                            <div className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-2' src="/mock-test.png" alt="Mock Tests" />
                                <h1 className='text-[20px] font-bold my-3'>Mock Tests</h1>
                                <Link href='/mock-test'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded'>READ MORE</button></Link>
                            </div>
                            <div className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-2' src="/lecture-video.png" alt="Lecture Video" />
                                <h1 className='text-[20px] font-bold text-center my-3'>Lecture Video</h1>
                                <Link href='/lecture-video'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded'>READ MORE</button></Link>
                            </div>
                            <div className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-1' src="/doubut-solving-forum.png" alt="Doubt Solving Forum" />
                                <h1 className='text-[20px] my-3 font-bold'>Doubt Solving Forum</h1>
                                <Link href='/doubt-solving-forum'><button className='w-full mx-auto bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded'>READ MORE</button></Link>
                            </div>
                            <div className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-4' src="/industry-expert-faculty.png" alt="Industry Expert Faculty" />
                                <h1 className='text-[20px] my-3 font-bold'>Industry Expert Faculty</h1>
                                <Link href='/industry-expert-faculty'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px]] rounded'>READ MORE</button></Link>
                            </div>
                            <div className='mx-auto items-center flex flex-col justify-around '>
                                <Image width={150} height={100} className='mx-auto m-2' src="/Complete-study-material.png" alt="Complete Study Material" />
                                <h1 className='text-[20px] my-3 font-bold text-center'>Complete Study Material</h1>
                                <Link href='/complete-study-material'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded'>READ MORE</button></Link>
                            </div>
                            <div className='mx-auto items-center flex flex-col justify-around'>
                                <Image width={150} height={100} className='mx-auto m-4' src="/access-till-you-pass.png" alt="Access Till You P150" />
                                <h1 className='text-[20px] my-3 font-bold'>Access Till You Pass&nbsp;&nbsp;</h1>
                                <Link href='/access-till-you-pass'><button className='w-full bg-[#6A1C1A] text-white py-2 px-[10px] sm:px-[30px] lg:px-[40px] xl:px-[50px] rounded'>READ MORE</button></Link>
                            </div>

                        </div>
                    </div>
                    {/* FAQs  Section */}
                    {/* <div>
                <div>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div>

                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                <span>What is Flowbite?</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                <span>Is there a Figma file available?</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-3">
                            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                <span>What are the differences between Flowbite and Tailwind UI?</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                            <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                    <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
                    <div className='max-w-full mx-auto  mt-5 bg-white' >
                        <div>
                            <h1 className='text-[50px] font-bold text-black m-2'>Frequently <span className='text-[#6A1C1A]'>Asked</span> Questions</h1>
                        </div>
                        {/* <YourComponent /> */}
                    </div>
                </main>
            </div>
            <SiteFooter />
        </>
    )
}