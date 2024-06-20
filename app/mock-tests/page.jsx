import React from "react";
import Image from "next/image";
import Footer from '../../components/common/SiteFooter';
import Navbar from '../../components/common/SiteHeader';
import Link from "next/link";
import { RiArrowDownSFill } from "react-icons/ri";

export const metadata = {
  title: "Mock Tests - MidhaFin | Ace Your FRM Exams with Practice",
  description: "Prepare for your FRM exams with MidhaFin's comprehensive mock tests. Practice with real exam scenarios and improve your chances of success with our expertly crafted test series.",
  keyword: [
    "MidhaFin",
    "Mock Tests",
    "FRM Exam Preparation",
    "Practice Tests",
    "Financial Risk Manager",
    "Test Series",
    "FRM Certification",
    "Finance Practice Exams",
    "Online Mock Tests"
  ]
};


const MyComponents4 = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1400px] px-[25px] lg:px-[50px] mx-auto ">
        <p className=" font-medium text-[16px] md:text-[20px] lg:text-[24px] text-center sm:text-left mt-[16px] sm:mt-[40px] ">
          Features
        </p>
        <h1 className="pointer-events-none select-none font-bold text-[24px]  md:text-[38px] lg:text-[45px] text-[#691D1C] text-center sm:text-left mb-[23px] md:mb-[33px] lg:mb-[46px]">
          Mock <span className="text-[#BE4E1E]">Tests</span>{" "}
        </h1>
        <div className="md:flex justify-around  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
          <div className="md:w-[50%] bg-[#F9F6EB] flex rounded-t-xl  sm:rounded-none sm:rounded-l-xl  p-5 ">
            <Image
              src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/public/Mock-Tests.png"
              className="m-auto block w-full max-w-[450px] md:max-w-[700px] pointer-events-none select-none"
              width={550}
              height={360}
              alt='Mock Tests'
            />
          </div>
          <div className="md:w-[50%] p-[16px] sm:p-[25px] md:p-[20px] xl:p-[65px] ">
            <div className="max-w-[520px]  w-fit mx-auto h-auto pointer-events-none select-none">
              <div>
                <h1 className="font-bold text-[16px] sm:text-[20px] lg:text-[24px] text-[#BE4E1E] pointer-events-none select-none">
                  Exclusive to MidhaFin Candidates:
                </h1>
                <p className="lg:text-[20px] sm:text-[16px] text-[14px] pointer-events-none select-none">
                  {" "}
                  Our mock tests are an integral part of the training package,
                  provided at no extra cost to ensure seamless preparation.
                </p>
              </div>
              <div className="mt-4">
                <h1 className="font-bold text-[16px] sm:text-[20px] lg:text-[24px] text-[#691D1C]">
                  Not a MidhaFin candidate?{" "}
                  <span className="text-[#BE4E1E]">No problem!</span>{" "}
                </h1>
                <p className="lg:text-[20px] sm:text-[16px] text-[14px] ">
                  {" "}
                  Access our expertly crafted mock tests for a nominal fee and start preparing with the best.
                </p>
              </div>
            </div>

            <h1 className="mx-auto flex justify-center  md:block w-auto">
              <Link href="https://edu.midhafin.com/courses/FRM-Part-1-Mock-Tests-6353e9d2e4b0f18ec4f5f154">
                <button className="select-none mt-[18px] md:[30px] text-center lg:mt-[65px] h-[40.92px] md:h-[54px] lg:h-[68px]  w-[201px] md:w-[280px] lg:w-[334px] mx-auto rounded-[112px] bg-gradient-to-r from-orange-500 to-yellow-400">
                  <span className="font-semibold lg:text-[28px] text-[#FFFFFF]">
                    View Details
                  </span>{" "}
                </button>
              </Link>
            </h1>
          </div>
        </div>
     

        <div id="scroll-target">
          <div className="max-w-[1000px] mx-auto my-[62px] pointer-events-none select-none">
            <p className="text-[14px] sm:text-[16px] lg:text-[20px] leading-[2rem] tracking-wide">
              Our philosophy involves learning through application. Mock test,
              both sectional and full-length, are important components of the
              FRM®/CFA/PRM study process at MidhaFin. <br />
              During the FRM®/CFA/PRM preparations,{" "}
              <span className="text-[#2E3442] font-bold">
                we conduct frequent sectional mock papers which ensures that any
                new information acquired by the student is adequately tested
              </span>{" "}
              as the FRM®/CFA/PRM course.
              <span className="text-[#2E3442] font-bold">
                {" "}
                Starting three weeks before the FRM®/CFA/PRM exam, we conduct
                weekly full-length mock exams
              </span>{" "}
              which are based on the pattern seen in actual previous
              FRM®/CFA/PRM exams. <br />
              Further, we also provide quartiles for our students to help them
              understand their strengths and weaknesses in comparison to other
              FRM®/CFA/PRM students.
            </p>
          </div>

          <div className="max-w-[540px] mx-auto my-[62px] pointer-events-none select-none">
            <Image src="/mock-test.svg" width={540} height={563} alt='Mock-Tests' priority={true} quality={100}/>
          </div>
          <div className="max-w-[1000px] mx-auto my-[62px] pointer-events-none select-none">
            <p className="text-[14px] sm:text-[16px] lg:text-[20px] leading-[2rem] tracking-wide">
              MidhaFin offers weekly full-length mock exams that closely
              replicate the structure and intensity of the actual tests. <br />
              <span className="text-[#2E3442] font-bold">
                These exams are crafted based on patterns observed in previous
                years exams,{" "}
              </span>
              ensuring that participants experience the most realistic
              preparation possible.{" "}
              <span className="text-[#2E3442] font-bold">
                This approach allows candidates to familiarize themselves with
                the exam format,{" "}
              </span>{" "}
              manage their time effectively under exam conditions, and identify
              areas that require further study. <br />
              Alongside rigorous testing,{" "}
              <span className="text-[#2E3442] font-bold">
                our course also includes detailed performance comparison
                metrics.{" "}
              </span>
              These insights reveal each candidate&apos;s strengths and weaknesses
              compared to their peers, directing their focus to areas that need
              strengthening. This strategic guidance is crucial for optimizing
              study efforts and boosting confidence.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MyComponents4;
