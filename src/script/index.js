const lines = document.querySelectorAll('.moving-lines__line');
const body = document.querySelector('body');
const radio = document.querySelectorAll('input[name="theme"]');

const first = document.querySelector('.first');
const second = document.querySelector('.second');

const className = 'in-view';

first.classList.remove(className);
second.classList.remove(className);

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(className);
				return;
			}
			entry.target.classList.remove(className);
		});
	},
	{
		threshold: 0.5,
	}
);

observer.observe(first);
observer.observe(second);

window.addEventListener('scroll', () => {
	lines.forEach((line) => {
		line.classList.add('moving');
	});
});

lines.forEach((line) => {
	line.addEventListener('animationend', () => {
		line.classList.remove('moving');
	});
});

//theme toggle//

radio.forEach((option) => {
	option.addEventListener('change', () => {
		body.classList = '';
		if (option.checked) {
			body.classList.add(option.value);
		}
	});
});
