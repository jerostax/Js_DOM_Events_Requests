// On utilise jsonplaceholder
// Notre requête
const req = new XMLHttpRequest();
// Notre méthode de notre requête
const method = 'POST';
// URL de notre API REST
const url = 'https://jsonplaceholder.typicode.com/posts';

// Ici je défini la data qu'on veux envoyer au serveur
const data = {
  body: 'Contenu de notre post',
  title: 'Titre de notre post',
  userId: 7
};

// Méthode open() ouvre notre requête
// prend la méthode de notre requête en 1er argument
// l'url de notre requête
req.open(method, url);

// onreadystatechange est un event handler auquel on passe une fx en réaction à cette évènement
// this = la requête
req.onreadystatechange = function(event) {
  // "est-ce que ma requête est terminée ?"
  if (this.readyState === XMLHttpRequest.DONE) {
    // Code de réponse de requête http, 201 = Est-ce qu'on a créé quelque chose?
    if (this.status === 201) {
      console.log('REPONSE : ', this.responseText);
      // Notre réponse est une string donc on utilise JSON.parse pour la transformer en objet
      console.log('REPONSE PARSE (OBJ) : ', JSON.parse(this.responseText));
    } else {
      console.log('Statut : ' + this.status);
    }
  }
};
// Ensuite pour envoyer la requête on utilise la méthode send() et on envoie data
req.send(data);
