let array1 = [1,2,3];
let array2 = [4,5,6];

let nr8combined = [];

for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
        if (array1[i] + array[j] == 8) {
            nr8combined.push([array1[i], array[j]]);
        }
    }
}
console.log(nr8combined);