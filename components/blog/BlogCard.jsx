import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import FeaturedImage from "./FeaturedImage";
import Date from "./Date";

export default function BlogCard({ post }) {
    return (
        <div key={post.slug} className="max-w-[400px] relative w-[100%] md:w-[50%] max-h-[515px]" >
            <div className="">
                <FeaturedImage post={post} />
                <div className=" flex flex-col justify-between h-[100%] py-4 max-w-[350px]">
                    <p className=" text-[14px] md:text-[18px] mb-2 ">Posted under <span className='uppercase text-[#BE4E1E]'>{
                        post.categories.nodes.map((category) => (
                            <Link className="uppercase text-[14px] md:text-[18px] mb-2 text-[#BE4E1E] font-[500]" href={`/category/${category.slug}`} key={category.slug}>
                                {category.name}
                            </Link>
                        ))
                    }</span></p>
                    <Link href={`/${post.slug}`} className="text-[18px] md:text-[22px] font-semibold "><h1>{post.title}</h1></Link>
                    <div className="text-[#5B5B5B] text-[14px] md:text-[18px] font-[300] leading-normal md:leading-[24px] my-2 mb-3" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    <p className=" text-[14px] md:text-[16px] absolute bottom-0 font-[500] ">Updated on <Date dateString={post.date} /></p>
                </div>
            </div>
        </div>
    );
}