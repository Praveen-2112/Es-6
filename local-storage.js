localStorage.setItem("user",JSON.stringify([{
    name:"praveen",
    batch:"FED 10"
},
{
name:"murugan",
batch:"FED 11"
}])
)
var x=JSON.parse(localStorage.getItem("user"));
console.log(x);