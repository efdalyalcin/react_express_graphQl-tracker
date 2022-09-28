import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./users.resolvers";
import { typeDefs } from "./users.types";

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
