import { fetchGraphQLData } from './graphqlRequest';

const SLUGS_QUERY = `
  query {
    allSlugs {
      slug
    }
  }
`;

export const fetchSlugs = async () => {
    try {
        const result = await fetchGraphQLData(SLUGS_QUERY);
        return result.allSlugs.map((item) => item.slug);
    } catch (error) {
        console.error('Error fetching slugs:', error);
        return [];
    }
};
