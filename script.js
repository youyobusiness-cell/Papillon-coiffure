const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isExpanded =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

        menuButton.setAttribute(
            "aria-label",
            isExpanded ? "Ouvrir le menu" : "Fermer le menu"
        );

        navigation.classList.toggle("navigation-open", !isExpanded);
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Ouvrir le menu");
            navigation.classList.remove("navigation-open");
        });
    });
}