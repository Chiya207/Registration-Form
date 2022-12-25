var entry = document.getElementById("entry");
entry.addEventListener("click", display_details);

var row = 1;

function display_details() {
    var n = document.getElementById("name").value;
    var c = document.getElementById("contact").value;
    var e = document.getElementById("email").value;
    var s = document.getElementById("skills").value;
    var cl = document.getElementById("clg").value;


    if (!n || !c || !e || !s || !cl) {
        alert("Please Fill ALL Details.");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = n;
    cell2.innerHTML = c;
    cell3.innerHTML = e;
    cell4.innerHTML = s;
    cell5.innerHTML = cl;


    row++;

}