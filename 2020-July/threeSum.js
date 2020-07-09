
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


// console.log(threeSum([0, -1, 2, -3, 1])); //[0, -1, 1], [2, -3, 1]
// console.log(threeSum([1, -2, 1, 0, 5])); //[[-2, 1, 1]]
















//initial thoughts
//brute force = find all permutations/triplets: time= O(N^3)



//sort: time complexity; O(NlogN);
//two pointer problem, with a twist: O(N^2)
// total time compl = O(N^2 + NlogN) = O(N^2);


const threeSum2 = (arr) => {
    //variables
    const triplet = new Set();
    const k = arr.length;
    let left = 0, right = k-1, sum = 0;
    //sort the arr
    arr.sort();

    //loop
    for(let i = 0; i < k-1; i++) {
        left = i+1;
        right = k-1;
        
        //while loop 
        while(left < right) {
            sum = arr[i] + arr[left] + arr[right];
            
            //check sum
            // 1) sum < 0, increase left pointer
            // 2) sum === 0, add 3 values to triplet. increase left pointer, decrease right pointer
            // 3) sum > 0, decrease right pointer
            
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                triplet.add([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            }
        } 
    }
    return [...triplet];
}

//time complexity: O(N^2);
//space complexity: O(N)

console.log(threeSum2([0, -1, 2, -3, 1])); //[0, -1, 1], [2, -3, 1]
console.log(threeSum2([1, -2, 1, 0, 5])); //[[-2, 1, 1]]

// //initial
// [0, -1, 2, -3, 1]
// //sort
// [-3, -1, 0, 1, 2]
// //loop through the array
// //two pointers (three pointer)
// [[-3], [-1], 0, 1, [2]] = sum = -3 + -1 + 2 = -2 //Too low
// [[-3], -1, [0], 1, [2]] = sum = -3 + 0 + 2 = -1 //Too low
// [[-3], -1, 0, [1], [2]] = sum = -3 + 1 + 2 = 0 //PERFECT



//cases
// 1) sum < 0, increase left pointer
// 2) sum === 0, increase left pointer, decrease right pointer
// 3) sum > 0, decrease right pointer


let x = {'foo':'bar'};
let y = {'baz': x};
let z = y['baz']['foo']

console.log(z);

function makeAdder(x) {

}

var d = 'dogccccdog';

d.split("dog").join("cat");
console.log(d)