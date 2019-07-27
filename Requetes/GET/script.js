// On utilise jsonplaceholder
// Notre requête
const req = new XMLHttpRequest();
// Notre méthode de notre requête
const method = 'GET';
// URL de notre API REST
const url = 'https://jsonplaceholder.typicode.com/posts';

// Méthode open() ouvre notre requête
// prend la méthode de notre requête en 1er argument
// l'url de notre requête
req.open(method, url);

// onreadystatechange est un event handler auquel on passe une fx en réaction à cette évènement
// this = la requête
req.onreadystatechange = function(event) {
  // "est-ce que ma requête est terminée ?"
  if (this.readyState === XMLHttpRequest.DONE) {
    // Code de réponse de requête http, 200 = OK
    if (this.status === 200) {
      console.log('REPONSE : ', this.responseText);
      // Notre réponse est une string donc on utilise JSON.parse pour la transformer en objet
      console.log('REPONSE PARSE (OBJ) : ', JSON.parse(this.responseText));
    } else {
      console.log('Statut : ' + this.status);
    }
  }
};
// Ensuite pour envoyer la requête on utilise la méthode send()
req.send();
