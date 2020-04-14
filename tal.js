// Lavet af Noah E Hansen

let tal1 = [1, 2, 3];
let tal2 = [4, 5, 6];
let naesten8 = [];
let naesten7 = [];
let naesten9 = [];

function CloseToOr8 (Number, array1, array2) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array2.length; j++) {
            if(array1[i] + array2[j] == Number) { 
                gimig8.push([array1[i], array2[j]]);
            } else if (array1[i] + array2[j] == Number-1) {
                gimig7.push([array1[i], array2[j]]);
            } else if (array1[i] + array2[j] == Number+1) {
                gimig9.push([array1[i], array2[j]]);
            }
    } 
console.log(gimig7);
console.log(gimig8);
console.log(gimig9);
}
CloseToOr8 (8, tal1, tal2);




// function Closeto8 (tal, array1, array2) {
//     for (i = 0; i < array1.length; i++) {
//         for (j = 0; j < array2.length; j++) {
//           if(array1[i] + array2[j] == tal) 
//           {
//             naesten8.push([[array1[i]], [array1[i]]]);
//           }
//         } 
//     }   
// }  
// Closeto8 (8, tal1, tal2);
// console.log(naesten8);