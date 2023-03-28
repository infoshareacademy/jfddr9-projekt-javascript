// Dane dla zadań 7-9

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


// Zadanie 1.
const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];

console.log("Wynik")

console.log(ticktacktoe[2][1])

// Zadanie 2.

const arr = [1, 5, 8, 21];

const multiplyBy2 = arr.map(item => item * 2);

console.log(multiplyBy2)

// Zadanie 3.

function check(arr2) {
  let lengthOfArray = arr2.length;

  switch (lengthOfArray) {
    case 1:
      return 'green';
    case 2:
      return 'red';
    case 3:
      return 'blue';
    default:
      return 'black';
  }
}

const arrnew1 = [1];
const arrnew2 = [1, 2];
const arrnew3 = [1, 2, 3];
const arrnew4 = [1, 2, 3, 4];

console.log(check(arrnew1));
console.log(check(arrnew2));
console.log(check(arrnew3));
console.log(check(arrnew4));


// Zadanie 4.

const stingLength = (arr3) => {
  return arr3.map(item => item.length) 
}

const arrnew5 = ["hello", "world", "dog", "sophisticated"];
console.log(stingLength(arrnew5));


// Zadanie 5.
const people2 = [
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

const arrOfAlphabet = (arr) => {
  return arr.sort()
}

console.log(arrOfAlphabet(people2))



// Zadanie 6.
const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];

const arrGreaterThan20 = (arr) => {
  return arr.filter(item => item >=20)
}

console.log(arrGreaterThan20(numbers))

const sumOfNum = (arr) => {
  return arr.reduce((item, value) => item + value)
}

console.log(sumOfNum(numbers))


const sumOfNegative = (arr) => {
  const newArr = arr.filter(item => item < 0)
  return newArr.reduce((item1, value) => item1 + value)
}
console.log(sumOfNegative(numbers))



const sumOfEven = (arr) => {
    resultOfSumOfEven = 0;
    for (let i=0; i < arr.length; i++)  {
      if (i % 2 === 0) {
        resultOfSumOfEven += arr[i];
      }
    }
    return resultOfSumOfEven
  }
console.log(sumOfEven(numbers))


// Zadanie 7.

const showOnlyUsersWithRace = (raceArg) => {
  people.forEach((item) => {
    if (item.race === raceArg)
    console.log(item)
  })
}

showOnlyUsersWithRace("Cambodian");


// Zadanie 8.

const showPeopleWhoWorks = (arr) => {
  arr.forEach( (item) => {
    console.log(`${item.title} ${item.first_name} ${item.last_name} work as ${item.job_title} in ${item.company}`)
  })
}

showPeopleWhoWorks(people)


// Zadanie 9.

//problemy

const newPeople = () => {
 people.forEach((item) => {
    item.height = item.age + 100;
    item.weight = item.age + 10;
    item.bmi = (item.weight / Math.pow(item.height/100, 2)).toFixed(2);
    console.log(item)
  })
}

newPeople();

const findPeoplewithWantedBMI = () => {
  const peoplewithWantedBMI = people.filter((item) => {
    item.bmi >= 18.5 && item.bmi <= 24.99
  })
  return peoplewithWantedBMI
}

console.log(people)
findPeoplewithWantedBMI()
console.log(findPeoplewithWantedBMI())



// Zadanie 10. - wykonane z pomocą internetu

const daysUntilChristmas = () => {
  let today = new Date();
  let christmasYear = today.getFullYear();

  if (today.getMonth() == 11 && today.getDate() > 25) {
  christmasYear = christmasYear + 1;
}

  let christmasDate = new Date(christmasYear, 11, 25);
  let dayMilliseconds = 1000 * 60 * 60 * 24; //liczba milisekund w ciągu dnia

let remainingDays = Math.ceil(
  (christmasDate.getTime() - today.getTime()) /
   (dayMilliseconds)
);
return remainingDays
}

console.log(`Days left until Christmas: ${daysUntilChristmas()}`)

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

const checkJuniorReq = (students, requirements) => {
    const juniorReq = students.filter ((student) => student.tasksDone >= requirements.minTasksDone && student.hoursSpent >= requirements.minHoursSpent)
    const notJuniorReq = students.filter ((student) => student.tasksDone <= requirements.minTasksDone || student.hoursSpent <= requirements.minHoursSpent)

    const juniorReqNames = juniorReq.map((student) => student.name);
    const notJuniorReqNames = notJuniorReq.map((student) => student.name);

    const testForJuniorReq = `${juniorReqNames.join(", ")} - gratulacje! Ciężka praca popłaca!`;
    const testForNotJuniorReq = `${notJuniorReqNames.join(", ")} - DO ROBOTY LENIE!`;
    return console.log(testForJuniorReq, testForNotJuniorReq)
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
