const link = document.querySelector('a');

link.addEventListener('click', function (event) {
  event.preventDefault;
  let newContent = prompt('Напишите новый текст');

  if (newContent.length < 1) {
    link.textContent = 'Измените текст ссылки';
  } else {
    link.textContent = newContent;
  }
});

