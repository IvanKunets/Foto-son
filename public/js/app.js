document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("[data-site-header]");
    const navToggle = document.querySelector("[data-nav-toggle]");
    const mainNav = document.querySelector("[data-main-nav]");

    const onScroll = () => {
        if (!header) return;
        header.classList.toggle("is-scrolled", window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    if (navToggle && mainNav) {
        navToggle.addEventListener("click", () => {
            mainNav.classList.toggle("open");
        });
    }

    const filterRoot = document.querySelector("[data-gallery-filters]");
    if (!filterRoot) return;

    const buttons = filterRoot.querySelectorAll("[data-filter]");
    const items = document.querySelectorAll(".gallery-all [data-category]");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            items.forEach((item) => {
                const category = item.getAttribute("data-category");
                const visible = filter === "all" || category === filter;
                item.style.display = visible ? "" : "none";
            });
        });
    });
});
