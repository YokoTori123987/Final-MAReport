const { validationResult } = require('express-validator')

const mongodb = require('mongodb');
const Producttype = require('../models/producttype');
const ObjectId = mongodb.ObjectId;

exports.getSearchProductType = (req, res, next) => {
    Producttype.fetchAll()
        .then(producttypes => {
            res.status(200).json({
                response: {
                    data: producttypes,
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

exports.postAddProductType = (req, res, next) => {
    console.log(req.body);
    const {  type } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const producttypes = new Producttype( type);
        producttypes
            .save()
            .then(result => {
                // console.log(result);
                console.log('Created Producttype');
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

exports.postUpdateProducttype = (req, res, next) => {
    console.log(req.body);
    const { producttype_id, type } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const producttypes = new Producttype( type, new ObjectId(producttype_id));
        producttypes
            .save()
            .then(result => {
                console.log('Update Producttype');
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

exports.getDeleteProducttype = (req, res, next) => {
    const { producttype_id } = req.params;
    console.log(producttype_id);
    Producttype.deleteById(producttype_id)
        .then(() => {
            console.log('Delete Producttype');
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

exports.getUpdateProducttype = (req, res, next) => {
    console.log(req.params);
    const { producttype_id } = req.params;
    let type = '';

    Producttype.findById(producttype_id)
        .then(producttype => {
            console.log(producttype);
            res.status(200).json({
                response: {
                    data: producttype,
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