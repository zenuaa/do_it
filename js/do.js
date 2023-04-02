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
        let a = prompt("The last movie what have you seen"),
            b = +prompt("Rate the movie");
        personalMovieDB.movies[a] = b;
        return personalMovieDB
    },
    showDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
        return personalMovieDB;
    },
    askAboutGenres:function(){
        this.genres.push(prompt('Your favorite genres'));
    return this;
    }
};


personalMovieDB.countFilm().askAboutFilm().askAboutGenres().showDB();

