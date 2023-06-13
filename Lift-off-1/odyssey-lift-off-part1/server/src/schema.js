const { gql } = require("graphql-tag"); // TODO what is gql and graphql-tag

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules taht teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "Author of complete Track"
  type Author {
    id: ID!
    "Author's first and surname"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
