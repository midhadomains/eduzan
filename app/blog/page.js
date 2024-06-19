import { getPostList } from "../../lib/posts";
import Navbar from '../../components/common/SiteHeader'
import Footer from '../../components/common/SiteFooter'
import PostList from "../../components/blog/PostList";

export const metadata = {
    title: "List of Blogs - MidhaFin | Insights and Updates on Finance and FRM",
    description: "Explore MidhaFin's extensive collection of blogs covering a wide range of topics in finance and FRM. Stay updated with the latest insights, tips, and news to boost your finance knowledge and career.",
    keywords: [
        "MidhaFin",
        "List of Blogs",
        "Finance Blogs",
        "FRM Insights",
        "Finance Updates",
        "FRM Tips",
        "Finance News",
        "FRM Certification",
        "Finance Articles",
        "Financial Risk Management"
    ]
};
export const revalidate = 0; // Always fetch fresh data

export default async function BlogHome({ params }) {
    try {
        const initialPosts = await getPostList();
        return (
            <>
                <Navbar />
                <div className="bg-3500bg tracking-wide max-h-[270px] shadow-xl ">
                    <div className='max-w-[1200px] px-[20px] md:px-[50px] mx-auto py-[50px]'>
                        <h1 className='text-[#6A1C1A] xl:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold '>Midha Fin <span className='text-[#BE4E1E] '>Blog</span> </h1>
                        <p className='text-[#2D303B] max-w-[800px] text-[16px] md:text-[20px] mt-3 md:leading-[32px] '>Unlock the power of knowledge with our comprehensive educational resources tailored to your learning journey.</p>
                    </div>
                </div>
                <PostList initialPosts={initialPosts} />
                <Footer />
            </>
        );
    } catch (error) {
        console.error("Error fetching initial posts:", error);
        return (
            <>
                <Navbar />
                <div className="error-message">
                    <h1>Failed to load posts</h1>
                    <p>Please try again later.</p>
                </div>
                <Footer />
            </>
        );
    }
}
