import pgPromise from 'pg-promise';

const connStr = 'postgresql://localhost:5432/usersDB'; // add your psql details

const pgp = pgPromise({}); // empty pgPromise instance
const psql = pgp(connStr); // get connection to your db instance

export default psql;