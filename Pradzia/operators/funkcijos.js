//================= 1 uzd 1 dalis
// function veiksmas() {
//   console.log('Rita');
//   console.log('Radiun');
// }
// veiksmas();
// veiksmas();
// veiksmas();
// //========================= 2 uzd  1 dalis

// function veiksmas() {
//   console.log('Sukurkite funkcijąa 5 kartus');
// }
// for (let i = 0; i < 5; i++) {
//   veiksmas();
// }
// function daiktas() {
//   console.log('vienas');
// }
// function modelis() {
//   console.log('du');
// }

// function veiksmas() {
//   console.log('trys');
// }
// daiktas();
// // modelis();
// // veiksmas();

// // function policininkas() {
// //   let name = 'Jonas';
// //   console.log(name);
// //   let pavarde = 'Petraitis';
// //   console.log(pavarde);
// //   let age = 36;
// //   console.log(age);
// //   let many = 1000;
// //   console.log(many);
// // }
// // policininkas();

// function skaiciai() {
//   let skaicius = {
//     skaicius1: Math.ceil(Math.random() * 10),
//     skaicius2: Math.ceil(Math.random() * 10),
//     skaicius3: Math.ceil(Math.random() * 10),
//     skaicius4: Math.ceil(Math.random() * 10),
//     skaicius5: Math.ceil(Math.random() * 10),
//     skaicius6: Math.ceil(Math.random() * 10),
//     skaicius7: Math.ceil(Math.random() * 10),
//     skaicius8: Math.ceil(Math.random() * 10),
//     skaicius9: Math.ceil(Math.random() * 10),
//     skaicius10: Math.ceil(Math.random() * 10),
//   };
//   console.log(
//     skaicius.skaicius1,
//     skaicius.skaicius2,
//     skaicius.skaicius3,
//     skaicius.skaicius4,
//     skaicius.skaicius5,
//     skaicius.skaicius6,
//     skaicius.skaicius7,
//     skaicius.skaicius8,
//     skaicius.skaicius9,
//     skaicius.skaicius10
//   );
// }

// skaiciai();
// skaiciai();
// skaiciai();
// ==============================
// function randomSkaiciai() {
//   let skaiciai = [];
//   for (let i = 1; i <= 10; i++) {
//     let x = Math.ceil(Math.random() * 100);
//     skaiciai.push(x);
//   }
// //   console.log(skaiciai);
// // }

// function funk(zodziai) {
//   console.log(zodziai);
//   for (let i = 0; i < zodziai.length; i++);
//   {
//     console.log(zodziai[i].length);
//   }
// }
// // funk('zodis1', 'zodis2', 'zodis3');
// // //===========================
// // policininkas();

// console.log();
// console.log();
// console.log();
// function daugSk() {
//   let randomSkaiciai = Math.floor(Math.random() * 10);
//   return randomSkaiciai;
// }
// function daugSk10() {
//   let arry = [];
//   for (let m = 0; m < 10; m++) {
//     arry.push = daugSk(m);
//     console.log(arry);
//   }
// }
// daugSk();
// console.log('_______________');
// daugSk10;
//===============================

// // // //====================1 uzd 4 dalis
// function grazintiSakini(sakinys) {
//   return sakinys;
// }

// let manoSakinys = grazintiSakini('Tai yra mano norimas sakinys.');
// console.log(manoSakinys);

// //================================2 uzd 4 dalis
// function atsitiktinisSkaicius() {
//   return Math.random();
// }

// for (let i = 0; i < 5; i++) {
//   let atsitiktinis = atsitiktinisSkaicius();
//   console.log('Atsitiktinis skaičius:', atsitiktinis);
// }

//=============================================2uzduotis 5 dalis
function ilgZodis(zodziai) {
  console.log(zodziai);
  let ilgZodis = '';

  for (let i = 0; i < zodziai.length; i++) {
    if (zodziai[i].length > ilgZodis.length) {
      ilgiausias = zodziai[i];
    }
  }
  console.log(ilgiausias);
}
let zodziai = ['sklypas', 'medis', 'saule', 'nepatikimas', 'vanduo'];
ilgZodis(zodziai);

//========================== 3 uzd 5  dalis
// let arr = [6, 8, 2, 5, 3];

// function inPositive(pazymiai) {
//   console.log(pazymiai);
//   for (let i = 0; i < pazymiai.lenght; i++) {
//     if (pazymiai[i] < 5) {
//       // console.log(pazymiai[i]);
//       console.log('neigiamas pazymys', pazymiai[i]);
//       return false;
//     }
//   }
//   return true;
// }
// inPositive(arr);
// console.log(inPositive(arr));
