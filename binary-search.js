function main(target, key) {
    let left = 0;
    let right = target.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if(key === target[mid]) {
            return mid;
        } else if(key < target[mid]) {
            right = mid;
        } else if(target[mid] < key) {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(main([1,2,5,7,9,90,100], 8))
