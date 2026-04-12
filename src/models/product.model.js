export default class ProductModel {
    constructor(_id, _name, _desc, _price, _imageUrl, _imageAlt) {
        this.id = _id
        this.name = _name
        this.desc = _desc
        this.price = _price
        this.imageUrl = _imageUrl
        this.imageAlt = _imageAlt
    }

    static get() {
        return productsArray
    }
}

let productsArray = [
    new ProductModel(
        1,
        "Atomic Habits",
        "Tiny Changes, Remarkable Results.",
        491.00,
        "https://m.media-amazon.com/images/I/817HaeblezL._SY466_.jpg",
        "Atomic Habits: Tiny Changes, Remarkable Results"
    ),
    new ProductModel(
        2,
        "Ikigai",
        "The Japanese secret to a long and happy life.",
        320.00,
        "https://m.media-amazon.com/images/I/81l3rZK4lnL._SY425_.jpg",
        "Ikigai: The Japanese secret to a long and happy life"
    ),
    new ProductModel(
        3,
        "Deep Work",
        "RULES FOR FOCUSED SUCCESS IN A DISTRACTED WORLD.",
        281.00,
        "https://m.media-amazon.com/images/I/61zt25yYrCL._SY466_.jpg",
        "DEEP WORK: RULES FOR FOCUSED SUCCESS IN A DISTRACTED WORLD"
    )
]