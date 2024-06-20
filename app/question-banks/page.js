import Image from "next/image";
import Footer from "../../components/common/SiteFooter";
import Navbar from "../../components/common/SiteHeader";
import Link from "next/link";

export const metadata = {
  title: "Question Banks - MidhaFin | Master Your FRM Exam Preparation",
  description: "Enhance your FRM exam preparation with MidhaFin's comprehensive question banks. Practice with a wide range of questions and improve your chances of success in the FRM exams.",
  keywords: [
    "MidhaFin",
    "Question Banks",
    "FRM Exam Preparation",
    "Practice Questions",
    "Financial Risk Manager",
    "Exam Questions",
    "FRM Certification",
    "Finance Question Banks",
    "FRM Practice Tests",
    "FRM Study Material"
  ]
};


const MyComponents3 = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] mx-auto py-4 lg:py-20 px-[20px] lg:px-[40px]">
        <div className=" ">
          <p className="text-[16px] sm:text-[24px] pl-1 font-semibold leading-7 text-center lg:text-left text-[#842020]">
            Features
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-center lg:text-left text-gray-900 text-[24px] md:text-[32px] lg:text-[48px] lg:mt-3">
            {" "}
            <span className="text-[#BE4E1E]"> Question</span>{" "}
            <span style={{ color: "#842021" }}>Banks</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center lg:items-stretch gap-10 mt-2 sm:mt-8 rounded-2xl shadow-lg ">
            <div className="bg-[#F9F6EB] w-[400px] md:w-[680px] h-[200px] md:h-[350px] lg:h-[500px] rounded-2xl flex items-center justify-center">
              <Image
                src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/Our+Platform+Features/Question+Banks/Question+bank+desktop.webp"
                alt="question-bank"
                className="mx-auto hidden lg:block px-0"
                width={600}
                height={400}
                quality={100}
              />
               <Image
                src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/Our+Platform+Features/Question+Banks/Question+bank+tablet.webp"
                alt="question-bank"
                className="mx-auto hidden md:block lg:hidden px-0"
                width={500}
                height={300}
                quality={100}
              />
               <Image
                src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/Our+Platform+Features/Question+Banks/Question+bank+mobile.webp"
                alt="question-bank"
                className="mx-auto block md:hidden lg:hidden px-0"
                width={280}
                height={200}
                quality={100}
              />
            </div>
            <div className="flex flex-col justify-around px-5 lg:px-0 max-w-[500px] ">
              <p className="text-[14px] sm:text-[20px]  -mt-4 sm:mt-0 xl:-mb-12">
                Our team has prepared thousands of FRM®/CFA/PRM practice
                questions which would allow students to test their knowledge.
              </p>
              <div className="">
                <p className="text-[#BE4E1E]  font-semibold text-[16px] sm:text-[24px] mt-6 xl:-mt-8 mb-6 xl:-mb-14">
                  <Link href="https://frm.midhafin.com/part-1/sample-questions">
                  <span className="underline underline-offset-[4px]">
                    View Sample Questions
                  </span>{" "}
                  <span>&#62;</span>{" "}
                  </Link>
                </p>
                {/* <p className="text-[#BE4E1E] font-semibold mt-8 text-[16px] sm:text-[20px] mb-6 xl:mb-0">
                  <Link href="">
                  <span className=" underline underline-offset-[4px]">
                    FRM Part 2 Sample Questions
                  </span>{" "}
                  <span>&#62;</span>{" "}
                  </Link>
                </p> */}
              </div>
              <p className="text-[14px] sm:text-[20px]  mb-8 xl:-mt-16">
                <span className="font-semibold">
                  These questions are updated based on the current FRM®/CFA/PRM
                  trends
                </span>{" "}
                and are a good mixture of easy, medium, and difficult questions.
                An easy to comprehend solution for every single question is
                provided along with the questions.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 flex justify-center items-center mb-4  leading-6 sm:leading-[39px]">
            <ul className="list-disc pl-5 text-[14px] sm:text-[20px]">
              <li>
                Our questions are mapped with the <span className="font-semibold">FRM®/CFA/PRM exam&apos;s
                latest curriculum.</span>
              </li>
              <li>
                The organization structure of the FRM®/CFA/PRM questions is
                <span className="font-semibold"> extremely user-friendly.</span>
              </li>
              <li>
                The questions are <span className="font-semibold">sequenced according to our student study plan.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default MyComponents3;
