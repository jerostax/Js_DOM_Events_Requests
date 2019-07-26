var a = 'Jérémy';

function coucou() {
  console.log('Coucou');
}

// Window obj
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

// Marche pareil car on est dans le scope global window
console.log(innerWidth);
console.log(innerHeight);
console.log(outerWidth);
console.log(outerHeight);

// Location (propriété de window)
console.log(window.location);
// ===
console.log(location);
// Refresh la page
console.log(location.reload);
// console.log(location.replace('formation'));

// Document (propriété window) - DOM (représentation de notre HTML  )
console.log(document);
console.log(document.title);
document.title = 'Nouveau title';
console.log(document.title);
console.log(document.body);
// Children
console.log(document.body.children);
console.log(document.body.children[0]);
// Retourne le prochain élément (script ici)
console.log(document.body.children[0].nextElementSibling);
console.log(document.body.children[0].children);
// firstElementChild === children[0]
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
// Elément parent (ici body)
console.log(document.body.children[0].parentElement);

// Pour voir les propriétés de l'élément on sible les enfants sans préciser quel indice on veut
console.log(document.body.children[0].children);

// Utilisons les propriétés de p
// Ici on récupère le contenu texte de l'élément p
console.log(document.body.children[0].children[1].textContent);
// On modifie le contenu du textContent
document.body.children[0].children[1].textContent = 'Texte modifié';

// Propriété style
document.body.children[0].style.backgroundColor = 'red';

// Propriété classList pour afficher les classes
console.log(document.body.children[0].classList);

// Ajouter une classe (ici on ajoute .cool qui a color: blue)
document.body.children[0].classList.add('cool');
// Enlever une classe
document.body.children[0].classList.remove('cool');
// Toggle = ajoute s'il y a la classe, enlève s'il n'y a pas
document.body.children[0].classList.toggle('cool');
document.body.children[0].classList.toggle('cool');

// Récupérer les attributs des éléments html
console.log(document.body.children[1].getAttribute('src'));
// Modifier les attributs
document.body.children[1].setAttribute('src', 'assets/brasil.png');

// Séléctionner les éléments avec les selecteurs
console.log(document.getElementById('title'));
console.log(document.getElementsByTagName('p')); // Array
console.log(document.getElementsByClassName('important')); // Array
// Modifier avec les sélécteurs
document.getElementById('title').textContent = 'Un titre modifié';

const p = document.getElementById('title');
console.log(p);
p.textContent = 'Encore un titre modifié';

// Query Selectors
console.log(document.querySelector('.important'));
// Séléctionner tous les éléments qui ont la classe .important
console.log(document.querySelectorAll('.important'));

// Modifier la position des éléments
const rouge = document.querySelector('.rouge');
const vert = document.querySelector('.vert');
const bleu = document.querySelector('.bleu');

// On "insère" l'élément bleu avant l'élément vert
document.body.insertBefore(bleu, vert);
// On "insère" l'élément bleu avant l'élément rouge
document.body.insertBefore(bleu, rouge);

// On "attache" l'élément bleu à l'élément rouge (on l'insère à l'intérieur)
rouge.appendChild(bleu);

// Ici on remplace l'élément rouge par l'élément bleu (du coup il n'y a plus d'élément rouge)
document.body.replaceChild(bleu, rouge);

// Ici on supprime un élément (on remonte à l'élément parent pour ensuite supprimer un élément enfant
vert.parentElement.removeChild(vert);
// Façon plus simple de supprimer élément
bleu.remove();

// Créer des éléments
const jaune = document.createElement('div');
jaune.classList.add('jaune');
jaune.textContent = 'Jaune';
// On l'ajoute en tant qu'enfant de body
document.body.appendChild(jaune);

function planifierTache(heure, tache) {
  const nouvelleTache = document.createElement('li');
  // "Ton hinnerHTML" (à l'intérieur du li) contient ce contenu html
  nouvelleTache.innerHTML = `<h3>${heure}</h3><p>${tache}</p>`;
  // Attache nouvelleTache comme enfant de ul
  document.querySelector('ul').appendChild(nouvelleTache);
}

planifierTache('08h00', 'petit-déjeuné');
planifierTache('08h30', 'Sport');
planifierTache('09h00', 'Aller au travail');
