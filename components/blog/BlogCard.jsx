import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import FeaturedImage from "./FeaturedImage";
import Date from "./Date";

export default function BlogCard({ post }) {
    return (
        <div key={post.slug} className="max-w-[400px] relative w-[100%] md:w-[50%]   border max-h-[515px]  rounded-2xl shadow-[0px_4px_5px_1px_#00000024] " >
            <div className="">
                <FeaturedImage post={post} />
                <div className="mx-auto px-3 flex flex-col tracking-wide justify-between h-[100%] pt-4 pb-6 max-w-[350px]">
                    <p className=" text-[12px] md:text-[16px] mb-2  font-[500]">Posted under <span className='uppercase text-[#BE4E1E]'>{
                        post.categories.nodes.map((category) => (
                            <Link className="uppercase text-[12px] md:text-[16px] mb-2 text-[#BE4E1E] font-[500]" href={`/category/${category.slug}`} key={category.slug}>
                                {category.name}
                            </Link>
                        ))
                    }</span></p>
                    <Link href={`/${post.slug}`} className="text-[18px] md:text-[22px] font-semibold "><h1>{post.title}</h1></Link>
                    <div className="text-[#5B5B5B] text-[14px] md:text-[18px] font-[300] leading-normal md:leading-[24px] my-2" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    <p className=" text-[14px] md:text-[16px] absolute bottom-1   ">Published on <Date dateString={post.date} /></p>
                </div>
            </div>
        </div>
    );
}