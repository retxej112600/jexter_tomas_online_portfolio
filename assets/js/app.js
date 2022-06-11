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

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#emailSubmit').on('submit',function(e){
        e.preventDefault();
        var email = $('#inputEmail').val();
        var message = $('#inputMessage').val();
        if (email == "" || message == "") {
            alert("All fields should not be empty!!")
        }else{
            Email.send({
                Host : "smtp.gmail.com",
                Username : "retxej112600@gmail.com",
                Password : "ijtg qrtk azjp gpmd",
                To : 'jextertomas@gmail.com',
                From : email,
                Subject : email,
                Body : message
            }).then(
                alert("Sending email is under maintenance...")
            );
            $('#inputEmail').val("");
            $('#inputMessage').val("");
        }
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
