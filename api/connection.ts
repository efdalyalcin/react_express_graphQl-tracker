import pgPromise from 'pg-promise';

const connStr = 'postgresql://efdal@localhost:5432/tracerdb'; // add your psql details

const pgp = pgPromise({}); // empty pgPromise instance
const psql = pgp(connStr); // get connection to your db instance

export default psql;