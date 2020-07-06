//only have to return true or false, so we don't have to resort the words or anything like that.
const isSorted = (words, order) => {
    const orderMap = {};
    for(let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i; //key = letter, value = index
    }
   
    //sorted alphabetically: a <= b
    for(let i = 1; i < words.length; i++) {
        let A = words[i-1];
        let B = words[i];

        let lenA = A.length;
        let lenB = B.length;

        let j = 0;
        while(j < lenA && j < lenB) {
            let charA = A[j];
            let charB = B[j];
            let ixA = orderMap[charA];
            let ixB = orderMap[charB];
            // 'a' < 'b'
            
            

            // 'a' == 'a'
            // 'b' > 'a'
            if (ixA > ixB) return false;
            j++;
        }
        // 'a' < ''    this means that if we make it to the end of lenB that we are in the right order
        if (lenA > lenB) return false;
        return true;
    }
}

console.log(isSorted(["abcd", "efgh"], "zyxwvutsrqponmlkjihgfedcba"));
console.log(isSorted(["zyxw", "zyx", "zyxwy"], "zyxwvutsrqponmlkjihgfedcba"));

