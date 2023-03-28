import { people } from "./data.js";
// Zadanie 1.
const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];

console.log(ticktacktoe[2][1]);
console.log('-------------------------')

// Zadanie 2.

function multiplBy2(array) {
  let multipliedArray = []
  for (let i = 0; i < array.length; i++) {
    multipliedArray.push(array[i] * 2)
  }
  return multipliedArray
}

console.log(multiplBy2([2, 5, 10]));
console.log(multiplBy2([17, 12345, 3]));

console.log('-------------------------')


// Zadanie 3.

function check(array) {
  switch (array.length) {
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
      break;
  }
}

check([2]);
check([2, 3]);
check([2, 3, 4]);
check([2, 3, 4, 5]);
console.log('-------------------------')

// Zadanie 4.

function stringLength(array) {
  let lenghtsArray = []
  for (let i = 0; i < array.length; i++) {
    lenghtsArray.push(array[i].length)
  }
  return lenghtsArray
}

console.log(stringLength(["hello", "world", "dog", "sophisticated"]))
console.log('-------------------------')



// Zadanie 5.
const people1 = [
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

function sorter(array) {
  return array.sort((a, b) => {
    let lastNameA = a.split(",")[0];
    let lastNameB = b.split(",")[0];
    return lastNameA.localeCompare(lastNameB);
  })
}
console.log(sorter(people1));
console.log('-------------------------')

// Zadanie 6.
const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];

let greaterThan20 = numbers.filter(number => number >= 20);
console.log(`Elementy większe lub równe od 20: ${greaterThan20}`)

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(`Suma elementów w tablicy to ${sum}`)
let sum = numbers.reduce((acc, currentValue) => acc + currentValue)
console.log(`Suma elementów w tablicy to ${sum}`)


// let negativeSum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     negativeSum += numbers[i];
//   }
// }
let negativeSum = numbers.filter(number => number < 0).reduce((acc, currentValue) => acc + currentValue)
console.log(`Suma elementów ujemnych w tablicy to ${negativeSum}`)

// let evenIndexsum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (i % 2 === 0) {
//     evenIndexsum += numbers[i];
//   }
// }
let evenIndexsum = numbers.reduce((acc, currentValue, index) => {
  if (index % 2 === 0) {
    return acc + currentValue;
  } else {
    return acc;
  }
}, 0);
console.log(`Suma elementów parzystych w tablicy to ${evenIndexsum}`)
console.log('-------------------------')

// Zadanie 7.

function showOnlyUsersWithRace(race) {
  if (typeof race === "string") { //sprawdzenie czy race jest stringiem lub liczbą
    const filteredUsers = people.filter((person) => person.race === race); //filtrowanie użytkowników z danej rasy
    return filteredUsers.length > 0 ? filteredUsers : []; //jeśli wynikowy array jest pusty to zwracamy [], w przeciwnym razie zwracamy wynikowe obiekty
  } else {
    return "This race doesn't exist"; //jeśli wartość race nie jest ani stringiem, zwracamy "This race doesn't exist"
  }
}
console.log(showOnlyUsersWithRace("Cambodian"));
console.log(showOnlyUsersWithRace(1));
console.log(showOnlyUsersWithRace("Polish"));
console.log('-------------------------')

// Zadanie 8.

people.forEach(person => {
  console.log(`${person.title} ${person.first_name} ${person.last_name} work as ${person.job_title} in ${person.company}`)
});
console.log('-------------------------')

// Zadanie 9.
people.forEach(person => {
  person.height = person.age + 100; //ustalenie wysokości osoby
  person.weight = person.age + 10; // ustalenie wagi osoby
  person.bmi = (person.weight / Math.pow(person.height / 100, 2)).toFixed(1);  // ustalenie i obliczenie bmi osoby 
});

function usersWithNormalBMI() {
  const filteredUsers = people.filter((person) => person.bmi >= 18.5 && person.bmi <= 24.99) // filtrowanie użytkowników którzy mają BMI pomiędzy 18.5 i 24.99
  return filteredUsers
}
console.log(people)
console.log(usersWithNormalBMI())
console.log('-------------------------')

// Zadanie 10.

function daysUntilChristmas() {
  const today = new Date(); // bieżąca data 
  let christmasDay = new Date(today.getFullYear(), 11, 25) // data świąt 
  if (today.getMonth() === 11 && today.getDay > 25) {
    christmasDay.setFullYear(christmasDay.getFullYear() + 1) // jeśli jest grudzień i po świętach to dodajemy 1 rok
  }
  const diffInTime = christmasDay.getTime() - today.getTime() // różnica w czasie między datami, różnica jest w milisekundach
  const diffInDays = Math.round(diffInTime / (1000 * 3600 * 24)); // różnica w dniach
  return console.log(`${diffInDays} days left until Christmas!`)
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

function checkJuniorReq(students, requirements) {

  const goodStudents = students.filter(student => student.tasksDone >= requirements.minTasksDone && student.hoursSpent >= requirements.minHoursSpent);
  const badStudents = students.filter(student => student.tasksDone <= requirements.minTasksDone || student.hoursSpent <= requirements.minHoursSpent);

  const goodStudentsNames = goodStudents.map(student => student.name);
  const badStudentsNames = badStudents.map(student => student.name);

  const goodStudentsMessage = goodStudents.length > 0 ? `${goodStudentsNames.join(", ")} - gratulacje! Ciężka praca popłaca!` : "";

  const badStudentsMessage = badStudents.length > 0 ? `${badStudentsNames.join(", ")} - - DO ROBOTY LENIE!` : "";

  return console.log(goodStudentsMessage + badStudentsMessage)
}

checkJuniorReq(students, requirements)

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
