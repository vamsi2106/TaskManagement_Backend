## This is Task Management Platform Backend with `Express`, `Zod`, `Nodemon`, `JWT`, `Mongoose`

### Functionality

- Implemented methods for user registration, login.
- Ensured validation and error handling were in place for all user-related activities.
- Incorporated authentication methods like JWT for secure access.
- Developed methods for CRUD operations on tasks.
- Ensured validation and error handling for task operations.
- Designed routes for user registration, login, and profile management.
- Implemented routes for CRUD operations on tasks.
- Used middlewares for authentication to secure the API.

### Deployment

The backend is deployed on the Render platform and can be accessed at:

```bash
https://epimax-backend-kr7u.onrender.com
```

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/vamsi2106/epiMax_Backend.git
   ```

2. Open the project in your code editor.

3. Set up required environment variables like `MONGO_URL` and `JWT_SECRET_KEY` in the environment file.

4. Install required dependencies:

   ```bash
    npm install express  nodemon mongoose bcrypt jsonwebtoken body-parse
   ```

5. Run the application server:
   ```bash
    nodemon index.js
   ```

### API Documentation

#### 1. User Registration:

- Endpoint: `https://epimax-backend-kr7u.onrender.com/users/register`
- Response:
  ```json
  {
    "user": {
      "name": "NagasaiVamsi",
      "email": "saivamsi1121@gmail.com",
      "password": "$2b$08$wBoJUlxuAx22qZ7iACO9GuVtdI9tAFXXaCVD0nlyEGCdpMrP5IhEi",
      "_id": "66314f2ae64064d1974f21e9",
      "__v": 0
    },
    "message": "user created successfully"
  }
  ```
- Output:
  ![image](images/register.png)

#### 2. User Login:

- Endpoint: `https://epimax-backend-kr7u.onrender.com/users/login`
- Method: `POST`
- Response:

  ```json
  {
    "user": {
      "_id": "663127a17de6f8ce74c4d43d",
      "name": "vamsi",
      "email": "vamsi@gmail.com",
      "password": "$2b$08$ZrnGYD3PjNZyncTgmgZdQ.WMLSOmj6oBQVdYIp6.0xz38LuJrj47e",
      "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjMxMjdhMTdkZTZmOGNlNzRjNGQ0M2QiLCJpYXQiOjE3MTQ1MDcxNTh9.8EBN4JwjO8_dCl7QkNyMufU-A8BjV7f8TmTyaWQsSPA",
    "message": "Logged in  successfully"
  }
  ```

  - Output:
    ![image](images/login.png)

#### 3. Add a New Task:

- Endpoint: `https://epimax-backend-kr7u.onrender.com/tasks`
- Method: `POST`
- Response:
  ```json
  {
    "task": {
      "description": "update code changes to git",
      "completed": false,
      "owner": "66314f2ae64064d1974f21e9",
      "_id": "663153d8e64064d1974f21fb",
      "createdAt": "2024-04-30T20:26:00.379Z",
      "updatedAt": "2024-04-30T20:26:00.379Z",
      "__v": 0
    },
    "message": "Task Created Successfully"
  }
  ```
  -Output:
  ![image](images/AddTask.png)

#### 4. Get All Tasks:

- Endpoint: `https://epimax-backend-kr7u.onrender.com/tasks`
- Method: `GET`
- Response:

  ```json
  {
    "tasks": [
      {
        "_id": "663151fde64064d1974f21f0",
        "description": "Pratice python functions",
        "completed": false,
        "owner": "66314f2ae64064d1974f21e9",
        "createdAt": "2024-04-30T20:18:05.872Z",
        "updatedAt": "2024-04-30T20:18:05.872Z",
        "__v": 0
      },
      {
        "_id": "663153a3e64064d1974f21f5",
        "description": "Prepare for interview",
        "completed": true,
        "owner": "66314f2ae64064d1974f21e9",
        "createdAt": "2024-04-30T20:25:07.596Z",
        "updatedAt": "2024-04-30T20:25:07.596Z",
        "__v": 0
      }
    ],
    "count": 2,
    "message": "Tasks Fetched Successfully"
  }
  ```

  - Output:
    ![image](images/AllTasks.png)

#### 5. Get A Specific Tasks:

- Endpoint: `https://epimax-backend-kr7u.onrender.com/tasks/:id`
- Method: `GET`
- Response:

  ```json
  {
    "task": {
      "_id": "663153d8e64064d1974f21fb",
      "description": "update code changes to git",
      "completed": false,
      "owner": "66314f2ae64064d1974f21e9",
      "createdAt": "2024-04-30T20:26:00.379Z",
      "updatedAt": "2024-04-30T20:26:00.379Z",
      "__v": 0
    },
    "message": "Task Fetched Successfully"
  }
  ```

  - Output:
    ![image](images/getTaskByID.png)

#### 6. Update a Specific Task:

- Endpoint: `https://epimax-backend-kr7u.onrender.com/tasks/:id`
- Method: `PUT`
- Request Body:
  ```json
  {
    "description": "Updated Task Description",
    "completed": true
  }
  ```
- Response:
  ```json
  {
    "message": "Task Updated Successfully"
  }
  ```
  - Output:
    ![image](images/UpdateTaskByID.png)

#### 7. Delete a Task:

- Endpoint: `https://epimax-backend-kr7u.onrender.com/tasks/:id`
- Method: `DELETE`
- Response:

  ```json
  {
    "task": {
      "_id": "663153d8e64064d1974f21fb",
      "description": "commited the code changes to git repo",
      "completed": true,
      "owner": "66314f2ae64064d1974f21e9",
      "createdAt": "2024-04-30T20:26:00.379Z",
      "updatedAt": "2024-04-30T20:32:39.053Z",
      "__v": 0
    },
    "message": "Task Deleted Successfully"
  }
  ```

  ![images](images/DELETETASK.png)

```

### Summary

- This backend serves as the foundation for a Task Management Platform, offering essential functionalities such as user registration, authentication, task creation, retrieval, update, and deletion.
- It leverages modern technologies like Express, Mongoose, and JWT for efficient and secure operations.
- Detailed documentation is provided for each API endpoint, facilitating easy integration with frontend applications and ensuring smooth interaction with the backend.
- Encapsulation principles and middleware usage enhance code organization, maintainability, and security.
```
