function solve([f, ...rest], t) {
    if(t === 0) {
        return true
    } else if(t > 0 && f === undefined) {
        return false
    } else if(t < 0) {
        return false
    }
    const response = solve(rest, t) || solve(rest, t - f);
    return response;
}
// 配列内の整数の組み合わせでtを作ることが可能かどうか
console.log(solve([1,2,34,2,1,9,1], 37))
