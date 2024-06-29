import Link from "next/link";
import { getCategorySlugs } from "../../lib/posts";

export default async function CategoryMenu() {
  const categories = await getCategorySlugs();
  // console.log("Fetched categories:", categories);
  
  function convertSlugToTitle(slug) {
    const words = slug.split('-');
    const capitalizedWords = words.map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    );
    const title = capitalizedWords.join(' ');
    return title;
  }

  return (
    <div className="my-5 max-w-[1300px] mx-auto">
      <h1 className="text-center text-[20px] md:text-[28px] lg:text-[35px] underline underline-offset-[3px] font-semibold mb-3 text-[#6A1C1A] ">Categories</h1>
      <ul className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 justify-center">
        {categories.map((category, index) => (
          <Link className="bg-[#BF4E1E]  rounded-full text-center flex-shrink-0 " key={index} href={`/category/${category.slug}`}><li className="bg-[#BF4E1E]  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; text-white px-3 md:px-6 py-1 rounded-full text-[12px] md:text-[16px] flex-shrink-0">{convertSlugToTitle(category.slug)}</li></Link>
        ))}
      </ul>
      <hr  className="w-[95%] max-w-[1250px] mx-auto my-2"/>
    </div>
  );
}

