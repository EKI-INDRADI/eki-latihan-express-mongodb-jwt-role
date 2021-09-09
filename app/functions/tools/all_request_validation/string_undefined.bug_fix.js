https://stackoverflow.com/questions/41438656/why-do-i-get-cannot-read-property-tostring-of-undefined

bug_fix_undefined_null_string = function (data) {
    let bug_fix_undefined_null_string = "" + data;
    return bug_fix_undefined_null_string.toString()
}

let result_string = bug_fix_undefined_null_string(null).length;

bug_fix_undefined_null_string_length = function (data) {
    let bug_fix_undefined_null_string

    if (data == undefined) {
        bug_fix_undefined_null_string = 0;

    } else if (data == null) {
        bug_fix_undefined_null_string = 0;
    } else {
        bug_fix_undefined_null_string = ("" + data).length;
    }
    return bug_fix_undefined_null_string
}



let result_string2 = bug_fix_undefined_null_string_length(null);
console.log(result_string + " " +result_string2)