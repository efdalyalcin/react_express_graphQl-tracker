import { makeExecutableSchema } from "@graphql-tools/schema";

interface User {
  id: string;
  name: string; 
};

type Query = {
  users: User[]
};

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
    users: (obj: any, args: any, context: Query, info: any) => context.users,
  },
};

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
