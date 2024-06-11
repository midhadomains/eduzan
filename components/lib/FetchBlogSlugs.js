const { fetchGraphQLData } = require('./graphqlRequest');

const BLOG_SLUGS_QUERY = `
  query {
    blogs(first: 1000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

async function fetchBlogSlugs() {
    const result = await fetchGraphQLData(BLOG_SLUGS_QUERY);
    const slugs = result.blogs.edges.map(edge => edge.node.slug);
    return slugs;
}

module.exports = { fetchBlogSlugs };
