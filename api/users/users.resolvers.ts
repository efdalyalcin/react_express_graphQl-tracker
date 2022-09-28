import psql from '../connection';
import { Query } from './users.types';

// export const resolvers = {
//   Query: {
//     users: (obj: any, args: any, context: Query, info: any) => context.users,
//   },
// };

export const resolvers = {
  Query: {
    users: () => {
      const usersQuery = 'select id, name, email from users';
      return psql.manyOrNone(usersQuery);
    },
    
    user: (parent: any, args: any) => {
      const userQuery = `select id, name, email from users where id = ${args.id}`;
      return psql.oneOrNone(userQuery);
    }
  }
};
