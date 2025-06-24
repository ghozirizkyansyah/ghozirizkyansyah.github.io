document.querySelectorAll(".a-navbar").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        document.body.style.opacity = 1;

        // fadeout
        document.body.style.transition = "opacity 0.4s ease-in-out";
        document.body.style.opacity = 0;
        //durasi transisi
        setTimeout(() => {
            window.location.href = href;
        }, 400); 
    });
});

// page in
window.addEventListener("pageshow", () => {
    document.body.style.transition = "opacity 0.4s ease-in-out";
    document.body.style.opacity = 1;
});
