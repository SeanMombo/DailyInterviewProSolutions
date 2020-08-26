
function numOnesBinary(num) {
    let len = 0;
    let curLen = 0;
    let loops = 0
    while (num > 0 && loops < 1000) {
        let bit = 1 & num;

        console.log(bit);
        if (bit === 1) {
            curLen ++;
        } else {
            len = Math.max(len, curLen);
            curLen = 0;
        }
        loops ++;
        num >> 1;
    }
    return len;
}

console.log(numOnesBinary(244))