const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'notra_db', // Jo pgAdmin mein banaya tha
  password: '1234', // ⚠️ Apna sahi password dalein
  port: 5432,
});

pool.on('connect', () => console.log('Database Connected Successfully! ✅'));
module.exports = pool;