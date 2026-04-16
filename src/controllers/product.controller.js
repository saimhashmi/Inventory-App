// import path from 'path'
import ProductModel from "../models/product.model.js";

export default class ProductController {
	getProducts(req, res) {
		const products = ProductModel.get();
		// console.log(products);
		// console.log(path.resolve());
		return res
			.status(201)
			.render("product", { products: products, statusCode: 201 });
		// return res.sendFile(
		//     path.join(path.resolve(), 'src/views', 'product.html'
		// ));
	}

	getAddForm(req, res) {
		return res
			.status(201)
			.render("new-product", { errorMessages: null, statusCode: 201 });
	}

	addNewProduct(req, res) {
		// Access data from form
		console.log(req.body);
		ProductModel.add(req.body);
		const products = ProductModel.get();
		return res
			.status(201)
			.render("product", { products: products, statusCode: 201 });
	}

	postAddProduct(req, res, next) {
		ProductModel.add(req.body);
		const products = ProductModel.get();

		return res
			.status(201)
			.render("product", { products: products, statusCode: 201 });
	}
}
