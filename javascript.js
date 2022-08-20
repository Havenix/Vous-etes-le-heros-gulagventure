let gotLumiere = "";

function beatGod() {
  gotLumiere = true;
  localStorage.setItem("lumiere", gotLumiere);
  console.log(localStorage.getItem("lumiere"));
  goToChapter('retour_foret');
}
/*utilise ceci si jamais je retourne a l'idee de base et je met deux chemin different au boss.
tu vas devoir rajouter un chapitre menant a la foret et ensuite avoir l'option de si tu as la lumiere*/

// function killGod() {
//   gotLumiere = false;
//   localStorage.setItem("lumiere", gotLumiere);
//   console.log(localStorage.getItem("lumiere"));
//   goToChapter('dead_grotte');
// }
//-----------------------------------------------------------//

function pendingGod() {
  gotLumiere = false;
  localStorage.getItem("lumiere", gotLumiere);
  goToChapter('dead_grotte')
}

function gotLumi() {
  if (gotLumi == true) {
    goToChapter(`dead_grotto`);
  } else {
    goToChapter(`retour_foret`);
  }
}

function notLumi() {
  gotLumiere = true;
  goToChapter(`dead_grotto`);
}


function restart() {
  gotLumiere = false;
  goToChapter(`retour_foret`);
};

function reset() {
    gotLumiere = false;
    localStorage.clear();
    goToChapter(`gulag_island`);
  };
// let gotLumiere = false;

// function notLumi() {
//   gotLumiere = true;
//   goToChapter(`dead_grotto`);
// }

// function gotLumi() {
//   if (gotLumi == true) {
//     goToChapter(`dead_grotto`);
//   } else {
//     goToChapter(`retour_foret`);
//   }
// }

// function restart() {
//   gotLumiere = false;
//   goToChapter(`gulag_island`);
// };

// changer le text des options pour plus court
const chaptersObj = {
  gulag_island: {
    subtitle: "GULAG ISLAND",
    text: "L'aventure commence, vous arrivez enfin sur l'ile de Fortuna. Trois choix s'offre a vous:",
    // un gif marche masi pas video
    img: "assets/images/1_gulag.gif", //premier gif
    options: [
      /**Grotte = **/
      {
        text: "Entrer dans la grotte",
        action: "notLumi()",
      },
      /**Foret = **/
      {
        text: "Attendre un passant",
        action: "goToChapter('waiting')",
      },
      /**Attendre = **/
      {
        text: "Entrer dans la forêt",
        action: "goToChapter('entree_foret')",
      },
      {
        text: "Effacer data",
        action: "reset()",
      },
    ],
  },

  dead_grotto: {
    subtitle: "LE GROTTOMONSTRE VOUS BOUFFE",
    text: "Mioum!",
    // video: "assets/videos/bait.mp4",
    img: "assets/images/stare-confused.gif", //gif qui attend

    options: [
      /*fini attendre =*/
      {
        text: "why u do diss",
        action: "reset()",
      },
    ],
  },

  dead_foret: {
    subtitle: "RIPPERONIE",
    text: "Qui entre dans une forêt noir sans lumière?",
   
    img: "assets/images/stare-confused.gif", //gif qui attend

    options: [
      /*fini attendre =*/
      {
        text: "why u do diss",
        action: "reset()",
      },
    ],
  },

  dead_crane: {
    subtitle: "COUP DE BOULEEE",
    text: "Zidane a eu une pénalité oui mais toi tu crèves.",
    
    img: "assets/images/stare-confused.gif", //gif qui attend

    options: [
      /*fini attendre =*/
      {
        text: "why u do diss",
        action: "reset()",
      },
    ],
  },

  dead_dieu: {
    subtitle: "IMAGINEZ DÉFIER DIEU...",
    text: "Mais tu te prends pour qui?",
    
    img: "assets/images/stare-confused.gif", //gif qui attend

    options: [
      /*fini attendre =*/
      {
        text: "why u do diss",
        action: "reset()",
      },
    ],
  },

  dead_zombie: {
    subtitle: "THRILLERRRRR",
    text: "Il y a beaucoup de viande dans le corps humain vous savez? Assez juteux.",
    
    img: "assets/images/stare-confused.gif", //gif qui attend

    options: [
      /*fini attendre =*/
      {
        text: "why u do diss",
        action: "reset()",
      },
    ],
  },

  dead_pewpewpew: {
    subtitle: "BANG BANG BANG",
    text: "Avec tes doigts? Même Jeesay est plus intelligent que ça.",
    
    img: "assets/images/stare-confused.gif", //gif qui attend

    options: [
      /*fini attendre =*/
      {
        text: "why u do diss",
        action: "restart()",
      },
    ],
  },

  entree_foret: {
    subtitle: "DÉCISION",
    text: "Un vent extrêmement froid vous passe par le dos. Vous vous demandez si c'est vraiment un bon choix...",
    img: "assets/images/8_retour.png",

    options: [
      // entre:
      {
        text: "Press X to doubt",
        action: "goToChapter('gulag_island')",
      },
      // retourne:
      {
        text: "Prenez votre courage a douze mains...",
        action: "notLumi()",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  waiting: {
    subtitle: "WAITING?",
    text: "Vous attendez mais la ça commence a devenir long et personne semble venir.",
    img: "assets/images/2_wait.gif", //gif qui attend

    options: [
      /*fini attendre =*/
      {
        text: "ÇA SUFFIT LÀ LÀ! CRÉATEUR VIENS, ON VA SE BATTRE!",
        action: "goToChapter('tatakae')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  tatakae: {
    subtitle: "TATAKAE!",
    text: "Vous en avez marre d'attendre et decidez d'aller attaquer directement le créateur.",
    img: "assets/images/3_tuer.gif", // gif qui cours

    options: [
      /*running =*/
      {
        text: "Héro VS Le Créateur!",
        action: "goToChapter('vs_createur')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  vs_createur: {
    subtitle: "1er BOSS, LE CRÉATEUR!",
    text: "Le Créateur est maintenant devant vous! Stay determined! Trois attaques vous passe par la tête:",
    img: "assets/images/4_fght.gif", // gif du créateur stance jojo

    options: [
      /*dance =*/
      {
        text: "Dance battle",
        action: "goToChapter('dance_battle')",
      },

      /*coup de boule = */
      {
        text: "Coup de boule à la Zidane",
        action: "goToChapter('dead_crane')",
      },

      /*summon = */
      {
        text: "Invoquer Dieu",
        action: "goToChapter('dead_dieu')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  dance_battle: {
    subtitle: "SO YOU THING YOU CAN DANCE?!",
    text: "C'est le temps de bust-a-move!",
    img: "assets/images/5_danse.gif", //gif meme dance
    options: [
      /*Thriller = */
      {
        text: "Danser Thriller",
        action: "goToChapter('dead_zombie')",
      },

      /*SmoothCriminal = */
      {
        text: "Danser Smooth Criminal",
        action: "goToChapter('smooth')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  smooth: {
    subtitle: "SMOOTH CRIMINAL!",
    text: "HEE~ HEE~!",
    video: "assets/videos/6_smooth.mp4",
    img: "assets/images/cat.gif", //gif smooth criminal
    options: [
      /*dance criminal = */
      {
        text: "HEE~ HEE~ OW!",
        action: "goToChapter('win_lumiere')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  win_lumiere: {
    subtitle: "WINNER!",
    text: "Le créateur est vaincu! Vous gagnez 133742069 EXP! Le Créateur vous donne la Lumière en guise de récompense!",
    img: "assets/images/7_win.gif", //img createur ded gg easy money
    options: [
      /*DirectionForet = */
      {
        text: "Direction la foret",
        action: "gotLumi()",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  retour_foret: {
    subtitle: "RETOUR VERS LA FORÊT!",
    text: "Vous vous trouvez devant la forêt...",
    img: "assets/images/8_retour.png", // marche vers la foret undefined
    options: [
      /*pewpewpew = */
      {
        text: "Entrer dans la forêt",
        action: "goToChapter('enter')",
      },

      {
        text: "Vous n'avez pas de lumière",
        action: "notLumi()",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  enter: {
    subtitle: "DERNIER BOSS",
    text: "L'ombre qui vous faisait peur est finalement éblouïs grâce à la Lumière! Le dernier boss Ombronomonstre est maintenant devant vous!",
    img: "assets/images/9_entrer.png", // marche vers la foret undefined
    options: [
      /*pewpewpew = */
      {
        text: "Doight pistol! Pewpewpew!",
        action: "goToChapter('dead_pewpewpew')",
      },

      /*TheKnee = */
      {
        text: "FALCON KNEE!",
        action: "goToChapter('falcon_knee')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  falcon_knee: {
    subtitle: "HYESZ",
    text: "La force sublime de Captain Falcon surgis de vous!",
    img: "assets/images/10_knee.gif", // FALCON KNEE ANIMATED
    options: [
      {
        text: "GAME?",
        action: "goToChapter('phase_deux')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  phase_deux: {
    subtitle: "PHASE DEUX!",
    text: "Vous sentez la fin de l'histoire et tout à coup, vous entendez une voix dans votre tête: « I am thou, thou art I. Call upon my name, and release thy rage!» Une flemme en vous se réveil! Vous avez reçu le Persona:",
    img: "assets/images/jok.gif",
    options: [
      /*Izanagi = */
      {
        text: "IZANAGI, MEGIDOLAON!",
        action: "goToChapter('izanagi')",
      },

      /*Orpheus = */
      {
        text: "ORPHEUS, AGIDYNE!",
        action: "goToChapter('orpheus')",
      },

      /*Arsene = */
      {
        text: "ARSENE, MAEIGAON!",
        action: "goToChapter('arsene')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  izanagi: {
    subtitle: "PERSONA!",
    text: "Yuu Narukami est fière de vous en ce moment",
    img: "assets/images/11_izanagi.gif", //gif attaque izanagi
    options: [
      /*Izanagi = */
      {
        text: "...",
        action: "goToChapter('final_attack')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  orpheus: {
    subtitle: "PERSONA!",
    text: "Makoto Yuki est fière de vous en ce moment",
    img: "assets/images/12_orph.gif", //gif attaque orpheus
    options: [
      /*Orpheus = */
      {
        text: "...",
        action: "goToChapter('final_attack')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  arsene: {
    subtitle: "PERSONA!",
    text: "Ren Amamiya est fière de vous en ce moment",
    img: "assets/images/13_arsene.gif", //gif attaque arsene
    options: [
      /*Arsene = */
      {
        text: "...",
        action: "goToChapter('final_attack')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  final_attack: {
    subtitle: "LAST SURPRISE",
    text: "Ombronomonstre est sérieusement blessé! Dans sa dernière tentative de vous éliminer, il charge un méga laser! C'est le tout pour le tout!",
    img: "assets/images/15_laser.gif",
    options: [
      /*Friendship = */
      {
        text: "Pouvoir de l'amitié, 100% ça marche",
        action: "goToChapter('dead_friendship')",
      },

      /*FusionWeebCeleste = */
      {
        text: "Fusionnez avec Luffy, Goku et Ichigo",
        action: "goToChapter('getsuga_gomu_rasen_ha')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  dead_friendship: {
    subtitle: "BRUH",
    text: "bruh",
    video: "assets/videos/BAIT.mp4",
    img: "assets/images/jok.gif", //gif attaque arsene
    options: [
      {
        text: "bruh",
        action: "reset()",
      },
    ],
  },

  getsuga_gomu_rasen_ha: {
    subtitle: "WEEB POWER",
    text: "En canalisant la force de Weeb, vous lancez l'attaque la plus puissante de l'univers et de ce fait Ombronomonstre est vaincu!",
    img: "assets/images/16_dbp.gif",
    options: [
      /*butin = */
      {
        text: "Vous avez fini. La récompense est maintenant à vous! Félicitation!",
        action: "goToChapter('good_ending')",
      },
      {
        text: "Effacer data",
        action: "reset()"
      },
    ],
  },

  good_ending: {
    subtitle: "FÉLICITATION!",
    text: "Merci d'avoir fini mon jeu et de pas avoir utilisé le pouvoir de l'amitier! Si vous l'avez choisi et c'est votre deuxième fois à jouer, parlez moi plus jamais. Merci.",
    img: "assets/images/yes.gif",
    options: [
      /*butin = */
      {
        text: "Recommencer?",
        action: "reset()"
      },
    ],
  },
};

// let gotLumiere = false;

// function bruh() {
//     gotLumiere = true
//         console.log(goToChapter)
// };


/*----- FUNCTIONS ET GOTOCHAPTER-----*/
let song = new Audio('assets/sons/persona5.mp3');
let son = document.querySelector('#son')
let choixSon = true;


function goToChapter(chapterName) {

  const chapitre = chaptersObj[chapterName];
  console.log(chapitre);
  document.querySelector(".mySubtitle").textContent = chapitre.subtitle;
  document.querySelector(".myText").textContent = chapitre.text;
  let video = document.querySelector('.img');
  let choix = document.querySelector(".bouton");
  let optionsArr = chapitre.options;
  console.log(optionsArr[length].action);
  console.log(optionsArr.length);
  
  if (son.checked == false) {
    choixSon = false
  } else {
    choixSon = true;
  }

  if (choixSon == true) {
    song.currentTime = 0
    song.play();
  } /*else if (choixSon == false){
    song.currentTime = 0;
    song.pause();
  }*/
  
  let body = document.querySelector('body');
  let game = document.querySelector('.game')
  // let p2 = document.querySelector('p2');
  // let h1 = document.querySelector('h1');
  body.className = chapterName;
  
  if (body.classList.contains('dead_grotto')===true || body.classList.contains('dead_foret')===true || 
    body.classList.contains('dead_crane')===true || body.classList.contains('dead_dieu')===true || body.classList.contains('dead_zombie')===true
    || body.classList.contains('dead_pewpewpew')===true) {
    body.style.backgroundImage = "url('https://i.pinimg.com/originals/35/ed/01/35ed01cda44e18249cdf60d89d83443e.jpg')";
    game.style.backgroundColor = "#2b2118";
    // p2.style.backgroundColor = "white";
    // h1.style.backgroundColor = "white";
    game.style.borderColor = "white";
  } else {
    body.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/013/947/749/original/christophe-mangot-stars-persona5-gif-small.gif?1541779237')";
    game.style.backgroundColor = "#AD0000";
  }

  /*-----------------MARCHE MAIS PAS ÇA----------------------*/
  // son.addEventListener('change', () => {
  //   if (son.checked == false) {
  //      song.pause();
  //      song.currentTime = 0;
  //      console.log("allo")
  //   } else {
  //     song.play()
  //     currentTime = 0;
  //     console.log("ao")
  
  //   }
  // })

  let element = "";

  for (let index = 0; index < optionsArr.length; index++) {
    console.log(optionsArr[index].text);
    element += `<button onclick="${optionsArr[index].action}">${optionsArr[index].text}</button>`;
  }
  choix.innerHTML = element;
  
  // MIRVEL TU DOIS COMPRENDRE PLUS CECI PLEASE TE PLAIT MUCHO IMPORTANTE DESU
  let vidElement = "";
// si la video n'est pas undefined, cherche la video et joue la video
  if (chapitre.video != undefined) {
    vidElement += `<video src= "${chapitre.video}" autoplay></video>`;

    video.innerHTML = vidElement;
// si la video est undefined, ne vas pas chercher la video et ne joue pas la video
  } else { 
        vidElement += `<img src= "${chapitre.img}"></img>`;

        video.innerHTML = vidElement;
    }

    localStorage.setItem("chapter", chapterName);
}

if (localStorage.getItem("chapter") != undefined) {
  const chapter = localStorage.getItem("chapter");
  goToChapter(chapter);
} else{
  goToChapter('gulag_island');
};



/*-----------------------CHOSES UTILE ET INUTILE-----------------------*/
// https://www.youtube.com/watch?v=J85jV37CsYE&list=PLWL3FzHaRRMkQqUhks8Y9l35rqY_kKCto
// https://www.youtube.com/watch?v=D2_r4q2imnQ&list=PLWL3FzHaRRMkQqUhks8Y9l35rqY_kKCto&index=5
// https://www.youtube.com/watch?v=OMm1RLF32ig&list=PLWL3FzHaRRMkQqUhks8Y9l35rqY_kKCto&index=15
// https://www.youtube.com/watch?v=_vBVGjFdwk4&list=PLR5CygEnLHSLjoPpVXGoC3GyOo2hd3QsY
// https://www.youtube.com/watch?v=KyPbLqK1un4&list=PLR5CygEnLHSLjoPpVXGoC3GyOo2hd3QsY&index=10
// https://www.youtube.com/watch?v=uZbluITLgyg&list=PLR5CygEnLHSLjoPpVXGoC3GyOo2hd3QsY&index=15
// https://www.youtube.com/watch?v=3w-2gUSus34&list=PLR5CygEnLHSLjoPpVXGoC3GyOo2hd3QsY&index=23
// https://www.youtube.com/watch?v=0lhhrUuw2N8&list=PLR5CygEnLHSLjoPpVXGoC3GyOo2hd3QsY&index=26
// https://www.youtube.com/watch?v=J85jV37CsYE&list=PLR5CygEnLHSLjoPpVXGoC3GyOo2hd3QsY&index=43
// https://www.youtube.com/watch?v=82DJUDS_S7Y&list=PLR5CygEnLHSLjoPpVXGoC3GyOo2hd3QsY&index=46
// https://www.youtube.com/watch?v=U1UtRnGn5hc&list=PLR5CygEnLHSLjoPpVXGoC3GyOo2hd3QsY&index=49
// 
// 

// const sub = document.querySelector(".mySubtitle");
// sub.innerHTML = "fuck"; // Ok

// -----------------------------document.querySelector("#myS").textContent = "poop"; // Well, si ça t'aide a déboguer
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
// //     let optionsArr = chapitre.options;
// //     let button = document.querySelectorAll('.a','.b','.c');
// //     console.log(optionsArr[length].action);

// //     for (let index = 0; index <= optionsArr.length; index++) {
// //     button[length].innerHTML = `${optionsArr[length].text}`;
// //     const choix = optionsArr[index];
// //     console.log(choix);
// // }

//---------------maybe idk---------------------------//
// let optionsArr = chapitre.options;
// let button = document.querySelectorAll('.a');
// let button2 = document.querySelectorAll('.b');
// let button3 = document.querySelectorAll('.c');
// console.log(optionsArr[0].action);

// for (let index = 0; index <= optionsArr.length-1; index++) {
// button[index].innerHTML = `${optionsArr[0].text}`;
// button2[index].innerHTML = `${optionsArr[1].text}`;
// button3[index].innerHTML = `${optionsArr[2].text}`;
// // Y I K E S
// const choix = optionsArr[index];
// console.log(choix);
// }
//---------------------------------------------------------------//

// console.log(chapitre.subtitle);
// console.log(chapitre.text);
// console.log(chapitre.img);
// console.log(chapitre.action);

//------boucle-----------//
//     let optionsArr = chapitre.options;
//     let button = document.querySelectorAll('.bouton');
//     console.log(optionsArr[length].action);

//     for (let index = 0; index <= optionsArr.length-1; index++) {
//     button[length].innerHTML = `<button>${optionsArr[length].text}</button>`;

//     console.log();
// }

//   };

/*--------STORY PROGRESSION----------*/
// --------------------------Add the new options----------------------//

//   gulag_island  ---------------------------DREW-|-NOT ANIMATED-|-NOT COLORED
//   entree_foret
//   waiting       ---------------------------DREW-|-NOT ANIMATED-|-NOT COLORED
//   tatakae (aller tuer le dessinateur)------DREW-|-NOT ANIMATED-|-NOT COLORED
//   1st_boss_screen (fight) -----------------DREW-|-NOT ANIMATED-|-NOT COLORED
//   dance_battle ----------------------------DREW-|-NOT ANIMATED-|-NOT COLORED
//   smooth_criminal -------------------------DREW-|-NOT ANIMATED-|-NOT COLORED
//   win_lumiere -----------------------------DREW (NO NEED TO ANIMATE IDK)-|-NOT COLORED
//   retour_foret ----------------------------IDK IF THIS IS STANDARD
//   phase_deux ------------------------------
//   persona ---------------------------------(persona attack)
//   final_attack ----------------------------
//   getsuga_gomu_rasen_ha -------------------(attack)
//   ombro_dead ------------------------------(win)
//   good_ending -----------------------------(end)

//-------BAD ENDS-----------//
// dead_grotte
// dead_foret
// dead_crane
// dead_dieu
// dead_zombie
// dead_pewpewpew
// dead_friendship