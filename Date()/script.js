// Je créé une variable qui contient le moment précis ou le code s'éxécute
const aujourdhui = new Date();
console.log(aujourdhui);

// Je créé la date que je veux, ici le 8 avril 1018
// Note : on commence à compter les moins à partir de 0 donc avril = 03
const uneDate = new Date(2018, 03, 08);
console.log(uneDate);

// Sous forme de string pas besoin de compter à partir de 0
uneDateString = new Date('2018/04/08');
console.log(uneDateString);

// Retourne le jour de la date
console.log(uneDate.getDate());

// Retourne le jour de la semaine
// 0 = dimanche , 1 = lundi ... 6 = samedi
console.log(uneDate.getDay());
// Retourne l'année
console.log(uneDate.getFullYear());
// Retourne le mois (à partir de 0)
console.log(uneDate.getMonth());

const today = new Date();

// Retourne l'heure
console.log(today.getHours());
// Retourne les minutes
console.log(today.getMinutes());
// Retourne les secondes...
console.log(today.getSeconds());
