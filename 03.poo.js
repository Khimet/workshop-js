/* Créer une fonction constructeur Personne qui permet
 de créer un objet ayant les caractéristiques suivantes :
◦ Un attribut nom.
◦ Un attribut prenom.
◦ Un attribut pseudo.
◦ Une méthode getNomComplet qui retourne une chaine de 
caractères contenant le nom, le prénom et le pseudo.
*/
function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function(){
        return 'Nom: ' + this.nom + ' Prénom: ' +
        this.prenom + ' Pseudo: ' + this.pseudo;
    };
};

jules = new Personne('LEMAIRE', 'Jules', 'jules77');

paul = new Personne('LEMAIRE', 'Paul', 'paul44');

console.log(jules.getNomComplet());

function afficherPersonne(personne){

    console.log(personne.getNomComplet());
}

afficherPersonne(paul);

// Modifier le pseudo de l'objet jules en jules44
jules.pseudo = 'jules44';

// Affichage du nom complet après modification
console.log(jules.getNomComplet());

/* Afficher la propriété age de l'objets jules, verifier que la 
valeur est undefined */
console.log(jules.age);

// Ajout de la propriété age à la structure Personne avec la valeur par défaut NON RENSEIGNE
Personne.prototype.age = 'NON RENSEIGNE';

//Affichage de l'age de Jules
console.log('Age de Jules:', jules.age);

//Modification age de jules
jules.age = 30;

//Affichage de l'age de Jules après modification
console.log('Age de Jules après modificiation:', jules.age);

/*Ajout de la méthode getInitiales qui retourne une chaine 
de caractèrescomposée de la première lettre du prénom et de 
la première lettre du nom.
*/
Personne.prototype.getInitiales = function(){
    return this.prenom.charAt(0) + this.nom.charAt(0);
};

//Affichage des initiales de l'objet jules
console.log(jules.getInitiales());

// Création d'un objet robert sans fonction constructeur
robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',

    getNomComplet: function(){

        return 'Nom : ' + this.nom + ' Prenom : ' +
        this.prenom + ' Pseudo : ' + this.pseudo;

    }

};

//Affichage des informations de l'objet Robert
afficherPersonne(robert);

/* Créer une fonction constructeur Client qui possède les mêmes 
caractéristiques que Personne et qui contient en plus :
◦ Une propriété numeroClient.
◦ Une fonction getInfos qui retourne :
◦ Le numéro du client.
◦ Le nom du client.
◦ Le prenom du client.
*/
function Client(nom, prenom, pseudo, numeroClient){

    Personne.call(this, nom, prenom, pseudo); //Invoque la fonction personne
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return 'Numero client: ' + numeroClient + ' Nom : ' + nom +
        ' Prénom : ' + prenom;
    }
};

steve = new Client('Steve', 'LUCAS', 'steve44', 'A01');

// Affichage des informations de l'objet steve via la fonction afficherPersonne
afficherPersonne(steve);

