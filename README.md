# 📝 Notes App — MERN Stack

> **Cohort 9 — MERN (NodeJS + ReactJS) Assignment**  
> A full-stack notes application with user authentication, rich text editing, and code quality analysis.




## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [SonarQube Integration](#sonarqube-integration)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Contributors](#contributors)
- [License](#license)

---

## 📌 Overview

This is a **full-stack notes application** built with the **MERN** (MongoDB, Express.js, React.js, Node.js) stack. Users can **sign up**, **log in**, create, edit, and delete notes with a **rich text editor**. The application includes **Pino logger** for request logging, **global exception handling**, **unit tests** (Mocha/Chai for backend, Jest for frontend), and **SonarQube** for code quality analysis.

---

## ✨ Features

### 🔐 Authentication & Authorization
- User signup, login, and logout
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes (notes are user-specific)

### 📝 Note Management
- Create, read, update, and delete notes
- Rich text editing (bold, italic, lists, links, images)
- User-specific notes (each user sees only their own notes)
- HTML sanitization for security

### 📊 Logging & Error Handling
- Pino logger for HTTP request/response logging
- Structured logging with redaction of sensitive data
- Global exception handling middleware
- Graceful shutdown on server termination

### 🧪 Testing
- Backend: Mocha, Chai, Supertest
- Frontend: Vitest, React Testing Library
- In-memory MongoDB for tests
- Cross-user ownership tests

### 📈 Code Quality
- SonarQube integration for continuous code quality analysis
- ESLint for code linting
- Code coverage reporting

---

## 🛠️ Tech Stack

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20+ | Runtime environment |
| Express.js | 5.x | Web framework |
| MongoDB | 9.x | Database |
| Mongoose | 9.x | ODM |
| JWT | 9.x | Authentication |
| Bcrypt | 6.x | Password hashing |
| Pino | 10.x | Logging |
| Pino-HTTP | 11.x | HTTP request logging |
| Sanitize-HTML | 2.x | HTML sanitization |

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.x | UI library |
| Vite | 8.x | Build tool |
| React Router DOM | 7.x | Routing |
| Axios | 1.x | HTTP client |
| React Quill | 2.x | Rich text editor |
| Sanitize-HTML | 2.x | HTML sanitization |

### Testing & Quality
| Technology | Purpose |
|------------|---------|
| Mocha | Backend test framework |
| Chai | Backend assertions |
| Supertest | Backend HTTP testing |
| Vitest | Frontend test framework |
| React Testing Library | Frontend component testing |
| SonarQube | Code quality analysis |

---

## 🏗️ Architecture
