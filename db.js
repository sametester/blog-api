import mysql from 'mysql2';
// const mysql = require('mysql');

export const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'blog',
});
