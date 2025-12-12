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




