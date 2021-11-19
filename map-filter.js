const nums = [5,14,12,32,14,16,17,88,78,99,4,56,47,4,11,7];

// get squire of nums array through loop

let squireNum = (nums) => {
    let numsSquire = [];
    for(let i = 0; i < nums.length; i++){
        const element =nums[i] * nums[i];
        numsSquire.push(element);
    }
    return numsSquire;
}
let result = squireNum(nums);
console.log(result)

// now do squire with map function 

let resultMap = nums.map(x => x * x) // this return an squire array through map function
console.log(result)
let resultFilter = nums.filter(x => x < 20); //this return an array less than 20 ;
console.log(resultFilter);

let resultFind = nums.find(x => x  > 50);// this return only value 
console.log(resultFind)