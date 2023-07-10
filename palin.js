var number=new Promise((resolve, reject) => {
    var a=131;

    var c=a;
    var d=0,b;
    while(a>0)
    {
        b=a%10;
        d=(a*10)+b;
        n=parseInt(a/10)
    }
    if(a==c){
        resolve("palindrom")
    }
    else{
        reject("not palindrom")
    }
})
number.then(console.log)
.catch(console.log)
