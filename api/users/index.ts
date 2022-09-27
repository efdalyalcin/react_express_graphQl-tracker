import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./users.resolvers";
import { typeDefs } from "./users.types";

export const data = {
  users: [
    { id: "001", name: "Jaime" },
    { id: "002", name: "Jorah" },
  ],
};

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
