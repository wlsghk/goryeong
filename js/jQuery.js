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

    // 공지사항/자료실 리스트 변경
    // 바로가기 버튼 초기 설정
    $('.info-btn').first().show().siblings('.info-btn').hide();

    $('.board-title > li').click(function () {
        let idx = $(this).index();

        // 탭 활성화
        $(this).toggleClass('active').siblings().removeClass('active');

        // 내용 변경
        $('.info-cnt').eq(idx).show().siblings('.info-cnt').hide();

        // 바로가기 버튼 교체
        $('.info-btn').eq(idx).show().siblings('.info-btn').hide();
    });

    // 모바일 네비게이션 리스트 slide
    $('.mob-main').click(function () {
        let $subMenu = $(this).find('.mob-sub');
        if ($subMenu.is(':hidden')) {
            $subMenu.stop().slideDown(500);
        } else {
            $subMenu.stop().slideUp(500);
        }
    });

    // 햄버거 메뉴 클릭하면 모바일 네비게이션 오픈
    $('.hamburger').click(function () {
        $('.mob-wrapper').slideDown(500);
        $('html, body').addClass('scroll-none');
    });
    // 닫기 버튼 누르면 네비게이션 slideUp
    $('.close-btn').click(function () {
        $('.mob-wrapper').slideUp(700);
        $('.mob-sub').css({ 'display': 'none' });
        $('html, body').removeClass('scroll-none');
    });

    // 서브메뉴 slideDown, slideUP 이벤트
    $('.subnav-title').mouseover(function () {
        $(this).find('.subnav-menu_li').stop().slideDown(300);
    }).mouseout(function () {
        $(this).find('.subnav-menu_li').stop().slideUp(300);
    });

    $('.subnav-sub').mouseover(function () {
        $(this).find('.subnav-menu_li').stop().slideDown(300);
    }).mouseout(function () {
        $(this).find('.subnav-menu_li').stop().slideUp(300);
    });

    if ($(window).width() <= 480) {
        $('.subnav-sub').on('click', function (e) {
            if ($(this).siblings('.subnav-menu_li').is(':visible')) {
                $(this).siblings('.subnav-menu_li').stop().slideUp(300); // 서브메뉴가 열려 있는 경우 닫기
            } else {
                $('.subnav-menu_li').stop().slideUp(300); // 다른 서브메뉴 닫기
                $(this).siblings('.subnav-menu_li').stop().slideDown(300); // 클릭한 서브메뉴 열기
            }
        });

        // 모바일 환경에서는 기본 동작 방지
        $('.subnav-sub .subnav-menu_li').on('click', function (e) {
            e.stopPropagation(); // 부모 요소의 이벤트 전파 방지
        });
    }
});