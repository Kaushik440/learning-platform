🎓 Learning Platform – Frontend Web Application
📌 Project Overview

The Learning Platform is a front-end web application designed to simulate an online course management system.
It allows users to browse courses, view course details, register/login, and access a student dashboard.

This project follows a modular, service-based architecture to ensure scalability and easy integration with REST APIs in the future.

🚀 Features

🏠 Home Page with featured courses

📚 Courses listing with search & filter

📖 Course details page

🔐 Login & Signup with form validation

👤 Student Dashboard

🔄 Reusable UI components

📱 Fully Responsive Design

🧠 Service layer ready for REST API integration

💾 Local Storage based authentication (frontend simulation)

🏗 Project Architecture

This project follows:

Separation of Concerns

Modular JavaScript structure

Service-based architecture

Component-based UI approach

learning-platform/
│
├── index.html
├── courses.html
├── course-details.html
├── login.html
├── signup.html
├── dashboard.html
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── data/
│   ├── utils/
│   ├── styles/
│   └── app.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
🧑‍💻 Technologies Used

HTML5

CSS3

JavaScript (ES6+)

LocalStorage

Modular JS architecture

🔌 REST API Ready Design

Although currently frontend-only, the project includes a services layer that simulates API calls.

Example future integration:

GET    /api/courses
GET    /api/courses/:id
POST   /api/auth/login
POST   /api/auth/register
GET    /api/user/profile

This ensures easy backend integration without structural changes.

🛠 How to Run the Project

Download or clone the repository.

Open the project folder in VS Code.

Open index.html in browser.

Use Live Server extension (recommended).

📈 Future Enhancements

Backend integration (Node.js / PHP)

Database connection (MySQL / MongoDB)

JWT Authentication

Admin Panel

Instructor Dashboard

Course enrollment system

Payment integration

Video streaming support

🎯 Academic Objective

This project was developed as part of the Web Technology coursework to demonstrate:

Frontend development skills

Modular architecture design

UI/UX implementation

Scalable application structure

👨‍🎓 Author

Kaushik Pandey
Master of Computer Applications (MCA)
Web Technology Project

📄 License

This project is created for educational purposes only.