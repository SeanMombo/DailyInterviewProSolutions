
//In a single pass; sort the numbers into the order 0, 1, 2,
const sortColors = (nums) => {
    let low = 0; let high = nums.length-1;
    let i = 0;
    
    while(i <= high) {
        if (nums[i] === 0) {
            [nums[low], nums[i]] = [nums[i], nums[low]];
            i++;
            low++;
        } else if (nums[i] === 1) {
            i++;
        } else if (nums[i] === 2) {
            [nums[i], nums[high]] = [nums[high], nums[i]];
            high--;
        }
    }
    return nums;
}

console.log(sortColors([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]));

