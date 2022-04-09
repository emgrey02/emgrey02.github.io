const lines = document.querySelectorAll('.moving-lines__line');
const projects = document.querySelector('.projects');
console.log(projects);
const className = 'in-view';

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

projects.classList.remove(className);

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(className) 
            return;
        }
        entry.target.classList.remove(className);
    });
},
{
    threshold: .1
});

observer.observe(projects);