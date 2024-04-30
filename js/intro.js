window.onload = function () {
    const historyLists = document.querySelectorAll('.history div');

    // 초기 실행
    historyResize();

    // historyResize 함수 정의
    function historyResize() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            historyLists.forEach((item, idx) => {
                if (idx % 2 !== 0 && item.classList.contains('history-left')) {
                    item.classList.remove('history-left');
                    item.classList.add('history-right');
                }
            });
        } else {
            historyLists.forEach((item, idx) => {
                if (idx % 2 !== 0 && item.classList.contains('history-right')) {
                    item.classList.remove('history-right');
                    item.classList.add('history-left');
                }
            });
        }
    }

    // 윈도우 리사이즈 이벤트에 대한 이벤트 리스너 등록
    window.addEventListener('resize', historyResize);
}
