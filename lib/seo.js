// import graphqlRequest from "./graphqlRequest";

// export async function getSeo(pageType = 'post', slug = '/') {
//   const query = {
//     query: `query getSeo {
//             ${pageType}(id: "${slug}", idType: SLUG) {
//               seo {
//                 opengraphImage {
//                   mediaItemUrl
//                 }
//                 opengraphModifiedTime
//                 opengraphPublishedTime
//                 opengraphTitle
//                 opengraphType
//                 opengraphUrl
//                 schema {
//                   raw
//                 }
//                 title
//                 metaDesc
//                 opengraphSiteName
//                 readingTime
//                 opengraphPublisher
//               }
//             }
//           }`
//   };

//   try {
//     const getSeo = await graphqlRequest(query);
//     const seoData = getSeo?.data?.[pageType]?.seo;

//     if (!seoData) {
//       throw new Error('SEO data is null or undefined');
//     }

//     let jsonSchema;
//     if (seoData.schema && seoData.schema.raw) {
//       jsonSchema = seoData.schema.raw.replace(/https:\/\/edubing.com(?!\/wp-content\/uploads)/g, 'https://midhafin.com/blog');
//     } else {
//       jsonSchema = '{"default": "schema"}';
//     }

//     // console.log('SEO Data:', seoData);
//     // console.log('Updated JSON Schema:', jsonSchema);

//     return {
//       opengraphImage: { mediaItemUrl: seoData.opengraphImage?.mediaItemUrl || 'default_image_url.jpg' },
//       opengraphModifiedTime: seoData.opengraphModifiedTime || 'default_time',
//       opengraphPublishedTime: seoData.opengraphPublishedTime || 'default_time',
//       opengraphTitle: seoData.opengraphTitle || 'Default Title',
//       opengraphType: seoData.opengraphType || 'website',
//       opengraphUrl: seoData.opengraphUrl || 'https://www.midhafin.com/blog',
//       schema: { raw: jsonSchema },
//       title: seoData.title || 'Default Title',
//       metaDesc: seoData.metaDesc || 'Default meta description',
//       opengraphSiteName: seoData.opengraphSiteName || 'Default Site Name',
//       readingTime: seoData.readingTime || '5 min',
//       opengraphPublisher: seoData.opengraphPublisher || 'Default Publisher',
//     };
//   } catch (error) {
//     console.error('Error fetching SEO data:', error);
//     return {
//       opengraphImage: { mediaItemUrl: 'default_image_url.jpg' },
//       opengraphModifiedTime: 'default_time',
//       opengraphPublishedTime: 'default_time',
//       opengraphTitle: 'Default Title',
//       opengraphType: 'website',
//       opengraphUrl: 'https://www.midhafin.com/blog',
//       schema: { raw: '{"default": "schema"}' },
//       title: 'Default Title',
//       metaDesc: 'Default meta description',
//       opengraphSiteName: 'Default Site Name',
//       readingTime: '5 min',
//       opengraphPublisher: 'Default Publisher',
//     };
//   }
// }


import graphqlRequest from "./graphqlRequest";

export async function getSeo(pageType = 'post', slug = '/') {
    const query = {
        query: `query getSeo {
            ${pageType}(id: "${slug}", idType: SLUG) {
              seo {
                opengraphImage {
                  mediaItemUrl
                }
                opengraphModifiedTime
                opengraphPublishedTime
                opengraphTitle
                opengraphType
                opengraphUrl
                schema {
                  raw
                }
                title
                metaDesc
                opengraphSiteName
                readingTime
                opengraphPublisher
              }
            }
          }`
    };

    const getSeo = await graphqlRequest(query);
    const seoData = getSeo.data[pageType].seo;

    // console.log('seodata...');
    // console.log(seoData);
    
    return seoData;
} 
