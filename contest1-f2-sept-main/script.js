const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  console.log('Developers:');
  developersArray.forEach(developer => console.log(developer.name));
}

// 2. Add Data
function addData() {
  const name = prompt('Enter name:');
  const age = prompt('Enter age:');
  const profession = prompt('Enter profession:');
  developersArray.push({ name, age: parseInt(age), profession });
}

// 3. Remove Admins
function removeAdmin() {
  developersArray = developersArray.filter(developer => developer.profession !== 'admin');
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: 'Doe', age: 35, profession: 'manager' },
    { name: 'Eve', age: 32, profession: 'developer' },
  ];
  const resultArray = developersArray.concat(dummyArray);
  console.log('Concatenated Array:', resultArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = developersArray.reduce((sum, developer) => sum + developer.age, 0);
  const avgAge = totalAge / developersArray.length;
  console.log('Average Age:', avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = developersArray.some(developer => developer.age > 25);
  console.log('Is there anyone above 25?', isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(developersArray.map(developer => developer.profession))];
  console.log('Unique Professions:', professions);
}

// 8. Sort by Age
function sortByAge() {
  developersArray.sort((a, b) => a.age - b.age);
  console.log('Sorted by Age:', developersArray);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = developersArray.find(developer => developer.name === 'John');
  if (john) {
    john.profession = 'manager';
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = developersArray.filter(developer => developer.profession === 'developer').length;
  const adminCount = developersArray.filter(developer => developer.profession === 'admin').length;
  console.log('Total Developers:', developerCount);
  console.log('Total Admins:', adminCount);
}
