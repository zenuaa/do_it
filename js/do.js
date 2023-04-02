'use strict'
let personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    privat: !1,
    countFilm: function () {
        let numberOfFilms = +prompt("How mutch films do you see", "");
        while (numberOfFilms == '' || numberOfFilms !== numberOfFilms || numberOfFilms == null) {
            numberOfFilms = +prompt("How mutch films do you see", "");
        }
        personalMovieDB.count = numberOfFilms;
        return this;
    },
    askAboutFilm: () => {
        let b;
        for (let i = 0; 2 > i; i++) {
            b = prompt("The last film what you seen? " + i);
            let c = +prompt("Rate this film " + i);
            b && c && !(c !== c) ? 50 < b.length ? (console.log("The name length cannot be largest 50 simbols"), i--) : personalMovieDB.movies[b] = + c : (console.log("Aswer the question!!!"), i--);
        }
        return personalMovieDB
    },
    showDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
        return personalMovieDB;
    },
    askAboutGenres: function () {
        this.genres.push(prompt('Your favorite genres'));
        return this;
    }
};

personalMovieDB.countFilm().askAboutFilm().askAboutGenres().showDB();

