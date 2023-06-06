import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { typeDefs } from "./graphql/typeDef.js";
import { resolvers } from "./graphql/resolvers.js";

const MONGODB =
  "mongodb+srv://kavinduxo:kavinduxo@cluster0.4xuyryf.mongodb.net/?retryWrites=true&w=majority";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection created successfully!");
    return server.listen({ port: 5000 });
  })
  .then((result) => {
    console.log(`Server is running at ${result.url}`);
  });
