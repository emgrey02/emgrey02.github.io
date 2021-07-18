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
}

darkMode.addEventListener('change', toggleDarkMode);



linkContainers.forEach(container => {
  const links = container.querySelectorAll('a');
  links.forEach(link => link.addEventListener('focus', outlineCurrentItem));
  links.forEach(link => link.addEventListener('blur', removeOutline));
});

document.addEventListener('click', event => {
  if (event.target.matches('button')) {
    event.target.focus()
  }
})

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


input.forEach(selector => selector.addEventListener('change', sortProjects));
  
