var exclude_keys = ['id', 'type', 'color', 'url'];
document.addEventListener("DOMContentLoaded", function () {
    var csv_exhibition = "data:text/csv;charset=utf-8,";
    var csv_person = "data:text/csv;charset=utf-8,";
    var exhibition = findNestedObj(json_data, 'type', 'exhibition');
    var exhibition_header = {},person_header = {};
    var person = findNestedObj(json_data, 'type', 'person');
    var csv_array, temp_array, upper_array;
    for (var i = 0; i < exhibition.length; i++) {
        if (Object.keys(exhibition_header).length == 0) {
            exhibition_header = {};
        }
        exhibition_header = recursiveAssign(exhibition_header, exhibition[i].src);
    }
    exclude_keys.map(function (ex_key) {
        delete exhibition_header[ex_key];
    });
    temp_array = make_header(exhibition_header);
    upper_array = make_upper_array(temp_array);
    csv_exhibition += upper_array + "\r\n";
    for (var i = 0; i < exhibition.length; i++) {
        csv_array = [];
        csv_array += makeCSVLines(exhibition[i].src, exhibition_header);
        csv_exhibition += csv_array + "\r\n";
    }
    var encodedUri = encodeURI(csv_exhibition);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "exhibition.csv");
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "exhibition.csv".


    for (var i = 0; i < person.length; i++) {
        if (Object.keys(person).length == 0) {
            person_header = {};
        }
        person_header = recursiveAssign(person_header, person[i].src);
    }
    exclude_keys.map(function (ex_key) {
        delete person_header[ex_key];
    });
    temp_array = make_header(person_header);
    upper_array = make_upper_array(temp_array);
    csv_person += upper_array + "\r\n";
    for (var i = 0; i < person.length; i++) {
        csv_array = [];
        csv_array += makeCSVLines(person[i].src, person_header);
        csv_person += csv_array + "\r\n";
    }
    encodedUri = encodeURI(csv_person);
    link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "person.csv");
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "person.csv".
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
