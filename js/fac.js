window.onload = function () {
    // fac_setup.html
    // 768px부터 공장설립절차 리스트 배치 변경

    let guide = document.querySelector('.guide .inner');

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
}