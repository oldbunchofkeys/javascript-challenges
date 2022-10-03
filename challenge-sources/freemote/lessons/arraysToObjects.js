//array to object 1
//counter object

//can't declare the object inside the loop
const fruitCounts = {};
const fruits = ["orange", "orange", "apple", "orange", "apple", "pear"];

for (let fruit of fruits) {
  //aaron suggested printing the object at the beginning of each loop iteration if this is confusing
  console.log(fruitCounts);
  if (fruitCounts[fruit]) {
    fruitCounts[fruit]++;
  } else {
    fruitCounts[fruit] = 1;
  }
  
}
console.log(fruitCounts);

//array to object 2
const users = [
  {username: 'aaron', fullName: 'Aaron Jack', description: 'Software developer'},
  {username: 'jan', fullName: 'Jan Frey', description: 'Shopify developer'},
  {username: 'igor', fullName: 'Igor Kalishnakov', description: 'Massage therapist'}
]
const usersMap = {};
for(let user of users) {
  console.log(user.username);
  usersMap[user.username] = user;
}
console.log(usersMap);