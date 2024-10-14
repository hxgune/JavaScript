function Foo() {
    let firstNumber = prompt("First number:");
    let secondNumber = prompt("Second number:");

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if (isNaN(firstNumber, secondNumber)) {
        alert("Error");
        return;
    }

    let operation = prompt("Operation");

    let result = Calc(firstNumber, secondNumber, operation)

    console.log(result);
}

function Calc(first, second, operation) {
    let result = 0;
    switch (operation) {
        case '+':
        result = first + second;
        break;
        case '-':
        result = first - second;
        break;
        case '*':
        result = first * second;
        break;
        case '/':
            if (second == 0) {
                alert("Error");
                result = -1;
            }
        else {
            result = first / second;
        }
        break;
        default:
            alert("Error");
            result = -1;
        break;
    }

    return result;
}