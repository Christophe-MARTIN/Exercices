let divS = document.getElementsByTagName('div')
console.log(`il y a `+ divS.length + ` divs dans le script qui contiennent lorem`)

for (i = 0; i<divS.length; i++){
    let cellule = divS[i]
    console.log(cellule.innerText)
}
//console.log(divS[0].innerText) recupérattion de la 1ere case

let divJaunes = document.getElementsByClassName(`b_yellow`)
console.log(`il y a ` + divJaunes.length + ` div jaunes dans le script`)

for (i=0 ; i<divJaunes ; i++){
    let cellule = divS[i]
    console.log(cellule.innerText)
}

let divS3 = document.querySelector(`#container .b_yellow`)
console.log(`Voici le contenu de l'element identifié par le selecteur #container .b_yellow ` + divS3.innerText)


let divS4 = document.querySelectorAll(`#container .b_yellow`);
console.log(`il y a ` + divS4.length + ` balises dans le script qui contiennent #container b_yellow`)

for (i=0 ; i<divS4.length ; i++){
    let cellule = divS[i]
    console.log(cellule.innerText)
}
