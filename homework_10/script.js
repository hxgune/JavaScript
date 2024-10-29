let inputPasswordShow = true; 
let inputField = document.getElementById("inputPassword");
let eyeShow = document.getElementById("iconPassword");

let inputPasswordConfirmShow = true; 
let inputConfirmField = document.getElementById("inputPasswordConfirm");
let eyeConfirmShow = document.getElementById("iconPasswordConfirm");

function inputPasswordCheck() {
    if (inputPasswordShow) {

        inputField.type = 'password';
        inputPasswordShow = false;

        eyeShow.classList.remove("fa-eye-slash");
        eyeShow.classList.add("fa-eye");

    }
    else if(inputPasswordShow == false) {

        inputField.type = 'text';
        inputPasswordShow = true;

        eyeShow.classList.remove("fa-eye");
        eyeShow.classList.add("fa-eye-slash");
    }

}


function inputPasswordConfirmCheck() {
    if (inputPasswordConfirmShow) {

        inputConfirmField.type = 'password';
        inputPasswordConfirmShow = false;

        eyeConfirmShow.classList.remove("fa-eye-slash");
        eyeConfirmShow.classList.add("fa-eye");

    }
    else if(inputPasswordConfirmShow == false) {

        inputConfirmField.type = 'text';
        inputPasswordConfirmShow = true;

        eyeConfirmShow.classList.remove("fa-eye");
        eyeConfirmShow.classList.add("fa-eye-slash");
    }

    
}

function passwordSubmit() {
    let firstValue = inputField.value;
    let secondValue = inputConfirmField.value;

    if(firstValue === "" || secondValue === "") {
        return;
    }
    if (firstValue === secondValue) {
        alert("You are welcome");
    }
    else {
        let showErrorMessage = document.getElementById("errorMessage");
        showErrorMessage.style.display = "block";
    }
}