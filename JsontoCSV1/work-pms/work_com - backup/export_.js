document.addEventListener("DOMContentLoaded", function () {
    var csv_exhibition = "data:text/csv;charset=utf-8,";
    var exhibition = findNestedObj(json_data, 'type', 'exhibition');
    var person = findNestedObj(json_data, 'type', 'person');
    var keys = Object.keys(exhibition[0]);
    console.log(keys);
    var ex_row_header = ['Category', 'Grouping', 'Label', 'Field'];
    csv_exhibition += ex_row_header + "\r\n";
    var row_id = keys[0] + (" ,") + (" ,") + (" ,") + (" ,");
    var row_type = keys[1] + (" ,") + (" ,") + (" ,") + (" ,");
    var row_color = keys[2] + (" ,") + (" ,") + (" ,") + (" ,");
    var row_url = keys[3] + (" ,") + (" ,") + (" ,") + (" ,");
    //var
    exhibition.forEach(function (rowArray) {
        row_id += rowArray.id + (" ,");
        row_type += rowArray.type + (" ,");
        row_color += rowArray.color + (" ,");
        row_url += rowArray.url + (" ,");
    })
    csv_exhibition += row_id + "\r\n";
    csv_exhibition += row_type + "\r\n";
    csv_exhibition += row_color + "\r\n";
    csv_exhibition += row_url + "\r\n";
    var encodedUri = encodeURI(csv_exhibition);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "my_data.csv".
    window.open(encodedUri);


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

console.log(depthOf(json_data[5]));