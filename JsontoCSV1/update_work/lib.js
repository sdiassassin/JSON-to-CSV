
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
    for(var key in obj) {
        if(typeof obj[key] === "object") {
            var subkeys = getDeepKeys(obj[key]);
            // console.log(subkeys);
            // keys = keys.concat(subkeys);
            keys = keys.concat(subkeys.map(function(subkey) {
                return key + "." + subkey;
            }));
        } else {
            keys.push(key);
        }
    }
    return keys;
}

function searchRecursive(needle, haystack) {
    for (var i=0; i<haystack.length; i++) {
        if (haystack[i].u === needle) return haystack[i];
        var search = searchRecursive(needle, haystack[i].s);
        if (search) return search;
    }
    return null;
}

// console.log(depthOf(json_data[5]));