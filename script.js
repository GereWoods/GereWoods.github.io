document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.getElementById('copy-email');

  function copyEmail(event) {
    event.preventDefault();
    const emailHref = copyButton.getAttribute('href');

    if (!emailHref) {
      console.warn('El elemento no tiene atributo href.');
      return;
    }

    navigator.clipboard.writeText(emailHref)
      .then(() => {
        alert('Email copiado al portapapeles!');
      })
      .catch(error => {
        console.error('Error al copiar el email:', error);
      });
  }


  copyButton.addEventListener('click', copyEmail);
});