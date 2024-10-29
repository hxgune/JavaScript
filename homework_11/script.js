let lastElement = null;

document.addEventListener("keydown", function(event) {
    let element;
    switch(event.code) {
        case 'Enter':
            element = document.getElementById("Enter")
        break;
        case 'KeyS':
            element = document.getElementById('S');
        break;
        case 'KeyE':
            element = document.getElementById('E');
        break;
        case 'KeyO':
            element = document.getElementById('O');
        break;
        case 'KeyN':
            element = document.getElementById('N');
        break;
        case 'KeyL':
            element = document.getElementById('L');
        break;
        case 'KeyZ':
            element = document.getElementById('Z');
        break;
    }

    if (element != null) {
        element.style.backgroundColor = "blue";
        if(lastElement != null) {
            lastElement.style.backgroundColor = "black";
        }
        lastElement = element;
    }
})