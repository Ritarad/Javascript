// let studentas = {
//   vardas: 'Tomas',
//   pavarde: 'Tulas',
//   amzius: 20,
//   ugis: 179,
//   kursas: 3,
//   mokykla: 'VDU',
// };
// console.log(studentas);
// console.log(studentas.vardas);
// console.log(studentas.amzius);
// console.log(studentas.mokykla);

//console.log(================2 uzduotis);

// let filmas = {
//   pavadinimas: 'Titanic',
//   režisierius: 'Johns',
//   biudžetas: 10000000,
//   kiekuždirbopinigų: 25000000,
//   zanras: 'tragedija',
//   trukme: 120,
//   metai: 2005,
//   aktoriai: ['Di Caprio', 'Winslet', 'Zeinas'],
// };
// console.log(' pavadinimas:', filmas.pavadinimas);
// console.log('režisierius:', filmas.režisierius);
// console.log('biudžetas:', filmas.biudžetas);
// console.log('kiekuždirbopinigų:', filmas.kiekuždirbopinigų);
// console.log('zanras:', filmas.zanras);
// console.log('trukme:', filmas.trukme);
// console.log('metai:', filmas.metai);
// console.log('aktoriai:', filmas.aktoriai);
// //pelnas
// let pelnas = filmas.kiekuždirbopinigų - filmas.biudžetas;
// console.log('pelnas', pelnas);
// let aktoriukiekis = filmas.aktoriai.length;
// console.log('aktoriai:', aktoriukiekis);
// //dabartiniai metai

// let dabartiniaimetai = 2024;
// console.log('dabartiniaimetai:', dabartiniaimetai);

// let filmometai = dabartiniaimetai - filmas.metai;
// console.log('filmometai:', filmometai);
//===================================
let studentai = [
  { vardas: 'Kestas', amzius: 20, pazymiai: [5, 4, 2, 1] },
  { vardas: 'Petras', amzius: 19, pazymiai: [7, 3, 5, 9] },
  { vardas: 'Ignas', amzius: 21, pazymiai: [3, 7, 10, 8] },
];
let vidurkiu_suma = 0;
for (const stud of studentai) {
  console.log('studentai $ { stud.vardas}, Amzius: ${stud.amzius}');

  let suma = 0;
  for (const paz of stud.pazymiai) {
    suma += paz;
  }
  let vidurkis = suma / stud.pazymiai.length;
  vidurkiu_suma += vidurkis;
  console.log('jo vidurkis', vidurkis);
}
let vidurkiu_vidurkis = vidurkiu_suma / studentai.length;
console.log(vidurkiu_vidurkis);
