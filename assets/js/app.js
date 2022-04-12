$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.nav-link').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash,
        menu = target;
        $target = $(target);
        $('html').animate({
            scrollTop: $target.offset().top-70
        }, 0);
        $(document).on("scroll", onScroll);
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 80;
    $('.nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-link').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}