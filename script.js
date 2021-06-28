
let myName = document.querySelector('#name');
let myJob = document.querySelector('#job');
let aboutText = document.querySelector('.about-stuff');
const infoText = document.querySelector('#info-text');
let toggleButton = document.querySelector('.nav-toggle');
let mobileMenu = document.querySelector('.mobile-menu');

let toggled = false;



let identifyProject = (e) => {
  console.log(e.target.id);
  inputText(e.target.id);
}

let inputText = (project) => {
  const title = infoText.querySelector('h3');
  const info = infoText.querySelector('p');
  
  infoText.style.animation = 'appear 400ms ease-in';
  setTimeout(function() {
    infoText.style.animation = '';
  }, 400);
  

  if (project == 'google') {
    title.textContent = 'Google Homepage Project';
    info.textContent = "This is my first implementation of html/css knowledge in The Odin Project curriculum. I replicate the simplest version of the Google homepage. This project helped me get the hang of mozilla firefox\'s developer tools and apply what I had learned so far about html and css.";
  } else if (project == 'rps') {
    title.textContent = 'Rock, Paper, Scissors Game';
    info.textContent = "This is the first time I add javascript to a website. In this project I create a game you can play against the computer, where the first to get to five points wins. I automate the score to update as the game goes on and let the user know who won each round. This project is a part of The Odin Project curriculum.";
  } else if (project == 'etch') {
    title.textContent = 'Etch-A-Sketch';
    info.textContent = "In this project, I create a web version of an etch-a-sketch. It allows the user to draw on a virtual etch-a-sketch by clicking and dragging with their mouse. The user also has the option to change the pixel size and choose a color style by pressing buttons. This project challenged me in my javascript skills in manipulating the DOM. For example, the 'random color' button generates a random color for every ~pixel~ you drag your mouse over. The 'incrementally darken' button darkens whatever color the pixel was previously by 10%. It's fun to use! This project is a part of the Odin Project curriculum.";
  } else if (project == 'calc') {
    title.textContent = 'Calculator';
    info.textContent = "My very own calculator! I created it with HTML, CSS, and Javascript. This project allowed me to practice my DOM manipulation skills with Javascript in order to update the calculator screen with the correct numbers and answers as the user presses buttons. While this calculator only does simple operations, I plan to update this project in the future with more buttons as I keep learning. This project is a part of the Odin Project curriculum."
  } else if (project == 'tech') {
    title.textContent = 'Technical Documentation Page';
    info.textContent = "I created a web page based off of how a technical documentation page is usually presented: a navigation column with a directory of subjects, and a main area with text and code examples. Using HTML and CSS, I copied and pasted content to create a sample React documentation page. This project is a part of the freecodecamp curriculum."
  } else if (project == 'product') {
    title.textContent = 'Product Landing Page';
    info.textContent = "Using HTML and CSS, I made a webpage with the purpose of selling a product. It includes various media content, text, input, and more complicated CSS formatting. The product I chose to sell is clarinet reeds, and I made the page more like a spoof. It is typical for a box of 10 clarinet reeds to only include around 4 that work, so claiming that at least 6 will work and charging ridiculous amounts of money is funny to me (maybe not to you...). Oh! And if you want to check out a great rendition of Copland\'s Clarinet Concerto, watch the video on the page! This project is a part of the freecodecamp curriculum."
  } else if (project == 'survey') {
    title.textContent = 'Survey';
    info.textContent = "I got to practice creating forms with HTML using various types of input by the user. I did that in the form of a survey for musicians. There\'s nothing to conclude from this survey- I just wrote a bunch of random questions. I had fun writing the questions and designing the page as well. This project is a part of the freecodecamp curriculum.";
  } else if (project == 'tribute') {
    title.textContent = 'Tribute Page';
    info.textContent = 'As one of my first experiences making web pages, I designed one to look like a tribute page using a simple layout and content copied from another webpage. I chose a jazz saxophone player I studied in college, Cannonball Adderley. This was good practice for a someone who was a beginner in HTML and CSS. This project is a part of the freecodecamp curriculum.';
  }

};

let changeColor = (e) => {
  let filter = document.querySelector('.filters');
  let allLabels = filter.querySelectorAll('button');
  allLabels.forEach(label => label.classList.remove('color'));
  
  let label = e.target;
  label.setAttribute('class','color');

  console.log(e.target.innerText);
}

let sortProjects = (e) => {
  changeColor(e);
  if (e.target.innerText === "HTML/CSS") {
    let byebye = document.querySelectorAll('.Javascript');
    byebye.forEach(project => {
      project.style.cssText = 'display: none;';
    });
    let projects = document.querySelectorAll('.HTML');
    projects.forEach(project => {
      project.style.cssText = 'display: all;';
    });
  } else if (e.target.innerText === "Javascript") {
    let byebye = document.querySelectorAll('.HTML');
    byebye.forEach(project => {
      project.style.cssText = 'display: none;';
    });
    let projects = document.querySelectorAll('.Javascript');
    projects.forEach(project => {
      project.style.cssText = 'display: all;';
    });
  } else if (e.target.innerText === "All") {
    let projects = document.querySelectorAll('.container');
    projects.forEach(project => {
      project.style.cssText = 'display: all;';
    })
  }
}

let toggleMenu = (e) => {
  if (toggled === true) {
    mobileMenu.classList.remove('show');
    toggleButton.classList.remove('show');
    toggled = false;
  } else {
    mobileMenu.classList.add('show');
    toggleButton.classList.add('show');
    toggled = true;
  }

}

let infoButton = document.querySelectorAll('.info');
infoButton.forEach(button => button.addEventListener('click', identifyProject));

let radioButtons = document.querySelectorAll('.option');
radioButtons.forEach(option => option.addEventListener('mousedown', sortProjects));

toggleButton.addEventListener('mousedown', toggleMenu);

let mobileButtons = mobileMenu.querySelectorAll('.mob')
mobileButtons.forEach(button => button.addEventListener('mousedown', toggleMenu));