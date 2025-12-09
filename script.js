let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = "";
let row = [];
let csvArray = [];

for (let i = 0; i < csvData.length; i++) {
   // console.log("csvData[i]: ", csvData[i]);
   // console.log("Cell: ", cell);
   if (csvData[i] === ','){ // check if the value of  csvData at index i is equal to the chracter ','
      row.push(cell);
      // console.log("Row: ", row);
      cell = "";
   } 
   else if (csvData[i] === '\n' || i == csvData.length-1){
      row.push(cell);
      csvArray.push(row);
      row = [];
      cell = "";
   } else {
      cell += csvData[i];   // add the value of csvData at index i 
   }
}

console.log(csvArray);


