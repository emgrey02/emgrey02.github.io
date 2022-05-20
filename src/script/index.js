const lines = document.querySelectorAll('.moving-lines__line');
const body = document.querySelector('body');
const radio = document.querySelectorAll('input[name="theme"]');
const currentSetting = document.querySelector('.current-setting__name');
const emma = document.querySelector('#emma-cartoon');

const rightPupil = document.querySelector('#right-pupil');
const leftPupil = document.querySelector('#left-pupil');

const maxTrans = 10;
const maxXDist = innerWidth / 2;
const maxYDist = innerHeight / 2;

const leftPupilArea = leftPupil.getBoundingClientRect();
const rightPupilArea = rightPupil.getBoundingClientRect();

const radius = leftPupilArea.width / 2;

const leftCenterX = leftPupilArea.left + radius;
const rightCenterX = rightPupilArea.left + radius;
const leftCenterY = leftPupilArea.top + radius;
const rightCenterY = rightPupilArea.top + radius;

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');

document.addEventListener('mousemove', (e) => {
	let leftx = e.clientX - leftCenterX;
	let rightx = e.clientX - rightCenterX;
	let lefty = e.clientY - leftCenterY;
	let righty = e.clientY - rightCenterY;

	let leftTheta = Math.atan2(lefty, leftx);
	let rightTheta = Math.atan2(righty, rightx);

	let leftAngle = (leftTheta * 180) / Math.PI + 180;
	let rightAngle = (rightTheta * 180) / Math.PI + 180;

	leftPupil.style.transformOrigin = `center center`;
	leftPupil.style.transform = `translateX(${radius + 'px'}) rotate(${
		leftAngle + 'deg'
	})`;

	rightPupil.style.transform = `translateX(${radius + 'px'}) rotate(${
		rightAngle + 'deg'
	})`;
	rightPupil.style.transformOrigin = `center center`;
});

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
