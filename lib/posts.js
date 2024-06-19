import graphqlRequest from "./graphqlRequest";

export async function getPostList(endCursor = null, taxonomy = null) {

  let condition = `after: "${endCursor}", first: 9, where: {orderby: {field: DATE, order: DESC}}`;

  if(taxonomy) {
    condition = `after: "${endCursor}", first: 9, where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
  }

    const query = {
        query: `query getAllPosts {
            posts(${condition}) {
              nodes {
                date
                slug
                title
                excerpt(format: RENDERED)
                featuredImage {
                  node {
                    mediaDetails {
                      file
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                  }
                }
                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    const allPosts = resJson.data.posts;

    return allPosts;
}

export async function getSinglePost(slug) {
    const query = {
        query: `query getSinglePost {
            post(id: "${slug}", idType: SLUG) {
              content(format: RENDERED)
              date
              excerpt(format: RENDERED)
              modified
              slug
              title(format: RENDERED)
              tags {
                nodes {
                  name
                }
              }
              databaseId
              featuredImage {
                node {
                  mediaDetails {
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
              author {
                node {
                  name
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    const singlePost = resJson.data.post;

    return singlePost;
}

export async function getPostSlugs() {
  const query = {
    query: `query getPostSlugs {
            posts {
              nodes {
                slug
              }
            }
          }`
  };

  try {
    const resJson = await graphqlRequest(query);
    const slugs = resJson?.data?.posts?.nodes || [];
    return slugs.map(node => node.slug);
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

export async function getCategorySlugs() {
  const query = {
    query: `query getCatetorySlugs {
      categories {
        nodes {
          slug
        }
      }
    }`
  };

  const resJson = await graphqlRequest(query);
  const categories = resJson.data.categories.nodes;

  return categories;
}

export async function getCategoryDetails(categoryName) {
  const query = {
    query: `query getCategoryDetails {
      category(id: "${categoryName}", idType: SLUG) {
        count
        name
        slug
      }
    }`
  };

  const resJson = await graphqlRequest(query);
  const categoryDetails = resJson.data.category;

  return categoryDetails;
}
