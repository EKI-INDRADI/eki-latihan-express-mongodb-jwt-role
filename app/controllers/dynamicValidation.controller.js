

const request_validation = require("../functions/tools/request_validation");
const error_detail = require("../functions/tools/try_catch_error_detail");

exports.dynamicValidation = async (req, res) => {

    let example_data_request = {
        "nama_pasien": "pasien3111",
        "usia": 20,
        "alamat": "alamat1",
        "provinsi": "provinsi1",
        "kotakab": "kotakab1",
        "kecamatan": "kecamatan1",
        "poli": "gigi",
        "bpjs": true,
        "object": { "value": 1 },
        "array": [],
        "date": "2021-03-16T00:00:00+0700",
        "object_value": {
            "child_object_string": "aaaa",
            "child_object_number": 1111,
            "child_object_boolean": false,
            "child_object_date": "2021-03-16T00:00:00+0700",
            "child_object_object_lvl_2": {},
            "child_object_object_lvl_3": {
                "child_object_object_lvl_4_1": "level 4",
                "child_object_object_lvl_4_2": {
                    "child_object_object_lvl_5": "level 5"
                }
            },
            "child_object_array": []
        },
        "array_value": [

            //========== "0-1" --> bug DATE
            // { "index_0_object_1": "0-1", "index_0_object_2": "0-2" },
            // { "index_1_object_1": "0-2" }
            //========== "0-1" --> bug DATE

            { "index_0_object_1": "0 1", "index_0_object_2": "0 2" },
            { "index_1_object_1": "0 2" }
        ]
    }

    let data_request = { // insert to database 
        nama_pasien: req.body.nama_pasien,
        usia: req.body.usia,
        alamat: req.body.alamat,
        provinsi: req.body.provinsi,
        kotakab: req.body.kotakab,
        kecamatan: req.body.kecamatan,
        bpjs: req.body.bpjs,
        poli: req.body.poli,
        object: req.body.object,
        array: req.body.array,
        date: req.body.date,
        object_value: {
            child_object_string: req.body.object_value.child_object_string,
            child_object_number: req.body.object_value.child_object_number,
            child_object_boolean: req.body.object_value.child_object_boolean,
            child_object_date: req.body.object_value.child_object_date,
            child_object_object_lvl_2: req.body.object_value.child_object_object_lvl_2,
            child_object_object_lvl_3: {
                child_object_object_lvl_4_1: req.body.object_value.child_object_object_lvl_3.child_object_object_lvl_4_1,
                child_object_object_lvl_4_2: {
                    child_object_object_lvl_5: req.body.object_value.child_object_object_lvl_3.child_object_object_lvl_4_2.child_object_object_lvl_5
                }
            },
            child_object_array: req.body.object_value.child_object_array
        },
        array_value: req.body.array_value,
        array_value_2: req.body.array_value_2
    }


    let data_validation = {
        nama_pasien: req.body.nama_pasien,
        usia: req.body.usia,
        alamat: req.body.alamat,
        provinsi: req.body.provinsi,
        kotakab: req.body.kotakab,
        kecamatan: req.body.kecamatan,
        poli: req.body.poli,
        bpjs: req.body.bpjs,
        object: req.body.object,
        array: req.body.array,
        date: req.body.date,
        "object_value.child_object_string": req.body.object_value.child_object_string,
        "object_value.child_object_number": req.body.object_value.child_object_number,
        "object_value.child_object_boolean": req.body.object_value.child_object_boolean,
        "object_value.child_object_date": req.body.object_value.child_object_date,
        "object_value.child_object_object_lvl_2": req.body.object_value.child_object_object_lvl_2,
        "object_value.child_object_object_lvl_3.child_object_object_lvl_4_1": req.body.object_value.child_object_object_lvl_3.child_object_object_lvl_4_1,
        "object_value.child_object_object_lvl_3.child_object_object_lvl_4_2.child_object_object_lvl_5": req.body.object_value.child_object_object_lvl_3.child_object_object_lvl_4_2.child_object_object_lvl_5,
        "object_value.child_object_array": req.body.object_value.child_object_array,
        "array_value.index_0_object_1": req.body.array_value[0].index_0_object_1,
        "array_value.index_0_object_2": req.body.array_value[0].index_0_object_2,
        "array_value.index_1_object_1": req.body.array_value[1].index_1_object_1
    }

    let schema_validation = {
        nama_pasien: "string",
        usia: "number",
        alamat: "string",
        provinsi: "string",
        kotakab: "string",
        kecamatan: "string",
        poli: "string",
        bpjs: "boolean",
        object: "object",
        array: "array",
        date: "date",
        "object_value.child_object_string": "string",
        "object_value.child_object_number": "number",
        "object_value.child_object_boolean": "boolean",
        "object_value.child_object_date": "date",
        "object_value.child_object_object_lvl_2": "object",
        "object_value.child_object_object_lvl_3.child_object_object_lvl_4_1": "string",
        "object_value.child_object_object_lvl_3.child_object_object_lvl_4_2.child_object_object_lvl_5": "string",
        "object_value.child_object_array": "array",
        "array_value.index_0_object_1": "string",
        "array_value.index_0_object_2": "string",
        "array_value.index_1_object_1": "string"
    }

    let length_validation = {
        nama_pasien: 10,
        usia: 2,
        alamat: 20,
        provinsi: 20,
        kotakab: 20,
        kecamatan: 20,
        poli: 10,
        bpjs: "skip",
        object: "skip",
        array: "skip",
        date: "skip",
        "object_value.child_object_string": 4,
        "object_value.child_object_number": 3,
        "object_value.child_object_boolean": "skip",
        "object_value.child_object_date": "skip",
        "object_value.child_object_object_lvl_2": "skip",
        "object_value.child_object_object_lvl_3.child_object_object_lvl_4_1": 7,
        "object_value.child_object_object_lvl_3.child_object_object_lvl_4_2.child_object_object_lvl_5": 7,
        "object_value.child_object_array": "skip",
        "array_value.index_0_object_1": 3,
        "array_value.index_0_object_2": 3,
        "array_value.index_1_object_1": 3
    }


    try {
        check_data = await request_validation.check_all_data_schema_length(data_validation, schema_validation, length_validation);
    } catch (error) {
        console.log("controller import_accounting.validationImportRequestAccounting, error : " + error.message);
        error_detail.try_catch_error_detail(error);
        res.json({
            statusCode: 1,
            message: error.message
        })
    }


    if (check_data.statusCode == 1) {

        check_data.valid = check_data.data;
        delete check_data.data;

        let array_value_2
        try {
            array_value_2 = await exports.check_array_value_2(req.body.array_value_2)
        } catch (error) {
            console.log("controller import_accounting.validationImportRequestAccounting, array_value_2, error : " + error.message);
            error_detail.try_catch_error_detail(error);

        }

        check_data.array_value_2 = array_value_2


        res.json(check_data)

    } else {

        check_data.error = {
            short: check_data.all_error_key,
            detail: check_data.all_error
        };

        delete check_data.data;

        delete check_data.all_error;

        delete check_data.all_error_index;

        delete check_data.all_error_key;
        delete check_data.all_error_key_array;

        delete check_data.all_value_index;
        delete check_data.all_value;

        delete check_data.undefined_error;
        delete check_data.undefined_error_index;

        delete check_data.undefined_error_key;
        delete check_data.undefined_error_key_array;

        delete check_data.undefined_value_index;
        delete check_data.undefined_value;

        delete check_data.schema_error;
        delete check_data.schema_error_index;

        delete check_data.schema_error_key;
        delete check_data.schema_error_key_array;

        delete check_data.schema_value_index;
        delete check_data.schema_value;


        delete check_data.length_error;
        delete check_data.length_error_index;

        delete check_data.length_error_key;
        delete check_data.length_error_key_array;

        delete check_data.length_value_index;
        delete check_data.length_value;


        res.json(check_data);

    } // check_data

}



exports.check_array_value_2 = async (data) => {


    let check_data = {}

    let result_check = []

    for (let index_array = 0; index_array < data.length; index_array++) {
        let data_request = { // insert to database 
            nama_pasien: data[index_array].nama_pasien,
            usia: data[index_array].usia,
            alamat: data[index_array].alamat,
            provinsi: data[index_array].provinsi,
            kotakab: data[index_array].kotakab,
            kecamatan: data[index_array].kecamatan,
            bpjs: data[index_array].bpjs,
            poli: data[index_array].poli,
            object: data[index_array].object,
            array: data[index_array].array,
            date: data[index_array].date
        }


        let data_validation = {
            nama_pasien: data[index_array].nama_pasien,
            usia: data[index_array].usia,
            alamat: data[index_array].alamat,
            provinsi: data[index_array].provinsi,
            kotakab: data[index_array].kotakab,
            kecamatan: data[index_array].kecamatan,
            poli: data[index_array].poli,
            bpjs: data[index_array].bpjs,
            object: data[index_array].object,
            array: data[index_array].array,
            date: data[index_array].date

        }

        let schema_validation = {
            nama_pasien: "string",
            usia: "number",
            alamat: "string",
            provinsi: "string",
            kotakab: "string",
            kecamatan: "string",
            poli: "string",
            bpjs: "boolean",
            object: "object",
            array: "array",
            date: "date"
        }

        let length_validation = {
            nama_pasien: 10,
            usia: 2,
            alamat: 20,
            provinsi: 20,
            kotakab: 20,
            kecamatan: 20,
            poli: 10,
            bpjs: "skip",
            object: "skip",
            array: "skip",
            date: "skip"
        }


        try {
            check_data = await request_validation.check_all_data_schema_length(data_validation, schema_validation, length_validation);

            if (check_data.statusCode == 1) {


                // check_data.valid = check_data.data;
                delete check_data.data;
                delete check_data.message
                delete check_data.valid


                result_check.push(check_data)
                // return check_data

            } else {

                check_data.error = {
                    line : check_data.all_error_index,
                    short: check_data.all_error_key,
                    detail: check_data.all_error
                };

                delete check_data.data;

                delete check_data.all_error;

                 delete check_data.all_error_index;

                delete check_data.all_error_key;
                delete check_data.all_error_key_array;

                delete check_data.all_value_index;
                delete check_data.all_value;

                delete check_data.undefined_error;
                delete check_data.undefined_error_index;

                delete check_data.undefined_error_key;
                delete check_data.undefined_error_key_array;

                delete check_data.undefined_value_index;
                delete check_data.undefined_value;

                delete check_data.schema_error;
                delete check_data.schema_error_index;

                delete check_data.schema_error_key;
                delete check_data.schema_error_key_array;

                delete check_data.schema_value_index;
                delete check_data.schema_value;


                delete check_data.length_error;
                delete check_data.length_error_index;

                delete check_data.length_error_key;
                delete check_data.length_error_key_array;

                delete check_data.length_value_index;
                delete check_data.length_value;

                result_check.push(check_data)
                // return check_data

            }


            if (result_check.length == data.length) {


                return result_check

            }

        } catch (error) {
            console.log("controller dynamicValidation.check_array_value_2, error : " + error.message)
            error_detail.try_catch_error_detail(error)
        }

    } // end for




}

exports.dynamicValidation_detail = async (req, res) => {

    let example_data_request = {
        "nama_pasien": "pasien3",
        "usia": 20,
        "alamat": "alamat1",
        "provinsi": "provinsi1",
        "kotakab": "kotakab1",
        "kecamatan": "kecamatan1",
        "bpjs": true,
        "poli": "gigi",
        "object": { "value": 1 },
        "array": [],
        "date": "2021-03-16T00:00:00+0700"
    }

    let data_request = { // insert to database 
        nama_pasien: req.body.nama_pasien,
        usia: req.body.usia,
        alamat: req.body.alamat,
        provinsi: req.body.provinsi,
        kotakab: req.body.kotakab,
        kecamatan: req.body.kecamatan,
        bpjs: req.body.bpjs ? req.body.bpjs : false,
        poli: req.body.poli,
        object: {
            value: req.body.object.value
        },
        array: req.body.array,
        date: req.body.date
    }

    // console.log(typeof req.body.bpjs)
    let data_validation = {
        nama_pasien: req.body.nama_pasien,
        usia: req.body.usia,
        alamat: req.body.alamat,
        provinsi: req.body.provinsi,
        kotakab: req.body.kotakab,
        kecamatan: req.body.kecamatan,
        poli: req.body.poli,
        bpjs: req.body.bpjs,
        "object.value": req.body.object, //req.body.object.value,
        array: req.body.array,
        date: req.body.date
    }

    let schema_validation = {
        nama_pasien: "string",
        usia: "number",
        alamat: "string",
        provinsi: "string",
        kotakab: "string",
        kecamatan: "string",
        poli: "string",
        bpjs: "boolean",
        "object.value": "object",
        array: "array",
        date: "date"
    }

    let length_validation = {
        nama_pasien: 10,
        usia: 2,
        alamat: 20,
        provinsi: 20,
        kotakab: 20,
        kecamatan: 20,
        poli: 10,
        bpjs: "skip",
        "object.value": "skip",
        array: "skip",
        date: "skip"
    }


    try {
        check_data = await request_validation.check_all_data_schema_length(data_validation, schema_validation, length_validation);

    } catch (error) {
        console.log("controller import_accounting.validationImportRequestAccounting, error : " + error.message);
        error_detail.try_catch_error_detail(error);
        res.json({
            statusCode: 1,
            message: error.message
        })
    }


    if (check_data.statusCode == 1) {

        // check_data.valid = check_data.data;
        // delete check_data.data;
        // check_data.data = req.body;


        res.json(check_data)

    } else {

        // check_data.error = {
        //     short: check_data.all_error_key,
        //     detail: check_data.all_error
        // };

        // delete check_data.data;
        // // check_data.data = req.body;

        // delete check_data.all_error;

        // delete check_data.all_error_index;

        // delete check_data.all_error_key;
        // delete check_data.all_error_key_array;

        // delete check_data.all_value_index;
        // delete check_data.all_value;

        // delete check_data.undefined_error;
        // delete check_data.undefined_error_index;

        // delete check_data.undefined_error_key;
        // delete check_data.undefined_error_key_array;

        // delete check_data.undefined_value_index;
        // delete check_data.undefined_value;

        // delete check_data.schema_error;
        // delete check_data.schema_error_index;

        // delete check_data.schema_error_key;
        // delete check_data.schema_error_key_array;

        // delete check_data.schema_value_index;
        // delete check_data.schema_value;


        // delete check_data.length_error;
        // delete check_data.length_error_index;

        // delete check_data.length_error_key;
        // delete check_data.length_error_key_array;

        // delete check_data.length_value_index;
        // delete check_data.length_value;

        res.json(check_data);

    } // check_data

}