// iframe.js dosyası
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.querySelector("iframe");

    function resizeIframe() {
        if (window.innerWidth <= 768) {
            // Mobil cihazlarda iframe'in içeriğini ölçeklendir
            iframe.style.width = "100%";
            iframe.style.height = "100vh";
            iframe.style.transform = "scale(1)";
            iframe.style.transformOrigin = "top left";
        } else {
            // Bilgisayarlarda iframe'in normal boyutlarda olmasını sağla
            iframe.style.width = "100%";
            iframe.style.height = "80vh";
            iframe.style.transform = "none";
        }
    }

    // Sayfa yüklendiğinde ve boyut değiştiğinde iframe'i yeniden boyutlandır
    window.addEventListener("resize", resizeIframe);
    resizeIframe(); // Sayfa yüklendiğinde çalıştır
});

