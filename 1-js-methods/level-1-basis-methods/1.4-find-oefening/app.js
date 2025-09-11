// Opdracht 1.4: Find Oefening
console.log('🚀 Opdracht 1.4: Find Oefening');

const getallen = [12, 45, 67, 23, 89, 34];
console.log('Getallen array:', getallen);

// TODO: Zoek het eerste getal groter dan 50
const gevondenGetal = getallen.find(getal => getal > 50);

console.log('Eerste getal > 50:', gevondenGetal);

// TODO: Zoek de index van het eerste getal groter dan 5
const indexGroteGetal = getallen.findIndex(getal => getal > 50);
console.log(indexGroteGetal);

console.log('Index van eerste getal > 50:', indexGroteGetal
);