function shellSort(n,array,gList) {
    const g = gList.pop();
    if(g === undefined) {
        return array;
    }
    for(let i = g; i < n; i++) {
        let j = i - g;
        while(j >= 0) {
            const v = array[j + g];
            if(array[j] > v) {
                array[j + g] = array[j];
                array[j] = v;
            }
            j -= g;
        }
    }
    return shellSort(n, array, gList);
}

function solve(array) {
    const n = array.length
    const gList = createG(n)
    return shellSort(n,array,gList)
}

function createG(n) {
    let gList = [];
    for(let i = 0;;) {
        const g = 3 * i + 1;
        if(g < n){
            gList.push(g);
            i = g;
        } else {
            return gList;
        }
    }
}

const result = solve([100,200,50,40,70,389,-1000,80,30,10]);

console.log(result);
