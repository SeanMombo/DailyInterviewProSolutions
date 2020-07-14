
// function findRanges(nums) {
//     let low = 0;
//     let ans = [];

//     for(let i = 0; i < nums.length-1; i++) {
//         let n1 = nums[i];
//         let n2 = nums[i+1];

//         if (n2 === n1) continue;
//         if (n2-n1 !== 1) {
//             let s = `${nums[low]}->${n1}`
//             ans.push(s);
//             low = i + 1;
//         }
//     }

//     if (low < nums.length) {
//         let s = `${nums[low]}->${nums[nums.length-1]}`
//             ans.push(s);
//     }

//     return ans;
// }

// console.log(findRanges([0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]));



function findRanges(nums) {

    let left = 0;

    for(let right = 0; right < nums.length; right++) {
        
    }
}

console.log(findRanges([0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]));