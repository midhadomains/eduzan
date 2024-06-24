import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import FeaturedImage from "./FeaturedImage";
import Date from "./Date";

export default function BlogCard({ post }) {
    return (
        <div key={post.slug} className="max-w-[400px] relative w-[100%] md:w-[50%] max-h-[515px] mb-3 md:mb-7" >
            <div className="">
                <FeaturedImage post={post} />
                <div className=" flex flex-col justify-between h-[100%] pt-2 pb-4 max-w-[400px]">
                    <h2 className="mt-1 mb-2 flex">{
                        post.categories.nodes.map((data, key) => (
                            <Link key={key} href={`/category/${data.slug}`} className="uppercase text-[14px] md:text-[16px]  mb-2 text-[#BE4E1E] font-[500]">
                                <p className=''>
                                    <span className="underline underline-offset-[3px]">{data.name}</span>
                                    {key < post.categories.nodes.length - 1 && <span>&nbsp;&nbsp;&#10095;&nbsp;&nbsp;</span>}
                                </p>
                            </Link>
                        ))}
                    </h2>
                    <Link href={`/${post.slug}`} className="text-[18px] md:text-[22px] font-semibold leading-[21px]  md:leading-[25px]"><h1>{post.title}</h1></Link>
                    <div className="text-[#5B5B5B] text-[14px] md:text-[18px] font-[300] leading-normal md:leading-[24px] my-2 mb-3" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    <p className=" text-[14px] md:text-[16px] absolute bottom-0 font-[500] ">Updated on <Date dateString={post.date} /></p>
                </div>
            </div>
        </div>
    );
}