$(".tabs-title").on("click", function(){

    let tab = $(this);

    let selectedTabs = $(".tabs-title");

    selectedTabs.each(function () {
        $(this).removeClass("active");
    });

    tab.addClass("active");

    let content = $('#' + tab.text());

    let contents = $('.content');
    contents.each(function() {
        $(this).removeClass('content-active');
    });

    content.addClass('content-active');
})