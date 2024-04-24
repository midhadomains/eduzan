import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";
import Whatsapp from "../components/Whatsapp";
import { FaChevronRight } from "react-icons/fa";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import PlatformFeatures from "../components/home/PlatformFeatures";
import Accordion from "../components/Accordian";
import ReviewCarousel from "../components/card";
import ReviewSection from "../components/home/ReviewSection";



export const metadata = {
    title: "Welcome to MidhaFin",
    description: "MidhaFin Home , Explore our Wide Range of Courses "
}

export default async function Home() {
    const buttonsData = [
        { id: 1, text: 'What is the Objective of MidhaFin?', data: 'MidhaFin is a GARP® authorized Training provider for FRM® Part 1 and Part 2 Exams. The objective of MidhaFin is to help candidates build strong foundational and practical understanding of the curriculum of FRM® which would help them to most likely pass the FRM® exam.' },
        { id: 2, text: 'What is sample Course?', data: 'Sample course is a free course and contains more than 9 hours 4 min of video covering chapters from all modules, and some samples of study materials.' },
        { id: 3, text: 'Are the materials provided by MidhaFin is sufficient to pass FRM® Exam?', data: "Our material is more than enough for passing the exam .. And it's quite detailed .. We have prepared it according to the official GARP curriculum. It highly recommended to use our material as the primary source of preparation." },
        { id: 4, text: 'For how long will the candidate have the access to the package?', data: "The candidates will have access to all the resources until they pass the exam, provided they are still preparing for it. The best part is that the candidate will always have access to the updated material and resources. The access will not be limited to the resources that the candidate was provided during the time of enrolment." },
        { id: 5, text: 'Is it possible to view the content in the offline mode?', data: 'Yes, candidates can have offline access to all the content through our Android or IOS app. Android app can be downloaded from the google play store and IOS app can be downloaded from the Apple store.' },
        { id: 6, text: 'Are the materials updated according to the current FRM® curriculum?', data: 'Our material is up-to-date and in strict accordance with the official curriculum of FRM®.' },
        { id: 7, text: 'Will the candidate get hard copy or soft copy of the study materials, question banks, mocks, and periodic tests?', data: 'The candidates will receive only soft copies of all the text materials such as study materials, question banks, mock tests, periodic tests. Apart from study materials, all other contents have a view only access. Candidate can take the print out of only the study materials, all else has to viewed through either the application or the website.' },
        { id: 8, text: 'What support candidate can expect from us after enrolling for a course?', data: "We take great pride in our support system and it is our USP. A candidate can ask unlimited doubts (be it academic, general, or technical). All the doubts are answered by a team member having expertise in that domain." },
        { id: 9, text: 'What is the procedure to get the refund?', data: 'For information on our refund policy you can refer to the Refund Policy Page' },
        { id: 10, text: 'What is the process for upgradation from self-paced course (TP 1) to live classes (TP 2)?', data: 'In order to upgrade your package you can contact our support team by sending an email to the following email id - midhafin@gmail.com or you can connect with us directly via WhatsApp on +91-91551-99555.' },
        { id: 11, text: 'Where can the candidate find the purchase receipt?', data: 'Once you purchase the course an purchase receipt is automatically sent to the registered e-mail of the candidate.' },
        { id: 12, text: 'What are the discounts available on various packages offered by MidhaFin?', data: 'Generally discounts are automatically applied at the time of checkout. For more information you can contact our support team through e-mail, or WhatsApp' },
        { id: 13, text: 'Are the prices of different packages inclusive of all taxes?', data: 'The prices do not include the taxes (if any) and these are automatically added at the time of checkout.' },
    ];

    return (
        <>
            <SiteHeader />
            <div className="">
                <main >
                    {/* Hero section */}
                    <HeroSection />
                    {/* Reviews section  */}
                    <ReviewSection/>
                    {/* About section */}
                    <div className="flex flex-wrap justify-start  lg:justify-between max-w-[1250px] h-auto md:h-[300px]  w-[100%] mx-auto mt-9 px-[14px] sm ">
                        <div className="h-[70px] lg:h-[190px] mb-2 my-auto ">
                            <h1 className="lg:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[1.6rem] font-semibold lg:h-[130px]  leading-tight max-w-[100%] lg:max-w-[200px]  mx-2 lg:px-0  text-center md:text-left my-auto ">About <span className="text-[#6A1C1A]">MidhaFin</span></h1>
                            <hr className='block lg:hidden lg:border-4 border-[3px] rounded-3xl border-[#9A391D]  md:w-[150px] w-[100px] my-3  mb-7 md:mb-0 mx-2' />
                        </div>
                        <div className=" hidden lg:block border border-[#BE4E1E] border-t-0 border-l-[8px] border-r-0 border-b-0 mx-4 rounded-3xl my-6"></div>
                        <div className=" max-w-[700px] my-auto  flex flex-col ny-6 justify-around h-[70%]  mx-2">
                            <h2 className="md:text-[1.75rem] text-[1.2rem] font-semibold leading-tight	 ">MidhaFin focuses on <span className="text-[#BE4E1E]">Personalized Learning,</span> Expertise and Employability.</h2>
                            <p className="my-4">In finance, desired skills are rare but not jobs! Become employable by pursuing the most reputed and admired courses in the industry, under the expert guidance of MidhaFin.</p>
                            <Link href='about-us'><h2 className="md:text-[1.75rem] text-[1.5rem] font-semibold leading-tight	text-[#BE4E1E] flex ">More About Us <FaChevronRight className="my-auto ml-2 " /></h2></Link>
                        </div>
                    </div>
                    {/* Features section */}
                    <FeaturesSection />
                    {/* Platform Features section */}
                    <PlatformFeatures />
                    {/* faqs Section */}
                    <div className='mx-auto mb-9 text-left my-3 max-w-[1300px] px-2 md:mt-[50px] mt-8'>
                        <h2 className='lg:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[1.4rem] font-semibold leading-tight mx-3'>Frequently Asked <span className='text-[#BE4E1E]'> Questions</span> </h2>
                        <hr className='lg:border-4 border-[3px] rounded-3xl border-[#9A391D]  md:w-[150px] w-[100px] sm:my-8 mt-3 mx-3 ' />
                        <Accordion buttonsData={buttonsData} />
                    </div>
                </main>
            </div>
            <SiteFooter />
        </>
    )
}
