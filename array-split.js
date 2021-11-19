let nationalSong = 'Amar Sonar Bangla Ami Tamay Valo Basi';
let nationalSplit = nationalSong.split(' ');
console.log(nationalSplit); //(7) ['Amar', 'Sonar', 'Bangla', 'Ami', 'Tamay', 'Valo', 'Basi']
let nationalReverse = nationalSplit.reverse();
console.log(nationalReverse); // (7) ['Basi', 'Valo', 'Tamay', 'Ami', 'Bangla', 'Sonar', 'Amar']
let nums = [12,45,57,63,23,22,1,45,14,87,5,3,212,45];

let numsJoin = nums.join();
console.log(numsJoin); //12,45,57,63,23,22,1,45,14,87,5,3,212,45
numsJoin = nums.join(' '); 
console.log(numsJoin); // 12 45 57 63 23 22 1 45 14 87 5 3 212 45
numsJoin = nums.join('');
console.log(numsJoin); // 12455763232214514875321245
numsJoin = nums.join('.');
console.log(numsJoin); // 12.45.57.63.23.22.1.45.14.87.5.3.212.45
numsJoin = nums.join('/');
console.log(numsJoin); // 12/45/57/63/23/22/1/45/14/87/5/3/212/45

let numsSlise = nums.slice(2,5);
console.log(numsSlise) // [ 57, 63, 23 ];

// splice will remove others indx from declared array..
let numsSplice = nums.splice(4,9);
console.log(numsSplice) // [23, 22, 1, 45, 14, 87, 5, 3, 212]
console.log(nums); // [12, 45, 57, 63, 45] now nums array like this...