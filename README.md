# Secure Notes API

## 📌 Project Overview
This is a secure and scalable **RESTful API** built using **Express.js** that allows users to create, read, update, and delete notes. Users can also share notes with others and search for notes based on keywords. The API includes authentication, rate limiting, and request throttling to ensure security and performance.

---

## ⚙️ Tech Stack & Choices

### **Framework:** Express.js
- Chosen for its **lightweight**, **fast**, and **flexible** nature.
- Simplifies middleware and routing logic.
- Large community and ecosystem.

### **Database:** MongoDB (via Mongoose ODM)
- **Flexible schema** allows easy scaling.
- Supports **full-text search indexing**, making keyword search efficient.
- Hosted on **MongoDB Atlas** for cloud scalability.

### **Authentication:** JSON Web Tokens (JWT)
- JWT is used to securely authenticate users.
- Ensures **stateless authentication**, making it scalable.

### **Rate Limiting & Throttling:** Express-Rate-Limit
- Prevents API abuse by limiting excessive requests from a single IP.
- Helps mitigate **DDoS attacks**.

### **Testing Framework:** Jest + Supertest
- **Jest** for unit testing.
- **Supertest** for integration testing of API endpoints.

### **Other 3rd-Party Libraries Used:**
| Library           | Purpose                                    |
|------------------|--------------------------------|
| bcryptjs        | Hashing passwords securely |
| dotenv         | Managing environment variables |
| mongoose      | ODM for MongoDB |
| jsonwebtoken  | Generating and verifying JWT tokens |
| helmet        | Security middleware to protect against common attacks |
| morgan        | Logging HTTP requests |
| express-rate-limit | Implementing rate limiting |
| supertest     | API endpoint testing |

---

## 🛠️ Setup & Installation

### **1. Clone the Repository**
```sh
git clone https://github.com/ifejibola/speer.git
cd folder
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Create a `.env` File**
Create a `.env` file in the project root with the following variables:
```ini
PORT=8080
MONGO_URI=mongodb+srv://your_user:your_password@your_cluster.mongodb.net/notesDB?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

### **4. Start the Server**
#### **Development Mode (Auto-restart with Nodemon)**
```sh
npm run dev
```
#### **Production Mode**
```sh
npm start
```

The API should now be running on `http://localhost:8080`.

---

## 🔍 API Endpoints

### **Authentication**
| Method | Endpoint               | Description |
|--------|------------------------|-------------|
| POST   | `/api/auth/signup` | Register a new user |
| POST   | `/api/auth/login`  | Authenticate user & return JWT |

### **Notes Management**
| Method | Endpoint                     | Description |
|--------|------------------------------|-------------|
| GET    | `/api/notes`                 | Get all notes of the authenticated user |
| GET    | `/api/notes/:id`             | Get a specific note by ID |
| POST   | `/api/notes`                 | Create a new note |
| PUT    | `/api/notes/:id`             | Update a note by ID |
| DELETE | `/api/notes/:id`             | Delete a note by ID |
| POST   | `/api/notes/:id/share`       | Share a note with another user |

### **Search**
| Method | Endpoint                 | Description |
|--------|--------------------------|-------------|
| GET    | `/api/search?q=:query` | Search notes by keyword |

