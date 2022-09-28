export interface User {
  id: string;
  name: string;
  email: string;
};

export type Query = {
  users: User[];
  user(id: number): User;
};

export const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String
  }

  type Query {
    users: [User!]
    user(id: ID): User
  }
`;
