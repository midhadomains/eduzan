// import SiteHeader from "../../components/SiteHeader";
// import SiteFooter from "../../components/SiteFooter";
// import { getPageSlugs, getSinglePage } from "../../lib/pages";

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
export default function Page() {
    const reviews=[
        {
            name:"Karan Vansani",
            image:"https://d502jbuhuh9wk.cloudfront.net/orgData/62826abf0cf2991cddb22ac6/pages/assets/images/Subhadev%20Pal.png",
            
        }
    ]
    
    return (
        <p>Girls call me , +91 7250365526 ,  rajeshkumaryadav9931grd@gmail.com</p>
    )
}