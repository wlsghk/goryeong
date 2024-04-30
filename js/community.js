window.onload = function () {
    const notice = document.querySelector('.notice .inner form table');
    let ntTitle = document.querySelector('.notice .inner form table tbody tr td a');


    // 초기 실행
    noticeList();

    // historyResize 함수 정의
    function noticeList() {
        if (window.matchMedia("(max-width: 600px)").matches) {
            notice.innerHTML = `
                <tbody>
                    <tr>
                        <td>
                            <a href="./commu_notice_list.html">
                                2024년 한국생산성본부 패키지 구독형 원격훈련 지원사업 안내
                            </a>
                            <span>2024-04-27</span>
                        </td>
                        <td>
                            <a href="./commu_notice_list.html">
                                고용노동부 인재채움뱅크 사업안내
                            </a>
                            <span>2024-04-27</span>
                        </td>
                        <td>
                            <a href="./commu_notice_list.html">
                                2024년 일터혁신 컨설팅 참여기업 모집 안내
                            </a>
                            <span>2024-04-27</span>
                        </td>
                    </tr>
                </tbody>
            `;

            ntTitle.textContent.substr(0, 10);

        } else {
            notice.innerHTML = `
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th>조회</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3</td>
                        <td>
                            <a href="./commu_notice_list.html">2024년 한국생산성본부 패키지 구독형 원격훈련 지원사업 안내
                            </a>
                        </td>
                        <td>관리자</td>
                        <td>2024-04-27</td>
                        <td>67</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <a href="./commu_notice_list.html">고용노동부 인재채움뱅크 사업안내</a>
                        </td>
                        <td>관리자</td>
                        <td>2024-04-25</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <a href="./commu_notice_list.html">
                                        2024년 일터혁신 컨설팅 참여기업 모집 안내
                            </a>
                        </td>
                        <td>관리자</td>
                        <td>2024-04-20</td>
                        <td>51</td>
                    </tr>
                </tbody>
            `;
        }
    }

    // 윈도우 리사이즈 이벤트에 대한 이벤트 리스너 등록
    window.addEventListener('resize', noticeList);
}