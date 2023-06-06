import { Part } from "../models/Part.js";

const resolvers = {
  Query: {
    async getPart(_, { ID }) {
      return await Part.findById(ID);
    },
    async getParts() {
      return await Part.find().limit(10);
    },
    async getNoOfParts() {
      return await Part.find().count();
    }
  },

  Mutation: {
    async createPart(_, { createPartInput: { partId, weight, color } }) {
      const createPart = new Part({
        partId: partId,
        description: partId + new Date().toISOString(),
        weight: weight,
        color: color,
      });

      const result = await createPart.save();

      return {
        id: result.id,
        ...result._doc,
      };
    },

    async editPart(_, { ID, editPartInput: { weight, color } }) {
      const editPart = {
        weight: weight,
        color: color,
      };

      const isModified = (await Part.updateOne({ _id: ID }, editPart)).matchedCount;
      
      return isModified;

    },

    async deletePart(_, { ID }) {
      console.log(ID)
      const isDeleted = (await Part.deleteOne({ _id: ID })).deletedCount;
      console.log(isDeleted);
      return isDeleted;
    },
  },
};

export { resolvers };
