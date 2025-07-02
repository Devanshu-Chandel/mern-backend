# 🧠 MERN Backend – Habit Tracker API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage daily habits.  
Supports full CRUD operations: Create, Read, Update, and Delete habits.

---

## 🚀 Features

- ✅ Create new habits
- 📋 View all habits
- ✏️ Update habit status (title/completed)
- ❌ Delete habits
- 📦 MongoDB database integration using Mongoose
- 🌐 Tested with Postman

---

## 📁 Project Structure

mern-backend/
├── models/
│ └── Habit.js
├── routes/
│ └── habits.js
├── index.js
├── package.json
└── .gitignore

yaml
Copy
Edit

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Postman (for testing)

---

## 📌 API Endpoints

| Method | Route               | Description              |
|--------|---------------------|--------------------------|
| POST   | `/habit`            | Create a new habit       |
| GET    | `/habits`           | Get all habits           |
| PATCH  | `/habit/:id`        | Update a habit by ID     |
| DELETE | `/habit/:id`        | Delete a habit by ID     |

---

## 🛠️ How to Run Locally

1. **Clone the repo**
```bash
git clone https://github.com/Devanshu-Chandel/mern-backend.git
cd mern-backend
Install dependencies

bash
Copy
Edit
npm install
Create .env

env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/habit-db
Run the server

bash
Copy
Edit
node index.js
Test with Postman
Use routes like:

bash
Copy
Edit
POST    http://localhost:3000/habit
GET     http://localhost:3000/habits
PATCH   http://localhost:3000/habit/:id
DELETE  http://localhost:3000/habit/:id
📮 Sample POST Body
json
Copy
Edit
{
  "title": "Learn Express",
  "completed": false
}
✍️ Author
Made with 🔥 by Devanshu Chandel

🙌 Contributions
Have ideas? Found bugs? Feel free to fork and contribute!

yaml
Copy
Edit

---
