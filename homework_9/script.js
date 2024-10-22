function tabClick(event) {
    const liElement = event.currentTarget;
    let tabs = document.querySelectorAll('.tabs-title');

    tabs.forEach(element => {
        element.classList.remove("active");
    })

    liElement.classList.add("active");

    let tabsContent = document.querySelectorAll(".content");

    tabsContent.forEach(element => {
        element.classList.remove("content-active");
    })
    let textElement = document.getElementById(liElement.textContent);
    textElement.classList.add("content-active");

}