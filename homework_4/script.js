function createNewUser() {
    let firstName = prompt("Your first name");
    let lastName = prompt("Your last name");

    if (!firstName || !lastName) {
        alert("Error");
        return;
    }

    let newUser = {
        firstName: firstName,
        lastName: lastName,
        getLogin() {
            let firstNameLowerCase = firstName[0].toLowerCase();
            let lastNameLowerCase = lastName.toLowerCase();
            return firstNameLowerCase + lastNameLowerCase;
        }
    };

    console.log(newUser.getLogin());
}