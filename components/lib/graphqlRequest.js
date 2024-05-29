import { GraphQLClient } from 'graphql-request';
import { notFound } from 'next/navigation';

const endpoint = 'https://test-backend-pink.vercel.app/';

const client = new GraphQLClient(endpoint, {
    headers: {
        // Add any headers you need here, for example:
        // Authorization: `Bearer YOUR_AUTH_TOKEN`,
    },
});

export const fetchGraphQLData = async (query, variables = {}) => {
    try {
        const data = await client.request(query, variables);
        return data;
    } catch (error) {
        console.error('Error fetching GraphQL data:', error);
        notFound(); // Trigger the 404 page
    }
};
