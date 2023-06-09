import { gql } from "apollo-server";

const typeDefs = gql`
  type Part {
    id: ID!
    description: String
    weight: Int
    color: String
    package: Package 
    pckId: ID
  }

  type Package {
    id: ID!
    name: String
    parts: [Part]
  }

  input CreatePartInput {
    description: String
    weight: Int
    color: String
    package: CreatePartWithPckInput
  }

  input EditPartInput {
    weight: Int
    color: String
  }

  input CreatePartWithPckInput {
    description: String
    weight: Int
    color: String
    package: PckWithoutPartsInput
  }

  input PckWithoutPartsInput {
    id: ID!,
    name: String
  }

  input CreatePartWithoutPckInput {
    description: String
    weight: Int
    color: String
  }

  input CreatePackageInput {
    name: String
    parts: [CreatePartWithoutPckInput]
  }

  type Query {
    getPart(id: ID!): Part
    getParts: [Part]
    getNoOfParts: Int
    getPackage(id: ID!): Package
  }

  type Mutation {
    createPart(createPartInput: CreatePartInput): Part
    editPart(id: ID!, editPartInput: EditPartInput): Boolean
    deletePart(id: ID!): Boolean
    createPackage(createPackageInput: CreatePackageInput): Package
  }
`;

export { typeDefs };