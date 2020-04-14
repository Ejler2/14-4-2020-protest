let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined8 = [];

for (i = 0; i < arr1.length; i++) {
  for (j = 0; j < arr2.length; j++) {
    if(arr1[i] + arr2[j] == 8) { 
      combined8.push([arr1[i], arr2[j]]);
    }
  }
}
console.log(combined8);