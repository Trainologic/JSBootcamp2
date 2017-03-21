var express = require('express');
var owners = express.Router();
var Owner = require('./owner.model');

owners.get('/init', function (req, res) {
    Owner.find({}, (err, owners) => {
        if (err) { res.status(500).send(err); return; }
        if (owners.length == 0) {
            let users = [
                { name: 'Alexei' },
                { name: 'Matan' },
                { name: 'Max' },
                { name: 'Boaz' },
                { name: 'Ariel' },
                { name: 'Asaf' },
                { name: 'Marco' },
                { name: 'Hanita' },
                { name: 'Oded' },
                { name: 'Zhanna' },
                { name: 'Roman' },
            ]

            for (var user of users) {
                new Owner({ name: user.name }).save();
            }
        }
        res.send('ok');
    });
});

owners.get('/getall', function (req, res) {
    Owner.find({}).sort({ name: 1 }).then((owners) => {
        res.json(owners);
    });
});

module.exports = owners;