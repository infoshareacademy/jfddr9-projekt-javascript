// Zadanie 1.
const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];

console.log("Wynik");
console.log(ticktacktoe[2][1]);

// Zadanie 2.
// Stwórz funkcję `multiplyBy2()`, która mnoży elementy w tablicy razy 2.

const array1 = [1, 5, 8, 21];

console.log(array1.map((item) => item * 2));

// Zadanie 3.
// Napisz funkcję `check()`, która przyjmuje w parametrze tablicę - w zależności od długości tablicy - funkcja powinna zwrócić odpowiedni string z kolorem:

// - 1 = "#green"
// - 2 = "#red"
// - 3 = "#blue"
// - Każdy inny = "#black"

// Użyj `switch` statement.

const number = [1, 5];

const colorByArrayLength = function check(array) {
  switch (array.length) {
    case 1:
      return "green";
      break;

    case 2:
      return "red";
      break;

    case 3:
      return "blue";
      break;

    default:
      return "black";
      break;
  }
};

console.log(colorByArrayLength(number));

// Zadanie 4.
// Napisz funkcję `stringLength()` która jako parametr przyjmie tablicę stringów i zwróci tablicę ich długości.

const myFriends = ["Ula", "Zuzanna", "Zygfryd", "Fryderyk"];

//DŁUŻSZY ZAPIS FUNKCJI
const stringLength = (array) => {
  return array.map((item) => item.length);
};

//KRÓTSZY ZAPIS FUNKCJI
// const stringLength = array => {return array.map((item) => item.length)};

console.log(stringLength(myFriends));

// Zadanie 5.
//Posortuj osoby z tablicy `people` alfabetycznie według nazwiska.

const people = [
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

const sortBySecondElement = arr => {
  // return arr.map(text => text.split(',')[1]).sort()
  return arr.sort((textA, textB) => {
    let lastNameA = textA.split(',')[0]
    let lastnameB = textB.split(',')[0]
    console.log(lastNameA)
    console.log(lastnameB)
    return lastNameA.localeCompare(lastnameB)
  })
}

console.log(sortBySecondElement(people));

// Zadanie 6.
const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];

// Zadanie 7.

// Zadanie 8.

// Zadanie 9.

// Zadanie 10.

// Zadanie 11.
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
