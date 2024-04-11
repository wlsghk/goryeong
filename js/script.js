window.onload = function () {
    // 스와이퍼 작동
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 스와이퍼 개수 조절 함수
    function resizeSwiper() {
        if (window.innerWidth <= 1024 && window.innerWidth > 768) {
            swiper.params.slidesPerView = 3;
            swiper.params.spaceBetween = 29;
        } else if (window.innerWidth <= 768) {
            swiper.params.slidesPerView = 2;
            swiper.params.spaceBetween = 48;
        } else if (window.innerWidth <= 480) {
            swiper.params.slidesPerView = 2;
        } else {
            swiper.params.slidesPerView = 4;
            swiper.params.spaceBetween = 30;
        }
        swiper.update();
    }

    // 함수 실행
    resizeSwiper();
    // resize 이벤트
    // 아래에서

    // 1360px부터 로고, 푸터 재정렬
    let logo = document.querySelector('.institution-logo');
    let footer = document.querySelector('.footer');

    // 미디어쿼리 함수
    function logoQuery() {
        if (window.matchMedia("(max-width: 1360px").matches) {
            logo.innerHTML = `
                <ul class="institution-top">
                    <li>
                        <a href="#">
                            <img src="./img/logo/고용노동부.png" alt="고용노동부 로고">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/logo/중소벤처기업부.png" alt="중소벤처기업부 로고">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/logo/국세청.png" alt="국세청 로고">
                        </a>
                    </li>
                </ul>
                <ul class="instituion-bottom">
                    <li>
                        <a href="#">
                            <img src="./img/logo/경상북도.png" alt="경상북도 로고">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/logo/고령군.png" alt="고령군 로고">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/logo/경북테크노파크.png" alt="경북테크노파크 로고">
                        </a>
                    </li>
                </ul>
            `;
            footer.innerHTML = `
                <div class="footer-left">
                    <h1 class="footer-logo">
                        <img src="./img/logo/logo.png" alt="고령2일반산업단지 로고">
                        <span>고령2일반산업단지관리공단</span>
                        </h1>
                    <div class="footer-info">
                        <ul>
                            <li><a href="#">개인정보처리방침</a><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span></li>
                            <li><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;저작권정책</a><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                            </li>
                            <li><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이메일자동수집거부</a></li>
                        </ul>
                        <address>주소: 경북 고령군 다산면 다산산단3길 10-9<br>TEL: 054-956-9446 / FAX: 054-956-9448</address>
                        <div class="copyright">Copyright 2024. 고령2일반산업단지관리공단 all rights reserved.</div>
                    </div>
                </div>
                <div class="footer-go">
                    <select name="" id="" class="official">
                        <option value="">유관기관 바로가기</option>
                        <option value="">유관기관 바로가기</option>
                        <option value="">유관기관 바로가기</option>
                        <option value="">유관기관 바로가기</option>
                        <option value="">유관기관 바로가기</option>
                    </select>
                    <select class="normal" onchange="if(this.value) window.open(this.value);">
                        <option value="">일반산업단지 바로가기</option>
                        <option value="http://www.da-san.or.kr/default/">고령1일반산업단지관리공단</option>
                        <option value="http://www.dalin.or.kr/">달성산업단지관리공단</option>
                        <option value="http://dicox.or.kr/">대덕산업단지관리공단</option>
                        <option value="https://www.snic.or.kr/">성남산업단지관리공단</option>
                        <option value="http://www.sjbu.com/">신평장림산업단지공단</option>
                        <option value="http://www.asicm.or.kr/asicm/index.do">안성산업단지관리공단</option>
                        <option value="https://wgic.or.kr/">왜관산업단지관리공단</option>
                        <option value="http://www.seobu.or.kr/">인천서부산업단지공단</option>
                        <!-- <option value="">인천지방산업단지관리공단</option> -->
                        <option value="https://phsic.or.kr/www/">포항철강산업단지관리</option>
                        <option value="http://www.hanamic.or.kr/index.php?">하남산업단지관리공단</option>
                        <option value="https://cicox.or.kr/">청주산업단지관리공단</option>
                        <option value="http://www.kiaco.or.kr/">경산산업단지관리공단</option>
                        <option value="http://www.picm.or.kr/">평택산업단지관리공단</option>
                        <option value="http://www.chilseo.or.kr/">칠서산업단지관리공단</option>
                        <option value="http://hamangic.co.kr/">함안산업단지관리공단</option>
                        <option value="http://www.seongseo.or.kr/">성서산업단지관리공단</option>
                        <option value="https://www.seodaegu.or.kr/default/00/01.php">서대구산업단지관리공단</option>
                    </select>
                </div>
            `;
        } else {
            logo.innerHTML = `
                <ul>
                    <li>
                        <a href="#">
                            <img src="./img/logo/고용노동부.png" alt="고용노동부 로고">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/logo/중소벤처기업부.png" alt="중소벤처기업부 로고">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/logo/국세청.png" alt="국세청 로고">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/logo/경상북도.png" alt="경상북도 로고">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/logo/고령군.png" alt="고령군 로고">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./img/logo/경북테크노파크.png" alt="경북테크노파크 로고">
                        </a>
                    </li>
                </ul>
            `;
            footer.innerHTML = `
                <h1 class="footer-logo">
                    <img src="./img/logo/logo.png" alt="고령2일반산업단지 로고">
                    <span>고령2일반산업단지관리공단</span>
                </h1>
                <div class="footer-info">
                    <ul>
                        <li><a href="#">개인정보처리방침</a><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span></li>
                        <li><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;저작권정책</a><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                        </li>
                        <li><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이메일자동수집거부</a></li>
                    </ul>
                    <address>주소: 경북 고령군 다산면 다산산단3길 10-9<br>TEL: 054-956-9446 / FAX: 054-956-9448</address>
                    <div class="copyright">Copyright 2024. 고령2일반산업단지관리공단 all rights reserved.</div>
                </div>
                <div class="footer-go">
                    <select name="" id="" class="official">
                        <option value="">유관기관 바로가기</option>
                        <option value="">유관기관 바로가기</option>
                        <option value="">유관기관 바로가기</option>
                        <option value="">유관기관 바로가기</option>
                        <option value="">유관기관 바로가기</option>
                    </select>
                    <select class="normal" onchange="if(this.value) window.open(this.value);">
                        <option value="">일반산업단지 바로가기</option>
                        <option value="http://www.da-san.or.kr/default/">고령1일반산업단지관리공단</option>
                        <option value="http://www.dalin.or.kr/">달성산업단지관리공단</option>
                        <option value="http://dicox.or.kr/">대덕산업단지관리공단</option>
                        <option value="https://www.snic.or.kr/">성남산업단지관리공단</option>
                        <option value="http://www.sjbu.com/">신평장림산업단지공단</option>
                        <option value="http://www.asicm.or.kr/asicm/index.do">안성산업단지관리공단</option>
                        <option value="https://wgic.or.kr/">왜관산업단지관리공단</option>
                        <option value="http://www.seobu.or.kr/">인천서부산업단지공단</option>
                        <!-- <option value="">인천지방산업단지관리공단</option> -->
                        <option value="https://phsic.or.kr/www/">포항철강산업단지관리</option>
                        <option value="http://www.hanamic.or.kr/index.php?">하남산업단지관리공단</option>
                        <option value="https://cicox.or.kr/">청주산업단지관리공단</option>
                        <option value="http://www.kiaco.or.kr/">경산산업단지관리공단</option>
                        <option value="http://www.picm.or.kr/">평택산업단지관리공단</option>
                        <option value="http://www.chilseo.or.kr/">칠서산업단지관리공단</option>
                        <option value="http://hamangic.co.kr/">함안산업단지관리공단</option>
                        <option value="http://www.seongseo.or.kr/">성서산업단지관리공단</option>
                        <option value="https://www.seodaegu.or.kr/default/00/01.php">서대구산업단지관리공단</option>
                    </select>
                </div>
            `;
        }
    }

    //함수 실행
    logoQuery();

    // resize 이벤트 아래에서

    // 768px부터 바로가기 메뉴 재정렬
    // 바로가기 메뉴
    let quick = document.querySelector('.quick');

    // 미디어쿼리 함수
    function quickQuery() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            quick.innerHTML = `
            <section class="inner quick-inner">
                <h2 class="hidden">바로가기</h2>
                    <div class="quick-top">
                        <ul>
                            <li>
                                <a href="#">
                                    <figure>
                                        <img src="./img/icon/building.png" alt="입주업체 배치도 아이콘">
                                    </figure>
                                    <figcaption>입주업체 배치도</figcaption>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <figure>
                                        <img src="./img/icon/apply.png" alt="구인/구직 아이콘">
                                    </figure>
                                    <figcaption>구인/구직</figcaption>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <figure>
                                        <img src="./img/icon/sign.png" alt="입주계약/계약변경 아이콘">
                                    </figure>
                                    <figcaption>입주계약/계약변경</figcaption>
                                </a>
                            </li>
                        </ul>
                    </div>
                        <div class="quick-bottom">
                            <ul>
                                <li>
                                    <a href="#">
                                        <figure>
                                            <img src="./img/icon/paper.png" alt="민원서식 다운로드 아이콘">
                                        </figure>
                                        <figcaption>민원서식 다운로드</figcaption>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <figure>
                                            <img src="./img/icon/faq.png" alt="FAQ 아이콘">
                                        </figure>
                                        <figcaption>FAQ</figcaption>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                `;
        } else {
            quick.innerHTML = `
                <section class="inner">
                    <h2 class="hidden">바로가기</h2>
                    <ul>
                        <li>
                            <a href="#">
                                <figure>
                                    <img src="./img/icon/building.png" alt="입주업체 배치도 아이콘">
                                </figure>
                                <figcaption>입주업체 배치도</figcaption>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <figure>
                                    <img src="./img/icon/apply.png" alt="구인/구직 아이콘">
                                </figure>
                                <figcaption>구인/구직</figcaption>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <figure>
                                    <img src="./img/icon/sign.png" alt="입주계약/계약변경 아이콘">
                                </figure>
                                <figcaption>입주계약/계약변경</figcaption>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <figure>
                                    <img src="./img/icon/paper.png" alt="민원서식 다운로드 아이콘">
                                </figure>
                                <figcaption>민원서식 다운로드</figcaption>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <figure>
                                    <img src="./img/icon/faq.png" alt="FAQ 아이콘">
                                </figure>
                                <figcaption>FAQ</figcaption>
                            </a>
                        </li>
                    </ul>
                </section>
            `;
        }
    }

    // 함수 실행
    quickQuery();

    // resize 이벤트
    window.addEventListener("resize", function () {
        quickQuery();
        logoQuery();
        resizeSwiper();
    });
}