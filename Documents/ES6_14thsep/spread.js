function add(a,b,c){
    return a+b+c;
}
const arr=[10,20,30]
console.log('sum is:',add(...arr));
console.log('sum is:',add(...[1,2,3]));
let stu1={firstName:"name1",dept:'EEE'}

let stu2={...stu1}

console.log(stu2)



let stu3={lastName:"name2"}

let stu4={...stu1,...stu3}

console.log(stu4)