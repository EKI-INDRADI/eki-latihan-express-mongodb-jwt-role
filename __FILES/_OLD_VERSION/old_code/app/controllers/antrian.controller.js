const db = require("../models");
const EKI_ANTRIAN = db.EKI_ANTRIAN;









exports.create = (req, res) => {



    // ==================== CARA PRAKTIS DOKUMENTASI GAGAL



// next pake findAndModify() 


    // if (!req.body.nomor_antrian) {
    //     res.status(400).send({ message: "Content can not be empty!" });
    //     return;
    // }

    // ------------auto increment
    //https://docs.mongodb.com/v3.0/tutorial/create-an-auto-incrementing-field/


    // function getNextSequence(name) {
    //     var ret = db.counters.findAndModify(
    //         {
    //             query: { _id: name },
    //             update: { $inc: { seq: 1 } },
    //             new: true
    //         }
    //     );

    //     return ret.seq;
    // }


    // sebelumya insert dlu di db


    // db.eki_antrians.insert(
    //     {
    //         _id: "antrianid",
    //         seq: 0
    //        }
    //     )


    // db.eki_antrians.insert(
    //     {
    //        _id: "antrianid",
    //        seq: 0
    //     }
    //  )


    // ------------auto increment



    // MIN MAX //https://stackoverflow.com/questions/32076382/mongodb-how-to-get-max-value-from-collections
    // db.collection.find().sort({age:-1}).limit(1) // for MAX
    // db.collection.find().sort({age:+1}).limit(1) // for MIN

    // const NEW_EKI_ANTRIAN = new EKI_ANTRIAN({
    //     nomor_antrian: req.body.nomor_antrian
    // });


    // ------------auto increment
    // const NEW_EKI_ANTRIAN = new EKI_ANTRIAN({
    //     _id: getNextSequence("antrianrid"),
    //     nomor_antrian: req.body.nomor_antrian
    // });

    // ------------auto increment

    // ==================== CARA PRAKTIS DOKUMENTASI GAGAL




    // ANTRIAN MANUAL

    var data_all_awal
    var max_antrian = 0
    var nomor_antrian_new = 0



    // ambil data all
    EKI_ANTRIAN.find()
        .then(data => {
            data_all_awal = data;




            ///============= JIKA DATA ADA
            //    if (data_all_awal) {

            //============= LAKUKAN SORT DESC LIMIT 1
            EKI_ANTRIAN.find().sort({ nomor_antrian: -1 }).limit(1) // ambil nilai tertinggi
                .then(data => {
                    max_antrian = data[0].nomor_antrian; // ambil index pertama (nilai tertinggi)
                    console.log("max antrian " + max_antrian);

                    //============== antrian baru  +1
                    nomor_antrian_new = Number(max_antrian) + Number(1)

                    console.log("nomor_antrian_new " + nomor_antrian_new)


                    //============== insert
                    const NEW_EKI_ANTRIAN = new EKI_ANTRIAN({
                        nomor_antrian: nomor_antrian_new
                    });


                    NEW_EKI_ANTRIAN
                        .save(NEW_EKI_ANTRIAN)
                        .then(data => {
                            res.send(data);
                        })
                        .catch(err => {
                            res.status(500).send({
                                message:
                                    err.message || "Some error occurred while creating the ANTRIAN."
                            });
                        });








                })
                .catch(err => {





                   // JIKA DATA ga ada  = [] ,  nomor antrian akan error 


                     // res.status(500).send({
                    //     message:
                    //         err.message || "Error GET MAX ANTRIAN."
                    // });



                    //============== insert
                    const NEW_EKI_ANTRIAN = new EKI_ANTRIAN({
                        nomor_antrian: 1
                    });


                    NEW_EKI_ANTRIAN
                        .save(NEW_EKI_ANTRIAN)
                        .then(data => {
                            res.send(data);
                        })
                        .catch(err => {
                            res.status(500).send({
                                message:
                                    err.message || "Some error occurred while creating the ANTRIAN."
                            });
                        });

                });






            // JIKA DATA ga ada  = []
            // } else {

            //     //============== insert
            //     const NEW_EKI_ANTRIAN = new EKI_ANTRIAN({
            //         nomor_antrian: 1
            //     });


            //     NEW_EKI_ANTRIAN
            //         .save(NEW_EKI_ANTRIAN)
            //         .then(data => {
            //             res.send(data);
            //         })
            //         .catch(err => {
            //             res.status(500).send({
            //                 message:
            //                     err.message || "Some error occurred while creating the ANTRIAN."
            //             });
            //         });


            // }


        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error GET ANTRIAN OLD."
            });
        });



};

exports.findAll = (req, res) => {
    EKI_ANTRIAN.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ANTRIAN."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    EKI_ANTRIAN.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found ANTRIAN with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving ANTRIAN with id=" + id });
        });
};




exports.deleteAll = (req, res) => {
    EKI_ANTRIAN.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} ANTRIAN were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ANTRIAN."
            });
        });
};

