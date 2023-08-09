var exclude_keys = ['id','type','color','url'];
document.addEventListener("DOMContentLoaded", function () {
    var csv_exhibition = "data:text/csv;charset=utf-8,";
    var csv_person = "data:text/csv;charset=utf-8,";
    var exhibition = findNestedObj(json_data, 'type', 'exhibition');
    var person = findNestedObj(json_data, 'type', 'person');
    var csv_array;
    /*
    for (var i = 0;i<exhibition.length;i++){
        csv_array = makeCSVLines(exhibition[i]);
        csv_array.forEach(function (rowArray) {
            csv_exhibition += rowArray + "\r\n";
        })
    }
    csv_array = makeCSVLines(exhibition);
    var encodedUri = encodeURI(csv_exhibition);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "exhibition.csv");
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "exhibition.csv".

    for (var j = 0;j<person.length;j++){
        exclude_keys.map(function (ex_key) {
            delete person[j][ex_key];
        })
        csv_array = makeCSVLines(person[j]);
        csv_array.forEach(function (rowArray) {
            delete  rowArray[0];
            csv_person += rowArray + "\r\n";
        })
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
