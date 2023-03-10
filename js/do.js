'use strict'

// var numberOfFilms = prompt("How mutch films do you see", ""),
//   personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: !1,
//   };

// function ask() {
//   var a = prompt("The last movie what have you seen"),
//     b = prompt("Rate the movie");
//   personalMovieDB.movies[a] = b;
// }
// ask();
// ask();

// console.log(personalMovieDB);
// var ask = confirm();

// function askC() {
//   console.log("Second chance");
//   (ask = confirm()) == true ? console.log("Good boy") : console.log("YOU FAIL");
// }
// ask ? console.log("User accept") : ask || askC();

// const foo = +'10';
// switch (foo) {
//   case 3:
//     console.log('foo = 3');
//     break;
//   case 10:
//     console.log('foo = 10');
//     break;
//   default:
//     console.log('There is no match');
//     break;
// }

// const foo = 10,
//   poo = 100;

// // if (foo < 10 || poo == 100) {
// //   console.log('All right');
// // } else {
// //   console.log('no match');
// // }

// (foo < 10 || poo == 100) ? console.log('All right'): console.log('no match');

for (let i = 1, x = 10; i < 10; i++) {
  console.log(x);
  x++;
}

let inf = {
  x: 1,
  c: 2,
  v: 3,
  b: 4,
  obj: {
    x: 10,
    c: 20,
    v: 30,
    b: 40,
  }
}

for (let i = 0, arr = Object.keys(inf); i < arr.length; i++) {
  console.log(arr[i]);

}