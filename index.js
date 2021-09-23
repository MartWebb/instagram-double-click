const containers = document.querySelectorAll('.image-container');
const heartIcon = document.querySelectorAll('.heart-icon');
const likesCounter = document.querySelectorAll('.likes-counter');
let counter = 0;

containers.forEach((container, int) => {
    container.addEventListener('dblclick', () => {
        heartIcon[int].classList.add('like');
        counter++;
        if (counter < 2) {
            likesCounter[int].textContent = counter;
            counter--;
        }
    });
});

