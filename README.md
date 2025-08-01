# Mini Project Assessment: PostgreSQL + Express.js User API

This is a simple RESTful API built with **Express.js** that connects to a **PostgreSQL** database to perform basic CRUD (Create, Read, Update, Delete) operations on a `users` table. The project demonstrates a clean implementation of database integration, UUID-based user identification, and basic error handling using industry best practices.

---

## Project Objectives

- Set up a working Express.js server
- Connect to PostgreSQL using `pg` module
- Store and retrieve user data in a `users` table
- Perform full CRUD operations using REST API endpoints
- Implement proper error handling and meaningful responses
- Test endpoints with tools like Postman

---

## Database Schema

This project uses a `users` table with the following structure:

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INTEGER
);
```

---

# Technologies Used

- Node.js + Express.js — for the server
- PostgreSQL — for data storage
- pg — Node.js client for PostgreSQL
- uuid — for generating UUID v4 identifiers
- dotenv — for environment configuration
- Postman — for testing the API

---

# Project Structure
task09/
├── controllers/
│   └── userController.js
├── db/
│   ├── connection.js
│   ├── schema.js
│   └── seeder.js
├── routes/
│   └── userRoutes.js
├── index.js
├── .env
├── package.json
└── README.md

---

# Setup Instructions

## 1. Install Requirements
- `Make sure you have the following installed:`
 - Node.js
 - PostgreSQL

Then clone this repo and install dependencies:

```bash
git clone "https://github.com/alhassan-h/3mtt-sd-task09.git"
cd 3mtt-sd-task09
npm install
```

## 2. Create PostgreSQL Database
`Connect via psql or pgAdmin and run:`

```sql
CREATE DATABASE my_crud_db;

\c my_crud_db;

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INTEGER
);
```

## 3. Configure Environment Variables
`Create a .env file in your project root:`

```env
PORT=3000
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_NAME=my_crud_db
```

## 4. Start the Server
```bash
npm start
```
`Server will run at: http://localhost:5000`

# API Endpoints

## GET /users
`Retrieve all users.`

**Response**

```json
[
  {
    "id": "uuid...",
    "name": "John",
    "email": "john@example.com",
    "age": 30
  }
]
```

## GET /users/:id
`Retrieve a specific user by UUID.`

**Response**

```json
{
  "id": "uuid...",
  "name": "John",
  "email": "john@example.com",
  "age": 30
}
```

## POST /users
`Create a new user.`

**Request Body**

```json
{
  "name": "Jane",
  "email": "jane@example.com",
  "age": 25
}
```

**Response**

```json
{
  "message": "User created successfully",
  "user": {
    "id": "5afca462-7204-4484-bd9c-9da0b92bb447",
    "name": "Jane",
    "email": "jane2@example.com",
    "age": 25
  }
}
```

## PUT /users/:id
`Update a user.`

**Request Body**

```json
{
  "name": "Jane Updated",
  "email": "jane_updated@example.com",
  "age": 26
}
```

**Response**

```json
{
  "message": "User updated successfully",
  "user": {
    "id": "5afca462-7204-4484-bd9c-9da0b92bb447",
    "name": "Jane updated",
    "email": "jane_updated@example.com",
    "age": 26
  }
}
```

## DELETE /users/:id
`Delete a user.`

**Response**

```json
{
  "message": "User deleted successfully",
  "user": {
    "id": "5afca462-7204-4484-bd9c-9da0b92bb447",
    "name": "Jane",
    "email": "jane2@example.com",
    "age": 25
  }
}
```

---

# Error Handling

## Status Code	Reason
- 400	Invalid input or bad request
- 404	User not found
- 500	Internal server/database error

***All errors return structured JSON messages like:***

```json
{
  "error": "User not found"
}
```

---

# Testing the API

**Use Postman, Insomnia, Thunder Client or any API client.**

`Don’t forget to:`

- Set Content-Type: application/json for POST and PUT
- Replace :id in routes with actual UUIDs

---

# Adherence to Project Instructions

| Requirement                             | Completed |
| --------------------------------------- | ----------|
| Working Express.js server               | Yes       |
| PostgreSQL database connection          | Yes       |
| CRUD API endpoints implemented          | Yes       |
| Basic error handling                    | Yes       |
| Testable with Postman or similar        | Yes       |
| Instructions and documentation included | Yes       |

---

# Author
Built with ❤️ by Hassan Alhassan
GitHub: github.com/alhassan-h
