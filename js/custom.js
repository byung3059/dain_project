$(function () {


    $('main').fullpage({

        scrollingSpeed: 1000,
        anchors: ['Main', 'sec02', 'sec03', 'sec04', 'sec05', 'footer'],

        easingcss3: 'cubic-bezier(.61,.01,.13,.95)',

        onLeave: function (name, idx) {


            if (idx == 3) {
                $('.sec03').addClass('on');
                m_cicle_box.autoplay.start();

            } else {
                $('.sec03').removeClass('on')
                m_cicle_box.autoplay.stop();
            }
            if (idx == 4) {

                sec04_bg_slide.autoplay.start();

            } else {

                sec04_bg_slide.autoplay.stop();
            }


            if (idx === 5 || idx === 6) {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        },

    });


    const right_top_slide = new Swiper('.right_top_slide', {
        loop: true,
        touchRatio: 0,
        spaceBetween: 8,
        slidesPerView: 2,
        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 8,
            },
            1025: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },

        pagination: {
            el: '.slide_m_dots',
            clickable: true,
        },
    });

    const right_bottom_slide = new Swiper('.right_bottom_slide', {
        loop: true,
        touchRatio: 0,
        spaceBetween: 8,
        slidesPerView: 2,
        breakpoints: {

            769: {
                slidesPerView: 3,
                spaceBetween: 8,
            },
            1025: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

        },

        pagination: {
            el: '.slide_m_dots',
            clickable: true,
        },
    });

    $('.nav_btn .prev').on('click', function () {

        right_top_slide.slidePrev();
        right_bottom_slide.slidePrev();

    });

    $('.nav_btn .next').on('click', function () {

        right_top_slide.slideNext();
        right_bottom_slide.slideNext();

    });

    const m_cicle_box = new Swiper('.m_cicle_box', {
        // loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: '1',


    });


    const sec04_bg_slide = new Swiper('.bg_slide', {
        touchRatio: 0,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.sec04 .Do_bg  li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');
            }
        },

    })

    $('.Do_bg li').on('mouseenter', function () {
        let idx = $(this).index();

        sec04_bg_slide.slideToLoop(idx, 400);
    });




    $('.sec05 .agg').on('click', function () {

        $('.sec05 .agree_pop').toggleClass('on')

    })
    $('.sec05 .agree_pop .pop-esc').on('click', function () {

        $('.sec05 .agree_pop').removeClass('on')

    })




});

$(function () {


    $('.header .m_menu_btn button').on('click', function () {

        $('.header .gnb').toggleClass('on')

    })




});





$(function () {

    // 타이머 초기값 설정 (7일 = 7 * 24 * 60 * 60 초)
    let remainingTime = 7 * 24 * 60 * 60;

    // 숫자 업데이트 애니메이션 함수
    function animateChange(element, newValue) {
        element.classList.add("fade-out");

        // 애니메이션 끝난 후 값 변경 및 새로 표시
        setTimeout(() => {
            element.innerText = newValue;
            element.classList.remove("fade-out");
            element.classList.add("fade-in");

            // 애니메이션 복구
            setTimeout(() => {
                element.classList.remove("fade-in");
            }, 300); // transition 시간과 동일
        }, 300); // transition 시간과 동일
    }

    // 시간 형식화 함수
    function formatTime(time) {
        const days = Math.floor(time / (24 * 60 * 60));
        const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;

        // DOM 요소
        const daysElement = document.querySelector(".time_box01 strong");
        const hoursElement = document.querySelector(".time_box02 strong");
        const minutesElement = document.querySelector(".time_box03 strong");
        const secondsElement = document.querySelector(".time_box04 strong");

        // 각 요소 업데이트 (값이 달라질 때만 애니메이션)
        if (daysElement.innerText !== days.toString()) animateChange(daysElement, days);
        if (hoursElement.innerText !== hours.toString().padStart(2, '0')) animateChange(hoursElement, hours.toString().padStart(2, '0'));
        if (minutesElement.innerText !== minutes.toString().padStart(2, '0')) animateChange(minutesElement, minutes.toString().padStart(2, '0'));
        if (secondsElement.innerText !== seconds.toString().padStart(2, '0')) animateChange(secondsElement, seconds.toString().padStart(2, '0'));
    }

    // 타이머 업데이트 함수
    function updateTimer() {
        if (remainingTime >= 0) {
            formatTime(remainingTime);
            remainingTime--; // 1초 감소
        } else {
            clearInterval(timerInterval); // 타이머 종료
        }
    }

    // 1초마다 updateTimer 실행
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // 첫 화면 업데이트

});

