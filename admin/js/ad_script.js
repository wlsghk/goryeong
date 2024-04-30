window.onload = function () {

    // 오늘 날짜
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const date = `${year}-${month}-${day}`;
    
    const todayDate = document.querySelector('#today');

    todayDate.textContent = date;
}