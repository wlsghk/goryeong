$(function () {
    // 네비게이션 서브 메뉴 나타나게
    const navMenu = $('.nav > ul > li');
    const subMenu = $('.submenu');

    // 네비게이션 메뉴에 slideDown, slideUP 이벤트
    navMenu.mouseover(function () {
        $(this).find(subMenu).stop().slideDown(300);
    }).mouseout(function () {
        $(this).find(subMenu).stop().slideUp(300);
    })

    // 스크롤하면 네비게이션 색상 변경
    let scrollValue = 0;
    $(document).scroll(function () {
        scrollValue = $(this).scrollTop();

        if (scrollValue > 50) {
            $('.header').css('background', 'white');
            $('.top').css('visibility', 'visible');
        } else {
            $('.header').css('background', 'none');
            $('.top').css('visibility', 'hidden');
        }
    });
});
