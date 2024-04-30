window.onload = function () {

    // 공지사항 링크 복사
    const copyURL = document.querySelector('.list_cnt > span > a');

    copyURL.addEventListener('click', onClickCopyLink);

    async function onClickCopyLink() {
        const link = window.location.href;
        await navigator.clipboard.writeText(link);
        window.alert('게시글 링크가 복사되었습니다.');
    }
}