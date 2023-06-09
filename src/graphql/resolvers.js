import { prisma } from "../db.js";

const resolvers = {
  Query: {
    async getPart(_parent, { id }) {
      const result = await prisma.part.findUnique({
        where: {
          id: id,
        },
        include: {
          package: true,
        },
      });

      return result;
    },

    async getParts() {
      return await prisma.part.findMany();
    },
    
    async getNoOfParts() {
      return await prisma.part.count();
    },

    async getPackage(_parent, { id }){
      const result = await prisma.package.findUnique({
        where: {
          id: id,
        },
        include: {
          parts: true,
        },
      });

      return result;
    },
  },

  Mutation: {
    async createPart(_parent, { createPartInput: { description, weight, color, posts } }) {
      const result = await prisma.part.create({
        data: {
          description: description,
          weight: weight,
          color: color,
          posts: posts
        },
        include: {
          package: true,
        },
      });
      console.log(result);
      return result;      
    },

    async editPart(_parent, { id, editPartInput: { weight, color } }) {
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

    async deletePart(_parent, { id }) {
      const deletePart = await prisma.part.delete({
        where: {
          id: id,
        },
      })

      return deletePart;
    },

    async createPackage(_parent, { createPackageInput: { name, parts } }) {
      const result = await prisma.package.create({
        data: {
          name: name,
          parts: {
            create: parts
          }
        },
        include: {
          parts: true
        }
      });

      return result;
    }
  },
};

export { resolvers };
