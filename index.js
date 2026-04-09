// const express = require("express");
import express from 'express'
import ProductController from './src/controllers/product.controller.js'

const port = 3400;
const server = express();

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