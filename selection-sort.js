function solve(array) {
    const n = array.length;
    for(let unsortHead = 0; unsortHead < n; unsortHead++) {
        let minIndex = unsortHead;
        for(let searchMinHead = unsortHead + 1; searchMinHead < n; searchMinHead++) {
            if(array[minIndex] > array[searchMinHead]) {
                minIndex = searchMinHead;
            }
        }
        if(unsortHead !== minIndex) {
            const v = array[minIndex]; array[minIndex] = array[unsortHead]; array[unsortHead] = v;
        }
    }
    return array
}

const result = solve([9,8,7,6,5,4,2,0,4,3,2,1]);
console.log(result);
