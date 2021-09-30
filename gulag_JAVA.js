const gulagventure = {
    subtitle: `Gulag Island`, 
    text:`L'aventure commence, vous arrivez enfin sur l'ile de Fortuna. "Gul: Enfin arrivé! Hé hé, on va être riche!". Trois choix s'offre a vous:`,
    img: ``,

    options: [
        Grotte = {
            text: `Vous décidez d'entrer dans la grotte`,
            action: `goToChapter('dead_grotte')`,
        },

        Foret = {
            text: `Vous décidez d'entrer dans la forêt`,
            action: `goToChapter('entree_foret')`,
        },

        Attendre = {
            text: `Attendre un passant`,
            action: `goToChapter('waiting_tatakae')`,
        }
    ]
};
//-----delete et garder le code du haut, changer entree_foret par dead_foret----------//
const decision = {
    subtitle: `entree_foret`, 
    text:`Un vent extrêmement froid vous passe par le dos. Vous vous demandez si c'est vraiment un bon choix...`,
    img: ``,

    options: [
        entre = {
            text: `Vous prenez votre courage a douze mains et entrer dans la forêt...`,
            action: `goToChapter('dead_foret')`,
        },

        retourne = {
            text: `Vous avez assez vu de film d'horreur pour savoir de ne pas entré dans les forêts.`,
            action: `goToChapter('Gulag_Island')`,
        },
    ]
};

const tatakae = {
    subtitle: `Waiting? Tatakae!`, 
    text:`Vous en avez marre d'attendre et decidez d'aller attaquer directement le créateur. Trois attaques sont offert a vous:`,
    img: ``,

    options: [
        SuperCoupDeBoule = {
            text: `Vous décidez d'entrer dans la grotte`,
            action: `goToChapter('dead_crane')`,
        },

        Invoquation = {
            text: `Vous invoquez Dieu`,
            action: `goToChapter('dead_dieu')`,
        },

        dance = {
            text: `Vous sortez des moves de ouf pour le vaincre`,
            action: `goToChapter('dance_battle')`,
        }
    ]
};

const dance = {
    subtitle: `dance_battle`, 
    text:`C'est le temps de bust-a-move!`,
    img: ``,

    options: [
        Thriller = {
            text: `Vous bustez les moves comme jamais avec une armée de zombies`,
            action: `goToChapter('dead_zombie')`,
        },

        SmoothCriminal = {
            text: `L'esprit de MJ vous envahis sortant les moves d'un smooth criminal`,
            action: `goToChapter('createur_lumiere')`,
        },
    ]
};

const lumiere = {
    subtitle: `createur_lumiere`, 
    text:`Le créateur est vaincu! Vous gagnez 133742069 EXP! Le Créateur vous donne la Lumière en guise de récompense!`,
    img: ``,

    options: [
        DirectionForet = {
            text: `armer de la Lumière, vous êtes maintenant prêt à affronter le dernier boss! Direction la foret!`,
            action: `goToChapter('retour_foret')`,
        },
    ]
};

const ombronomonstre = {
    subtitle: `retour_foret`, 
    text:`Vous entrez dans la forêt, l'ombre qui vous faisait peur est finalement éblouïs grâce à la Lumière! Le dernier boss Ombronomonstre est maintenant devant vous! Ombronomonstre vous lance une attaque!`,
    img: ``,

    options: [
        pewpewpew = {
            text: `Vous sortez vos doight pistol et tirez pewpewpew!`,
            action: `goToChapter('dead_pewpewpew')`,
        },

        TheKnee = {
            text: `La force sublime de Captain Falcon surgis de vous! FALCON KNEE!`,
            action: `goToChapter('phase_deux')`,
        },
    ]
};

const stage2 = {
    subtitle: `phase_deux`, 
    text:`Vous avez blessé l'oeil droite d'Ombronomonstre! Il vous attaque de votre droite! Vous sentez la fin de l'histoire et tout à coup, vous entendez une voix dans votre tête: « I am thou, thou art I. Call upon my name, and release thy rage!» Une flemme en vous se réveil! Vous avez reçu le Persona:`,
    img: ``,

    options: [
        Izanagi = {
            text: `MEGIDOLAON!`,
            action: `goToChapter('final_attack')`,
        },

        Orpheus = {
            text: `AGIDYNE`,
            action: `goToChapter('final_attack')`,
        },

        Arsene = {
            text: `MAEIGAON`,
            action: `goToChapter('final_attack')`,
        },
    ]
};

const final = {
    subtitle: `final_attack`, 
    text:`Ombronomonstre est sérieusement blessé! Dans sa dernière tentative de vous éliminer, il charge un méga laser! C'est le tout pour le tout!`,
    img: ``,

    options: [
        Friendship = {
            text: `Utilise Le pouvoir
            de l'amitié. 100% ça marche car le pouvoir de l'amitié est imbattable`,
            action: `goToChapter('dead_friendship')`,
        },

        FusionWeebCeleste = {
            text: `Naruto, Ichigo, Luffy et Son Goku apparaît et vous fusionnez pour créer l'ultime Weeb`,
            action: `goToChapter('getsuga_gomu_rasen_ha')`,
        },
    ]
};

const superattack = {
    subtitle: `getsuga_gomu_rasen_ha`, 
    text:`En canalisant la force de Weeb, vous lancez l'attaque la plus puissante de l'univers et de ce fait, Ombronomonstre est mort! Le butin s'offre a vous!`,
    img: ``,

    options: [
        butin = {
            text: `Vous avez fini. La récompense est maintenant à vous! Félicitation!`,
            action: `goToChapter('ending_fin)`,
        },
    ]
};

const fin = {
    subtitle: `ending_fin`, 
    text:`Merci d'avoir fini mon jeu et de pas avoir utilisé le pouvoir de l'amitier! Si vous l'avaez choisi et c'est votre deuxième fois à jouer, parlez moi plus jamais. Merci.`,
    img: ``,
};

// function goToChapter(chapterName) {
//     console.log(chapterName.subtitle);
//     console.log(chapterName.text);
//     console.log(chapterName.img);
//   }
  

const chapterObj = {
    Gulag_Island: gulagventure, //choix
    // dead_grotte: , //mort
    entree_foret: decision, // choix retour. delete si trop compliqué
    // dead_foret: ,  //mort
    waiting_tatakae: tatakae, //choix
    // dead_crane: , //mort
    // dead_dieu: ,  //mort
    dance_battle: dance, //choix
    // dead_zombie: ,  //mort
    createur_lumiere: lumiere, //event, retour a la foret
    retour_foret: ombronomonstre, //choix
    // dead_pewpewpew: , //mort
    phase_deux: stage2, //choix multiple menant au meme
    final_attack: final, // choix
    // dead_friendship: nakama, //mort
    getsuga_gomu_rasen_ha: superattack, //event
    ending_fin: fin,
}