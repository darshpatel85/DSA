/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i2 = 0;
    for (let i = 0; i < nums1.length; i++) {
        if(i2 < n){
            if(nums1[i] > nums2[i2]){
                nums1 = nums1.splice(i,0,nums2[i2]);
                i2++;
            }
        }else{
            nums1[i] = nums2[i2];
            i2++;
        }
    }
    console.log(nums1);
};

merge([1,4,6,0,0],3,[2,5],2)