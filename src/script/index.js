const lines = document.querySelectorAll('.moving-lines__line');
const body = document.querySelector('body');
const radio = document.querySelectorAll('input[name="theme"]');
const currentSetting = document.querySelector('.current-setting__name');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const loader = document.querySelector('#loader');
const emma = document.querySelector('.about__image');

let loadtime;

//loader //
window.addEventListener('load', () => {
	loadtime = setTimeout(showPage, 2000);
});

function showPage() {
	loader.style.display = 'none';
	header.style.opacity = '1';
	main.style.opacity = '1';
	footer.style.opacity = '1';
}

//moving eyes :) //
const rightEye = document.querySelector('#right-iris');
const leftEye = document.querySelector('#left-iris');
const leftPupil = document.querySelector('#left-pupil');
const rightPupil = document.querySelector('#right-pupil');

const leftEyeArea = leftEye.getBoundingClientRect();
const rightEyeArea = rightEye.getBoundingClientRect();

const radius = leftEyeArea.width / 2;

const leftCenterX = leftEyeArea.left + radius;
const rightCenterX = rightEyeArea.left + radius;
const leftCenterY = leftEyeArea.top + radius;
const rightCenterY = rightEyeArea.top + radius;

body.addEventListener('mousemove', (e) => {
	let leftx = e.clientX - leftCenterX;
	let rightx = e.clientX - rightCenterX;
	let lefty = e.clientY - leftCenterY;
	let righty = e.clientY - rightCenterY;

	let leftTheta = Math.atan2(lefty, leftx);
	let rightTheta = Math.atan2(righty, rightx);

	let leftAngle = (leftTheta * 180) / Math.PI + 360;
	let rightAngle = (rightTheta * 180) / Math.PI + 360;

	leftPupil.style.transform = ` rotate(${leftAngle + 'deg'}) translateX(${
		2 + 'px'
	})`;
	rightPupil.style.transform = `rotate(${rightAngle + 'deg'}) translateX(${
		2 + 'px'
	}) `;
});

// project animation on scroll //
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');

const className = 'in-view';

first.classList.remove(className);
second.classList.remove(className);
third.classList.remove(className);
fourth.classList.remove(className);

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
		threshold: 0.2,
	}
);

observer.observe(first);
observer.observe(second);
observer.observe(third);
observer.observe(fourth);

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
			localStorage.setItem('theme', option.value);
		}
	});
});

const getColorPreference = () => {
	if (localStorage.getItem('theme')) {
		return localStorage.getItem('theme');
	} else {
		return 'system';
	}
};

const reflectPreference = () => {
	body.classList = `${theme.value}`;

	radio.forEach((option) => {
		if (option.value === theme.value) {
			option.checked = true;
		}
	});
};

const theme = {
	value: getColorPreference(),
};

reflectPreference();

window.onload = () => {
	reflectPreference();
	setCurrentSetting();
};

const setCurrentSetting = () => {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: light)').matches
	) {
		currentSetting.textContent = 'light';
	} else {
		currentSetting.textContent = 'dark';
	}
};

let forMatchChangeDetection = window.matchMedia('(prefers-color-scheme: dark)');

forMatchChangeDetection.addEventListener('change', setCurrentSetting);
