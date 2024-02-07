const menuBtn = document.querySelector("#menu-btn");
const navigation = document.querySelector(".primary-navigation")

menuBtn.addEventListener("click", (event) => {
    const expanded = !(menuBtn.getAttribute("aria-expanded") === "true"); // convert string to boolean;

    menuBtn.setAttribute("aria-expanded", expanded);
    navigation.dataset.expanded = expanded;
})

