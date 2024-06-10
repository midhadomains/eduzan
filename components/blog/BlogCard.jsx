"use client";
import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

export default function BlogCard({ data }) {
    function excerpt(str) {
        const words = str.split(' ');
        let result = '';
        let charCount = 0;
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if ((result + word).length <= 100) {
                if (result.length > 0) {
                    result += ' ';
                }
                result += word;
                charCount += word.length;
            } else {
                break;
            }

            if (i >= 19) { // Stop if we've added 20 words
                break;
            }
        }
        return result;
    }
    console.log(data.image)

    return (
        <div key={data._id} className="max-w-[400px] w-[100%] md:w-[50%]  border max-h-[515px]  rounded-2xl shadow-[0px_4px_5px_1px_#00000024] " >
            <Link href={`/${data.slug}`}>
                <div className="">
                    <Image src={data.image} width={400} height={300} alt={data.title} className="w-[100%] rounded-2xl" />
                    
                    <div className="mx-auto flex flex-col tracking-wide justify-between h-[100%] py-1 px-3 max-w-[350px]">
                        <p className="uppercase text-[12px] md:text-[16px] my-2 text-[#BE4E1E] font-[500]">{data.category}</p>
                        <h1 className="text-[18px] md:text-[22px] font-semibold  " dangerouslySetInnerHTML={{ __html: data.title }}></h1>
                        <p className="text-[#5B5B5B] text-[16px] md:text-[20px] font-[300] leading-normal md:leading-[28px] my-2">{excerpt(data.meta_description)}...</p>
                        <div className="flex justify-between mb-2 md:mb-4 text-[#50535C] text-[12px]  md:text-[16px] items-center tracking-normal">
                            <p>{data.author}</p>
                            <GoDotFill />
                            {/* <p>{data.date_created}</p> */}
                        </div>
                    </div>
                </div>
            </Link>
            {console.log(data)}
        </div>
    );
}
