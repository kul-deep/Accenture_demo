class stud{
    constructor(rno,fn,ln){
        this.rno=rno
        this.fn=fn
        this.ln=ln
    }
    get fullname(){
        console.log("inside getter");
        return this.fn+"-"+this.ln
    }
}
let s1=new stud(11,'ram','nagpal')
console.log(s1);
console.log(s1.fullname);

