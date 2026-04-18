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

	// getUpdateForm(req, res, next) {
	// 	res.status(201).render("update-product", {
	// 		errorMessages: null,
	// 		statusCode: 201,
	// 	});
	// 	next();
	// }

	getUpdateProductView(req, res, next) {
		// req.body doesn't work with latest express package it worked in video because of old express package express@4.18.2
		// console.log("params:", req.params, "query:", req.query);
		// console.log(req.params.id);
		const id = req.params.id;
		// console.log("from getUpdateProductView:", req.params.id, id);
		// console.trace("Trace");
		const product = ProductModel.getbyId(id);
		console.log(product);

		if (product) {
			res.status(201).render("update-product", {
				errorMessages: null,
				product: product,
			});
		} else {
			res.status(401).send("Product not found");
		}
	}

	postUpdateProduct(req, res) {
		// console.log(req.body);
		const products = ProductModel.update(req.body);
		// console.log(products);

		return res
			.status(201)
			.render("product", { products: products, statusCode: 201 });
	}

	deleteProduct(req, res) {
		// Will use params since we are getting data from GET
		const products = ProductModel.get();
		const deletedProduct = ProductModel.delete(req.params.id);
		console.log("Product deleted from view:", deletedProduct);

		if (deletedProduct) {
			return res.status(201).render("product", {
				products: products,
				statusCode: 201,
			});
		} else {
			return res.status(400).render("product", {
				products: products,
				statusCode: 201,
			});
		}
	}
}
