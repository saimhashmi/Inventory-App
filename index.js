// const express = require("express");
import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import session from "express-session";
import HomeController from "./src/controllers/home.controller.js";
import ProductController from "./src/controllers/product.controller.js";
import UserController from "./src/controllers/user.controller.js";
import {
	validateNewProductRequest,
	validateUpdateProductRequest,
	validateNewUserRequest,
} from "./src/middlewares/validation.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload.middleware.js";
import { auth } from "./src/middlewares/auth.middleware.js";

const port = 3400;
const server = express();

// Parse form data
server.use(express.urlencoded({ extended: true }));

// Use Express-EJS-Layouts
server.use(ejsLayouts);

// Use Express-Session
server.use(
	session({
		secret: "SecretKey",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	}),
);

// For the public folder
server.use(express.static("public"));

// For the assets folder
server.use("/assets", express.static("assets"));

// For the views folder
server.use(express.static("src/views"));

// Set view engine
server.set("view engine", "ejs");
// Set views Path
server.set("views", path.join(path.resolve(), "src", "views"));

// Create an instance of ProductController
const homeController = new HomeController();

// Create an instance of ProductController
const productController = new ProductController();

// Create an instance of ProductController
const userController = new UserController();

// server.get("/", (req, res) => {
//     return res.send("Welcome to the Inventory App");
// });

// Load home page
server.get("/", homeController.getHome);

// Load Products page on hitting '/products'
server.get("/products", auth, productController.getProducts);

// Load New Product Form page on hitting '/new-product'
server.get("/new-product", auth, productController.getAddForm);

// Validate Form data through middleware and on success navigate to '/new-product' and display updated product list
server.post(
	"/products",
	auth,
	uploadFile.single("imageURL"),
	validateNewProductRequest,
	productController.addNewProduct,
);

// Load New Product Form page on hitting '/new-product'
server.get("/update-product/:id", productController.getUpdateProductView);

// Update Product list
server.post(
	"/update-product/:id",
	uploadFile.single("imageURL"),
	validateUpdateProductRequest,
	productController.postUpdateProduct,
);

// Delete specific Product from Product list
server.post("/delete-product/:id", productController.deleteProduct);

// Login & Sign Up Page Routes
server.get("/login", userController.getLoginForm);
server.get("/sign-up", userController.getSignUpForm);
server.post("/sign-up", validateNewUserRequest, userController.postSignUp);
server.post("/login", userController.postLogin);
server.get("/logout", userController.logout);

server.listen(port, () => {
	console.log(
		`Server is listening on port ${port}, navigate to link http://localhost:${port}`,
	);
});
