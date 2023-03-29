// Dane dla zadań 7-9

const peopleData = [
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

console.log(ticktacktoe[2][1]);

// Zadanie 2.

const multiplyBy2 = (arr) => {
  let new_arr = arr.map( number => number*2 );
  return new_arr;
}

console.log(multiplyBy2([1, 5, 8, 21]));


// Zadanie 3.

const check = (arr) => {
  switch(arr.length) {
    case 1:
      return '#green';
    case 2:
      return '#red';
    case 3:
      return '#blue';
    default:
      return '#green';
  }
}

// Zadanie 4.

const stringLength = (arr) => {
  let new_arr = arr.map( word => word.length);
  return new_arr;
}

console.log(stringLength(["hello", "world", "dog", "sophisticated"]));

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

let arrBigger = [];
let arrSum = 0;
let arrSumNeg = 0;
let arrSumEven = 0;

const displayArr = (arr) => {
  arr.forEach( number => {
    if(number>=20)
    {
      arrBigger.push(number);
    }
  });
  arr.forEach( number => {
    arrSum += number;
  });
  arr.forEach( number => {
    if(number<0)
    {
      arrSumNeg += number;
    }
  });
  for(let i = 0; i<arr.length; i++)
  {
    if(i%2===0)
    {
      arrSumEven+=arr[i];
    }
  }

  console.log('Elementy większe lub równe od 20: ' + arrBigger);
  console.log('Suma wszystkich elementów: ' + arrSum);
  console.log('Suma wszystkich elementów: ' + arrSumNeg);
  console.log('Suma wszystkich elementów: ' + arrSumEven);
}

displayArr(numbers);

// Zadanie 7.

const showOnlyUsersWithRace = (raceArg) => {
  peopleData.forEach( person => {
    if(person.race===raceArg)
    {
      console.log(person);
    }
  })
  
}

showOnlyUsersWithRace("Cambodian");


// Zadanie 8.

peopleData.forEach( person => {
  console.log(person.title + ' ' + person.first_name + ' ' + person.last_name + ' work as ' + person.job_title + ' in ' + person.company);
})

// Zadanie 9.

peopleData.forEach( person => {
  person.height = person.age + 100;
  person.weight = person.age + 10;
  person.bmi = person.weight / (person.height/100)^2;
})

let arrBmi = [];

peopleData.forEach( person => {
  if(person.bmi <= 24.99 && person.bmi >= 18.5)
  {
    arrBmi.push(person.first_name);
  }
  
})

console.log(arrBmi);

// Zadanie 10.



const daysUntilChristmas = () => {
  const christmas = new Date('12/25/2023');
  const date = new Date();

  let time = christmas.getTime() - date.getTime();

  let TotalDays = Math.ceil(time / (1000 * 3600 * 24));
  console.log(TotalDays + ' days left unti Christmas!');
};

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

const checkJuniorReq = () => {

  let goodNames = [];
  let badNames = [];

  students.forEach( (student) => {
  if(student.tasksDone>=requirements.minTasksDone && student.hoursSpent>=requirements.minHoursSpent)
  {
    goodNames.push(student.name);
  }
  else {
    badNames.push(student.name);
  }
  });

  return goodNames + ' - gratulacje ciężka praca popłaca! ' + badNames + ' - DO ROBOTY LENIE!';
  
};

console.log(checkJuniorReq());

// Zadanie 12.

const toCamelCase = (noCamelCase) => {
  const stringArr = [...noCamelCase];

  for(let i=0; i<=stringArr.length; i++) {
    if(stringArr[i]==='-' || stringArr[i]==='_')
    {
      stringArr[i+1] = stringArr[i+1].toUpperCase();
      delete stringArr[i]; 
    }
  }
  const final = stringArr.join('');
  return final;
}

console.log(toCamelCase('asp_net_Core'));
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


const correctData = () => {

  let objArr = [];

  for(let [key, value] of Object.entries(idUsers))
  {
    value.id = key;
    objArr.push(value);
  }

  return objArr;
}

console.log(correctData());