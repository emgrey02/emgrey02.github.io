const toggleNav = document.querySelector('#nav-toggle');
const body = document.querySelector('body');
const nav = document.querySelector('.smaller-screen-nav');
const input = document.querySelectorAll('.sort');
const projects = document.querySelectorAll('.item');
const htmls = document.querySelectorAll('.HTML');
const javascripts = document.querySelectorAll('.Javascript');
const linkContainers = document.querySelectorAll('.project-links');
const darkMode = document.querySelector('#dark-mode');
const animation = document.querySelector('#animation-toggle');
const backToTopButton = document.querySelector('#arrow');

const outlineCurrentItem = (e) => {
  let currentProject;
  let itemName = e.target.parentElement.classList[1];
  projects.forEach(project => {
    if (project.classList[2] == itemName) {
      currentProject = project;
    }
  })
  currentProject.style.border = '2px solid var(--dark-color)';
}

const removeOutline = (e) => {
  let currentProject;
  let itemName = e.target.parentElement.classList[1];
  projects.forEach(project => {
    if (project.classList[2] == itemName) {
      currentProject = project;
    }
  })
  currentProject.style.border = 'none';
}

const toggleDarkMode = (e) => {
  console.log(e.target.checked);
  if (e.target.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
  localStorage.setItem('isDark', e.target.checked);
}

const toggleAnimation = (e) => {
  console.log(e.target.checked);
  if (e.target.checked) {
    backToTopButton.style.animationPlayState = 'paused';
  } else {
    backToTopButton.style.animationPlayState = 'running';
  }
  localStorage.setItem('isAnimated', e.target.checked);
}

linkContainers.forEach(container => {
  const links = container.querySelectorAll('a');
  links.forEach(link => link.addEventListener('focus', outlineCurrentItem));
  links.forEach(link => link.addEventListener('blur', removeOutline));
});

document.addEventListener('click', event => {
  if (event.target.matches('button')) {
    event.target.focus();
  }
})

const checkStorage = () => {
  const currentTheme = JSON.parse(localStorage.getItem('isDark'));
  const currentAnimationStatus = JSON.parse(localStorage.getItem('isAnimated'));
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
  if (prefersDarkScheme.matches) {
    body.classList.add("dark-mode");
    darkMode.checked = true;
  } else {
    body.classList.remove("dark-mode");
    darkMode.checked = false;
  }

  if (currentTheme == true) {
    body.classList.add('dark-mode');
  }

  if (currentAnimationStatus == true) {
    backToTopButton.style.animationPlayState = 'paused';
    animation.checked = true;
  }
  
}

const sortProjects = (e) => {
  let language = e.target.id;
  
  if (language == 'html') {
    javascripts.forEach(project => {project.style.display = 'none';});
    htmls.forEach(project => {project.style.cssText = ''})
  } else if (language == 'javascript') {
    htmls.forEach(project => {project.style.display = 'none';});
    javascripts.forEach(project => {project.style.cssText = ''});
  } else if (language == 'all') {
    projects.forEach(project => {project.style.cssText = ''});
  }
}

window.addEventListener('load', checkStorage);

input.forEach(selector => selector.addEventListener('change', sortProjects));

darkMode.addEventListener('change', toggleDarkMode);

animation.addEventListener('change', toggleAnimation);
