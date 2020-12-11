function BoutonSuivant(){
    let AfficheDivJaune=document.getElementById("divJaune")
    let AfficheDivBleue=document.getElementById("divBleue")
    let AfficheDivRouge=document.getElementById("divRouge")

    if(AfficheDivJaune.style.display=='' ||AfficheDivJaune.style.display=="inherit"){
        AfficheDivBleue.style.display="inherit"
        AfficheDivRouge.style.display="none"
        AfficheDivJaune.style.display="none"

    }
    else if (AfficheDivBleue.style.display=='inherit'){
        AfficheDivBleue.style.display="none"
        AfficheDivRouge.style.display="inherit"
        AfficheDivJaune.style.display="none"
    }
    else {
        AfficheDivBleue.style.display="none"
        AfficheDivRouge.style.display="none"
        AfficheDivJaune.style.display="inherit"
    }

}
