let numberImages = ["img/1.jpg","img/2.jpg","img/3.JPG", "img/4.png"];
let currentIndex = 0;

let changeElement = document.getElementById("firstImage");

function changeImage() {
    if(currentIndex == 4) {
        currentIndex = 0;
    }
    changeElement.src = numberImages[currentIndex];
    currentIndex++;
}

let remainShow = setInterval(changeImage, 1000);

function stopShowImage() {
    clearInterval(remainShow);
}

function remainShowImage() {
    remainShow = setInterval(changeImage, 1000);
}



