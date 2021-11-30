function partition(arr) {
    const x = arr[arr.length - 1];
    let i = 0;
    for(let j = 0; j < arr.length - 1; j++) {
        if(arr[j] <= x) {
            const y = arr[i];
            arr[i] = arr[j];
            arr[j] = y;
            i++
        }
    }
    arr[arr.length - 1] = arr[i];
    arr[i] = x;
    return arr;
}

console.log(partition([5,23,5,7,9,1,1,20,31,56,6]));
