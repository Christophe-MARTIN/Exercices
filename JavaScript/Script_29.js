function chiffre(){

    a = prompt("entrer un chiffre");
    b = prompt("entrer un 2eme chiffre");

    if (a < b) {
        alert(b + " est plus grand que " + a)
    }else if (a > b) {
        alert(a + " est plus grand que " + b)
    }else {
        alert("les 2 chiffres son egaux")
  }
}
chiffre();
