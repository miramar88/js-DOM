const link = document.querySelector('a');

link.addEventListener('click', function (event) {
  event.preventDefault();
  let newContent = prompt('Напишите новый текст');

  if (typeof (newContent) == 'null') {
    link.textContent = 'Измените текст ссылки';
  } else if (newContent.length < 1) {
    link.textContent = 'Измените текст ссылки';
  } else {
    link.textContent = newContent;
  }
});

