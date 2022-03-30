const lines = document.querySelectorAll('.moving-lines__line');

let isScrolling = false;

window.addEventListener('scroll', () => {
    lines.forEach((line) => {
        line.classList.add('moving');
    });
});

lines.forEach((line) => {
    line.addEventListener('animationend', () => {
        line.classList.remove('moving');
    })
})

