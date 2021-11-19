// break statements: It is used to jump out of a loop or a switch without a label reference while with label reference, it used to jump out of any code block.

// continue statements: It used to skip one loop iteration with or without a label reference.

const nums = [-45,48,45,15,-6,487-84,-887,8];

for(let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

const nums1 = [25,15,-42,45,-457,78,87,9,78,-8,-9,9];
for(let i = 0; i < nums1.length; i++){
    if(nums1[i] > 50){
        break;
    }
    console.log(nums1[i]); // its print less then 50 
}
for(let i = 0; i < nums.length; i++){
    if(nums1[i] < 0){
        continue; // it's skip to print negative value..
    }
    console.log(nums1[i]);
}