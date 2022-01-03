const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Producttype {
    constructor(type, id) {
        this.type = type;
        this._id = id;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            // Update the producttype
            dbOp = db
                .collection('producttype')
                .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
        } else {
            // Insert producttype
            dbOp = db.collection('producttype').insertOne(this);
        }
        return dbOp
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDb();
        return db
            .collection('producttype')
            .find()
            .toArray()
            .then(producttype => {
                console.log(producttype);
                return producttype;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findById(prodId) {
        const db = getDb();
        return db
            .collection('producttype')
            .find({ _id: new mongodb.ObjectId(prodId) })
            .next()
            .then(producttypes => {
                console.log(producttypes);
                return producttypes;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static deleteById(prodId) {
        const db = getDb();
        return db
            .collection('producttype')
            .deleteOne({ _id: new mongodb.ObjectId(prodId) })
            .then(result => {
                console.log('Deleted');
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Producttype;