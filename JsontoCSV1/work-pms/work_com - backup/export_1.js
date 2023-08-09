document.addEventListener("DOMContentLoaded", function () {
    var csv_exhibition = "data:text/csv;charset=utf-8,";
    var exhibition = findNestedObj(json_data, 'type', 'exhibition');
    var person = findNestedObj(json_data, 'type', 'person');
    var keys = Object.keys(exhibition[0]);
});

/* Find the object corresponding to the specified key value */
function findNestedObj(entireObj, keyToFind, valToFind) {
    var foundObj = [];
    JSON.stringify(entireObj, function (_, nestedValue) {
        if (nestedValue && nestedValue[keyToFind] === valToFind) {
            foundObj.push(nestedValue);
        }
        return nestedValue;
    });
    return foundObj;
}

var test_obj = json_data[5];
var arr_depth = depthOf(test_obj);
var obj_key_strings = getDeepKeys(test_obj);

var obj_keys_arr = [];
obj_key_strings.map(function (obj_key_str) {
    obj_keys_arr.push(obj_key_str.split("."));
});

var rows = [];
obj_keys_arr.map(function (obj_keys) {
    var prev_obj = test_obj;
    var csv_rec = [];
    var end_val = "";
    for (var i = 0; i < arr_depth; i++) {
        var cur_obj = prev_obj[obj_keys[i]];
        if ((obj_keys.length - 1) == i) {
            csv_rec.push(obj_keys[i]);
            if (typeof cur_obj != "object") { //This is not root
                end_val = cur_obj;
            }
        } else if ((obj_keys.length - 1) > i) {
            csv_rec.push(obj_keys[i]);
            prev_obj = cur_obj;
        } else {
            csv_rec.push("");
        }
    }
    csv_rec.push(end_val);
    // console.log(csv_rec);
    rows.push(csv_rec);
});

rows.map(function (row) {

});

console.log(obj_keys_arr);
console.log(rows);