🚀 IMSET Backend – Express.js API

Backend project built using Node.js, Express 5, and MongoDB (Mongoose).

This project is intended for educational purposes and backend practice.

📌 Technologies Used

Node.js

Express 5

MongoDB

Mongoose

dotenv

CORS

Nodemon

📦 Requirements

Before running the project, make sure you have:

✅ Node.js (v18+ recommended)

✅ npm (comes with Node.js)

✅ MongoDB (Local installation OR MongoDB Atlas)

Check your installation:

node -v
npm -v
📥 Installation
1️⃣ Clone the repository
git clone <repository-url>
2️⃣ Navigate into the project folder
cd imset-backend
3️⃣ Install dependencies
npm install

This will install:

express

mongoose

cors

dotenv

nodemon

⚙️ Environment Variables Setup

This project uses dotenv, so you must create a .env file in the root directory.

Step 1: Create .env file
touch .env

Or create it manually.

Step 2: Add the following variables inside .env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/imset-db
🔹 If Using MongoDB Atlas

Replace MONGO_URI with your Atlas connection string:

PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/imset-db

⚠️ Never push your .env file to GitHub.

▶️ Running the Project

This project uses nodemon in development mode.

Start the server with:

npm run dev

This runs:

nodemon server.js

Nodemon automatically restarts the server when you modify files.

🌐 Access the API

Once running, open your browser:

http://localhost:5000

If the port is changed in .env, use that port instead.

📁 Project Structure
imset-backend/
│
├── server.js # Main entry point
├── models/ # Mongoose models
├── routes/ # Express routes
├── controllers/ # Business logic
├── .env # Environment variables (NOT pushed)
├── package.json
└── node_modules/
🧠 How the Project Works

server.js initializes Express.

dotenv loads environment variables.

Mongoose connects to MongoDB using MONGO_URI.

Routes handle incoming API requests.

Controllers process logic.

Models define MongoDB schemas.

🧪 Testing the API

You can test the API using:

Postman

Thunder Client (VS Code extension)

Browser (for GET routes)

Example:

GET http://localhost:3000/api/students

(Adjust based on your routes.)

❗ Common Errors & Solutions
❌ Error: Cannot connect to MongoDB

Make sure:

MongoDB is running locally
OR

Your MongoDB Atlas connection string is correct

❌ Error: Port already in use

Change the port inside .env:

PORT=4000
❌ nodemon not found

Run:

npm install
🔒 Good Practices for Students

Always run npm install after cloning.

Never upload .env to GitHub.

Use .gitignore to ignore:

node_modules

.env

Keep your project organized (routes, models, controllers).

📜 Scripts Available

From package.json:

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"dev": "nodemon server.js"
}

Available commands:

npm run dev
👨‍💻 Author

IMSET Backend Project
Educational Use Only
