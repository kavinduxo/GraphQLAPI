import { gql } from "apollo-server";

const typeDefs = gql`
  type Part {
    id: ID!
    description: String
    weight: Int
    color: String
  }

  input CreatePartInput {
    description: String
    weight: Int
    color: String
  }

  input EditPartInput {
    weight: Int
    color: String
  }

  type Query {
    getPart(id: ID!): Part
    getParts: [Part]
    getNoOfParts: Int
  }

  type Mutation {
    createPart(createPartInput: CreatePartInput): Part
    editPart(id: ID!, editPartInput: EditPartInput): Boolean
    deletePart(id: ID!): Boolean
  }
`;

export { typeDefs };