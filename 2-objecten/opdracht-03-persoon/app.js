// Stap 1
const berkan = {
    naam: 'berkan',
    leeftijd: '17',
    geboortedatum: '10 december',
    geslacht: 'man',
    status: 'weet ik niet zeker',
    hobbys: ["lezen", "tekenen", "phonk luisteren", "sigma zijn"],
    changeName: function(name) {
       this.naam = name
    },
    changeName: function(staatus) {
       this.status = staatus
    },
    addHobby: function(hobby) {
    this.hobbys.push(hobby);
}


}
berkan.addHobby('lopen')
berkan.changeName('rafiq')
berkan.changeName('levend')

let output = document.querySelector('.output');

output.innerHTML = `
  <h1>leeftijd van berkan is ${berkan.naam}</h1>
   <p>leeftijd: ${berkan.leeftijd}</p>
  <p>geboortedatum: ${berkan.geboortedatum}</p>
  <p>Geslacht: ${berkan.geslacht}</p>
   <p>status: ${berkan.status}</p>
    <p>hobby's: ${berkan.hobbys}</p>
`;


// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:

// Het object moet ook de volgende methods bevatten:



//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.

// Gebruik geen arrow function in een object!