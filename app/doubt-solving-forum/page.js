import Image from "next/image";
import Footer from "../../components/common/SiteFooter";
import Navbar from "../../components/common/SiteHeader";

export const metadata = {
  title: "Doubt Solving Forum",
};

const MyComponents6 = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] mx-auto py-4 lg:py-20 px-[20px] lg:px-[40px] lg:overflow-visible  select-none">
        <p className="text-[16px] sm:text-[24px] pl-1 font-semibold leading-7 text-center lg:text-left text-[#842020]">
          Features
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-center lg:text-left text-gray-900 text-[24px] md:text-[32px] lg:text-[48px] lg:mt-3">
          {" "}
          <span className="text-[#BE4E1E]"> Doubt Solving</span>{" "}
          <span style={{ color: "#842021" }}>Forum</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center lg:items-stretch  gap-10 mt-2 sm:mt-16 xl:mt-8 rounded-2xl shadow-lg ">
          <div className="bg-[#F9F6EB] w-[400px] md:w-[680px] h-[250px] md:h-[300px] xl:h-[500px] rounded-2xl flex items-center justify-center">
            <Image
              src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/Our+Platform+Features/Doubt+Solving+Forum/doubt+solving.webp"
              alt="doubt-solving-forum"
              className=""
              width={600}
              height={400}
              quality={100}
            />
          </div>

          <ul className="list-disc pl-5 text-[14px] sm:text-[20px] max-w-[500px] my-5 md:my-14 xl:my-auto px-5">
            <li>
              We have an active and extremely user-friendly FRM®/CFA/PRM
              doubt-solving forum. <span className="font-bold">Every single doubt which is relevant to the
              curriculum will be solved there.</span>
            </li>
            <li>
              We have a dedicated Q&A sections against each chapter on the
              Forum.
            </li>
          </ul>
        </div>

         {/* <div>
          <Image
          src="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/Our+Platform+Features/Doubt+Solving+Forum/doubt+solving+quote.webp"
          alt=""
          width={750}
          height={250}
          quality={100}
          />
        </div>  */}
        <div className="bg-[#F9F8EF] w-[300px] sm:w-[550px] lg:w-[730px] lg:h-[150px] md:h-[120px] h-[100px] relative rounded-3xl shadow-[15px_15px_0px_0px_#BE4E1E] mx-auto my-20 md:my-32 ">
          <h1 className="absolute top-[28%] left-4 text-[120px] md:text-[220px] font-bold text-[#BE4E1E] leading-[0px]">
            &ldquo;
          </h1>
          <h1 className="text-center py-[40px] md:py-[50px] text-[#BE4E1E] text-[15px] sm:text-[20px] lg:text-[32px] font-bold">
            Curiosity Is the Mother of Invention
          </h1>
          <h1 className="absolute -bottom-[44%] right-4 text-[140px] md:text-[220px] font-bold text-[#BE4E1E] leading-[0px]">
            &rdquo;
          </h1>
        </div>

        <div className="max-w-[1000px] mx-auto mt-20 px-5 md:px-10">
          <ul className="list-disc text-[14px] sm:text-[20px] text-left leading-[28px] sm:leading-[39px]">
            <li>We at MidhaFin believe that <span className="font-bold">conceptual clarity is the key to doing
            well </span>in the FRM®/CFA/PRM exam.</li>
            <li>We also greatly emphasize the importance of <span className="font-bold">developing the relevant knowledge related to
            the FRM®/CFA/PRM course.</span> Thus, in line with our students-first
            approach, we take FRM®/CFA/PRM doubts very seriously.</li> 
            <li>Further, we do not limit ourselves to our own FRM®/CFA/PRM study material,<span className="font-bold"> doubts
            from any other source (provided it is relevant to the exam) would be
            solved.</span></li>
            <li>Even when students want to <span className="font-bold">revisit the doubts and the
            solutions,</span> they can do so by simply typing in the keyword, or going
            to the corresponding chapter, and checking it out.</li> 
            <li>Further, students can find all FRM®/CFA/PRM questions asked by other students in that
            section along with their solution indexed in a very systematic
            manner.<br/>
            Students can <span className="font-bold">interact with other FRM®/CFA/PRM candidates in
            the forum and give/receive useful insights.</span></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyComponents6;
