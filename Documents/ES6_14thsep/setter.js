class stud{
    constructor(rno,fn,ln){
        this.rno=rno
        this.fn=fn
        this.ln=ln
    }
    set rollno(newRollno){
        console.log("inside setter");
        this.rno=newRollno
    }
}
let s1=new stud(11,'ram','nagpal')
console.log(s1);
s1.rno=10
console.log(s1);
