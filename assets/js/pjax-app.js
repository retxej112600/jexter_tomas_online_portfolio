$(document).ready(() => {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#emailSubmit').on('submit', function (e) {
        e.preventDefault();
        var email = $('#inputEmail').val();
        var message = $('#inputMessage').val();
        if (email == "" || message == "") {
            alert("All fields should not be empty!!")
        } else {
            Email.send({
                Host: "smtp.gmail.com",
                Username: "retxej112600@gmail.com",
                Password: "ijtg qrtk azjp gpmd",
                To: 'jextertomas@gmail.com',
                From: email,
                Subject: email,
                Body: message
            }).then(
                alert("Sending email is under maintenance...")
            );
            $('#inputEmail').val("");
            $('#inputMessage').val("");
        }
    });

    let clientBound, newElement;
    var pjax = new Pjax({
        elements: ".nav-link",
        selectors: [".pjax-container", "header"],
        switches: {
            ".pjax-container": Pjax.switches.sideBySide,
        },
        switchesOptions: {
            ".pjax-container": {
                classNames: {
                    remove: "animate__animated animate__backOutUp",
                    add: "animate__animated animate__backInDown animate__delay-1s",
                },
                callbacks: {
                    removeElement: function (el) {
                        clientBound = el.getBoundingClientRect().height
                        el.style.marginTop = "0rem";
                    },
                    addElement: function (el) {
                        el.style.marginTop = "-" + (clientBound) + "px";
                        newElement = el;
                    }
                }
            }
        }
    })
    NProgress.configure({
        template: `<div class="bar" role="bar">
                        <div class="peg">
                        </div>
                    </div>`
    });

    document.addEventListener('pjax:send', () => {
        NProgress.start()
    })
    document.addEventListener('pjax:complete', () => {
        if ($("#age").length > 0) {
            $('#age').html(Math.floor((new Date() - new Date("2000-11-26")) / (365 * 24 * 60 * 60 * 1000)))
        }
        NProgress.done()
        newElement.style.marginTop = '0px'
    })
})