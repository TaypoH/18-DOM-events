const anchor = document.querySelector('a');

anchor.addEventListener('click', buttonHandler);

function buttonHandler(event) {
    const button = document.createElement('button');
    button.append('Button');
    document.body.append(button);
    event.target.removeEventListener('click', buttonHandler);
}