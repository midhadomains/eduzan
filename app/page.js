import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";
import Image from 'next/image'
import Accordion from "../components/Accordian";
import HomeCarousel from "../components/ReviewCarousel";
import Whatsapp from "../components/Whatsapp";
import Platform from "../components/Platform";


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
                <Whatsapp className="" />
                {/* <SiteHeader className="z-10 relative" /> */}
                <main>
                    {/* Hero section */}
                    <div className='max-w-full sm:flex justify-center bg-[#FAF4F2] p-5 text-center'>
                        <div className='flex flex-col item-center m-5 justify-around sm:w-[60%] lg:w-[45%] w-[100%]  mx-auto '>
                            <h1 className=' text-[27px] sm:text-[28px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px;'><span className='text-[#6A1C1A]'>Boost your career </span> in <span className='text-[#6A1C1A]'>Finance</span> with  mentorship you can bank on <span className='text-[#6A1C1A]'>!</span></h1>
                            <p className=' w-[100%] lg:w-[95%] xl:w-[70%] text-[#391601] text-[1rem] sm:text-lg  lg:text-xl mx-auto '>Step up your career by acquiring the desirable skills and leading global certifications in Finance.</p>
                            <div className='flex mt-5 justify-center'>
                                <Link href="https://midhafin.ongraphy.com/s/authenicate" >
                                    <button className='text-sm sm:text-md lg:text-xl bg-[#6A1C1A] rounded text-white hover:bg-black py-3 px-2 sm:px-4 md:px-3 lg:px-4 m-2 ease-in duration-300  '>SIGNUP NOW</button>
                                </Link>
                                <Link href="https://midhafin.ongraphy.com/s/store">
                                    <button className='text-sm sm:text-md lg:text-xl bg-[#6A1C1A] rounded text-white hover:bg-black py-3 px-2 sm:px-4 md:px-3 lg:px-4 m-2'>EXPLORE COURSES</button>
                                </Link>
                            </div>
                        </div>
                        <div className='sm:w-[40%] my-auto'>
                            <Image width={500} height={300} className='p-5 h-auto my-auto' src="/Micky-Banner.png" alt="Micky Midha" priority />
                        </div>
                    </div>
                    {/* Review section */}
                    {/* <div className="w-[100%] mx-auto">
                        <h1 className="font-bold text-[40px] text-center">Don&apos;t believe us, Hear from Our students</h1>
                        <HomeCarousel/>
                    </div> */}
                    {/* <hr className="w-[80%] mx-auto my-2" /> */}
                    {/* About section */}
                    <div className='sm:flex mx-auto lg:w-[80%] p-5 '>
                        <div className='sm:w-[40%] my-auto text-left'>
                            <h1 className='text-[30px] sm:text-[35px] md:text-[40px] text-bold ml-[5%]  md:ml-[10%] lg:ml-[20%] mb-0'>About </h1>
                            <h1 className='text-[40px] sm:text-[40px] md:text-[40px]  ml-[5%] md:ml-[10%] lg:ml-[20%] text-[#6A1C1A] font-bold'>MidhaFin</h1>

                        </div>
                        <div className='sm:w-[60%] pl-4 sm:pl-[10%] ms:pl-[5%] lg:pl-[7%] border-[#6A1C1A] sm:border-l-4'>
                            <h1 className='font-bold text-[20px] sm:text-[30px] text-left'>MidhaFin focuses on <span className='text-[#6A1C1A] '>Personalized</span> Learning,<br /> Expertise and Employability.</h1>
                            <p className='text-[#2C1E02] text-left'>In finance, desired skills are rare but not jobs! Become employable by pursuing the most reputed and admired courses in the industry, under the expert guidance of MidhaFin.</p>
                        </div>
                    </div>
                    {/* Features section */}
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-4 w-[92%] sm:w-[75%] mx-auto gap-[50px] mt-5 text-center'>
                        <div className=' shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5EE] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
                            <Image width={200} height={200} className='mx-auto w-40 sm:w-[220px] h-auto ' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/Industry-Experienced-Faculty-Graphic-qjjuf83k7rt50cqg3kt9xdovai3nhfwrev0ssglf5s.png" alt="Industry Experienced Faculty" />
                            <hr className='my-3' />
                            <h1 className='text-2xl text-bold text-[#6A1C1A] text-center'>Industry Experienced Faculty</h1>
                            <p className=' '>Our faculty is extremely well trained and have real industry experience. They have taught hundreds of students and have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in and that we are often complimented upon by our students.</p>
                        </div>
                        <div className=' shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5E] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
                            <Image width={170} height={170} className=' mx-auto w-30 sm:w-[170px] h-30' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/Systematic-Doubt-Solving-Graphic-qjjuf4c7gfnzpwvwpj6rnen0wym6mnhu2ceuvcqzuo.png" alt="Systematic Doubt Solving" />
                            <hr className='my-3' />
                            <h1 className='text-2xl text-bold text-[#6A1C1A] text-center'>Systematic Doubt Solving</h1>
                            <p className=' '>We believe curiosity is the mother of all inventions, and so we ensure every single relevant doubt of every single student is cleared within reasonable time frame. Our faculty encourages students to ask doubts and for them no doubt is small or silly. Relevant doubts from other sources are also answered by our faculty and we provide in depth and easy to understand solutions to our students.</p>
                        </div>
                        <div className=' shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 bg-[#FFF5EE] hover:-translate-y-1 hover:scale-110 hover:bg-[#fffbfb] duration-300'>
                            <Image width={165} height={165} className=' mx-auto w-25 h-auto' src="https://home.midhafin.com/wp-content/uploads/elementor/thumbs/End-to-End-Mentorship-Graphic-qjjuetzzd99u67axdwpvdz8ydq159zcscx8ilb6br4.png" alt="End to End Mentorship" />
                            <hr className='my-3' />
                            <h1 className='text-2xl text-bold text-[#6A1C1A] text-center'>End to End Mentorship</h1>
                            <p className=''>The relationship between our instructors and our students is not just that of instruction and teaching but also of mentorship. We help students throughout the process of learning and even beyond. From study planning, to the exam, to the relevant job interviews, we are there at every step with our students.</p>
                        </div>
                    </div>
                    {/* Play Store section */}
                    <div className=' w-[100%] sm:flex justify-around md:max-w-[90%] lg:max-w-[80%] mx-auto p-5 my-9'>
                        <div className='sm:w-[50%] py-auto my-auto'>
                            <Image width={500} height={100} src="https://home.midhafin.com/wp-content/uploads/2024/02/Download-our-app.png" alt="Mobile and Laptop pic" />
                        </div>
                        <div className='sm:w-[50%] my-auto pt-5 sm:pt-1 text-center ' >
                            <p className='text-[#6A1C1A]'>iOS & Android</p>
                            <h1 className='text-[30px] text-[#391701] font-bold'>Download the Mobile App</h1>
                            <p className='text-[#6A1C1A]'>MidhaFin is a free to download app</p>
                            <div className='flex'>
                                <Link href="https://play.google.com/store/search?q=Midhafin&c=apps&hl=en_IN&gl=US" target="_blank" className="m-5 hover:opacity-[0.75]"><Image width={300} height={100} src="https://home.midhafin.com/wp-content/uploads/2024/02/Google-Play-Button.png" alt="google play store" /></Link>
                                <Link href="https://apps.apple.com/in/app/midhafin-cfa-frm-prm/id6463192627" target="_blank" className="m-5 hover:opacity-[0.75]"><Image width={300} height={100} src="https://home.midhafin.com/wp-content/uploads/2024/02/iOS-download-Button.png" alt="app store" /></Link>
                            </div>
                        </div>
                    </div>
                    {/* Our Platform Features */}
                    <Platform/>
                    {/* FAQs  Section */}
                    <div className='max-w-[100%] mx-auto  mt-5 bg-white' >
                        <div>
                            <h1 className='text-[40px] md:text-[50px] text-center font-bold text-black m-2'>Frequently <span className='text-[#6A1C1A]'>Asked</span> Questions</h1>
                        </div>
                        {/* <hr className="max-w-[90%] mx-auto"/> */}
                        <div>
                            <Accordion />
                        </div>
                    </div>
                </main>
            </div>
            <SiteFooter />
        </>
    )
}