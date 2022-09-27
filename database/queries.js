import { Pool } from 'pg';

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'users',
  password: '1296',
  port: 5432,
});
