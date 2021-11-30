
function merge(left, right) {
    left.push(Infinity);
    right.push(Infinity);

    let i = 0;
    let j = 0;
    const result = [];
    while(i < left.length - 1 || j < right.length - 1) {
        if(left[i] <= right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    return result;
}

function mergeSort(arr) {
    const n = arr.length;
    if(arr.length === 1) {
        return arr;
    }
    const d = Math.floor(arr.length / 2);
    const left = [];
    for(let i = 0; i < d; i++) {
        left.push(arr[i]);
    }
    const sortedLeft = mergeSort(left);
    const right = [];
    for(let i = d; i < n; i++) {
        right.push(arr[i]);
    }
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

console.log(mergeSort([-4,9,8,7,6,5,4,0,11,3,2,1,0]));
