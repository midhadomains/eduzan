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

    const buttonsData = [
        { id: 1, text: 'What is the Objective of MidhaFin?', data: 'MidhaFin is a GARP® authorized Training provider for FRM® Part 1 and Part 2 Exams. The objective of MidhaFin is to help candidates build strong foundational and practical understanding of the curriculum of FRM® which would help them to most likely pass the FRM® exam.' },
        { id: 2, text: 'What is sample Course?', data: 'Sample course is a free course and contains more than 9 hours 4 min of video covering chapters from all modules, and some samples of study materials.' },
        { id: 3, text: 'Are the materials provided by MidhaFin is sufficient to pass FRM® Exam?', data: "Our material is more than enough for passing the exam .. And it's quite detailed .. We have prepared it according to the official GARP curriculum. It highly recommended to use our material as the primary source of preparation." },
        { id: 4, text: 'For how long will the candidate have the access to the package?', data: "The candidates will have access to all the resources until they pass the exam, provided they are still preparing for it. The best part is that the candidate will always have access to the updated material and resources. The access will not be limited to the resources that the candidate was provided during the time of enrolment." },
        { id: 5, text: 'Is it possible to view the content in the offline mode?', data: 'Yes, candidates can have offline access to all the content through our Android or IOS app. Android app can be downloaded from the google play store and IOS app can be downloaded from the Apple store.'},
        { id: 6, text: 'Are the materials updated according to the current FRM® curriculum?', data: 'Our material is up-to-date and in strict accordance with the official curriculum of FRM®.' },
        { id: 7, text: 'Will the candidate get hard copy or soft copy of the study materials, question banks, mocks, and periodic tests?', data: 'The candidates will receive only soft copies of all the text materials such as study materials, question banks, mock tests, periodic tests. Apart from study materials, all other contents have a view only access. Candidate can take the print out of only the study materials, all else has to viewed through either the application or the website.'},
        { id: 8, text: 'What support candidate can expect from us after enrolling for a course?', data: "We take great pride in our support system and it is our USP. A candidate can ask unlimited doubts (be it academic, general, or technical). All the doubts are answered by a team member having expertise in that domain."},
        { id: 9, text: 'What is the procedure to get the refund?', data: 'For information on our refund policy you can refer to the Refund Policy Page'} ,
        { id: 10, text: 'What is the process for upgradation from self-paced course (TP 1) to live classes (TP 2)?', data: 'In order to upgrade your package you can contact our support team by sending an email to the following email id - midhafin@gmail.com or you can connect with us directly via WhatsApp on +91-91551-99555.'},
        { id: 11, text: 'Where can the candidate find the purchase receipt?', data: 'Once you purchase the course an purchase receipt is automatically sent to the registered e-mail of the candidate.'} ,
        { id: 12, text: 'What are the discounts available on various packages offered by MidhaFin?', data: 'Generally discounts are automatically applied at the time of checkout. For more information you can contact our support team through e-mail, or WhatsApp'} ,
        { id: 13, text: 'Are the prices of different packages inclusive of all taxes?', data: 'The prices do not include the taxes (if any) and these are automatically added at the time of checkout.'},
    ];

    return (
        <>
            <div className="min-h-screen  relative ">
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
                            <Accordion buttonsData={buttonsData} />
                        </div>
                    </div>
                </main>
            </div>
            <SiteFooter />
        </>
    )
}
