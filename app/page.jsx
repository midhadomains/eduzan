import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import PlatformFeatures from "../components/home/PlatformFeatures";
import ReviewSection from "../components/home/ReviewSection";
import Accordion from "../components/common/Accordian";
import CoursesOffered from "../components/home/CoursesOffered";
import SocialMedia from "../components/common/SocialMedia";
import Navbar from "../components/common/SiteHeader";
import Footer from "../components/common/SiteFooter";

export const metadata = {
  title: "MidhaFin | Best FRM coaching in India",
  description: "Explore our Wide Range of Courses,The Best FRM,CFA, and PRM coaching in India - MidhaFin,Boost your finance career with expert guidance and comprehensive study materials ",
  keywords: [
    "best frm courses",
    " best frm course in india,best frm courses online",
    "frm certification",
    "frm exam",
    "best frm coaching",
    "best frm coaching online",
    "best frm coaching in bangalore",
    "best frm coaching in mumbai",
    "best frm coaching in india",
    "best frm coaching in kolkata",
    "best frm coaching in chennai",
    "best frm coaching institute in india",
    "best frm online coaching in india",
    "best frm coaching in india quora",
    "best coaching for frm",
    "best coaching for frm in india",
    "best online coaching for frm",
    "Top-rated FRM coaching",
    "Best FRM coaching institutes with high pass rates",
    "cfa",
    "cfa exam",
    "about cfa course",
    "best cfa prep course",
    "best cfa coaching in india",
    "cfa exam prep",
    "cfa exam registration",
    "cfa exam level 1",
    "best way to prepare for cfa exam",
    "best ways to study for the cfa exam",
  ],
};

const JsonLDCourse = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Financial Risk Manager (FRM) Part-1 Self paced Course",
      "description": "Prepare for the FRM Part-1 exam with this comprehensive course.",
      "provider": {
        "@type": "Organization",
        "name": "MidhaFin",
        "sameAs": "https://www.midhafin.com/"
      },
      "image": [
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_1_1.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_4_3.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_16_9.webp"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "bestRating": 5,
        "ratingValue": "4.5",
        "reviewCount": "225"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "duration": "PT257H",
        "courseWorkload": "PT257H"
      },
      "offers": [{
        "@type": "Offer",
        "category": "Paid",
        "price": 17523,
        "priceCurrency": "INR",
        "url": "https://edu.midhafin.com/courses/FRM-Part-1-Self-Paced-Course"
      }]
    },
    {
      "@type": "Course",
      "name": "Financial Risk Manager (FRM) part-1 Live Online Classes",
      "description": "Prepare for the FRM Part-1 exam with this advanced course.",
      "provider": {
        "@type": "Organization",
        "name": "MidhaFin",
        "sameAs": "https://www.midhafin.com/"
      },
      "image": [
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_1_1.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_4_3.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_16_9.webp"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "bestRating": 5,
        "ratingValue": "4.5",
        "reviewCount": "225"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "duration": "PT290H",
        "courseWorkload": "PT290H"
      },
      "offers": [{
        "@type": "Offer",
        "category": "Paid",
        "price": 23364,
        "priceCurrency": "INR",
        "url": "https://edu.midhafin.com/courses/FRM-Part-1-Live-Online-Classes"

      }]
    },
    {
      "@type": "Course",
      "name": "Financial Risk Manager (FRM) part-1 One-on-One Guidance",
      "description": "Prepare for the FRM Part-1 exam with this advanced course.",
      "provider": {
        "@type": "Organization",
        "name": "MidhaFin",
        "sameAs": "https://www.midhafin.com/"
      },
      "image": [
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_1_1.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_4_3.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_16_9.webp"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "bestRating": 5,
        "ratingValue": "4.5",
        "reviewCount": "220"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "courseWorkload": "PT10H"
      },
      "offers": [{
        "@type": "Offer",
        "category": "free",
        "price": 0,
        "priceCurrency": "INR",
        "url": "https://edu.midhafin.com/courses/FRM-Part-1-One-to-One-Classes"

      }]
    },
    {
      "@type": "Course",
      "name": "Financial Risk Manager (FRM) part-1 Sample Course",
      "description": "Prepare for the FRM Part-1 exam with this advanced course.",
      "provider": {
        "@type": "Organization",
        "name": "MidhaFin",
        "sameAs": "https://www.midhafin.com/"
      },
      "image": [
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_1_1.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_4_3.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_16_9.webp"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "bestRating": 5,
        "ratingValue": "4.5",
        "reviewCount": "220"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "duration": "PT12H",
        "courseWorkload": "PT12H"
      },
      "offers": [{
        "@type": "Offer",
        "category": "free",
        "price": 0,
        "priceCurrency": "INR",
        "url": "https://edu.midhafin.com/courses/FRM-Part-1-Live-Online-Classes"

      }]
    },
    {
      "@type": "Course",
      "name": "Financial Risk Manager (FRM) part-2 Self Paced Course",
      "description": "Prepare for the FRM Part-2 exam with this advanced course.",
      "provider": {
        "@type": "Organization",
        "name": "MidhaFin",
        "sameAs": "https://www.midhafin.com/"
      },
      "image": [
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_1_1.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_4_3.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_16_9.webp"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "bestRating": 5,
        "ratingValue": "4.5",
        "reviewCount": "220"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "duration": "PT240H",
        "courseWorkload": "PT240H"
      },
      "offers": [{
        "@type": "Offer",
        "category": "Paid",
        "price": 17523,
        "priceCurrency": "INR",
        "url": "https://edu.midhafin.com/courses/FRM-Part-2-Self-Paced-Course"

      }]
    },
    {
      "@type": "Course",
      "name": "Financial Risk Manager (FRM) part 1-2 Combined Self Paced Course",
      "description": "Prepare for the FRM Part-2 exam with this advanced course.",
      "provider": {
        "@type": "Organization",
        "name": "MidhaFin",
        "sameAs": "https://www.midhafin.com/"
      },
      "image": [
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_1_1.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_4_3.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_16_9.webp"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "bestRating": 5,
        "ratingValue": "4.5",
        "reviewCount": "220"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "duration": "PT450H",
        "courseWorkload": "PT450H"
      },
      "offers": [{
        "@type": "Offer",
        "category": "Paid",
        "price": 54693,
        "priceCurrency": "INR",
        "url": "https://edu.midhafin.com/courses/FRM-Part-1-and-Part-2-Combined-Self-Paced-Course"

      }]
    },
    {
      "@type": "Course",
      "name": "Financial Risk Manager (FRM) part-2 Sample Course",
      "description": "Prepare for the FRM Part-2 exam with this advanced course.",
      "provider": {
        "@type": "Organization",
        "name": "MidhaFin",
        "sameAs": "https://www.midhafin.com/"
      },
      "image": [
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_1_1.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_4_3.webp",
        "https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/SERP+SEO/serp_16_9.webp"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "bestRating": 5,
        "ratingValue": "4.5",
        "reviewCount": "220"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "duration": "PT12H",
        "courseWorkload": "PT12H"
      },
      "offers": [{
        "@type": "Offer",
        "category": "free",
        "price": 0,
        "priceCurrency": "INR",
        "url": "https://edu.midhafin.com/courses/FRM-Part-1-and-Part-2-Combined-Self-Paced-Course"
      }]
    }
  ]
}

export default async function Home() {
  const buttonsData = [
    {
      id: 1,
      text: "What is the Objective of MidhaFin?",
      data: "MidhaFin is a GARP® authorized Training provider for FRM® Part 1 and Part 2 Exams. The objective of MidhaFin is to help candidates build strong foundational and practical understanding of the curriculum of FRM® which would help them to most likely pass the FRM® exam.",
    },
    {
      id: 2,
      text: "What is sample Course?",
      data: "Sample course is a free course and contains more than 9 hours 4 min of video covering chapters from all modules, and some samples of study materials.",
    },
    {
      id: 3,
      text: "Are the materials provided by MidhaFin is sufficient to pass FRM® Exam?",
      data: "Our material is more than enough for passing the exam .. And it's quite detailed .. We have prepared it according to the official GARP curriculum. It highly recommended to use our material as the primary source of preparation.",
    },
    {
      id: 4,
      text: "For how long will the candidate have the access to the package?",
      data: "The candidates will have access to all the resources until they pass the exam, provided they are still preparing for it. The best part is that the candidate will always have access to the updated material and resources. The access will not be limited to the resources that the candidate was provided during the time of enrolment.",
    },
    {
      id: 5,
      text: "Is it possible to view the content in the offline mode?",
      data: "Yes, candidates can have offline access to all the content through our Android or IOS app. Android app can be downloaded from the google play store and IOS app can be downloaded from the Apple store.",
    },
    {
      id: 6,
      text: "Are the materials updated according to the current FRM® curriculum?",
      data: "Our material is up-to-date and in strict accordance with the official curriculum of FRM®.",
    },
    {
      id: 7,
      text: "Will the candidate get hard copy or soft copy of the study materials, question banks, mocks, and periodic tests?",
      data: "The candidates will receive only soft copies of all the text materials such as study materials, question banks, mock tests, periodic tests. Apart from study materials, all other contents have a view only access. Candidate can take the print out of only the study materials, all else has to viewed through either the application or the website.",
    },
    {
      id: 8,
      text: "What support candidate can expect from us after enrolling for a course?",
      data: "We take great pride in our support system and it is our USP. A candidate can ask unlimited doubts (be it academic, general, or technical). All the doubts are answered by a team member having expertise in that domain.",
    },
    {
      id: 9,
      text: "What is the procedure to get the refund?",
      data: "For information on our refund policy you can refer to the Refund Policy Page",
    },
    {
      id: 10,
      text: "What is the process for upgradation from self-paced course (TP 1) to live classes (TP 2)?",
      data: "In order to upgrade your package you can contact our support team by sending an email to the following email id - midhafin@gmail.com or you can connect with us directly via WhatsApp on +91-91551-99555.",
    },
    {
      id: 11,
      text: "Where can the candidate find the purchase receipt?",
      data: "Once you purchase the course an purchase receipt is automatically sent to the registered e-mail of the candidate.",
    },
    {
      id: 12,
      text: "What are the discounts available on various packages offered by MidhaFin?",
      data: "Generally discounts are automatically applied at the time of checkout. For more information you can contact our support team through e-mail, or WhatsApp",
    },
    {
      id: 13,
      text: "Are the prices of different packages inclusive of all taxes?",
      data: "The prices do not include the taxes (if any) and these are automatically added at the time of checkout.",
    },
  ];

  // const JsonLD = {
  //   "@context": "https://schema.org",
  //   "@type": "FAQPage",
  //   "mainEntity": buttonsData.map(faq => ({
  //     "@type": "Question",
  //     "name": faq.text,
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": faq.data
  //     }
  //   }))
  // };

  return (
    <>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLD) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLDCourse) }} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:title" content="MidhaFin:- FRM Exam prep provider" />
        <meta property="og:description" content="Boost Your Career In Finance" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Midhafin" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.midhafin.com/" />
        <meta property="og:image.url" content="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/open-graph-snippet_600*336.png.png" />
        <meta property="og:image" content="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/open-graph-snippet_600*336.png.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Midhafin" />
        <meta property="og:image:id" content="10" />
        <meta name="twitter:handle" />
        <meta name="x:card" content="summary_large_image" />
        <meta name="x:title" content="MidhaFin:-FRM Exam prep provider" />
        <meta name="x:description" content="Boost Your Career In Finance" />
        <meta name="x:image" content="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/open-graph-snippet_600*336.png.png" />
      </head>

      <div className="select-none">
        <Navbar />
        <main>
          {/* Hero section */}
          <HeroSection />
          {/* About section */}
          <div className="flex flex-wrap lg:flex-nowrap  justify-start  lg:justify-between text-left max-w-[1400px] px-[25px] md:px-[50px] gap-[18px] md:gap-[30px]  w-[100%] mx-auto  sm:mt-[64px] mt-[53px] lg:mt-[74px] ">
            <div className="my-auto">
              <h1 className="lg:text-[3rem]  md:text-[2.5rem]  sm:text-[2rem] text-[1.6rem] font-semibold lg:h-[130px]  leading-tight max-w-[100%]   text-left  text-[#691D1C] tracking-wider lg:max-w-[236px]">
                About <span className="text-[#BE4E1E]">MidhaFin</span>
              </h1>
              <hr className="block lg:hidden lg:border-4 border-t-[4px] rounded-3xl border-[#BE4E1E]  md:w-[150px] w-[100px] mt-[18px]" />
            </div>
            <div className="hidden  lg:block border-[#BE4E1E] h-[218px] border-l-[5px] my-[51px] rounded-3xl gap-[30px]"></div>
            <div className=" max-w-[900px]   flex flex-col gap-[16px] lg:my-auto mb-2">
              <h2 className="lg:text-[32px] md:text-[22px] text-[16px] font-semibold leading-[24px] lg:leading-[40px]	tracking-wide ">
                MidhaFin focuses on{" "}
                <span className="text-[#BE4E1E]">Personalized Learning,</span>{" "}
                Expertise and Employability.
              </h2>
              <p className="leading-[24px] tracking-wide  md:leading-[28px] lg:leading-[32.63px] text-[14px] md:text-[16px] lg:text-[20px]">
                In finance, desired skills are rare but not jobs! Become
                employable by pursuing the most reputed and admired courses in
                the industry, under the expert guidance of MidhaFin.
              </p>
              <Link href="about-us">
                <h2 className="lg:text-[20px] text-[16px]  font-semibold leading-tight	text-[#BE4E1E] flex lg:mb-0 mb-[37px] ">
                  More About Us <FaChevronRight className="my-auto ml-2 " />
                </h2>
              </Link>
            </div>
          </div>
          {/* Features section */}
          <FeaturesSection />
          {/* Courses Section */}
          {/* Platform Features section */}
          <PlatformFeatures />
          {/* Reviews section  */}
          {/* <ReviewSection /> */}
          {/* faqs Section */}
          <div className="mx-auto mb-9 text-left my-3 max-w-[1400px] md:px-[50px] px-[25px] md:mt-[50px] mt-8">
            <h2 className="lg:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[1.4rem] font-semibold leading-tight mb-[24px] md:mb-[31px] lg:mb-[41px]">
              Frequently Asked Questions{" "}
            </h2>
            {/* <hr className='lg:border-4 border-[3px] rounded-3xl border-[#9A391D]  md:w-[150px] w-[100px] sm:my-8 mt-3  ' /> */}
            <Accordion buttonsData={buttonsData} />
          </div>
          <SocialMedia />

        </main>
        <Footer />
      </div>
    </>
  );
}



