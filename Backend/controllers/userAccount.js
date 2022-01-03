const { validationResult } = require('express-validator')

const mongodb = require('mongodb');
const UserAccount = require('../models/useraccount');
const ObjectId = mongodb.ObjectId;

exports.getSearchUserAccount = (req, res, next) => {
    UserAccount.fetchAll()
        .then(useraccount => {
            res.status(200).json({
                response: {
                    data: useraccount,
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

exports.postAddUserAccount = (req, res, next) => {
    console.log(req.body);
    const { password, email, firstname, lastname, phone, address, cart } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const userAccounts = new UserAccount(password, email, firstname, lastname, phone, address, cart);
        userAccounts
            .save()
            .then(result => {
                // console.log(result);
                console.log('Created UserAccount');
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

exports.postUpdateUserAccount = (req, res, next) => {
    console.log(req.body);
    const { userAccount_id, password, email, firstname, lastname, phone, address, cart } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const userAccounts = new UserAccount(password, email, firstname, lastname, phone, address, cart, new ObjectId(userAccount_id));
        userAccounts
            .save()
            .then(result => {
                console.log('Update UserAccount');
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

exports.getDeleteUserAccount = (req, res, next) => {
    const { userAccount_id } = req.params;
    console.log(userAccount_id);
    UserAccount.deleteById(userAccount_id)
        .then(() => {
            console.log('Delete UserAccount');
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

exports.getUpdateUserAccount = (req, res, next) => {
    console.log(req.params);
    const { userAccount_id } = req.params;
    let password = '';
    let email = '';
    let firstname = '';
    let lastname = '';
    let phone = '';
    let address = '';
    let cart = '';

    UserAccount.findById(userAccount_id)
        .then(useraccount => {
            console.log(useraccount);
            res.status(200).json({
                response: {
                    data: useraccount,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                response: {
                    data: useraccount,
                    message: err
                }
            });
        });
};