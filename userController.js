// controllers/userController.js

import pool from './connection.js';
import { v4 as uuidv4 } from 'uuid';

// GET /users
export const getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY name');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

// GET /users/:id
export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ error: 'User not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
};

// POST /users
export const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const id = uuidv4();
  try {
    const result = await pool.query(
      'INSERT INTO users (id, name, email, age) VALUES ($1, $2, $3, $4) RETURNING *',
      [id, name, email, age]
    );
    res.status(201).json({message: "User created successfully", user: result.rows[0]});
  } catch (err) {
    res.status(400).json({ error: 'Failed to create user', details: err.message });
  }
};

// PUT /users/:id
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
      [name, email, age, id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ error: 'User not found' });
    res.json({message: "User updated successfully", user: result.rows[0]});
  } catch (err) {
    res.status(400).json({ error: 'Failed to update user', details: err.message });
  }
};

// DELETE /users/:id
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully', user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
