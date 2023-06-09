import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./src/graphql/typeDef.js";
import { resolvers } from "./src/graphql/resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone"

const start = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
  });

  console.log(`server running at ${url}`);
}

await start();
