console.log('JS OK');

// 1- Chiedere quanti km vuole percorrere l'utente
// 2- Chiedere l'eta' dell'utente 
// 3- Calcolare costo del biglietto
// 4- Applicare sconto del 20% per i minorenni
// 5- Applicare sconto del 40% per i over 65
// 6- calcolare costo biglietto
// 7- risulato con massimo 2 decimale

// step 1 - 2
const km = parseInt(prompt('Quanti km devi percorrere?', '93'))
const ageUser = parseInt(prompt('Quanti anni hai?', '25'))

console.log(km + ' km da percorrere', ageUser + ' eta dell utente')

const ticket = (km * 0.21).toFixed(2)
console.log(ticket)

