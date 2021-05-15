let identifyProject = (e) => inputText(e.target.id);

let inputText = (project) => {
  const infoText = document.querySelector('#info-text');
  const title = infoText.querySelector('h2');
  const info = infoText.querySelector('p');

  if (project == 'google') {
    title.textContent = 'Google Homepage Project';
    info.textContent = "This is my first implementation of html/css knowledge in The Odin Project curriculum. I replicate the simplest version of the Google homepage. This project helped me get the hang of mozilla firefox\'s developer tools and apply what I had learned so far about html and css.";
  } else if (project == 'rps') {
    title.textContent = 'Rock, Paper, Scissors Game';
    info.textContent = "This is the first time I add javascript to a website. In this project I create a game you can play against the computer, where the first to get to five points wins. I automate the score to update as the game goes on and let the user know who won each round. This project is a part of The Odin Project curriculum.";
  } else if (project == 'etch') {
    title.textContent = 'Etch-A-Sketch';
    info.textContent = "In this project, I create a web version of an etch-a-sketch. It allows the user to draw on a virtual etch-a-sketch by clicking and dragging with their mouse. The user also has the option to change the pixel size and choose a color style by pressing buttons. This project challenged me in my javascript skills in manipulating the DOM. For example, the random color button generates a random color for every 'pixel' you drag your mouse over. The incrementally darken button darkens whatever color the pixel was previously by 10%. This project is a part of the Odin Project curriculum.";
  } else if (project == 'calc') {
    title.textContent = 'Calculator';
    info.textContent = ""
  }
}

let infoButton = document.querySelectorAll('.info');
infoButton.forEach(button => button.addEventListener('click', identifyProject));