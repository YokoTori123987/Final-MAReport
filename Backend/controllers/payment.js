const { validationResult } = require('express-validator')

const mongodb = require('mongodb');
const Payment = require('../models/payment');
const ObjectId = mongodb.ObjectId;

exports.getSearchPayment = (req, res, next) => {
    let search = req.query.search;
    console.log(req)
    let condition = {};
    console.log(search);
    if(search!="undefined"){
        // condition = {date_time: new RegExp(search)}+{receipt: new RegExp(search)};
        // status ทำไมใช้ภาษาไทยไม่ได้ครับ
        // price ค้นหา number ไม่ได้ครับ
        condition = {$or: [{date_time: new RegExp(search)}, {receipt: new RegExp(search)}, {price: new RegExp(search)}, {status: new RegExp(search)}]};
    }
    Payment.fetchAll(condition)
        .then(payment => {
            res.status(200).json({
                response: {
                    data: payment,
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

exports.postAddPayment = (req, res, next) => {
    console.log(req.body);
    const { date_time, price, receipt, status} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("error");
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const payments = new Payment(date_time, price, receipt, status);
        payments
            .save()
            .then(result => {
                // console.log(result);
                console.log('Created Payment');
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

exports.postUpdatePayment = (req, res, next) => {
    console.log("postUpdate");
    console.log(req.body);
    const { payment_id, date_time, price, receipt, status } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const payments = new Payment(date_time, price, receipt, status, new ObjectId(payment_id));
        payments
            .save()
            .then(result => {
                console.log('Update Payment');
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

exports.getDeletePayment = (req, res, next) => {
    const { payment_id } = req.params;
    console.log(payment_id);
    Payment.deleteById(payment_id)
        .then(() => {
            console.log('Delete Payment');
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

exports.getUpdatePayment = (req, res, next) => {
    console.log("getUpdate");
    console.log(req.params);
    const { payment_id } = req.params;
    let date_time = '';
    let price = '';
    let receipt = '';
    let status = '';

    Payment.findById(payment_id)
        .then(payment => {
            console.log(payment);
            res.status(200).json({
                response: {
                    data: payment,
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