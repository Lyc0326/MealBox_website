document.addEventListener('DOMContentLoaded', function () {
    const joinButton = document.getElementById('joinButton');
    const joinModal = document.getElementById('joinModal');
    const closeBtn = joinModal.querySelector('.close');

    // 打開模態視窗
    joinButton.addEventListener('click', function (e) {
        e.preventDefault(); // 防止跳轉
        joinModal.style.display = 'block';
    });

    // 關閉模態視窗
    closeBtn.addEventListener('click', function () {
        joinModal.style.display = 'none';
    });

    // 點擊外部區域時關閉模態視窗
    window.addEventListener('click', function (event) {
        if (event.target === joinModal) {
            joinModal.style.display = 'none';
        }
    });
});
