const showConsole = document.querySelector('#consoleLog');
const showAlert = document.querySelector('#alert');
const showPrompt = document.querySelector('#prompt');

showConsole.addEventListener('click', function () {
  alert('Метод для вывода информации в консоль браузера');
});

showAlert.addEventListener('click', function () {
  alert('Модальное окно для вывода сообщений пользователю');
});

showPrompt.addEventListener('click', function () {
  alert('Модальное окно для получения данных от пользователя');
});