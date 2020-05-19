$(document).ready(function () {
    //HOME
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
    
    //EVENTS
    $(".tab, .events__year").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    if (window.matchMedia("(max-width: 991px)").matches) {
        $(".calendar-title").click(function (e) {
            e.stopPropagation();
            $(this).find(".calendar-arrow").toggleClass('active');
            $(".news__calendar").slideToggle(300);
        });
        $("body").click(function () {
            $(".calendar-arrow").removeClass('active');
            $(".news__calendar").slideUp(300);
        });
    }
    $(".news__calendar").click(function (e) {
        e.stopPropagation();
    });


});
$(document).ready(function () {
    //NEWS
    $(".date").datepicker({
        autoclose: true,
        todayHighlight: true,
    }).datepicker('update', new Date());
});

$(document).ready(function() {
    //GALLERY
    $('.gallery-item').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            tCounter: '<span class="mfp-counter">%curr% з %total%</span>'
        },
        image: {
            titleSrc: 'title',
            verticalFit: true, // Fits image in area vertically
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
    });
});


