const input = document.querySelector('input');
const button = document.querySelector('button');
const text = document.querySelector('#duplicateField');

function getText() {
  input.addEventListener('focus', function (event) {
    input.preventDefault;
    let newContent = text.textContent = input.value;
    console.log(newContent);
  })
}
getText();






