// Отримання посилань на елементи DOM
let modal = document.querySelector('.modal');
let modalButton = document.querySelector('.modal-button-open')
let modalClose = document.querySelector('.close')

// Функція, яка відкриває модальне вікно
function openModal() {
  modal.style.display = "block";
}

// Функція, яка закриває модальне вікно
function closeModal() {
  modal.style.display = "none";
}

modalButton.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)

// Закриття модального вікна при кліку поза вікном
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}