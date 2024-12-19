const colors = ['blue', 'red', 'yellow', 'green', 'pink', 'black', 'white', 'purple'];
const secret_code = ['blue', 'blue', 'yellow', 'green'];

// Etape 4 

// random_colors = Math.floor(Math.random() * colors.length * 4);
// console.log(random_colors)


// Verifie que le proposition est cohérente
function check_proposal(proposal) {
  for (let i = 0; i < proposal.length; i++) {
    if (colors.indexOf(proposal[i]) === -1) {
      return false;
    }
  }
  return true; 
}
// Compare la proposition avec le code secret
function compare_proposal(proposal) {
  let correct_color_and_position = 0;
  let correct_color_wrong_position = 0;
  for (let i = 0; i < 4; i++) {
    if (proposal[i] === secret_code[i]) {
      correct_color_and_position++; 
    } else if (secret_code.includes(proposal[i])) {
      correct_color_wrong_position++; 
    }
  }
  return [correct_color_and_position,correct_color_wrong_position]; 
}
// Gestion du jeu et nombre de tour
function game() {
  let attempts = 0;
  let game_win = false;
  
  while (attempts < 12 && !game_win) {
    let proposal = prompt("Choisir 4 couleurs parmit blue, red, yellow, green, pink, black, white, purple (séparées par un espace) :").split(' ');
    if (!check_proposal(proposal)) {
      console.log("Choix de couleur incorrect(voir liste : blue, red, yellow, green, pink, black, white, purple)");
      continue; 
    }

    attempts++; 
    let [correct_color_and_position, correct_color_wrong_position] = compare_proposal(proposal); 

    if (correct_color_and_position === 4) {
      game_win = true; 
      console.log("Félicitations, combinaison secrete trouvé !");
    } else {
      console.log(`${correct_color_and_position} couleur(s) correct et bonne position et ${correct_color_wrong_position} couleur(s) correct mais mauvaise position.`);
    }
    }

    if (!game_win) {
    console.log("Dommage, vous avez épuisé vos 12 essais !");
    }
}
game();



