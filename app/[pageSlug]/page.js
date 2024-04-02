"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

<<<<<<< HEAD
=======
// import { useRouter } from "next/router";

// export async function generateStaticParams() {
//     const pageSlugs = await getPageSlugs();

//     const paths = pageSlugs.map((s) => (
//         {
//             pageSlug: s.slug,
//         }
//     ));

//     return paths;

// }

// export async function generateMetadata({ params }) {

//     const pageData = await getSinglePage(params.pageSlug);

//     return {
//         title: "MidhaFin",
//     }
// }
// export default async function Page({ params }) {

//     const pageData = await getSinglePage(params.pageSlug);

//     return (
//         <>
//             <section className="bg-slate-700">
//                 <SiteHeader className="header-page z-10 relative" />
//             </section>
//             <section className="content-area py-8">
//                 <article>
//                     <h1 className="text-6xl text-center text-slate-700 relative py-8">
//                         MidhaFin
//                     </h1>
//                     <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="post-content container mx-auto lg:max-w-4xl" />
//                 {/* </article> */}
//             </section>
//             <SiteFooter />
//         </>
        
//     );
// }

"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

>>>>>>> main
const RedirectPage = () => {
    const router = useRouter();
    const [timer, setTimer] = useState(3);

    useEffect(() => {
        // Redirect to the home page after 3 seconds
        const redirectTimeout = setTimeout(() => {
            router.push('/');
        }, 100);

        // Clear the timer and timeout when the component is unmounted
        return () => {
            clearTimeout(redirectTimeout);
        };
    }, [router]);

    return (
        <div className='w-[100%]'>
            <div>
                <div className="text-center text-[1.2rem] my-2 font-semibold p-2 tracking-wide">
                    404 Bad Request , Redirecting To Homepage  ...
                </div>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default RedirectPage;
=======
export default RedirectPage;
>>>>>>> main
