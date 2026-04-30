# Inventory App

A full-featured Node.js + Express application showcasing the **MVC (Model-View-Controller)** architecture pattern in action. This project demonstrates real-world best practices with user authentication, file uploads, data validation, and dynamic templating.

## 🎯 Project Overview

**Inventory App** is a comprehensive MVC project for managing product inventory with user authentication. It features a complete CRUD system for products, user management, session handling, and file upload capabilities—all organized following MVC architectural principles.

**Stage**: Fully Functional Educational Project  
**Focus**: MVC architecture, authentication, and real-world patterns  
**Language**: JavaScript (Node.js with ES Modules)  
**Framework**: Express.js  
**Templating**: EJS with Express-EJS-Layouts  
**Port**: 3400

---

## 🛠️ Technologies & Dependencies

**Core Stack**:

- **Node.js** — JavaScript runtime environment with ES Modules
- **Express.js** — Web framework for routing and middleware
- **EJS** — Embedded JavaScript templating engine
- **Express-EJS-Layouts** — Template inheritance and layouts

**Advanced Features**:

- **Express-Session** — Session management for user authentication
- **Cookie-Parser** — Parse and handle cookies
- **Express-Validator** — Data validation and sanitization middleware
- **Multer** — File upload handling

**Frontend**:

- **CSS** — Styling (`public/styles.css`)
- **JavaScript** — Client-side interactivity (`public/script.js`)

---

## 📁 Project Structure & MVC Architecture

### What is MVC?

The **MVC pattern** separates an application into three interconnected components:

1. **Model** — Data layer. Manages business logic and database interactions. Defines how data is structured and manipulated.
2. **View** — Presentation layer. Displays data to the user. Contains HTML templates and frontend elements.
3. **Controller** — Logic layer. Handles user requests, processes them, and coordinates between Models and Views. Routes incoming requests to appropriate handlers.

```
MVC/
├── index.js                          # Server entry point & route setup
├── package.json                      # Dependencies and project metadata
├── package-lock.json                 # Locked dependency versions
├── readme.md                         # This file
├── .gitignore                        # Git ignore rules
│
├── public/                           # Static assets served to clients
│   ├── styles.css                   # Application styling
│   └── script.js                    # Client-side JavaScript
│
└── src/                              # Application source code
    ├── controllers/                  # REQUEST HANDLERS (MVC - Controller)
    │   ├── home.controller.js       # Handles home page & navigation
    │   ├── product.controller.js    # Handles product CRUD operations
    │   └── user.controller.js       # Handles user authentication & registration
    │
    ├── models/                       # DATA LAYER (MVC - Model)
    │   ├── product.model.js         # Product data structure & logic
    │   └── user.model.js            # User data structure & logic
    │
    ├── views/                        # PRESENTATION LAYER (MVC - View)
    │   ├── layout.ejs               # Base layout template (used by all pages)
    │   ├── home.ejs                 # Home page view
    │   ├── product.ejs              # Product details/list view
    │   ├── new-product.ejs          # Form to add new product
    │   ├── update-product.ejs       # Form to edit product
    │   ├── login.ejs                # Login page view
    │   └── sign-up.ejs              # User registration page view
    │
    └── middlewares/                  # MIDDLEWARE FUNCTIONS (cross-cutting concerns)
        ├── auth.middleware.js        # Authentication & authorization checks
        ├── validation.middleware.js  # Data validation for forms
        ├── file-upload.middleware.js # Handle file uploads (multer)
        └── lastVisit.middleware.js   # Track user's last visit
```

### Folder Breakdown

**`src/controllers/`** — **MVC Controller Layer**

- `home.controller.js` → Handles home page requests
- `product.controller.js` → Handles all product operations (create, read, update, delete)
- `user.controller.js` → Handles user authentication, login, signup, logout
- These files contain the business logic that processes user requests and determines what data to fetch and what view to display

**`src/models/`** — **MVC Model Layer**

- `product.model.js` → Defines Product data structure and contains methods for database operations
- `user.model.js` → Defines User data structure and contains methods for user management
- Models handle data validation, business logic, and all database interactions
- Currently uses in-memory storage or file-based storage (no external database)

**`src/views/`** — **MVC View Layer**

- EJS templates that render the user interface
- `layout.ejs` → Master template inherited by all pages (header, footer, navigation)
- `home.ejs` → Landing/home page
- `product.ejs` → Displays products
- `new-product.ejs` → Form for creating products
- `update-product.ejs` → Form for editing products
- `login.ejs` → User login form
- `sign-up.ejs` → User registration form
- Views receive data from controllers and display it to users

**`src/middlewares/`** — **Cross-Cutting Concerns**

- `auth.middleware.js` → Protects routes requiring authentication
- `validation.middleware.js` → Validates form data before processing
- `file-upload.middleware.js` → Handles file uploads (e.g., product images)
- `lastVisit.middleware.js` → Tracks when users last visited

**`public/`** — **Static Assets**

- `styles.css` → Application styling and layout
- `script.js` → Client-side JavaScript for interactivity

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher) — [Download here](https://nodejs.org/)
- A code editor (VS Code recommended)
- Terminal/Command Prompt

### Installation

1. **Navigate to the project directory:**

    ```bash
    cd MVC
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

    This installs Express.js, EJS, session management, file upload handling, and all required packages.

3. **Start the server:**

    ```bash
    npm start
    ```

    or

    ```bash
    node index.js
    ```

4. **Access the application:**

    ```
    Open your browser and navigate to: http://localhost:3400
    ```

    You'll see the home page with navigation to products and user authentication options.

---

## ✨ Implemented Features

- ✅ **User Authentication** — Sign up, login, logout with session management
- ✅ **Product CRUD Operations** — Create, read, update, delete products
- ✅ **File Uploads** — Upload product images or files
- ✅ **Data Validation** — Form validation on server-side using Express-Validator
- ✅ **Session Management** — User sessions with Express-Session
- ✅ **Dynamic Templating** — EJS templates with layout inheritance
- ✅ **MVC Architecture** — Properly separated concerns (Models, Views, Controllers)
- ✅ **Middleware Pipeline** — Custom middleware for auth, validation, file uploads, and tracking

---

## 🔄 How MVC Works in This App (Example Flow)

### Adding a New Product

1. **User Request** → User fills out the "Add Product" form and submits
2. **View** (`new-product.ejs`) → Form sends POST request to `/products`
3. **Middleware** → Validation checks product data, file-upload processes images
4. **Controller** (`product.controller.js`) → Receives request, processes it
5. **Model** (`product.model.js`) → Saves product to storage
6. **Controller Response** → Redirects or sends success message
7. **View** (`product.ejs`) → Displays updated product list

### User Login Flow

1. **User Request** → User enters credentials on login form
2. **View** (`login.ejs`) → Form sends POST request to `/users/login`
3. **Middleware** → Validation checks email/password format
4. **Controller** (`user.controller.js`) → Authenticates user
5. **Model** (`user.model.js`) → Looks up user in storage
6. **Session** → Creates session if authentication succeeds
7. **View** (`home.ejs`) → User redirected to home/dashboard

---

---

## 📚 Key Concepts Demonstrated

### 1. **Separation of Concerns**

- Models handle data and business logic
- Controllers handle request processing and routing
- Views handle presentation and user interface
- Middlewares handle cross-cutting concerns

### 2. **Request-Response Cycle**

- Routes direct requests to appropriate controllers
- Controllers use models to fetch/update data
- Views render data for presentation
- Response sent back to client

### 3. **Middleware Pattern**

- Authentication checks if user is logged in
- Validation ensures data integrity
- File uploads handle form data with files
- Last visit tracking monitors user activity

### 4. **Session Management**

- Users authenticate and receive session tokens
- Session data persists across requests
- Logout destroys session

### 5. **Template Inheritance**

- `layout.ejs` serves as the base template
- All pages inherit common header/footer/navigation
- Reduces code duplication

---

## 🛣️ Available Routes

### Home

- `GET /` — Home page

### Products

- `GET /products` — Display all products
- `GET /products/new` — Show form to create product
- `POST /products` — Create new product
- `GET /products/:id/edit` — Show form to edit product
- `POST /products/:id` — Update product
- `GET /products/:id/delete` — Delete product

### Users

- `GET /users/sign-up` — Show registration form
- `POST /users/sign-up` — Register new user
- `GET /users/login` — Show login form
- `POST /users/login` — Authenticate user
- `GET /users/logout` — Logout user

---

## 💡 Development Tips

1. **Understand the Request Flow** — Trace how a request moves from View → Controller → Model → back to View
2. **Keep Models Thin** — Models should focus on data; business logic belongs in controllers
3. **Use Middleware Wisely** — Put cross-cutting logic (auth, validation) in middleware
4. **Test Each Layer** — Test models, then controllers, then views independently
5. **Use EJS Includes** — Break templates into reusable components
6. **Handle Errors Gracefully** — Validate input and provide meaningful error messages
7. **Keep DRY Principle** — Don't repeat code; use layout inheritance and components

---

## 📖 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [EJS Template Engine](https://ejs.co/)
- [MVC Pattern Explanation](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)
- [Express Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)

---

## 🔧 Customization & Extension

### To Add New Features:

1. **Create a new controller** in `src/controllers/` for handling requests
2. **Create models** in `src/models/` for data management
3. **Create views** in `src/views/` for presentation
4. **Add routes** in `index.js` to wire everything together
5. **Add middleware** in `src/middlewares/` if needed for validation or auth

### To Enhance:

- Add a database (MongoDB, PostgreSQL, MySQL)
- Implement REST API with JSON responses
- Add real authentication (JWT, OAuth)
- Implement error handling and logging
- Add unit tests using Jest or Mocha
- Deploy to cloud platform (Heroku, AWS, etc.)

---

## 👤 Author

Created as an educational project to master MVC architecture with Node.js and Express.

## 📄 License

ISC License - See `package.json` for details.

---

**Happy Learning! 🚀 Build, experiment, and master web application architecture!**
