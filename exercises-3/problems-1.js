/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

function isSortedAndHow(nums) {
    len = nums.length
    let count = 0
    for (i=1;i<len;i++){
        if(nums[i-1]>nums[i]){
            count+= 1
            console.log(count)
            if (count==(len - 1)){
                return "yes, descending"
            }
            
        }
        if(nums[i-1]<nums[i]){
            count+= -1
            if (count==(1-len)){
                return "yes, ascending"
            }
            
        }
    }
    if (count > (1-len) && count < (len-1)){
        return "no"
        }
}



// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow