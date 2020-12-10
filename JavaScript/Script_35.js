//fonction rouge
function h1_rouge(){
      let mon_titre = document.getElementById("couleur")
      mon_titre.className = "red"
}
//fonction verte
function h1_vert(){
      let mon_titre = document.getElementById("couleur")
      mon_titre.className = "green"
}
function couleurTitre(){
      let document.getElementById("couleur")
      if (mon_titre.className == "green"){
          mon_titre.classList.remove("green")
          mon_titre.classList.toggle("red")
{else if (mon_titre.className == "red"){
          mon_titre.classList.remove("red")
          mon_titre.classList.toggle("red")
      }



// Exercice 35 optimisation David

// Version 1
function texteRed()
{
    let titre1 = document.getElementById("mon_titre");
    titre1.className = "red";
}

function texteGreen()
{
    let titre1 = document.getElementById("mon_titre");
    titre1.className = "green";
}

// Version 2 (optimisée)
function maFonction(color){
    let titre1 = document.getElementById("mon_titre");
    if(color == "red"){
        titre1.className = "red";
    } else if (color == "green"){
        titre1.className = "green";
    }
}

// Version 3 (ultra optimisée)
function maFonction(color){
    document.getElementById("mon_titre").className = color
}

// Indiquer en paramètre (dans la parenthèse) la classe de la couleur <p onclick="maFonction('red')">mettre le h1 en rouge</p>
