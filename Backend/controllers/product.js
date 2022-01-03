const { validationResult } = require('express-validator')

const mongodb = require('mongodb');
const Product = require('../models/product');
const ObjectId = mongodb.ObjectId;

exports.getSearchProduct = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.status(200).json({
                response: {
                    data: products,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                response: {
                    data: [],
                    message: err
                }
            });
        });
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    const { description, image, name, price, stock, weigth, type } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const products = new Product(description, image, name, price, stock, weigth, type);
        products
            .save()
            .then(result => {
                // console.log(result);
                console.log('Created Product');
                res.status(200).json({
                    response: {
                        result: true,
                        message: "success"
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(200).json({
                    response: {
                        result: false,
                        message: err
                    }
                });
            });
    }
};

exports.postUpdateProduct = (req, res, next) => {
    console.log(req.body);
    const { product_id, description, image, name, price, stock, weigth, type } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const products = new Product(description, image, name, price, stock, weigth, type, new ObjectId(product_id));
        products
            .save()
            .then(result => {
                console.log('Update Product');
                res.status(200).json({
                    response: {
                        result: true,
                        message: "success"
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(200).json({
                    response: {
                        result: false,
                        message: err
                    }
                });
            });
    }
};

exports.getDeleteProduct = (req, res, next) => {
    const { product_id } = req.params;
    console.log(product_id);
    Product.deleteById(product_id)
        .then(() => {
            console.log('Delete Product');
            res.status(200).json({
                response: {
                    result: true,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                response: {
                    result: false,
                    message: err
                }
            });
        });
};

exports.getUpdateProduct = (req, res, next) => {
    console.log(req.params);
    const { product_id } = req.params;
    let description = '';
    let image = '';
    let name = '';
    let price = '';
    let stock = '';
    let weigth = '';
    let type = '';

    Product.findById(product_id)
        .then(product => {
            console.log(product);
            res.status(200).json({
                response: {
                    data: product,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                response: {
                    data: [],
                    message: err
                }
            });
        });
};