let isLight = true;

let body = document.getElementById("bodyTheme");

setTheme();

function changeTheme() {
    if (isLight) {
        body.classList.add("dark");
        isLight = false;
        localStorage.setItem("theme", "dark");
    }
    else {
        body.classList.remove("dark");
        isLight = true;
        localStorage.setItem("theme", "light")
    }
}

function setTheme() {
    let theme = localStorage.getItem("theme");

    if(theme === "dark") {
        body.classList.add("dark");
        isLight = false;
    }
    else {
        isLight = true;
    }
}