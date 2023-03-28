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
  array.sort((a, b) => {
    let lastNameA = a.split(",")[0];
    let lastNameB = b.split(",")[0];
    return lastNameA.localeCompare(lastNameB);
  })
}
console.log(people1);
console.log('-------------------------')

// Zadanie 6.
const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];

let greaterThan20 = numbers.filter(number => number >= 20);
console.log(`Elementy większe lub równe od 20: ${greaterThan20}`)

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(`Suma elementów w tablicy to ${sum}`)

let negativeSum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    negativeSum += numbers[i];
  }
}
console.log(`Suma elementów ujemnych w tablicy to ${negativeSum}`)

let evenIndexsum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) {
    evenIndexsum += numbers[i];
  }
}
console.log(`Suma elementów parzystych w tablicy to ${evenIndexsum}`)
console.log('-------------------------')

// Zadanie 7.
const people = [
  {
    id: 1,
    first_name: "Kaylil",
    last_name: "Hovey",
    email: "khovey0@gizmodo.com",
    gender: "Female",
    ip_address: "128.158.239.223",
    title: "Rev",
    job_title: "Recruiting Manager",
    race: "Vietnamese",
    company: "Browseblab",
    age: 33,
  },
  {
    id: 2,
    first_name: "Cesare",
    last_name: "Caroline",
    email: "ccaroline1@tmall.com",
    gender: "Male",
    ip_address: "7.78.224.248",
    title: "Rev",
    job_title: "Computer Systems Analyst II",
    race: "Black or African American",
    company: "Wordtune",
    age: 50,
  },
  {
    id: 3,
    first_name: "Xaviera",
    last_name: "Danilchenko",
    email: "xdanilchenko2@so-net.ne.jp",
    gender: "Female",
    ip_address: "161.223.97.94",
    title: "Mr",
    job_title: "Statistician IV",
    race: "Asian",
    company: "Rhynyx",
    age: 55,
  },
  {
    id: 4,
    first_name: "Shandy",
    last_name: "Sanford",
    email: "ssanford3@uiuc.edu",
    gender: "Female",
    ip_address: "40.218.230.208",
    title: "Honorable",
    job_title: "Data Coordiator",
    race: "Eskimo",
    company: "Topdrive",
    age: 76,
  },
  {
    id: 5,
    first_name: "Muire",
    last_name: "Pothecary",
    email: "mpothecary4@mit.edu",
    gender: "Female",
    ip_address: "82.151.63.26",
    title: "Honorable",
    job_title: "Executive Secretary",
    race: "Chickasaw",
    company: "Realbridge",
    age: 15,
  },
  {
    id: 6,
    first_name: "Mano",
    last_name: "Gwatkins",
    email: "mgwatkins5@auda.org.au",
    gender: "Male",
    ip_address: "134.244.218.162",
    title: "Ms",
    race: undefined,
    job_title: "Automation Special",
    age: 23,
  },
  {
    id: 7,
    first_name: "Frederica",
    last_name: "Shackleton",
    email: "fshackleton6@examiner.com",
    gender: "Female",
    ip_address: "191.141.61.25",
    title: "Honorable",
    job_title: "Help Desk Operator",
    race: "Yuman",
    company: "Yoveo",
    age: 89,
  },
  {
    id: 8,
    first_name: "Garvey",
    last_name: "Islep",
    email: "gislep7@nps.gov",
    gender: "Male",
    ip_address: "101.45.75.228",
    title: "Mr",
    job_title: "Internal Auditor",
    race: "Cambodian",
    company: "Livefish",
    age: 76,
  },
  {
    id: 9,
    first_name: "Aristotle",
    last_name: "Gozard",
    email: "agozard8@exblog.jp",
    gender: "Male",
    ip_address: "87.43.196.133",
    title: "Rev",
    job_title: "Software Test Engineer IV",
    race: "Chippewa",
    company: "Feedspan",
    age: 34,
  },
  {
    id: 10,
    first_name: "Bryon",
    last_name: "Boulder",
    email: "bboulder9@parallels.com",
    gender: "Male",
    ip_address: "251.50.80.89",
    title: "Honorable",
    job_title: "Senior Editor",
    race: "Black or African American",
    company: "Kazu",
    age: 25,
  },
];

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