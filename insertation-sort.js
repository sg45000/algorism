function solve(array) {
    const n = array.length;
    for(let i = 1; i < n; i++) {
        const v = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > v){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = v;
    }
    return array;
}

const result = solve([1,4,6,2,1,3,9,3]);

console.log(result)
