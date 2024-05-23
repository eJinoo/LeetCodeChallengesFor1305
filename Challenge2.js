// 509. Fibonacci Sequence
var fib = function(n){
    if(n <= 1){
        return n;
    }
    return fib(n - 1) + fin(n - 2);
    }

// 26. Remove duplicates from sorted array
var removeDupe = function(nums){
    let n = 1;
    
    for(i = 0; i < nums.length - 1; i++){
        if (nums[i] !== nums[i + 1]){
            nums[n] = nums[i+1];
            n++;
        }
    }
}