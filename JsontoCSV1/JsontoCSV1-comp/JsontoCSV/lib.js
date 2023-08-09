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
        if (typeof obj[key] === "object") {
            var subkeys = getDeepKeys(obj[key]);
            //keys = keys.concat(subkeys);
            keys = keys.concat(subkeys.map(function (subkey) {
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
    //console.log(keys);
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

function makeCSVLines(json_obj) {

    var arr_depth = depthOf(json_obj);
    var obj_key_strings = getDeepKeys(json_obj);

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
                cur_obj = prev_obj[obj_keys[i]];
            }
            if ((obj_keys.length - 1) == i) {
                csv_rec.push(obj_keys[i]);
                if (typeof cur_obj != "object") { //This is  root
                    if (typeof cur_obj == "string") {
                        cur_obj = cur_obj.replaceAll(',', '/');
                        //cur_obj = cur_obj.replace(/\"/g, "\"\"");
                    }
                    end_val = cur_obj;
                }
            } else if ((obj_keys.length - 1) > i) {
                csv_rec.push(obj_keys[i]);
                prev_obj = cur_obj;
            } else {
                csv_rec.push("***");
            }
        }
        csv_rec.push(end_val);
        rows.map(function (row) {
            removeDupKeys(row, csv_rec);
        });
        rows.push(csv_rec);
    });
    return rows;
}