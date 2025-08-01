// db/seeder.js

import pool from './connection.js';
import { v4 as uuidv4 } from 'uuid';

const seedDatabase = async () => {
    try {
        const users = [
            { id: uuidv4(), name: 'Alice', email: 'alice@example.com', age: 30 },
            { id: uuidv4(), name: 'Bob', email: 'bob@example.com', age: 25 },
            { id: uuidv4(), name: 'Charlie', email: 'charlie@example.com', age: 35 },
            { id: uuidv4(), name: 'Diana', email: 'diana@example.com', age: 28 },
            { id: uuidv4(), name: 'Ethan', email: 'ethan@example.com', age: 22 },  
        ];
        for (const user of users) {
            const { id, name, email, age } = user;
            await pool.query(
                'INSERT INTO users (id, name, email, age) VALUES ($1, $2, $3, $4)',
                [id, name, email, age]
            );
        }   
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await pool.end();
    }
};

seedDatabase();