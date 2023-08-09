function depthOf(object) {
    var level = 1;
    for (var key in object) {
        if (!object.hasOwnProperty(key)) continue;
        if (typeof object[key] == 'object') {
            var depth = depthOf(object[key]) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
}

function getDeepKeys(obj) {
    var keys = [];
    for (var key in obj) {
        if (((obj[key] === null))) keys.push(key);
        if ((Array.isArray(obj[key])) && obj[key].length == 0) keys.push(key);
        if (typeof obj[key] === "object") {
            var subkeys = getDeepKeys(obj[key]);
            keys = keys.concat(subkeys.map(function (subkey) {
                //  subkey = subkey.toUpperCase();
                if (!isNaN(key)){
                    var md_key = (parseInt(key) + 1) + "";
                    return md_key + "." + subkey;
                } else {
                    return key + "." + subkey;
                }
            }));
        } else {
            if (!isNaN(key)){
                key = (parseInt(key) + 1) + "";
            }
            keys.push(key);
        }
    }
    return keys;
}

function removeDupKeys(src, dst, sep) {
    if (!sep) sep = "***";
    if (src.length != dst.length) return;
    if (src.join(",") == dst.join(",")) return;
    for (var i = 0; i < src.length; i++) {
        if (src[i] == dst[i]) {
            dst[i] = sep;
        } else {
            return;
        }
    }
}

function  make_header(json_obj) {
    var obj_key_strings = getDeepKeys(json_obj);
    return obj_key_strings;
}

function makeCSVLines(json_obj, $header) {
    var arr_depth = depthOf(json_obj);
    var obj_key_strings = getDeepKeys($header);
    var obj_keys_arr = [];
    obj_key_strings.map(function (obj_key_str) {
        obj_keys_arr.push(obj_key_str.split("."));
    });
    var rows = [];
    obj_keys_arr.map(function (obj_keys) {
        var prev_obj = json_obj;
        var csv_rec = [];
        var end_val = "";
        for (var i = 0; i < arr_depth; i++) {
            var cur_obj;
            if (!isNaN(obj_keys[i])) {
                cur_obj = prev_obj[obj_keys[i] - 1];
            } else {
                if (!prev_obj) {
                    continue;
                } else {
                    cur_obj = prev_obj[obj_keys[i]];
                }
            }
            if ((obj_keys.length - 1) == i) {
                if (typeof cur_obj != "object") { //This is  root
                    if (typeof cur_obj == "string") {
                        cur_obj = cur_obj.replaceAll(',', '/');
                    }
                    end_val = cur_obj;
                }
            } else if ((obj_keys.length - 1) > i) {
                prev_obj = cur_obj;
            }
        }
        rows.push(end_val);
    });
    return rows;
}

function make_upper_array(temp_array) {
    var upper_array=[];
    temp_array.forEach(function (rowArray) {
       rowArray = rowArray.split('.');
       rowArray = rowArray.map(word => word[0].toUpperCase() + word.substring(1));
       rowArray = removeDuplicates(rowArray);
       rowArray = rowArray.join('.');
       upper_array.push(rowArray);
    });
    return upper_array;
}
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
function recursiveAssign(a, b) {
    if (Object(b) !== b) return b;
    if (Object(a) !== a) a = {};
    for (var key in b) {
        a[key] = recursiveAssign(a[key], b[key]);
    }
    return a;
}
if (typeof Array.isArray === 'undefined') {
    Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
};