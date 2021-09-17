var roles= new Map([
    ['r1','user'],
    ['r2','guest'],
    ['r3','admin'],
])
for (let r of roles.entries())
console.log(`${r[0]}:${r[1]}`)
   
var mym= new Map();
mym.set("bb","cc");
console.log(mym.size);
mym.clear()
console.log(mym.size);
