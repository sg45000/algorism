

function partition(arr) {
    const x = arr[arr.length - 1];
    let i = 0;
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] <= x) {
            const y = arr[i];
            arr[i] = arr[j];
            arr[j] = y;
            i++;
        }
    }
    arr[arr.length - 1] = arr[i];
    arr[i] = x;
    return [arr, i];
}

function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    const [sortedArr, q] = partition(arr);

    const left = [];
    for(let i = 0; i < q; i++) {
        left.push(sortedArr[i]);
    }
    const sortedLeft = quickSort(left)
    const right = [];
    for(let i = q; i < arr.length; i++) {
        right.push(sortedArr[i]);
    }
    const sortedRight = quickSort(right);
    return [...sortedLeft, ...sortedRight]
}

console.log(quickSort([2,3,-7,2,10,21,43,68,45,9,-28,43]))
