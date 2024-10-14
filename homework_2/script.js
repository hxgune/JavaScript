function Foo() {
    let number = prompt("Number");
    number = parseInt(number);
    
    if (isNaN(number)) {
        alert("Incorrect number");
        return;
    }

    let counter = 0; 

    for (let i = 1; i <= number; i++) {
        if (i % 5 == 0) {
            counter++;
        }
    }

    if (counter == 0) {
        alert("Sorry, no numbers")
        return;
    }

    console.log(counter);
}