# Full-Stack Login & Registration System

A complete full-stack authentication application built using **Spring Boot (Java)** for backend and **React** for frontend.  
This project provides secure user login & registration with validation and clean UI.

---

## 🚀 Features

- User Registration
- User Login / Authentication
- Form Validation (Frontend + Backend)
- Password Encryption (BCrypt / Spring Security)
- REST API Integration
- CORS Handling
- Responsive UI
- Clean Project Structure

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
Frontend | React, Axios, CSS  
Backend | Java, Spring Boot, Spring Web  
Database | MySQL  
Security | BCrypt / Spring Security  
Build Tool | Maven  
Version Control | Git & GitHub  

---

## 📁 Folder Structure
project-root/
├── backend/ # Spring Boot API
│ ├── src/
│ └── pom.xml
└── frontend/ # React UI
├── src/
└── package.json


---

## ⚙️ Backend Setup (Spring Boot)

```bash
cd backend
mvn clean install
mvn spring-boot:run

http://localhost:8080

💻 Frontend Setup (React)
cd frontend
npm install
npm start

http://localhost:3000


| Method | Endpoint    | Description                    |
| ------ | ----------- | ------------------------------ |
| POST   | `/register` | Create new user                |
| POST   | `/login`    | Validate and authenticate user |

👤 Author

Mohamed Zameer
