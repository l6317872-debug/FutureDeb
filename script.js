function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}


// ปิดเมนูมือถือเมื่อกดลิงก์
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector("nav").classList.remove("active");

    });

});


// Animation ตอน scroll
const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


document.querySelectorAll(
    ".policy-card, .member, .stat, .contact-card"
).forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});
