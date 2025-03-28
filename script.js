document.addEventListener("DOMContentLoaded", function() { 
  let paywallShown = false;  // Variable per controlar si el paywall ha estat mostrat

  document.getElementById("toggleContent").addEventListener("click", function() {
    if (!paywallShown) {  // Comprova si el paywall ja ha estat mostrat
      document.getElementById("paywall").style.display = "block";
      paywallShown = true;  // Marca que el paywall ja ha estat mostrat
    }
  });

  document.getElementById("removePaywall").addEventListener("click", function() {
    document.getElementById("paywall").style.display = "none";
    document.getElementById("moreContent").style.display = "block";
  });
});
// Fer que quan es cliqui una cita, es mostrin automàticament les referències i redirigeixi correctament
document.querySelectorAll(".cita").forEach(function(cita) {
  cita.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportament predeterminat del navegador

    var references = document.getElementById("references");
    var refId = this.getAttribute("href").substring(1); // Obté l'ID de la referència
    var refElement = document.getElementById(refId);

    // Si la secció de referències està amagada, que es mostri
    if (references.style.display === "none") {
      references.style.display = "block";
      document.getElementById("toggleReferences").textContent = "Amaga referències";
    }

    // Desplaçar la pàgina fins a la referència
    if (refElement) {
      refElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});