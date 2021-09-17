class shape{
    constructor(a){
        this.area=a
    }
}
class circle extends shape{
    disp(){
        console.log("A of O "+this.area);
    }
}
var obj = new circle(224)
obj.disp()