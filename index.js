// const express = require("express");
import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import AppController from "./src/controllers/home.controller.js";
import ProductController from "./src/controllers/product.controller.js";
import ValidationMiddleware from "./src/middlewares/validation.middleware.js";

const port = 3400;
const server = express();

// Parse form data
server.use(express.urlencoded({ extended: true }));

// Set view engine
server.set("view engine", "ejs");
// Set views Path
server.set("views", path.join(path.resolve(), "src", "views"));

// Use Express-EJS-Layouts
server.use(ejsLayouts);

// Expose public folder
server.use(express.static("public"));

// Create an instance of ProductController
const appController = new AppController();

// Create an instance of ProductController
const productController = new ProductController();

// server.get("/", (req, res) => {
//     return res.send("Welcome to the Inventory App");
// });

// Load home page
server.get("/", appController.getHome);

// Load Products page on hitting '/products'
server.get("/products", productController.getProducts);

// Load New Product Form page on hitting '/new-product'
server.get("/new-product", productController.getAddForm);

// Validate Form data through middleware and on success navigate to '/new-product' and display updated product list
server.post("/products", ValidationMiddleware, productController.addNewProduct);

// Load New Product Form page on hitting '/new-product'
server.get("/update-product/:id", productController.getUpdateProductView);

// Update Product list
server.post(
	"/update-product/:id",
	ValidationMiddleware,
	productController.postUpdateProduct,
);

server.post("/delete-product/:id", productController.deleteProduct);

server.use(express.static("src/views"));

server.listen(port, () => {
	console.log(
		`Server is listening on port ${port}, navigate to link http://localhost:${port}`,
	);
});
