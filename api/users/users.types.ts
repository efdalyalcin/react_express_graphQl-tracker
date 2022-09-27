export interface User {
  id: string;
  name: string; 
};

export type Query = {
  users: User[]
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
