$(function(){

    window.scrollTo(0, 0);
    $.stellar({
        horizontalScrolling: true,
        verticalOffset: 40
    });

    let theme = localStorage.getItem('prefferedtheme')
    $('.img-techs').on('mouseover', function(e){
        let element = $(e.target)
        let text = element.siblings('h3')
        $('#change-techs').html(text.html())
    })

    if(theme != null && theme == 'light'){
        $('body').addClass('light-mode-background')
        $('.text-white').addClass("light-mode-text")
        $('.site-nav').addClass('light-mode-background light-mode-border light-mode-box-shadow');
        $('#home').addClass('light-mode-background').css({'background-image': "url('images/gifs/404.gif')"})
        $('#home-slant').css({'background-image': "url('images/slant.svg')"})
        $('.logo-right div').addClass('light-mode-logo-right-background')
        $('.logo-right div span').removeClass('feather-moon').addClass('feather-sun light-mode-logo-right-color')
        $('.burger').removeClass('light').addClass('light-mode-logo-right-color')
        $('.profile-image').addClass('light-mode-background')
        $('.site-mobile-menu').addClass('light-mode-logo-right-background')
        $('.site-mobile-menu-header').addClass('light-mode-logo-right-background')
        $('.site-mobile-menu-body').addClass('light-mode-logo-right-background')
    }

    $(document).on('click', '#change-theme', (e) => {
        let clickTheme = localStorage.getItem('prefferedtheme')

        if(clickTheme == null){
            localStorage.setItem('prefferedtheme', 'light')
            $('body').addClass('light-mode-background')
            $('.text-white').addClass("light-mode-text")
            $('.site-nav').addClass('light-mode-background light-mode-border light-mode-box-shadow');
            $('#home').addClass('light-mode-background').css({'background-image': "url('images/gifs/404.gif')"})
            $('#home-slant').css({'background-image': "url('images/slant.svg')"})
            $('.logo-right div').addClass('light-mode-logo-right-background')
            $('.logo-right div span').removeClass('feather-moon').addClass('feather-sun light-mode-logo-right-color')
            $('.burger').removeClass('light').addClass('light-mode-logo-right-color')
            $('.profile-image').addClass('light-mode-background')
            $('.site-mobile-menu').addClass('light-mode-logo-right-background')
            $('.site-mobile-menu-header').addClass('light-mode-logo-right-background')
            $('.site-mobile-menu-body').addClass('light-mode-logo-right-background')
        }else{
            if(clickTheme == 'light'){
                localStorage.setItem('prefferedtheme', 'dark')
                $('body').removeClass('light-mode-background')
                $('.text-white').removeClass("light-mode-text")
                $('.site-nav').removeClass('light-mode-background light-mode-border light-mode-box-shadow');
                $('#home').removeClass('light-mode-background').css({'background-image': "url('images/gifs/404white.gif')"})
                $('#home-slant').css({'background-image': "url('images/dark.svg')"})
                $('.logo-right div').removeClass('light-mode-logo-right-background')
                $('.logo-right div span').removeClass('light-mode-logo-right-color')
                $('.logo-right div span').addClass('feather-moon').removeClass('light-mode-logo-right-color').removeClass('feather-sun')
                $('.burger').addClass('light').removeClass('light-mode-logo-right-color')
                $('.profile-image').removeClass('light-mode-background')
                $('.site-mobile-menu').removeClass('light-mode-logo-right-background')
                $('.site-mobile-menu-header').removeClass('light-mode-logo-right-background')
                $('.site-mobile-menu-body').removeClass('light-mode-logo-right-background')
            }else{
                localStorage.setItem('prefferedtheme', 'light')
                $('body').addClass('light-mode-background')
                $('.text-white').addClass("light-mode-text")
                $('.site-nav').addClass('light-mode-background light-mode-border light-mode-box-shadow');
                $('#home').addClass('light-mode-background').css({'background-image': "url('images/gifs/404.gif')"})
                $('#home-slant').css({'background-image': "url('images/slant.svg')"})
                $('.logo-right div').addClass('light-mode-logo-right-background')
                $('.logo-right div span').removeClass('feather-moon').addClass('feather-sun light-mode-logo-right-color')
                $('.burger').removeClass('light').addClass('light-mode-logo-right-color')
                $('.profile-image').addClass('light-mode-background')
                $('.site-mobile-menu').addClass('light-mode-logo-right-background')
                $('.site-mobile-menu-header').addClass('light-mode-logo-right-background')
                $('.site-mobile-menu-body').addClass('light-mode-logo-right-background')
            }
        }
        
    })

    $('#scroll-page').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: '+=200px'
        }, 100);
    });

    $('#email-send').on('click', (e) => {
        e.preventDefault();
        let emailSubject = $('#email-subject').val(), emailMessage = $('#email-message').val()

        window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=jextertomas@gmail.com&su=${emailSubject}&body=${emailMessage}`, '_blank')
    })
})