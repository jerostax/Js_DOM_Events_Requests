// Une expression régulière nous permet de chercher des suites de caractères dans le code

const monTemplate = /ab/;
console.log(monTemplate);
// Ici on regarde la fx du constructeur qui est RegExp()
console.log(monTemplate.constructor);

const maString = 'abc';
// On éxécute notre template de regex dans notre string
// exec a repéré la suite ab dans notre string
console.log(monTemplate.exec(maString));

const maString2 = 'ac';
// Cette fois ci on obtient null car il n'y a pas la suite ab dans la string
console.log(monTemplate.exec(maString2));

// La méthode test, test notre template /ab/ sur la string
// Renvoie true ou false
console.log(monTemplate.test(maString2));
console.log(monTemplate.test(maString));

// match() permet de d'abord séléctonier la string pour ensuite voir si monTemplate match avec
// Retourne la même chose que exec()
console.log(maString.match(monTemplate));

// On obtient l'index d'ou est monTemplate s'il y est (ici index 0)
console.log(maString.search(monTemplate));
// Retourne -1 s'il ne trouve pas monTemplate
console.log(maString2.search(monTemplate));

// replace prend le template en 1er argument et la chaine de caractère qu'on veut remplacer part le template si on le trouve
console.log(maString.replace(monTemplate, 'remplace'));

// split() enlève tous les /ab/
const newString = "Bonjourabmoiabc'estabjérémy";
console.log(newString.split(monTemplate));
