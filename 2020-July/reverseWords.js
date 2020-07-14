const reverseWords = (str) => {

    let words = str.split(' ');
    let ans = [];
    for (word of words) {
        let len = word.length;
        let rev = '';

        for (let i = len-1; i >= 0; i--) {
            rev += word[i]
        }
        
        ans.push(rev);
    }
    return ans.join(' ');
}

console.log(reverseWords("The cat in the hat"));


const reverseWords2 = (str) => {
    
    let i = 0;
    let n = str.length;
    let rev = [];
    let ans = [];
    while (i < n) {
        let c = str[i];

        if (c !== " ") {
            rev.unshift(c);
        } else {
            ans.push(rev.join(''));
            rev = [];
        }
        i++;
        
    }
    if (rev.length != 0) {
        ans.push(rev.join(''));
    }
    return ans.join(' ');
}
console.log(reverseWords2("The cat in the hat"));