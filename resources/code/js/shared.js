document.addEventListener("DOMContentLoaded", function() {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
            const pageName = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll(".nav-links a");
            navLinks.forEach(link => {
                if (link.getAttribute("href") === pageName) {
                    link.classList.add("select");
                }
            });
        });
});
