// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.
const boek = {
    titel: 'bobob',
    auteur: 'Lukasz',
    uitgeverij: 'rafiq',
    jaar: '1984',
    verkocht: '2',
    prijs: '206',
}   
// Het object moet de volgende properties bevatten:

//     Titel: de titel van het boek (string)
//     Auteur: de auteur van het boek (string)
//     Uitgeverij: de uitgeverij van het boek (string)
//     Jaar: het jaar van publicatie van het boek (number)
//     Verkocht: aantal verkochten exemplaren (number)
//     Prijs: prijs van het boek (string)

let output = document.querySelector('.output');


output.innerHTML = `
  <h1>Naam van het boek is ${boek.titel}</h1>
  <p>titel: ${boek.titel}</p>
  <p>uitgeverij: ${boek.uitgeverij}</p>
  <p>jaar: ${boek.jaar}<p>
  <p>verkocht:${boek.verkocht}</p>
  <p>prijs:${boek.prijs}</p> 

`