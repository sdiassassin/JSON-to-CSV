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

    var basic_title_pos = 0;

    upper_array.map(function (header_arr, idx) {
        if (header_arr.indexOf('BasicInformation.Title') > -1) {
            basic_title_pos = idx;
            upper_array.unshift(upper_array.splice(idx,  1));
        }
    });

    csv_exhibition += upper_array + "\r\n";

    for (var i = 0; i < exhibition.length; i++) {
        csv_array = makeCSVLines(exhibition[i].src, exhibition_header);
        csv_array.unshift(csv_array.splice(basic_title_pos,  1));
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

    var name_pos = [];
    var no_name_headers = [];
    upper_array.map(function (header_name, idx) {
        var given_idx = header_name.indexOf('Name.GivenName');
        var family_idx = header_name.indexOf('Name.FamilyName');
        if (given_idx > -1) {
            name_pos.push(idx);
            header_name = header_name.replace('Name.GivenName', 'Name');
            no_name_headers.push(header_name);
        } else {
            if (family_idx < 0) {
                no_name_headers.push(header_name);
            }
        }
    });

    var no_also_name_headers = [];
    no_name_headers.map(function (header_name, idx) {
        var given_idx = header_name.indexOf('Name.AlsoKnownAs.GivenName');
        var family_idx = header_name.indexOf('Name.AlsoKnownAs.FamilyName');
        if (given_idx > -1) {
            name_pos.push(idx + 1);
            header_name = header_name.replace('Name.AlsoKnownAs.GivenName', 'Name.AlsoKnownAs.Name');
            no_also_name_headers.push(header_name);
        } else {
            if (family_idx < 0) {
                no_also_name_headers.push(header_name);
            }
        }
    });

    no_name_headers = no_also_name_headers;

    no_name_headers.unshift(no_name_headers.splice(name_pos[0],  1));

    csv_person += no_name_headers + "\r\n";

    for (i = 0; i < person.length; i++) {
        csv_array = makeCSVLines(person[i].src, person_header);

        //Add names
        var fullname_csv = [];
        csv_array.map(function (csv_val, idx) {
            if (name_pos.includes(idx)) {
                fullname_csv.push(csv_val + " " + csv_array[idx + 1])
            } else {
                if (!name_pos.includes(idx - 1)) {
                    fullname_csv.push(csv_val)
                }
            }
        });

        var tmp_csv_csv_name = fullname_csv.splice(name_pos[0],  1);
        fullname_csv.unshift(tmp_csv_csv_name);

        csv_person += fullname_csv + "\r\n";
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
