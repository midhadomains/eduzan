import { fetchGraphQLData } from './graphqlRequest';

const SLUGS_QUERY = `
  query {
    blogs {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const fetchSlugs = async () => {
  try {
    const result = await fetchGraphQLData(SLUGS_QUERY);
    return result.blogs.edges.map(edge => edge.node.slug);
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
};
