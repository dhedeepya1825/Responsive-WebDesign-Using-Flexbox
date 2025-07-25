let menuOpen = document.getElementById("menuOpen");
let menuClose = document.getElementById("menuClose");
let itemsSmContainer = document.getElementById("itemsSmContainer");
menuOpen.addEventListener("click", function() {
    itemsSmContainer.classList.add("items-md-container");
    itemsSmContainer.classList.remove("hide");
    menuOpen.classList.toggle("hide");
    menuClose.classList.toggle("close-icon");
});

menuClose.addEventListener("click", function() {
    itemsSmContainer.classList.remove("items-md-container");
    itemsSmContainer.classList.add("hide");
    menuOpen.classList.toggle("hide");
    menuClose.classList.toggle("close-icon");
});