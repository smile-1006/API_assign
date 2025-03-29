# **EmployWise Frontend** 🚀  

## **📌 Project Description**  
EmployWise is a React-based web application designed for managing employee records. This project includes user authentication, user list management, and CRUD operations for employee data.  

---

## **🌐 Live Demo (if hosted)**  
👉 [Provide Live Link Here]  

---

## **📂 Folder Structure**  
```
employwise-frontend/
│── src/
│   ├── components/        # Reusable React components
│   ├── context/           # Authentication and global state management
│   ├── pages/             # Page components (Login, User List, Edit User)
│   ├── services/          # API requests
│   ├── styles/            # CSS files for styling
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│── public/                # Static assets
│── .gitignore
│── package.json
│── README.md
```

---

## **🔧 Tech Stack**  
- **Frontend:** React.js, React Router  
- **Styling:** CSS  
- **State Management:** Context API  
- **API Calls:** Axios  

---

## **🚀 Getting Started**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/employwise-frontend.git
cd employwise-frontend
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Start the Development Server**  
```bash
npm start
```
The app runs on **http://localhost:3000/**  

---

## **🔑 API Authentication**  
- Users must **log in** to access the dashboard.  
- The authentication token is stored in **localStorage**.  
- API requests require the token for authorization.  

---

## **🛠 API Endpoints**  

### **🔹 User Authentication**  
| Method | Endpoint      | Description        | Required Params |
|--------|-------------|-------------------|----------------|
| POST   | `/login`    | User Login        | `{ email, password }` |

### **🔹 User Management**  
| Method | Endpoint      | Description        | Required Params |
|--------|-------------|-------------------|----------------|
| GET    | `/users`    | Fetch all users   | `Auth Token`   |
| GET    | `/users/:id` | Get user details | `Auth Token`   |
| PUT    | `/users/:id` | Update user       | `Auth Token, User Data` |
| DELETE | `/users/:id` | Delete user       | `Auth Token`   |

---

## **📂 Postman API Collection**  
Find the **Postman API collection** in the Google Drive link below:  
🔗 [Google Drive Link Here]  

---

## **📌 Features**  
✅ **Secure Login & Authentication**  
✅ **Fetch & Display User List**  
✅ **Edit & Delete Users**  
✅ **Pagination for User List**  
✅ **Responsive UI Design**  

---

## **📝 License**  
This project is licensed under the MIT License.  

---

## **🤝 Contributing**  
Feel free to submit a pull request or report issues.  

🚀 **Happy Coding!** 🎉  
