const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const characters = [
    {
      id: 1,
      name: 'Prue',
      image: [{
          id: 5,
          url: '/images/test5.png'
      }],
      type: 'Witch'
    },
    {
      id: 2,
      name: 'Andy',
      image: [{
          id: 1,
          url: '/images/test1.png'
      }],
      type: 'Human'
    },
    {
      id: 3,
      name: 'Piper',
      image: [{
          id: 4,
          url: '/images/test4.png'
      }],
      type: 'Witch'
    },
    {
        id: 4,
        name: 'Pheobe',
        image: [{
            id: 6,
            url: '/images/test6.png'
        },
        {
            id: 7,
            url: '/images/test7.png'
        },
        {
            id: 8,
            url: '/images/test8.png'
        }],
        type: 'Witch'
    },
];

const demons = [
    {
        id: 1,
        name: 'Windigo',
        image: [{
            id: 2,
            url: '/images/test2.png'
        }],
    },
    {
        id: 2,
        name: 'Gremlin',
        image: [{
            id: 3,
            url: '/images/test3.png'
        }],
    },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  
  type Character {
    id: Int,
    name: String,
    image: [Image],
    type: String,
  }

  type Demon {
    id: Int,
    name: String,
    image: [Image],
  }
  
  type Image {
    id: Int,
    url: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    characters: [Character],
    demons: [Demon]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
        characters: () => characters,
        demons: () => demons,
    },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

// open server with command: node index.js