import { gql } from "apollo-server";

const typeDefs = gql`
  type Part {
    partId: String
    description: String
    weight: Int
    color: String
  }

  input CreatePartInput {
    partId: String
    weight: Int
    color: String
  }

  input EditPartInput {
    weight: Int
    color: String
  }

  type Query {
    getPart(ID: ID!): Part
    getParts: [Part]
    getNoOfParts: Int
  }

  type Mutation {
    createPart(createPartInput: CreatePartInput): Part
    editPart(ID: ID!, editPartInput: EditPartInput): Boolean
    deletePart(ID: ID!): Boolean
  }
`;

export { typeDefs };