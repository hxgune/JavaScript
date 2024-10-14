function Foo () {
    let name = prompt("Name");
    let age = prompt("Age");

    if (name == "" || age == "") {
        alert("Incorrect input");
        return;
    }

    age = parseInt(age);
    if (isNaN(age)) {
        alert("Incorrect age");
        return;
    }
    
    if (age < 18) {
        alert("You are not allowed to visit this website");
    }
    else if (18 <= age && age <= 22) {
        let access = confirm("Are you sure you want to continue?");
        if (access) {
            alert("Welcome, " + name);
        }
        else {
            alert("You are not allowed to visit this website");
        }
    }
    else {
        alert("Welcome, " + name);
    }

}