// import path from 'path'
import ProductModel from '../models/product.model.js';

export default class ProductController {
    getProducts(req, res) {
        let products = ProductModel.get();
        // console.log(products);
        // console.log(path.resolve());
        res.render("product", {products:products});
        // return res.sendFile(
        //     path.join(path.resolve(), 'src/views', 'product.html'
        // ));
    }
}