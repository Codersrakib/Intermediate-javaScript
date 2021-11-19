const student = [
    {id:12,Name:"Rakib"},
    {id:5,Name:"sany"},
    {id:2,Name:"maruf"},
    {id:16,Name:"yousuf"},
    {id:22,Name:"sorif"}
];
console.log(student[0].Name)
let result = [
]
for(let i = 0; i < student.length; i++){
    const element = student[i].Name;
    console.log(element);
    result.push(element);
}
console.log(result); //[ 'Rakib', 'sany', 'maruf', 'yousuf', 'sorif' ]

let names = student.map(x => x.Name); // x is a required parameter for access length..
console.log(names) //[ 'Rakib', 'sany', 'maruf', 'yousuf', 'sorif' ]
let ids = student.map(x => x.id); // x is a required parameter for access length..
console.log(ids) //[ 12, 5, 2, 16, 22 ]
let getBigger = student.map(x => x.id > 2); // it's gives greater then 2 values true or false;
console.log(getBigger); // [ true, true, false, true, true ]
let getBiggerFilter = student.filter(x => x.id > 10);
console.log(getBiggerFilter); /*[
                                    { id: 12, Name: 'Rakib' },
                                    { id: 16, Name: 'yousuf' },
                                    { id: 22, Name: 'sorif' }
                                ]*/
let getFirstBiggerOne = student.find(x => x.id > 10);
console.log(getFirstBiggerOne); // { id: 12, Name: 'Rakib' }
    
    