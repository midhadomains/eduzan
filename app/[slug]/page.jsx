// import { fetchSlugs } from '../../components/lib/FetchSlugs';
// import { fetchGraphQLData } from '../../components/lib/graphqlRequest';
// import Image from "next/image";
// import Head from 'next/head';
// import { notFound } from 'next/navigation';

// const BLOG_QUERY = `
//   query Node($slug: String!) {
//     searchBlogBySlug(slug: $slug) {
//       _id
//       title
//       author
//       meta_data
//       meta_description
//       keywords
//       category
//       sub_category
//       slug
//       open_graph_tags
//       data
//       date_created
//       image
//     }
//   }
// `;

// export async function generateStaticParams() {
//   const slugs = await fetchSlugs(); // Fetch all slugs from your API or database

//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const variables = { slug };
//   const result = await fetchGraphQLData(BLOG_QUERY, variables);
//   const blogData = result?.searchBlogBySlug;

//   if (!blogData) {
//     return {
//       title: 'Page Not Found',
//     };
//   }

//   return {
//     title: blogData.title,
//     description: blogData.meta_description,
//     keywords: blogData.keywords,
//     openGraph: {
//       title: blogData.title,
//       description: blogData.meta_description,
//       url: `https://midhafin.com/${slug}`,
//       images: [
//         {
//           url: blogData.image,
//           width: 800,
//           height: 600,
//           alt: blogData.title,
//         },
//       ],
//     },
//   };
// }

// export default async function BlogPost({ params }) {
//   const { slug } = params;
//   const variables = { slug };
//   let blogData;

//   try {
//     const result = await fetchGraphQLData(BLOG_QUERY, variables);
//     blogData = result?.searchBlogBySlug;
//   } catch (err) {
//     console.error('Error fetching blog data:', err);
//     notFound();
//     return null;
//   }

//   if (!blogData) {
//     notFound();
//     return null;
//   }

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     "headline": blogData.title,
//     "image": [blogData.image],
//     "author": {
//       "@type": "Person",
//       "name": blogData.author,
//     },
//     "datePublished": blogData.date_created,
//     "description": blogData.meta_description,
//   };

//   return (
//     <>
//       <Head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
//       </Head>
//       <div className="p-5">
//         <Image src={blogData.image} width={800} height={600} alt={blogData.title} />
//         <h1>{blogData.title}</h1>
//         <p>{blogData.author}</p>
//         <p>{blogData.date_created}</p>
//         <p>{blogData.meta_description}</p>
//         <div dangerouslySetInnerHTML={{ __html: blogData.data }}></div>
//         {/* Render other fields as needed */}
//       </div>
//     </>
//   );
// }

// export const revalidate = 604800; // Revalidate every week in seconds

import { fetchGraphQLData } from '../../components/lib/graphqlRequest';
import Image from "next/image";
import Head from 'next/head';
import { notFound } from 'next/navigation';
import { fetchSlugs } from '../../components/lib/FetchSlugs';

const BLOG_QUERY = `
  query Node($slug: String!) {
    searchBlogBySlug(slug: $slug) {
      _id
      title
      author
      meta_data
      meta_description
      keywords
      category
      sub_category
      slug
      open_graph_tags
      data
      date_created
      image
    }
  }
`;

export async function generateStaticParams() {
  const slugs = await fetchSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const variables = { slug };
  const result = await fetchGraphQLData(BLOG_QUERY, variables);
  const blogData = result?.searchBlogBySlug;

  if (!blogData) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: blogData.title,
    description: blogData.meta_description,
    keywords: blogData.keywords,
    openGraph: {
      title: blogData.title,
      description: blogData.meta_description,
      url: `https://midhafin.com/${slug}`,
      images: [
        {
          url: blogData.image,
          width: 800,
          height: 600,
          alt: blogData.title,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const variables = { slug };
  let blogData;

  try {
    const result = await fetchGraphQLData(BLOG_QUERY, variables);
    blogData = result?.searchBlogBySlug;
  } catch (err) {
    console.error('Error fetching blog data:', err);
    notFound();
    return null;
  }

  if (!blogData) {
    notFound();
    return null;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogData.title,
    "image": [blogData.image],
    "author": {
      "@type": "Person",
      "name": blogData.author,
    },
    "datePublished": blogData.date_created,
    "description": blogData.meta_description,
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="p-5">
        <Image src={blogData.image} width={800} height={600} alt={blogData.title} />
        <h1>{blogData.title}</h1>
        <p>{blogData.author}</p>
        <p>{blogData.date_created}</p>
        <p>{blogData.meta_description}</p>
        <div dangerouslySetInnerHTML={{ __html: blogData.data }}></div>
      </div>
    </>
  );
}

export const revalidate = 604800; // Revalidate every week in seconds
