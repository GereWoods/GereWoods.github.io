  document.getElementById("copy-email").addEventListener("click", function(event) {
    event.preventDefault(); 
    const hrefText = this.getAttribute("href");

    navigator.clipboard.writeText(hrefText)
      .then(() => alert("Email copied to clipboard!"))
      .catch(err => console.error("Error al copiar:", err));
  });