const monArray = [1, 2, 3, 4, 5];

// push() ajoute un nouvelle indice avec une valeur à la fin du array
monArray.push(6);
console.log(monArray);

// pop() retire le dernier indice de l'array
// la on voit quel est cette élément, ici 6
console.log(monArray.pop(6));
// la on voit l'array qui ne contient plus le dernier indice, ici 6
console.log(monArray);

// Ici on fait exactement la même chose mais en retirant le premier indice du array
console.log(monArray.shift());
console.log(monArray);

// Prend comme un argument une autre fonction qui prend un argument qu'on appel comme on veut
// Cet argument représente chaque indice du array
// forEach fait une boucle sur notre array pour sortir chaque indice
monArray.forEach(function(element) {
  console.log(element);
});
// Pareil mais en fx fléchée pour changer
monArray.forEach(elem => console.log(elem));

monArray.forEach(elem => {
  elem = elem * 2;
  console.log(elem);
});

// Ne change pas l'array initial
console.log(monArray);

// map() permet de faire la même chose et de stocker le résultat dans un nouvel array
const monArray2 = monArray.map(elem => elem * 2);
console.log(monArray2);

// filter() permet de filtrer l'array pour créer un nouvel array avec la condition que l'ont veut
// Ici on va prendre que les chiffres supérieurs ou égales à 3
const monArray3 = monArray.filter(elem => elem >= 3);
console.log(monArray3);

// Séléctionnons tous nos paragraphe du index.html
const paragraphes = document.querySelectorAll('p');
console.log(paragraphes);
// On obtient une NodeList qui n'est pas un array, on ne peut pas utiliser toutes les méthodes des arrays dessus

// length marche et nous retourne 3 car on a 3 paragraphes
console.log(paragraphes.length);

// pop ne marche pas et retourne une erreur de type TypeError
// console.log(paragraphes.pop());

// pour contourner se problème on peut transformer notre NodeList en array
// On utilise la méthode from()
const paragraphesArray = Array.from(paragraphes);

// Cette fois si pop() fonctionne et nous sort bien le 3eme paragraphe
console.log(paragraphesArray.pop());
