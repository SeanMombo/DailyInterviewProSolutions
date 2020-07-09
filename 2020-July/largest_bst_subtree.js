// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null; 
//     }
// };

// //recursion: time O(N);
// //           space O(LogN) / O(N) 
// const largest_bst_subtree = (root) => {
//     let maxSum = -Infinity;

//     function rec(root, minVal, maxVal) {
//         //base case
//         if (!root) return 0;

//         let left = rec(root.left);
//         let right = rec(root.right);

//         //check if left val < cur val
//         //check if right val > cur val
//         //get sum of left and right vals

//         if (root.left && root.left.val < root.val) {
            
//         } 

//         return left + right + root.val;
//     }
// }

// const n = new TreeNode(5);
// n.left = new TreeNode(6);
// n.right = new TreeNode(7);

// n.left.left = new TreeNode(2);
// n.right.left = new TreeNode(4);
// n.right.right = new TreeNode(9);

// console.log(largest_bst_subtree(n));




//Algorithm








// Time Complexity: O(N); We loop through the array only once
// Space Complexity: O(1); In place transformation of original array

function zeroesToCenter(arr) {
    let n = arr.length;
    let mid = Math.floor(n/2);

    let left = 0, right = n-1;

    //left half of the array
    for(let i = 0; i < mid; i++) {
        const num = arr[i];
        
        if (num !== 0) {
            [arr[left], arr[i]] = [arr[i], arr[left]];
            left++;
        }
    }
    
    //right half of the array
    for(let i = n-1; i >= mid; i--) {
        const num = arr[i];

        if (num !== 0) {
            [arr[right], arr[i]] = [arr[i], arr[right]];
            right--;
        }
    }

    return arr;
}


let arr = [0,1,2,0,3,4,0,5,0,1,0,0];
console.log((arr))
console.log(zeroesToCenter(arr))


//////////////////////////////////////////////////////////////////////////////////////////

//Time Complexity: O(N);
//We loop through the array twice: O(N), and use splice: O(N). This gives us O(3N) = O(N)

//Space Complexity: O(N); 
//Splice 

// function zeroesToCenter(arr) {
//     let n = arr.length;

//     let numZeroes = 0;
//     let i = 0;

//     let left = 0;
//     //count the zeros and move them to the end of the arra
//     while(i < arr.length) {
//         if (arr[i] !== 0) {
//             [arr[left], arr[i]] = [arr[i], arr[left]];
//             left++;
//             numZeroes++;
//         }
//         i++;
//     }

//     //splice off the zeros at the end of the array
//     arr.splice(n-numZeroes+1, numZeroes);

//     //add the zeroes to the middle of the array
//     while(numZeroes > 0) {
//         let mid = Math.floor(arr.length / 2);
//         arr.splice(mid, 0, 0);
//         numZeroes--;
//     }

//     return arr;
// }


// const arr2 = [0, 1, 2, 0, 3, 4, 0, 0, 5];
// console.log(zeroesToCenter(arr2));



//////////////////////////////////////////////////////////////////////////////////////////


// Solution by Sean Mombo

//// Time Complexity: O(N);
// We loop through the array: O(N), Splice has worst case: O(N)
// O(N + N) = O(2N) = O(N)

//// Space Complexity: O(N); 
// We create 2 arrays with length N/2, and then copy one of them into the other: O(1.5N) = O(N);


function zeroesToCenter2(arr) {

    let i = 0;
    let ans = [], zeroes = [];

    // filter the zero and non-zero numbers into their own arrays
    while(i < arr.length) {
        if (arr[i] === 0) {
            zeroes.push(arr[i]);
        } else {
            ans.push(arr[i]);
        }
        i++;
    }
    
    // find the midpoint of the non-zero array, and splice the into it at that location
    let mid = Math.floor(ans.length / 2);
    ans.splice(mid, 0, ...zeroes);
    return ans;
}


// const arr = [0, 1, 2, 0, 3, 4, 0, 0, 5, 0];
// console.log(zeroesToCenter2(arr));




