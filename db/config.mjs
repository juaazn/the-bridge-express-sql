import mysql from 'mysql2'

export const db = mysql.createConnection({
  host: 'localhost',
  password: '1234',
  user: 'root',
  database: 'endpoint'
})
