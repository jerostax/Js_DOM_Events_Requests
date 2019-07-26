const rouge = document.querySelector('.rouge');
const vert = document.querySelector('.vert');
const bleu = document.querySelector('.bleu');

// Propriété des éléments du DOM
console.log(rouge.parentElement.children);

// Event onload = quand la page a été totalement chargée
window.onload = function() {
  console.log('La page est chargée');
};

console.log("Je m'affiche avant le window.onload");

// J'assigne une fonction nomée à window.onload
window.onload = windowReady;

function windowReady() {
  console.log('Ma fonction est éxécutée quand la page est chargée');
}

// Mettons tout notre code dans le window.load (on devrai déclaer nos const rouge, vert et bleu dedans aussi)
window.onload = function() {
  rouge.onclick = function(event) {
    // Cliquez et regardé quel est l'event (MouseEvent) et ses propriétés
    console.log(event);
    rouge.textContent = 'On vient de cliquer sur le rouge';
  };

  // Ecouteur d'event

  // vert.addEventListener('click', function(event) {
  //   vert.textContent = 'On vient de cliquer sur le vert';
  // });

  function modifieVert(event) {
    console.log(event);
    vert.textContent = 'On vient de cliquer sur le vert';
  }
  function modifieBleu(event) {
    console.log(event);
    bleu.textContent = 'On vient de cliquer sur le vert';
  }

  vert.addEventListener('click', modifieVert);
  vert.addEventListener('click', modifieBleu);

  // Retirer un écouteur d'event
  bleu.addEventListener('click', function() {
    vert.removeEventListener('click', modifieVert);
  });

  // Propagation des events
  // Au click sur l'enfant on constate qu'on console.log d'abord enfant puis ensuite parent
  // L'event se propage (remonte) de l'enfant aux parents (phase de bouillonement)
  // On peut inverser la propagation en rajoutant true en 3eme argument de l'addEventListener (phase de capture)
  const parent = document.querySelector('#parent');
  const enfant = document.querySelector('#enfant');

  enfant.addEventListener('click', enfantFonction);
  parent.addEventListener('click', parentFonction);

  function enfantFonction(event) {
    console.log('Click sur Enfant');
  }

  function parentFonction(event) {
    console.log('Click sur parent');
    // On voit le type d'event
    console.log(event.type);
    // On voit la cible de l'event
    console.log(event.target);
    // Cette fois si on affiche la cible du moment ou on affiche le code (si on clique sur la div enfant on aura donc la div parent dans le console.log)
    console.log(event.currentTarget);
    // On obtient a quel axe X on clique
    console.log(event.clientX);
  }

  // Méthodes de l'objet Event
  // Stop propagation = avec ce code on ne log plus la div parent quand on clique sur la div enfant

  // function enfantFonction(event) {
  //   console.log('Click sur Enfant');
  //   event.stopPropagation();
  // }

  // Prevent default = empêche le comportemant par défaut de submit qui rafraichit la page au moment ou il est exécuté
  const form = document.querySelector('form');

  form.addEventListener('submit', envoyerForm);

  function envoyerForm(event) {
    event.preventDefault();
    console.log('Formulaire envoyé');
  }
};
