const botonHeader = document.querySelectorAll(".botonHeader");
const secciones = document.querySelectorAll(".contenedorSecciones");

botonHeader.forEach(boton => {

    boton.addEventListener("click", () => {

        const objetivo = boton.getAttribute("data-seccion");

        secciones.forEach(seccion => {
            seccion.classList.remove("on");
        });

        document.querySelector("#seccion" + objetivo).classList.add("on");

    });

});