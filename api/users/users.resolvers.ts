import { Query } from './users.types';

export const resolvers = {
  Query: {
    users: (obj: any, args: any, context: Query, info: any) => context.users,
  },
};
