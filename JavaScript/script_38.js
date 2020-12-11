function BoutonSuivant(){
    let AfficheDivimg1=document.getElementById("divimg1")
    let AfficheDivimg2=document.getElementById("divimg2")
    let AfficheDivimg3=document.getElementById("divimg3")

    if(AfficheDivimg1.style.display=='' || AfficheDivimg1.style.display=="inherit"){
        AfficheDivimg1.style.display="none"
        AfficheDivimg2.style.display="inherit"
        AfficheDivimg3.style.display="none"

    }
    else if (AfficheDivimg2.style.display=='inherit'){
        AfficheDivimg1.style.display="none"
        AfficheDivimg2.style.display="none"
        AfficheDivimg3.style.display="inherit"
    }
    else {
        AfficheDivimg1.style.display="inherit"
        AfficheDivimg2.style.display="none"
        AfficheDivimg3.style.display="none"
    }

}
