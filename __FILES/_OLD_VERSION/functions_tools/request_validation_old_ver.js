// Maintainer : Eki

// READ ME  : 
// function ini digunakan untuk melakukan validasi otomatis langsung dari data, tanpa harus defined check satu per satu
// tanpa inject depedency

exports.check_undefined = async function (data) {

  // let data = {
  //   x: undefined,
  //   z: 2,
  //   b: 'asda',
  //   n: null,
  //   j: []
  // };

  let check_data = data;
  let data_valid;
  let data_type;
  let res_json = {};
  let total_data_valid = 0;
  let data_array = [];
  let data_array_error = [];
  let data_array_error_key = [];
  let data_array_error_index = [];
  let value_array = [];
  let value_index = 0;
  let value_array_index = [];


  for (let index_array = 0; index_array < Object.keys(check_data).length; index_array++) {


    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'object') {
      data_type = 'object or array or null';
    } else {
      data_type = '' + typeof check_data[(Object.keys(check_data)[index_array])];
    }


    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'undefined') {
      data_valid = false;
      let data_push_error = Object.keys(check_data)[index_array] + " = " + data_valid + " [" + data_type + "]";
      data_array_error.push({ value: data_push_error });

      let data_push_error_key = Object.keys(check_data)[index_array];
      data_array_error_key.push(data_push_error_key);

      let data_push_error_index = index_array;
      data_array_error_index.push(data_push_error_index);

      value_index = value_index + 1;
      value_array_index.push(value_index);
      value_array.push(check_data);

    } else {
      data_valid = true;
      total_data_valid = total_data_valid + 1;
    }


    let data_push = Object.keys(check_data)[index_array] + " = " + data_valid + " [" + data_type + "]";
    // console.log(Object.keys(check_data)[index_array] + " : '" + data_valid + " [" + data_type + "]' ")


    data_array.push({ value: data_push });


    if (Number(Object.keys(check_data).length) == Number(index_array + 1)) {
      if (Number(total_data_valid) == Number(Object.keys(check_data).length)) {
        res_json = {
          statusCode: 1,
          message: "valid",
          data: data_array
        };
      } else {
        res_json = {
          statusCode: 0,
          message: "error",
          error: data_array_error,
          error_index: data_array_error_index,
          error_key: data_array_error_key,
          data: data_array,
          value_index: value_array_index,
          value: value_array,
        };
      }
    } // end if

  } // end for



  return res_json;

};;


// - EXAMPLE CODE :

// const request_validation =  require('../../functions/tools/request_validation')

// ===== example 
// let data : = {
//   x: req.body.x,
//   z: req.body.z,
//   b: req.body.b,
//   n: req.body.n,
//   j: req.body.j
//   i: req.body.i
// };
// ===== / example 

// ===== data yang di cek
// let data =  = {
//   x: undefined,
//   z: 2,
//   b: 'asda',
//   n: null,
//   j: [],
//   i: {}
// };
// ===== / data yang di cek

// let checK_data = await request_validation.check_undefined(data_request_all)

// res.json(data_request_all)

exports.check_all = async function (data) {


  // ========= inject code example

  // const request_validation = require('../functions/tools/request_validation');

  // let data_validation_value = {
  //   company_id: req.body.company_id,
  //   site: req.body.site,
  //   document_type: req.body.document_type,
  //   "requester.username": req.body.requester.username,
  //   data: req.body.data
  // };

  // check_data = await request_validation.check_all(data_validation_value);

  // if (check_data.statusCode == 1) {
  //   // res.json(check_data) // valid condition
  // } else {
  //   res.json(check_data) // error condition
  // }
  // ========= inject code example


  let example_request_valid = {
    "company_id": "test",
    "site": "test",
    "document_type": 1,
    "requester": { "username": "test" },
    "data": [{ "test2": 1, "test3": 2 }]
  };


  let example_request_error = {
    "company_id": "test",
    "document_type": 1,
    "requester": { "username": "test" },
    "data": [{ "test2": 1, "test3": 2 }]
  };

  let error_response = {
    "statusCode": 0,
    "message": "error",
    "error": [
      {
        "site": "undefined",
        "status": false
      }
    ],
    "error_index": [
      1
    ],
    "error_key": [
      "site"
    ],
    "data": [
      {
        "company_id": "string",
        "status": true
      },
      {
        "site": "undefined",
        "status": false
      },
      {
        "document_type": "number",
        "status": true
      },
      {
        "requester.username": "string",
        "status": true
      },
      {
        "data": "array",
        "status": true
      }
    ],
    "value_index": [
      1
    ],
    "value": [
      {
        "company_id": "test",
        "document_type": 1,
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      }
    ]
  };
  let valid_response = {
    "statusCode": 1,
    "message": "valid",
    "data": [
      {
        "company_id": "string",
        "status": true
      },
      {
        "site": "string",
        "status": true
      },
      {
        "document_type": "number",
        "status": true
      },
      {
        "requester.username": "string",
        "status": true
      },
      {
        "data": "array",
        "status": true
      }
    ]
  };


  let check_data = data;
  let data_valid;
  let data_type;
  let res_json = {};
  let total_data_valid = 0;
  let data_array = [];
  let data_array_error = [];
  let data_array_error_key = [];
  let data_array_error_index = [];
  let value_array = [];
  let value_index = 0;
  let value_array_index = [];


  for (let index_array = 0; index_array < Object.keys(check_data).length; index_array++) {


    if (Object.values(check_data)[index_array] && Object.values(check_data)[index_array].constructor === Array) {
      data_type = 'array';
    } else if (Object.values(check_data)[index_array] && Object.values(check_data)[index_array] == null) {
      data_type = 'null';
    } else if (typeof check_data[(Object.keys(check_data)[index_array])] == 'object') {
      data_type = 'object';
    } else {
      data_type = '' + typeof check_data[(Object.keys(check_data)[index_array])];
    }


    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'undefined') {
      data_valid = false;

      let key_error = Object.keys(check_data)[index_array], object_dynamic_error = { [key_error]: data_type, status: data_valid };

      data_array_error.push(object_dynamic_error);


      let data_push_error_key = Object.keys(check_data)[index_array];
      data_array_error_key.push(data_push_error_key);

      let data_push_error_index = index_array;
      data_array_error_index.push(data_push_error_index);

      value_index = value_index + 1;
      value_array_index.push(value_index);
      value_array.push(check_data);

    } else {
      data_valid = true;
      total_data_valid = total_data_valid + 1;
    }

    let data_push = Object.keys(check_data)[index_array] + " = " + data_valid + " [" + data_type + "]";


    var key = Object.keys(check_data)[index_array], object_dynamic = { [key]: data_type, status: data_valid };

    data_array.push(object_dynamic);


    if (Number(Object.keys(check_data).length) == Number(index_array + 1)) {
      if (Number(total_data_valid) == Number(Object.keys(check_data).length)) {
        res_json = {
          statusCode: 1,
          message: "valid",
          data: data_array
        };
      } else {
        res_json = {
          statusCode: 0,
          message: "error",
          error: data_array_error,
          error_index: data_array_error_index,
          error_key: data_array_error_key,
          data: data_array,
          value_index: value_array_index,
          value: value_array,
        };
      }
    } // end if

  } // end for

  return res_json;

};;





let isDate = function (date) {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
};

exports.check_all_with_schema = async function (data, schema) {



  // ========= inject code example

  // const request_validation = require('../functions/tools/request_validation');

  // let data_validation_value = {
  //   company_id: req.body.company_id,
  //   site: req.body.site,
  //   document_type: req.body.document_type,
  //   "requester.username": req.body.requester.username,
  //   data: req.body.data
  // };


  // let data_validation_schema = {
  //   company_id: "string",
  //   site: "string",
  //   document_type: "number",
  //   "requester.username": "string",
  //   data: "array"
  // };

  // check_data = await request_validation.check_all(data_validation_value, data_validation_schema);

  // if (check_data.statusCode == 1) {
  //   // res.json(check_data) // valid condition
  // } else {
  //   res.json(check_data) // error condition
  // }
  // ========= inject code example


  let example_request_valid = {
    "company_id": "test",
    "site": "test",
    "document_type": 1,
    "requester": { "username": "test" },
    "data": [{ "test2": 1, "test3": 2 }]
  };


  let example_request_error = {
    "site": 2,
    "document_type": { "data": 1 },
    "requester": { "username": "test" },
    "data": [{ "test2": 1, "test3": 2 }]
  };


  let valid_response = {
    "statusCode": 1,
    "message": "valid",
    "data": [
      {
        "company_id": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "site": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "document_type": "number",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "number"
      },
      {
        "requester.username": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "data": "array",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "array"
      }
    ]
  };



  let error_response = {
    "statusCode": 0,
    "message": "error",
    "all_error": [
      {
        "company_id": "undefined",
        "not_undefined": false,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "site": "number",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "document_type": "object",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "number"
      }
    ],
    "all_error_index": [
      0,
      1,
      2
    ],
    "all_error_key": [
      "company_id",
      "site",
      "document_type"
    ],
    "all_value_index": [
      1,
      2,
      3
    ],
    "all_value": [
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      }
    ],
    "undefined_error": [
      {
        "company_id": "undefined",
        "not_undefined": false
      }
    ],
    "undefined_error_index": [
      0
    ],
    "undefined_error_key": [
      "company_id"
    ],
    "undefined_value_index": [
      1
    ],
    "undefined_value": [
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      }
    ],
    "schema_error": [
      {
        "company_id": "undefined",
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "site": "number",
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "document_type": "object",
        "schema": false,
        "schema_type_required": "number"
      }
    ],
    "schema_error_index": [
      0,
      1,
      2
    ],
    "schema_error_key": [
      "company_id",
      "site",
      "document_type"
    ],
    "schema_value_index": [
      1,
      2,
      3
    ],
    "schema_value": [
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      }
    ],
    "data": [
      {
        "company_id": "undefined",
        "not_undefined": false,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "site": "number",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "document_type": "object",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "number"
      },
      {
        "requester.username": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "data": "array",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "array"
      }
    ]
  };




  let check_data = data;
  let check_schema = schema;
  let data_valid = false;
  let schema_valid = false;
  let data_type;
  let res_json = {};
  let total_data_valid = 0;
  let total_schema_valid = 0;


  let data_array = [];

  //============== undefined
  let data_array_error = [];
  let data_array_error_key = [];
  let data_array_error_index = [];

  let value_array = [];
  let value_index = 0;
  let value_array_index = [];
  //============== undefined


  //============== schema
  let data_schema_array_error = [];
  let data_schema_array_error_key = [];
  let data_schema_array_error_index = [];

  let schema_value_array = [];
  let schema_value_index = 0;
  let schema_value_array_index = [];
  //============== schema


  //============== all
  let all_array_error = [];
  let all_array_error_key = [];
  let all_array_error_index = [];

  let all_value_array = [];
  let all_value_index = 0;
  let all_value_array_index = [];

  //============== all



  for (let index_array = 0; index_array < Object.keys(check_data).length; index_array++) {

    // console.log(Object.values(check_data)[index_array]);
    // console.log(isNaN(Object.values(check_data)[index_array]));
    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'number') {
      data_type = 'number';
    } else if (Object.values(check_data)[index_array] &&
      isDate(Object.values(check_data)[index_array]) == true) { //isDate check date

      if (isNaN(Object.values(check_data)[index_array]) == false) {   // isNan  string check is valid number
        // isNaN(123)         // false
        // isNaN('123')       // false
        // isNaN('1e10000')   // false (This translates to Infinity, which is a number)
        // isNaN('foo')       // true
        // isNaN('10px')      // true
        // isNaN('')          // false
        // isNaN(' ')         // false
        // isNaN(false)       // false
        data_type = 'string';
      } else {
        data_type = 'date';
      }

    } else if (Object.values(check_data)[index_array] && Object.values(check_data)[index_array].constructor === Array) {
      data_type = 'array';
    } else if (Object.values(check_data)[index_array] && Object.values(check_data)[index_array] == null) {
      data_type = 'null';
    } else if (typeof check_data[(Object.keys(check_data)[index_array])] == 'object') {
      data_type = 'object';
    } else {
      data_type = '' + typeof check_data[(Object.keys(check_data)[index_array])];
    }




    //===================== undefined
    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'undefined') {


      data_valid = false;

      let key_error = Object.keys(check_data)[index_array], object_dynamic_error = { [key_error]: data_type, not_undefined: data_valid };

      data_array_error.push(object_dynamic_error);


      let data_push_error_key = Object.keys(check_data)[index_array];
      data_array_error_key.push(data_push_error_key);

      let data_push_error_index = index_array;
      data_array_error_index.push(data_push_error_index);

      value_index = value_index + 1;
      value_array_index.push(value_index);
      value_array.push(check_data);

    } else {
      data_valid = true;
      total_data_valid = total_data_valid + 1;
    }
    //===================== undefined


    //===================== schema
    if (((Object.values(check_schema)[index_array]) ? Object.values(check_schema)[index_array] : null) == data_type) {
      schema_valid = true;
      total_schema_valid = total_schema_valid + 1;

    } else {
      schema_valid = false;

      let key_error = Object.keys(check_data)[index_array], object_dynamic_error = { [key_error]: data_type, schema: schema_valid, schema_type_required: Object.values(check_schema)[index_array] };
      data_schema_array_error.push(object_dynamic_error);

      let data_schema_push_error_key = Object.keys(check_data)[index_array];
      data_schema_array_error_key.push(data_schema_push_error_key);

      let data_schema_push_error_index = index_array;
      data_schema_array_error_index.push(data_schema_push_error_index);

      schema_value_index = schema_value_index + 1;
      schema_value_array_index.push(schema_value_index);
      schema_value_array.push(check_data);
    }
    //===================== schema




    //===================== all 

    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'undefined' ||
      ((Object.values(check_schema)[index_array]) ? Object.values(check_schema)[index_array] : null) != data_type) {
      let all_key_error = Object.keys(check_data)[index_array], object_dynamic_error = { [all_key_error]: data_type, not_undefined: data_valid, schema: schema_valid, schema_type_required: Object.values(check_schema)[index_array] };
      all_array_error.push(object_dynamic_error);



      let all_push_error_key = Object.keys(check_data)[index_array];
      all_array_error_key.push(all_push_error_key);

      let all_push_error_index = index_array;


      all_array_error_index.push(all_push_error_index);

      all_value_index = all_value_index + 1;


      all_value_array_index.push(all_value_index);


      all_value_array.push(check_data);



    }




    //===================== all







    var key = Object.keys(check_data)[index_array], object_dynamic = { [key]: data_type, not_undefined: data_valid, schema: schema_valid, schema_type_required: Object.values(check_schema)[index_array] };

    data_array.push(object_dynamic);


    if (Number(Object.keys(check_data).length) == Number(index_array + 1)) {
      if (Number(total_data_valid) == Number(Object.keys(check_data).length) &&
        Number(total_schema_valid) == Number(Object.keys(check_data).length)) {
        res_json = {
          statusCode: 1,
          message: "valid",
          data: data_array
        };
      } else {
        res_json = {
          statusCode: 0,
          message: "error",

          all_error: all_array_error,
          all_error_index: all_array_error_index,
          all_error_key: all_array_error_key,
          all_value_index: all_value_array_index,
          all_value: all_value_array,

          undefined_error: data_array_error,
          undefined_error_index: data_array_error_index,
          undefined_error_key: data_array_error_key,
          undefined_value_index: value_array_index,
          undefined_value: value_array,

          schema_error: data_schema_array_error,
          schema_error_index: data_schema_array_error_index,
          schema_error_key: data_schema_array_error_key,
          schema_value_index: schema_value_array_index,
          schema_value: schema_value_array,

          data: data_array,
        };
      }
    } // end if

  } // end for

  return res_json;

};;


exports.check_all_with_schema_v2 = async function (data, schema) {

  // 20-08-2021
  // update all_error_key to object
  // update data_schema_array_error_key  to object
  // update data_array_error_key  to object


  // ========= inject code example

  // const request_validation = require('../functions/tools/request_validation');

  // let data_validation_value = {
  //   company_id: req.body.company_id,
  //   site: req.body.site,
  //   document_type: req.body.document_type,
  //   "requester.username": req.body.requester.username,
  //   data: req.body.data
  // };


  // let data_validation_schema = {
  //   company_id: "string",
  //   site: "string",
  //   document_type: "number",
  //   "requester.username": "string",
  //   data: "array"
  // };

  // check_data = await request_validation.check_all(data_validation_value, data_validation_schema);

  // if (check_data.statusCode == 1) {
  //   // res.json(check_data) // valid condition
  // } else {
  //   res.json(check_data) // error condition
  // }
  // ========= inject code example


  let example_request_valid = {
    "company_id": "test",
    "site": "test",
    "document_type": 1,
    "requester": { "username": "test" },
    "data": [{ "test2": 1, "test3": 2 }]
  };


  let example_request_error = {
    "site": 2,
    "document_type": { "data": 1 },
    "requester": { "username": "test" },
    "data": [{ "test2": 1, "test3": 2 }]
  };


  let valid_response = {
    "statusCode": 1,
    "message": "valid",
    "data": [
      {
        "company_id": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "site": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "document_type": "number",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "number"
      },
      {
        "requester.username": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "data": "array",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "array"
      }
    ]
  };



  let error_response = {
    "statusCode": 0,
    "message": "error",
    "all_error": [
      {
        "company_id": "undefined",
        "not_undefined": false,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "site": "number",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "document_type": "object",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "number"
      }
    ],
    "all_error_index": [
      0,
      1,
      2
    ],
    "all_error_key": [
      "company_id",
      "site",
      "document_type"
    ],
    "all_value_index": [
      1,
      2,
      3
    ],
    "all_value": [
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      }
    ],
    "undefined_error": [
      {
        "company_id": "undefined",
        "not_undefined": false
      }
    ],
    "undefined_error_index": [
      0
    ],
    "undefined_error_key": [
      "company_id"
    ],
    "undefined_value_index": [
      1
    ],
    "undefined_value": [
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      }
    ],
    "schema_error": [
      {
        "company_id": "undefined",
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "site": "number",
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "document_type": "object",
        "schema": false,
        "schema_type_required": "number"
      }
    ],
    "schema_error_index": [
      0,
      1,
      2
    ],
    "schema_error_key": [
      "company_id",
      "site",
      "document_type"
    ],
    "schema_value_index": [
      1,
      2,
      3
    ],
    "schema_value": [
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      }
    ],
    "data": [
      {
        "company_id": "undefined",
        "not_undefined": false,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "site": "number",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "document_type": "object",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "number"
      },
      {
        "requester.username": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "data": "array",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "array"
      }
    ]
  };




  let check_data = data;
  let check_schema = schema;
  let data_valid = false;
  let schema_valid = false;
  let data_type;
  let res_json = {};
  let total_data_valid = 0;
  let total_schema_valid = 0;


  let data_array = [];

  //============== undefined
  let data_array_error = [];
  let data_array_error_key = [];

  let data_object_error_key = {};  // 20-08-2021

  let data_array_error_index = [];

  let value_array = [];
  let value_index = 0;
  let value_array_index = [];
  //============== undefined


  //============== schema
  let data_schema_array_error = [];
  let data_schema_array_error_key = [];

  let data_schema_object_error_key = {};  // 20-08-2021

  let data_schema_array_error_index = [];

  let schema_value_array = [];
  let schema_value_index = 0;
  let schema_value_array_index = [];
  //============== schema


  //============== all
  let all_array_error = [];
  let all_array_error_key = [];

  let all_object_error_key = {}; // 20-08-2021

  let all_array_error_index = [];

  let all_value_array = [];
  let all_value_index = 0;
  let all_value_array_index = [];

  //============== all



  for (let index_array = 0; index_array < Object.keys(check_data).length; index_array++) {

    // console.log(Object.values(check_data)[index_array]);
    // console.log(isNaN(Object.values(check_data)[index_array]));
    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'number') {
      data_type = 'number';
    } else if (Object.values(check_data)[index_array] &&
      isDate(Object.values(check_data)[index_array]) == true) { //isDate check date

      if (isNaN(Object.values(check_data)[index_array]) == false) {   // isNan  string check is valid number
        // isNaN(123)         // false
        // isNaN('123')       // false
        // isNaN('1e10000')   // false (This translates to Infinity, which is a number)
        // isNaN('foo')       // true
        // isNaN('10px')      // true
        // isNaN('')          // false
        // isNaN(' ')         // false
        // isNaN(false)       // false
        data_type = 'string';
      } else {
        data_type = 'date';
      }

    } else if (Object.values(check_data)[index_array] && Object.values(check_data)[index_array].constructor === Array) {
      data_type = 'array';
    } else if (Object.values(check_data)[index_array] && Object.values(check_data)[index_array] == null) {
      data_type = 'null';
    } else if (typeof check_data[(Object.keys(check_data)[index_array])] == 'object') {
      data_type = 'object';
    } else {
      data_type = '' + typeof check_data[(Object.keys(check_data)[index_array])];
    }




    //===================== undefined
    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'undefined') {


      data_valid = false;

      let key_error = Object.keys(check_data)[index_array], object_dynamic_error = { [key_error]: data_type, not_undefined: data_valid };

      data_array_error.push(object_dynamic_error);



      //========= 20-08-2021
      let data_object_error_key_child = Object.keys(check_data)[index_array],
        data_push_error_key_object_dynamic_error = { [data_object_error_key_child]: "undefined" };
      data_object_error_key = Object.assign(JSON.parse(JSON.stringify(all_object_error_key)), data_push_error_key_object_dynamic_error);
      //========= 20-08-2021

      let data_push_error_key = Object.keys(check_data)[index_array];
      data_array_error_key.push(data_push_error_key);

      let data_push_error_index = index_array;
      data_array_error_index.push(data_push_error_index);

      value_index = value_index + 1;
      value_array_index.push(value_index);
      value_array.push(check_data);

    } else {
      data_valid = true;
      total_data_valid = total_data_valid + 1;
    }
    //===================== undefined


    //===================== schema
    if (((Object.values(check_schema)[index_array]) ? Object.values(check_schema)[index_array] : null) == data_type) {
      schema_valid = true;
      total_schema_valid = total_schema_valid + 1;

    } else {
      schema_valid = false;

      let key_error = Object.keys(check_data)[index_array], object_dynamic_error = { [key_error]: data_type, schema: schema_valid, schema_type_required: Object.values(check_schema)[index_array] };
      data_schema_array_error.push(object_dynamic_error);


      //========= 20-08-2021
      let data_schema_object_error_key_child = Object.keys(check_data)[index_array],
        data_schema_push_error_key_object_dynamic_error = { [data_schema_object_error_key_child]: "type required " + Object.values(check_schema)[index_array] };
      data_schema_object_error_key = Object.assign(JSON.parse(JSON.stringify(all_object_error_key)), data_schema_push_error_key_object_dynamic_error);
      //========= 20-08-2021

      let data_schema_push_error_key = Object.keys(check_data)[index_array];
      data_schema_array_error_key.push(data_schema_push_error_key);

      let data_schema_push_error_index = index_array;
      data_schema_array_error_index.push(data_schema_push_error_index);

      schema_value_index = schema_value_index + 1;
      schema_value_array_index.push(schema_value_index);
      schema_value_array.push(check_data);
    }
    //===================== schema




    //===================== all 

    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'undefined' ||
      ((Object.values(check_schema)[index_array]) ? Object.values(check_schema)[index_array] : null) != data_type) {
      let all_key_error = Object.keys(check_data)[index_array], object_dynamic_error = { [all_key_error]: data_type, not_undefined: data_valid, schema: schema_valid, schema_type_required: Object.values(check_schema)[index_array] };
      all_array_error.push(object_dynamic_error);


      //========= 20-08-2021
      let all_object_error_key_child = {};
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

      if (data_valid == false) {
        all_object_error_key_child = Object.keys(check_data)[index_array],
          all_push_error_key_object_dynamic_error = { [all_object_error_key_child]: "undefined" };

        all_object_error_key = Object.assign(JSON.parse(JSON.stringify(all_object_error_key)), all_push_error_key_object_dynamic_error);

      } else if (schema_valid == false && data_valid == false) {
        all_object_error_key_child = Object.keys(check_data)[index_array],
          all_push_error_key_object_dynamic_error = { [all_object_error_key_child]: "undefined, " + "type required " + Object.values(check_schema)[index_array] };

        all_object_error_key = Object.assign(JSON.parse(JSON.stringify(all_object_error_key)), all_push_error_key_object_dynamic_error);

      } else if (schema_valid == false) {
        all_object_error_key_child = Object.keys(check_data)[index_array],
          all_push_error_key_object_dynamic_error = { [all_object_error_key_child]: "type required " + Object.values(check_schema)[index_array] };

        all_object_error_key = Object.assign(JSON.parse(JSON.stringify(all_object_error_key)), all_push_error_key_object_dynamic_error);

      }
      //========= 20-08-2021

      let all_push_error_key = Object.keys(check_data)[index_array];
      all_array_error_key.push(all_push_error_key);

      let all_push_error_index = index_array;


      all_array_error_index.push(all_push_error_index);

      all_value_index = all_value_index + 1;


      all_value_array_index.push(all_value_index);


      all_value_array.push(check_data);



    }




    //===================== all







    var key = Object.keys(check_data)[index_array], object_dynamic = { [key]: data_type, not_undefined: data_valid, schema: schema_valid, schema_type_required: Object.values(check_schema)[index_array] };

    data_array.push(object_dynamic);


    if (Number(Object.keys(check_data).length) == Number(index_array + 1)) {
      if (Number(total_data_valid) == Number(Object.keys(check_data).length) &&
        Number(total_schema_valid) == Number(Object.keys(check_data).length)) {
        res_json = {
          statusCode: 1,
          message: "valid",
          data: data_array
        };
      } else {
        res_json = {
          statusCode: 0,
          message: "error",

          all_error: all_array_error,
          all_error_index: all_array_error_index,

          all_error_key: all_object_error_key, // 20-08-2021
          all_error_key_array: all_array_error_key, // 20-08-2021

          all_value_index: all_value_array_index,
          all_value: all_value_array,

          undefined_error: data_array_error,
          undefined_error_index: data_array_error_index,

          undefined_error_key: data_object_error_key, // 20-08-2021
          undefined_error_key_array: data_array_error_key, // 20-08-2021

          undefined_value_index: value_array_index,
          undefined_value: value_array,

          schema_error: data_schema_array_error,
          schema_error_index: data_schema_array_error_index,


          schema_error_key: data_schema_object_error_key, // 20-08-2021
          schema_error_key_array: data_schema_array_error_key, // 20-08-2021


          schema_value_index: schema_value_array_index,
          schema_value: schema_value_array,

          data: data_array,
        };
      }
    } // end if

  } // end for

  return res_json;

};;


exports.check_all_data_schema_lenght = async function (data, schema, lenght) {

  // 20-08-2021
  // update all_error_key to object
  // update data_schema_array_error_key  to object
  // update data_array_error_key  to object

  // 21-08-2021
  // update lenght 


  // ========= inject code example

  // const request_validation = require('../functions/tools/request_validation');

  // let data_validation_value = {
  //   company_id: req.body.company_id,
  //   site: req.body.site,
  //   document_type: req.body.document_type,
  //   "requester.username": req.body.requester.username,
  //   data: req.body.data
  // };


  // let data_validation_schema = {
  //   company_id: "string",
  //   site: "string",
  //   document_type: "number",
  //   "requester.username": "string",
  //   data: "array"
  // };

  // check_data = await request_validation.check_all(data_validation_value, data_validation_schema);

  // if (check_data.statusCode == 1) {
  //   // res.json(check_data) // valid condition
  // } else {
  //   res.json(check_data) // error condition
  // }
  // ========= inject code example


  let example_request_valid = {
    "company_id": "test",
    "site": "test",
    "document_type": 1,
    "requester": { "username": "test" },
    "data": [{ "test2": 1, "test3": 2 }]
  };


  let example_request_error = {
    "site": 2,
    "document_type": { "data": 1 },
    "requester": { "username": "test" },
    "data": [{ "test2": 1, "test3": 2 }]
  };


  let valid_response = {
    "statusCode": 1,
    "message": "valid",
    "data": [
      {
        "company_id": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "site": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "document_type": "number",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "number"
      },
      {
        "requester.username": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "data": "array",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "array"
      }
    ]
  };



  let error_response = {
    "statusCode": 0,
    "message": "error",
    "all_error": [
      {
        "company_id": "undefined",
        "not_undefined": false,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "site": "number",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "document_type": "object",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "number"
      }
    ],
    "all_error_index": [
      0,
      1,
      2
    ],
    "all_error_key": [
      "company_id",
      "site",
      "document_type"
    ],
    "all_value_index": [
      1,
      2,
      3
    ],
    "all_value": [
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      }
    ],
    "undefined_error": [
      {
        "company_id": "undefined",
        "not_undefined": false
      }
    ],
    "undefined_error_index": [
      0
    ],
    "undefined_error_key": [
      "company_id"
    ],
    "undefined_value_index": [
      1
    ],
    "undefined_value": [
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      }
    ],
    "schema_error": [
      {
        "company_id": "undefined",
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "site": "number",
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "document_type": "object",
        "schema": false,
        "schema_type_required": "number"
      }
    ],
    "schema_error_index": [
      0,
      1,
      2
    ],
    "schema_error_key": [
      "company_id",
      "site",
      "document_type"
    ],
    "schema_value_index": [
      1,
      2,
      3
    ],
    "schema_value": [
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      },
      {
        "site": 2,
        "document_type": {
          "data": 1
        },
        "requester.username": "test",
        "data": [
          {
            "test2": 1,
            "test3": 2
          }
        ]
      }
    ],
    "data": [
      {
        "company_id": "undefined",
        "not_undefined": false,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "site": "number",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "string"
      },
      {
        "document_type": "object",
        "not_undefined": true,
        "schema": false,
        "schema_type_required": "number"
      },
      {
        "requester.username": "string",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "string"
      },
      {
        "data": "array",
        "not_undefined": true,
        "schema": true,
        "schema_type_required": "array"
      }
    ]
  };




  let check_data = data;
  let check_schema = schema;
  let data_valid = false;
  let schema_valid = false;
  let data_type;
  let res_json = {};
  let total_data_valid = 0;
  let total_schema_valid = 0;


  let data_array = [];

  //============== undefined
  let data_array_error = [];
  let data_array_error_key = [];

  let data_object_error_key = {};  // 20-08-2021

  let data_array_error_index = [];

  let value_array = [];
  let value_index = 0;
  let value_array_index = [];
  //============== undefined


  //============== schema
  let data_schema_array_error = [];
  let data_schema_array_error_key = [];

  let data_schema_object_error_key = {};  // 20-08-2021

  let data_schema_array_error_index = [];

  let schema_value_array = [];
  let schema_value_index = 0;
  let schema_value_array_index = [];
  //============== schema


  //============== all
  let all_array_error = [];
  let all_array_error_key = [];

  let all_object_error_key = {}; // 20-08-2021

  let all_array_error_index = [];

  let all_value_array = [];
  let all_value_index = 0;
  let all_value_array_index = [];

  //============== all



  for (let index_array = 0; index_array < Object.keys(check_data).length; index_array++) {

    // console.log(Object.values(check_data)[index_array]);
    // console.log(isNaN(Object.values(check_data)[index_array]));

    // console.log(typeof check_data[(Object.keys(check_data)[index_array])])


    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'boolean') {
      data_type = 'boolean';
    } else if (typeof check_data[(Object.keys(check_data)[index_array])] == 'number') {
      data_type = 'number';
    } else if (Object.values(check_data)[index_array] &&
      isDate(Object.values(check_data)[index_array]) == true) { //isDate check date

      if (isNaN(Object.values(check_data)[index_array]) == false) {   // isNan  string check is valid number
        // isNaN(123)         // false
        // isNaN('123')       // false
        // isNaN('1e10000')   // false (This translates to Infinity, which is a number)
        // isNaN('foo')       // true
        // isNaN('10px')      // true
        // isNaN('')          // false
        // isNaN(' ')         // false
        // isNaN(false)       // false
        data_type = 'string';
      } else {
        data_type = 'date';
      }

    } else if (Object.values(check_data)[index_array] && Object.values(check_data)[index_array].constructor === Array) {
      data_type = 'array';
    } else if (Object.values(check_data)[index_array] && Object.values(check_data)[index_array] == null) {
      data_type = 'null';
    } else if (typeof check_data[(Object.keys(check_data)[index_array])] == 'object') {
      data_type = 'object';
    } else {
      data_type = '' + typeof check_data[(Object.keys(check_data)[index_array])];
    }




    //===================== undefined
    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'undefined') {


      data_valid = false;

      let key_error = Object.keys(check_data)[index_array], object_dynamic_error = { [key_error]: data_type, not_undefined: data_valid };

      data_array_error.push(object_dynamic_error);



      //========= 20-08-2021
      let data_object_error_key_child = Object.keys(check_data)[index_array],
        data_push_error_key_object_dynamic_error = { [data_object_error_key_child]: "undefined" };
      data_object_error_key = Object.assign(JSON.parse(JSON.stringify(all_object_error_key)), data_push_error_key_object_dynamic_error);
      //========= 20-08-2021

      let data_push_error_key = Object.keys(check_data)[index_array];
      data_array_error_key.push(data_push_error_key);

      let data_push_error_index = index_array;
      data_array_error_index.push(data_push_error_index);

      value_index = value_index + 1;
      value_array_index.push(value_index);
      value_array.push(check_data);

    } else {
      data_valid = true;
      total_data_valid = total_data_valid + 1;
    }
    //===================== undefined


    //===================== schema
    if (((Object.values(check_schema)[index_array]) ? Object.values(check_schema)[index_array] : null) == data_type) {
      schema_valid = true;
      total_schema_valid = total_schema_valid + 1;

    } else {
      schema_valid = false;

      let key_error = Object.keys(check_data)[index_array], object_dynamic_error = { [key_error]: data_type, schema: schema_valid, schema_type_required: Object.values(check_schema)[index_array] };
      data_schema_array_error.push(object_dynamic_error);


      //========= 20-08-2021
      let data_schema_object_error_key_child = Object.keys(check_data)[index_array],
        data_schema_push_error_key_object_dynamic_error = { [data_schema_object_error_key_child]: "type required " + Object.values(check_schema)[index_array] };
      data_schema_object_error_key = Object.assign(JSON.parse(JSON.stringify(all_object_error_key)), data_schema_push_error_key_object_dynamic_error);
      //========= 20-08-2021

      let data_schema_push_error_key = Object.keys(check_data)[index_array];
      data_schema_array_error_key.push(data_schema_push_error_key);

      let data_schema_push_error_index = index_array;
      data_schema_array_error_index.push(data_schema_push_error_index);

      schema_value_index = schema_value_index + 1;
      schema_value_array_index.push(schema_value_index);
      schema_value_array.push(check_data);
    }
    //===================== schema




    //===================== all 

    if (typeof check_data[(Object.keys(check_data)[index_array])] == 'undefined' ||
      ((Object.values(check_schema)[index_array]) ? Object.values(check_schema)[index_array] : null) != data_type) {
      let all_key_error = Object.keys(check_data)[index_array], object_dynamic_error = { [all_key_error]: data_type, not_undefined: data_valid, schema: schema_valid, schema_type_required: Object.values(check_schema)[index_array] };
      all_array_error.push(object_dynamic_error);


      //========= 20-08-2021
      let all_object_error_key_child = {};
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

      if (data_valid == false) {
        all_object_error_key_child = Object.keys(check_data)[index_array],
          all_push_error_key_object_dynamic_error = { [all_object_error_key_child]: "undefined" };

        all_object_error_key = Object.assign(JSON.parse(JSON.stringify(all_object_error_key)), all_push_error_key_object_dynamic_error);

      } else if (schema_valid == false && data_valid == false) {
        all_object_error_key_child = Object.keys(check_data)[index_array],
          all_push_error_key_object_dynamic_error = { [all_object_error_key_child]: "undefined, " + "type required " + Object.values(check_schema)[index_array] };

        all_object_error_key = Object.assign(JSON.parse(JSON.stringify(all_object_error_key)), all_push_error_key_object_dynamic_error);

      } else if (schema_valid == false) {
        all_object_error_key_child = Object.keys(check_data)[index_array],
          all_push_error_key_object_dynamic_error = { [all_object_error_key_child]: "type required " + Object.values(check_schema)[index_array] };

        all_object_error_key = Object.assign(JSON.parse(JSON.stringify(all_object_error_key)), all_push_error_key_object_dynamic_error);

      }
      //========= 20-08-2021

      let all_push_error_key = Object.keys(check_data)[index_array];
      all_array_error_key.push(all_push_error_key);

      let all_push_error_index = index_array;


      all_array_error_index.push(all_push_error_index);

      all_value_index = all_value_index + 1;


      all_value_array_index.push(all_value_index);


      all_value_array.push(check_data);



    }




    //===================== all







    var key = Object.keys(check_data)[index_array], object_dynamic = { [key]: data_type, not_undefined: data_valid, schema: schema_valid, schema_type_required: Object.values(check_schema)[index_array] };

    data_array.push(object_dynamic);


    if (Number(Object.keys(check_data).length) == Number(index_array + 1)) {
      if (Number(total_data_valid) == Number(Object.keys(check_data).length) &&
        Number(total_schema_valid) == Number(Object.keys(check_data).length)) {
        res_json = {
          statusCode: 1,
          message: "valid",
          data: data_array
        };
      } else {
        res_json = {
          statusCode: 0,
          message: "error",

          all_error: all_array_error,
          all_error_index: all_array_error_index,

          all_error_key: all_object_error_key, // 20-08-2021
          all_error_key_array: all_array_error_key, // 20-08-2021

          all_value_index: all_value_array_index,
          all_value: all_value_array,

          undefined_error: data_array_error,
          undefined_error_index: data_array_error_index,

          undefined_error_key: data_object_error_key, // 20-08-2021
          undefined_error_key_array: data_array_error_key, // 20-08-2021

          undefined_value_index: value_array_index,
          undefined_value: value_array,

          schema_error: data_schema_array_error,
          schema_error_index: data_schema_array_error_index,


          schema_error_key: data_schema_object_error_key, // 20-08-2021
          schema_error_key_array: data_schema_array_error_key, // 20-08-2021


          schema_value_index: schema_value_array_index,
          schema_value: schema_value_array,

          data: data_array,
        };
      }
    } // end if

  } // end for

  return res_json;

}