import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";
import Image from 'next/image'
import Accordion from "../components/Accordian";
import Whatsapp from "../components/Whatsapp";
import Platform from "../components/Platform";
import HeroSection from "../components/HeroSection";
import HomeCarousel from "../components/home/ReviewCarousel";
import Features from "../components/Features";


export const metadata = {
    title: "Welcome to MidhaFin",
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
                    <HeroSection/>
                    {/* Review section */}
                    <div className="mx-auto my-5">
                        <h1 className="font-bold text-[40px] text-center my-4"><span className=" border-[#6A1C1A] border-l-[5px] pr-4"></span>Don&apos;t Believe <span className="text-[#6A1C1A]">Us</span> , Hear From Our <span className="text-[#6A1C1A]">Students</span>  </h1>
                        {/* <hr className="w-[60%] mx-auto "/> */}
                        <HomeCarousel/>
                    </div>
                    {/* About section */}
                    <div className='sm:flex mx-auto lg:w-[100%] lg:px-[130px] p-5 py-[50px]  bg-[#FAF4F2]'>
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
                    <Features/>
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
                    <Platform />
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