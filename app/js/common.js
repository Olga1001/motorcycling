$(document).ready(function () {
    $(".select-item, .option").click(function () {
        $(this).find(".select-arrow").toggleClass('active');
        $(this).closest(".select").find(".select-drop").slideToggle(300);
    });
    $(".burger").click(function () {
        $(this).toggleClass('active');
        $(".menu ").slideToggle(300);
    });
    if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
        $(".search-btn").click(function (e) {
            e.preventDefault();
            $(this).closest(".search").toggleClass('active');
        });
    }

});
