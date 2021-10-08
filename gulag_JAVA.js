// let gotLumiere = false;
// changer le text des options pour plus court
const chaptersObj = {
    gulag_island: {
        subtitle: "Gulag Island",
        text:"L'aventure commence, vous arrivez enfin sur l'ile de Fortuna. Trois choix s'offre a vous:",
        img: "",
        options: [
            /**Grotte = **/ 
            {
                text: "Vous décidez d'entrer dans la grotte",
                action: "goToChapter('dead_grotte')",
            },
            /**Foret = **/  
            {
                text: "Vous décidez d'entrer dans la forêt",
                action: "goToChapter('entree_foret')",
            },
            /**Attendre = **/ 
            {
                text: "Attendre un passant",
                action: "goToChapter('waiting_tatakae')",
            },
        ],
    },

    entree_foret: {
        subtitle: "decision", 
        text:"Un vent extrêmement froid vous passe par le dos. Vous vous demandez si c'est vraiment un bon choix...",
        img: "",
    
        options: [
            // entre: 
            {
                text: "Vous prenez votre courage a douze mains et entrer dans la forêt...",
                action: "goToChapter('dead_foret')",
            },
    
            // retourne: 
            {
                text: "Vous avez assez vu de film d'horreur pour savoir de ne pas entré dans les forêts.",
                action: "goToChapter('Gulag_Island')",
            },
        ],
    },

    waiting_tatakae: {
        subtitle: "Waiting? Tatakae!", 
        text:"Vous en avez marre d'attendre et decidez d'aller attaquer directement le créateur. Trois attaques sont offert a vous:",
        img: "",
    
        options: [
            /*SuperCoupDeBoule =*/ 
            {
                text: "Vous sautez comme Zidane avec un coup de boule",
                action: "goToChapter('dead_crane')",
            },
    
            /*Invoquation = */
            {
                text: "Vous invoquez Dieu",
                action: "goToChapter('dead_dieu')",
            },
    
            /*dance = */
            {
                text: "Vous sortez des moves de ouf pour le vaincre",
                action: "goToChapter('dance_battle')",
            },
        ],
    },

    dance_battle: {
        subtitle: "dance battle!", 
        text:"C'est le temps de bust-a-move!",
        img: "",
        options: [
            /*Thriller = */
            {
                text: "Vous bustez les moves comme jamais avec une armée de zombies",
                action: "goToChapter('dead_zombie')",
            },
    
            /*SmoothCriminal = */
            {
                text: "L'esprit de MJ vous envahis sortant les moves d'un smooth criminal",
                action: "goToChapter('createur_lumiere')",
            },
        ],
    },

    createur_lumiere: {
        subtitle: "WINNER!", 
        text:"Le créateur est vaincu! Vous gagnez 133742069 EXP! Le Créateur vous donne la Lumière en guise de récompense!",
        img: "",
        options: [
            /*DirectionForet = */
            {
                text: "armer de la Lumière, vous êtes maintenant prêt à affronter le dernier boss! Direction la foret!",
                action: "goToChapter('retour_foret')",
            },
        ],
    },

    retour_foret: {
        subtitle: "Le dernier chemin", 
        text:"Vous entrez dans la forêt, l'ombre qui vous faisait peur est finalement éblouïs grâce à la Lumière! Le dernier boss Ombronomonstre est maintenant devant vous! Ombronomonstre vous lance une attaque!",
        img: "",
        options: [
            /*pewpewpew = */
            {
                text: "Vous sortez vos doight pistol et tirez pewpewpew!",
                action: "goToChapter('dead_pewpewpew')",
            },
    
            /*TheKnee = */
            {
                text: "La force sublime de Captain Falcon surgis de vous! FALCON KNEE!",
                action: "goToChapter('phase_deux')",
            },
        ],
    },

    phase_deux: {
        subtitle: "Phase deux", 
        text:"Vous avez blessé l'oeil droite d'Ombronomonstre! Il vous attaque de votre droite! Vous sentez la fin de l'histoire et tout à coup, vous entendez une voix dans votre tête: « I am thou, thou art I. Call upon my name, and release thy rage!» Une flemme en vous se réveil! Vous avez reçu le Persona:",
        img: "",
        options: [
            /*Izanagi = */
            {
            text: "MEGIDOLAON!",
            action: "goToChapter('final_attack')",
            },

            /*Orpheus = */
            {
            text: "AGIDYNE!",
            action: "goToChapter('final_attack')",
            },

            /*Arsene = */
            {
            text: "MAEIGAON!",
            action: "goToChapter('final_attack')",
            },
        ],
    },

    final_attack: {
        subtitle: "Last Surprise", 
        text:"Ombronomonstre est sérieusement blessé! Dans sa dernière tentative de vous éliminer, il charge un méga laser! C'est le tout pour le tout!",
        img: "",
        options: [
            /*Friendship = */
            {
                text: "Utilise Le pouvoir de l amitié. cent pourcent ça marche car le pouvoir de l amitié est imbattable",
                action: "goToChapter('dead_friendship')",
            },
    
            /*FusionWeebCeleste = */
            {
                text: "Naruto, Ichigo, Luffy et Son Goku apparaît et vous fusionnez pour créer l'ultime Weeb",
                action: "goToChapter('getsuga_gomu_rasen_ha')",
            },
        ],
    },

    getsuga_gomu_rasen_ha: {
        subtitle: "getsuga gomu rasen ha", 
        text:"En canalisant la force de Weeb, vous lancez l'attaque la plus puissante de l'univers et de ce fait, Ombronomonstre est mort! Le butin s'offre a vous!",
        img: "",
        options: [
            /*butin = */
            {
                text: "Vous avez fini. La récompense est maintenant à vous! Félicitation!",
                action: "goToChapter('good_ending')",
            },
        ],
    },
    
    good_ending: {
            subtitle: "Félicitation!", 
            text:"Merci d'avoir fini mon jeu et de pas avoir utilisé le pouvoir de l'amitier! Si vous l'avez choisi et c'est votre deuxième fois à jouer, parlez moi plus jamais. Merci.",
            img: "",
        },
    
};

function goToChapter(chapterName) {

    // const sub = document.querySelector(".mySubtitle");
    // sub.innerHTML = "fuck";
    
// -----------------------------document.querySelector("#myS").textContent = "poop";
// console.log(mySubtitle.innerHTML);
    // #3 - Toujours dans la même fonction, récupérez l’image de votre chapitre, 
    // composez une chaîne de caractères correspondant à une balise image 
    // contenant son URL et insérez là à la place de l’image actuelle.
    //---- so prends la taille de l'image de HxH et fait tes dessins a partir de cette taille------------//

/* 
h1 = titre = id > myTitle
p = text = id > myText
p2 = subtitle = id > mySubtitle
img = img
?bouton/button = action ?
*/

    const chapitre = chaptersObj[chapterName];

    document.querySelector('.mySubtitle').textContent = chapitre.subtitle;
    document.querySelector('.myText').textContent = chapitre.text;
    // ??? document.querySelector('.a').textContent = chapitre.action;???
    // document.querySelector('.myImg').textContent = chapitre.img;



    console.log(chapitre.subtitle);
    console.log(chapitre.text);
    console.log(chapitre.img);
    console.log(chapitre.action);
    // console.log(chapitre.options);

    const choix = ["MEGIDOLAON!", "AGIDYNE!", "MAEIGAON!"];

    for (let index = 0; index <=2; index++) {
    const bruh = choix[index];
    console.log(bruh);
}
  };


//--------STORY PROGRESSION----------//
//   gulag_island
//   entree_foret
//   waiting_tatakae
//   dance_battle
//   createur_lumiere
//   retour_foret
//   phase_deux
//   final_attack
//   getsuga_gomu_rasen_ha
//   good_ending

//-------BAD ENDS-----------//
// dead_grotte
// dead_foret
// dead_crane
// dead_dieu
// dead_zombie
// dead_pewpewpew
// dead_friendship