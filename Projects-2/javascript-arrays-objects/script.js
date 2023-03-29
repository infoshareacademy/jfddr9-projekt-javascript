// Zadanie 1.
const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];
console.log(ticktacktoe[2][1]);

// Zadanie 2.
const coolArray = [1, 1, 2, 3, 5, 8, 13, 21, 34];
for (let i = 0; i < coolArray.length; i++) {
  coolArray[i] = coolArray[i] * 2;
}
console.log(coolArray);

// const coolArray = [1, 1, 2, 3, 5, 8, 13, 21, 34];
// const  multiplyBy2 = () => {
//   for (let i = 0; i < coolArray.length; i++){
//   coolArray[i]=coolArray[i]*2;
//   console.log(coolArray)
// }}
// multiplyBy2()

// Zadanie 3.
const check = ticktacktoe.length;
switch (check) {
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
const theOffice = ["Michael", "Dwight", "Jim", "Pam", "Kevin"];
for (let i = 0; i < theOffice.length; i++) {
  theOffice[i] = theOffice[i].length;
}
console.log(theOffice);
// Zadanie 5.

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
console.log(people.sort());

// Zadanie 6.
const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];

let michaelScott = numbers.filter((value) => value >= 20);
console.log(`Elementy większe lub równe od 20: ${michaelScott}`);

let suma = numbers.reduce((acc, currentValue) => acc + currentValue);
console.log(`Suma elementów w tablicy: ${suma}`);

let sumaUjemna = numbers.filter((value) => value < 0);
let sumaUjemnaX = sumaUjemna.reduce((acc, currentValue) => acc + currentValue);
console.log(`Suma elementów ujemnych: ${sumaUjemnaX}`);

let odd = [];
let even = [];
function splitNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++)
    (i % 2 == 0 ? even : odd).push(numbers[i]);
  console.log(even);
}
splitNumbers(numbers);

let sumaParz = even.reduce((acc, currentValue) => acc + currentValue);
console.log(`Suma indeksów parzystych: ${sumaParz}`);

// Zadanie 7.

// Zadanie 8.

// Zadanie 9.

// Zadanie 10.

const today = new Date();
const days = today.getDate();
const months = today.getMonth();
console.log(months);
let arrayMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let alreadyKnown = [];
let notKnownYet = [];

// Ile dni które już znamy //

for (let b = 0; b < arrayMonth.length; b++)
  (b < months ? alreadyKnown : notKnownYet).push(arrayMonth[b]);
let sumeMe = alreadyKnown.reduce((acc, currentValue) => acc + currentValue);
let sumaOnceAgain = arrayMonth.reduce(
  (acc, currentValue) => acc + currentValue
); //suma dni we wszystkich miesiącach

// Różca dni które już zamy - dni których jeszcze nie znamy //
function daysUntilChristmas() {
  let leftDays = sumaOnceAgain - sumeMe;
  console.log(`${leftDays} days left until Christmas`);
}
daysUntilChristmas();

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

function checkJuniorReq() {
  let goodPeople = [];
  let badPeople = [];
  for (let s = 0; s < students.length; s++) {
    let studentsName = students[s].name;
    let tasksCompleted = students[s].tasksDone;
    let spendHours = students[s].hoursSpent;
    if (
      tasksCompleted >= requirements.minTasksDone &&
      spendHours >= requirements.minHoursSpent
    ) {
      goodPeople.push(studentsName);
    } else {
      badPeople.push(studentsName);
    }
  }
  console.log(
    `${goodPeople } - gratulacje! Ciężka praca popłaca! ${badPeople} - DO ROBOTY LENIE! `
  );
}
checkJuniorReq();

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
