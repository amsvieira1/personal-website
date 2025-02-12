const email = document.getElementById('email');
const copy_email = document.getElementById('copy-email');
const phone = document.getElementById('phone');
const copy_phone = document.getElementById('copy-phone');

copy_email.addEventListener('click', () => {
  navigator.clipboard.writeText(email.textContent)
    .then(() => {
      alert('E-mail copiado!');
    })
    .catch(err => {
      console.error('Falha ao copiar: ', err);
    });
});

copy_phone.addEventListener('click', () => {
  navigator.clipboard.writeText(phone.textContent)
    .then(() => {
      alert('Telefone copiado!');
    })
    .catch(err => {
      console.error('Falha ao copiar: ', err);
    });
});