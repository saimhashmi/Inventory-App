export default class ProductModel {
	constructor(_id, _name, _desc, _price, _imageUrl, _imageAlt) {
		this.id = _id;
		this.name = _name;
		this.desc = _desc;
		this.price = _price;
		this.imageUrl = _imageUrl;
		this.imageAlt = _imageAlt;
	}

	static get() {
		return productsArray;
	}

	static getbyId(id) {
		// console.log("from getbyId:", productsArray[0].id, id);
		return productsArray.find(
			(product) => parseInt(product.id) === parseInt(id),
		);
	}

	static add(productObj) {
		// Adding ID & image Alt automatically
		let newProduct = new ProductModel(
			productsArray.length + 1,
			productObj.name,
			productObj.desc,
			productObj.price,
			productObj.imageURL,
			productObj.desc,
		);

		productsArray.push(newProduct);
	}

	static update(productObj) {
		const index = productsArray.findIndex(
			(product) => parseInt(product.id) === parseInt(productObj.id),
		);

		productsArray[index].name = productObj.name;
		productsArray[index].desc = productObj.desc;
		productsArray[index].price = parseFloat(productObj.price).toFixed(2);
		productsArray[index].imageUrl = productObj.imageURL;
		productsArray[index].imageAlt = productObj.imageAlt;

		return productsArray;
	}

	static delete(productID) {
		const index = productsArray.findIndex(
			(product) => parseInt(product.id) === parseInt(productID),
		);

		if (index > -1) {
			return productsArray.splice(index, 1);
		} else {
			return null;
		}
	}
}

let productsArray = [
	new ProductModel(
		1,
		"Atomic Habits",
		"Tiny Changes, Remarkable Results.",
		491.0,
		"https://m.media-amazon.com/images/I/817HaeblezL._SY466_.jpg",
		"Atomic Habits: Tiny Changes, Remarkable Results",
	),
	new ProductModel(
		2,
		"Ikigai",
		"The Japanese secret to a long and happy life.",
		320.0,
		"https://m.media-amazon.com/images/I/81l3rZK4lnL._SY425_.jpg",
		"Ikigai: The Japanese secret to a long and happy life",
	),
	new ProductModel(
		3,
		"Deep Work",
		"RULES FOR FOCUSED SUCCESS IN A DISTRACTED WORLD.",
		281.0,
		"https://m.media-amazon.com/images/I/61zt25yYrCL._SY466_.jpg",
		"DEEP WORK: RULES FOR FOCUSED SUCCESS IN A DISTRACTED WORLD",
	),
];
