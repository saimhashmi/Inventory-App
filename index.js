// const express = require("express");
import express from 'express'
import path from 'path'
import ejsLayouts from 'express-ejs-layouts'
import ProductController from './src/controllers/product.controller.js'

const port = 3400;
const server = express();

// Set view engine
server.set("view engine", "ejs");
// Set views Path
server.set("views", path.join(path.resolve(), 'src', 'views'));

// Use Express-EJS-Layouts
server.use(ejsLayouts);

// Create an instance of ProductController
const productController = new ProductController()
// server.get("/", (req, res) => {
//     return res.send("Welcome to the Inventory App");
// });
server.get('/', productController.getProducts);
server.use(express.static('src/views'));

server.listen(port, () => {
    console.log(`Server is listening on port ${port}, navigate to link http://localhost:${port}`);
});