function makeCombination(n) {
    const arr = []
    for(let i = 0; i < n; i++) {
        arr[i] = 0;
    }
    rec(0, arr)
}

function rec(i, arr) {
    if(arr.length === i) {
        console.log(arr);
        return;
    }

    rec(i + 1, arr);
    arr[i] = 1;
    rec(i + 1, arr);
    arr[i] = 0;
}

makeCombination(6)


