/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */

function handleCreated(event) {
  event.preventDefault();
  showCreated();
  saveInfo();
}

function saveInfo() {
  fetch('https://dev.adalab.es/api/card ', {
    method: 'POST', // Para enviar datos
    body: JSON.stringify(dataCard),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      let data = responseJSON.cardURL;
      link.innerHTML = data;
      link.href = data;
      twitter.href = `https://twitter.com/intent/tweet?text=Aquí%20podéis%20ver%20mi%20tarjeta%20virtual&url=${data}.%20Crea%20la%20tuya%20en:%20https://lrpoblet.github.io/debuggers-cards/`;
      localStorage.setItem('userData', JSON.stringify(dataCard));
    });
}

// Se añaden las características CSS a los elementos llamados para cambiar la apariencia del botón y desplegar la secciín link de twitter.

function showCreated() {
  btnCreateCard.classList.add('change-color-btn');
  iconBtnCreated.classList.add('change-color-icon');
  shareCreated.classList.remove('collapsed');
  shareCreated.classList.add('created');
}

btnCreateCard.addEventListener('click', handleCreated);
