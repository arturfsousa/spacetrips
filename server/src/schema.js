const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hi: String!
  }
`;

module.exports = typeDefs;
