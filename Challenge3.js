// 88. Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1
    
     while(j >= 0){
      if(i >= 0 && nums1[i] > nums2[j]){
        nums1[k--] = nums1[i--]
      }else {
        nums1[k--] = nums2[j--]
      }
    }
  };

// 912. Sort An Array

function mergeSortedArray(left,right,arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while(i<left.length && j<right.length) {
        if(left[i] <= right[j]) {
            arr[k] = left[i];
            i++
        }
        else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while(j < right.length) {
        arr[k] = right[j];
        j++;
        k++
    }

    while(i < left.length) {
        arr[k] = left[i];
        k++;
        i++;
    }

    return arr;
}

var sortArray = function(arr) {
    if(arr.length === 1) {
        return arr
    }
    let mid = Math.round(arr.length/2);
    if(arr.length < 2) {
        return;
    }
    let left = [];
    let right = [];
    for(let i=0;i<mid;i++) {
        left.push(arr[i]);
    }

    for(let j = mid;j<arr.length;j++) {
        right.push(arr[j]);
    }

    sortArray(left);
    sortArray(right);
    mergeSortedArray(left,right,arr);

    return arr;
};