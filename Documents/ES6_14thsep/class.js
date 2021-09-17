class polygon{
    constructor(ht,wt){
        this.h=ht;
        this.w=wt;
    }
    test(){
        console.log("ht of poly",this.h);
        console.log("wt of poly",this.w);
    }
}

var obj = new polygon(10,20)
obj.test();