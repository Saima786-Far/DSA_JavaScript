// Write a program to reverse an array or string
function reverseArray (arr, start, end){
    while (start< end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;

    }
}
function printArray(arr , size){
    for(var i=0; i<size; i++)
    {
        console.log(arr[i]);
    }
}

let arr = [1,3,8,4,8,9];
let n =6;
printArray(arr , n);
reverseArray(arr, 0, n-1);
console.log("Reversed Array");
printArray(arr,n);

// Time Complexity: O(n)
// Auxiliary Space: O(1)

