document.addEventListener('DOMContentLoaded', function() {
    setList();
})

let arr = ['hello', 'world', 'Kyiv', 'Kharkiv', 'Odessa', 'Lviv'];

function setList() {
    let arrString = arr.map(String);
    const list = document.getElementById('list');
    for (let i = 0; i < arr.length; i++) {
        let create = document.createElement('li');
        create.textContent = arrString[i];
        list.appendChild(create);
    }
}
