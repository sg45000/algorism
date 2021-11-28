function solve(array) {
    const n = array.length;
    let changeCount = 0;
    let orderCount = 0;
    for(let unsortedHead = 0; unsortedHead < n - 1; unsortedHead++) {
        for(let i = n - 1; unsortedHead < i; i--) {
            const v = array[i];
            const prev = array[i-1];
            if(prev > v) {
                array[i-1] = v;
                array[i] = prev;
                changeCount += 1;
            }
            orderCount ++
        }
    }
    console.log(orderCount)
    console.log(changeCount)
    return array;
}

const result = solve([9,8,7,6,5,4,3])

console.log(result);
