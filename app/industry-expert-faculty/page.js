import React from "react";
import Image from "next/image";
import Footer from "../../components/common/SiteFooter";
import Navbar from "../../components/common/SiteHeader";

export const metadata = {
  title: "Industry Expert Faculty - MidhaFin | Learn from the Best in Finance",
  description: "Meet MidhaFin's industry expert faculty. Our seasoned professionals bring years of experience and knowledge to help you excel in FRM exams and finance careers.",
  keyword: ["MidhaFin", "Industry Expert Faculty"," Finance Education", "FRM Certification", "Financial Risk Manager"," Finance Experts"," Online Learning "," Professional Instructors", "Finance Courses"]
};

const IndustryExpertFaculty = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] mx-auto py-4 lg:py-12 px-[20px] lg:px-[40px]">
        <div className="">
          <p className="text-[18px] sm:text-[24px] pl-1 font-semibold text-center lg:text-left leading-7 text-[#842020]">
            Features
          </p>
          <h1 className=" text-[24px] font-bold text-center lg:text-left tracking-tight text-gray-900 sm:text-[50px]">
            <span className="text-[#BE4E1E]">Industry Expert</span>{" "}
            <span className="text-[#6A1C1A]">Faculty</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center lg:items-stretch  gap-10 mt-2 sm:mt-16 xl:mt-8 rounded-2xl shadow-lg">
            <div className="bg-[#F9F6EB] w-[400px] md:w-[680px] h-[250px] md:h-[300px] xl:h-[500px] rounded-2xl flex items-center justify-center">
              <Image
                src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/Our+Platform+Features/Industry+Expert+Faculty/Industry+Expert+Faculty.webp"
                alt="industry-expert-faculty"
                className=""
                width={600}
                height={400}
                quality={100}
              />
            </div>

            <div className="text-[14px] sm:text-[20px] max-w-[500px] my-5 md:my-14 xl:my-auto -mt-4 sm:-mt-0 leading-[28px] sm:leading-[39px] px-5">
              <p>
                We are proud to have industry-expert{" "}
                <span className="font-bold">
                  faculty members who are FRM@/CFA/PRM certified{" "}
                </span>
                and bring a wealth of experience and knowledge to the classroom.
              </p>

              <p>
                With their extensive industry backgrounds and deep understanding
                of the FRM® curriculum, our faculty members are well-equipped to
                guide candidates towards success.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-[945px] mx-auto">
            <p className="font-bold text-[14px] sm:text-[20px] text-left ">
              Our faculty&apos;s excellent teaching style ensures that complex
              concepts are presented in a clear and engaging manner.{" "}
            </p>
            <div className="flex flex-col mt-6 text-[14px] sm:text-[18px]">
              <div className="flex items-center gap-2">
                <Image
                  src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/Our+Platform+Features/Industry+Expert+Faculty/Industry+Expert+Faculty+First+point+Icon+1.webp"
                  alt="icon-img"
                  width={70}
                  height={70}
                  quality={100}
                />
                <p className="mt-4 sm:mt-0">
                  They go beyond textbook explanations, highlighting the
                  intricate connections between theory & practice.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/Our+Platform+Features/Industry+Expert+Faculty/Industry+Expert+Faculty+First+point+Icon+2.webp"
                  alt="icon-img"
                  width={70}
                  height={70}
                  quality={100}
                />
                <p className="mt-4 sm:mt-0">
                  By drawing on real-world examples and case studies, they help
                  candidates grasp the practical implications of the concepts
                  they learn, perspectives that go beyond the syllabus.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/Our+Platform+Features/Industry+Expert+Faculty/Industry+Expert+Faculty+First+point+Icon+3.webp"
                  alt="icon-img"
                  width={70}
                  height={70}
                  quality={100}
                />
                <p className="mt-4 sm:mt-0">
                  They inspire and motivate students to think critically and
                  apply their knowledge in real-world scenarios.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/Our+Platform+Features/Industry+Expert+Faculty/Industry+Expert+Faculty+First+point+Icon+4.webp"
                  alt="icon-img"
                  width={70}
                  height={70}
                  quality={100}
                />
                <p className="mt-4 sm:mt-0">
                  When you learn from our industry expert faculty, you can be
                  confident that you are receiving top-quality education that
                  prepared you for the challenges and opportunities in the field
                  of FRM®.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default IndustryExpertFaculty;
