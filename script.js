window.addEventListener("scroll", function() {
    var aboutMe = document.getElementById("about-me");
    var scrollY = window.scrollY || window.pageYOffset;

    // Posun na "About Me" časť, keď je myš na dolnej časti stránky
    if (scrollY + window.innerHeight >= aboutMe.offsetTop) {
        aboutMe.classList.add("visible");
    } else {
        aboutMe.classList.remove("visible");
    }
});
