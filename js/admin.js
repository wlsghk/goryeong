window.onload = function () {

    // login.html
    // 관리자 로그인 480px에서 input 내용 변경
    // 미디어쿼리 함수
    const loginInput = document.querySelector('.login-input > div');
    function loginQuery() {
        if (window.matchMedia("(max-width: 480px)").matches) {
            loginInput.innerHTML = `
                <label for="adId">
                    <input type="text" name="" id="adId" placeholder="아이디를 입력하세요.">
                </label>
                <label for="adPw">
                    <input type="text" name="" id="adPw" placeholder="비밀번호를 입력하세요.">
                </label>
            `;
        } else {
            loginInput.innerHTML = `
                <label for="adId">
                    아이디
                    <input type="text" name="" id="adId" placeholder="아이디를 입력하세요.">
                </label>
                <label for="adPw">
                    비밀번호
                    <input type="text" name="" id="adPw" placeholder="비밀번호를 입력하세요.">
                </label>
            `;
        }
    }

    // 함수 실행
    loginQuery();

    // resize 이벤트
    window.addEventListener("resize", function () {
        loginQuery();
    });
}