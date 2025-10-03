let output = document.querySelector(".personen");

fetch('./birthday.json')
.then((response) => response.json())
.then((personen) => {
    for(let persoon of personen){
    output.innerHTML += `
    <h2> ${persoon.naam}</h2>
    <p>  ${persoon.naam}</p>
    <p> ${persoon.leeftijd}
   <img src="${persoon.afbeelding}">



    `;




}
});