// Opdracht 3.4: Email Validatie
console.log('🚀 Opdracht 3.4: Email Validatie');

function valideerEmail(email) {
    const schoonEmail = email.trim().toLowerCase();

    if (!schoonEmail.includes('@')) return false;
    if (schoonEmail.includes(' ')) return false;

    const geldigeEindes = ['.com', '.nl', '.org'];
    return geldigeEindes.some(einde => schoonEmail.endsWith(einde));
}

// Test de functie
const testEmails = ['jan@test.com', 'marie@voorbeeld.nl', 'fout@test.be', 'fout email@test.com'];
testEmails.forEach(email => {
    console.log(`${email}: ${valideerEmail(email)}`);
});