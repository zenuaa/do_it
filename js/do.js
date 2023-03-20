'use strict'

// function ask() {
// var a = prompt("The last movie what have you seen"),
//     b = prompt("Rate the movie");
// personalMovieDB.movies[a] = b;
// }
// ask();
// ask();

// console.log(personalMovieDB);
// var ask = confirm();

// function askC() {
// console.log("Second chance");
// (ask = confirm()) == true ? console.log("Good boy") : console.log("YOU FAIL");
// }
// ask ? console.log("User accept") : ask || askC();

// const foo = +'10';
// switch (foo) {
// case 3:
//     console.log('foo = 3');
//     break;
// case 10:
//     console.log('foo = 10');
//     break;
// default:
//     console.log('There is no match');
//     break;
// }

// const foo = 10,
// poo = 100;

// // if (foo < 10 || poo == 100) {
// //   console.log('All right');
// // } else {
// //   console.log('no match');
// // }

// (foo < 10 || poo == 100) ? console.log('All right'): console.log('no match');

// for (let i = 1, x = 10; i < 10; i++) {
// console.log(x);
// x++;
// }

// let inf = {
// x: 1,
// c: 2,
// v: 3,
// b: 4,
// obj: {
//     x: 10,
//     c: 20,
//     v: 30,
//     b: 40,
// }
// }

// for (let i = 0, arr = Object.keys(inf); i < arr.length; i++) {
// console.log(arr[i]);

// }

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/


// const personalMovieDB = {
//     count: '',
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: !1
// };


// function ask() {
//     for (let i = 0; i < 1; i++) {
//         let ask = prompt('How much films did you see?');
//         if (!+ ask) {
//             console.log('Answer the question');
//             i--;
//             continue;
//         } else {
//             personalMovieDB.count = + ask;

//         }

//     }


// for (let i = 0; i < 2; i++) {
//     let a = prompt(`The last film what you seen? ${i}`);

//     let b = prompt(`Rate this film ${i}`);
//     if (! a || ! b) {
//         console.log('Aswer the question!!!');
//         i--;
//         continue;
//     }
//     if (a.length > 10) {
//         console.log('The name length cannot be largest 10 simbols');
//         i--;
//         continue;
//     } else {
//         personalMovieDB.movies[a] = + b;
//     }
// }



// ask();

// console.log(personalMovieDB);



const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: !1
};

function ask() {
    let b;
    for (let i = 0; 1 > i; i++) {
        b = prompt("How much films did you see?");
        b ? personalMovieDB.count = + b : (console.log("Answer the question"), i --);
    }
    for (let i = 0; 1 > i; i++) {
        b = prompt("The last film what you seen? " + i);
        let c = prompt("Rate this film " + i);

        b && c ? 10 < b.length ? (console.log("The name length cannot be largest 10 simbols"), i --) : personalMovieDB.movies[b] = + c : (console.log("Aswer the question!!!"), i --);
    }
}
// ask();
console.log(personalMovieDB);

