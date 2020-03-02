const Golf = require('../models/golf.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
        const golf = new golf({
                titre: req.body.titre,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                description: req.body.description,
                manager: req.body.manager
            })
            // if (err.error) {
            //     res.send(err);
            // } else {
        golf.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
    }
    // get all managers
exports.findAll = (req, res) => {
    Manager.find()
        .then(managers => {
            res.send(managers);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding managers."
            })
        })
}

exports.findOne = (req, res) => {
    console.log(req.params);
    Manager.findById(req.params.id)
        .then(manager => {
            if (!manager) {
                return res.status(404).send({
                    message: "Manager not found with id" + req.params.id
                });
            }
            res.send(manager);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    manager.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(manager => {
        if (!manager) {
            return res.status(404).send({
                message: "Manager not found"
            })
        }
        // res.send(manager);
        Manager.findById(req.params.id)
            .then(newManager => {
                res.send({
                    new_manager: newManager,
                    old_manager: manager
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Manager.findByIdAndRemove(req.params.id)
        .then(manager => {
            if (!manager) {
                return res.status(404).send({
                    message: "Manager not found"
                })
            }
            res.send({
                // message: "Manager with id" + req.params.id + "deleted successfully"
                message: `Manager with id ${req.params.id} deleted successfully`
            })
        })
}

exports.removeAll = (req, res) => {
    Manager.deleteMany((err) => {
        if (err) {
            res.send(err)
        }
        res.send('Managers removed');
    });
}