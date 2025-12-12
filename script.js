let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = "";
let row = [];
let saveRow;
let csvArray = [];
let columns = 0;

for (let i = 0; i < csvData.length; i++) {
    if (csvData[i] === ',') { // check if the value of  csvData at index i is equal to the chracter ','
      row.push(cell);
      cell = "";
   }
   else if (csvData[i] === '\n' || i == csvData.length - 1) {
      if (i == csvData.length - 1) {
         cell += csvData[i];
      }
      row.push(cell);
      csvArray.push(row);
      row = [];
      cell = "";
   } else {
      cell += csvData[i];   // add the value of csvData at index i
   }

}

console.log(csvArray);


// Part 3

// // For each row of data in the result array produced by your code above, 
// create an object where the key of each value is the heading for that value’s column.
// // Convert these keys to all lowercase letters for consistency.
// // Store these objects in an array, in the order that they were originally listed.
// // Since the heading for each column will be stored in the object keys, 
// you do not need to create an object for the heading row itself.


let newArray = [];
let csvKeys = [];

for (let i = 1; i < csvArray.length; i++) {
   let csvObject = {};
   for (let x = 0; x < csvArray[i].length; x++) {
      csvKeys.push(String(csvArray[0][x]).toLowerCase());
      csvObject[csvKeys[x]] = csvArray[i][x];
   }
   newArray.push(csvObject);
}

console.log(newArray);


// Part 4

// // Remove the last element from the sorted array.
newArray.pop();
console.log(newArray);

// // Insert the following object at index 1:
// // // { id: "48", name: "Barry", occupation: "Runner", age: "25" }
newArray.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" } )
console.log(newArray);

// // Add the following object to the end of the array:
// // // { id: "7", name: "Bilbo", occupation: "None", age: "111" }
newArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(newArray);


// Finally, use the values of each object within the array and the array’s length property 
// to calculate the average age of the group. This calculation should be accomplished using a loop.
let totalAges = 0;
for (let i = 0; i < newArray.length; i++){
   totalAges += parseInt(newArray[i].age);
}
let average = totalAges/newArray.length;
console.log(average); // should output 50.8


// Part 5

// // Transform the final set of data back into CSV format.

let newData = ``;

for (let i = 0; i < newArray .length; i++){
   if(i === 0){
      newData += Object.keys(newArray[i])  + ",";
      newData += "\n";
   } else{
      newData += Object.values(newArray[i]) + ",";
      newData += "\n";
   }
}

console.log(newData);



