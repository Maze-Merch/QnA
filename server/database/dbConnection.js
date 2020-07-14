const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'password',
  database: 'maze',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 30000,
});

// pool.connect();

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }
//   client.query('SELECT NOW()', (err, result) => {
//     release();
//     if (err) {
//       return console.error('Error executing query', err.stack);
//     }
//     console.log(result.rows);
//   });
// });

module.exports = pool;
