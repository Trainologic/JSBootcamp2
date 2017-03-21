var express = require('express');
var mongoose = require('mongoose');
var items = express.Router();
var Item = require('./item.model');
var Owner = require('./owner.model');

items.get('/init', function (req, res) {
    Item.find({}, (err, items) => {
        if (err) { res.status(500).send(err); return; }
        if (items.length == 0) {
            Owner.find({}).then((owners) => {
                for (let _owner of owners) {
                    new Item({ name: 'root', owner: _owner._id }).save();
                }
                res.send('ok');
            }).catch((err) => {
                res.status(500).send(err); return;
            })
        }
    });
});

items.post('/update/:id', function (req, res) {
    Item.findOne({ _id: req.body._id }).then((item) => {
        if (!item) { res.json({ success: false, message: 'item_not_found' }); return; }
        item.name = req.body.name;
        if (req.body.content !== undefined) item.shared = req.body.shared;
        if (req.body.content !== undefined) item.content = req.body.content

        Item.findOne({ parentId: item.parentId, name: item.name }).then((found) => {
            debugger;
            if (found) { res.json({ success: false, message: 'item_already_exists' }); return; }
            Item.findOneAndUpdate({ _id: item._id }, item, { new: true }).then(function (item) {
                delete item._doc.parentId;
                if (item._doc.content === undefined) {
                    item._doc.children = [];
                }
                res.json({ success: true, item: item });
            }).catch((err) => {
                debugger;
            });
        })

    }).catch((err) => {
        res.json({ success: false, message: err.message });
    });
});

items.get('/get/:owner/:id?', function (req, res) {
    Owner.findOne({ name: req.params.owner }).then((owner) => {
        if (!owner) { res.json({ success: false, message: 'owner_not_found' }); return; }

        let query = {};
        query.owner = owner._id;
        if (req.params.id)
            query._id = mongoose.Types.ObjectId(req.params.id);
        else
            query.name = 'root';

        Item.findOne(query).then((item) => {
            if (!item) { res.json({ success: false, message: 'item_not_found' }); return; }
            Item.find({ parentId: item._id }).then((items) => {
                for (let item of items) {
                    delete item._doc.parentId;
                    if (item._doc.content === undefined) {
                        item._doc.children = [];
                    }
                }
                if (item._doc.content === undefined) {
                    item._doc.children = items;
                }
                delete item._doc.parentId;
                res.json({ success: true, item: item });
            });
        }).catch((err) => {
            res.json({ success: false, message: err.message });
        });
    }).catch((err) => {
        res.json({ success: false, message: err.message });
    });
});

items.post('/create/', function (req, res) {
    Item.findOne({ parentId: req.body.parentId, name: req.body.name }).then((sameItem) => {
        Owner.findOne({ name: req.body.owner }).then((owner) => {
            if (!owner) { res.json({ success: false, message: 'owner_not_found' }); return; }
            if (sameItem) { res.json({ success: false, message: 'item_already_exists' }); return; }

            let item = {};
            item.name = req.body.name;
            item.parentId = req.body.parentId;
            item.owner = owner._id;

            if (req.body.type == 'folder') item.children = [];
            else item.content = '';

            item = new Item(item).save().then((item) => {
                res.json({ success: true, item: item });
            }).catch((err) => {
                res.json({ success: false, message: err.message });
            });
        }).catch((err) => {
            res.json({ success: false, message: err.message });
        });
    }).catch((err) => {
        res.json({ success: false, message: err.message });
    });
});

module.exports = items;