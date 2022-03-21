
$(function () {


    // ts 이전 
    console.log('common_js_start')

    // common_js_start



    AOS.init();

    // ============= swiper ============= 
    // main_visual
    let mainSwiper = new Swiper('.main_visual', {
        effect: "fade",
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        lazy: {
            loadPrevNext: true
        },

        touchMoveStopPropagation: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // on: {
        //     init: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionStart: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionEnd: function () {
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //     },
        // }
    });

    // main_bis
    let swiper02 = new Swiper('.tabcon', {
        slidesPerView: 5,
        spaceBetween: 100,
        // loop: true,

        touchMoveStopPropagation: true,
        breakpoints: {
            1600: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    });

    // productThumb
    let productThumb = new Swiper('.product_thum.swiper-container', {
        slidesPerView: 1,
        autoHeight: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        lazy: {
            loadPrevNext: true
        },
        touchMoveStopPropagation: true,
    });

    // productMore
    let productMore = new Swiper('.product_more.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 20,
        // loop: true,
        // loopAdditionalSlides: 1,
        autoHeight: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        lazy: { loadPrevNext: true },
        touchMoveStopPropagation: true,

        breakpoints: {
            1480: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1100: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
        }
    });



    // ============= swiper ============= 



    // header_default 

    let header = document.querySelector('#header'),
        header_ham = document.querySelector('.header_ham'),
        header_full = document.querySelector('.header_full'),
        depth_01 = document.querySelectorAll('.header_full_list > li')


    $('.header_center > li').hover(function () {
        console.log($(this).children().find('a'))
    }, function () {
        $('.depth_01, .header_bg').removeClass('active');
    })

    for (let i = 0; i < depth_01.length; i++) {
        depth_01[i].addEventListener('click', function () {
            $(this).children('ul').slideToggle();
            $(this).siblings().children('ul').slideUp();
            return;
        })
    }

    // headerRight()
    function headerRight() {
        header_ham.addEventListener('click', function () {
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                console.log(header_full);
                $('.header_full, .header_lang, .header_sns').addClass('active');
            } else {
                $('.header_full, .header_lang, header_sns').removeClass('active');
            }


            if ($('.header_full').hasClass('active')) {
                $('body').on('scroll touchmove mousewheel', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                });
            } else {
                $('body').off('scroll touchmove mousewheel');
            }
        })
    }


    // sub_manu_navi 
    let sub_depth = document.querySelector('#sub_depth');




    // resize reload
    // window.addEventListener('resize',function(){
    //     location.reload();
    // })
    // resize reload




    $('#header_search_btn').click(function () {
        $('#header_search_box').slideToggle(function () {
            $(this).toggleClass('active');
        });
    })



    // page check header active
    function pageCheck() {
        let nowLocation = location.href;
        // let nowIdxOf = nowLocation.indexOf('index');
        let subNaviEvent = $('#sub_navi .content_wrap .text_02').text();
        let LinkActive = $('.link_wrap a');

        // link_wrap auto active
        LinkActive.each(function (idx) {
            (subNaviEvent == LinkActive.eq(idx).text()) ? $(this).addClass('active') : null;
        });

        // location Check
        (nowLocation.indexOf('index') >= 0) ? console.log('Home') : $('#header').addClass('active');
        (nowLocation.indexOf('/about/') >= 0) ? null : null
    }


    



    pageCheck()
    headerRight()

    
    // common_js_end
    console.log('common_js_end')
});



