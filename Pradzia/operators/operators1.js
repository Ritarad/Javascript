let skaicius1 = 12;
let skaicius2 = 8;
let skaicius3 = 15;

let didziausias = Math.max(skaicius1, skaicius2, skaicius3);
if (skaicius1 > skaicius2 && skaicius1 > skaicius3) {
  console.log('skaicius1 yra didziausias');
} else if (skaicius2 > skaicius1 && skaicius2 > skaicius3) {
  console.log('skaicius2 yra didziausias');
} else if (skaicius3 > skaicius1 && skaicius3 > skaicius2) {
  console.log('skaicius3 yra didziausias');
}
console.log('Didziausias skaicius:', didziausias);

let skaicius4 = 13;
let skaicius5 = 7;
let skaicius6 = 20;

let maziausias = Math.min(skaicius4, skaicius5, skaicius6);

console.log('Maziausias skaicius:', maziausias);

//Egzaminu vidurkis

let egz1 = 2;
let egz2 = 7;
let egz3 = 2;
let vidurkis = (egz1 + egz2 + egz3) / 3;
if (vidurkis >= 8 && vidurkis <= 10) {
  console.log('vidurkis 8-10');
} else if (vidurkis >= 5 && vidurkis < 8) {
  console.log('vidurkis 5-8');
} else if (vidurkis < 5) {
  console.log('neislaikyta');
}
//
console.log('===================================');

let nr1 = 0;
let nr2 = 5;
if (nr1 > nr2 || nr1 === 0) {
  console.log('pirmas skaičius yra didesnis už antrąjį arba yra lygus 0');
}
if (nr2 > nr1 || nr2 === 5) {
  console.log('antras skaičius yra didesnis už pirmąjį arba yra lygus 5');
}
if (nr1 > nr2 && nr1 === 20) {
  console.log('pirmas skaičius yra didesnis už antrąjį ir yra lygus 20');
}
if (nr2 > nr1 && nr2 < 100) {
  console.log('antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100');
}

//=================

let darboValandos = 8;
let kepaluKiekisPerValanda = 15;
let kiekDarbuotojųTuriKepykla = 5;
let vienoKepaloSavikaina = 0.79;
let vienoKepaloPardavimoKaina = 1.5;
let uzsakymaiKiek = 40;

let kepiniai =
  darboValandos * kepaluKiekisPerValand * kiekDarbuotojųTuriKepykla;

console.log('kepalu skaicius');

let savikaina = vienoKepaloPardavimoKaina / vienoKepaloSavikaina;
console.log('savikaina');
