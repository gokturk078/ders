// iframe.js dosyası
document.addEventListener("DOMContentLoaded", function () {
    const iframeContainer = document.querySelector(".iframe-container");
    const iframe = document.querySelector("iframe");

    function resizeIframe() {
        if (window.innerWidth <= 768) {
            // Mobil cihazlarda iframe'in tam ekran olmasını sağla
            iframe.style.width = "100%";
            iframe.style.height = "100vh";
            iframe.style.borderRadius = "0";
            iframe.style.boxShadow = "none";
        } else {
            // Bilgisayarlarda iframe'in normal boyutlarda olmasını sağla
            iframe.style.width = "100%";
            iframe.style.height = "80vh";
            iframe.style.borderRadius = "8px";
            iframe.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }
    }

    // Sayfa yüklendiğinde ve boyut değiştiğinde iframe'i yeniden boyutlandır
    window.addEventListener("resize", resizeIframe);
    resizeIframe(); // Sayfa yüklendiğinde çalıştır
});