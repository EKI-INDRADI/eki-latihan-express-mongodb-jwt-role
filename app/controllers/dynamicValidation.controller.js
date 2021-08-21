

const request_validation = require("../functions/tools/request_validation");

exports.dynamicValidation = async (req, res) => {

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
        "array": []
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
        array: req.body.array
    }

    // console.log(typeof req.body.bpjs)
    let data_validation = {
        nama_pasien: req.body.nama_pasien,
        usia: req.body.usia,
        alamat: req.body.alamat,
        provinsi: req.body.provinsi,
        kotakab: req.body.kotakab,
        kecamatan: req.body.kecamatan,
        bpjs: req.body.bpjs,
        poli: req.body.poli,
        "object.value": req.body.object, //req.body.object.value,
        array: req.body.array
    }

    let schema_validation = {
        nama_pasien: "string",
        usia: "number",
        alamat: "string",
        provinsi: "string",
        kotakab: "string",
        kecamatan: "string",
        bpjs: "boolean",
        poli: "string",
        "object.value": "object",
        array: "array"
    }

    let lenght_validation = {
        nama_pasien: 10,
        usia: 2,
        alamat: 20,
        provinsi: 20,
        kotakab: 20,
        kecamatan: 20,
        bpjs: 1,
        poli: 1,
        "object.value": "skip",
        array: "skip"
    }


    try {
        check_data = await request_validation.check_all_data_schema_lenght(data_validation, schema_validation, lenght_validation);

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
        check_data.data = req.body;

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

        res.json(check_data)

    } else {

        check_data.error = {
            short: check_data.all_error_key,
            detail: check_data.all_error
        };

        delete check_data.data;
        check_data.data = req.body;

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

        res.json(check_data);

    } // check_data

}