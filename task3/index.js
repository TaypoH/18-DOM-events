const div = document.querySelector('.power-off');
const btn = document.querySelector('button');

btn.addEventListener('click', buttonHandler);

function buttonHandler() {
    div.classList.toggle('power-on')
}