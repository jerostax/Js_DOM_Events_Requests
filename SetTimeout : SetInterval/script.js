function hello() {
  console.log('Hello');
}

// Va s'éxécuter au bout de 5 secondes (5000 en milliseconde)
setTimeout(hello, 5000);
// Fait la même chose
setTimeout(function() {
  console.log('Anonyme');
}, 5000);
// fx fléchée pour changer
setTimeout(() => {
  console.log('fleche'), 1000;
});

// Avec setInterval on va pouvoir décider de l'interval de l'éxécution du code
// Ici je créé une fx fléchée pour changer
interval = () => {
  console.log('interval');
};
// Ici il s'éxécute toutes les 2 secondes
setInterval(interval, 2000);

// La méthode clearInterval permet de définir quand arrêter le code
clear = () => {
  console.log('cette interval de 3 secondes va stop à 10 secondes');
};
const monInterval = setInterval(clear, 3000);

setTimeout(() => {
  clearInterval(monInterval);
  console.log('mon interval est stopé à 10 secondes');
}, 10000);
