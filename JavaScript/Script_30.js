alert("Voulez-vous convertir des degrés Celcius en degrés Fahrenheit")
let temperature = prompt("Entrez votre température en degrés Celcius")

function convertir(temperature){
    return (9*temperature + (32 * 5))/5
}
alert(convertir(temperature))
