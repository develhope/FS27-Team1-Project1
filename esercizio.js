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

// Print the team in age order (name age).
function ageOrder(team1) {
    team1.sort((a, b) => a.age - b.age);
    team1.forEach((person) => console.log(`${person.name} ${person.age}`));
}

ageOrder(team1);

// Ordinamento alfabetico
function alphabeticSurname(team1) {
    team1.sort((name1, name2) => {
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
    team1.forEach((person) => console.log(`${person.surname} ${person.name}`));
}

alphabeticSurname(team1);

// - Print if there are same names


for (let i = 0; i < team1.length; i++) {
    for (let n = i++; n < team1.length; n++)
        if (team1[i].name === team1[n].name && i != n) {
            console.log(team1[i].name);
        } else {
            console.log("No same name detected");
        }
}

// stampa il nome di chi ha come videogames preferito LoL o League of Legends
for (let i = 0; i < team1.length; i++)
    if (
        team1[i].favoriteVideoGame === "LoL" ||
        team1[i].favoriteVideoGame === "League of Legends"
    ) {
        console.log(team1[i].name);
    }

// stampa l'età media del team
function averageAge(team1) {
    const sum = team1.reduce((a, team) => a + team.age, 0);
    return sum / team1.length;
}

console.log(averageAge(team1))

//Print who has a pet (name, petname)
for(let i = 0; i < team1.length; i++){
    if(team1[i].petName != ""){
        console.log(team1[i].name, team1[i].petName)
    }
}

function hobbies (team1) {
    team1.forEach(person => {console.log(`${person.name}'s hobby is ${person.hobby}`)})
}

hobbies(team1)