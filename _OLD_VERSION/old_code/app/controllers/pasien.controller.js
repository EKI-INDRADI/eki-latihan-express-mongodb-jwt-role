const db = require("../models");
const EKI_PASIEN = db.EKI_PASIEN;


exports.create = (req, res) => {
    if (!req.body.nama_pasien) {
        res.status(400).send({ message: "nama_pasien can not be empty!" });
        return;
    }

    if (!req.body.usia) {
        res.status(400).send({ message: "usia can not be empty!" });
        return;
    }

    if (!req.body.alamat) {
        res.status(400).send({ message: "alamat can not be empty!" });
        return;
    }

    if (!req.body.provinsi) {
        res.status(400).send({ message: "provinsi can not be empty!" });
        return;
    }

    if (!req.body.kotakab) {
        res.status(400).send({ message: "kotakab can not be empty!" });
        return;
    }

    if (!req.body.kecamatan) {
        res.status(400).send({ message: "kecamatan can not be empty!" });
        return;
    }


    if (!req.body.bpjs) {
        res.status(400).send({ message: "bpjs can not be empty!" });
        return;
    }

    if (!req.body.poli) {
        res.status(400).send({ message: "poli can not be empty!" });
        return;
    }

    const NEW_EKI_PASIEN = new EKI_PASIEN({
        nama_pasien: req.body.nama_pasien,
        usia: req.body.usia,
        alamat: req.body.alamat,
        provinsi: req.body.provinsi,
        kotakab: req.body.kotakab,
        kecamatan: req.body.kecamatan,
        bpjs: req.body.bpjs ? req.body.bpjs : false,
        poli: req.body.poli
    });


    NEW_EKI_PASIEN
        .save(NEW_EKI_PASIEN)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the PASIEN."
            });
        });
};


exports.findAll = (req, res) => {
    const nama_pasien = req.query.nama_pasien;
    var condition = nama_pasien ? { nama_pasien: { $regex: new RegExp(nama_pasien), $options: "i" } } : {};

    // http://localhost:8080/api/pasien?skip=2&limit=10
    var skipping = parseInt(req.query.skip) || 0;
    var limiting = parseInt(req.query.limit) || 0;

    EKI_PASIEN.find(condition).sort({createdAt:-1}).skip(skipping).limit(limiting).exec()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving PASIEN."
            });
        });
};



exports.findName = (req, res) => {
    const like_nama_pasien = req.params.cari_value;
 
   // http://localhost:8080/api/pasien/name/1?skip=1&limit=10

    var skipping = parseInt(req.query.skip) || 0;
    var limiting = parseInt(req.query.limit) || 0;

    EKI_PASIEN.find({ "nama_pasien": new RegExp(like_nama_pasien) }).sort({createdAt:-1}).skip(skipping).limit(limiting).exec()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving PASIEN."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    EKI_PASIEN.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found PASIEN with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving PASIEN with id=" + id });
        });
};


exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    if (!req.body.nama_pasien) {
        res.status(400).send({ message: "nama_pasien can not be empty!" });
        return;
    }

    if (!req.body.usia) {
        res.status(400).send({ message: "usia can not be empty!" });
        return;
    }

    if (!req.body.alamat) {
        res.status(400).send({ message: "alamat can not be empty!" });
        return;
    }

    if (!req.body.provinsi) {
        res.status(400).send({ message: "provinsi can not be empty!" });
        return;
    }

    if (!req.body.kotakab) {
        res.status(400).send({ message: "kotakab can not be empty!" });
        return;
    }

    if (!req.body.kecamatan) {
        res.status(400).send({ message: "kecamatan can not be empty!" });
        return;
    }


    if (!req.body.bpjs) {
        res.status(400).send({ message: "bpjs can not be empty!" });
        return;
    }

    if (!req.body.poli) {
        res.status(400).send({ message: "poli can not be empty!" });
        return;
    }


    const id = req.params.id;

    EKI_PASIEN.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update PASIEN with id=${id}. Maybe PASIEN was not found!`
                });
            } else res.send({ message: "PASIEN was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating PASIEN with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    EKI_PASIEN.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete PASIEN with id=${id}. Maybe PASIEN was not found!`
                });
            } else {
                res.send({
                    message: "PASIEN was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete PASIEN with id=" + id
            });
        });
};


exports.deleteAll = (req, res) => {
    EKI_PASIEN.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} PASIEN were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all PASIEN."
            });
        });
};


