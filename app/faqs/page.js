import Footer from '../../components/common/SiteFooter';
import Navbar from '../../components/common/SiteHeader';
import Accordion from '../../components/common/Accordian';
import Link from 'next/link';

export const metadata = {
    title: "FAQs- MidhaFin | Get Answers to Your Questions",
    description: "Get answers to all your FRM-related questions. Our experts are here to help you with detailed explanations and solutions to ensure your success in the FRM exams.",
    keywords: [
        "MidhaFin",
        "Doubt Solving Forum",
        "faq",
        "FRM Questions",
        "Expert Answers",
        "Student Forum",
        "FRM Doubts",
        "Exam Help",
        "Finance Education",
        "FRM Certification",
        "Study Support"
    ]
};


export default function Page() {
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

    const JsonLD = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": buttonsData.map(faq => ({
            "@type": "Question",
            "name": faq.text,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.data
            }
        }))
    };


    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLD) }} />
            <div className="select-none">
                <Navbar />
                <div className="h-40 bg-red-950 ">
                    <h1 className="text-4xl font-style:normal font-bold text-white pt-6 pl-28">FAQs</h1>
                    <p className="text-white pt-6 pl-28">
                        <Link href="https://www.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f">Home</Link> /
                        <Link href="https://www.midhafin.com/faqs">
                            &nbsp; Frequently Asked Questions
                        </Link>
                    </p>
                </div>
                <div className="center-container">
                    <h1 className="lg:text-4xl sm:text-3xl font-style:normal text-center font-bold lg:pt-6 sm:pt-4">
                        Frequently <span style={{ color: '#8B4513' }}>Asked </span> Questions
                    </h1>
                    <br />
                    <p className=" text-lg lg:pl-[30%] lg:pr-[30%] text-center sm:pl-[5%] sm:pr-[5%] ">
                        We at MidhaFin, focus on striking a careful balance, between Knowledge and Relevance,
                        between theory and analytics & between pure concepts and practical application.
                    </p>
                    <Accordion buttonsData={buttonsData} />
                </div>
                <Footer />
            </div>
        </>
    );
}