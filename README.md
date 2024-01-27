# Todo App with MongoDB, Express, React, and Node

## Overview

This is a simple Todo application built with the MERN (MongoDB, Express, React, Node) stack. It allows users to create, read, update, and delete tasks. The application uses MongoDB as the database to store tasks, Mongoose as the ODM (Object Data Modeling) library for MongoDB, Express as the backend framework, React for the frontend, and Node.js as the runtime environment.

## Technologies Used

- **MongoDB:** A NoSQL database used to store and manage tasks.
- **Mongoose:** An ODM library for MongoDB and Node.js that provides a straight-forward, schema-based solution for modeling application data.
- **Express:** A web application framework for Node.js that handles the backend logic and API routes.
- **React:** A JavaScript library for building user interfaces, used for the frontend of the application.
- **Node.js:** A JavaScript runtime for executing server-side code.
- **dotenv:** A zero-dependency module for loading environment variables from a .env file.

## Prerequisites

Before you start, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB (Make sure MongoDB is running locally or update the connection string accordingly)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abhishekpaturkar/React-todo-app.git
   cd React-todo-app
   ```

2. Install dependencies:

   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```

## Configuration

1. Create a `.env` file in the `server` directory and provide the following variables:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

   Replace `your_mongodb_connection_string` with the actual connection string.

## Running the Application

1. Start the server:

   ```bash
   cd server
   npm start
   ```

   The server will run on `http://localhost:3000`.

2. Start the client:

   ```bash
   cd client
   npm start
   ```

   The client will run on `http://localhost:5173`.

3. Open your browser and go to `http://localhost:5173` to access the Todo app.

![Screenshot](React.jpg)

## Usage

- Add a new task by entering the task description and clicking the "Add Task" button.
- Mark tasks as completed by clicking the checkbox next to each task.
- Edit a task by clicking the "Edit" button and update the task description.
- Delete a task by clicking the "Delete" button.

## Contributing

Feel free to contribute to the project. You can create issues, submit pull requests, or suggest new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
