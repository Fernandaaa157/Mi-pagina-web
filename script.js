// ========================= FORMULARIO =========================
// Bootstrap validation + mensaje de éxito
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".needs-validation");
  const alertaExito = document.getElementById("alertaExito");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
      } else {
        // Si pasa validación
        form.classList.remove("was-validated");
        form.reset();

        // Mostrar alerta de éxito
        alertaExito.classList.remove("d-none");
        alertaExito.scrollIntoView({ behavior: "smooth" });

        // Ocultar la alerta después de 4s
        setTimeout(() => {
          alertaExito.classList.add("d-none");
        }, 4000);
      }
    });
  }
});

// ========================= SCROLL SUAVE =========================
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function (e) {
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ========================= NAVBAR ACTIVE =========================
// Marcar como activo el enlace del menú según el scroll
const secciones = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let actual = "";
  secciones.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      actual = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + actual) {
      link.classList.add("active");
    }
  });
});
