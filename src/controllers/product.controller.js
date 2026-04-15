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

    getAddForm(req, res) {
        return res.render("new-product");
    }

    addNewProduct(req, res) {
        // Access data from form
        console.log(req.body);
        ProductModel.add(req.body);
        let products = ProductModel.get();
        res.render('product', {products:products});
    }
}