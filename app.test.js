// __tests__/api.test.js

const request = require("supertest");
const app = require("../index"); //
const Task = require("../models/Task");
const User = require("../models/user");

let authToken; // Store authentication token for authenticated requests

beforeAll(async () => {
  // Register a test user
  await User.deleteMany(); // Clean up any existing users
  await request(app).post("/users/register").send({
    name: "Test User",
    email: "test@example.com",
    password: "password123",
  });

  // Login test user and retrieve authentication token
  const loginResponse = await request(app).post("/users/login").send({
    email: "test@example.com",
    password: "password123",
  });
  authToken = loginResponse.body.token;
});

afterAll(async () => {
  await Task.deleteMany(); // Clean up created tasks
  await User.deleteMany(); // Clean up test user
});

describe("User Management Endpoints", () => {
  it("should register a new user successfully", async () => {
    const response = await request(app).post("/users/register").send({
      name: "New User",
      email: "newuser@example.com",
      password: "newuserpassword",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("user");
    expect(response.body.message).toBe("user created successfully");
  });

  it("should login an existing user successfully", async () => {
    const response = await request(app).post("/users/login").send({
      email: "newuser@example.com",
      password: "newuserpassword",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("user");
    expect(response.body).toHaveProperty("token");
    expect(response.body.message).toBe("Logged in  successfully");
  });
});

describe("Task Management Endpoints", () => {
  let testTaskId;

  it("should create a new task successfully", async () => {
    const response = await request(app)
      .post("/tasks")
      .set("Authorization", `Bearer ${authToken}`)
      .send({
        description: "Test Task Description",
        completed: false,
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("task");
    expect(response.body.message).toBe("Task Created Successfully");
    testTaskId = response.body.task._id; // Store task ID for later tests
  });

  it("should retrieve all tasks successfully", async () => {
    const response = await request(app)
      .get("/tasks")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("tasks");
    expect(response.body.count).toBeGreaterThanOrEqual(1); // At least one task should be retrieved
    expect(response.body.message).toBe("Tasks Fetched Successfully");
  });

  it("should retrieve a specific task successfully", async () => {
    const response = await request(app)
      .get(`/tasks/${testTaskId}`)
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("task");
    expect(response.body.message).toBe("Task Fetched Successfully");
    expect(response.body.task._id).toBe(testTaskId);
  });

  it("should update a specific task successfully", async () => {
    const response = await request(app)
      .patch(`/tasks/${testTaskId}`)
      .set("Authorization", `Bearer ${authToken}`)
      .send({
        description: "Updated Task Description",
        completed: true,
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Task Updated Successfully");
  });

  it("should delete a specific task successfully", async () => {
    const response = await request(app)
      .delete(`/tasks/${testTaskId}`)
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("task");
    expect(response.body.message).toBe("Task Deleted Successfully");
    expect(response.body.task._id).toBe(testTaskId);
  });
});
