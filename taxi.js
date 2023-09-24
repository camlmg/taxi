/*
Exo l: Le taxi
John essaie de rentrer chez lui en taxi.
Problème : Il a horreur d'écouter Anissa de Wejdene qui passe tout le temps à la radio.
Dès qu'il entend cette musique, il perd 1 de santé mentale et change de taxi.
Partons du principe qu'une musique se change à chaque feu rouge qu'il rencontre et qu'il est à 30 feux
rouges de chez lui
À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
Deux possibilités de fin :
- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu'il est bien arrivé et
qu'il lui a fallu x changements de taxi pour y arriver
- Sa santé mentale tombe à 0, il explose et donc affiche « explosion »
Nous avons besoin d'un Personnage avec un prénom et une santé mentale à 10.
Nous avons besoin d'une liste de 5 musiques dont Anissa-Wejdene
Nous avons besoin d'un Trajet avec une radio, 30 feux rouges et un nombre de changements

John doit rentrer chez lui
il  a un total de 10 pts de sante mentale
il doit passer par 30 changements de musiques = 3à feux rouges
il y a une radio avec 5 musiques possibles : anissa, 2, 3 , 4, 5 

*/

let santeMentale= 10;  
let feuRouge=1;
let taxi=1;

const musiqueRadio= ["anissa - wejdene", "our song - taylor swift", "vampire - olivia rodrigo", "good grief - bastille", "fine line - harry styles"];  //constante avec le nom de toutes les musiques

function musiqueAleatoire() {  //fonction qui determine la musique aleatoire 
    const aleatoire = Math.floor(Math.random() * musiqueRadio.length);  //formule math pour chosir une musique aleatoire parmis celles du  tableau musiqueRadio
    return musiqueRadio[aleatoire];
}
 
while (santeMentale >0 && feuRouge <= 30){  //tant que la sante mentale de john est superieur à 0 et que le nombre de feux rouges est inferieur à 30
    const musiqueRadio = musiqueAleatoire(); //musique aleatoire à chaque feu rouge qu'il passe
    console.log(`John est à un feu rouge il ecoute : ${musiqueRadio}`);
    console.log(`Santée mentale de John : ${santeMentale}`); 
    console.log(`Numero du feu rouge : ${feuRouge}`);


if (musiqueRadio=== "anissa - wejdene"){   //si la musique est anissa, john pert 1 point de sante mentale et change de taxi
    santeMentale -=1 
    taxi +=1
    console.log("CHANGEMENT DE TAXI");
}

feuRouge++; //pour augmenter le nombre de feux rouges à chaque tour de la boucle
}


if (santeMentale <= 0){  // si john n'a plus de pts de santé mentale : il explose
    console.log("EXPLOSION");
     
}
else if ( feuRouge==31){ // si john a encore des points de sante mentale et qu'il a passé 30 feux rouges, il est arrivé chez lui.
    console.log("John est arrivé chez lui avec une santé mentale de " + santeMentale, ". Il lui a fallu " + taxi, "taxis pour rentrer.");

}
  
