function insertionSort(arr) {
    let i;
    let j; 
 
    for (i = 1; i < arr.length; i++) {
        let current = arr[i];
        j = i - 1;
 
        // shift larger elements to the right
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
 
        arr[j + 1] = current;
    }
 
    return arr;
}
 
// Tests
console.log(insertionSort([9, 5, 1, 4, 3, 8, 2, 7, 6]));
console.log(insertionSort([1, 2, 3, 4, 5]));
console.log(insertionSort([10, 8, 6, 4, 2]));
console.log(insertionSort([4, 2, 4, 1, 2, 1]));
 
