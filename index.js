// index.js

import express from 'express';
import userRoutes from './userRoutes.js';

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
