import { graphql, buildSchema } from 'graphql';

describe('graphql', () => {
  test('source parameter', async () => {
    const schema = buildSchema(`
      type Query {
        hello: String
      }
    `);

    // The rootValue provides a resolver function for each API endpoint
    const rootValue = {
      hello: () => {
        return 'Hello World';
      },
    };

    // Run the GraphQL query '{ hello }' and print out the response
    const response = await graphql({
      schema,
      source: '{ hello }',
      rootValue,
    });

    expect(Object.keys(response)).toEqual(['data']);
    expect(Object.keys(<object>response.data)).toEqual(['hello']);
    expect((<object>response.data)['hello']).toEqual('Hello World');
  });
});
