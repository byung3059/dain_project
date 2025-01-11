
$(function () {

    $('.header .m_menu_btn button').on('click', function () {

        $('.header .gnb').toggleClass('on')

    })

    VANTA.WAVES({
        el: "#vanta",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x080808,
        shininess: 11.00,
        waveHeight: 7.50,
        waveSpeed: 2.00,
        zoom: 0.65
    })


});

$(function () {

    const tl = gsap.timeline({});


    tl.from('.right_box', {
        y: 400,
        opacity: 0,
        duration: 1,
    });


    $('.btn button').click(function () {
        box.play();
    });


    const box = gsap.timeline({
        paused: true,
    });

    box.from('.left_box01', {
        display: 'none',
        opacity: 0,
        x: 100,


        duration: 1,


    });
    box.from('.left_box01 .txt_box p:nth-child(1)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box01 .txt_box p:nth-child(2)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box01 .txt_box p:nth-child(3)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box01 .txt_box p:nth-child(4)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box01 .txt_box p:nth-child(5)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box01 .txt_box p:nth-child(6)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box02', {
        x: 100,
        opacity: 0,

        duration: 1,
        display: 'none',
    });
    box.from('.left_box02 .txt_box p:nth-child(1)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box02 .txt_box p:nth-child(2)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box02 .txt_box p:nth-child(3)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box02 .txt_box p:nth-child(4)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box02 .txt_box p:nth-child(5)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });
    box.from('.left_box02 .txt_box p:nth-child(6)', {
        x: 100,
        opacity: 0,
        duration: 0.3,
    });



});

