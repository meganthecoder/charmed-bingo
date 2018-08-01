const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const characters = [
    {
        id: 1,
        name: 'Prue',
        image: {
            id: 5,
            url: '/images/test5.png'
        },
        type: WITCH
    },
    {
        id: 2,
        name: 'Windigo',
        image: {
            id: 1,
            url: '/images/test1.png'
        },
        type: DEMON
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
    type: CharacterType
  }
  
  type Image {
    id: Int,
    url: String
  }
  
  enum CharacterType {
    WITCH
    DEMON
    MORTAL
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    characters: [Character]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
        characters: () => characters,
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