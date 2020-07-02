
// You are given a string s, and an integer k. 
//Return the length of the longest substring in s that contains at most k distinct characters.
// For instance, given the string:
// aabcdefff and k = 3, then the longest substring with 3 distinct characters would be defff. The answer should be 5.

// Here's a starting point:
// def longest_substring_with_k_distinct_characters(s, k):
//   # Fill this in.
// print longest_substring_with_k_distinct_characters('aabcdefff', 3)
// # 5 (because 'defff' has length 5 with 3 characters)



// aabc[defff]
//[aabc] = len(4);
//[bcd] = len(3);
//[cde] = len(3);
//[def] = len(3);
//[deff] = len(4);
//[defff] = len(5);

//Initial Thoughts
//Sliding Window
//Time: O(N)
//Space: O(k): where k is the number of keys 

// return an integer, not an array. Might not have to use an array to find the answer.
// Reason to do this would be to save on space complexity

function longest_substring_with_k_distinct_characters(s, k) {
    //variables
    let maxLength = 0;
    let len = 0;
    const freq = {};

    let left = 0;
    //sliding window
    //loop
    //expand window right
    for(let right = 0; right < s.length; right++) {
        let c = s[right];
        //add char to hashmap
        if (!(c in freq)) {
            freq[c] = 0;
        } 
        freq[c]++;
        //check new max length
        len++;
        
        //if more than 3 characters in window, shrink the window from the left
        while(left < s.length && Object.keys(freq).length > k) {
            let c2 = s[left];
            freq[c2]--;
            if (freq[c2] <= 0) 
                delete freq[c2];

            left ++;
            len--;
        }
        maxLength = Math.max(maxLength, len);
    }
    return maxLength
}

const h = {'a': 2, 'b': 1, 'c': 1, 'd': 1};
console.log(longest_substring_with_k_distinct_characters('aabcdefff', 3));


