
//1st idea) 
//brute force, check all pairs of 3
//use hashmap to track visited pairs

//2nd idea)  sort: O(NlogN) time
[ 0, -1,  2, -3,  1]
[-3, -1,  0,  1,  2]

//-3, -1, 2 = -2 too low
//-3, 0, 2 = -1 too low
//-3, 1, 2 = 0 Perfect

//-1, 0, 2 = 1 too high
//-1, 0, 1 = 0 Perfect

//three pointer solution



const threeSum = (arr) => {
    const triplets = new Set();
    let left = 0;
    let right = arr.length-1;
    let sum = 0;

    arr.sort();
    for(let i = 0; i < arr.length-1; i++) {
        left = i+1;
        right = arr.length-1;

        while(left < right) {
            sum = arr[i] + arr[left] + arr[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
                right--;
                triplets.add([arr[i], arr[left], arr[right]]);
            }
        }
    }
    return [...triplets]
}


console.log(threeSum([0, -1, 2, -3, 1])); //[0, -1, 1], [2, -3, 1]
console.log(threeSum([1, -2, 1, 0, 5])); //[[-2, 1, 1]]

