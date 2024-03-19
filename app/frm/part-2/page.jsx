import React from "react";
import Image from "next/image";
import Link from "next/link";
import Accordion from "../../../components/Accordian";
import Footer from "../../../components/SiteFooter";
import Navbar from "../../../components/SiteHeader";

export default function page() {
  const buttonsData = [
    {
      id: 1,
      text: "How is FRM Part 2 different from Part 1?",
      data: "While Part 1 leans towards a foundational and numerical focus, Part 2 takes a turn by placing a greater emphasis on theoretical aspects. What’s intriguing is that, despite the theoretical nature, these aspects in Part 2 are more industry-oriented and practical, offering a unique blend that challenges candidates to apply their theoretical understanding in real-world contexts.Part 2 requires candidates to integrate knowledge from different subjects and apply them in a holistic manner. For instance, questions may necessitate blending concepts from market, credit, and operational risk to provide comprehensive solutions.",
    },
    {
      id: 2,
      text: "What study materials are recommended for preparing for FRM Part 2?",
      data: "MidhaFin’s study materials offer a comprehensive and detailed preparation experience tailored to meet the requirements of FRM Part 2. Crafted in alignment with the official GARP curriculum, our material provides a robust foundation for exam success. It highly recommended to use our material as the primary source of preparation.Our learning materials include lecture videos, complete study materials, revision videos, a doubt-solving forum, an interactive student group, a customized study plan, question bank PDFs, past sample paper questions, five mock tests, module-wise tests, and question-solving videos. This inclusive package ensures a thorough understanding and effective preparation for the exam.",
    },
    {
      id: 3,
      text: "How long does it take to prepare for FRM Part 2?",
      data: "The suggested guideline by the MidhaFin team is 600 hours minimum for FRM Part 2 preparation, and candidates may need to adjust their study timelines based on their prior knowledge, learning pace, and personal commitments. It is advisable to start preparation well in advance to allow for a gradual and thorough understanding of the material.",
    },
    {
      id: 4,
      text: "How often is the FRM Part 2 exam offered?",
      data: "As of 2023, The FRM Part 2 exam is offered thrice a year. Specifically, candidates have the opportunity to take the exam during two one-week exam windows, typically in May and November. And there is a single exam date in August.This schedule allows candidates to plan their preparation and choose a convenient timeframe to sit for the exam. It’s important for candidates to be aware of the specific exam dates for each year and plan their study schedule accordingly to ensure optimal readiness for the FRM Part 2 examination.",
    },
    {
      id: 5,
      text: "What is the customized study plan by MidhaFin ?",
      data: "The customized study plan is a personalized plan that tailors the basic study plan to meet the specific needs of each candidate. This structured plan includes a week-by-week breakdown, module-wise allocation, daily study targets, and utilization of various resources such as study materials, lecture videos, and question banks. The plan emphasizes regular practice, review, and the importance of mock exams to simulate real test conditions. It also provides support through doubt-solving forums and encourages participation in an interactive student group for collaborative learning.The customization is achieved through a dedicated Customized Study Plan (CSP) meeting with our instructor. As soon as candidates enroll in our courses, this meeting ensures that the study plan aligns with their individual learning styles, strengths, and areas that require focused attention. This personalized approach aims to optimize candidates’ preparation for the FRM Part 2 exam, enhancing their overall learning experience and chances of success.",
    },
    {
      id: 6,
      text: "How often is the FRM Part 2 exam offered?",
      data: "As of 2023, The FRM Part 2 exam is offered thrice a year. Specifically, candidates have the opportunity to take the exam during two one-week exam windows, typically in May and November. And there is a single exam date in August.This schedule allows candidates to plan their preparation and choose a convenient timeframe to sit for the exam. It’s important for candidates to be aware of the specific exam dates for each year and plan their study schedule accordingly to ensure optimal readiness for the FRM Part 2 examination.",
    },
  ];

  return (
    <div className=" mx-auto">
      <Navbar />
      <div className="p-2 bg-[#8e381c]">
        <h1 className="text-[24px] md:text-[32px] font-[40px] text-white text-center">
          Financial Risk Management [FRM] Part - 2
        </h1>
      </div>
      <div className=" w-[90%] lg:w-[70%] mx-auto">
        <div>
          <div className="my-3">
            <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
              ELIGIBILITY AND/OR PRE-REQUISITES
            </span>
            <p className="text-[16px] md:text-[20px] pb-5">
              In order for your Part 2 examination to be evaluated, you must
              successfully complete FRM Part 1.
            </p>
          </div>

          <div>
            <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
              ABOUT THE EXAM - FRM PART 2
            </span>
            <p className=" text-left text-[16px] md:text-[20px] pb-4">
              FRM Part 2 is the second level of the Financial Risk Manager (FRM)
              examination, offered by the Global Association of Risk
              Professionals (GARP). This segment of the FRM certification delves
              into practical applications of the knowledge acquired in FRM Part
              1. It offers a more in-depth exploration of key areas, including
              market risk, credit risk, operational, liquidity risk, risk
              management in investment, and a study of current issues in the
              financial markets. There are portions which primarily focus on
              applying the knowledge and concepts acquired in Part 1, and hence
              it is assumed that candidates already possess a foundational
              understanding of the concepts covered in Part 1. But there are
              certain areas of Part 2 that introduce entirely new or more
              advanced concepts that candidates may not have encountered in Part
              1. This signifies that Part 2 combines both the application of
              existing knowledge from Part 1 and the introduction of fresh,
              potentially challenging material.
            </p>
            <p className="text-center text-[16px] md:text-[20px] pb-3">
              FRM Part 2 is composed of six modules, each with its respective
              weighting as follows:
            </p>
            <ol className="list-decimal ml-4 list-inside">
              <li className="text-[16px] md:text-[20px]  font-semibold">
                Market Risk Measurement (MR) (20%){" "}
              </li>
              <li className="text-[16px] md:text-[20px]  font-semibold">
                Credit Risk Measurement and Management (CR) (20%)
              </li>
              <li className="text-[16px] md:text-[20px]  font-semibold">
                Operational Risk and Resiliency (OR) (20%)
              </li>
              <li className="text-[16px] md:text-[20px]  font-semibold">
                Liquidity Risk Measurement (LR) (15%)
              </li>
              <li className="text-[16px] md:text-[20px]  font-semibold">
                Risk Management and Investment Management (RM)(15%)
              </li>
              <li className="text-[16px] md:text-[20px]  font-semibold mb-4">
                Current Issues in Financial Markets (CI)(10%)
              </li>
            </ol>
            <div className="mt-2">
              <ol className="list-decimal list-inside">
                <div>
                  <li className="text-[18px] md:text-[20px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
                    <span className="">
                      Market Risk Measurement and Management (MR)
                    </span>
                  </li>
                  <p className="text-left text-[16px] md:text-[20px] mb-5">
                    This module builds upon the FRM Part 1 curriculum and delves
                    into the challenging realm of market risk. It covers various
                    topics, including VaR and other risk metrics, estimation
                    methods like parametric and non-parametric approaches, VaR
                    mapping, backtesting VaR, coherent risk measures like
                    expected shortfall (ES), Extreme Value Theory (EVT),
                    modeling dependence through correlations and copulas, term
                    structure models of interest rates, volatility with
                    considerations for smiles and term structures, and the
                    Fundamental Review of the Trading Book (FRTB).
                  </p>
                </div>
                <div>
                  <li className="text-[18px] md:text-[20px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
                    Credit Risk Measurement and Management (CR)
                  </li>
                  <p className="text-left text-[16px] md:text-[20px] mb-5">
                    This module is dedicated to assessing and managing the risk
                    of default by borrowers or counterparties. It explores
                    advanced techniques and models such as credit rating
                    methodologies, credit derivatives, and credit portfolio
                    management. Key areas of focus include credit analysis,
                    quantitative methods for assessing default risk, expected
                    and unexpected loss, Credit VaR, counterparty risk, credit
                    derivatives, and structured finance and securitization.
                  </p>
                </div>
                <div>
                  <li className="text-[18px] md:text-[20px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
                    Operational Risk and Resilience (OR)
                  </li>
                  <p className="text-left text-[16px] md:text-[20px] mb-5">
                    This module contains numerous chapters and underwent a
                    significant update in 2023. It covers a wide range of topics
                    with a theoretical and regulatory focus, including
                    operational risk management framework governance,
                    operational risk identification and reporting, risk
                    assessment and mitigation, cyber-resilience and operational
                    resilience, financial crime and fraud-related risks,
                    third-party outsourcing, model risk and validation, stress
                    testing, risk-adjusted return on capital (RAROC), economic
                    capital frameworks, capital planning, and Basel Accords
                    regulatory compliance.
                  </p>
                </div>
                <div>
                  <li className="text-[18px] md:text-[20px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
                    Liquidity and Treasury Risk Measurement and Management (LR)
                  </li>
                  <p className="text-left text-[16px] md:text-[20px] mb-5">
                    This module equips financial institutions with tools to
                    recognize, quantify, and manage liquidity risks. It
                    emphasizes maintaining adequate liquidity levels,
                    implementing effective funding strategies, and aligning with
                    regulatory guidelines. Topics include liquidity risk
                    principles and metrics, liquidity portfolio management,
                    cash-flow modeling, liquidity stress testing, contingency
                    funding plans, funding models, funds transfer pricing,
                    cross-currency funding, balance sheet management, and asset
                    liquidity.
                  </p>
                </div>
                <div>
                  <li className="text-[18px] md:text-[20px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
                    {" "}
                    Risk Management and Investment Management
                  </li>
                  <p className="text-left text-[16px] md:text-[20px] mb-5">
                    This module revisits some content from FRM Part 1 and
                    introduces additional conceptual, numerical, and theoretical
                    chapters. It explores applying risk management techniques to
                    the investment management process, covering factor theory,
                    portfolio construction, risk metrics, risk budgeting,
                    monitoring and performance measurement, portfolio-based
                    performance analysis, and hedge funds.
                  </p>
                </div>
                <div>
                  <li className="text-[18px] md:text-[20px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
                    Current Issues in Financial Markets
                  </li>
                  <p className="text-left text-[16px] md:text-[20px] mb-5 ">
                    This module focuses on significant topics with a substantial
                    impact on financial markets. It includes machine learning
                    (ML) and artificial intelligence (AI), climate risk,
                    inflation risk, and emerging technologies like blockchain,
                    cryptocurrency, and decentralized finance.
                  </p>
                  <div></div>
                </div>
              </ol>
            </div>
          </div>

          <div>
            <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
              COMPOSITION AND EXAM STRUCTURE
            </span>
            <p className="text-left text-[16px] md:text-[20px] mb-5">
              FRM Part 2 consists of 80 questions, all with equal weighting.
              These questions are presented in a multiple-choice format, where
              you choose the correct answer from a set of options. The exam is
              conducted in a computer-based format (CBT), providing a modern and
              efficient testing experience. Candidates are granted a four-hour
              window to complete the examination, during which they navigate
              through the questions and select their responses. This format aims
              to assess candidates’ knowledge, application, and decision-making
              skills within the defined time constraints.
            </p>
          </div>

          <div>
            <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
              STUDY PLAN
            </span>
            <p className="text-left text-[16px] md:text-[20px] mb-5">
              See the study plan. <Link href="#">Click here</Link>
            </p>
          </div>

          <div>
            <span className="text-[18px] md:text-[22px] text-[#6A1C1A] font-bold border-[#6A1C1A] border-l-4 pl-2 mb-4">
              PREPARATION TRICKS
            </span>
            <h3 className="text-[16px] md:text-[20px] text-left mb-5">
              Preparing for FRM Part 2 requires careful consideration and
              effective management of various key issues:
            </h3>
            <ol className="list-decimal list-inside ml-4 mb-5">
              <li className="text-[16px] md:text-[20px] mb-4">
                <span className="font-semibold">Theoretical Nature:</span>{" "}
                Unlike Part 1, FRM Part 2 places a strong emphasis on
                theoretical concepts, necessitating an in-depth understanding of
                risk management models, frameworks, and methodologies. This
                theoretical nature can pose challenges, as candidates need to
                dedicate substantial effort to comprehend and memorize complex
                concepts.
              </li>
              <li className="text-[16px] md:text-[20px] mb-4">
                <span className="font-semibold">Vast Syllabus:</span> The
                breadth of the syllabus in FRM Part 2 is considerable, with over
                100 chapters spread across its six modules. This extensive
                coverage can be overwhelming for candidates, demanding
                comprehensive preparation across all subjects. To succeed,
                candidates must be prepared to cover a wide range of topics.
              </li>
              <li className="text-[16px] md:text-[20px] mb-4">
                <span className="font-semibold">Application-Oriented:</span>{" "}
                Despite its theoretical underpinning, FRM Part 2 is highly
                application-oriented. The exam assesses candidates’ ability to
                apply risk management principles in real-world scenarios.
                Bridging the gap between theory and practice can be challenging,
                as candidates need to demonstrate their capacity to use risk
                management concepts effectively.
              </li>
              <li className="text-[16px] md:text-[20px] mb-4">
                <span className="font-semibold">Integration of Concepts:</span>{" "}
                FRM Part 2 requires candidates to integrate knowledge from
                various subjects and employ them to solve multifaceted risk
                management problems. This integration of concepts is crucial, as
                questions may require blending knowledge from modules covering
                Market, Credit, and Operational Risk. Candidates must understand
                how different risk factors interact and influence
                decision-making to provide comprehensive solutions.
              </li>
              <li className="text-[16px] md:text-[20px] mb-4">
                <span className="font-semibold">Depth of Knowledge:</span> Part
                2 delves deeper into the concepts introduced in Part 1. To
                navigate the heightened complexity of Part 2, candidates must
                have a strong foundation in the concepts from Part 1. A deep
                understanding is crucial, particularly for those who may have
                gaps in their grasp of Part 1 material.
              </li>
              <li className="text-[16px] md:text-[20px] mb-4">
                <span className="font-semibold">Time Management:</span> FRM Part
                2 is a comprehensive exam that assesses candidates across
                multiple subjects. Effective time management during the exam is
                paramount to ensure all questions are answered within the
                allocated timeframe. Candidates need to develop strategies to
                allocate their time wisely across the various sections of the
                exam to maximize their chances of success.
              </li>
            </ol>
            <h3 className="text-[16px] md:text-[20px]">
              Looking for an FRM Prep Provider ?
              <Link className="underline" href="#">
                JOIN US TODAY
              </Link>
            </h3>
          </div>
        </div>
      </div>
      <h2 class="text-center font-semibold"></h2>
      <div className="w-[100%] text-center mt-6 md:w-[80%] mx-auto mb-5">
        <span class="text-white text-2xl p-2 bg-red-950 font-bold">
          Frequently Asked Queries
        </span>
        <Accordion buttonsData={buttonsData} />
      </div>
      <Footer />
    </div>
  );
}
