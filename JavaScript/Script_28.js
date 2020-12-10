number = prompt("écrit un chiffre entre 1à et 20")

while(number>10 && number<20){

  if(number<10){
        alerte("Entrer un chiffre plus grand")
  }
  else if(number>20){
        alert("Entrer un chiffre plus petit")
  }
  number = prompt("écrit un chiffre entre 1à et 20")
}
alert("Bravo! Vous avez réussi à trouver un nombre compris entre 10 et 20")
