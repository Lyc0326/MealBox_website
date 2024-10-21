document.addEventListener('DOMContentLoaded', function () {
    const marquee = document.getElementById('marquee');
    const latestNewsBtn = document.getElementById('latestNewsBtn');
    const modal = document.getElementById('infoModal');
    const closeBtn = modal.querySelector('.close'); // 確保從模態內部取得 close 按鈕

    // 確保所有元素都成功取得
    if (marquee && latestNewsBtn && modal && closeBtn) {
        // 跑馬燈點擊事件
        marquee.addEventListener('click', function () {
            modal.style.display = 'block';
        });

        // 最新資訊按鈕點擊事件
        latestNewsBtn.addEventListener('click', function (event) {
            event.preventDefault(); // 防止超連結跳轉
            modal.style.display = 'block';
        });

        // 點擊叉叉按鈕關閉模態視窗
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        // 點擊模態視窗外部區域時關閉
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        console.error('無法取得必要的 DOM 元素');
    }
});
