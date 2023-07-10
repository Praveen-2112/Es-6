// var x={
//     num:4
// }
// var y={
//     hi:function(a,b){
//         console.log(this.num,a,b);
//     }
// }
// y.hi.call(x,"praveen","murugan");

// var x={
//     name:4
// }
// var y={
//     hi:function(){
//         console.log(this.name);
//     }
// }
// y.hi.apply(x)


// var x={
//     num:4
// }
// var y={
//     id:function(a,b){
//         console.log(this.num,a,b);
//     }
// }
// y.id.apply(x,["hi","I am apply"]);


var x={
    num:4
}
var y={
    id:function(a,b){
        console.log(this.num,a,b);
    }
}
var a=y.id.bind(x,["hi","I am bind"]);
a();