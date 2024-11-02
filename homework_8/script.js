const inputPrice = document.getElementById("inputPrice");
const spanContainer = document.getElementById("spanContainer");

inputPrice.addEventListener("blur", function(){
    let content = inputPrice.value;
    content = parseInt(content);

    inputPrice.classList.remove("incorrect");

    while (spanContainer.firstChild) {
        spanContainer.removeChild(spanContainer.firstChild);
    }

    if (content >= 0) {
        let createButton = document.createElement("button");
        createButton.textContent = "X";
        
        let createSpan = document.createElement("span");
        createSpan.textContent = `Текущая цена: $ ${content}`;
        createSpan.classList.add("price");
        createSpan.appendChild(createButton);
        spanContainer.appendChild(createSpan);

        createButton.addEventListener("click", function(){
           spanContainer.removeChild(createSpan);
        });
    }
    else {
        let createParagraph = document.createElement("p");
        createParagraph.textContent = "Please enter correct price";
        spanContainer.appendChild(createParagraph);
        inputPrice.classList.add("incorrect");
    }
});