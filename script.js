document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // Close the menu when a link is clicked
    document.querySelectorAll(".menu li a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            menu.classList.remove("active");
        });
    });
});