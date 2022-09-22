import { makeExecutableSchema } from "@graphql-tools/schema";

export const data = {
  warriors: [
    { id: "001", name: "Jaime" },
    { id: "002", name: "Jorah" },
  ],
};

export const typeDefs = `
  type Warrior {
    id: ID!
    name: String!
  }

  type Query {
    warriors: [Warrior]
  }
`;

export const resolvers = {
  Query: {
    warriors: (obj, args, context, info) => context.warriors,
  },
};

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
