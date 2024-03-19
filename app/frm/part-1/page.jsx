import Link from "next/link"
import Accordion from "../../../components/Accordian";
import Footer from "../../../components/SiteFooter";
import Navbar from "../../../components/SiteHeader";

export default function page() {
  const buttonsData = [
    {
      id: 1,
      text: "What is the format of the FRM Part 1 exam?",
      data: "The FRM Part 1 exam is a computer-based test consisting of 100 multiple-choice questions. Candidates have four hours to complete the exam. There is no negative marking for wrong answers. The questions are designed to test your knowledge of the foundational concepts of risk management covered in the curriculum.",
    },
    {
      id: 2,
      text: "What are the benefits of pursuing FRM Level 1 ?",
      data: "FRM certification enhances career opportunities in risk management, finance, and related fields. It validates your expertise in risk analysis and can lead to higher-paying positions in areas such as risk consulting, investment management, and financial analysis.The FRM level 1 builds a strong foundation for this and equips you with risk management skills.",
    },
    {
      id: 3,
      text: "How long does it take to prepare for FRM level 1 exam ?",
      data: "The amount of time it takes to prepare for the Financial Risk Manager (FRM) Level 1 exam can vary depending on a number of factors, such as your prior knowledge of the subject matter, your study habits, and the amount of time you can dedicate to studying each day. Generally, it is recommended to dedicate at least 400-500 hours of study time to prepare for the exam. This could take anywhere from a few months to a year or more, depending on your individual circumstances. It’s important to create a study plan and stick to it in order to ensure you are adequately prepared for the exam.",
    },
    {
      id: 4,
      text: "Does FRM level 1 need a strong mathematical background ?",
      data: "While a mathematics background is not a strict requirement for FRM Level 1, having a solid understanding of basic mathematical concepts can be beneficial. The FRM exam, particularly in the quantitative analysis section, involves topics such as probability, statistics, and financial mathematics. Candidates with a mathematical background may find it easier to grasp these concepts. However, GARP (Global Association of Risk Professionals), the organization that administers the FRM exams, designs the test to be accessible to individuals from various educational backgrounds. The focus is on practical knowledge and skills in financial risk management. Many candidates with diverse educational backgrounds, including finance, economics, and business, successfully pass the FRM Level 1 exam through diligent preparation and study of the recommended materials.",
    },
    {
      id: 5,
      text: "How long is the FRM Part 1 valid for after passing it ?",
      data: "The FRM Part 1 exam is valid for a period of 4 years. Candidates must pass the FRM Part 2 exam before this period is over to earn FRM designation, otherwise, they will have to reappear for the FRM Part 1 exam.",
    },
  ];

  return (
    <>

    <Navbar/>
      <div className=" bg-[#8e381c] ">
        <h1 className="text-[24px] md:text-[32px] font-[40px]  text-white text-center py-2">
          Financial Risk Management [FRM] Part-1
        </h1>
      </div>

      <div className="w-[90%] sm:w-[80%] sm:text-left mx-auto">
        <div className="my-6">
          <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
            Eligibility and/or Pre-Requisites
          </span>
          <p className="text-[16px] sm:text-[20px] pb-5">
            The FRM course welcomes candidates from various academic
            backgrounds, without any specific educational field prerequisites.
            There are NO ELIGLIBILITY CRITERIA for potential candidates; even
            those in the early stages of their undergraduate education can
            embark on the FRM journey by taking the Part 1 examination.
          </p>
        </div>

        <div className=" pt-2">
          <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
            About the Exam - FRM Part 1
          </span>
          <p className="text-[16px] sm:text-[20px] pb-5">
            FRM Part 1 is the first level of the Financial Risk Manager (FRM)
            certification offered by the Global Association of Risk
            Professionals (GARP). It involves an examination that assesses
            candidates&apos; understanding of foundational concepts in risk
            management This encompasses a comprehensive exploration of
            quantitative analysis, fundamental concepts in risk management, the
            intricacies of financial markets and products, and the application
            of valuation and risk models. The examination assesses
            candidates&apos; proficiency in these core areas, laying the
            foundation for a solid understanding of risk management principles
            and practices in the financial domain.Various modules carry
            different weights in the exam, and to pass FRM Part 1, a minimum
            score is required in each module. The specific weightage for each
            module in the exam is as follows:
          </p>
          <ol className=" list-inside list-decimal  mx-2">
            <li className="text-[16px] md:text-[20px]">
              <b>Foundations of Risk Management (20%):</b> This module lays the
              groundwork for understanding key concepts and principles in risk
              management.
            </li>
            <li className="text-[16px] md:text-[20px]">
              <b>Quantitative Analysis (20%):</b> Focusing on quantitative
              techniques, this module assesses candidates&apos; ability to
              analyze and interpret data for risk management purposes.
            </li>
            <li className="text-[16px] md:text-[20px]">
              <b>Financial Markets and Products (30%): </b>Exploring the
              intricacies of financial markets and various financial
              instruments, this module evaluates candidates&apos; knowledge of
              market structures and products.
            </li>
            <li className="text-[16px] md:text-[20px] mb-4">
              <b>Valuation and Risk Models (30%):</b> This module delves into
              the valuation of financial instruments and the application of risk
              models in assessing and managing risk.
            </li>
          </ol>

          <h2>
            <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2  mb-4">
              1. Foundations of Risk Management
            </span>
          </h2>
          <p className="text-left text-[16px] md:text-[20px] mb-5">
            This module is designed to impart fundamental knowledge of the basis
            of risk management. It introduces the principles and process of risk
            management. It also provides a primer for risk governance, risk
            measurement, and the roles, responsibilities and duties of a
            successful risk manager. Along with best practices for good risk
            management and governance, it also provides insight into past
            financial crises and business failures which were caused due to poor
            risk management.
          </p>
          <h2>
            <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2  mb-4">
              2. Quantitative Analysis
            </span>
          </h2>
          <p className="text-left text-[16px] md:text-[20px] mb-5">
            The main focus of this module is to impart and equip candidates with
            crucial quantitative tools and techniques necessary for risk
            assessment and measurement. It deeply covers topics like probability
            theory, Statistics (Basic as well as advanced), Regression analysis,
            and time series analysis. It also provides a primer for the most
            recent technological developments being used in the industry such as
            machine learning and artificial intelligence.
          </p>
          <h2>
            <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2  mb-4">
              3. Financial Markets and Products
            </span>
          </h2>
          <p className="text-left text-[16px] md:text-[20px] mb-5">
            This module attempts to provide a detailed overview of various
            financial instruments including derivatives, securities, and
            structured products. The module aims to provide a sound
            understanding of different types of financial assets such as
            fixed-income securities, money market instruments, FX products,
            commodities, derivatives (F&O and swaps, etc), and alternative
            investments such as CDOs, CLOs, ABS, etc. and introduces the concept
            of hedging as an important tool of risk management.
          </p>
          <h2>
            <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2  mb-4">
              4. Valuation and Risk Models
            </span>
          </h2>
          <p className="text-left text-[16px] md:text-[20px] mb-5">
            This module is essential for understanding the valuation of various 
            financial instruments including fixed income, equity, and
            derivatives (Swaps, Options, Eurodollars, dollar roll, etc.)
            valuation. It also provides a basic understanding of risk modelling,
            encompassing interest rate risk, credit risk, and operational risk.
            This module equips candidates with the essential skills to
            accurately value financial instruments and manage associated risks.
          </p>
        </div>

        <div>
          <h2 className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2  mb-4">
            Composition and Exam Structure
          </h2>
          <p className="text-left text-[16px] md:text-[20px] mb-5">
            FRM Part 1 comprises 100 equally weighted questions presented in a
            multiple-choice format on a computer-based test (CBT). In this
            modern and efficient testing experience, you have four hours to
            complete the exam by selecting the correct answers from the provided
            options. The objective is to evaluate your knowledge, application
            abilities, and decision-making skills within a defined timeframe. In
            both GARP FRM exams (Parts 1 and 2), no negative marking is applied.
            Candidates do not face penalties for providing incorrect answers.
          </p>
          
          <h2 className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
            Study Plan
          </h2>
          <p className="text-left text-[16px] md:text-[20px] mb-5">
            Ideally, a candidate preparing for the FRM Part 1 exam should
            complete the whole curriculum in 16 weeks with 30-35 hours of study
            every week. This study plan provides a 16-week road map with
            relevant chapters that should be covered every week It also provides
            a carefully researched chapter sequence that can be followed to
            ensure maximum understanding of the FRM Part 1 curriculum.{" "}
            <Link
              href="https://frm.midhafin.com/part-1/study-plan/"
              className="text-blue-500 hover:text-blue-700"
            >
              Read more…
            </Link>
          </p>
        </div>

        <div className="my-8" style={{ width: "100%", maxWidth: "1200px" }}>
        <div style={{ position: "relative", paddingBottom: "62.5%", height: "0", overflow: "hidden", maxWidth: "100%" }}>
          <iframe
            src="https://www.youtube.com/embed/6sTEUkR40uI?si=sDonMG5jq4orT3Ue"
            title="YouTube video player"
            style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
      

        <div className="mb-9">
          <h2>
            <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2  mb-4">
              Preparation Tips
            </span>
          </h2>
          <p className="text-left text-[16px] md:text-[20px] mb-5">
            Preparing for FRM Part 1 involves careful consideration of several
            crucial aspects. The effective selection and management of these
            factors play a pivotal role in ensuring a robust preparation:
          </p>

          <ol className=" list-inside list-decimal my-5 mx-2">
            <li className="text-[16px] md:text-[20px] mb-4">
              <b>Preparation Window: </b>Allocating a preparation window of at
              least 5 months for FRM Part 1 is advisable.
            </li>
            <li className="text-[16px] md:text-[20px] mb-4">
              <b>Time Required:</b> To achieve thorough preparation, it is
              recommended to dedicate around 600 hours to FRM Part 1. Avoiding
              shortcuts is emphasized to ensure a deep understanding of risk
              management concepts and tools, facilitating ease in answering
              interview questions.
            </li>
            <li className="text-[16px] md:text-[20px] mb-4">
              <b>Material:</b> Choosing the right study material is paramount.
              MidhaFin, as one of the first GARP Authorized Prep Providers for
              FRM, offers comprehensive study material, including over 200 hours
              of content videos, 85 plus hours of question-solving videos, and
              100 plus hours of revision videos.
            </li>
            <li className="text-[16px] md:text-[20px] mb-4">
              <b>Questions:</b> Solving a substantial number of questions is key
              to preparation success. MidhaFin provides question banks with over
              3000 questions, closely aligned with recent exam trends. GARP
              sample paper questions from the past 15 years are also included.
            </li>
            <li className="text-[16px] md:text-[20px] mb-4">
              <b>Periodic Tests:</b> Implementing regular quizzes is integral to
              the active learning philosophy at MidhaFin. Four monthly tests are
              conducted, focusing on the curriculum taught during the respective
              month. Graded tests enable students to monitor their performance
              consistently.
            </li>
            <li className="text-[16px] md:text-[20px] mb-4">
              <b>Mock Tests:</b> MidhaFin conducts 5 mock tests towards the end
              of the preparation period, starting approximately a month before
              the exam. These full-length mock tests cover the entire syllabus
              and are graded, providing quartile analysis similar to the actual
              GARP FRM exams.
            </li>
          </ol>
        </div>

      
       
      </div>
      <div className="mb-5">
      <h2 className="text-center font-semibold">
        <span className="text-white text-2xl p-2 bg-red-950 font-bold">
          Frequently Asked Queries
        </span>
      </h2>

      <Accordion buttonsData={buttonsData} />
    </div>
      <Footer />
    </>
  );
}
