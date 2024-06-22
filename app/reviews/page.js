import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import fetchReviews from "../../lib/fetchReviews";
import Navbar from "../../components/common/SiteHeader";
import Footer from "../../components/common/SiteFooter";

export const metadata = {
    title: "Student Reviews - MidhaFin | Hear from Our Successful Students",
    description: "Discover what our students are saying about their experiences with MidhaFin. Read reviews and testimonials from successful FRM candidates who have benefited from our expert guidance and comprehensive resources.",
    keywords: [
        "MidhaFin",
        "Student Reviews",
        "Testimonials",
        "FRM Exam Success",
        "Student Feedback",
        "Finance Education Reviews",
        "FRM Certification Reviews",
        "Course Reviews",
        "Student Experiences",
        "Success Stories"
    ]
};

export default async function HomePage() {
    function capitalizeWords(str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }

    function formatName(name) {
        const words = name.trim().split(/\s+/);
        if (words.length >= 2) {
            return `${words[0]} ${words[1]}`;
        } else {
            return `${words[0]}`;
        }
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<IoStar key={i} className="text-[#f3c35d]" />);
            } else if (i - rating <= 1) {
                if (rating % 1 <= 0.2) {
                    stars.push(<IoStarOutline key={i} className="text-[#f3c35d]" />);
                } else if (rating % 1 > 0.2 && rating % 1 < 0.8) {
                    stars.push(<IoStarHalf key={i} className="text-[#f3c35d]" />);
                } else {
                    stars.push(<IoStar key={i} className="text-[#f3c35d]" />);
                }
            } else {
                stars.push(<IoStarOutline key={i} className="text-[#f3c35d]" />);
            }
        }
        return stars;
    };
    let reviews = [];

    try {
        reviews = await fetchReviews();
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }

    return (
        <div className="">
            <Navbar/>
            <div className="bg-[url('https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Backgrounds/3500background.svg')] max-h-[300px] h-[100%] shadow-xl">
                <div className="max-w-[1200px] px-[20px] mg:px-[50px] mx-auto py-4 mg:py-9">
                    <h1 className="text-[30px] md:text-[40px] xl:text-[50px] my-2 mg:my-5 font-semibold text-[#6A1C1A]">
                        Student <span className="text-[#BE4E1E]">Reviews</span>
                    </h1>
                    <p className="text-[16px] lg:text-[20px] max-w-[800px] lg:leading-[32px]">
                        Discover what our students are saying about our transformative learning experiences.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 my-[30px]">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="w-[330px] mg:w-[400px] aspect-square text-center  rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]   pt-4 mg:pt-8"
                    >
                        <div className="flex text-left items-center justify-center h-[120px] ">
                            <Image
                                width={120}
                                height={120}
                                src={review.image}
                                alt={review.name}
                                className="w-[100px] h-[100px] aspect-square flex-shrink-0 border-[#ffffff] rounded-[50%] border shadow-lg"
                            />
                            <div className="pl-[15px] mg:pl-[30px]">
                                <h1 className="text-[18px] mg:text-[24px] font-[500]">
                                    {capitalizeWords(formatName(review.name))}
                                </h1>
                                <h1 className="text-[14px] mg:text-[16px] font-[400] text-[#081A31] my-1 max-w-[210px]">
                                    {review.job ? `Financial Risk Manager at  ${review.job}` : " "}{" "}
                                </h1>
                                <p>Passing year:&nbsp;{review.year}</p>
                                <p className="text-[#BE4E1E] text-[16px] font-[400] flex text-center">
                                    {capitalizeWords(review.country)}{" "}
                                    <span className="text-slate-400">&nbsp;|&nbsp;</span>{" "}
                                    <Link target="_blank" href={review.l_link}>
                                        <FaLinkedin className="text-[25px] text-[#0072b1] hover:cursor-pointer" />
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <p className="text-[#BE4E1E] text-[16px] mg:text-[18px] bg-[#F9F8F5] rounded-full my-5 w-fit mx-auto px-7 py-1 flex items-center">
                            {capitalizeWords(review.course)}&nbsp; :&nbsp;&nbsp;
                            <span className="text-[#f3c35d] flex pb-[3px] gap-1">
                                {/* {Math.floor(review.rating) && review.rating > 0 ? Array(Math.floor(review.rating)).fill(<IoStar key={index} />) : null} */}
                                {renderStars(review.rating)}
                            </span>
                        </p>
                        <h1 className="text-center mg:text-left mx-auto text-[16px] mg:text-[18px] max-w-[350px] leading-[30px]">
                            &quot; {`${review.excerpt}`}...
                            <Link target='_blank' href={review.p_link} className="underline text-[#BE4E1E]">
                                (Read More)&quot;
                            </Link>{" "}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
}
export const revalidate = 604800; // Revalidate every week (in seconds)