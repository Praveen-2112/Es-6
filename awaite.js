
function a(){
return new Promise((x,y)=>{
setTimeout(()=>{
y("I am praveen")
},3000)
})
}


function b(){
return new Promise((d,e)=>{
setTimeout(()=>{
d("I am murugan")
},1000)
})
}

async function z(){
try{
let f=await a();
let g=await b();
console.log(f,g);

}
catch{
let g=await b();
console.log(g)
}
}
z();