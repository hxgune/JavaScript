function scrollElements(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.position = "fixed";
        scrollTopBtn.style.display = "block";
        scrollTopBtn.style.top = "50px";
        scrollTopBtn.style.left = "50px";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function hideContent() {
    $("#hideContent").slideToggle(500); 
}
