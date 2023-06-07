import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./src/graphql/typeDef.js";
import { resolvers } from "./src/graphql/resolvers.js";
import { prisma } from "./src/db.js";
import { startStandaloneServer } from "@apollo/server/standalone"
import { CURSOR_FLAGS } from "mongodb";

const start = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  

  const { url } = await startStandaloneServer(server, {
    
    listen: {port: 5000}

  });

  console.log(`server running at ${url}`);
}

await start();
