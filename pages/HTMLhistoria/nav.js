options = {
    threshold: 1,
}

const heroSection = document.querySelector(".history-hero");
const header = document.querySelector(".header")

const sectionObserver = new IntersectionObserver(entries => {
    header.classList.toggle("header--inverted", !entries[0].isIntersecting);
})

sectionObserver.observe(heroSection)

