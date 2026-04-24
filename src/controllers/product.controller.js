// import path from 'path'
import ProductModel from "../models/product.model.js";

export default class ProductController {
	getProducts(req, res) {
		const products = ProductModel.get();

		const email = req.session.userEmail;
		console.log(`user ${email} is viewing product list`);

		return res.status(201).render("product", {
			products: products,
			userEmail: req.session.userEmail,
			statusCode: 201,
		});
		// return res.sendFile(
		//     path.join(path.resolve(), 'src/views', 'product.html'
		// ));
	}

	getAddForm(req, res) {
		const email = req.session.userEmail;
		console.log(`user ${email} requested product add form`);

		return res.status(201).render("new-product", {
			errorMessages: null,
			userEmail: req.session.userEmail,
			statusCode: 201,
		});
	}

	addNewProduct(req, res) {
		// Access data from form
		console.log(req.body);
		const { name, desc, price } = req.body;
		const imageURL = "assets/images/" + req.file.filename;
		const imageAlt = desc;

		// ProductModel.add(req.body);
		ProductModel.add(name, desc, price, imageURL, imageAlt);
		const products = ProductModel.get();

		const email = req.session.userEmail;
		console.log(`user ${email} is adding new product`, req.body);

		return res.status(201).render("product", {
			products: products,
			userEmail: req.session.userEmail,
			statusCode: 201,
		});
	}

	postAddProduct(req, res, next) {
		// ProductModel.add(req.body);
		ProductModel.add(req.body);
		const products = ProductModel.get();
		return res.status(201).render("product", {
			products: products,
			userEmail: req.session.userEmail,
			statusCode: 201,
		});
	}

	getUpdateProductView(req, res, next) {
		// req.body doesn't work with latest express package it worked in video because of old express package express@4.18.2
		// console.log(req.params.id);
		const id = req.params.id;
		// console.trace("Trace");
		const product = ProductModel.getbyId(id);

		if (product) {
			const email = req.session.userEmail;
			console.log(`user ${email} is updating product`, product);

			res.status(201).render("update-product", {
				errorMessages: null,
				userEmail: req.session.userEmail,
				product: product,
			});
		} else {
			res.status(401).send("Product not found");
		}
	}

	postUpdateProduct(req, res) {
		console.log(req.body);
		const { id, name, desc, price } = req.body;

		// Check if a new file was uploaded
		let imageURL;
		if (req.file) {
			imageURL = "assets/images/" + req.file.filename;
		} else {
			// Keep the existing image if no new file uploaded
			const product = ProductModel.getbyId(id);
			imageURL = product.imageUrl;
		}

		const imageAlt = desc;
		const products = ProductModel.update(
			id,
			name,
			desc,
			price,
			imageURL,
			imageAlt,
		);

		const email = req.session.userEmail;
		console.log(`user ${email} updated product`, product);

		return res.status(201).render("product", {
			products: products,
			userEmail: req.session.userEmail,
			statusCode: 201,
		});
	}

	deleteProduct(req, res) {
		// Will use params since we are getting data from GET
		const products = ProductModel.get();
		const deletedProduct = ProductModel.delete(req.params.id);

		if (deletedProduct) {
			const email = req.session.userEmail;
			console.log(`user ${email} is updating product`, deletedProduct);

			return res.status(201).render("product", {
				products: products,
				userEmail: req.session.userEmail,
				statusCode: 201,
			});
		} else {
			return res.status(400).render("product", {
				products: products,
				userEmail: req.session.userEmail,
				statusCode: 400,
			});
		}
	}
}
