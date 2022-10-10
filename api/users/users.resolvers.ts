import psql from '../connection';
// import nanoid from 'nanoid';

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
