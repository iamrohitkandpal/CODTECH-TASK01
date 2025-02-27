# InstaTalk App

![image](https://github.com/user-attachments/assets/afd3ecfb-7d4e-4fe0-87ec-bd19aad101b8)

---

## **Project Details**  

### Developer Information  
- **Name:** Rohit Navinchandra Kandpal  
- **Company:** CODTECH IT SOLUTIONS PVT. LTD.  
- **Employee ID:** CT08DHC  
- **Domain:** Full Stack Web Development  

### Internship Duration  
- **Start Date:** 20th December 2024  
- **End Date:** 20th January 2025  

### Mentor  
- **Name:** Neela Santhosh Kumar  

This project is part of my professional journey at CODTECH IT SOLUTIONS, showcasing my expertise in full-stack web development and dedication to building innovative solutions under expert guidance.  

---

**InstaTalk** is a real-time chat application built using the latest technologies. This project is a work in progress, and ongoing improvements are being made. It includes both the backend and frontend, providing a complete full-stack solution for modern chat functionality.

This application is designed with scalability, performance, and user experience in mind. Currently, the project is in active development, with several bugs being addressed and more exciting features yet to be added. Here’s a comprehensive overview of InstaTalk, along with detailed information on how to set it up and use it.

---

### 🚀 **Table of Contents**

1. **Technologies Used**
2. **Project Structure**
3. **Backend**
    - Environment Variables
    - API Endpoints
    - Socket.IO Setup
4. **Frontend**
    - Available Scripts
    - Key Components
    - State Management
5. **Setup and Installation**
6. **Project Status**
7. **License**

---

### ⚙️ **Technologies Used**

#### **Backend**

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Web application framework for Node.js, used for building RESTful APIs.
- **MongoDB**: NoSQL database for flexible data storage.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: For secure authentication using JSON Web Tokens.
- **Cloudinary**: For handling media storage.
- **Socket.IO**: Real-time, bidirectional communication.

#### **Frontend**

- **React**: JavaScript library for building dynamic user interfaces.
- **Vite**: Fast build tool for React applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI design.
- **DaisyUI**: Component library for faster styling with Tailwind CSS.
- **Zustand**: A simple state management tool for React.
- **Axios**: For making HTTP requests.
- **React Router**: For handling routing within the app.

---

### 📂 **Project Structure**

```
InstaTalk App/
│
├── backend/
│   ├── .env                # Environment variables
│   ├── package.json        # Backend dependencies
│   ├── src/                # Source files for the backend
│   │   ├── controllers/    # Controller logic for requests
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API route definitions
│   │   ├── middleware/     # Middleware for authentication
│   ├── server.js           # Entry point for the backend
│
├── frontend/
│   ├── package.json        # Frontend dependencies
│   ├── src/                # Source files for the frontend
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Different pages for routing
│   │   ├── store/          # Zustand store for state management
│   │   ├── utils/          # Utility functions
│
├── README.md               # Project documentation
├── .gitignore              # Git ignore rules
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
```

---

### 🔧 **Backend**

#### **Environment Variables**

Create a `.env` file in the `backend` folder with the following content:

```
PORT=3001
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
NODE_ENV=development
```

#### **API Endpoints**

Here are the key API endpoints available for communication between the backend and frontend:

- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/login**: Login an existing user.
- **POST /api/auth/logout**: Logout the current user.
- **PUT /api/auth/update-profile**: Update the user profile.
- **GET /api/auth/check**: Check if the user is authenticated.

#### **Socket.IO Setup**

The backend uses **Socket.IO** to handle real-time messaging. The `socket.js` file in the backend sets up the server and manages user connections for real-time communication.

Example code for **socket.js**:

```js
import { Server } from 'socket.io';
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"], // Frontend URL
    }
});

let userSocketMap = {}; // Stores user socket connections

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Store socket id for the logged-in user
    const userId = socket.handshake.query.userId;
    if (userId) {
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Notify all clients

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Update clients on disconnection
    });
});

export { io, app, server };
```

---

### 🖥️ **Frontend**

#### **Available Scripts**

You can run the following scripts in the frontend directory:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs the linter for code quality checks.
- `npm run preview`: Previews the production build.

#### **Key Components**

Here are some of the key components in the frontend:

- **App.jsx**: Main application component.
- **Navbar.jsx**: Navigation bar component.
- **Sidebar.jsx**: Displays a list of contacts.
- **ChatContainer.jsx**: Container for chat messages.
- **MessageInput.jsx**: Input field for sending messages.

#### **State Management**

The frontend uses **Zustand** for state management. Key stores:

- **useAuthStore.js**: Manages user authentication state.
- **useChatStore.js**: Handles the chat state.
- **useThemeStore.js**: Manages the UI theme (light/dark mode).

---

### 🛠️ **Setup and Installation**

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/InstaTalk.git
cd InstaTalk
```

2. **Install backend dependencies**:

```bash
cd backend
npm install
```

3. **Install frontend dependencies**:

```bash
cd frontend
npm install
```

4. **Create environment variables** in the `backend` folder by creating a `.env` file and adding the necessary variables.

5. **Start the backend server**:

```bash
cd backend
npm run dev
```

6. **Start the frontend development server**:

```bash
cd frontend
npm run dev
```

7. **Visit the app** at [http://localhost:5173](http://localhost:5173).

---

### 🚧 **Project Status**

This is an ongoing project, and several features are under development:

- **Bugs**: Some bugs are currently being worked on. The user authentication process may occasionally encounter issues.
- **Upcoming Features**:
  - User groups and channels.
  - Real-time notifications.
  - Media sharing (images, videos).
  - Advanced user settings.

---

### 📄 **License**

This project is licensed under the **MIT License**.

---

This README provides an easy-to-follow guide on setting up and understanding the **InstaTalk** application. It includes all the necessary steps to get started, the technologies used, and insights into the current state of the project.
