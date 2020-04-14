let tal1 = [1, 2, 3];
let tal2 = [4, 5, 6];
let naesten8 = [];

// for (i = 0; i < tal1.length; i++) {
//   for (j = 0; j < tal2.length; j++) {
//     if(tal1[i] + tal2[j] == 8) { 
//       gimig8.push([tal1[i], tal2[j]]);
//       tal1.splice(tal1[i]);
//       tal2.splice(tal2[j]);
//     } else if (tal1[i] + tal2[j] == 7) {
//         gimig8.push([tal1[i], tal2[j]]);
//         tal1.splice(tal1[i]);
//         tal2.splice(tal2[j]);
//     } else if (tal1[i] + tal2[j] == 9) {
//         gimig8.push([tal1[i], tal2[j]]);
//         tal1.splice(tal1[i]);
//         tal2.splice(tal2[j]);
//     }
//   }
// }
// console.log(gimig8);


function Closeto8 (tal, array1, array2) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array2.length; j++) {
          if(array1[i] + array2[j] == tal) 
          {
            naesten8.push([[array1[i]], [array1[i]]]);
          }
        } 
    }   
}  
Closeto8 (8, tal1, tal2);
console.log(naesten8);