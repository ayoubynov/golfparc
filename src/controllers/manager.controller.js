const Manager = require('../models/manager.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
        const manager = new Manager({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                telephone: req.body.telephone,
                admin: req.body.admin
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
    // get all golfs
exports.findAll = (req, res) => {
    Golf.find()
        .then(golfs => {
            res.send(golfs);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding golfs."
            })
        })
}

exports.findOne = (req, res) => {
    console.log(req.params);
    Golf.findById(req.params.id)
        .then(golf => {
            if (!golf) {
                return res.status(404).send({
                    message: "Golf not found with id" + req.params.id
                });
            }
            res.send(golf);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    golf.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(golf => {
        if (!golf) {
            return res.status(404).send({
                message: "Golf not found"
            })
        }
        // res.send(golf);
        Golf.findById(req.params.id)
            .then(newGolf => {
                res.send({
                    new_golf: newGolf,
                    old_golf: golf
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Golf.findByIdAndRemove(req.params.id)
        .then(golf => {
            if (!golf) {
                return res.status(404).send({
                    message: "Golf not found"
                })
            }
            res.send({
                // message: "Golf with id" + req.params.id + "deleted successfully"
                message: `Golf with id ${req.params.id} deleted successfully`
            })
        })
}

exports.removeAll = (req, res) => {
    Golf.deleteMany((err) => {
        if (err) {
            res.send(err)
        }
        res.send('Golfs removed');
    });
}