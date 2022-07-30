function dom(selector) {
    return document.querySelector(selector);
}

$(document).ready(function () {
    $(window).resize(function () {
        var width = $(window).width();
        if (width > 992) {
            $('header .link').removeClass("show")
        }
    });
    $('header .button').click(function () {
        $('header .link').toggleClass('show')
        $('.show').hide()
        $('.show').slideToggle(500)
    })

    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("header").addClass("fixed");
            $('.carousel .img-bonjour').addClass('aniImgCarousel1')
            $('.carousel .img-guten').addClass('aniImgCarousel2')
            $('.carousel .img-hello').addClass('aniImgCarousel')
            $('.carousel .img-ciao').addClass('aniImgCarousel')

        } else {
            $("header").removeClass("fixed");
            $('.carousel .img-bonjour').removeClass('aniImgCarousel1')
            $('.carousel .img-guten').removeClass('aniImgCarousel2')
            $('.carousel .img-hello').removeClass('aniImgCarousel')
            $('.carousel .img-ciao').removeClass('aniImgCarousel')
        }
        if (scroll > 800) {
            $('.about .bg-left').addClass('aniAboutBg')
        } else {
            $('.about .bg-left').removeClass('aniAboutBg')
        }

        if (scroll > 2100) {
            $('.beginners_courses .col-right').addClass('aniBeginners')
        } else {
            $('.beginners_courses .col-right').removeClass('aniBeginners')
        }

        if (scroll > 2700) {
            $('.levelb2 .container .row .col-left img').addClass('aniBeginners')
        } else {
            $('.levelb2 .container .row .col-left img').removeClass('aniBeginners')
        }
        if (scroll > 4200) {
            $('.specialoffer .container .row .bg img').addClass('aniBeginners')
        } else {
            $('.specialoffer .container .row .bg img').removeClass('aniBeginners')
        }
    });

})

const button = document.querySelectorAll('.levelb2 .container .row .col-right .list .item .item-right .top')
const bottom = document.querySelectorAll('.levelb2 .container .row .col-right .list .item .item-right .bottom')
const plus = document.querySelectorAll('.levelb2 .container .row .col-right .list .item .item-right .top .la-plus')
const minus = document.querySelectorAll('.levelb2 .container .row .col-right .list .item .item-right .top .la-minus')
button.forEach((buttoni, i) => {
    buttoni.onclick = () => {
        bottom.forEach((bottomi, index) => {
            if (index != i) {
                $(bottom[index]).slideUp(300)
                $(plus[index]).show()
                $(minus[index]).hide()
            }
        })
        $(bottom[i]).slideToggle(300)
        $(plus[i]).toggle()
        $(minus[i]).toggle()
    }
})