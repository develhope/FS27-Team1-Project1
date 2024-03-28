const team1 = [
  {
    name: "Domenico",
    surname: "Provenzano",
    age: 33,
    city: "Bagheria",
    hobby: "karate",
    favoriteFood: "Hamburger",
    favoriteVideoGame: "League of Legends",
    favoriteFilm: "Il buono, il brutto e il cattivo",
    favoriteBook: "Il mastino dei Baskerville",
    petName: "Stella",
  },
  {
    name: "Mirko",
    surname: "Vitale",
    age: 26,
    city: "Roma",
    hobby: "Music",
    favoriteFood: "Carbonara",
    favoriteVideoGame: "Call of Duty",
    favoriteFilm: "Django",
    favoriteBook: "Metro 2033",
    petName: "Melody",
  },
  {
    name: "Andrea",
    surname: "Schiariti",
    age: 33,
    city: "Rome",
    hobby: "Playing videgames",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Silent Hill",
    favoriteFilm: "Mrs Doubtfire",
    favoriteBook: "The Stone Monkey",
    petName: "Guy",
  },
  {
    name: "zain",
    surname: "ahmed",
    age: 27,
    city: "Bologna",
    hobby: "Games",
    favoriteFood: "Pizza",
    favoriteVideoGame: "LoL",
    favoriteFilm: "",
    favoriteBook: "",
    petName: "",
  },
];

alphabeticSurname = [...team1];

alphabeticSurname.sort((name1, name2) => {
  let firstSurname = name1.surname.toUpperCase();
  let secondSurname = name2.surname.toUpperCase();

  if (firstSurname < secondSurname) {
    return -1;
  }
  if (firstSurname > secondSurname) {
    return 1;
  } else {
    return 0;
  }
});

console.log(alphabeticSurname)