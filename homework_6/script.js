let arr = ['hello', 'world', 23, '23', null];

function filterBy(arr, type) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) != type) {
            counter++;
        }
    }

    let array = new Array(counter);
    let k = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof(arr[i]) != type) {
            array[k] = arr[i];
            k++;
        }
    }

    console.log(arr);
    console.log(array);
}

filterBy(arr, 'string');