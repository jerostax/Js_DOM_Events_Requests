const jeremy = 'Jérémy';
const alex = 'Alex';
let nomPlusLong;

// On stock le nom le plus long dans nomPlusLong grâce à cette condition
if (jeremy.length > alex.length) {
  nomPlusLong = jeremy;
} else {
  nomPlusLong = alex;
}

console.log(nomPlusLong);

// Faisons la même opération mais avec l'opérateur ternaire
// En 1er on vérifie une condition, si elle est vrai alors on affiche le code après le ' ? '
// Si elle est fausse on affiche le code après les ' : '
// condition ? express1 : expression 2
let nomPlusLongTernaire = jeremy.length > alex.length ? jeremy : alex;

console.log(nomPlusLongTernaire);

// Note : on peut en imbriquer plusieurs les unes dans les autres
// Vérifions si Jérémy est plus petit que Alex et Qays ou pas
const qays = 'qays';

let nomPlusLongImbrique =
  jeremy.length < alex.length
    ? 'Jérémy est plus petit que Alex'
    : jeremy.length < qays.length
    ? 'Jérémy est plus petit que Qays'
    : 'Jérémy est plus grand que Qays et Alex';

console.log(nomPlusLongImbrique);
