// db/schema.js

import pool from './connection.js';

const createUserTable = async () => {
  try {

    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        age INTEGER
      );
    `;

    await pool.query(query);
    
    console.log('Users table created successfully');
    
  } catch (err) {
    console.error('Error creating users table:', err.message);
  } finally {
    pool.end(); // Close the connection
  }
};

createUserTable();
