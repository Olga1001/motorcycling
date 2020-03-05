$(document).ready(function () {
    $(".select-item, .option").click(function () {
        $(this).find(".select-arrow").toggleClass('active');
        $(this).closest(".select").find(".select-drop").slideToggle(300);
    });
});
