import { prisma } from "../db.js";

const resolvers = {
  Query: {
    async getPart(_parent, { id }) {
      const result = await prisma.part.findUnique({
        where: {
          id: id,
        },
      });

      return result;
    },

    async getParts() {
      return await prisma.part.findMany();
    },
    
    async getNoOfParts() {
      return await prisma.part.count();
    }
  },

  Mutation: {
    async createPart(_parent, { createPartInput: { description, weight, color } }) {
      const result = await prisma.part.create({
        data: {
          description: description,
          weight: weight,
          color: color
        }
      });
      console.log(result);
      return result;      
    },

    async editPart(_, { id, editPartInput: { weight, color } }) {
      const result = await prisma.part.update({
        where: {
          id: id,
        },
        data: {
          weight: weight,
          color: color
        }
      })
      
      return result;

    },

    async deletePart(_, { id }) {
      const deletePart = await prisma.part.delete({
        where: {
          id: id,
        },
      })

      return deletePart;
    },
  },
};

export { resolvers };
