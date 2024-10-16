function createNewUser() {
    let firstName = prompt("Your first name");
    let lastName = prompt("Your last name");
    let birthday = prompt("Your birthday (dd.mm.yyyy)");

    if (!firstName || !lastName || !birthday) {
        alert("Error");
        return;
    }

    let newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        getLogin() {
            let firstNameLowerCase = firstName[0].toLowerCase();
            let lastNameLowerCase = lastName.toLowerCase();
            return firstNameLowerCase + lastNameLowerCase;
        },
        getAge() {
            let [day, month, year] = birthday.split('.').map(Number);
            if (day > 31 || day < 1) {
                alert("Error");
                return;
            }
            if (month > 12 || month < 1) {
                alert("Error");
                return;
            }
            if (year >= 2025 || year < 1900) {
                alert("Error");
                return;
            }
            let birthDate = new Date(year, month - 1, day);
            let now = new Date();
            let age = now.getFullYear() - birthDate.getFullYear();
            let monthDifference = now.getMonth() - birthDate.getMonth();
            let dayDifference = now.getDate() - birthDate.getDate();

            if (monthDifference <= 0 || dayDifference <= 0) {
                age--;
            }

            if (age < 0) {
                alert("Error");
                return;
            }

            return age;
        },
        getPassword() {
            let firstNameUpperCase = firstName[0].toUpperCase();
            let lastNameLowerPassword = lastName.toLowerCase();
            let year =  birthday.split('.')[2];
            return firstNameUpperCase + lastNameLowerPassword + year;
        }
    };

    console.log(firstName);
    console.log(lastName);
    console.log(birthday);
    console.log("Your login: " + newUser.getLogin());
    console.log("Your age: " + newUser.getAge());
    console.log("Your password: " + newUser.getPassword());
}