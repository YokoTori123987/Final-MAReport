const { validationResult } = require('express-validator')

const mongodb = require('mongodb');
const Order = require('../models/order');
const ObjectId = mongodb.ObjectId;
// var mongoose = require('mongoose');

exports.getSearchOrder = (req, res, next) => {
    let search = req.query.search;
    console.log(req)
    let condition = {};
    console.log(search);
    // if(search!="undefined"){
        // condition = {date_time: new RegExp(search)}+{receipt: new RegExp(search)};
        // status ทำไมใช้ภาษาไทยไม่ได้ครับ
        // price ค้นหา number ไม่ได้ครับ
    //     condition = {$or: [{date_time: new RegExp(search)}, {receipt: new RegExp(search)}, {price: new RegExp(search)}, {status: new RegExp(search)}]};
    // }
    Order.fetchAll(condition)
        .then(order => {
            res.status(200).json({
                response: {
                    data: order,
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

exports.postAddOrder = (req, res, next) => {
    console.log(req.body);
    const { date, users, product} = req.body;
    const errors = validationResult(req);
    console.log(product[0].product_id);
    // var u_id = mongoose.Types.ObjectId(users_id);
    // var v_id = mongoose.Types.ObjectId(product_id);
    if (!errors.isEmpty()) {
        console.log("error");
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const orders = new Order(date, users, product);
        orders
            .save()
            .then(result => {
                // console.log(result);
                console.log('Created Order');
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

exports.postUpdateOrder = (req, res, next) => {
    console.log("postUpdate");
    console.log(req.body);
    const { order_id, date, users_id, product_id } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const orders = new Order(date, users_id, product_id, new ObjectId(order_id));
        orders
            .save()
            .then(result => {
                console.log('Update Order');
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

exports.getDeleteOrder = (req, res, next) => {
    console.log("diawhdoi");
    const { order_id } = req.params;
    console.log(order_id);
    Order.deleteById(order_id)
        .then(() => {
            console.log('Delete Order');
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

exports.getUpdateOrder = (req, res, next) => {
    console.log("getUpdate");
    console.log(req.params);
    const { order_id } = req.params;
    let date = '';
    let users_id = '';
    let product_id = '';

    Order.findById(order_id)
        .then(order => {
            console.log(order);
            res.status(200).json({
                response: {
                    data: order,
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