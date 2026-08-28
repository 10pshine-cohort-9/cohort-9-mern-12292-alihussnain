# 📝 Notes App — MERN Stack

A full-stack notes application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.

---

## ✨ Features

- User Authentication (Signup, Login, Logout)
- JWT-based authentication
- Create, Read, Update, Delete notes
- Rich Text Editor (bold, italic, lists, links, images)
- User-specific notes (each user sees only their own notes)
- HTML sanitization for security
- Pino Logger for HTTP request logging
- Global exception handling
- Unit Tests (Backend: Mocha/Chai, Frontend: Vitest)

---

## 🛠️ Tech Stack

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt (Password Hashing)
- Pino Logger
- Sanitize-HTML

### Frontend
- React 19
- Vite
- React Router DOM
- Axios
- React Quill (Rich Text Editor)

### Testing
- Backend: Mocha, Chai, Supertest
- Frontend: Vitest, React Testing Library

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js 20+
- MongoDB (local or Atlas)

### Step 1: Clone the Repository


git clone https://github.com/Aihussnaintalib/cohort-9-mern-12292-alihussnain.git
cd cohort-9-mern-12292-alihussnain
Step 2: Install Backend Dependencies

cd backend
npm install
Step 3: Install Frontend Dependencies
bash
cd frontend
npm install
Step 4: Environment Variables
Create .env file in backend/:

env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notes_app
JWT_SECRET=your_super_secret_key_here_min_32_characters
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
LOG_LEVEL=info
Create .env file in frontend/:

env
VITE_API_URL=http://localhost:5000
🏃 Running the Application
Start Backend Server

cd backend
npm run dev
Server runs at: http://localhost:5000

Start Frontend Server

cd frontend
npm run dev
Frontend runs at: http://localhost:5173

📡 API Endpoints
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login user
POST	/api/auth/logout	Logout user
POST	/api/notes	Create a note
GET	/api/notes	Get all notes
GET	/api/notes/:id	Get a single note
PUT	/api/notes/:id	Update a note
DELETE	/api/notes/:id	Delete a note
GET	/api/health	Health check
🧪 Testing
Run Backend Tests

cd backend
npm test
Run Frontend Tests

cd frontend
npm test
📁 Project Structure

cohort-9-mern-12292-alihussnain/
├── backend/
│   ├── src/
│   │   ├── config/         # Database & Logger config
│   │   ├── controllers/    # Auth & Notes controllers
│   │   ├── models/         # User & Note models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Auth & Error handlers
│   │   └── utils/          # JWT & Async handlers
│   ├── tests/              # Backend unit tests
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/     # Login, Signup, NoteEditor
│   │   ├── pages/          # Dashboard, Profile, EditNote
│   │   ├── services/       # API service
│   │   ├── context/        # Auth Context
│   │   └── hooks/          # Custom hooks
│   ├── .env
│   ├── package.json
│   └── vite.config.js
├── README.md
└── .gitignore
👤 Contributors
Ali Hussnain — @Aihussnaintalib

