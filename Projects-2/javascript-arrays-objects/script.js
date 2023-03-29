import {people} from './data.js';

// Zadanie 1. Wybierz element `**` z zagnieżdżonej tablicy
const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];

const element = ticktacktoe[2][1]
console.log(element)

//lub nowa tablica z tym elementem

const newTicktacktoe = ticktacktoe.flat();
const wynik = newTicktacktoe.filter(item => item === "**");
console.log(wynik);

// Zadanie 2. Stwórz funkcję `multiplyBy2()`, która mnoży elementy w tablicy razy 2.

const arrayOfNumbers = [1, 5, 8, 21]

arrayOfNumbers.forEach((_value, index) => {
  arrayOfNumbers[index] *= 2;
});
console.log(arrayOfNumbers);



// Zadanie 3.
// Napisz funkcję `check()`, która przyjmuje w parametrze tablicę - w zależności od długości tablicy - funkcja powinna zwrócić odpowiedni string z kolorem

let myArray = [1, 3]

switch (myArray.length) {
    case 1:
    console.log("#green");
    break;
    case 2:
    console.log("#red");
    break;
    case 3:
    console.log("#blue");
    break;
    default: 
    console.log("#black");
  }


// Zadanie 4.

// Napisz funkcję `stringLength()` która jako parametr przyjmie tablicę stringów i zwróci tablicę ich długości.

const arrayOfString = ["hello", "world", "dog", "sophisticated"]

const stringLength = (array) => {
    let arrayLength = array.map(element => element.length);  
    return arrayLength
}

console.log(stringLength(arrayOfString))

// Zadanie 5. 
const peopleArray = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Posortuj osoby z tablicy `people` alfabetycznie według nazwiska.

function sort(arr) {
  return arr.sort((a, b) => {
    let lastNameA = a.split(",")[0];
    let lastNameB = b.split(",")[0];
    return lastNameA.localeCompare(lastNameB)
  })
}
  console.log(sort(peopleArray));
 

// Zadanie 6.

const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];
// 1. Wyświetl tylko elementy większe lub równe od 20:
const graterThanTwenty = numbers.filter(number => number >= 20);
console.log(`Elementy większe lub równe od 20: ${graterThanTwenty}`);

// 2. Policz sumę wszytskich elementów tablicy
let sum = numbers.reduce((a, b) => {
   return a + b;
 })
 console.log(`Suma wszystkich elementów: ${sum}`);

 // 3. Wyświetl sumę elementów tylko ujemnych:
const sumOfNegatives = numbers.filter(number => number < 0).reduce((acc , currentValue) => acc + currentValue)
console.log(`Suma elementów ujemnych: ${sumOfNegatives}`)

// // 4. Wyświetl sumę elementów na indeksach parzystych:
const sumOfEven = numbers.filter((number) => number % 2 === 0).reduce((acc , currentValue) => acc + currentValue)
console.log(`Suma elementów parzystych: ${sumOfEven}`);


// Zadanie 7.

function showOnlyUsersWithRace(race) {
  if (typeof race === "string") {
    const filteredPeople = people.filter((person) => person.race === race);
    return filteredPeople.length > 0 ? filteredPeople : [];
  } else {
    return "This race doesn't exist";
  }
}
console.log(showOnlyUsersWithRace("Cambodian"));
console.log(showOnlyUsersWithRace(1));

// Zadanie 8. Wyświetl każdego z userów w konwencji: `title first_name last_name work as job_title in company`.

people.forEach(person => {
  console.log(person.title + " " + person.first_name + " " + person.last_name + " work as " + person.job_title + " in " + person.company );
})

// Zadanie 9.

people.forEach(person => {
  person.height = person.age + 100;
  person.weight = person.age + 10;
  person.bmi = (person.weight / (person.height / 100) ^2)
});

//Następnie zwróć tablicę imion tych osób, które mają BMI w zakresie 18,5 – 24,99.
const arrayOfBmi = []

people.forEach(person => {
  if (person.bmi > 18.5 && person.bmi < 24.99) {
   arrayOfBmi.push(person.first_name)
  } 
})
console.log(arrayOfBmi);
console.log(`Osoby z BMI w zakresie 18,5 - 24,99: ${arrayOfBmi}`);

// Zadanie 10.
// Napisz funkcję `daysUntilChristmas()`, która zwróci liczbę dni do Świąt Bożego Narodzenia 🎅🏻🎄

function daysUntilChristmas() {
  let todayDate = new Date();
  let christmasDate = new Date(todayDate.getFullYear(), 11, 25)
  let timeDifference = christmasDate.getTime() - todayDate.getTime();
  let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return console.log(`${daysDifference} days left until Christmas!`);
}
daysUntilChristmas()



//console.log(daysuntilChristmas() + "days left until Christmas!");

// Zadanie 11.


// Tablica `students` zawiera ilość aspirujących developerów, a obiekt `requirements` zawiera opisane wyżej wymagania:
// Napisz funkcję `checkJuniorReq` - powinna ona zwracać string zawierający imiona osób którzy są na dobrej drodze do zostania Juniorem oraz osoby, które trzeba pogonić do pracy. Wynikowy kod może wyglądać następująco:

// ```javascript
// "Mariusz, Alicja - gratulacje! Ciężka praca popłaca! Ewelina, Marek, Dagmara - DO ROBOTY LENIE!";
// ```


const students = [
  { name: "Mariusz", tasksDone: 150, hoursSpent: 160 },
  { name: "Ewelina", tasksDone: 1, hoursSpent: 1 },
  { name: "Alicja", tasksDone: 100, hoursSpent: 80 },
  { name: "Marek", tasksDone: 200, hoursSpent: 40 },
  { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
];

const requirements = {
  minHoursSpent: 80,
  minTasksDone: 100,
};

// Wyświetl tylko aspirujących juniorów
function checkJuniorReq() {
  const almostJuniors = students.filter(student => student.tasksDone >= requirements.minTasksDone && student.hoursSpent >= requirements.minHoursSpent);
  console.log(almostJuniors);

  const lazyStudents = students.filter(student => student.tasksDone < requirements.minTasksDone || student.hoursSpent < requirements.minHoursSpent);
  console.log(lazyStudents);
  let juniorNames = almostJuniors.map(student => student.name).join(" , ");
  let lazyStudentNames = lazyStudents.map(student => student.name).join(" , ");
  return console.log(`${juniorNames} - gratulacje! Ciężka praca popłaca! ${lazyStudentNames} - DO ROBOTY LENIE!`);
}

checkJuniorReq() 

//   almostJuniors.forEach(junior => junior.name)
//   lazyStudents.forEach(lazyStudent => lazyStudent.name)

//     console.log(`${(junior.name(", "))} - gratulacje! Ciężka praca popłaca!  ${(lazyStudentName.split(", "))} - DO ROBOTY LENIE!`);

// Zadanie 12.

// Zadanie 13.
const idUsers = {
  243: {
    firstName: "Yorker",
    lastName: "Surgey",
    email: "ysurgey0@census.gov",
    jobTitle: "VP Accounting",
  },
  643: {
    firstName: "Lanny",
    lastName: "Sollime",
    email: "lsollime1@flavors.me",
    jobTitle: "VP Quality Control",
  },
  765: {
    firstName: "Cy",
    lastName: "Vautrey",
    email: "cvautrey2@google.cn",
    jobTitle: "Assistant Media Planner",
  },
  17: {
    firstName: "Alfie",
    lastName: "Biggerstaff",
    email: "abiggerstaff3@shop-pro.jp",
    jobTitle: "Project Manager",
  },
  6532: {
    firstName: "Bronnie",
    lastName: "Murrill",
    email: "bmurrill4@mapquest.com",
    jobTitle: "Automation Specialist I",
  },
  11: {
    firstName: "Isiahi",
    lastName: "Dooman",
    email: "idooman5@si.edu",
    jobTitle: "Office Assistant II",
  },
  7907: {
    firstName: "Lizbeth",
    lastName: "Clowney",
    email: "lclowney6@unc.edu",
    jobTitle: "Desktop Support Technician",
  },
  144: {
    firstName: "Lindsey",
    lastName: "Digan",
    email: "ldigan7@bigcartel.com",
    jobTitle: "Technical Writer",
  },
  543: {
    firstName: "Nelly",
    lastName: "Durden",
    email: "ndurden8@amazon.com",
    jobTitle: "Software Test Engineer II",
  },
  444: {
    firstName: "Pascal",
    lastName: "Rosenfrucht",
    email: "prosenfrucht9@hc360.com",
    jobTitle: "GIS Technical Architect",
  },
};
