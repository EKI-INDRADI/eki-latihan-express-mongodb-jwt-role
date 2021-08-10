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

