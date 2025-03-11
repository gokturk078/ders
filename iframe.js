

// desktop-mode.js dosyası
document.addEventListener("DOMContentLoaded", function () {
    // Mobil cihazlarda masaüstü modunu zorla
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Viewport meta tag'ini güncelle
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
            viewportMeta.content = "width=1200, initial-scale=1.0";
        }

        // Iframe'in boyutlarını ayarla
        const iframe = document.querySelector("iframe");
        if (iframe) {
            iframe.style.width = "100%";
            iframe.style.height = "100vh";
            iframe.style.transform = "scale(1)";
            iframe.style.transformOrigin = "top left";
        }
    }
});