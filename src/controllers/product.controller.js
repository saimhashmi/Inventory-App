// import path from 'path'
import ProductModel from "../models/product.model.js";

export default class ProductController {
	getProducts(req, res) {
		const products = ProductModel.get();
		// console.log(products);
		// console.log(path.resolve());
		res.render("product", { products: products });
		// return res.sendFile(
		//     path.join(path.resolve(), 'src/views', 'product.html'
		// ));
	}

	getAddForm(req, res) {
		return res.render("new-product", { errorMessages: null });
	}

	addNewProduct(req, res) {
		// Access data from form
		console.log(req.body);
		ProductModel.add(req.body);
		const products = ProductModel.get();
		res.render("product", { products: products });
	}

	postAddProduct(req, res, next) {
		ProductModel.add(req.body);
		const products = ProductModel.get();
		return res.render("product", { products: products });
	}
}
