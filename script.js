function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function toggleEquipo(id) {
    let seccion = document.getElementById(id);

    if (seccion.style.display === "block") {
        seccion.style.display = "none";
    } else {
        seccion.style.display = "block";
    }
}