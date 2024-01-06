//Rotate one by one 

// Array Rotations
 function rotateArray(arr , d,  n ){
    for (let i= 0; i< d; i++){
        const first = arr.shift();
        arr.push(first);

    }
 }
 
 function printArray(arr){
    console.log(arr.join(' '));
 }

const arr = [1,2,4,6,9,5]
const  n = arr.length;
const d = 2;
rotateArray(arr, d ,n );
printArray(arr);

