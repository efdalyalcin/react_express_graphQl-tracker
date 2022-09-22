import { makeExecutableSchema } from "@graphql-tools/schema";

export const data = {
  users: [
    { id: "001", name: "Jaime" },
    { id: "002", name: "Jorah" },
  ],
};

export const typeDefs = `
  type User {
    id: ID!
    name: String!
  }

  type Query {
    users: [User]
  }
`;

export const resolvers = {
  Query: {
    users: (obj, args, context, info) => context.users,
  },
};

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
