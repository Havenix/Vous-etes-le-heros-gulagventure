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
    text: "Your journey starts, you finally arrive at Fortuna's Island. Three paths are open to you:",
    // un gif marche masi pas video
    img: "assets/images/1_gulag.gif", //premier gif
    options: [
      /**Grotte = **/
      {
        text: "Enter the cave",
        action: "notLumi()",
      },
      /**Foret = **/
      {
        text: "Wait for someone to pass",
        action: "goToChapter('waiting')",
      },
      /**Attendre = **/
      {
        text: "Enter the forest",
        action: "goToChapter('entree_foret')",
      },
      {
        text: "Erase data",
        action: "reset()",
      },
    ],
  },

  dead_grotto: {
    subtitle: "THE GROTTOMONSTER EATS YOU",
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
    text: "Who enters a dark forest with no light?",
   
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
    subtitle: "HEADBUUUUUTT",
    text: "Zidane got a penality but not you, you die.",
    
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
    subtitle: "IMAGINE DEFYING GOD...",
    text: "Who do you think you are?",
    
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
    text: "There's a lot of meat in the human body you know? Juicy meats.",
    
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
    text: "With your figners? This isn't some anime.",
    
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
    subtitle: "DECISION",
    text: "A cold breeze brushes your back. You are now wondering if it was really a good choice...",
    img: "assets/images/8_retour.png",

    options: [
      // entre:
      {
        text: "Press X to doubt",
        action: "goToChapter('gulag_island')",
      },
      // retourne:
      {
        text: "Take your courage and go forth...",
        action: "notLumi()",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  waiting: {
    subtitle: "WAITING?",
    text: "You choose to wait but nobody comes, it's starting to be late.",
    img: "assets/images/2_wait.gif", //gif qui attend

    options: [
      /*fini attendre =*/
      {
        text: "IT'S ENOUGH! CREATOR! COME FIGHT ME!",
        action: "goToChapter('tatakae')",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  tatakae: {
    subtitle: "TATAKAE!",
    text: "Tired of waiting, you decide to take on the Creator of this game.",
    img: "assets/images/3_tuer.gif", // gif qui cours

    options: [
      /*running =*/
      {
        text: "Hero VS The Creator!",
        action: "goToChapter('vs_createur')",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  vs_createur: {
    subtitle: "1st Boss, THE CREATOR!",
    text: "The Creator is now facing you! Stay determined! Three attacks comes to you mind:",
    img: "assets/images/4_fght.gif", // gif du créateur stance jojo

    options: [
      /*dance =*/
      {
        text: "Dance battle",
        action: "goToChapter('dance_battle')",
      },

      /*coup de boule = */
      {
        text: "Headbutt à la Zidane",
        action: "goToChapter('dead_crane')",
      },

      /*summon = */
      {
        text: "Invoque God",
        action: "goToChapter('dead_dieu')",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  dance_battle: {
    subtitle: "SO YOU THING YOU CAN DANCE?!",
    text: "It's time to bust-a-move!",
    img: "assets/images/5_danse.gif", //gif meme dance
    options: [
      /*Thriller = */
      {
        text: "Thriller dance",
        action: "goToChapter('dead_zombie')",
      },

      /*SmoothCriminal = */
      {
        text: "Smooth Criminal dance",
        action: "goToChapter('smooth')",
      },
      {
        text: "Erase data",
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
    text: "The Creator is defeated! You obtain 133742069 EXP! The Creator gives you the Light!",
    img: "assets/images/7_win.gif", //img createur ded gg easy money
    options: [
      /*DirectionForet = */
      {
        text: "Head to the forest",
        action: "gotLumi()",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  retour_foret: {
    subtitle: "RETURN TO THE FOREST!",
    text: "You are standing in front of the forest...",
    img: "assets/images/8_retour.png", // marche vers la foret undefined
    options: [
      /*pewpewpew = */
      {
        text: "Enter the forest",
        action: "goToChapter('enter')",
      },

      {
        text: "You don't have the Light",
        action: "notLumi()",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  enter: {
    subtitle: "LAST BOSS",
    text: "The shadow that was spooking you is now gone, obliterated by the Light! The last boss Ombronomonster has appeared!",
    img: "assets/images/9_entrer.png", // marche vers la foret undefined
    options: [
      /*pewpewpew = */
      {
        text: "Finger Gun! Pewpewpew!",
        action: "goToChapter('dead_pewpewpew')",
      },

      /*TheKnee = */
      {
        text: "FALCON KNEE!",
        action: "goToChapter('falcon_knee')",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  falcon_knee: {
    subtitle: "HYESZ",
    text: "The sublime force of Captain Falcon arises from you!",
    img: "assets/images/10_knee.gif", // FALCON KNEE ANIMATED
    options: [
      {
        text: "GAME?",
        action: "goToChapter('phase_deux')",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  phase_deux: {
    subtitle: "PHASE TWO!",
    text: "You feel the end of the story, suddenly you hear a voice in your head: « I am thou, thou art I. Call upon my name, and release thy rage!» Une flemme en vous se réveil! Vous avez reçu le Persona:",
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
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  izanagi: {
    subtitle: "PERSONA!",
    text: "Yuu Narukami is proud of you ",
    img: "assets/images/11_izanagi.gif", //gif attaque izanagi
    options: [
      /*Izanagi = */
      {
        text: "...",
        action: "goToChapter('final_attack')",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  orpheus: {
    subtitle: "PERSONA!",
    text: "Makoto Yuki is proud of you",
    img: "assets/images/12_orph.gif", //gif attaque orpheus
    options: [
      /*Orpheus = */
      {
        text: "...",
        action: "goToChapter('final_attack')",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  arsene: {
    subtitle: "PERSONA!",
    text: "Ren Amamiya is proud of you",
    img: "assets/images/13_arsene.gif", //gif attaque arsene
    options: [
      /*Arsene = */
      {
        text: "...",
        action: "goToChapter('final_attack')",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  final_attack: {
    subtitle: "LAST SURPRISE",
    text: "Ombronomonster is seriously injured! In his last attempt to take you out, he charges up a mega laser! It's all or nothing!",
    img: "assets/images/15_laser.gif",
    options: [
      /*Friendship = */
      {
        text: "Friendship Power, 100% it works",
        action: "goToChapter('dead_friendship')",
      },

      /*FusionWeebCeleste = */
      {
        text: "Fuse with Luffy, Goku and Ichigo",
        action: "goToChapter('getsuga_gomu_rasen_ha')",
      },
      {
        text: "Erase data",
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
    text: "By channeling your inner Weeb, you launch the most powerful attack in the universe and thus Ombronomonster is defeated!",
    img: "assets/images/16_dbp.gif",
    options: [
      /*butin = */
      {
        text: "Mission complete! The reward is now yours! Congratulation!",
        action: "goToChapter('good_ending')",
      },
      {
        text: "Erase data",
        action: "reset()"
      },
    ],
  },

  good_ending: {
    subtitle: "CONGRATULATION!",
    text: "Thank you for playing my game and not using the power of friendship! If you chose it and it's your second time playing, never talk to me ever again. Thanks.",
    img: "assets/images/yes.gif",
    options: [
      /*butin = */
      {
        text: "Restart?",
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