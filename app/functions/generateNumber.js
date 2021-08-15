
exports.autoGenerate = function (set_number) {
    //async function (set_str_number) {
    let result = set_number.toString().padStart(4, '0');
    return result
}

    //  console.log(exports.autoGenerate(50))
    
    // const str1 = '5';
    // console.log(str1.padStart(2, '0'));
    // // expected output: "05"
    // const fullNumber = '2034399002125581';
    // const last4Digits = fullNumber.slice(-4);
    // const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
    // console.log(maskedNumber);