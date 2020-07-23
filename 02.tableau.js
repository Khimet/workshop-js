 villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

 // ForEach
 /*A l’aide de la fonction forEach(), 
 afficher tous les éléments du tableau dans la console. */
villes.forEach(element => {
    console.log(element)
});

// Every
/* A l’aide de la fonction every(), déterminer si toutes les villes de la 
variables villes contiennent la lettre a.
*/
lettreADansToutesLesVilles = villes.every(element => {

    return element.includes('a');
});

console.log(lettreADansToutesLesVilles);

// Some
/* A l’aide de la fonction some(), déterminer si au moins une ville
 de la variables villes contient le caractère '-'.
*/
auMoinsUneVilleAvecUnTiret = villes.some(element => {

    return element.includes('-');
});

console.log(auMoinsUneVilleAvecUnTiret);

// Filter
/* A l’aide de la fonction filter(), créer une variable 
villesSansTiretSansEspace qui contient un tableau dont les
 villes n’ont ni tiret, ni espace.
*/
villesSansTiretSansEspace = villes.filter(element => {

    return !(element.includes('-') || element.includes(' '))
});

console.log(villesSansTiretSansEspace);

function DerniereLettreS(element, index, array){

    return element.endsWith('s')
}


// Chainer les fonctions
/* A partir du tableau villes, construire un tableau dont :
◦ la dernière lettre du nom est 's'
◦ les noms des villes sont en majuscules 
*/
villesMajusculesSeTerminantParS = villes
    .filter(element => {
        return element.endsWith('s');
    }).map(element => {

        return element.toUpperCase();
    });

console.log(villesMajusculesSeTerminantParS);