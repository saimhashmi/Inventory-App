import { body, validationResult } from "express-validator";

export const validateNewProductRequest = async (req, res, next) => {
	console.log("New Product Form Input:", req.body);
	// Commenting manual validation
	// const { name, desc, price, imageURL } = req.body;
	// let errors = [];

	// if (!name || name.trim() == "") {
	// 	errors.push("Name is required!");
	// }

	// if (!desc || desc.trim() == "") {
	// 	errors.push("description is required!");
	// }

	// if (desc.trim().length < 10) {
	// 	errors.push("description should be atleast 10 character!");
	// }

	// if (!price || parseFloat(price) < 1) {
	// 	errors.push("Price must be positive!");
	// }

	// try {
	// 	const validUrl = new URL(imageURL);
	// } catch {
	// 	errors.push(`URL is invalid!`);
	// }

	// Using express-validator
	// 1. Setup rules for validation
	const rules = [
		body("name").notEmpty().withMessage("Name is required"),
		body("desc").notEmpty().withMessage("Description is required"),
		body("price")
			.isFloat({ gt: 0 })
			.withMessage("Price should be positive"),
		// body("imageURL").isURL().withMessage("Invalid URL"),
		body("imageURL").custom((value, { req }) => {
			if (!req.file) {
				throw new Error("Image is required");
			}
			return true;
		}),
	];

	// 2. Run those rules
	await Promise.all(rules.map((rule) => rule.run(req)));

	// 3. Check if there are any errors after runnig the rules
	let errors = validationResult(req);

	if (!errors.isEmpty()) {
		const errorsArray = errors.array();
		console.log("Errors in New Product form input:", errorsArray);
		return res.status(400).render("new-product", {
			errorMessages: errorsArray,
			statusCode: 400,
		});
	}

	next();
};

// Validation for update product (image is optional)
export const validateUpdateProductRequest = async (req, res, next) => {
	console.log("Update Product Form Input:", req.body);

	// Using express-validator
	// 1. Setup rules for validation (image is optional for updates)
	const rules = [
		body("name").notEmpty().withMessage("Name is required"),
		body("desc").notEmpty().withMessage("Description is required"),
		body("price")
			.isFloat({ gt: 0 })
			.withMessage("Price should be positive"),
	];

	// 2. Run those rules
	await Promise.all(rules.map((rule) => rule.run(req)));

	// 3. Check if there are any errors after runnig the rules
	let errors = validationResult(req);

	if (!errors.isEmpty()) {
		const errorsArray = errors.array();
		console.log("Errors in Update Product form input:", errorsArray);
		return res.status(400).render("update-product", {
			errorMessages: errorsArray,
			product: req.body,
			statusCode: 400,
		});
	}

	next();
};

// Validation for New User Registration Request
export const validateNewUserRequest = async (req, res, next) => {
	console.log("New User Register Form Input:", req.body);

	// Using express-validator
	// 1. Setup rules for validation (image is optional for updates)
	const rules = [
		body("username").notEmpty().withMessage("User Name is required"),
		body("email").isEmail().withMessage("Enter a valid Email Address"),
		body("password")
			.notEmpty()
			.withMessage("Password is required")
			.isLength({ min: 6 })
			.withMessage("Password must be at least 6 characters"),
	];

	// 2. Run those rules
	await Promise.all(rules.map((rule) => rule.run(req)));

	// 3. Check if there are any errors after runnig the rules
	let errors = validationResult(req);

	if (!errors.isEmpty()) {
		const errorsArray = errors.array();
		console.log("Errors in Update Product form input:", errorsArray);
		return res.status(400).render("sign-up", {
			errorMessages: errorsArray,
			statusCode: 400,
		});
	}

	next();
};
