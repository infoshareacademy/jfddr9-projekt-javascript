// Zadanie 1.
const ticktacktoe = [
	['x', 'o', 'x'],
	['x', 'x', 'o'],
	['o', '**', 'o'],
]

let obj = ticktacktoe[2][1]
console.group('Zadanie 1')
console.log(`Zadanie pierwsze ${obj}`)
console.groupEnd()
// Zadanie 2.

const nums = [1, 5, 8, 21]

const multiplyBy2 = x => {
	return x.map(function (y) {
		return y * 2
	})
}
console.group('Zadanie 2')
console.log(`Zadanie drugie ${multiplyBy2(nums)}`)
console.groupEnd()
// Zadanie 3.

const array1 = [1]

const colorByArrayLength = array => {
	switch (array.length) {
		case 1:
			return '#green'
			break

		case 2:
			return '#red'
			break

		case 3:
			return '#blue'
			break

		default:
			return '#black'
	}
}
console.group('Zadanie 3')
console.log(`Zadanie trzecie ${colorByArrayLength(array1)}`)
console.groupEnd()
// Zadanie 4.

const array2 = ['hello', 'world', 'dog', 'sophisticated']

const stringLength = array => {
	return array.map(x => x.length)
}
console.group('Zadanie 4')
console.log(`Zadanie czwarte ${stringLength(array2)}`)
console.groupEnd()
// Zadanie 5.

const people1 = [
	'Beck, Glenn',
	'Becker, Carl',
	'Beckett, Samuel',
	'Beddoes, Mick',
	'Beecher, Henry',
	'Beethoven, Ludwig',
	'Begin, Menachem',
	'Belloc, Hilaire',
	'Bellow, Saul',
	'Benchley, Robert',
	'Benenson, Peter',
	'Ben-Gurion, David',
	'Benjamin, Walter',
	'Benn, Tony',
	'Bennington, Chester',
	'Benson, Leana',
	'Bent, Silas',
	'Bentsen, Lloyd',
	'Berger, Ric',
	'Bergman, Ingmar',
	'Berio, Luciano',
	'Berle, Milton',
	'Berlin, Irving',
	'Berne, Eric',
	'Bernhard, Sandra',
	'Berra, Yogi',
	'Berry, Halle',
	'Berry, Wendell',
	'Bethea, Erin',
	'Bevan, Aneurin',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bierce, Ambrose',
	'Biko, Steve',
	'Billings, Josh',
	'Biondo, Frank',
	'Birrell, Augustine',
	'Black, Elk',
	'Blair, Robert',
	'Blair, Tony',
	'Blake, William',
]

const sortBySecondElement = arr => {
	// return arr.map(text=>text.split(',')[1]).sort()

	// return arr.sort((textA, textB) => {
	// 	let lastNameA = textA.split(',')[0]
	// 	let lastNameB = textB.split(',')[0]
	// 	console.log(lastNameA)
	// 	console.log(lastNameB)
	// 	return lastNameA.localeCompare(lastNameB)
	// })

	return arr.sort()
}
console.group('Zadanie 5')
console.log(sortBySecondElement(people1))
console.groupEnd()

// Zadanie 6.

const numbers = [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21]

let showGreaterOrEqualElements = arr => {
	return arr.filter(el => el >= 20)
}
let sumElemets = arr => {
	return arr.reduce((a, b) => a + b)
}
let showNegativeElements = arr => {
	return arr.filter(el => el < 0)
}
let showEvenElements = arr => {
	return arr.filter(el => el % 2 === 0)
}

console.group('Zadanie 6')
console.log(`Array: ${numbers}`)
console.log(`elements >= 20:${showGreaterOrEqualElements(numbers)} `)
console.log(`Sum: ${sumElemets(numbers)}`)
console.log(`Negatives: ${showNegativeElements(numbers)}`)
console.log(`Evens: ${showEvenElements(numbers)}`)
console.groupEnd()

// Zadanie 7.

const showOnlyUsersWithRace = raceType => {
	return people.filter(el => el.race == raceType)
}

console.group('Zadanie 7')
console.log(`Asians:`)
console.log(showOnlyUsersWithRace('Asian'))
console.log(`Black or African American:`)
console.log(showOnlyUsersWithRace('Black or African American'))
console.groupEnd()

// Zadanie 8.

// Zadanie 9.

// Zadanie 10.

// Zadanie 11.
const students = [
	{ name: 'Mariusz', tasksDone: 150, hoursSpent: 160 },
	{ name: 'Ewelina', tasksDone: 1, hoursSpent: 1 },
	{ name: 'Alicja', tasksDone: 100, hoursSpent: 80 },
	{ name: 'Marek', tasksDone: 200, hoursSpent: 40 },
	{ name: 'Dagmara', tasksDone: 50, hoursSpent: 100 },
]

const requirements = {
	minHoursSpent: 80,
	minTasksDone: 100,
}

// Zadanie 12.

// Zadanie 13.
const idUsers = {
	243: {
		firstName: 'Yorker',
		lastName: 'Surgey',
		email: 'ysurgey0@census.gov',
		jobTitle: 'VP Accounting',
	},
	643: {
		firstName: 'Lanny',
		lastName: 'Sollime',
		email: 'lsollime1@flavors.me',
		jobTitle: 'VP Quality Control',
	},
	765: {
		firstName: 'Cy',
		lastName: 'Vautrey',
		email: 'cvautrey2@google.cn',
		jobTitle: 'Assistant Media Planner',
	},
	17: {
		firstName: 'Alfie',
		lastName: 'Biggerstaff',
		email: 'abiggerstaff3@shop-pro.jp',
		jobTitle: 'Project Manager',
	},
	6532: {
		firstName: 'Bronnie',
		lastName: 'Murrill',
		email: 'bmurrill4@mapquest.com',
		jobTitle: 'Automation Specialist I',
	},
	11: {
		firstName: 'Isiahi',
		lastName: 'Dooman',
		email: 'idooman5@si.edu',
		jobTitle: 'Office Assistant II',
	},
	7907: {
		firstName: 'Lizbeth',
		lastName: 'Clowney',
		email: 'lclowney6@unc.edu',
		jobTitle: 'Desktop Support Technician',
	},
	144: {
		firstName: 'Lindsey',
		lastName: 'Digan',
		email: 'ldigan7@bigcartel.com',
		jobTitle: 'Technical Writer',
	},
	543: {
		firstName: 'Nelly',
		lastName: 'Durden',
		email: 'ndurden8@amazon.com',
		jobTitle: 'Software Test Engineer II',
	},
	444: {
		firstName: 'Pascal',
		lastName: 'Rosenfrucht',
		email: 'prosenfrucht9@hc360.com',
		jobTitle: 'GIS Technical Architect',
	},
}
