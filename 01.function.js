console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2){

    return nb1 + nb2;
}

resultat1 = additionner(nombre1, nombre2);

var clog = console.log;

clog('resultat1 =', resultat1);

var somme = additionner;

resultat2 = somme(nombre2, nombre1);

clog('resultat2 =', resultat2);

var multiplication = function(nb1, nb2){

    return nb1 * nb2;
};

resultat3 = multiplication(nombre1, nombre2);

clog('resultat3 =', resultat3);

// Fonction comme les éléments du premier ordre
var afficherOperation = function(nomOperation, operation, nb1, nb2){

    this.nomOperation = nomOperation;
    this.operation = operation;
    this.nb1 = nb1;
    this.nb2 = nb2;

    return(nomOperation + '(' + nb1 + ',' + nb2 + ')' + ' = ' + operation(nb1, nb2));

};

var afficherAddition = afficherOperation('Somme', additionner, 20, 40);

clog(afficherAddition);

var afficherMultiplication = afficherOperation('Multiplication', multiplication, 10, 20);

clog(afficherMultiplication);

var afficherSoustraction = afficherOperation('Soustraction', (nb1, nb2) => nb1 - nb2, 15, 5);
clog(afficherSoustraction);