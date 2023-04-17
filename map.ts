let map = new Map();
map.set("22", "Infosys");
map.set(32, "TSC");
map.set(false, "Google");
map.set("45", "Facebook");
map.set("65", "Amazon");

// console.log(map);
// console.log(map.get(false));
// console.log(map.get("65"));

let employeeMap = new Map();
employeeMap.set("Saideep", 20);
employeeMap.set("Karthik", 25);
employeeMap.set("Sumit", 21);
employeeMap.set("Sameer", 22);
employeeMap.set("Raje", 24);

for (let [item] of employeeMap) {
  console.log(`Employee Name is: ${item}`);
}

employeeMap.forEach((key) => {
  console.log(`Employee age is: ${key}`);
});

let nameMap = new Map();
nameMap.set("Anand", 1001);
nameMap.set("Bhargavi", 1002);
nameMap.set("Chrestin", 1003);
nameMap.set("Daniel", 1004);
nameMap.set("Esther", 1005);
console.log(nameMap.size);
console.log(nameMap.get("Chrestin"));
console.log(nameMap.get("Esther"));
//Iterating map keys
for (let item of nameMap.keys()) {
  console.log("Names: " + item);
}
//Iterating map values
for (let item of nameMap.values()) {
  console.log("ID: ", item);
}
//Iterating map entries
for (let item of nameMap.entries()) {
  console.log("entries: ", item[0], item[1]);
}
//Destructuring on object entries
for (let [key, value] of nameMap) {
  console.log("key value pairs: ", key, value);
}
// item Daniel will get deleted, will return 'true' as output
nameMap.delete("Daniel");
// Clear all the entries of the map
nameMap.clear();
console.log(nameMap.size);
