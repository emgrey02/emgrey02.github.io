const toggleNav = document.querySelector('#nav-toggle');
const body = document.querySelector('body');
const nav = document.querySelector('.smaller-screen-nav');
const input = document.querySelectorAll('input');
const projects = document.querySelectorAll('.item');
const htmls = document.querySelectorAll('.HTML');
const javascripts = document.querySelectorAll('.Javascript');

const openNav = () => {
  body.classList.toggle('nav-open');
  let ariaExpanded = nav.attributes[1].value;
  if (ariaExpanded == 'false') {
    nav.attributes[1].value = true;
  } else {
    nav.attributes[1].value = false;
  }
}

document.addEventListener('click', event => {
  if (event.target.matches('button')) {
    event.target.focus()
  }
})

toggleNav.addEventListener('click', openNav);

const sortProjects = (e) => {
  let language = e.target.id;
  console.log(language);

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
  
