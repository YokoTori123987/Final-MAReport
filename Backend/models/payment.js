const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Payment {
    constructor(date_time, price, receipt, status, id) {
        this.date_time = date_time;
        this.price = price;
        this.receipt = receipt;
        this.status = status;
        this._id = id;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            // Update the product
            dbOp = db
                .collection('payment')
                .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
        } else {
            // Insert product
            dbOp = db.collection('payment').insertOne(this);
        }
        return dbOp
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll(condition={}) {
        console.log(condition);
        const db = getDb();
        return db
            .collection('payment')
            .find(condition)
            .toArray()
            .then(payment => {
                console.log(payment);
                return payment;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findById(prodId) {
        const db = getDb();
        return db
            .collection('payment')
            .find({ _id: new mongodb.ObjectId(prodId) })
            .next()
            .then(payments => {
                console.log(payments);
                return payments;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static deleteById(prodId) {
        const db = getDb();
        return db
            .collection('payment')
            .deleteOne({ _id: new mongodb.ObjectId(prodId) })
            .then(result => {
                console.log('Deleted');
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Payment;