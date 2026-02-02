// 1. Désactiver le clic droit
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// 2. Bloquer certaines touches du clavier
document.addEventListener("keydown", function (e) {

  // Bloquer F12
  if (e.key === "F12") {
    e.preventDefault();
  }

  // Bloquer Ctrl+Shift+I (Inspect)
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }

  // Bloquer Ctrl+U (Source)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }

  // Bloquer Ctrl+C (Copier)
  if (e.ctrlKey && e.key === "c") {
    e.preventDefault();
  }

  // Bloquer Ctrl+S (Sauvegarder)
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
  }
});

