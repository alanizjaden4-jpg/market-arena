document.getElementById("queueBtn").addEventListener("click", () => {
    document.getElementById("queueBtn").classList.add("hidden");
    document.querySelector(".title").classList.add("hidden");
    document.getElementById("chartScreen").classList.remove("hidden");

    new TradingView.widget({
        "width": "100%",
        "height": 500,
        "symbol": "OANDA:XAUUSD",
        "interval": "15",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "container_id": "tv15"
    });

    new TradingView.widget({
        "width": "100%",
        "height": 500,
        "symbol": "OANDA:XAUUSD",
        "interval": "3",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "container_id": "tv3"
    });
});
