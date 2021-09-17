function userDet(key,value){
    console.log("m["+key+"]="+value);
}
var mymap=new Map();
mymap.set("id","admin");
mymap.set("pswd","1234");
mymap.forEach(userDet)