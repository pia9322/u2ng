

$(function () {

    // common_js_start
    console.log('common_js_start')

    AOS.init();


    // ======================================= swiper ======================================= 
    // main_visual
    let mainSwiper = new Swiper('.main_visual', {
        effect: "fade",
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides: 1,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        lazy: {
            loadPrevNext: true
        },

        touchMoveStopPropagation: true,
        pagination: {
            clickable : true,
            el: '.swiper-pagination',
            type: 'bullets',

        },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
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
    let swiper02 = new Swiper('.main_section_02 .product_item .swiper-container', {
        slidesPerView: 5,
        touchMoveStopPropagation: true,
        observer: true,
        observeParents: true,
        loop: true,

        navigation: {
            nextEl: '.main_product_arrow.swiper-button-next',
            prevEl: '.main_product_arrow.swiper-button-prev',
        },

        breakpoints: {
            1640: {
                slidesPerView: 4,
            },
            1480: {
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            500: {
                slidesPerView: 1.7,
            }
        }
    });

    // // productThumb
    // let productThumb = new Swiper('.product_thum.swiper-container', {
    //     slidesPerView: 1,
    //     autoHeight: true,
    //     // autoplay: {
    //     //     delay: 5000,
    //     //     disableOnInteraction: false,
    //     // },
    //     lazy: { loadPrevNext: true },
    //     touchMoveStopPropagation: true,
    //     pagination: {
    //         el: '.product_thum_more.swiper-pagination',
    //         type: 'bullets',
    //     },
    // });

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
            500: {
                slidesPerView: 2,
            },
        }
    });



    // person swiper
    let name = ['기술팀', '기술 영업팀', '솔루션 개발팀']

    let teamTab = new Swiper(".team_info.swiper-container", {
        autoHeight: true,
        effect: "fade",
        

        pagination: {
            el: ".swiper-pagination.tab_02_list",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (name[index]) + '</span>';
            },
        },
        
        breakpoints: {
            800: {
                allowTouchMove: false	
            },
        },
    });

    



    let teamSlide = new Swiper('.team.swiper-container', {
        slidesPerView: 'auto',
        // centeredSlides: true,
        // loop: true,
        // touchMoveStopPropagation: true,
        breakpoints: {
            // 1480: {
            //     slidesPerView: 2,
            // },
        }
    });

    let personInfo = new Swiper('.person_info.swiper-container', {
        slidesPerView: '4',
        // centeredSlides: true,
        touchMoveStopPropagation: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1480: {
                slidesPerView: 3,
                loop: true,

            },
            1120: {
                slidesPerView: 2.5,
            },
            950: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    });
    // person swiper
    // ======================================= swiper ======================================= 



    // header_default 
    let header = document.querySelector('#header'),
        header_ham = document.querySelector('.header_ham'),
        header_full = document.querySelector('.header_full'),
        depth_01 = document.querySelectorAll('.header_full_list > li')
        


    function headerScroll() {
         $(window).scroll(function() {
            let scroll = $(window).scrollTop(),
                dh = $(document).height() - $('.main_section_02').height(),
                wh = $(window).height();

            ($('.main_section_02').offset().top - wh <= scroll) ? $('.main_section_01').addClass('active'): null;
            ($('.main_section_03').offset().top - wh <= scroll) ? $('#header').addClass('active'): $('#header').removeClass('active');
        });

        if($('#header').hasClass('active')) {
            $('#header_left img').attr('src','../images/ico/logo_black.svg')
        } else {
            $('#header_left img').attr('src','../images/ico/logo.svg')
        }
    }

    // header hover event
    function headerHover(target01, target02) {
        $(target01).hover(function () {
            $(this).children(target02).stop().slideToggle("fast");
        }, function () {
            $(this).children(target02).stop().slideToggle("fast");
        });  
    }

    // header click event
    function headerClick(target01, target02) {
        $(target01).click(function () {
            $(this).children(target02).slideToggle("fast");
        });
    }

    // header Full depth
    function headerFullslide() {
        for (let i = 0; i < depth_01.length; i++) {
            depth_01[i].addEventListener('click', function () {
                $(this).children('ul').slideToggle();
                $(this).siblings().children('ul').slideUp();
                return;
            })
        }
    }

    // header Right click, header_full.active event.
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

    // window resize reload
    function windowResize() {
        window.addEventListener('resize',function(){
            location.reload();
        })
    }

    // header search box
    function headerSearch() {
        $('#header_search_btn').click(function () {
            $('#header_search_box').slideToggle(function () {
                $(this).toggleClass('active');
            });
        })
    }

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



    // headerScroll()

    headerHover('.header_center > li', '.depth_01');
    headerClick('.header_lang > ul', '.more_lang');

    headerFullslide()
    headerRight()




    pageCheck()
    // common_js_end
    console.log('common_js_end')
});

