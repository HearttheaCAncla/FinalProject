function check() {
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var pword = document.getElementById("pWord").value;
    var reason = document.getElementById("reason").value;
    var sex = getSex();

    var required = [fname,lname,sex,email,pword,reason];
    var error = document.getElementsByClassName("blank");

    let valid = true;

    for (var i=0;i<required.length;i++) {
        if (required[i] == "") {
            error[i].innerHTML = "Required";
            valid = false;
        }
        else {
            error[i].innerHTML = "";
            saveInfo();
        }
    }
    return valid;
}

function getSex() {
    var radios = document.getElementsByName("sex");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return ""; 
}

function saveInfo() {
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var pword = document.getElementById("pWord").value;
    var reason = document.getElementById("reason").value;
    var sex = getSex();

    var keys = ["firstname","lastname","selcsex","emailad","passw","reasonwhy"];
    var values = [fname,lname,sex,email,pword,reason];

    for(i=0;i<keys.length;i++) {
        localStorage.setItem(keys[i], values[i]);
    }
}

function displayInfo() {
    var labels = ["First Name: ", "Last Name: ", "Sex: ", "Email Address: ", "Why I support this campaign: "];
    var keys = ["firstname","lastname","selcsex","emailad","reasonwhy"];
    let output = "";

    for(i=0;i<keys.length;i++) {
        let values = localStorage.getItem(keys[i]);
        output += "<p><strong>" + labels[i] + "</strong> " + values + "</p>";
    }
    document.getElementById("info").innerHTML += output;
}