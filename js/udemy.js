'use strict' 
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.countFilm().askAboutFilm().askAboutGenres().showDB();
        return this;
    },
    countFilm: function () {
        let numberOfFilms = prompt("How much films did you see", "");
        while (numberOfFilms === null || numberOfFilms.trim() === '' || isNaN(+ numberOfFilms)) {
            numberOfFilms = prompt("How much films did you see", "");
        }
        personalMovieDB.count = numberOfFilms;
        return this;
    },
    askAboutFilm: () => {
        let b;
        for (let i = 0; 2 > i; i++) {
            b = prompt("The last film what you seen? " + i);
            let c = + prompt("Rate this film " + i);
            b && c && !(c !== c) ? 50 < b.length ? (console.warn("The name length cannot be largest 50 simbols"), i --) : personalMovieDB.movies[b] = + c : (console.log("Aswer the question!!!"), i --);
        }
        return personalMovieDB
    },
    showDB: () => {
        if (! personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
        return personalMovieDB;
    },
    askAboutGenres: function () {
        let t = prompt('Please enter your favorite genre:');
        for (t; t === null || t.trim() === '' || !isNaN(+ t) || t.length < 3;) {
            console.warn('Please enter a valid input.');
            t = prompt('Please enter your favorite genre:');
        }
        this.genres.push(t);
        return this;
    },
    toggleVisibleDB: function () {
        this.privat ? this.privat = false : this.privat = true;
        return this;
    }
};
