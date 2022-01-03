const express = require('express');

const { check } = require('express-validator')
const router = express.Router();

const paymentController = require('../controllers/payment');
const orderController = require('../controllers/order');
const userAccountController = require('../controllers/useraccount');
const productController = require('../controllers/product');
const producttypeController = require('../controllers/producttype');

// /admin/add-Payment => GET
router.get('/searchpayment', paymentController.getSearchPayment);
router.get('/searchorder', orderController.getSearchOrder);
router.get('/searchuserAccount', userAccountController.getSearchUserAccount);
router.get('/searchproduct', productController.getSearchProduct);
router.get('/searchproducttype', producttypeController.getSearchProductType);

router.post('/insertpayment', [
    check('date_time').trim().not().isEmpty().withMessage("Payment name is required"),
    check('price').isFloat({ gt: 0 }).withMessage("greater than zero"),
    check('receipt').trim().not().isEmpty().withMessage("Payment name is required"),
    check('status').trim().not().isEmpty().withMessage("Payment name is required"),
    check('users').trim().not().isEmpty().withMessage("Payment name is required"),
    check('product').trim().not().isEmpty().withMessage("Payment name is required")
], paymentController.postAddPayment);
router.post('/insertorder', [
    check('users').not().isEmpty().withMessage("empty"),
    check('product').not().isEmpty().withMessage("empty"),
    check('date').trim().not().isEmpty().withMessage("order name is required")
], orderController.postAddOrder);
router.post('/insertuserAccount', [
    check('password').trim().not().isEmpty().withMessage("Payment name is required"),
    check('email').trim().not().isEmpty().withMessage("Payment name is required"),
    check('firstname').trim().not().isEmpty().withMessage("Payment name is required"),
    check('lastname').trim().not().isEmpty().withMessage("Payment name is required"),
    check('phone').trim().not().isEmpty().withMessage("Payment name is required"),
    check('address').trim().not().isEmpty().withMessage("Payment name is required"),
    check('cart').trim().not().isEmpty().withMessage("Payment name is required")
], userAccountController.postAddUserAccount);
router.post('/insertproduct', [
    check('description').trim().not().isEmpty().withMessage("Payment name is required"),
    check('image').trim().not().isEmpty().withMessage("Payment name is required"),
    check('name').trim().not().isEmpty().withMessage("Payment name is required"),
    check('price').isFloat({ gt: 0 }).withMessage("greater than zero"),
    check('stock').isFloat({ gt: 0 }).withMessage("greater than zero"),
    check('weigth').isFloat({ gt: 0 }).withMessage("greater than zero"),
    // check('type').isArray().not().withMessage("Payment name is required")
], productController.postAddProduct);
router.post('/insertproducttype', [
    check('typeName').trim().not().isEmpty().withMessage("Payment name is required")
], producttypeController.postAddProductType);



router.post('/updatepayment', [
    check('payment_id').not().isEmpty().withMessage("empty"),
    check('date_time').trim().not().isEmpty().withMessage("Payment name is required"),
    check('price').isFloat({ gt: 0 }).withMessage("greater than zero"),
    check('receipt').trim().not().isEmpty().withMessage("Payment name is required"),
    check('status').trim().not().isEmpty().withMessage("Payment name is required"),
], paymentController.postUpdatePayment);
router.post('/updateorder', [
    check('order_id').not().isEmpty().withMessage("empty"),
    check('date').trim().not().isEmpty().withMessage("Payment name is required"),
    check('users_id').not().isEmpty().withMessage("empty"),
    check('product_id').not().isEmpty().withMessage("empty")
], orderController.postUpdateOrder);
router.post('/updateuserAccount', [
    check('userAccount_id').not().isEmpty().withMessage("empty"),
    check('password').trim().not().isEmpty().withMessage("Payment name is required"),
    check('email').trim().not().isEmpty().withMessage("Payment name is required"),
    check('firstname').trim().not().isEmpty().withMessage("Payment name is required"),
    check('lastname').trim().not().isEmpty().withMessage("Payment name is required"),
    check('phone').trim().not().isEmpty().withMessage("Payment name is required"),
    check('address').trim().not().isEmpty().withMessage("Payment name is required"),
    check('cart').trim().not().isEmpty().withMessage("Payment name is required")
], userAccountController.postUpdateUserAccount);
router.post('/eatupdateproduct', [
    check('product_id').not().isEmpty().withMessage("empty"),
    check('description').trim().not().isEmpty().withMessage("Payment name is required"),
    check('image').trim().not().isEmpty().withMessage("Payment name is required"),
    check('name').trim().not().isEmpty().withMessage("Payment name is required"),
    check('price').isFloat({ gt: 0 }).withMessage("greater than zero"),
    check('stock').isFloat({ gt: 0 }).withMessage("greater than zero"),
    check('weigth').isFloat({ gt: 0 }).withMessage("greater than zero"),
    // check('type').trim().not().isEmpty().withMessage("Payment name is required")
], productController.postUpdateProduct);
router.post('/updateproducttype', [
    check('producttype_id').not().isEmpty().withMessage("empty"),
    check('typeName').trim().not().isEmpty().withMessage("Payment name is required")
], producttypeController.postUpdateProducttype);



router.get('/deletepayment/:payment_id', paymentController.getDeletePayment);
router.get('/deleteorder/:order_id', orderController.getDeleteOrder);
router.get('/deleteuserAccount/:userAccount_id', userAccountController.getDeleteUserAccount);
router.get('/deleteproduct/:product_id', productController.getDeleteProduct);
router.get('/deleteproducttype/:producttype_id', producttypeController.getDeleteProducttype);



router.get('/updatepayment/:payment_id', paymentController.getUpdatePayment);
router.get('/updateorder/:order_id', orderController.getUpdateOrder);
router.get('/updateuserAccount/:userAccount_id', userAccountController.getUpdateUserAccount);
router.get('/updateproduct/:product_id', productController.getUpdateProduct);
router.get('/updateproducttype/:producttype_id', producttypeController.getUpdateProducttype);

exports.routes = router;